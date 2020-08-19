import {connect} from 'react-redux';
import Foods from './Foods';
import {toggleSelected} from '../../redux/foods-reducer';

const mapStateToProps = (state) => {
	return {
		data: state.foods.data
	}
}

export default connect(mapStateToProps, {toggleSelected})(Foods);