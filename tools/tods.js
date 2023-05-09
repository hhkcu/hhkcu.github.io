let terminal = document.getElementById("terminal")
document.addEventListener("keydown", (ev) => {
    let code = ev.key
    let code2 = ev.code
    let kc = ev.keyCode;
    let ak = code
    if (kc == 10) {
        ak = "\n"
    } else if (kc == 8) {
        terminal.innerHTML = terminal.innerHTML.substring(0, terminal.innerHTML.length-1)
        return
    }
    terminal.innerHTML += ak
})