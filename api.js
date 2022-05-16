async function handleSignin() {

    const signupData = {
        email: document.getElementById("floatingInput").value,
        pw: document.getElementById("floatingPassword").value
    }


    // await: fetch가 끝날 때까지 기다린 후 완료되면 다음 줄로 넘어감
    const response = await fetch('http://127.0.0.1:5000/signup', {
        method: 'POST',
        body: JSON.stringify(signupData) // js object를 json형식으로 바꿔주어야함.
    })
    console.log(response)
}