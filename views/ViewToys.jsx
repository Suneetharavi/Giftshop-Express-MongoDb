import React from "react";

function ViewToys({ toy }) {
  return (
    <>
        <div style={{marginLeft:''}}>
            <h2 style={{color:'black',marginLeft:'120px',backgroundColor:'coral',width:'200px'}}>{toy.name}</h2>
            <img style={{color:'blueviolet',marginLeft:'0px',width:'500px'}}src={toy.img} />
            <h2 style={{color:'blueviolet',marginLeft:'120px'}}>{toy.Aboutoy}</h2>
        </div>
    </>
  );
}

export default ViewToys;