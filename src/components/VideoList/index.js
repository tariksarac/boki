import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { sortData } from '../../utils/helpers'
import Button from '../../components/Button'

require('./VideoList.css')

class VideoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            videos: this.props.videos
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.videos){
            this.setState({ videos: nextProps.videos})
        }
    }
    render() {
        let videos = sortData(this.state.videos)
        return (
            <div className="list-videos">
                {videos.map((video) => {
                    return <div key={video.id} className="list-item">
                        <div className="item-name">{video.name}</div>
                        <Button buttonText={'Delete'} onClickActions={() => this.props.deleteVideoInStore(video)}/>
                    </div>
                })}
            </div>
        );
    }
}

VideoList.propTypes = {};
VideoList.defaultProps = {};

export default VideoList;
