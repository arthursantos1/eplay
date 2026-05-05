import Game from '../../../models/Games'
import Banner from '../../Banner'
import ProductList from '../../ProductList'

import resident from '../../../assets/images/resident.png'
import diablo from '../../../assets/images/diablo.png'
import zelda from '../../../assets/images/zelda.png'
import starWars from '../../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sapiente iusto optio officia incidunt eligendi. Excepturi, ipsa maiores mollitia voluptas ipsam fugiat iure! Labore vel est facilis voluptatibus cumque? Nulla',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sapiente iusto optio officia incidunt eligendi. Excepturi, ipsa maiores mollitia voluptas ipsam fugiat iure! Labore vel est facilis voluptatibus cumque? Nulla',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sapiente iusto optio officia incidunt eligendi. Excepturi, ipsa maiores mollitia voluptas ipsam fugiat iure! Labore vel est facilis voluptatibus cumque? Nulla',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['15%', 'R$ 215,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sapiente iusto optio officia incidunt eligendi. Excepturi, ipsa maiores mollitia voluptas ipsam fugiat iure! Labore vel est facilis voluptatibus cumque? Nulla',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['20%', 'R$ 200,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sapiente iusto optio officia incidunt eligendi. Excepturi, ipsa maiores mollitia voluptas ipsam fugiat iure! Labore vel est facilis voluptatibus cumque? Nulla',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sapiente iusto optio officia incidunt eligendi. Excepturi, ipsa maiores mollitia voluptas ipsam fugiat iure! Labore vel est facilis voluptatibus cumque? Nulla',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 7,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sapiente iusto optio officia incidunt eligendi. Excepturi, ipsa maiores mollitia voluptas ipsam fugiat iure! Labore vel est facilis voluptatibus cumque? Nulla',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['15%', 'R$ 215,00'],
    image: zelda
  },
  {
    id: 8,
    category: 'Ação',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, sapiente iusto optio officia incidunt eligendi. Excepturi, ipsa maiores mollitia voluptas ipsam fugiat iure! Labore vel est facilis voluptatibus cumque? Nulla',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['20%', 'R$ 200,00'],
    image: starWars
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
