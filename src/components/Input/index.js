import React, {Component} from 'react';
import PropTypes from 'prop-types';

require('./Input.css');

class Input extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: this.props.value
        };

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value && nextProps.value.length > 0){
            this.setState({ value: nextProps.value})
        }
    }

    handleValueChange(event) {
        this.setState({ value: event.target.value });
        this.props.onValueChange(event.target.value);
    }

    render() {
        return (
            <div className="input-container">
               <label>{this.props.label}</label>
                <input
                    type={this.props.type}
                    placeholder={this.props.placeholderText}
                    value={this.state.value}
                    onChange={this.handleValueChange}
                />
            </div>
        );
    }
}

Input.propTypes = {
    onValueChange: PropTypes.func,
    placeholderText: PropTypes.string
};
Input.defaultProps = {
    onValueChange: () => { },
    placeholderText: ''
};

export default Input;
