import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const LoadingCharacterCard = styled(motion.div)`
  padding: 150px 100px;
  box-shadow: 0 0 10px 1px lightgray;
  border-radius: 10px;
  background: linear-gradient(110deg, #eee 8%, #f5f5f5 18%, #eee 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: ${shine} 1s linear infinite;
`;

export const LoadingGridCard = styled(LoadingCharacterCard)`
  padding: 110px 100px;
`;