import React from 'react';

class CreateRef extends React.Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }
    
    render() {
        return (
            <div>
                <input ref={this.handleFocus} />
            </div>
        )
    }
}

export default CreateRef;