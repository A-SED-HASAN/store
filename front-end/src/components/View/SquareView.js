import React from 'react'
import styled from 'styled-components'

import { formatPrice } from '../../utils/helpers'
import { Link } from 'react-router-dom'
const SquareView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price } = product
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <span>
                <h4>{name}</h4>
                <h5 className='price'>{formatPrice(price)}</h5>
              </span>

              <Link to={`/products/${id}`} className='btn'>
                buy me !
              </Link>
            </div>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 1.5rem;
  img {
    width: 100%;
    display: block;
    height: 250px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.7rem;
  }
  @media (width>= 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (width<= 992px) {
    article {
      display: grid;
      grid-template-columns: 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default SquareView
