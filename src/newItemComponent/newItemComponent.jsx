import { useState } from "react"
// new component for new items
const NewItemComponent = (props) => {
    const [showing, setShowing] = useState(false);
// this state keeps track of what the user has put into the form
// thats going to build this object as the user updates the form 
    const [newItem, setNewItem] = useState({
        shoeName: "",
        brand: "",
        img: "",
        description: ""
    });
    // const [isvalidState, setIsValidState] = useState({valid: true}, {message: ""})
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
                <button onClick={toggleShowing}>X</button>
             <form onSubmit={(e)=>{
                 e.preventDefault()
                 props.createNewItem(newItem)
                 setNewItem({
                    shoeName: "",
                    brand: "",
                    img: "",
                    description: ""
                 })

             }}>   
                
                Shoe Name: <input minLength={3} required   onChange={handleInputChange} type="text" name='shoeName'/>
                Brand: <input required onChange={handleInputChange} type="text" name='brand' />
                Img: <input required onChange={handleInputChange} type="text" name='img' />
                Description: <input required onChange={handleInputChange} type="text" name='description' />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
        :
        <button onClick={toggleShowing}>Add New Shoe</button>

        }
    </>
  )
}

export default NewItemComponent