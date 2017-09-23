import React, { Component } from 'react';
import './App.css';
import { videoStyle } from '../../constatnts/style'
import Toggle from '../../components/ToggleButton/index'
import { PlayButton, PauseButton } from 'react-player-controls'// TO DO !!!!!!!!!!!!!!
import Button from '../../components/Button/index';
import Input from '../../components/Input'
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

let play = require('../../images/play.png')
let settings = require('../../images/settings.png')


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            adminUser: false,
            selectedVideo: this.props.videos[0],
            showEdit: false,
            editVideo: null
        };

        this.handleUser = this.handleUser.bind(this);
        this.handlePlayButton = this.handlePlayButton.bind(this);
        this.handleEditVideo = this.handleEditVideo.bind(this);
    }

    handleUser(index){
         this.setState({ adminUser: index === 1 })
    }

    handlePlayButton(file){
        this.setState({ selectedVideo: file})
    }

    handleEditVideo(data){
        this.setState({ showEdit: !this.state.showEdit, editVideo: data})
    }

  render() {
        // console.log(this.props)
        // console.log(this.state)
    return (
        <div className="App">
            <div className="title">Bokio</div>
            <Toggle onClickAction={this.handleUser}/>

            <div className="container">

                <div className="presentation-container">
                    <VideoBox selectedVideo={ this.state.selectedVideo }/>
                    <PresentationControl
                        videos={this.props.videos}
                        handlePlayButton={this.handlePlayButton}
                        handleEditVideo={this.handleEditVideo}
                        adminUser={this.state.adminUser}
                        showEdit={this.state.showEdit}
                        editVideo={this.state.editVideo}
                    />
                </div>




                { this.state.adminUser ?
                <AdminControl >
                    <AdminControlItem
                        value={this.state.editVideo? this.state.editVideo.url : '' }
                        label={'Enter a video url'}
                        handleItemChange={(newValue) => this.videoUrl = newValue}/>
                    <AdminControlItem
                        value={this.state.editVideo? this.state.editVideo.name : '' }
                        label={'Enter Name'}
                        handleItemChange={(newValue) => this.videoName = newValue}/>
                    <div className="admin-control-button">
                        <Button buttonText={'Save'} standard
                                onClickActions={() => this.props.saveVideoToStore({ url: this.videoUrl, name: this.videoName })}/>
                    </div>
                </AdminControl>
                : null }
                <div className="admin-control-description">Here goes main setting description</div>

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

const PresentationControl = (props) => {
    return (
        <div className="user-control-container">
            { props.videos.map((video, index) => {
                return <PresentationControlItem
                    key = {index}
                    showEdit={props.showEdit}
                    editVideo={props.editVideo}
                    handleEditVideo={props.handleEditVideo}
                    admin={props.adminUser}
                    video={video}
                    handlePlayButton={props.handlePlayButton}/>
            }) }
            { props.videos.length === 0 ? <div> There is no video</div> : null }
        </div>
    )
};

const PresentationControlItem = (props) => {
    return (
        <div className="user-control">
            <div className="control-item">
                <div className="play" onClick={() => props.handlePlayButton(props.video)}><img src={play}/>{props.video.name}</div>
                { props.admin ?
                    <div className="play" onClick={() => props.handleEditVideo(props.video)} style={{justifyContent:'flex-end'}}><img src={settings} /></div>

                    : null }
            </div>
            { props.showEdit ?
                <div >
                    <AdminControlItem
                        value={props.editVideo.url }
                        label={'Enter a video url'}
                        handleItemChange={(newValue) => this.videoUrl = newValue}/>
                    <AdminControlItem
                        value={props.editVideo.name}
                        label={'Enter Name'}
                        handleItemChange={(newValue) => this.videoName = newValue}/>
                    <div className="admin-control-button">
                        <Button buttonText={'Save'} standard
                                onClickActions={() => props.editVideo({ url: this.videoUrl, name: this.videoName })}/>
                    </div>
                </div> : null
            }
        </div>
    )
};

const AdminControl = (props) => {
    return (
        <div className="admin-container">
            <div className="admin-control-description">Admin Panel</div>
            {props.children}
        </div>
    )
};

const AdminControlItem = (props) => {
    return (
        <div className="admin-control-item">
            <Input type="text" label={props.label} onValueChange={props.handleItemChange} value={props.value}/>
        </div>

    )
};
