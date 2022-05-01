import { Box, CssBaseline } from '@mui/material'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import routes from './routes'

function App() {
   return (
      <Router>
         <CssBaseline />
         <Box>
            <Switch>{routes}</Switch>
         </Box>

         <Footer />
      </Router>
   )
}

export default App
