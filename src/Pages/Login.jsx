import Button from "../Components/Button"

const onClickHandler=()=>(console.log('Cliked btn to get logged'))

const Login = () => {
    return (<div>Hello from Login
        <Button onClick={onClickHandler} actionName={'Login'}/>
    </div>)
}

export default Login