import { useState } from "react";

const SoloSneakerComponenttwo = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    // we want the form to start as being filled out
    const [updateItem, setUpdateItem] = useState({
        shoeName: props.item.shoeName,
        brand: props.item.brand,
        img: props.item.img,
        description: props.item.description,
        _id: props.item._id
    });
   // this function handles all input changes and updates our updateItem state
    const handleInputChange = (e) => {
        setUpdateItem({
            ...updateItem,
            [e.target.name]: e.target.value
        })
     }
   
     const submitUpdateItem = (e) => {
         e.preventDefault();
         console.log("UPDATE SUCCESSFUL")
         props.updateItem(props.item._id, updateItem)
         setShowing(false)
     }
  return (
      
    <div className='solo-sneaker'>
    <div className="sneaker-card">
    <img className="snkr-img"  src={props.item.img} alt={props.item.shoeName}></img>
    <p>{props.item.brand}</p>
    <p>{props.item.shoeName}</p>
     
     <p>{props.item.description}</p>
     </div>
    <div className="btn-container">
    <button id="delete-btn"onClick={()=>{
        props.deleteItem(props.item._id)
    }}>Delete</button>
    <button id="edit-btn" onClick={toggleShowing}>Edit</button>
    </div>
    {
        showing ? 
        <div id="edit-sneaker-form">
        <button className="x-btn" onClick={toggleShowing}>X</button>
        <form className="sneaker-edits" onSubmit={submitUpdateItem}>
           <input  minLength={3} required   onChange={handleInputChange} type="text" name='shoeName' placeholder="Shoe Name" value={updateItem.shoeName}/>
            <input required onChange={handleInputChange} type="text" name='brand' placeholder="Brand" value={updateItem.brand}/>
            <input  onChange={handleInputChange} type="text" name='img' placeholder="Image" value={updateItem.img}/>
            <input required onChange={handleInputChange} type="text" name='description' placeholder="Description" value={updateItem.description}/>
           <button className="sub-btn" type="submit">Submit</button>
       </form>
       </div>
       :
       ""
       
    }
    
  
    </div>
 
  )
}

export default SoloSneakerComponenttwo