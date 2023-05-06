import React from "react";

class Test3 extends React.Component<any, any> {
    constructor(props: any) {
        console.log('constructor')
        super(props);
        this.state = {date: new Date()};
    }

    timerID: any;

    componentDidMount() {
        console.log('component Did mount')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        console.log('component Did unmount')
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Test3