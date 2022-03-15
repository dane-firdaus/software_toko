import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../Store/Action/Product";

const Box = styled.div`
  position: fixed;
  bottom: 0;
  width: 20rem;
  height: 10rem;
  box-shadow: 1px 1px 10px 1px #000;
  padding: 0.4rem;
  margin-left: 0.5rem;
`;
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`;
const Pay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
  input[type="number"] {
    border: none;
    border-bottom: 3px solid #000;
    font-weight: bold;
    text-align: right;
    &:focus {
      outline: none;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`;
const Change = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CalculateBox = () => {
  const carts = useSelector((state) => state.product.carts);
  const total = carts.reduce((totalPrice, current) => totalPrice + current.price, 0);
  const resets = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const [pay, setPay] = useState("");
  const [kembalian, setKembalian] = useState("");
  const handleChange = (e) => {
    setPay(e.target.value);
  };
  const calculateKembalian = () => {
    if (pay > total) {
      setKembalian(pay - total);
    } else {
      return "uang nya kurang";
    }
  };
  const resetCarts = () => {
    dispatch(reset());
    setKembalian("");
    setPay("");
  };
  return (
    <Box>
      <Total>
        <h4>Total</h4>
        <h4>{total}</h4>
      </Total>
      <Pay>
        <p>Jumblah Bayar</p>
        <input type="number" value={pay} onChange={handleChange} />
      </Pay>
      <Change>
        <p>Kembalian</p>
        <p>{kembalian}</p>
      </Change>
      <BtnBox>
        <Button text="batalin aja" action={resetCarts} />
        <Button primary action={calculateKembalian} text="selesai print invoice" />
      </BtnBox>
    </Box>
  );
};
export default CalculateBox;
