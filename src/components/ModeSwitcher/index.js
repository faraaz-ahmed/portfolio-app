import './ModeSwitcher.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../store/actions/ModeAction';

const ModeSwitcher = () => {
	const dispatch = useDispatch();
	const { mode } = useSelector((state) => state.mode);

	const dispatchOnClick = () => {
		console.log(' mode action dispatched');
		dispatch(toggleMode(mode));
	};

	return (
		<>
			<label className='switch'>
				<input type='checkbox' onClick={dispatchOnClick}></input>
				<span className='slider round'></span>
			</label>

			{/*  <!-- Social Icons --> */}
			{/* <div class="social-icons">
        <a href="https://twitter.com/VisnuRavichand1" target="_blank">
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
        </a>
        <a href="https://dribbble.com/visnuravichandran" target="_blank">
          <img src="https://img.icons8.com/office/30/000000/dribbble.png" />
        </a>
      </div> */}
		</>
	);
};

export default ModeSwitcher;
