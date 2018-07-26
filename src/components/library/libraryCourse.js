import React, { Component } from 'react';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label calssName="library-course__title">Problem Solving</label>
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum blandit nibh, et venenatis quam tempor vel. Nam turpis enim, varius at arcu non, ultricies consectetur enim. </p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;