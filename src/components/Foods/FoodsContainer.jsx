import {connect} from 'react-redux';
import Foods from './Foods';

const mapStateToProps = (state) => {
	return {
		data: state.foods.data
	}
}

export default connect(mapStateToProps)(Foods);