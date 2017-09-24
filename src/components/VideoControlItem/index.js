import React, {Component} from 'react';
import EditVideo from '../../components/EditVideo'

require('./VideoControlItem.css');
let play = require('../../images/play.png');
let settings = require('../../images/settings.png');
let stop = require('../../images/stop.png');

class VideoControlItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            showEdit: false,
            video: this.props.video,
            playVideo: this.props.video.id === this.props.selected
        };

        this.handleEditVideo = this.handleEditVideo.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.video){
            this.setState({ video: nextProps.video})
        }
        if(nextProps.selected!==undefined){
            this.setState({ playVideo: nextProps.video.id === nextProps.selected})
        }
    }

    handleEditVideo(){
        this.setState({ showEdit: !this.state.showEdit })
    }

    render() {
        let control = this.state.playVideo ? stop : play;
        return (
            <div className="user-control">
                <div className="control-item">
                    <div className="play"
                         onClick={() => { this.props.handlePlayButton(this.props.video); this.setState({ playVideo: !this.state.playVideo})} }>
                        <img src={control} alt="play"/><div className="video-name">{this.state.video.name}</div>
                    </div>
                    { this.props.admin ?
                        <div className="play edit-icon" onClick={() => this.handleEditVideo()}>
                            <img src={settings} alt="edit"/>
                        </div>

                        : null }
                </div>
                { this.state.showEdit ? <EditVideo
                    editVideo={this.props.video}
                    onClickAction={ this.props.editVideoInStore }
                    closeEditing={this.handleEditVideo}/> : null }
            </div>
        );
    }
}

export default VideoControlItem;
