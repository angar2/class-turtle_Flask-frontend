async function loadArticle() {
    articles = await getArticles()
    const article_list = document.getElementById("articles") // ol

    // forEach: 파라미터로 주어진 함수를 배열 각각 요소에 실행함(for문 처럼)
    articles.forEach(article => {
        const newArticle = document.createElement("li");
        newArticle.setAttribute("id", article._id) // 속성('id')을 주어진 배열('article')의 key값('_id')에 해당하는 value로 부여 = 해당 게시물의 _id값
        newArticle.innerText = article.title
        newArticle.setAttribute("onclick", "articleDetail(this.id)") // this.id: 현재 가리키고 있는 Element의 id값 (즉 상단에서 부여한 게시물의 ObjectId)
        article_list.appendChild(newArticle) // 하위 Element로 추가
    });
}


async function checkLogin() {
    const name = await getName();

    const username = document.getElementById('username')
    const logoutButton = document.getElementById('logout')

    if (name) {
        username.innerText = name
        logoutButton.innerText = "로그아웃"
        logoutButton.setAttribute("onclick", "logout()")
    } else {
        username.innerText = "로그인을 해주세요"
        logoutButton.innerText = "로그인"
        logoutButton.setAttribute = ("onclick", "login()")
    }
}


checkLogin()
loadArticle();
// getName();