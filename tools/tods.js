let terminal = document.getElementById("terminal")
document.addEventListener("keypress", (ev) => {
    let code = ev.key
    let code2 = ev.code
    let ak = code
    if (code2 == "KeyEnter") {
        ak = "\n"
    }
    terminal.innerHTML += ak
})