import './App.css'
import { Box, Button, Container, Paper, Typography } from '@mui/material'

const serviceList = ["Service 1", "Service 2", "Service 3"]

function App() {
  return (
    <>
      <Container>
        <Typography variant="h1" sx={{ my: 4, textAlign: "center", color: "primary.main" }}>Hello world!</Typography>
        <Typography variant="h2">Overview</Typography>
        <Box sx={{ pt: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 4 }}>
          {serviceList.map((service) => (
            <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }} key={service}>
              <Box sx={{ m: 3 }}>
                <Typography variant="h3">{service}</Typography>
                <Typography sx={{ mt: 2 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut vel nemo molestiae velit cupiditate numquam maxime ex nesciunt laboriosam adipisci excepturi dignissimos odio magni id aspernatur, accusantium dicta vitae quae?
                </Typography>
                <Button variant="contained" color="secondary" sx={{mt: 2}}>LEARN MORE</Button>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </>
  )
}

export default App
