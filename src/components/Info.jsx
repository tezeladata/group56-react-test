const Info = (props) => {
    console.log(props.children)

    return (
        <>
            {props.children}
            <hr />
        </>
    )
}

export default Info;