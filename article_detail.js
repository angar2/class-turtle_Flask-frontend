const urlParams = new URLSearchParams(window.location.search); // 현재 url주소에서를 파라미터를 취할 때 사용
const article_id = urlParams.get('id');


// 특정 게시물 상세 페이지 데이터 보여주기
async function loadArticle(article_id) {
    const article = await getArticleDetail(article_id);

    const title = document.getElementById("title")
    const content = document.getElementById("content")
    const user_email = document.getElementById("user_email")
    const time = document.getElementById("time")

    title.innerText = article.title
    content.innerText = article.content
    user_email.innerText = article.user_email
    time.innerText = article.time
}

loadArticle(article_id)