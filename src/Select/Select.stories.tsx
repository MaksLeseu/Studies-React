import React, {ChangeEvent, useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    Component: Select
}

export const MySelect = () => <Select />