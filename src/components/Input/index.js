import React, {Component} from 'react';
import PropTypes from 'prop-types';

require('./Input.css')

class Input extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: ''
        };

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        console.log('nextprops', nextProps)
        if(nextProps.value && nextProps.value.length > 0){
            console.log('ulazi')
            this.setState({ value: nextProps.value})
        }
    }

    handleValueChange(event) {
        console.log('ulazi i ovdjr')
        this.setState({ value: event.target.value });
        this.props.onValueChange(event.target.value);
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div className="input-container">
               <label>{this.props.label}</label>
                <input
                    type={this.props.type}
                    placeholder={this.props.placeholderText}
                    // ref={(input) => this.textInput = input}
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
