import { Typography } from '@mui/material'
import useStyles from './styles'

function Header() {
   const styles = useStyles()

   return (
      <>
         <Typography className={styles.heading}>Khái quát tác giả văn học 12</Typography>
         <Typography className={styles.subHeading}>12/3 - THPT Mang Thít</Typography>
      </>
   )
}

export default Header
