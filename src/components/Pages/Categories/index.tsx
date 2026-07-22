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
        <ProductList games={rpgGames} title="RPG" background="black" />
        <ProductList games={actionGames} title="Ação" background="gray" />
        <ProductList
          games={simulationGames}
          title="Simulação"
          background="black"
        />
        <ProductList games={fightGames} title="Luta" background="gray" />
        <ProductList games={sportGames} title="Esportes" background="black" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
