window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApiUrl = 'https://getresumecounter-2.azurewebsites.net/api/GetResumeCounter?code=0n1FA2V_ZYU2ZxAXiF9ZJHXDU-M2jgCz6U4pjNSK2JDEAzFuJ5PYEg=='
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("visCount").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}