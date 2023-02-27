import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import { Pet } from "../../app/models/pet";
import PetsList from "./PetsList";

export default function Catalog() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    agent.Catalog.list()
      .then(pets => setPets(pets))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [])
  
    return (
        <>
          <PetsList pets={pets} />
        </>
    )
}