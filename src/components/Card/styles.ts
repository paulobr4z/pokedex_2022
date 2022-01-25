import styled, { css, CSSProp } from 'styled-components';

export const ContainerCard = styled.div`
	display: flex;
	flex-direction: column;
  width: 300px;

	.normal {background-color: #A8A77A}
	.fire {background-color: #EE8130}
	.water {background-color: #6390F0}
	.electric {background-color: #F7D02C}
	.grass {background-color: #7AC74C}
	.ice {background-color: #96D9D6}
	.fighting {background-color: #C22E28}
	.poison {background-color: #A33EA1}
	.ground {background-color: #E2BF65}
	.flying {background-color: #A98FF3}
	.psychic {background-color: #F95587}
	.bug {background-color: #A6B91A}
	.rock {background-color: #B6A136}
	.ghost {background-color: #735797}
	.dragon {background-color: #6F35FC}
	.dark {background-color: #705746}
	.steel {background-color: #B7B7CE}
	.fairy {background-color: #D685AD}

	header {
		height: 350px;
		padding: 16px;
		border-radius: 16px;

		h1 {
			font-size: 20px;
			margin-bottom: 16px;
			color: white;
		}

		.types {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			column-gap: 8px;

			span {
				padding: 4px 24px;
				background: white;
				border-radius: 100px;
				margin-right: 8px;
				font-size: 14px;
			}
		}
	}

	main {
		position: relative;
		background: white;
		border-radius: 32px 32px 16px 16px;
		transform: translateY(-40px);
		padding: 16px;
		box-shadow: 0px 4px 8px rgba(48, 46, 69, 0.08);

		h1 {
			font-size: 18px;
			margin-top: 40px;
			margin-bottom: 8px;
			text-align: start;
			width: 100%;
		}

		.sprites {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: center;
			top: -200px;
			width: 100%;

			img {
				width: 80%;
			}
		}

		.stats {
			display: grid;
			grid-template-columns: 90px 50px 1fr;
			flex-direction: column;
			align-items: center;
			width: 100%;
			row-gap: 8px;

			.barStats {
				height: 5px;
				width: 100%;
				background: #EEEEEE;
				border-radius: 10px;
				overflow: hidden;

				.bar {
					height: 100%;
					background: #49D0B0;
					border-radius: 10px;
				}
			}
		}
	}
`;