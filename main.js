function mostrarSequencia() {
    let num = parseInt(document.getElementById("Fibonacci").value);
    let seq = [1, 1];
    for (let i = 2; i < num; i++) {
        seq[i] = seq[i - 1] + seq[i - 2];
    }
    document.getElementById("sequencia").innerHTML = "Sequência: " + seq.join(", ");
}