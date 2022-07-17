import UiButton from './UiButton'
import PropTypes from "prop-types";
import {logger} from "@storybook/node-logger";

export default {
    title: 'Ui-kit/UiButton',
    component: UiButton
}


const Template = (args) => <UiButton {...args} />;

const props = {
    text: 'Hello',
    onClick: () => console.log('Button click'),
    disabled: false,
    theme: 'light',
    classes: '',
}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light'
};

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'light'
};

export const Disabled = Template.bind({});

Disabled.args = {
    ...props,
    disabled: true
};
