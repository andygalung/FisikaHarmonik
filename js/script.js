document.addEventListener("DOMContentLoaded", function () {
    const jawabanBenar = {
        q1: "b",
        q2: "c",
        q3: "d",
        q4: "a",
        q5: "c",
        q6: "b"
    };

    document.getElementById("quizForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let skor = 0;

        for (const key in jawabanBenar) {
            const selected = document.querySelector(`input[name="${key}"]:checked`);
            if (selected && selected.value === jawabanBenar[key]) {
                skor++;
            }
        }

        const hasilContainer = document.getElementById("quizResult");
        hasilContainer.innerHTML = `<h2>Skor Anda: ${skor}/6</h2>`;
        hasilContainer.innerHTML += `<p>${skor === 6 ? "🎉 Selamat! Anda mendapatkan skor sempurna!" : "Coba lagi untuk mendapatkan skor lebih baik!"}</p>`;
        hasilContainer.style.display = "block";
    });

    // Logika tombol reset
    document.getElementById("resetButton").addEventListener("click", function () {
        document.getElementById("quizForm").reset(); // Reset form
        document.getElementById("quizResult").style.display = "none"; // Sembunyikan hasil kuis
    });
});
