import React from 'react'

function NewToy() {
  return (
    <div style={{backgroundColor:'lightgrey'}}>
        
        <h1 style={{color:'red', display:'flex',marginLeft:'800px',backgroundColor:'black',width:'240px'}}>Add a new Gift</h1><br></br>

        <form action ='/toys' method='POST'>
 
         <h3 style={{color:'blue',marginLeft:'780px'}}>Toy Name: <input style={{margin:"1em"}} type='text' name='name'></input></h3>

         <h3 style={{color:'maroon',marginLeft:'780px'}}>Image URL: <input style={{margin:"1em"}} type="text" name="img" /></h3>

          <h3 style={{color:'purple',marginLeft:'780px'}}>About the Toy: <input style={{margin:"1em"}} type='text' name='Aboutoy'></input></h3>

          {/* Is Ready to Eat: <input type="checkbox" name='readytoEat'/>

          Is Ready to Eat: <input  style={{margin:"1em"}}type="checkbox" name="readyToEat" /><br/> */}

          <input style={{backgroundColor:'black', color:'maroon',width:'300px',marginLeft:'780px',fontSize:'20px'}} type='submit' value='Add a Gift'/>
        
        </form>  

    </div>
  )
}

export default NewToy