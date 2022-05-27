const backend_base_url = "http://127.0.0.1:5000"
const frontend_base_url = "http://127.0.0.1:5500"

// 회원가입
async function handleSignup() {

    const signupData = {
        email: document.getElementById("floatingInput").value,
        password: document.getElementById("floatingPassword").value
    }

    // fetch('url', 'object') -> 성공 시: object 반환
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


// 로그인
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
    window.location.replace(`${frontend_base_url}/index.html`);
}


// 유저 이름 가져오기
async function getName() {

    token = localStorage.getItem("user_token")

    const response = await fetch(`${backend_base_url}/getuserinfo`, {
        headers: {
            'Authorization': localStorage.getItem("user_token")
        }
    })

    if (response.status == 200) {
        response_json = await response.json()

        return response_json
    } else {
        return null
    }
}


// 게시물 생성 데이터 보내기
async function postArticle(title, content) {

    const articleData = {
        title: title,
        content: content
    }

    const response = await fetch(`${backend_base_url}/article`, {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem("user_token")
        },
        body: JSON.stringify(articleData) // js object를 json형식으로 바꿔주어야함.
    })

    response_json = await response.json()

    if (response.status == 200) {
        window.location.replace(`${frontend_base_url}/`);
    } else {
        alert(response.status)
    }
}


// 전체 게시물 데이터 불러오기
async function getArticles() {
    const response = await fetch(`${backend_base_url}/article`, {
        method: 'GET',

    })
    response_json = await response.json()
    return response_json.articles
}


// 로그아웃
function logout() {
    localStorage.removeItem("user_token")
    window.location.replace(`${frontend_base_url}/login.html`);
}


// 특정 게시물 상세페이지 이동
function articleDetail(article_id) {
    console.log(article_id)
    const url = `${frontend_base_url}/article_detail.html?id=${article_id}`
    location.href = url
}


// 특정 게시물 데이터 불러오기
async function getArticleDetail(article_id) {
    const response = await fetch(`${backend_base_url}/article/${article_id}`, {
        method: 'GET'
    })
    response_json = await response.json()

    return response_json.article
}


// 게시물 수정 데이터 보내기
async function patchArticle(article_id, title, content) {

    const articleData = {
        "title": title,
        "content": content
    }

    const response = await fetch(`${backend_base_url}/article/${article_id}`, {
        method: 'PATCH',
        headers: {
            'Authorization': localStorage.getItem("user_token")
        },
        body: JSON.stringify(articleData)
    })

    if (response.status == 200) {
        response_json = await response.json()
        return response_json
    } else {
        alert(response.status)
    }
}


// 게시물 삭제 요청
async function deleteArticle() {
    const response = await fetch(`${backend_base_url}/article/${article_id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': localStorage.getItem("user_token")
        }
    })
    if (response.status == 200) {
        window.location.replace(`${frontend_base_url}/`)
    } else {
        alert(response.status)
    }
}


// 댓글 저장 요청
async function postComment(article_id, comment_content) {

    const commentData = {
        "content": comment_content
    }

    const response = await fetch(`${backend_base_url}/article/${article_id}/comment`, {
        method: 'POST',
        headers: {
            'Authorization': localStorage.getItem("user_token")
        },
        body: JSON.stringify(commentData)
    })

    if (response.status == 200) {
        return response
    } else {
        alert(response.status)
    }
}