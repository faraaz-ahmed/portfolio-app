import './ModeSwitcher.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../store/actions/ModeAction';

const ModeSwitcher = () => {
	const dispatch = useDispatch();
	const { mode } = useSelector((state) => state.mode);

	const dispatchOnClick = () => {
		dispatch(toggleMode(mode));
	};

	return (
		<>
			<label className='switch'>
				<input type='checkbox' onClick={dispatchOnClick}></input>
				<span className='slider round'></span>
			</label>
		</>
	);
};

export default ModeSwitcher;
