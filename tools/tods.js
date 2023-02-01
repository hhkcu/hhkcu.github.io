let terminal = document.getElementById("terminal")
document.addEventListener("keypress", (ev) => {
    let code = ev.key
    let code2 = ev.code
    let ak = code
    if (code2 == "KeyEnter") {
        ak = "\n"
    } else if (code2 == "KeyBackspace") {
        terminal.innerHTML = terminal.innerHTML.substring(0, terminal.innerHTML.length-1)
        return
    }
    terminal.innerHTML += ak
})