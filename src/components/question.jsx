import React from 'react';

class TracNGhiem extends React.Component {

    state = {
        count: 0,
        questions: [
            {
                question: 'day la cau 1',
                ans: [
                    'dap an A',
                    'dap an B',
                    'dap an C',
                    'dap an D',
                ]
            },

            {
                question: 'day la cau 1',
                ans: [
                    'dap an A',
                    'dap an B',
                    'dap an C',
                    'dap an D',
                ]
            },

            {
                question: 'day la cau 1',
                ans: [
                    'dap an A',
                    'dap an B',
                    'dap an C',
                    'dap an D',
                ]
            },
        ]
    }

    person = () => {
        return <h1>hello: {this.props.name}</h1>
    }

    handleIncrement = (props) => {
        this.setState({ count: this.state.count + 1 });
        console.log(props)
    }



    renderQuestion = () => {
        const { questions } = this.state
        if (questions == null || questions === [])
            return <p>Chua co cau hoi nao</p>
        else {
            return questions.map((ques, index) => {
                return <div key={index}>
                    <h3>{ques.question}</h3>
                    {ques.ans.map((dapAn, index) => <p onClick={() => this.handleIncrement(this.props)} key={index}>{dapAn}</p>)}
                </div>
            })
        }
    }


    test = () => {
        const x = this.state.count || 'Zezo'
        return <h1>{x}</h1>
    }

    render() {
        return <div>
            {this.test()}
            {this.person()}
            {this.renderQuestion()}
        </div>;
    }
}

export default TracNGhiem;