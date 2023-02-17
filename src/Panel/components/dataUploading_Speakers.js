import React, { useState, useEffect } from "react";
import axios from 'axios'

function ImageUpload() {
    const [image, setImage] = useState('') 
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [field, setField] = useState('')
    const [id, setID] = useState('')
    const [workplace, setWorkplace] = useState('')
    const [imageAddress, setImageAd] = useState('')

    const url_json = 'file:///C:/Users/Amir/Desktop/ReACT2023/Speakers.json'

    const fetchData = () =>
    fetch(url_json)
    .then(response => response.json())
    .then(data => setUsers(data))

    useEffect(() => {
        fetchData()
    }, [])


    const url = 'file:///C:/Users/Amir/Desktop/ReACT2023/admin-panel'
    const url_image = 'file:///C:/Users/Amir/Desktop/ReACT2023/Images/'

  
    function handle_name(event) {
      setName(event.target.value)
    }

    function handle_field(event) {
      setField(event.target.value)
      setID(users.length+1)
    }

    function handle_workplace(event) {
      setWorkplace(event.target.value)
    }

    
    function handleImage(event) {
        console.log(event.target.files)
        setImage(event.target.files[0])
        setImageAd(url_image + event.target.files[0].name)

        const user = {
          "id": id,
          "name": name,
          "field": field,
          "imageAddress": imageAddress,
          "workplace": workplace,
        }
        const newUsers = [...users, user]
        setUsers(newUsers)
    }
    

    function handleAPI() {
        const formData = new FormData()
        formData.append('image',image)
        axios.post(url_image,formData).then((res) => {
            console.log(res)
        })

        const formD = new FormData()
        formD.append('Speakers',users,'Speakers.json')
        axios.post(url,formD).then((res) => {
          console.log(res)
        })

    }

    return (
        <form>
            <div className="mb-3">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    id="Name"
                    onChange={handle_name}
                />
            </div>
            <div className="mb-3">
                <label>Field</label>
                <input type="text" className="form-control" placeholder="Field" id="field" onChange={handle_field}/>
            </div>    
            <div className="mb-3">
                <label>Workplace</label>
                <input type="text" className="form-control" placeholder="Workplace" id="workplace" onChange={handle_workplace}/>
            </div>    
            <div className="mb-3">   
                <label>Image</label>
                <input type="file" name='image' onChange={handleImage} />
            
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleAPI}>
                    Upload
                </button>
            </div>
            <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      )}
    </div>
    </form>
    )

}

export default ImageUpload