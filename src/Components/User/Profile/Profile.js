import React, { useEffect, useState } from "react";
import { Row, Column } from "../Styled/Styled";

import SideMenu from "./sections/SideMenu";

import PersonalDetails from "./sections/PersonalDetails";
import CompanyDetails from "./sections/CompanyDetails";
import AddressDetails from "./sections/AddressDetails";
import Feedback from "./sections/Feedback";
import AboutUs from "./sections/AboutUs";
import Help from "./sections/Help";
import axios from "axios"
import AddressBook from "./sections/AddressBook";
import EditAddress from "./sections/EditAddress";
import AddNewAddress from "./sections/AddNewAddress";
import PopupSaved from  "../../Popup/popupsaved/PopupSaved"
import "./sections/Profile.css" 

const Profile = ({toabout , setToabout,formData,setFormData , getUser , site , getSite,setSite , currentSection , setCurrentSection}) => {

    
    const [siteNo,setSiteNo]=useState(0)
    const [filled,setFilled] = useState({address:0 , company: 0 , personal:0})
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    

    useEffect(() =>{
        if(toabout)
        {
            setToabout(false)
        }
    },[toabout])
    

    

    const handleChange = (i) => {
        setCurrentSection(i);
    };
    return (
        <Row
            // style={{
            //     justifyContent: "center",
            //     margin: "1rem auto",
            // }}
            className="main-row"
        >
            <SideMenu current={currentSection} function={handleChange} filled={filled}/>
            <Column
                // style={{
                //     width: "70%",
                //     padding: ".5rem 2.5rem",
                //     borderRadius: "4px",
                //     backgroundColor: "#08090C",
                // }}
                className="main-content"
            >
                {currentSection === 0 && <PersonalDetails  formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen}/>}
                {currentSection === 1 && <CompanyDetails formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen}/>}
                {currentSection === 2 && <AddressDetails formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen}/>}
                {currentSection === 3 && <Feedback formData={formData} setFormData={setFormData} getUser={getUser} handleClickOpen={handleClickOpen}/>}
                {currentSection === 4 && <AboutUs />}
                {currentSection === 5 && <Help />}
                {currentSection === 7 && <AddressBook setCurrentSection={setCurrentSection} site={site} setSiteNo={setSiteNo}/>}
                {currentSection === 8 && <EditAddress setCurrentSection={setCurrentSection} site={site} siteNo={siteNo} setSite={setSite} getSite={getSite} handleClickOpen={handleClickOpen}/>}
                {currentSection === 9 && <AddNewAddress setCurrentSection={setCurrentSection} formData={formData} setFormData={setFormData} getUser={getUser} getSite={getSite} handleClickOpen={handleClickOpen}/>}
            </Column>
            <PopupSaved title="Saved" handleClickOpen={handleClickOpen} open={open} setOpen={setOpen}/>
        </Row>        
    );
};

export default Profile;
