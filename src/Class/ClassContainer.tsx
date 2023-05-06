import React from "react";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {Test} from "./Class";
import {AppStateType, contentAC} from "./store/store";

const mapStateToProps = (state: AppStateType) => {
    return {
        state: state.content.item
    }
}
const mapDispatchToProps = (dispath: Dispatch) => {
    return {
        callBack: (title: string) => {
            dispath(contentAC(title))
        }
    }
}

export const ClassContainer = connect(mapStateToProps, mapDispatchToProps)(Test)