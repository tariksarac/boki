import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VideoControlItem from '../../components/VideoControlItem'
import { sortData } from '../../utils/helpers'

require('./VideoControls.css')

class VideoControls extends Component {
    render() {
        let sortedData = sortData(this.props.videos)
        return (
            <div className="user-control-container">

                { sortedData.map((video) => {
                    return <VideoControlItem
                        key = {video.id}
                        // showEdit={this.props.showEdit}
                        admin={this.props.adminUser}
                        video={video}
                        handlePlayButton={this.props.handlePlayButton}
                        editVideoInStore={this.props.editVideoInStore}
                        selected={this.props.selected}
                    />
                    })
                }

                { this.props.videos.length === 0 ? <div> There is no video</div> : null }
            </div>
        );
    }
}

VideoControls.propTypes = {
    videos: PropTypes.array,
    handlePlayButton: PropTypes.func,
    handleEditVideo: PropTypes.func,
    adminUser: PropTypes.bool,
    showEdit: PropTypes.bool
};
VideoControls.defaultProps = {
    videos: [],
    handlePlayButton: () => {},
    handleEditVideo: () => {},
    handleEditVideo: () => {},
    adminUser: false,
    showEdit: false
};

export default VideoControls;
