import ProductList from '../../ProductList'

import {
  useGetActionGameQuery,
  useGetSportGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetFightGameQuery
} from '../../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGameQuery()
  const { data: sportGames } = useGetSportGameQuery()
  const { data: rpgGames } = useGetRpgGameQuery()
  const { data: simulationGames } = useGetSimulationGameQuery()
  const { data: fightGames } = useGetFightGameQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductList games={rpgGames} title="RPG" background="black" id="rpg" />
        <ProductList
          games={actionGames}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductList
          games={fightGames}
          title="Luta"
          background="gray"
          id="fight"
        />
        <ProductList
          games={sportGames}
          title="Esportes"
          background="black"
          id="sports"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
