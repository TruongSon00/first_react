import react from "react";
import reactDom from "react-dom";

const time = () => {
    return (
        <div>
            <h1>Current Time: {new Date().toLocaleTimeString()}</h1>
        </div>
    )
}

class x extends react.Component {
    render() {
        return (
            <div>ngu lam con trai</div>
        )
    }
}

reactDom.render(<x.prototype.render />, document.getElementById('root'))
