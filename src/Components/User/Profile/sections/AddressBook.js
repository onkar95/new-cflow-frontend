import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Row, Column, Input, SectionTitle, Button } from "../../Styled/Styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddressBook = ({ setCurrentSection, siteNo, site, setSite, getSite, handleClickOpen, setSiteNo }) => {

    const [userId, setUserId] = useState(JSON.parse(localStorage.getItem('profile'))?.data?.id)

    const handleEdit = (index) => {
        setCurrentSection(8)
        setSiteNo(index)
    }
    const notify = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    let temp;

    
    const handleDelete = async (e) => {
        e.preventDefault();
        alert("are you want to delete the address")

        let arr = site.filter((item, index) => index !== siteNo)
        setSite(arr)
        await axios.post(`${process.env.REACT_APP_URL}/user/update_site/${userId}`, arr)
            .then(response => {
                getSite();
                notify("address deleted sucessfully")
            })


        setCurrentSection(7)

    }
    console.log(site, 'site');
    return (
        <div className="addressBook" >
            <Row>
                <Column className="inputs_coloum_group"> Site Address Book</Column>
            </Row>
            <hr style={{ width: "100%" }} />

            <div className="saved_address">
                {
                    site?.map((value, index) => (
                        <div className="address">
                            <div className="address_details">
                                <h1>
                                    Site Address {index + 1}
                                </h1>
                                <h5>
                                    {value?.building_name},{value?.city}
                                </h5>
                            </div>
                            <div className="address_btn">
                                <div className="btn-container-edit-add">
                                    <FiEdit style={{ color: "#FFB600", cursor: "pointer" }} onClick={() => handleEdit(index)} />

                                    <Button
                                        className="del-edit-add-btn"
                                        style={{
                                            // position: "relative",
                                            // left: "47%",
                                            // transform: "translate(-50%)",
                                            backgroundColor: "transparent",
                                            border: "1px solid #FFB600",
                                            color: "#FFB600"
                                        }}
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>


            <ToastContainer />

            <Button
                style={{
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%)",
                    // top:"60%"
                }}
                onClick={() => setCurrentSection(9)}
            >
                Add New Address
            </Button>
        </div >
    );
};

export default AddressBook;
