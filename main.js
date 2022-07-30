const buttonClass = document.querySelectorAll(".button");
const imageClass = document.querySelectorAll(".image");
let resultIndex = 0;
let first = true;

function clickButton(event) {
    if(first === true) {
        clearInterval(repeat);
        const h3 = document.querySelector("h3");
        if(event.target.innerText === "✌️") {
            if(resultIndex === 0) {
                h3.innerText = "당신은 비겼습니다.";
            } else if(resultIndex === 1) {
                h3.innerText = "당신이 졌습니다.";
            } else {
                h3.innerText = "당신이 이겼습니다.";
            }
        } else if(event.target.innerText === "✊") {
            if(resultIndex === 0) {
                h3.innerText = "당신이 이겼습니다.";
            } else if(resultIndex === 1) {
                h3.innerText = "당신은 비겼습니다.";
            } else {
                h3.innerText = "당신이 졌습니다.";
            }
        } else if(event.target.innerText === "🖐") {
            if(resultIndex === 0) {
                h3.innerText = "당신이 졌습니다.";
            } else if(resultIndex === 1) {
                h3.innerText = "당신이 이겼습니다.";
            } else {
                h3.innerText = "당신은 비겼습니다.";
            }
        }
        first = false;
    }
}

function changeImage() {
    if (resultIndex === 2) {
        resultIndex = 0;
    } else {
        resultIndex += 1;
    }
    let otherIndex = [0, 1, 2];
    otherIndex.splice(resultIndex, 1);
    imageClass[otherIndex[0]].classList.add("hidden");
    imageClass[otherIndex[1]].classList.add("hidden");
    imageClass[resultIndex].classList.remove("hidden");
}

let repeat = setInterval(changeImage, 100);



buttonClass[0].addEventListener("click", clickButton);
buttonClass[1].addEventListener("click", clickButton);
buttonClass[2].addEventListener("click", clickButton);