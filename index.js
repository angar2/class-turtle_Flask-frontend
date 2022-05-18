async function loadArticle() {
    articles = await getArticles()
    console.log(articles)
    const article_list = document.getElementById("articles") // ol

    // forEach: 파라미터로 주어진 함수를 배열 각각 요소에 실행함(for문 처럼)
    articles.forEach(article => {
        console.log(article)
        const newArticle = document.createElement("li");
        newArticle.setAttribute("id", article._id) // 속성('id')을 주어진 배열('article')의 key값('_id')에 해당하는 value로 부여 = 해당 게시물의 _id값
        newArticle.innerText = article.title
        article_list.appendChild(newArticle) // 하위 Element로 추가
    });
}

loadArticle();
getName();