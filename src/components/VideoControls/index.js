import React from 'react';
import PropTypes from 'prop-types';
import VideoControlItem from '../../components/VideoControlItem'
import { sortData } from '../../utils/helpers'

require('./VideoControls.css');

const VideoControls = (props) => {
    let sortedData = sortData(props.videos);
    return (
        <div className="user-control-container">

            { sortedData.map((video) => {
                return <VideoControlItem
                    key = {video.id}
                    admin={props.adminUser}
                    video={video}
                    handlePlayButton={props.handlePlayButton}
                    editVideoInStore={props.editVideoInStore}
                    selected={props.selected}
                />
                })
            }

            { props.videos.length === 0 ? <div> There is no video</div> : null }
        </div>
    );

};

VideoControls.propTypes = {
    videos: PropTypes.array,
    handlePlayButton: PropTypes.func,
    adminUser: PropTypes.bool,
};
VideoControls.defaultProps = {
    videos: [],
    handlePlayButton: () => {},
    adminUser: false,
};

export default VideoControls;
