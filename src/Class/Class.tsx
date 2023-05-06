import React from "react";

export class Test extends React.Component<any, any>{
    componentWillMount() {

    }

    componentDidMount() {
        const func = () => {
            this.props.callBack('new')
        }
    }
    componentWillUpdate(nextProps: Readonly<any>, nextState: Readonly<any>, nextContext: any) {

    }

    render() {
        return (
            <div>
                <h1>Hy. My name is.</h1>
                <button onClick={this.componentDidMount}>change</button>
                <h2>{this.props.state}</h2>
            </div>
        )
    }
}