document.getElementById("job-container")
    .addEventListener("click", function (event) {
        const targetBtn = event.target.closest("button");
        if (!targetBtn) return;
        // console.log(targetClass);
        const targetCard = targetBtn.closest(".job-card");
        const statusBtn = targetCard.querySelector(".status-btn");
        // console.log(statusBtn.innerText);
        if (statusBtn.innerText === targetBtn.innerText) return;
        statusBtn.innerText = targetBtn.innerText;
        let typeDec = "", typeInc = "", valDec, valInc;
        // remove existing status Btn style
        if (statusBtn.className.includes("btn-primary")) {
            statusBtn.classList.remove("btn-primary");
        } else if (statusBtn.className.includes("btn-error")) {
            statusBtn.classList.remove("btn-error");
            typeDec = "rejected-job-count";
            valDec = getSelectJob(typeDec)-1;
        } else if (statusBtn.className.includes("btn-success")) {
            statusBtn.classList.remove("btn-success");
            typeDec = "interview-job-count";
            valDec = getSelectJob(typeDec)-1;
        }
        if (targetBtn.classList.contains("btn-success")) {
            typeInc = "interview-job-count";
            valInc = getSelectJob(typeInc) + 1;

            const interviewDiv = document.getElementById("interview");
            // console.log(targetCard.innerHTML);
            const newEl = document.createElement("div");
            targetCard.classList.remove("border-primary");
            targetCard.classList.remove("border-error");
            targetCard.classList.add("border-success");
            // console.log(targetCard.className);
            newEl.className=targetCard.className;
            newEl.innerHTML=`${targetCard.innerHTML}`;
            interviewDiv.append(newEl);
        }
        else if (targetBtn.classList.contains("btn-error")) {
            typeInc = "rejected-job-count";
            valInc = getSelectJob(typeInc) + 1;

            const rejectedDiv = document.getElementById("rejected");
            // console.log(targetCard.innerHTML);
            const newEl = document.createElement("div");
            targetCard.classList.remove("border-primary");
            targetCard.classList.remove("border-success");
            targetCard.classList.add("border-error");
            newEl.className=targetCard.className;
            newEl.innerHTML=`${targetCard.innerHTML}`;
            rejectedDiv.append(newEl)
        }
        //  add target select style to status btn
        statusBtn.classList.add(targetBtn.classList[3]);
        setSelectJob(valDec, typeDec, valInc, typeInc);
})


// available jobs button toogleing
document.getElementById("search-all").addEventListener("click",function(){
    document.getElementById("interview").classList.add("hidden");
    document.getElementById("rejected").classList.add("hidden");
    document.getElementById("job-container").classList.remove("hidden");
})
document.getElementById("search-interview").addEventListener("click",function(){
    document.getElementById("job-container").classList.add("hidden");
    document.getElementById("selected-info").classList.remove("hidden");
    document.getElementById("selected-job-count").innerText=document.getElementById("interview-job-count").innerText;
    document.getElementById("rejected").classList.add("hidden");
    document.getElementById("interview").classList.remove("hidden");
})
document.getElementById("search-reject").addEventListener("click",function(){
    document.getElementById("interview").classList.add("hidden");
    document.getElementById("job-container").classList.add("hidden");
    document.getElementById("rejected").classList.remove("hidden");
})


