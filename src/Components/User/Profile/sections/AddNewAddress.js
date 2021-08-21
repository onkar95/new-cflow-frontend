import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Row, Column, Input, SectionTitle, Button } from "../../Styled/Styled";
import axios from "axios";
import "./Profile.css"
import pincode from "pincode-distance"
require('dotenv').config()

const AddNewAddress = ({ setCurrentSection, formData, setFormData, getUser, getSite, handleClickOpen }) => {

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)
    const [buildingname, setBuildingname] = useState("");
    const [doorno, setDoorno] = useState("");
    const [street, setStreet] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pin, setPin] = useState("");
    const [addtitle, setAddtitle] = useState("");


    const [disabled1, setDisabled] = useState(0);
    const [btnTxt, setBtnTxt] = useState("Edit");
    const [editable, seteditable] = useState(true);


    const [site, setSite] = useState(null);

    const Pincode = new pincode();
    const location = Pincode.getlatLng("470002");
    console.log(location);


    const handleformdata = async (e) => {
        e.preventDefault();
        console.log(editable)
        // seteditable(!editable)
        // if (!editable) {
        //     console.log(editable+"inside to post")
        //     setBtnTxt("Edit")
            setSite({ ...site, building_name: buildingname, door_no: doorno, street: street, landmark: landmark, city: city, state: state, pin: pin, add_title: addtitle })
            // if (buildingname !== "" && doorno !== "" && street !== "" && landmark !== "" && city !== "" && state !== "" && pin !== "" && addtitle !== "") {
            await axios.post(`${process.env.REACT_APP_URL}/user/add_site/${userId}`, site)
                .then(response => {
                })
            getSite();
            setCurrentSection(7);
            // }
            // else {
            //     alert("SITE DETAIL CANNOT BE EMPTY")
            // }
        // }else {
        //     setBtnTxt("Save")
           
        // }



        handleClickOpen();
    }

    useEffect(() => {
        setSite({ ...site, building_name: buildingname, door_no: doorno, street: street, landmark: landmark, city: city, state: state, pin: pin, add_title: addtitle })

    }, [buildingname, doorno, street, landmark, city, state, pin, addtitle])

    useEffect(() => {
        if (formData?.site !== null) {
            let index = 0;
            let newArr = [...formData?.site];
            newArr[index] = site;
            setFormData({ ...formData, site: newArr })
        }
    }, [site])

    useEffect(() => {
        if (!buildingname || !state || !addtitle || !city || !doorno || !landmark || !street || !pin) {
            setDisabled(0);
        } else {
            setDisabled(1);
        }
    }, [buildingname, doorno, street, landmark, city, state, pin, addtitle])
    return (
        <form
            style={{
                width: "100%",
            }}
        >

            <Row className="input-orientation">
                <Column
                    style={{
                        minWidth: "45%",
                    }}
                >
                    <Input
                        placeholder='Building Name'
                        id='name'
                        // disabled={editable}
                        autoComplete="off"
                        type='text'
                        onChange={(e) => setBuildingname(e.target.value)}
                        value={buildingname}
                        style={{ marginBottom: "2rem" }}
                    />
                    <Input
                        placeholder='Area/Street'
                        id='company'
                        type='text'
                        onChange={(e) => setStreet(e.target.value)}
                        value={street}
                        style={{ marginBottom: "2rem" }}
                        // disabled={editable}
                        autoComplete="off"

                    />
                    <Input
                        placeholder='City'
                        id='phone'
                        type='text'
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        style={{ marginBottom: "2rem" }}
                        // disabled={editable}
                        autoComplete="off"
                    />
                    <Input
                        placeholder='Pincode'
                        id='phone'
                        type='text'
                        onChange={(e) => setPin(e.target.value)}
                        value={pin}
                        style={{ marginBottom: "2rem" }}
                        // disabled={editable}
                        autoComplete="off"
                    />
                </Column>
                <Column
                    style={{
                        minWidth: "45%",
                    }}
                >
                    <Input
                        placeholder='H No / Door No'
                        id='title'
                        type='text'
                        onChange={(e) => setDoorno(e.target.value)}
                        value={doorno}
                        style={{ marginBottom: "2rem" }}
                        // disabled={editable}
                        autoComplete="off"
                    />
                    <Input
                        placeholder='Landmark'
                        id='email'
                        type='text'
                        onChange={(e) => setLandmark(e.target.value)}
                        value={landmark}
                        style={{ marginBottom: "2rem" }}
                        // disabled={editable}
                        autoComplete="off"
                    />
                    <Input
                        placeholder='State'
                        id='wpp'
                        type='text'
                        onChange={(e) => setState(e.target.value)}
                        value={state}
                        style={{ marginBottom: "2rem" }}
                        // disabled={editable}
                        autoComplete="off"
                    />
                    <Input
                        placeholder='Address Title'
                        id='wpp'
                        type='text'
                        onChange={(e) => setAddtitle(e.target.value)}
                        value={addtitle}
                        style={{ marginBottom: "2rem" }}
                        // disabled={editable}
                        autoComplete="off"
                    />
                </Column>
            </Row>
            {/* <Button
                style={{
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%)",
                }}
                onClick={handleformdata}
            >
                Save
            </Button> */}
            <button
                onClick={handleformdata}
                className="disiabled_save_butn"
                className={`${disabled1 == 0 ? "disiabled_save_butn_block  " : "disiabled_save_butn "}`}
                disabled={!buildingname || !state || !addtitle || !city || !doorno || !landmark || !street || !pin}
            // {...disabled?alert("enter"):null}
            // disabled="true"
            // style={!disabled?{backgroundColor:"gray"}:{backgroundcolor: "#ffb600"}}
            // disabled={disabled1}
            >
                 save

            </button>
        </form>
    );
};

export default AddNewAddress;
