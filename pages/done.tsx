import { Container } from "@mui/system"
import { Typography } from "@mui/material"

const Done = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant='h5' marginTop={5}>
        Registration complete!
      </Typography>

      <Typography
        variant='body2'
        marginBottom={3}
        marginTop={0.5}
        color="grey"
      >
        Please sign in and enjoy using the platform.
      </Typography>
    </Container>
  )
}

export default Done
