var DarkModeSwitch = document.getElementById("darkswitch");
var RootStyle = document.querySelector(':root');
var Style = getComputedStyle(RootStyle)

var DarkModeEnabled = false;
var Count = 0;

function DarkModeToggle() {
    console.log(Count);
    console.log(Style.getPropertyValue("--light-primary-color"));
    if (DarkModeEnabled == false) {
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

if (document.cookie === "darkMode=on") {
    DarkModeToggle();
}