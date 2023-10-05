import {writeCookie} from "../utils/utilities"

function Register(parameter) {
    async function registerUser(username, email, password) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/users/register`, {
                method: "POST",
                headers:{"Content-Type" : "application/json"},
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            })
            const data = await response.json()
            console.log(data.user.token)
            writeCookie("jwt_token", data.user.token, 7)
            parameter.setLoggedIn(true)
        } catch (error) {
            console.log(error)
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        registerUser(parameter.username, parameter.email, parameter.password);
    }
    return (
        <div>
                        <hr></hr>
        <h2>Register User</h2>
        <form onSubmit={handleSubmit}>

            <label for="name">Enter your username: </label>
            <input onChange = {(event) => parameter.setUsername(event.target.value) } type="text" className="name" id="name" required />
            <br></br>
            <label for="email">Enter your email: </label>
            <input onChange = {(event) => parameter.setEmail(event.target.value) }type="email" name="email" id="email" required />
            <br></br>
            <label for="password">Enter your password: </label>

            <input onChange = {(event) => parameter.setPassword(event.target.value) }type="password" name="password" id="password" required />
            <br></br>
            <input type="submit" />
        </form>
        <hr></hr>


    </div>
    )
};

export default Register;