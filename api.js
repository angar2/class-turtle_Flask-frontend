const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5500"

async function handleSignup() {

    const signupData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }

    // fetch로 보낸 요청을 보내고 온 응답을 response에 담음
    // await: fetch가 끝날 때까지 기다린 후 완료되면 다음 줄로 넘어감
    const response = await fetch(`${backend_base_url}/signup`, {
        method: 'POST',
        body: JSON.stringify(signupData) // js object를 json형식으로 바꿔주어야함.
    })
    response_json = await response.json()

    if (response.status == 200) {
        window.location.replace(`${frontend_base_url}/login.html`);
    } else {
        alert(response.status)
    }
}

async function handleLogin() {

    const loginData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById('floatingPassword').value
    }

    const response = await fetch(`${backend_base_url}/login`, {
        method: 'POST',
        body: JSON.stringify(loginData)
    })

    response_json = await response.json() // json 함수에서 바로 꺼내 쓸 수 없으므로 변수로 지정함
    localStorage.setItem("user_token", response_json.token) // token 저장
    console.log(response_json)
}