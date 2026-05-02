function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    if (max <= min) {
        alert("O segundo valor deve ser MAIOR que o primeiro.")
        return;
    }
    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        alert(`O número sorteado foi: ${result}`)
    }



}