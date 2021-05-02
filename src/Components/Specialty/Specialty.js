import React from 'react';

const Specialty = ({specialty}) => {
    const iconStyle = {
        color: "white",
        fontSize: "100px",
        backgroundColor: "#00CBCA",
        borderRadius: "50%",
        padding: "15px"
    }
    return (
        <div className="text-center col-md-3 col-sm-6 p-4">
            {
                <specialty.icon style={ iconStyle }/>
            }
            <h4 className="my-3">{specialty.category}</h4>
            <p>{specialty.text}</p>
        </div>
    );
};

export default Specialty;