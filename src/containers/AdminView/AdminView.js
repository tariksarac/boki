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
                <Button buttonText={'Go back'} onClickActions={() => this.props.history.goBack()}/>

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



            // <AdminControl>
            //     <EditVideo
            //         editVideo={this.state.editVideo}
            //         onClickAction={this.props.addVideoToStore}/>
            // </AdminControl>
        )
    }

}

export default AdminView

const AdminControl = (props) => {
    return (
        <div className="admin-container">
            <VideoList />
            <div className="admin-control-description">Add new video</div>
            {props.children}
        </div>
    )
};
