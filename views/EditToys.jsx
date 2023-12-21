import React from "react";

function EditToys({ toy }) {
  return (
    <>
    <div style={{marginLeft:'500px'}}>
        <h1 style={{color:'red',backgroundColor:'black',width:'200px',marginLeft:'100px'}}>Edit the Toy</h1>
        <br></br>
        <div>
            <form action={`/toys/${toy._id}?_method=PUT`} method="POST">
               <h2 style={{color:'#860A35'}}> Name: <input type="text" name="name" defaultValue={toy.name} /></h2>

               <h2 style={{color:'blue'}}>
                    About the Toy:
                    <input type="text" name="Aboutoy" defaultValue={toy.Aboutoy} />
                </h2>
                <h2 style={{color:'brown'}}>
                Image: <input type="text" name="img" defaultValue={toy.img} />
                </h2>
                <br />
                <input style={{color:'red',backgroundColor:'cream'}} type="submit" name="Editoy" value="Edit Toy" />
            </form>
      </div>
    </div>
    </>
  );
}

export default EditToys;