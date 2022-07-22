import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Armor() {

    const [armor, setArmor] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8082/armors/${id}`)
            .then(res => {
                setArmor(res.data); 
                console.log(armor)
            }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [])



    const {id} = useParams();
  
  return (
   <div className='w-full h-full justify-center items-center flex'>
    {armor && ( 
       
<>
        
<div className="w-[900px] h-[300px] flex px-6 py-4 border border-black mt-16 justify-center items-center">

    <div className="w-5/12 flex flex-col space-y-4">
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>Name</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>Defense</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>Price</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>Description</h2>
    
</div>

<div className = 'w-7/12 flex flex-col space-y-4'>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>{armor.name}</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>{armor.defense}</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>{armor.price}</h2>
    <h2 className = 'text-black font semibold font-Inter text-2xl border-b border-black'>{armor.description}</h2>
</div>
<Link to="/" className = 'text-blue-400 font semibold font-Inter text-2xl ml-12'>Back to Home</Link>
</div>
</>

    )}


    </div>
    
    
    
    )
}


export default Armor