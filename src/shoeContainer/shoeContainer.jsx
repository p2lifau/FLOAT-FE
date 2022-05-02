// our stateful component
import {useState, useEffect} from 'react'
import NewSneakerComponent from '../newSneakerComponent/newSneakerComponent'
import SoloSneakerComponent from './soloSneakerComponent/soloSneakerComponent'

const ShoeContainertwo = () => {
    // const webUrl = 'https://localhost:4000/items';
    const webUrl = 'https://sneakerfloatbackend.herokuapp.com/items';
    const [items, setItems] = useState([])
    // this function using to life state from child to parent
    const createNewItem =  async (newItem) => {
        // Send a request to our back-end , make sure your local host is CORRECT
        const apiResponse = await fetch(`https://sneakerfloatbackend.herokuapp.com/items`,{
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
          // parse the response from the back-end
          const parsedResponse = await apiResponse.json()
          console.log(parsedResponse)
          // If the response is success:
          if(parsedResponse.success){
            // Add the new item to state!
            setItems([parsedResponse.data, ...items])
          } 
    }
    // loop through our data, find the data with that specific ID and delete it 
    // our function that modifies state
    const deleteItem = async (idToDelete) => {
        try {
            const apiResponse = await fetch(`https://sneakerfloatbackend.herokuapp.com/items/${idToDelete}`, {
                method: "DELETE"
            })
            const parsedResponse = await apiResponse.json()
            if(parsedResponse.success){
          
                const newItems = items.filter(item => item._id !== idToDelete)
                setItems(newItems)
            } 
        }catch(err){
            console.log(err)
        }
        console.log("Deleteing item ID" + idToDelete)
        
    }
    // this function fetches our items from the server
    const getItems = async () => {
        console.log('get anything')
        try {
            const items = await fetch (`https://sneakerfloatbackend.herokuapp.com/items`)
            const parsedItems = await items.json();
            setItems(parsedItems.data)
            console.log(parsedItems);
        } catch(err){
            console.log(err)
        }
    }
    // 
    const updateItem = async (idToUpdate, itemToUpdate) => {
      
        const apiResponse = await fetch(`https://sneakerfloatbackend.herokuapp.com/items/${idToUpdate}`, {
            method: "PUT",
            body: JSON.stringify(itemToUpdate),
            headers: {
                "Content-Type": " application/json"
            }
        })
        const parsedResponse = await apiResponse.json()
        if(parsedResponse.success){
        // this function maps through the array and compares if the id is === to idToUpdate if so, send new version : old version
        const newItems = items.map(item => item._id === idToUpdate ? itemToUpdate : item) 
        setItems(newItems)
        } 
        
    }
    // API call function when page loads
    useEffect(getItems, []);
   
  return (
    <div className='song-container'>
        

        <div className="songs-wrapper">
        <div className='sneaker-title'>
        <h2 className='my-sneakers'>Sneaker List</h2>
        <div className="new-container">
        <NewSneakerComponent
        createNewItem={createNewItem}>
        </NewSneakerComponent>
        </div>
        </div>
        <div className="songs-container">
        {items.map((item)=> {
           return (
           <SoloSneakerComponent 
           key={`sneaker- ${item._id}`} 
           item={item} 
           deleteItem={deleteItem} 
           updateItem={updateItem}
           ></SoloSneakerComponent>
           )
        })}
        </div>
        </div>
        
        </div>
        
        
  )
}

export default ShoeContainertwo