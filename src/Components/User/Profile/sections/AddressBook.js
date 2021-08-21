import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Row, Column, Input, SectionTitle, Button } from "../../Styled/Styled";


const AddressBook = ({setCurrentSection,site,setSiteNo}) => {
    const handleEdit=(index)=>{
        setCurrentSection(8)
        setSiteNo(index)

    }
    console.log(site,'site');
    return (
        <form
            style={{
                width: "100%",
            }}
        >
            <Row>
                <SectionTitle>Site Address Book</SectionTitle>
            </Row>

            <Row style={{ justifyContent: "space-between" }}>
                <Column
                    style={{
                        minWidth: "75%",
                    }}
                >   
                {
                    site?.map((value,index) => (
                            <div style={{padding:"0.5rem"}}>
                                <div style={{justifyContent: "space-between" , display: "flex" }}> 
                                    <div style={{
                                        fontWeight:"200"
                                        }}>
                                Site {index+1}
                        </div>
                        <FiEdit style={{color: "#FFB600" , cursor:"pointer"}}  onClick={()=>handleEdit(index)}/>
                    </div>
                    <div style={{
                            backgroundColor:"transparent",
                            border: "1px solid white",
                            padding: "2%",
                            boxShadow:"1px 1px white",
                            borderRadius: "8px",
                    }}>
                        <h2 style={{
                            fontWeight: "200",
                            fontSize:"1rem",
                            margin:'0'
                        }}> 
                            {value?.add_title}
                        </h2>
                        <h2 style={{
                            fontWeight: "200",
                            fontSize:"1rem",
                            margin:'0'
                        }}> 
                            {value?.door_no}
                        </h2>
                        <h2 style={{
                            fontWeight: "200",
                            fontSize:"1rem",
                            margin:'0'
                        }}> 
                            {value?.building_name}
                        </h2>
                        <h2 style={{
                            fontWeight: "200",
                            fontSize:"1rem",
                            margin:'0'
                        }}> 
                            {value?.street} {value?.city}
                        </h2>
                        <h2 style={{
                            fontWeight: "200",
                            fontSize:"1rem",
                            margin:'0'
                        }}> 
                            {value?.state}
                        </h2>
                    </div>
                    </div>
                    ))
                  
                }
                    

                    
                </Column>
                
            </Row>
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
        </form>
    );
};

export default AddressBook;
