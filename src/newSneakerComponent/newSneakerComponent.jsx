import { useState } from "react"
import Modal from 'react-modal'
// new component for new items
Modal.setAppElement('#root')
const NewSneakerComponent = (props) => {
    
    const [modalIsOpen, isOpen] = useState(false);
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
        isOpen(!modalIsOpen)
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
        
            <Modal isOpen={modalIsOpen}
                ClassName={'Modal'}
                // style={
                //     {
                        
                //         content: {
                //             width: 600,
                //             height: 300,
                //             left: 400,
                //             top: 200
                //         }
                //     }
                // }
            >
            <div id='new-sneaker-form'>
            
            <button className="x-btn" onClick={toggleShowing}>X</button>
             <form className="main-form" onSubmit={(e)=>{
                 e.preventDefault()
                 toggleShowing()
                 props.createNewItem(newItem)
                 setNewItem({
                    shoeName: "",
                    brand: "",
                    img: "",
                    description: ""
                 })
             }}> 
             <h3>Add New Shoe</h3> 
        <input minLength={3} required   onChange={handleInputChange} type="text" name='shoeName' value={newItem.shoeName} placeholder="Shoe Name"/>
        <input required onChange={handleInputChange} type="text" name='brand' value={newItem.brand} placeholder="Brand"/>
        <input  onChange={handleInputChange} type="text" name='img' value={newItem.img} placeholder="Image"/>
        <input required onChange={handleInputChange} type="text" name='description' value={newItem.description} placeholder="Release Date"/>
        <br />
        <button className="sub-btn"type="submit">Submit</button>
            </form>
            </div>
            </Modal>
            <button className="add-btn" onClick={toggleShowing}>Add New Shoe</button>
            
      
        

     
        
        
    </>
    
  )
  
}

export default NewSneakerComponent