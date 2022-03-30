import { useState } from "react";
const SingleItemComponent = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    // we want the form to start as being filled out
    const [updateItem, setUpdateItem] = useState({
        productName: props.item.productName,
        quantity: props.item.quantity,
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
         console.log("updatingItem!")
         props.updateItem(props.item._id, updateItem)
         setShowing(false)
     }
  return (
    <div className='index-single-item'>
      <h2>{props.item.shoeName}</h2>
      {/*Ternary operator*/}
      {props.item.shoeName !== null 
      ?
      <div  className='index-single-item-details'>
          <img src={props.item.img} alt="shoeImg"></img>
         <p>Description: {props.item.description}</p>
      </div> 
      :
      <p>Out of Stock</p>
    }
    <button onClick={()=>{
        props.deleteItem(props.item._id)
    }}>Delete</button>
    {
        showing ? 
        <div id="edit-item-form">
        <button onClick={toggleShowing}>X</button>
        <form onSubmit={submitUpdateItem}>
        Shoe Name: <input minLength={3} required   onChange={handleInputChange} type="text" name='shoeName' value={updateItem.shoeName}/>
                Brand: <input required onChange={handleInputChange} type="text" name='brand' value={updateItem.brand}/>
                Img: <input required onChange={handleInputChange} type="text" name='img' value={updateItem.img}/>
                Description: <input required onChange={handleInputChange} type="text" name='description' value={updateItem.description}/>
           <br />
           <button type="submit">Submit</button>
       </form>
       </div>
       :
       <button onClick={toggleShowing}>Edit this item</button>
    }
    <>
    </>
  
    </div>
  )
}

export default SingleItemComponent