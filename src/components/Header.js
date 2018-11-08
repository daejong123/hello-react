import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {

    clickEvent(title) {
        this.props.onHeaderClick(title);
    }

    render() {
        return (
            <div>
                {this.props.msg}
                {this.props.title}
                {this.props.children}
                <button onClick={this.clickEvent.bind(this, 'hello world!')}>sayHi</button>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}