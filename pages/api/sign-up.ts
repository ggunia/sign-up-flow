import type { NextApiRequest, NextApiResponse } from 'next'
import { promisify } from 'util'
import fs from 'fs'
import stream from 'stream'
import formidable from 'formidable'

export const config = {
  api: {
    bodyParser: false
  },
}

const pipeline = promisify(stream.pipeline);

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(200).json({ message: 'ok' })
    return
  }

  const form = formidable({})
  form.parse(req, async (error, { data }, { file }) => {
    if (error) {
      res.status(error.httpCode || 400).json({ error })
      return;
    }

    const body = JSON.parse(data as string)

    res.status(200).json({ ...body, file })
  })
}
