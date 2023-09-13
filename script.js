document.getElementById("calculate").addEventListener("click", function () {
    const sideLength = parseFloat(document.getElementById("sideLength").value);
    if (!isNaN(sideLength)) {
        const area = sideLength * sideLength;
        document.getElementById("area").textContent = area;
    } else {
        alert("Masukkan panjang sisi yang valid.");
    }
});
