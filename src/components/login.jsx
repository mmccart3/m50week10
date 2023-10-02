function Login(parameters) {
    return (
        <div>
            <input onChange = {(event) => parameters.setUser(event.target.value) }></input>
            <input onChange = {(event) => parameters.setPassword(event.target.value) }></input>
        </div>
    )
}

export default Login;