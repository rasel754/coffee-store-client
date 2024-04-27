
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees , setCoffees] = useState(loadedCoffees);

  return (
    <>
  
      <div className='text-center mx-8'>
      <Link to="/addCoffee"><button className='btn btn-lg btn-secondary text-center m-8'>Add Coffee</button></Link>
      <h1 className='text-5xl text-purple-800 my-8'>now here you see all coffee : {coffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard 
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
             coffee={coffee}>
           </CoffeeCard>)
        }
      </div>
      </div>
    </>
  )
}

export default App
