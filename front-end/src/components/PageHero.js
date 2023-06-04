import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '@mui/material'
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined'

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
   
      <div className='section-center'>
        <Breadcrumbs separator={<NavigateNextOutlinedIcon fontSize='small' />}>
          <Link to='/'>Home</Link>
          {product && <Link to='/products'>Products </Link>}
          <Link> {title} </Link>
        </Breadcrumbs>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
    text-transform: capitalize;
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
