import React from "react";

type StateType = {
    s1: number
}

type PropsType = {
    value: number
}

class Test2 extends React.Component<any, any> {
    constructor(props: StateType) {
        console.clear()
        console.log('constructor')
        super(props);
        this.state = {
            s1: this.props.value
        }
    }

    sendFunc =  () => {
        console.log('Button work')
        console.log('value props = ' + this.props.value)
        let val = this.state.s1
        this.setState({s1: this.props.value})
    }

   /* static getDerivedStateFromProps(props: PropsType, state: StateType) {
        console.log('static method')
        return {s1: props.value}
    }*/

    componentDidMount() {
        console.log('component Did mount')
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        if (this.props.value !== prevProps.value) {
            console.log('component Did update')
            this.setState({ s1: this.props.value })
        }
    }

    render() {
        return (
            <>
                {console.log('render')}
                <div>
                    <h2>I need to work more.</h2>
                    <button onClick={this.sendFunc}>push</button>
                    <div>{this.state.s1}</div>
                </div>
            </>
        )
    }
}

export default Test2