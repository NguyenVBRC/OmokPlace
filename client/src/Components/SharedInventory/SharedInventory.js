import React, {  useState } from 'react';
import { cashShopInventory } from '../../Data/SharedInventoryData';
import "./SharedInventory.css"

export default function SharedInventory() {

    const [ className, setClassName ] = useState("");

    const sharedInventory = cashShopInventory.map((shared)=>{
        return (
            <div className='inventory__details'>
                <h1>{Object.keys(shared)}</h1>
            </div>
        )
    });

  return (
    <div className='inventory__container'>
        <h1 style={{marginBottom: "1rem"}}> Shared Cash Shop Inventory</h1>
        <p>
            Only certain class types share a Cash Shop inventory. Below are the classes share this inventory.
        </p>
        {sharedInventory}
    </div>
  )
}
