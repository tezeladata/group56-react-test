const Comp1 = ({signedIn}) => {
    console.log(signedIn)

    if (signedIn) {
        return <p>Signed in</p>
    } else {
        return (
            <div>
                <p>Not signed in</p>
                <button>Click here to sign in</button>
            </div>
        )
    }
}

export default Comp1;