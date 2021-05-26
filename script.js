const stage = document.getElementById("stage");

createPage("homePage", "home", "page");
createPage("loginPage", "login", "page");
// createPage("signUpPage", "sign-up", "page");
// createPage("dashboardPage", "dashboard", "page");

stage.appendChild(homePage);

function createPage(instanceName, newDivID, newDivClass) {
    window[instanceName] = document.createElement("div");
    window[instanceName].id = newDivID;
    window[instanceName].classList.add(newDivClass); }
