/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useHistory } from 'react-router-dom';

function NavCircle(props) {
	const history = useHistory();

	// const [scrollValue, setScrollValue] = useState(0);

	// function onScroll() {
	// 	const scrollValue = window.scrollX;
	// 	// console.log(`onScroll, window.scrollX: ${scrollValue}`)
	// 	setScrollValue(scrollValue);
	// }

	// const navAnimation = {
	// 	transform: `rotate(${scrollValue / 20}deg)`,
	// 	position: 'absolute',
	// };

	return (
		<div>

			<svg className='header' width='200px' height='200px'>
				<path
					id='curve'
					fill='none'
					d='
			M 100, 100
			m -75, 0
			a 75,75 0 1,0 150,0
			a 75,75 0 1,0 -150,0
			'
				/>

				<text width='500' className='circleTextSquare' style={props.navAnimation}>
					<textPath
						href='#curve'
						className='circleText'
						id='ct1'
						pointerEvents='visiblePoint'>
						<tspan x='0' dy='0' pointerEvents='visiblePoint' id='tspan'>
							<a
								className='navlink'
								id='nav1'
								onClick={(e) => {
									e.preventDefault();
									history.push(
										props.completedUsername ? '/' + props.completedUsername : '/usersign');
								}}>
								{/* ––––– user ––––– */}
								││ user∜ ∝ ∞ ∟
							</a>
						</tspan>

						<tspan x='115' dy='0'>
							<a
								className='navlink'
								id='nav2'
								onClick={(e) => {
									e.preventDefault();
									history.push('/colors');
								}}>
								{/* -––– colors ––––- */}
								││ colors♕☯☭☠
							</a>
						</tspan>

						<tspan x='225' dy='0'>
							<a
								className='navlink'
								id='nav3'
								onClick={(e) => {
									e.preventDefault();
									history.push('/mediums');
								}}>
								{/* –––– mediums –––– */}
								││ mediums⋬ ⋭ ⋮
							</a>
						</tspan>

					<tspan x='355' dy='0'>
						<a
							className='navlink'
							id='nav4'
							onClick={(e) => {
								e.preventDefault();
								history.push('/artists');
							}}>
							{/* –––– artists ––––– */}
							││ artists ◰ ◱ ▲
						</a>
					</tspan>
				</textPath>
			</text>
		</svg>
		</div>
	);
}

export default NavCircle;
