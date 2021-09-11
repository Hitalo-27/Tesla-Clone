import styled from 'styled-components'

import Camaro from '../../assets/img/camaro2.jpg';
import Tesla from '../../assets/img/tesla.jpg';
import BMW from '../../assets/img/bmw.jpg';
import Lambo from '../../assets/img/Lamborghini_Veneno.jpg';
import Nissam from '../../assets/img/nissam.jpg'
import Ferrari from '../../assets/img/Ferrari_Portofino.jpg'
import McLarem from '../../assets/img/mclarem.jpg'


export const Container = styled.div`
  .colored:nth-child(1) {
    background-image: url(${Camaro});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
  }
  .colored:nth-child(2) {
    background-image: url(${Tesla});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(3) {
    background-image: url(${BMW});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(4) {
    background-image: url(${Lambo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(5) {
    background-image: url(${Nissam});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(6) {
    background-image: url(${Ferrari});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .colored:nth-child(7) {
    background-image: url(${McLarem});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`

export const Spacer = styled.div`
  height: 15vh;
  background: #1e2229;
`
