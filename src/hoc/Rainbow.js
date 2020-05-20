import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow', 'magenta'];
    const randomColour = colors[Math.floor(Math.random() * colors.length)];
    const className = "navwrapper "+randomColour+" darken-1";

    return (props) => {
        return (
            <nav className={className}>
                <WrappedComponent {...props}/>
            </nav>
        )
    }
}
export default Rainbow;