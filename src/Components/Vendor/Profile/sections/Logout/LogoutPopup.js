import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Logo from '../../../../../Images/Logo.png';
import Logout from '../../../../../Images/PopImages/Logout.png';
import { fontWeight, width } from '@material-ui/system';
import Insta from '../../../../../Images/Instagram.png';
import Twitter from '../../../../../Images/Twitter.png';
import Fb from '../../../../../Images/Facebook.png';

import './LogoutPopup.css';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width:"560px",
    overflow:"visible",
    background:"#121417",
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),


    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    width:"560px",
    background:"#121417",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({open,setOpen}) {
 
  

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
       <DialogTitle onClose={handleClose}>
        <img src={Logo} alt="logo" height="120px" width="400px" />
        </DialogTitle>
        <DialogContent style={{margin:"auto",textAlign:'center'}}>
            <img src={Logout} width="133px" style={{display:"block",margin:"auto"}}/>
            <p style={{color:"#FFB600",fontFamily:"Montserrat" ,fontSize:"35px",fontWeight:"bold"}}>Sure, you want to logout?</p>
            <p style={{color:"#FFB600",fontSize:'20px', marginTop:'-30px'}}>All your data is saved</p>
        </DialogContent>
        <div className="ButtonContainer">

          <button className="ButtonLogout" >
            Logout      
         </button>
          <br/>
         <button className="ButtonCancel">
            Cancel
         </button>
        </div>
        <div className="SocialLogo">
          <a href="#" ><img src={Fb} /></a>
          <a href="#"><img src={Insta} /></a>
          <a href="#"><img src={Twitter} /></a>
        </div>
      </Dialog>
   </div>
  );
}