import Login from "../../../components/Login/Login";

export default {
  title: 'components/Login',
  component: Login,
  tags: ['autodocs'],
  argTypes: {
    error: {
      control: 'boolean',
      description: 'ランキング表示の有無',
      defaultValue: false,
    },
  },
};

const Template = () => <Login />;

export const Default = Template.bind({});
