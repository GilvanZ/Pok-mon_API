"use client"


import { useState, useEffect } from "react"
import Card from "@/components/card/Card"

interface APIProps {
  onSelect: (pokemon: any) => void
}


export default function API({onSelect}:APIProps) {
  const [pokemons, setPokemons] = useState<any[]>([])

 useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(data => {
      Promise.all(
        data.results.map(pokemon => 
          fetch(pokemon.url).then(res => res.json())
        )
      ).then(detalhes => {
        console.log(detalhes[0]) // mostra só o primeiro pokemon
        setPokemons(detalhes)
      })
    })
}, [])

  
  return (
    <div className="flex flex-1 flex-wrap">
      {pokemons.map((pokemon, i) => (
        <div 
        key={i} 
        className="flex flex-1 gap-1 p-2"
        >
          <Card
          name={pokemon.name}
          id={pokemon.id}
          img={pokemon.sprites.front_default}
          type={pokemon.types[0].type.name}
          onClick={() => onSelect(pokemon)}
          />
        </div>
        
      ))}
      
    </div>
  )
}