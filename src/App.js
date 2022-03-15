import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";
import * as Theme from "./Styled/Theme";
import ListMenu from "./Components/ListMenu";
import CalculateBox from "./Components/CalculateBox";
import ProductCard from "./Components/ProductCard";
import { useSelector } from "react-redux";
import CartItem from "./Components/CartItem";

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
`;
const ProduckContainer = styled.div`
  width: 60%;
  height: 100%;
  background: ${(props) => props.theme.grey};
  border-left: 2px solid green;
  border-right: 2px solid green;
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0.5rem;
`;

const App = () => {
  const product = useSelector((state) => state.product.products);
  const carts = useSelector((state) => state.product.carts);
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Header />
        <Container>
          <MenuContainer>
            <ListMenu />
          </MenuContainer>
          <ProduckContainer>
            {product.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))}
          </ProduckContainer>
          <CartContainer>
            <p>{carts ? `${carts.length} item in cart` : `0 item in cart`}</p>
            {carts.map((items) => (
              <CartItem key={items.id} items={items} />
            ))}
            <CalculateBox />
          </CartContainer>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default App;
