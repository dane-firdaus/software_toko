import React, { useState } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { useDispatch } from "react-redux";
import { Increment } from "../Store/Action/Product";
import { Decrement } from "../Store/Action/Product";
import { remove } from "../Store/Action/Product";

const Cart = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  padding: 0 0.3rem;
  margin: 0.5rem auto;
  background: #fff;
  box-shadow: 1px 1px 10px 1px #ccc;
`;
const CounterContainer = styled.div`
  display: flex;
  width: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5 0.5rem;
  margin: 0 0.5rem;
`;
const ItemName = styled.div`
width:40%
padding-left:0.5rem;
`;
const CounterTotal = styled.div`
  margin: 0 0.3rem;
`;
const Price = styled.div`
  width: 30%;
  text-align: center;
`;

const CartItem = ({ items }) => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
  const increment = (id) => {
    dispatch(Increment(id));
    console.log(id);
    setCount(count + 1);
  };
  const decrement = (id) => {
    setCount(count - 1);
    if (count > 1) {
      dispatch(Decrement(id));
    } else if (count === 1) {
      dispatch(remove(id));
    }
  };
  const resetHasil = () => {
    
  }
  return (
    <Cart>
      <ItemName>{items.name}</ItemName>
      <CounterContainer>
        <Counter inc={() => increment(items.id)} />
        <CounterTotal>{count}</CounterTotal>
        <Counter dec={() => decrement(items.id)} />
      </CounterContainer>
      <Price>{items.price}</Price>
    </Cart>
  );
};
export default CartItem;
