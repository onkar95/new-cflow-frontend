import React, { useState } from "react";
import { Column, GhostButton } from "../../Styled/Styled";
import "./Profile.css"
import ProfilePercent from "./ProfilePercent";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const ProfileNav = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [phone, setPhone] = useState(props.formData?.phone_no ? props.formData?.phone_no : "");
    const [email, setEmail] = useState(props.formData?.email ? props.formData?.email : "");
    const [wpp, setWpp] = useState(props.formData?.whatsapp_no ? props.formData?.whatsapp_no : "");

    const handleLogout = () => {
        props.function(6)
        dispatch({ type: "LOGOUT" })
        history.push("/")
    }
    <GhostButton
        style={
            props.current === 0
                ? {
                    backgroundColor: "#ffb600",
                    color: "black",
                    borderStyle: "none",
                }
                : {}
        }
        onClick={() => props.function(0)}
    >
        Personal Details
    </GhostButton>
    return (
        <>

            <div className="profile_navbar">
                <div className="userInfo">
                    <ProfilePercent filled={props.filled} />
                    <div className="userdetail">
                        <div className="row">
                            <h1>user name</h1>
                            <button>user</button>
                        </div>
                        <div className="info">
                            <div>
                                <h4>phone</h4>
                                <h4>{ phone}</h4>
                            </div>
                            <div>
                                <h4>whatsapp</h4>
                                <h4>{ wpp}</h4>
                            </div>
                            <div>
                                <h4>email</h4>
                                <h4>{email} </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="usersActivity">
                    <div>
                        <h1>complete your prfile</h1>
                        <h5>please complete your progile that you can start ordering</h5>
                    </div>
                    <div>
                        <button>conpmete</button>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default ProfileNav;
