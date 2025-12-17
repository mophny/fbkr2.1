document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const body = document.body;

    // Проверяем сохранённую тему
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
        toggleBtn.textContent = "🌙 Тёмная тема";
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        if (body.classList.contains("dark-theme")) {
            toggleBtn.textContent = "🌙 Тёмная тема";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "☀️ Светлая тема";
            localStorage.setItem("theme", "light");
        }
    });
});