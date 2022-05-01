import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
   '@global': {
      '*::-webkit-scrollbar': {
         width: 0,
         height: 0,
      },
   },
   item: {
      position: 'relative',
      minHeight: 100,
      marginBottom: 64,
   },
   orderNumber: {
      position: 'absolute',
      top: 0,
      display: 'inline-block',
      background: '#f44336',
      borderRadius: '50%',
      textAlign: 'center',
      lineHeight: '88px',
      height: 100,
      width: 100,
      color: '#fff',
      fontSize: 24,
      border: '6px solid #fff',
      zIndex: 1,
   },
   orderNumberLeft: {
      left: 0,
   },
   orderNumberRight: {
      right: 0,
   },
   topLeft: {
      marginLeft: 50,
   },
   topRight: {
      marginRight: 50,
   },
   productName: {
      display: 'inline-block',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      height: 40,
      lineHeight: '40px',
      background: '#2196f3',
      borderRadius: 16,
      padding: '0px 36px 0px 76px',
      color: '#fff',
      fontSize: 24,
      letterSpacing: '1px',
   },
   productNameRight: {
      float: 'right',
      padding: '0px 76px 0px 36px',
      textAlign: 'right',
   },

   author: {
      position: 'relative',
      display: 'inline-block',
      whiteSpace: 'nowrap',
      maxWidth: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      height: 40,
      lineHeight: '40px',
      background: '#ffeb3b',
      borderRadius: 16,
      padding: '0px 36px 0px 76px',
      color: '#333',
      fontSize: 20,
      letterSpacing: '1px',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
         background: 'rgba(255,235,59, 0.5)',
      },
   },
   authorRight: {
      float: 'right',
      padding: '0px 76px 0px 36px',
      textAlign: 'right',
   },
   authorAvtive: {
      width: '100% !important',
   },
   expandIcon: {
      '&.MuiSvgIcon-root': {
         position: 'absolute',
         top: 20,
         right: 12,
         transform: 'translate(0%, -50%)',
         marginLeft: 26,
         cursor: 'pointer',
         transition: 'all 0.2s',
         '&:hover': {
            transform: 'scale(1.2) translate(0%, -50%)',
            top: 22,
            opacity: 0.8,
         },
      },
   },
   expandIconAvtive: {
      '&.MuiSvgIcon-root': {
         top: 8,
         transform: 'rotate(180deg)',
         transition: 'all 0.2s ease-in-out',
         '&:hover': {
            transform: 'scale(1.2) translate(0%, -50%) rotate(180deg)',
         },
      },
   },
   collapse: {
      position: 'relative',
      background: '#ffe3b3',
      padding: '8px 52px',
      borderRadius: 16,
      marginTop: 6,
      '&.MuiCollapse-root': {
         overflow: 'scroll',
         maxHeight: 350,
      },
   },
   collapseRight: {
      marginTop: 48,
   },
   editBtn: {
      '&.MuiButton-root': {
         position: 'absolute',
         top: 0,
         borderTopRightRadius: 16,
         padding: '4px 4px',
         background: '#2196f3',
         minWidth: 0,
      },
   },
   editBtnLeft: {
      right: 0,
   },
   editBtnRight: {
      left: 0,
      transform: 'rotate(-90deg)',
   },
   editIcon: {
      '&.MuiSvgIcon-root': {
         color: '#fff',
         fontSize: 24,
      },
   },

   saveBtn: {
      '&.MuiButton-root': {
         position: 'absolute',
         top: 0,
         padding: '4px 4px',
         background: 'lightgreen',
         minWidth: 0,
      },
   },
   saveBtnLeft: {
      '&.MuiButton-root': {
         right: 0,
         borderTopRightRadius: 16,
      },
   },
   saveBtnRight: {
      '&.MuiButton-root': {
         borderTopLeftRadius: 16,
         left: 0,
      },
   },
   saveIcon: {
      '&.MuiSvgIcon-root': {
         color: '#4caf50',
         fontSize: 24,
      },
   },

   cancelBtn: {
      '&.MuiButton-root': {
         position: 'absolute',
         top: 36,
         padding: '4px 4px',
         background: '#ccc',
         minWidth: 0,
      },
   },
   cancelBtnLeft: {
      borderBottomLeftRadius: 16,
      right: 0,
   },
   cancelBtnRight: {
      left: 0,
      borderBottomRightRadius: 16,
   },
   cancelIcon: {
      '&.MuiSvgIcon-root': {
         color: '#fff',
         fontSize: 24,
      },
   },

   editArea: {
      border: 'none',
      outline: 'none',
      width: '100%',
      fontSize: 18,
      padding: '8px 16px',
      marginTop: 6,
   },
}))
