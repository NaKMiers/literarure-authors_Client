import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   footer: {
      '&.MuiBox-root': {
         position: 'relative',
         height: 30,
         margin: 'auto',
         textAlign: 'center',
         marginTop: 200,
         background: '#333',
         zIndex: 1,
      },
   },
   text: {
      fontSize: 12,
      lineHeight: '30px',
      color: '#ddd',
   },
   link: {
      color: '#2196f3',
   },

   adminBox: {
      display: 'flex',
      alignItems: 'center',
      marginRight: 8,
      position: 'absolute',
      top: 0,
      right: 0,
      height: 30,
   },

   showIcon: {
      '&.MuiSvgIcon-root': {
         color: '#ddd',
         fontSize: 13,
         lineHeight: '30px',
         '&:hover': {
            opacity: 0.5,
         },
         cursor: 'pointer',
      },
   },
   input: {
      height: 20,
      outline: 'none',
      padding: '0px 4px',
      width: 100,
   },
   error: {
      color: '#f44336',
      fontSize: 12,
      marginRight: 8,
   },
}))
