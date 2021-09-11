import React from 'react'
import { useTransform } from 'framer-motion'

import { useWrapperScroll } from '../Model'

import { Container, Header, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Clone Tesla</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/hitalo-chaves-b473b5208">by Hitalo Chaves</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
