function Logout(parameter) {
    async function logout(setLoggedIn, setUsername, setUserList) {
        try {
            document.cookie = "jwt_token =; path=/; expires = Thu, 01 Jan 1970 00:00:01 GMT;";
            setUsername("");
            setLoggedIn(false);
            setUserList([]);
            console.log("logout")
            } catch (error) {
            console.log(error)
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        logout(parameter.setLoggedIn, parameter.setUsername, parameter.setUserList);
    }
    return (
        <div>
            <hr></hr>
        <h2>Logout</h2>
        <button onClick={handleSubmit}>LOGOUT</button>

        <hr></hr>


    </div>
    )
};

export default Logout;