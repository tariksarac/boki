import { connect } from 'react-redux'
import UserView from './UserView'
import { addVideoToStore, editVideoInStore } from '../../actions/videoActions'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state) => {
    return { videos: state.videoData.videos };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addVideoToStore, editVideoInStore }, dispatch)
};

const UserViewContainer = connect(mapStateToProps, mapDispatchToProps)(UserView);

export default UserViewContainer