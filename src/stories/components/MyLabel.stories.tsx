import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";


export default{
    title: 'ReactCourse/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: { type: 'select' } },
        allCaps: { control: { type: 'boolean'  }, defaultValue: false },
        color: { control: { type: 'select' } },
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args }/>

export const Basic = Template.bind({});
//Default values
Basic.args={
    label: 'custom label text',
    size: 'normal'
}
export const AllCaps = Template.bind({});
AllCaps.args={
    label: 'custom label text',
    allCaps: true,
    size: 'normal'
}
export const Secundary = Template.bind({});
Secundary.args={
    label: 'custom label text',
    color: 'secondary',
    size: 'normal'
}

export const Tertiary = Template.bind({});
Tertiary.args={
    label: 'custom label text',
    color: 'tertiary',
    size: 'normal'
}