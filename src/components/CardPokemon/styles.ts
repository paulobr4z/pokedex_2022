import styled, { css, CSSProp } from 'styled-components';

export const ContainerCardPokemon = styled.div`
	position: relative;
  width: 300px;
	overflow: hidden;
	
	.normal {background: #A8A77A}
	.fire {background: #EE8130}
	.water {background: #6390F0}
	.electric {background: #F7D02C}
	.grass {background: #7AC74C}
	.ice {background: #96D9D6}
	.fighting {background: #C22E28}
	.poison {background: #A33EA1}
	.ground {background: #E2BF65}
	.flying {background: #A98FF3}
	.psychic {background: #F95587}
	.bug {background: #A6B91A}
	.rock {background: #B6A136}
	.ghost {background: #735797}
	.dragon {background: #6F35FC}
	.dark {background: #705746}
	.steel {background: #B7B7CE}
	.fairy {background: #D685AD}

	.background {
		position: absolute;
		top: -60px;
		right: -50px;
		height: 120%;
		width: 120%;
		background: url('/pokeball.svg');
		background-repeat: no-repeat;
		background-size: cover;
		z-index: 1;
		opacity: 0.6;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 16px;
		border-radius: 16px;
		cursor: pointer;

		img {
			width: 80%;
			margin-bottom: 32px;
			z-index: 2;
		}

		h1 {
			font-size: 20px;
			margin-bottom: 16px;
			color: white;
			text-align: start;
			width: 100%;
		}

		.types {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			column-gap: 8px;
			width: 100%;

			span {
				padding: 4px 24px;
				background: white;
				border-radius: 100px;
				margin-right: 8px;
				font-size: 14px;
				color: black;
			}
		}
	}	
`;