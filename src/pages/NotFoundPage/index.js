import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useStyles from '../HomePage/styles'

function NotFoundPage() {
   const styles = useStyles()

   return (
      <Box className={styles.notFoundPage}>
         <Typography className={styles.heading}>
            Page Not Found
            <Link to='/' className={styles.link}>
               return home
            </Link>
         </Typography>
      </Box>
   )
}

export default NotFoundPage
