// ============= Count all jobs ===================
const jobCards = document.querySelectorAll('#job-container .job-card');
// console.dir(jobCards.length);
const availableJobs = document.getElementsByClassName('available-job-count');
for(const job of availableJobs)
{
    job.innerText=jobCards.length;
}



// ============ view Port ==============
function viewport(type, job){
    if (!type) {
        return;
    }
    console.log("triggered and type is : ",type );
    const elements = job.getElementsByTagName("button");
        if(!elements[1].classList.contains(type)) job.classList.add("hidden");
}
// ============ select btn focus update ==============
function selectBtnFocusUpdate(type){
    const focusBtn = document.querySelectorAll('#focus-btn button');
    for(const btn of focusBtn)
    {
        btn.classList.add("btn-soft");
        btn.classList.remove("active");
        if(btn.id===type){btn.classList.remove("btn-soft");btn.classList.add("active");}
    }
}
// ============ select info update ==============
function selectInfoUpdate(type){
    document.getElementById("selected-job-count").innerText=document.getElementById(type).innerText;
}
// ============ get selected jobs ==============
function getSelectJob(type){
    return Number(document.getElementById(type).innerText);
}

// ============= Set selected jobs ===================
function setSelectJob(valDec,typeDec, valInc,typeInc){
    // document.getElementById("selected-job-count").innerText=valInc;
    if (typeDec && valDec>=0) document.getElementById(typeDec).innerText=valDec;
    document.getElementById(typeInc).innerText=valInc;
    // console.log(document.getElementById(type).innerText)
}
