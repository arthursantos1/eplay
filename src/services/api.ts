import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../components/Pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGame: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportGame: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getRpgGame: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getSimulationGame: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightGame: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGameQuery,
  useGetSportGameQuery,
  useGetRpgGameQuery,
  useGetSimulationGameQuery,
  useGetFightGameQuery,
  useGetGameQuery
} = api
export default api
