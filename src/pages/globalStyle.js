import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  }

  body{
  color: black;
  text-decoration: none;
  background-color: whitesmoke;
  }
`;
export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "140px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  /* background: ${({ inverse }) => (inverse ? "white" : "WhiteSmoke")}; */
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "100vh")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  @media screen and (max-width: 768px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 50px 0px 50px;
  @media screen and (max-width: 960px) {
    padding: 50px 30px;
  }
`;

// export const Section = styled.section`
//   padding: ${({ padding }) => (padding ? padding : "140px 0")};
//   margin: ${({ margin }) => (margin ? margin : "")};
//   /* background: ${({ inverse }) => (inverse ? "white" : "WhiteSmoke")}; */
//   position: ${({ position }) => (position ? position : "")};
//   width: ${({ width }) => (width ? width : "auto")};
//   min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
//   max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
//   height: ${({ height }) => (height ? height : "auto")};
//   max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
//   min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
//   @media screen and (max-width: 768px) {
//     padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
//   }
// `;

// export const Container = styled.div`
//   width: 100%;
//   max-width: 1300px;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 20px 50px 0px 50px;
//   @media screen and (max-width: 960px) {
//     padding: 50px 30px;
//   }
// `;

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  color: oliveDrab;
  margin-bottom: 2rem;
  width: 100%;

  text-align: center;
`;

export const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 1.5rem;
  color: oliveDrab;
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  width: ${({ width }) => (width ? width : "100%")};
  line-height: 1.06;
  text-align: left;
`;
export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 16px;
  color: oliveDrab;
  outline: none;
  border: 2px solid oliveDrab;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  &:before {
    background: oliveDrab;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: white;
  }
`;

export default GlobalStyle;
