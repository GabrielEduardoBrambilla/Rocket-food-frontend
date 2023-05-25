import { Header } from '../../components/Header'
import dishImg from '../../assets/dishes/Dish.png'
import { Card } from '../../components/Card'
import { Container } from "./styles"

export function Home() {


  return (
    <Container>
      <Header />
      <Card id_Dish={1} img={dishImg} description={""} title="Passion fruit Juice" price="10,25" />
    </Container>
  )
}