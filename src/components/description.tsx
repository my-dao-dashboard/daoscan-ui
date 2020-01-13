import React from "react";
import styled from "@emotion/styled";

const Element = styled.div({
  borderLeft: ".2rem solid gray",
  padding: "0px .6rem",
  margin: '0 0 1rem 0',
  color: 'gray'
});

export function Description() {
  return <Element>Daoscan indexes Ethereum blockchain and provides up to date information on DAO activity</Element>;
}
