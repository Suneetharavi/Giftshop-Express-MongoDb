import React from "react";

function Index({ toys }) {
  return (
    <div>
    <div style={{color:'red',backgroundColor:'black',marginLeft:'750px',width:'230px'}}>
      <h2 style={{color:'red',}}>Childrens Toys World</h2>
    </div>
      <div style={{display:'flex',flexWrap:'wrap',backgroundColor:'orange'}}>
      {toys.map((toy, i) => {
        return (
          <ul key={i}>
              <div style={{border:"solid brown"}}>
                
                <div>
                    <h2 style={{color:'blue'}}>{toy.name}</h2><br></br>
                </div>
                <div>
                    <img style={{color:'red', width:'200px',height:'100px'}} src={toy.img}></img><br></br>
                </div>
                <div>
                    <a style={{color:'red'}} href={`/toys/${toy._id}`}>{toy.name}</a>
                </div>
                <br></br>

                <div>
                    <a href={`/toys/${toy._id}/edit`}>
                        <button style={{color:'red',backgroundColor:'white'}}>Edit</button>
                    </a>
                </div>

                <form action={`/toys/${toy._id}?_method=DELETE`} method="POST"><br></br>
                <input style={{color:'red',backgroundColor:'black'}} type="submit" value="Delete Toy" />
                </form>
            
            </div>
          </ul>
        );
      })}
      
      </div>
      <br></br>
      <div style={{marginLeft:'770px'}} >
        <a style={{color:'red',fontSize:'20px'}} href="/toys/newToy">Add new Toy</a>
      </div>
    </div>
  );
}

export default Index;