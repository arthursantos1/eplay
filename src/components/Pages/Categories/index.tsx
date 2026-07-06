import { Game } from '../Home'
import ProductList from '../../ProductList'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsporte, setGamesEsporte] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))
    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsporte(res))
    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))
    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))
  }, [])

  return (
    <>
      <ProductList games={gamesRPG} title="RPG" background="black" />
      <ProductList games={gamesAcao} title="Ação" background="gray" />
      <ProductList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
      <ProductList games={gamesLuta} title="Luta" background="gray" />
      <ProductList games={gamesEsporte} title="Esportes" background="black" />
    </>
  )
}

export default Categories
