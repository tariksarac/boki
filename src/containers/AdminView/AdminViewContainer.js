import { connect } from 'react-redux'
import AdminView from './AdminView'
import { addVideoToStore, deleteVideoInStore } from '../../actions/videoActions'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state) => {
    return { videos: state.videoData.videos };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addVideoToStore, deleteVideoInStore }, dispatch)
};

const AdminViewContainer = connect(mapStateToProps, mapDispatchToProps)(AdminView);

export default AdminViewContainer