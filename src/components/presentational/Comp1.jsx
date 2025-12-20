const Comp1 = ({count, increase}) => {
    return (
        <>
            <p>{count}</p>
            <button onClick={() => increase()}>+1</button>
        </>
    )
};

export default Comp1;