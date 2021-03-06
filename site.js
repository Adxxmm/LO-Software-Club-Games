var RootStyle = document.querySelector(':root');
var Style = getComputedStyle(RootStyle)

var DarkModeEnabled = false;

function DarkModeToggle(Forced) {
    if (DarkModeEnabled === false) {
        console.log("Dark Mode Enabled");

        DarkModeEnabled = true;
        document.cookie = "darkMode=on";

        RootStyle.style.setProperty("--primary-color",  Style.getPropertyValue("--dark-primary-color"));
        RootStyle.style.setProperty("--secondary-color",  Style.getPropertyValue("--dark-secondary-color"));
        RootStyle.style.setProperty("--accent-color",  Style.getPropertyValue("--dark-accent-color"));
        RootStyle.style.setProperty("--text-color",  Style.getPropertyValue("--dark-text-color"));
    } else {
        console.warn("Dark Mode is disabled");

        DarkModeEnabled = false;
        document.cookie = "darkMode=off";

        RootStyle.style.setProperty("--primary-color", Style.getPropertyValue("--light-primary-color"));
        RootStyle.style.setProperty("--secondary-color",  Style.getPropertyValue("--light-secondary-color"));
        RootStyle.style.setProperty("--accent-color",  Style.getPropertyValue("--light-accent-color"));
        RootStyle.style.setProperty("--text-color",  Style.getPropertyValue("--light-text-color"));
    }
};

window.onload = function () {
	if (document.cookie === "darkMode=on") {
		DarkModeEnabled = true;
		DarkModeToggle();
		document.getElementById("dark").click();
	}
}