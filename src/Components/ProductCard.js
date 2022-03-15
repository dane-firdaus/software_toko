import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCart } from "../Store/Action/Product";


const Card = styled.div`
  width: 17%;
  height: 12rem;
  cursor: pointer;
  margin-top: 20px;
  background: pink;
  border-radius: 20px;
`;
const CardImage = styled.img`
  width: 100%;
  height: 50%;
  border-radius: 30px;
`;
const NamePrice = styled.div``;

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const AddToCart = (id) => {
    dispatch(addCart(id))
    console.log(id);
  };
  return (
    <Card onClick={() => AddToCart(item.id)}>
      <CardImage src={item.image} alt={item.name} />
      <NamePrice>
        <h5>{item.name}</h5>
        <h5>{item.price}</h5>
      </NamePrice>
    </Card>
  );
};
export default ProductCard;
