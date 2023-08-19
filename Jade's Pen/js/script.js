/*function addComment() {
    const newCommentText = document.getElementById("new-comment").value;
    if (newCommentText.trim() !== "") {
        const commentsContainer = document.querySelector(".comments");
        const newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.innerHTML = "<p><span>User:</span> ${newCommentText} </p>";
        commentsContainer.appendChild(newComment);
        document.getElementById("new-comment").value =""
    }
}*/

document.getElementById("submit").addEventListener("click",function(){
    var commentText = document.getElementById("new-comment").value;
    var commentName = document.getElementById("name").value;
    if (commentText !== "") {
        var commentElement = document.createElement("div");
        commentElement.className ="new-comment";
        commentElement.textContent = commentName + ": "+ commentText;
        document.getElementById("comment-list").appendChild(commentElement);
        document.getElementById("new-comment").value="";
    }
}
)