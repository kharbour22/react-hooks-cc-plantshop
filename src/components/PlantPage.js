import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then (response => response.json())
    .then (plantsArray => {
      setPlants(plantsArray)
    })
  }, [])

  function handleAddPlant(newPlant){
    const newPlantsArray = [...plants, newPlant]
   setPlants(newPlantsArray)
  }

  const plantsDisplayed = plants.filter((plant) => {
  return plant.name && plant.name.toLowerCase().includes(searchTerm.toLowerCase());
});


  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search search={searchTerm} onSearchChange = {setSearchTerm}/>
      <PlantList plants = {plantsDisplayed}/>
    </main>
  );
}

export default PlantPage;
