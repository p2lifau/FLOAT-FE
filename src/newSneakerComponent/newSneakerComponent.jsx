import { useState } from "react"
// new component for new items
const NewSneakerComponent = (props) => {
    const [showing, setShowing] = useState(false);
// this state keeps track of what the user has put into the form
// thats going to build this object as the user updates the form 
    const [newItem, setNewItem] = useState({
        shoeName: "",
        brand: "",
        img: "",
        description: ""
    });

    // write a function set updates to its opposite
    const toggleShowing = () => {
        setShowing(!showing)
    }
    // this function handles all input changes and updates our newItem State
    const handleInputChange = (e) => {
       setNewItem({
           ...newItem,
           [e.target.name]: e.target.value
       })
    }

  return (
      // Ternary operation on condition of showing 
        <>
        {
            showing ? 
            
            <div id='new-item-form'>
                <button className="x-btn" onClick={toggleShowing}>X</button>
             <form className="main-form" onSubmit={(e)=>{
                 e.preventDefault()
                 props.createNewItem(newItem)
                 setNewItem({
                    shoeName: "",
                    brand: "",
                    img: "",
                    description: ""
                 })
             }}>   
                Shoe Name: <input minLength={3} required   onChange={handleInputChange} type="text" name='shoeName' value={newItem.shoeName}/>
                Brand: <input required onChange={handleInputChange} type="text" name='brand' value={newItem.brand}/>
                Image: <input  onChange={handleInputChange} type="text" name='img' value={newItem.img}/>
                Description: <input required onChange={handleInputChange} type="text" name='description' value={newItem.description}/>
                <br />
                <button className="sub-btn"type="submit">Submit</button>
            </form>
        </div>
        :
        <button className="add-btn" onClick={toggleShowing}>Add New Shoe</button>

        }
    </>
  )
}

export default NewSneakerComponent