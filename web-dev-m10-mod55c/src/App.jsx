import './App.css'

function App() {

  const handleAdd = e =>{

    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name,email);
    const user = {name,email}

    fetch('http://localhost:5000/users', {
      method:'POST',
      headers:{
        "content-type": 'application/json'
     },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        alert('user added successfully')
        e.target.reset()
      }
    })
  }

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAdd}>
        <input type="text" name="name"/>
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
