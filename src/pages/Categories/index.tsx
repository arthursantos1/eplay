import ProductList from '../../components/ProductList'

import {
  useGetActionGameQuery,
  useGetSportGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetFightGameQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGameQuery()
  const { data: sportGames, isLoading: isLoadingSport } = useGetSportGameQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGameQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGameQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightGameQuery()

  return (
    <>
      <ProductList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
      <ProductList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductList
        games={fightGames}
        title="Luta"
        background="gray"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductList
        games={sportGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSport}
      />
    </>
  )
}

export default Categories
