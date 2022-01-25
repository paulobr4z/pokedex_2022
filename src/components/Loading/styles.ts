import styled, { css, CSSProp } from 'styled-components';

export const LoadingContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	.pokeball {
    position: relative;
    width: 80px;
    height: 80px;
    background: #fff;
    border: 5px solid #000;
    border-radius: 50%;
    overflow: hidden;
    margin: 20px;
    box-shadow: inset -10px 10px 0 10px #ccc;
    animation: shake 1.25s cubic-bezier(.36,.07,.19,.97) infinite;
  }
  .pokeball::before,
  .pokeball::after {
    content:"";
    position: absolute;
  }
  .pokeball::before {
    background: red;
    width: 100%;
    height: 50%;
  }
  .pokeball::after {
    top: calc(50% - 2px);
    width: 100%;
    height: 5px;
    background: #000;
  }
  .pokeball__button {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    background: #7f8c8d;
    border: 5px solid #fff;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 5px black;
    animation: blink .5s alternate infinite;
  }
  /* Animation */
  @keyframes blink {
    from { background: #eee;}
    to { background: #e74c3c; }
  }
  @keyframes shake {
    0% { transform: translate(0, 0) rotate(0); }
    20% { transform: translate(-10px, 0) rotate(-20deg); }
    30% { transform: translate(10px, 0) rotate(20deg); }
    50% { transform: translate(-10px, 0) rotate(-10deg); }
    60% { transform: translate(10px, 0) rotate(10deg); }
    100% { transform: translate(0, 0) rotate(0); }
  }
`;