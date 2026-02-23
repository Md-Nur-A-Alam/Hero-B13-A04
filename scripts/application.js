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
        }
        else if (targetBtn.classList.contains("btn-error")) {
            typeInc = "rejected-job-count";
            valInc = getSelectJob(typeInc) + 1;
        }
        //  add target select style to status btn
        statusBtn.classList.add(targetBtn.classList[3]);
        setSelectJob(valDec, typeDec, valInc, typeInc);
    })