// import React, { Component } from 'react';
// import './App.css';
// import { videoStyle } from '../../constatnts/style'
// import Toggle from '../../components/ToggleButton/index'
// import ReactPlayer from 'react-player'
// import VideoControls from '../../components/VideoControls'
// import EditVideo from '../../components/EditVideo'
//
// class App extends Component {
//     constructor(props){
//         super(props);
//
//         this.state = {
//             adminUser: false,
//             selectedVideo: this.props.videos[0],
//             showEdit: false,
//             editVideo: null
//         };
//
//         this.handleUser = this.handleUser.bind(this);
//         this.handlePlayButton = this.handlePlayButton.bind(this);
//         this.handleEditVideo = this.handleEditVideo.bind(this);
//     }
//
//     handleUser(index){
//          this.setState({ adminUser: index === 1 })
//     }
//
//     handlePlayButton(file){
//         this.setState({ selectedVideo: file})
//     }
//
//     handleEditVideo(data){
//         this.setState({ showEdit: !this.state.showEdit })
//     }
//
//   render() {
//     return (
//         <div className="App">
//             <Toggle onClickAction={this.handleUser}/>
//
//                 <div className="presentation-container">
//                     <VideoBox selectedVideo={ this.state.selectedVideo }/>
//                     <VideoControls
//                         videos={this.props.videos}
//                         handlePlayButton={this.handlePlayButton}
//                         handleEditVideo={this.handleEditVideo}
//                         adminUser={this.state.adminUser}
//                         showEdit={this.state.showEdit}
//                         editVideoInStore={this.props.editVideoInStore}
//                     />
//                 </div>
//
//                 { this.state.adminUser ?
//                 <AdminControl >
//                     <EditVideo
//                         editVideo={this.state.editVideo}
//                         onClickAction={this.props.addVideoToStore}/>
//                </AdminControl>: null }
//
//                 <div className="admin-control-description">Here goes main setting description</div>
//
//         </div>
//     );
//   }
// }
//
// export default App;
//
// const VideoBox = (props) => {
//     return (
//         <div className="video-container">
//             <div className="video-box">
//                 <ReactPlayer url={props.selectedVideo.url} playing />
//             </div>
//             <div className="messages">{props.selectedVideo.name}</div>
//         </div>
//     )
// };
//
//
//
// const AdminControl = (props) => {
//     return (
//         <div className="admin-container">
//             <div className="admin-control-description">Admin Panel</div>
//             {props.children}
//         </div>
//     )
// };
//
