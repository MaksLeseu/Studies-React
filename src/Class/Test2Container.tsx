import React from "react";
import Test2 from "./Test2";


class Test2Container extends React.Component<any, any> {
    valueProps =  0

    addValueProps = () => {
        this.valueProps += 10
        this.forceUpdate();
    }

    render() {
        return (
            <>
                <button onClick={this.addValueProps}>Update props</button>
                <button onClick={() => {console.log(this.valueProps)}}>What is the value of the props?</button>
                <Test2 value={this.valueProps} />
            </>
        )
    }
}

export default Test2Container