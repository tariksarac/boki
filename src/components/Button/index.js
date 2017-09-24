import React from 'react';
import PropTypes from 'prop-types';

require('./Button.css');

const Button = (props) => {
    let buttonClass = 'ButtonComponent';
    buttonClass += props.standard ? ' standard-button' : '' ;
    buttonClass += props.large ? ' large-button' : '' ;
    buttonClass += props.transparent ? ' transparent-button' : '' ;
    buttonClass += props.gray ? ' gray-button' : '' ;
    buttonClass += props.red ? ' red-button' : '' ;

    let titleClass = 'button-text';
    titleClass += props.large ? ' button-large-text' : '' ;
    titleClass += props.red ? ' button-red-text' : '' ;

    return (
        <div className={buttonClass} onClick={ props.onClickActions }>
            <div className={titleClass}>{props.buttonText}</div>
        </div>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
    onClickActions: PropTypes.func,
    standard: PropTypes.bool,
    large: PropTypes.bool,
    transparent: PropTypes.bool,
    gray: PropTypes.bool,
};
Button.defaultProps = {
    buttonText: 'button text',
    onClickActions: () => { },
    standard: false,
    large: false,
    transparent: false,
    gray: false,

};

export default Button;
