import React from 'react'
import EditVideo from '../../components/EditVideo'
import VideoList from '../../components/VideoList'
import Button from '../../components/Button'

require('./AdminView.css');

class AdminView extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            editVideo: null
        }
    }
    render(){
        return (
            <div>
                <Button buttonText={'Go back'} transparent large onClickActions={() => this.props.history.goBack()}/>

                <div className="admin-container">
                    <div className="admin-control-description">List of videos</div>
                    <VideoList
                        videos={this.props.videos}
                        deleteVideoInStore={this.props.deleteVideoInStore}
                    />

                    <div className="admin-control-description">Add new video</div>
                    <EditVideo
                        editVideo={this.state.editVideo}
                        onClickAction={this.props.addVideoToStore}/>
                </div>
            </div>
        )
    }

}

export default AdminView
