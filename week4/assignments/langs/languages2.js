//!     JavaScript Page

const lang = "JavaScript";
document.querySelector("#submit").addEventListener("click", function () {
    const nodeList = document.querySelectorAll("input");
    const aryStuffs = [...nodeList];
    chkLang(aryStuffs);
});
function chkLang(langs) {
    let result = false;
    langs.forEach((i) => {
        if (i.value === lang) result = true;
    });
    let obj = document.querySelector("#TestResult");
    if (result) obj.innerText = `Congratulations!\nYou know ${lang}.`;
    else obj.innerText = `Sorry,\nyou don't know ${lang}.`;
}
