const stage = document.getElementById("stage");
let currentPage;

addHomePage(stage);


function addHomePage(targetedElement) {
    targetedElement.appendChild(getHtmlString("home"));
    activateButtons(); }

function addLoginPage(targetedElement) {
    targetedElement.appendChild(getHtmlString("login"));
    activateButtons();}

function addSignUpPage(targetedElement) {
    targetedElement.appendChild(getHtmlString("sign-up"));
    activateButtons(); }

function activateButtons() {
    const loginBtn = document.getElementById("btn-login");
    loginBtn.addEventListener("mouseup", goToLoginPage);

    const signUpBtn = document.getElementById("btn-signup");
    signUpBtn.addEventListener("mouseup", goToSignUpPage); }

function removePage(targetedElement) {
    targetedElement.removeChild(targetedElement.firstChild); }

function goToLoginPage(event) {
    console.log(event.target.id);
    removePage(stage);
    addLoginPage(stage); }

function goToSignUpPage(event) {
    console.log(event.target.id);
    console.log(event.target.id);
    removePage(stage);
    addSignUpPage(stage); }

function getHtmlString(request) {
    window[request] = document.createElement("div");
    window[request].id = request + "_page";
    window[request].classList.add("page");
    switch (request) {
        case "home":
            window[request].innerHTML = `
            <header>
                <div class="intro-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">Title</span> 
                        <span class="heading-primary--sub">Desciption</span>
                    </h1>
                    <a href="#" class="btn btn--white" id="btn-login">Log In</a>
                    <a href="#" class="btn btn--green" id="btn-signup">Sign Up</a>
                </div>
            </header> `;
            break;
        case "login":
            window[request].innerHTML = `
            <header>
                <div class="intro-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">Welcome</span> 
                        <span class="heading-primary--sub">to Login page</span>
                    </h1>
                    <a href="#" class="btn btn--white" id="btn-login">Log In</a>
                    <a href="#" class="btn btn--green" id="btn-signup">Sign Up</a>
                </div>
            </header> `;
            break;
        case "sign-up":
            window[request].innerHTML = `
            <header>
                <div class="intro-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">Welcome</span> 
                        <span class="heading-primary--sub">to Sign-up page</span>
                    </h1>
                    <a href="#" class="btn btn--white" id="btn-login">Log In</a>
                    <a href="#" class="btn btn--green" id="btn-signup">Sign Up</a>
                </div>
            </header> `;
            break;
        default:
            window[request].innerHTML = "Error 404: The requested page could not be found.";
            break; }
    return window[request]; }