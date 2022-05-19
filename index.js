async function loadArticle() {
    articles = await getArticles()
    const article_list = document.getElementById("articles") // ol

    // forEach: 파라미터로 주어진 함수를 배열 각각 요소에 실행함(for문 처럼)
    articles.forEach(article => {
        const newArticle = document.createElement("li");
        newArticle.setAttribute("id", article._id) // 속성('id')을 주어진 배열('article')의 key값('_id')에 해당하는 value로 부여 = 해당 게시물의 _id값
        newArticle.innerText = article.title
        article_list.appendChild(newArticle) // 하위 Element로 추가
    });
}


async function checkLogin() {
    const email = await getName();

    const user_email = document.getElementById('user_email')
    const logoutButton = document.getElementById('logout')

    if (email) {
        user_email.innerText = email
        logoutButton.innerText = "로그아웃"
        logoutButton.setAttribute("onclick", "logout()")
    } else {
        user_email.innerText = "로그인을 해주세요"
        logoutButton.innerText = "로그인"
        logoutButton.setAttribute = ("onclick", "login()")
    }
}


checkLogin()
loadArticle();
// getName();