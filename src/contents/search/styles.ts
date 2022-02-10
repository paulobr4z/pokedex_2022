import styled, { css, CSSProp } from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export const ContainerContentSearch = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  z-index: 1;
`;

export const ContainerPokemonDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f0f0f0;
  width: 100%;
  margin: 0 auto;
  max-width: 500px;
  margin-top: 50px;
  background: #161817;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: #7AC74C;
    border-radius: 16px 16px 0 0;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      font-size: 14px;
      padding: 32px 32px 0 32px;
    }

  }

  footer {
    position: relative;
    top: -60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f0f0f0;
    width: 100%;
    border-radius: 32px 32px 16px 16px;
    padding: 32px;
    padding-top: 64px;
    color: black;
  }

  .pokemonImage {
    position: relative;
    top: -20px;
    width: 60%;
    z-index: 1;

    img {
      width: 100%;
    }
  }
`;

export const BackIcon = styled(FiChevronLeft)`
  color: white;
  font-size: 28px;
  cursor: pointer;
  color: #f0f0f0;
`;

export const LikedIcon = styled(AiFillHeart)`
  color: white;
  font-size: 28px;
  cursor: pointer;
  color: #f0f0f0;
`;

export const UnlikedIcon = styled(AiOutlineHeart)`
  color: white;
  font-size: 28px;
  cursor: pointer;
  color: #f0f0f0;
`;