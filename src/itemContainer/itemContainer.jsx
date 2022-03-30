// our stateful component
import {useEffect, useState} from 'react'
import SingleItemComponent from './singleItemComponent/singleItemComponent'
import NewItemComponent from '../newItemComponent/newItemComponent'

const ItemContainer = () => {
    const [requestError, setRequestError] = useState("");
    const [items, setItems] = useState([])
    // const [newItemServerError, setNewItemServerError] = useState("")
    // this function using to life state from child to parent
    const createNewItem =  async (newItem) => {
        // Send a request to our back-end , make sure your local host is CORRECT
        const apiResponse = await fetch("http://localhost:4000/items",{
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json"
            }
        })
          // parse the response from the back-end
          const parsedResponse = await apiResponse.json()
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
            const apiResponse = await fetch(`http://localhost:4000/items/${idToDelete}`, {
                method: "DELETE"
            })
            const parsedResponse = await apiResponse.json()
            if(parsedResponse.success){
                        // const newItems = [];
                // for(let i = 0; i < items.length; i++){
                //     if(items[i]._id !== itemId){
                //         newItems.push(items[i])
                //     }
                // }
                
                // this function creates a new array of all the things that return true
                // using the filter method
                // const newItems = items.filter((item)=>{
                //     return item._id !== idToDelete
                // })
        
                const newItems = items.filter(item => item._id !== idToDelete)
                setItems(newItems)
            } else {
                // Todo: handle an unsuccessful delete
            }
        }catch(err){
            console.log(err)
        }
        console.log("Deleteing item ID" + idToDelete)
        
    }
    // this function fetches our items from the server
    const getItems = async () => {
        try {
            const items = await fetch ("http://localhost:4000/items")
            const parsedItems = await items.json();
            setItems(parsedItems.data)
        } catch(err){
            console.log(err)
        }
    }
    // 
    const updateItem = async (idToUpdate, itemToUpdate) => {
        // const newItems = [];
        // for(let i = 0; i <items.length; i++){
        //     if(items[i]._id === idToUpdate._id){
        //         newItems[i] = itemToUpdate
        //     } else {
        //         newItems.push(items[i])
        //     }
        // }
        const apiResponse = await fetch(`http://localhost:4000/items/${idToUpdate}`, {
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
    useEffect(getItems, [] )
  return (
    <div>
        <h2>My Sneakers</h2>
        <NewItemComponent  
        createNewItem={createNewItem}></NewItemComponent>
        {/* map through the api data*/}
        {items.reverse().map((item)=> {
           return <SingleItemComponent key={item._id} item={item} deleteItem={deleteItem} updateItem={updateItem}></SingleItemComponent>
        })}
    </div>
  )
}

export default ItemContainer