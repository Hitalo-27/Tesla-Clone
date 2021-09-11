import React from 'react'

import { ModelsWrapper, ModelSection } from '../Model'
import DefaultOverlayContent from '../DefaultOverlayContent'
import UniqueOverlay from '../UniqueOverlay'

import { Container, Spacer } from './styles'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Camaro',
            'Tesla Roadster Electric',
            'BMW 4 Series',
            'Lamborghini Veneno',
            'Nissam GTR ',
            'Ferrari Portofino',
            'McLarem MP4-12C Spider'
          ].map(modelName => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description=""
                />
              }
            />
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  )
}

export default Page
