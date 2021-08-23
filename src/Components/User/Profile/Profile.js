import React, { useEffect, useState } from "react";
import { Row, Column } from "../Styled/Styled";

import ProfileNav from "./sections/ProfileNav";

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
import PopupSaved from "../../Popup/popupsaved/PopupSaved"
import "./sections/Profile.css"

const Profile = ({ toabout, setToabout, formData, setFormData, getUser, site, getSite, setSite, currentSection, setCurrentSection }) => {


    const [siteNo, setSiteNo] = useState(0)
    const [filled, setFilled] = useState({ address: 0, company: 0, personal: 0 })
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        if (toabout) {
            setToabout(false)
        }
    }, [toabout])

    const handleChange = (i) => {
        setCurrentSection(i);
    };
    return (
        <>
            <div className='breadcrumbsuser'>
                <h3 style={{ margin: 0 }}>
                    Home / {" "}
                    <span style={{ color: "#FFB600" }}>Profile</span>
                </h3>
            </div>
            <ProfileNav formData={formData} current={currentSection} function={handleChange} filled={filled} />
            <div className="profile_sections" >
                <Row >
                    <div className="profile_button">
                        {/* <div className="profile_button1"> */}
                        <div className="profile_button_nav">
                            <div className="profile_button_nav1">
                                <button
                                    style={
                                        currentSection === 0
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }
                                            : {}
                                    } onClick={() => setCurrentSection(0)}

                                >personal details</button>
                                <button
                                    style={
                                        currentSection === 1
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }
                                            : {}
                                    } onClick={() => setCurrentSection(1)}>company details</button>
                                <button
                                    style={
                                        currentSection === 2
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }
                                            : {}
                                    } onClick={() => setCurrentSection(2)}>company adderess</button>
                                <button
                                    style={
                                        currentSection === 7
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }
                                            : {}
                                    } onClick={() => setCurrentSection(7)}>Address Book</button>
                            </div>
                            <div className="profile_button_nav2">
                                <button
                                    style={
                                        currentSection === 3
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }
                                            : {}
                                    } onClick={() => setCurrentSection(3)}>feedback</button>
                                <button
                                    style={
                                        currentSection === 5
                                            ? {
                                                color: "#ffb600",
                                                borderStyle: "none",
                                            }
                                            : {}
                                    } onClick={() => setCurrentSection(5)}>help</button>
                            </div>
                        </div>

                    </div>

                </Row>
                <Row>
                    <Column className="main_content" >
                        {currentSection === 0 && <PersonalDetails formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen} />}
                        {currentSection === 1 && <CompanyDetails formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen} />}
                        {currentSection === 2 && <AddressDetails formData={formData} setFormData={setFormData} getUser={getUser} filled={filled} setFilled={setFilled} handleClickOpen={handleClickOpen} />}
                        {currentSection === 3 && <Feedback formData={formData} setFormData={setFormData} getUser={getUser} handleClickOpen={handleClickOpen} />}
                        {currentSection === 4 && <AboutUs />}
                        {currentSection === 5 && <Help />}
                        {currentSection === 7 && <AddressBook setCurrentSection={setCurrentSection} site={site} setSiteNo={setSiteNo} site={site} siteNo={siteNo} setSite={setSite} getSite={getSite} handleClickOpen={handleClickOpen}/>}
                        {currentSection === 8 && <EditAddress setCurrentSection={setCurrentSection} site={site} siteNo={siteNo} setSite={setSite} getSite={getSite} handleClickOpen={handleClickOpen} />}
                        {currentSection === 9 && <AddNewAddress setCurrentSection={setCurrentSection} formData={formData} setFormData={setFormData} getUser={getUser} getSite={getSite} handleClickOpen={handleClickOpen} />}
                    </Column>
                    <PopupSaved title="Saved" handleClickOpen={handleClickOpen} open={open} setOpen={setOpen} />
                </Row>
            </div>
        </>
    );
};

export default Profile;
