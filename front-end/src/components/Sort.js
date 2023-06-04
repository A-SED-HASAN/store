import React from 'react'
import { useFilterContext } from '../context/filter_context'

import {
  AppsOutlinedIcon,
  MenuOutlinedIcon,
  GridViewOutlinedIcon,
} from '../assets/icon'

import styled from 'styled-components'
import { Divider } from '@mui/material'
const Sort = () => {
  const {
    filtered_products: products,
    view,
    setListView,
    setGridView,
    setSquareView,
    sort,
    updateSort,
  } = useFilterContext()
  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          type='button'
          onClick={setGridView}
          className={`${view === 'grid' ? 'active' : null}`}>
          <AppsOutlinedIcon />
        </button>
        <button
          type='button'
          onClick={setSquareView}
          className={`${view === 'square' ? 'active' : null}`}>
          <GridViewOutlinedIcon />
        </button>
        <button
          type='button'
          onClick={setListView}
          className={`${view === 'list' ? 'active' : null}`}>
          <MenuOutlinedIcon />
        </button>
      </div>
      <Divider>{products.length} products found</Divider>
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          className='sort-input'
          value={sort}
          onChange={updateSort}>
          <option value='price-lowest'>price(lowest)</option>
          <option value='price-highest'>price(highest)</option>
          <option value='name-a'>name(a-z)</option>
          <option value='name-z'>name(z-a)</option>
        </select>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`

export default Sort
