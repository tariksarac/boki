import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input'

class EditVideoItem extends Component {
    render() {
        return (
            <div className="admin-control-item">
                <Input type="text" label={this.props.label} onValueChange={this.props.handleItemChange} value={this.props.value}/>
            </div>
        );
    }
}

EditVideoItem.propTypes = {};
EditVideoItem.defaultProps = {};

export default EditVideoItem;
