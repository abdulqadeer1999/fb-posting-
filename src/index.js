import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Room() {
  const [data, setData] = React.useState([]);

  function post(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let postText = document.getElementById("postText").value;
    let time = new Date().toLocaleTimeString();
    let newData = {
      postText: postText,
      name: name,
      time : time,
    }
    console.log(postText);

    setData((previousValue) => {
      return previousValue.concat([newData]);
    })
  }


  return (
    <div>

      <form className= "form"  onSubmit={post} style={{margin: "10px"}}>

        <input  required placeholder="Name" type="text" id="name" />
        <br/>
        <textarea required placeholder="what is in your mind" type="text" id="postText" />
        <br/>
        <button> Post </button>
      </form>

      

      {data.map((eachItem, i) => {
        return (
          <div className= {"content"} key={i} >
            

            <h2>{eachItem.name}</h2>
            <h5>{eachItem.time}</h5>
            <h6>{eachItem.postText}</h6>

          </div>
        )
      })}
    </div>
  );
}

ReactDOM.render(<Room />,
  document.getElementById('root')
);