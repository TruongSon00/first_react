import reactDom from 'react-dom';

const time = () => {
    const elemet = (
        <div>
            <h1>date: {new Date().toLocaleDateString()}</h1>
            <h1>current Time: {new Date().toLocaleTimeString()}</h1>
        </div>
    )
    reactDom.render(elemet, document.getElementById('root'))
}

setInterval(() => {
    time()
}, 1000);