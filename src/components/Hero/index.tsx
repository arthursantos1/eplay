import Button from '../Button'
import { Game } from '../Pages/Home'
import Tag from '../Tag'

import { Banner, Infos } from './styles'
import { formataPreco } from '../ProductList'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/Cart'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>

        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <>
                <span>De {formataPreco(game.prices.old)} </span>
                <br />
              </>
            )}
            {game.prices.current && (
              <>
                <span>Por {formataPreco(game.prices.current)}</span>
              </>
            )}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              title="Clique aqui para adicionar ao carrinho"
              variant="primary"
              onClick={addToCart}
            >
              Adicionar ao Carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
