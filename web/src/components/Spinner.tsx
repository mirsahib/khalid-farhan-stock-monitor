import React from "react";

const Spinner = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    border: "5px solid #ccc",
                    borderTopColor: "#007bff",
                    borderRadius: "50%",
                    animation: "spin 3s linear infinite",
                }}
            ></div>
        </div>
    );
};

export default Spinner;
