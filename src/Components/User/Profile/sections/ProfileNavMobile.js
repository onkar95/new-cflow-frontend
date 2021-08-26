
import React, { useEffect, useState } from "react";
import { Column, GhostButton, Button } from "../../Styled/Styled";
import "./Profile.css"
import ProfilePercent from "./ProfilePercent";
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

const ProfileNavMobile = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [phone, setPhone] = useState(props.formData?.phone_no ? props.formData?.phone_no : "");
    const [email, setEmail] = useState(props.formData?.email ? props.formData?.email : "");
    const [wpp, setWpp] = useState(props.formData?.whatsapp_no ? props.formData?.whatsapp_no : "");

    const [filled, setFilled] = useState("")
    const handleLogout = () => {
        props.function(6)
        dispatch({ type: "LOGOUT" })
        history.push("/")
    }
    useEffect(() => {
        if (filled.company >= 6 && filled.personal >= 6) {
            setFilled("complete")
        } else {
            setFilled("incomplete")
        }

    }, [])

    return (
        <>

            <div className="profile_navbar">
                <div className="userInfo">
                    <div className="profilePercent">
                        {window.innerWidth > 340 ?
                            <ProfilePercent filled={props.filled} height="200" />
                            :
                            <ProfilePercent filled={props.filled} height="170" />
                        }                    </div>
                    <div className="row">
                        <div style={{ display: "flex" }}>
                            <h1>user name</h1>
                            <h3>user</h3>
                        </div>

                        <div className="logout_btn">
                            <Button>logout</Button>
                        </div>
                    </div>
                </div>
                <div className="userdetail">

                    {/* <div className="info"> */}
                    <div>
                        <h4>phone</h4>
                        <h5>{phone}</h5>
                    </div>
                    <div>
                        <h4>whatsapp</h4>
                        <h4>{wpp}</h4>
                    </div>
                    <div>
                        <h4>email</h4>
                        <h4>{email} </h4>
                    </div>
                    {/* </div> */}

                </div>
                {filled === "complete" ?

                    <div className="usersActivity">
                        <div >
                            <h1>complete your prfile</h1>
                            <h5>please complete your profile so that tou can start ordering products</h5>
                        </div>
                        <div className="row" style={{ width: "max-content", padding: "3px" }}>
                            <h3>complete profile</h3>
                        </div>
                    </div>
                    :
                    <>
                        <div className="usersActivity">
                            <h1>168</h1>
                            <h5>Total pitch recived today</h5>
                            <h5> 10.02% this week</h5>
                        </div>

                        <div className="usersActivity">
                            <h1>168</h1>
                            <h5>Total pitch recived today</h5>
                            <h5> 10.02% this week</h5>
                        </div>
                    </>
                }
            </div>

        </>
    );
};

export default ProfileNavMobile;
