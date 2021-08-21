import React , {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./Styles.css"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useHistory} from "react-router-dom";
function Tiling({notify,setModalOpen,newService,setNewService,AddService,handleClickOpen}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [userId,setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
  const history = useHistory()
  const handleadd =()=>{
        if(userId === undefined)
        {
            // alert('Please Login');
            history.push('/auth-user')
        }
        else
        {
            if( newService?.info?.length===0)
            {
                notify('Request cannot be empty!')
            }
            else
            {
              AddService();
              handleClickOpen();
            }
            
        }
}
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? 'simple-popover' : undefined;

  const types = ["Cementitious sself","Leveling compound","Floor hardener","Acrylic sealant","Silicone sealant","Latex sealant","Butyl sealant"]
  const [typecheck,setTypeCheck] = useState({
    0 : false,
    1 : false,
    2 : false,
    3 : false,
    4 : false,
    5 : false,
    6 : false,
  
      
  })
  const brands = ["Asian paints","DULUX","Fevicol","Dr.Fixit","MYK LATICRETE","Saint-Gobain Weber","Fosroc India","BASF India"]
  const [brandcheck , setBrandCheck] = useState({
    0 : false,
    1 : false,
    2 : false,
    3 : false,
    4 : false,
    5 : false,
    6 : false,
    7 : false,
  })
      const [selectAll,setSelectAll] = useState(false)
  const [selectAll0,setSelectAll0] = useState(false)
  useEffect(() => {      
    setTypeCheck({...typecheck , [0] : selectAll,[1] : selectAll,[2] : selectAll,[3] : selectAll,[4] : selectAll,[5] : selectAll,[6] : selectAll})      
  },[selectAll])

useEffect(() => {      
    setBrandCheck({...brandcheck , [0] : selectAll0,[1] : selectAll0,[2] : selectAll0,[3] : selectAll0 , [4] : selectAll0,[5] : selectAll0,[6] : selectAll0,[7] : selectAll0})      
  },[selectAll0])

    useEffect(() => {
    let brandtemp=[]
    let typetemp=[]
    let final_arr = []
  
  brands.map((brand,index)=>{
    if(brandcheck[index]){
        brandtemp.push(brand)
    
    }
  })
  types.map((type,index)=>{
    if(typecheck[index]){
        typetemp.push(type)
    }  
  })
  typetemp.map((type) => {
    brandtemp.map((brand) => {
      let final_dict = {type:type , brand: brand}
        final_arr.push(final_dict)
    })
  })
  setNewService({...newService , info:final_arr , type:"Tiling"})
},[typecheck,brandcheck])
  

    return (
        <div style={{width:"100%",display:"flex",height:"100%",flexDirection:"column"}}>
            <div className="admixture-form">
                <Button aria-describedby={id} variant="contained" className="admixture-form-input" style={{backgroundColor:"#08090C",width:"15rem",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px"}} onClick={handleClick}>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                            <p style={{color:"white",textTransform:"capitalize"}}>Types</p>
                            <ArrowDropDownIcon style={{color:"#ffb600"}}/>
                        </div>
                </Button>
                <Button aria-describedby={id1} variant="contained" className="admixture-form-input" style={{backgroundColor:"#08090C",width:"15rem",boxShadow:"-4px -4px 15px rgba(232, 237, 243, 0.05), 10px 4px 15px rgba(2, 3, 3, 0.2)", borderRadius:"10px",marginLeft:"2%"}} onClick={handleClick1}>
                        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
                            <p style={{color:"white",textTransform:"capitalize"}}>Brands</p>
                            <ArrowDropDownIcon style={{color:"#ffb600"}}/>
                        </div>
                </Button>
            
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <div style={{display:"flex",flexDirection:"column",fontSize:"1rem"}}>
                                    <FormControlLabel
                                control={
                                        
                                        <Checkbox
                                            
                                            checked={selectAll}
                                            onChange={(e) => setSelectAll(e.target.checked)}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                                        />
                                        }
                                label="Select All"
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor:"#08090C",
                                    color:"white",
                                    height: "45%"
                                }}
                                        />
          
              {
                  types.map((type,index) => (
                        <FormControlLabel
                                control={
                                        <Checkbox
                                            
                                            checked={typecheck[index]}
                                            onChange={(e) => setTypeCheck({...typecheck , [index] : e.target.checked})}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                                        />
                                        }
                                label={type}
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor:"#08090C",
                                    color:"white",
                                    height: "45%"
                                }}
                        />
                  ))
              }
          </div>
        
      </Popover>
      <Popover
        id={id1}
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleClose1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <div style={{display:"flex",flexDirection:"column"}}>
                                    <FormControlLabel
                                control={
                                        
                                        <Checkbox
                                            
                                            checked={selectAll0}
                                            onChange={(e) => setSelectAll0(e.target.checked)}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                                        />
                                        }
                                label="Select All"
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor:"#08090C",
                                    color:"white",
                                    height: "45%"
                                }}
                                        />

          
              {
                  brands.map((size,index) => (
                        <FormControlLabel
                                control={
                                        <Checkbox
                                            checked={brandcheck[index]}
                                            onChange={(e) => setBrandCheck({...brandcheck , [index]: e.target.checked})}
                                            color="primary"
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" style={{border:"1px solid white"}}/>}
                                            checkedIcon={<CheckBoxIcon fontSize="small" style={{border:"1px solid white"}}/>}

                                        />
                                        }
                                label={size}
                                style={{
                                    width: "15rem",
                                    padding: "4%",
                                    backgroundColor:"#08090C",
                                    color:"white",
                                    height: "45%"
                                }}
                        />
                  ))
              }
          </div>
      </Popover>
      </div>
      <div className="admixture-bottom-buttons" style={{width: "20%",height: "45%"}}>
                <Button variant="contained" className="admixture-cart-button" style={{height:"80%",marginTop:"10%",backgroundColor: "#ffb600"}} onClick={handleadd}>
                Add
                </Button>
        </div>
    </div>
    )
}

export default Tiling
