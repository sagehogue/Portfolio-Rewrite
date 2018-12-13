import React, { Component } from 'react';
import './PageModal.module.css';

class PageModal extends Component {
    state = {
        currentPage: "splash",
    }
    render() {
        return (
            <div className={"PageModal"}>
                {this.props.children}
            </div>
        )
    }
}

export default PageModal