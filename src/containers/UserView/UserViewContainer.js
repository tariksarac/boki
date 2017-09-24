import { connect } from 'react-redux'
import UserView from './UserView'
import { editVideoInStore } from '../../actions/videoActions'
import { changeUserRole } from '../../actions/userActions'
import { bindActionCreators } from 'redux'


const mapStateToProps = (state) => {
    return {
        videos: state.videoData.videos,
        isAdmin: state.user.isAdmin
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ editVideoInStore, changeUserRole }, dispatch)
};

const UserViewContainer = connect(mapStateToProps, mapDispatchToProps)(UserView);

export default UserViewContainer