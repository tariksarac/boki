import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button'
import EditVideoItem from '../../components/EditVideoItem'
import { getNewId } from '../../utils/helpers'

class EditVideo extends Component {
    constructor(props){
        super(props);

            this.state = {
                id:  this.props.editVideo ? this.props.editVideo.id : getNewId(),
                url:  this.props.editVideo ? this.props.editVideo.url : '',
                name:  this.props.editVideo ? this.props.editVideo.name : ''
            }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.editVideo){
            this.setState({ ...nextProps.editVideo})

        }
    }
    render() {
        return (
            <div >
                <EditVideoItem
                    value={this.state.url}
                    label={'Enter a video url'}
                    handleItemChange={ (newValue) => this.setState({ url: newValue}) }/>
                <EditVideoItem
                    value={this.state.name }
                    label={'Enter Name'}
                    handleItemChange={ (newValue) => this.setState({ name: newValue}) }/>
                <div className="admin-control-button">
                    <Button buttonText={'Save'} standard gray
                            onClickActions={() => {
                                this.props.onClickAction(
                                    {
                                        id: this.props.editVideo ? this.props.editVideo.id : getNewId(),
                                        url: this.state.url,
                                        name: this.state.name
                                    }
                                );this.props.closeEditing()
                                }
                            }

                    />
                </div>
            </div>
        );
    }
}

EditVideo.propTypes = {
    closeEditing: PropTypes.func
};
EditVideo.defaultProps = {
    closeEditing: () => { }
};

export default EditVideo;
