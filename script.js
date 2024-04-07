document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("btn");
    button.addEventListener("click", () => {
        const textArea = document.getElementById("textarea").value;
        const textPost = document.getElementById("post-text");
        const post2 = document.getElementById("post2").cloneNode(true);
        const content = document.getElementById("content");
        post2.removeAttribute("hidden");
        button.style.display = `none`;
        textPost.textContent = textArea;
        content.appendChild(post2);
        post2.style.display = "block";
        document.getElementById("textarea").value = "";
        document.getElementById("file").value = "";
    });

    const file = document.getElementById("file");
    file.addEventListener("click", () => {
        button.style.display = "block";
        console.log("click");
    });
});

function loadimage(event) {
    const image = document.getElementById("uploded-img");
    image.src = URL.createObjectURL(event.target.files[0]);
  
}
