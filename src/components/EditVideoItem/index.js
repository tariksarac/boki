import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input'

const EditVideoItem = (props) => {
        return (
            <div className="admin-control-item">
                <Input type="text" label={props.label} onValueChange={props.handleItemChange} value={props.value}/>
            </div>
        );

};

EditVideoItem.propTypes = {
    handleItemChange: PropTypes.func
};
EditVideoItem.defaultProps = {
    handleItemChange: () => {}
};

export default EditVideoItem;
