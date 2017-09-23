import React from 'react';
import PropTypes from 'prop-types';

require('./Button.css');

const Button = (props) => {
    let buttonClass = 'ButtonComponent';
    buttonClass += props.standard ? ' standard-button' : '' ;
    buttonClass += props.large ? ' large-button' : '' ;
    buttonClass += props.transparent ? ' transparent-button' : '' ;
    buttonClass += props.red ? ' red-button' : '' ;
    buttonClass += props.blue ? ' blue-button' : '' ;
    buttonClass += props.inactive ? ' inactive-button' : '' ;
    buttonClass += props.transparentRed ? ' transparentRed-button' : '' ;
    buttonClass += props.orange ? ' orange-button' : '' ;

    let titleClass = 'button-text';
    titleClass += props.large ? ' button-large-text' : '' ;
    titleClass += props.transparentRed ? ' button-transparentRed-text' : '' ;
    titleClass += props.orange ? ' button-orange-text' : '' ;

    return (
        <div className={buttonClass} onClick={props.inactive ? null : props.onClickActions}>
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
    red: PropTypes.bool,
    blue: PropTypes.bool,
    transparentRed: PropTypes.bool,
    inactive: PropTypes.bool,
    orange: PropTypes.bool
};
Button.defaultProps = {
    buttonText: 'button text',
    onClickActions: () => { },
    standard: false,
    large: false,
    transparent: false,
    red: false,
    blue: false,
    transparentRed: false,
    inactive: false,
    orange: false
};

export default Button;
