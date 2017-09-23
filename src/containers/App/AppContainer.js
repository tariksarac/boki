import { connect } from 'react-redux'
import AppView from './App'
import { saveVideoToStore } from '../../actions/videoActions'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state) => {
    return { videos: state.videoData.videos };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ saveVideoToStore }, dispatch)
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppView);

export default AppContainer