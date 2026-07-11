const params = new URLSearchParams(window.location.search);

const india = params.get("india");
const saudi = params.get("saudi");
const global = params.get("global");

async function redirectUser() {
    try {
        const response = await fetch("https://ipwho.is/");
        const data = await response.json();

        if (data.country_code === "IN" && india) {
            window.location.href = decodeURIComponent(india);
            return;
        }

        if (data.country_code === "SA" && saudi) {
            window.location.href = decodeURIComponent(saudi);
            return;
        }

        window.location.href = decodeURIComponent(global);

    } catch (e) {
        window.location.href = decodeURIComponent(global);
    }
}

redirectUser();
