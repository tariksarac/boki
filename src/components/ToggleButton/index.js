import React from 'react'
import PropTypes from 'prop-types'

require('./ToggleButton.css');


class ToggleButton extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedOption: 0
        };

        this.getOptions = this.getOptions.bind(this)
    }

    handleSelectOptions(index){
        this.setState({ selectedOption: index});
        this.props.onClickAction(index)
    }

    getOptions(){
        let optionsName = [ 'User View', 'Admin View'];
        let optionOneClass = this.state.selectedOption===0 ? `option selected` : `option`;
        let optionTwoClass = this.state.selectedOption===1 ? `option selected` : `option`;

        return optionsName.map((option, index) => <div
            key={index}
            className={index===0? optionOneClass : optionTwoClass}
            onClick={() => this.handleSelectOptions(index)}>{option}</div>
        )

    }

    render(){
        let options = this.getOptions();
        return (
            <div className="ToggleButton">
                <div className="toggle-options">
                    {options}
                </div>
            </div>
        )
    }
}

ToggleButton.propTypes = {
    onClickAction: PropTypes.func,
    // optionOneText: PropTypes.string,
    // optionTwoText: PropTypes.string,
    selectedOption: PropTypes.number,
};

ToggleButton.defaultProps = {
    onClickAction: () => { },
    // optionOneText: 'optionOne',
    // optionTwoText: 'optionTwo',
    selectedOption: null,
};

export default ToggleButton;
