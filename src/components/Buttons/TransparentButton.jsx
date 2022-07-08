import DefaultButton from "./DefaultButton";

const TransparentButton = (props) => {
    const { className, ...rest } = props;
    return (
        <DefaultButton className='transparent' {...rest} />
    );
}

export default TransparentButton;