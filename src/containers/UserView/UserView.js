import React, { Component } from 'react';
import Toggle from '../../components/ToggleButton/index'
import ReactPlayer from 'react-player'
import VideoControls from '../../components/VideoControls'
import Button from '../../components/Button'

require('./UserView.css')
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            adminUser: false,
            selectedVideo: this.props.videos[0],
            editVideo: null
        };

        this.handleUser = this.handleUser.bind(this);
        this.handlePlayButton = this.handlePlayButton.bind(this);
    }

    handleUser(){
        this.setState({ adminUser: !this.state.adminUser })
    }

    handlePlayButton(file){
        this.setState({ selectedVideo: file})
    }

    render() {
        return (
            <div className="App">
                <Toggle onClickAction={this.handleUser}/>
                <div className="presentation-container">
                    <VideoBox selectedVideo={ this.state.selectedVideo }/>
                    <VideoControls
                        videos={this.props.videos}
                        handlePlayButton={this.handlePlayButton}
                        adminUser={this.state.adminUser}
                        editVideoInStore={this.props.editVideoInStore}
                        selected={this.state.selectedVideo.id}
                    />
                    { this.state.adminUser ? <Button buttonText={'ADD NEW VIDEO'} onClickActions={() => this.props.history.push('/admin')}/> : null }
                </div>
            </div>
        );
    }
}

export default App;

const VideoBox = (props) => {
    return (
        <div className="video-container">
            <div className="video-box">
                <ReactPlayer url={props.selectedVideo.url} playing />
            </div>
            <div className="messages">{props.selectedVideo.name}</div>
        </div>
    )
};



// const AdminControl = (props) => {
//     return (
//         <div className="admin-container">
//             <div className="admin-control-description">Admin Panel</div>
//             {props.children}
//         </div>
//     )
// };
//
