// ============= Count all jobs ===================
const jobCards = document.querySelectorAll('#job-container .job-card');
// console.dir(jobCards.length);
const availableJobs = document.getElementsByClassName('available-job-count');
for(const job of availableJobs)
{
    job.innerText=jobCards.length;
}



// ============ get element by ID ==============

// ============ get selected jobs ==============
function getSelectJob(type){
    return Number(document.getElementById(type).innerText);
}

// ============= Set selected jobs ===================
function setSelectJob(valDec,typeDec, valInc,typeInc){
    document.getElementById("selected-job-count").innerText=valInc;
    if (typeDec && valDec>=0) document.getElementById(typeDec).innerText=valDec;
    document.getElementById(typeInc).innerText=valInc;
    // console.log(document.getElementById(type).innerText)
}
