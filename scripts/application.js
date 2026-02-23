document.getElementById("job-container")
    .addEventListener("click", function (event) {
        const targetBtn = event.target.closest("button");
        if (!targetBtn) return;
        // console.log(targetClass);
        const targetCard = targetBtn.closest(".job-card");

        if (targetBtn.classList.contains("btn-secondary")) {

            const statusBtnText = targetCard.querySelector('.status-btn').innerText;
            if(statusBtnText==="Interview") {
                document.getElementById("interview-job-count").innerText=document.getElementById("interview-job-count").innerText-1;
                selectInfoUpdate("interview-job-count");
            }
            else if(statusBtnText==="Rejected"){
                document.getElementById("rejected-job-count").innerText=getElementById("interview-job-count").innerText-1;
                selectInfoUpdate("rejected-job-count");
            }
            
            targetCard.remove();
            const jobCards = document.querySelectorAll('#job-container .job-card');
            const availableJobs = document.getElementsByClassName('available-job-count');
            for (const job of availableJobs) {
                job.innerText = jobCards.length;
            }
            return;
        }


        const statusBtn = targetCard.querySelector(".status-btn");
        // console.log(statusBtn.innerText);
        if (statusBtn.innerText === targetBtn.innerText) return;
        statusBtn.innerText = targetBtn.innerText;
        let typeDec = "", typeInc = "", valDec, valInc, viewportTyp = "";
        // remove existing status Btn style
        if (statusBtn.className.includes("btn-primary")) {
            statusBtn.classList.remove("btn-primary");
        } else if (statusBtn.className.includes("btn-error")) {
            statusBtn.classList.remove("btn-error");
            typeDec = "rejected-job-count";
            valDec = getSelectJob(typeDec) - 1;
        } else if (statusBtn.className.includes("btn-success")) {
            statusBtn.classList.remove("btn-success");
            typeDec = "interview-job-count";
            valDec = getSelectJob(typeDec) - 1;
        }
        if (targetBtn.classList.contains("btn-success")) {
            typeInc = "interview-job-count";
            valInc = getSelectJob(typeInc) + 1;
            viewportTyp = "btn-success";

            // const interviewDiv = document.getElementById("interview");
            // console.log(targetCard.innerHTML);
            // const newEl = document.createElement("div");
            targetCard.classList.remove("border-primary");
            targetCard.classList.remove("border-error");
            targetCard.classList.add("border-success");
            // console.log(targetCard.className);
            // newEl.className=targetCard.className;
            // newEl.innerHTML=`${targetCard.innerHTML}`;
            // interviewDiv.append(newEl);
        }
        else if (targetBtn.classList.contains("btn-error")) {
            typeInc = "rejected-job-count";
            valInc = getSelectJob(typeInc) + 1;
            viewportTyp = "btn-error";

            const rejectedDiv = document.getElementById("rejected");
            // console.log(targetCard.innerHTML);
            // const newEl = document.createElement("div");
            targetCard.classList.remove("border-primary");
            targetCard.classList.remove("border-success");
            targetCard.classList.add("border-error");
            // newEl.className=targetCard.className;
            // newEl.innerHTML=`${targetCard.innerHTML}`;
            // rejectedDiv.append(newEl)

        }
        //  add target select style to status btn
        statusBtn.classList.add(targetBtn.classList[3]);
        setSelectJob(valDec, typeDec, valInc, typeInc);
        const allJobs = document.querySelectorAll('#job-container >div');

        const focusButton = document.querySelectorAll('#focus-btn button');
        if (focusButton[1].classList.contains("active") && viewportTyp == "btn-error") {
            for (const job of allJobs) {
                job.classList.remove("hidden");
                // job.classList.remove("hidden");
                viewport("btn-success", job);
                selectInfoUpdate("interview-job-count");
            }
        } else if (focusButton[2].classList.contains("active") && viewportTyp == "btn-success") {
            for (const job of allJobs) {
                job.classList.remove("hidden");
                // job.classList.remove("hidden");
                viewport("btn-error", job);
                selectInfoUpdate("rejected-job-count");
            }
        }
        // viewport(viewportTyp, targetCard);
    })


// available jobs button toogleing
document.getElementById("search-all").addEventListener("click", function () {
    // document.getElementById("interview").classList.add("hidden");
    document.getElementById("selected-info").classList.add("hidden");
    selectBtnFocusUpdate("search-all");
    // document.getElementById("rejected").classList.add("hidden");
    // document.getElementById("job-container").classList.remove("hidden");

    const allJobs = document.querySelectorAll('#job-container >div');
    for (const job of allJobs) {
        job.classList.remove("hidden");
        viewport("", job);
    }
})
document.getElementById("search-interview").addEventListener("click", function () {
    // document.getElementById("job-container").classList.add("hidden");
    document.getElementById("selected-info").classList.remove("hidden");
    selectInfoUpdate("interview-job-count");
    selectBtnFocusUpdate("search-interview");
    // document.getElementById("rejected").classList.add("hidden");
    // document.getElementById("interview").classList.remove("hidden");

    const allJobs = document.querySelectorAll('#job-container >div');
    for (const job of allJobs) {
        job.classList.remove("hidden");
        // job.classList.remove("hidden");
        viewport("btn-success", job);
    }
})
document.getElementById("search-reject").addEventListener("click", function () {
    // document.getElementById("interview").classList.add("hidden");
    document.getElementById("selected-info").classList.remove("hidden");
    selectInfoUpdate("rejected-job-count");
    selectBtnFocusUpdate("search-reject");
    // document.getElementById("job-container").classList.add("hidden");
    // document.getElementById("rejected").classList.remove("hidden");

    const allJobs = document.querySelectorAll('#job-container >div');
    for (const job of allJobs) {
        job.classList.remove("hidden");
        // job.classList.remove("hidden");
        viewport("btn-error", job)
    }
})


