import React from 'react';
import { classData } from '../../Data/SharedInventoryData';
import "./SharedInventory.css"

export default function SharedInventory() {

    // "Class" is the Main Category. Example: Explorer, Cygnus, etc.
    // "Class Type" refers to the Sub Category. Example: Warrior, Thief, Etc
    // "Job" refers to the most nested category. Example: Hero, Night Lord, Etc.

    /* 
        Example: Hero
            Class: Explorer
            Class Type: Warrior
            Job: Hero
    */

    const mainClass = Object.keys(classData);
    const subClass = Object.values(classData)

    const mainCategory = mainClass.map((mainClass)=>{
        return (
            <div key={mainClass}>
                <h1>{mainClass}</h1>
                {subClass.map((objArr)=> {
                    {Object.keys(objArr)}
                })}
            </div>
        )
    });

    function logObject(){
        console.log()
    }
    
  return (
    <div className='inventory__container'>
        <div>
            <h3 style={{marginBottom: "1rem"}}> Shared Cash Shop Inventory</h3>
            <p>
                Only certain class types share a Cash Shop inventory. Below are the classes share this inventory.
            </p>
        </div>
        <div>
            <h1>To be added.</h1>
        </div>
    </div>
  )
}
