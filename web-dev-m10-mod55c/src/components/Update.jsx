import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loaded = useLoaderData()

    const handleUpdate = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name,email)
        const updatedUser  = {name,email}

        fetch(`http://localhost:5000/users/${loaded._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(updatedUser)
        })
        .then(res =>  res.json())
        .then(data =>{
            console.log(data) 
            if(data.modifiedCount > 0){
                alert('data updated')
            }
        })
    }
    return (
        <div>
            <h2>update info of: {loaded.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loaded?.name}/>
                <br />
                <input type="email" name="email" id="" 
                defaultValue={loaded?.email}/>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;
