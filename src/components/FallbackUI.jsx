const FallbackUI = ({error, resetErrorBoundary}) => {
    return (
        <div>
            <p>Error happened in component: {error.message}</p>
            <button onClick={resetErrorBoundary}>Reset</button>
        </div>
    )
};

export default FallbackUI;