import {useState} from 'react'
function App() {

  const [fileData, setFileData] = useState();

  const fileChangeHandler = (e) => {
    setFileData(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Handle file data from state before sending 

    const data = new FormData();
    data.append('image', fileData);

    fetch("http://localhost:5000/single", {
      method: 'POST',
      body: data
    }).then((result) => {
      console.log('File sent successfuly');
    }).catch((err) => {
      console.log(err.message);
    });

  }

  return (
    <div className="App">
      <h1>React file uplaod app</h1>
      <br />
      <br />
      <br />
      <form onSubmit={onSubmitHandler}>
        <input type="file" onChange={fileChangeHandler} />
        <br />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
