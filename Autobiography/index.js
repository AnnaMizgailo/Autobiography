function changeTheme(){
    console.log('hii');
    let light = document.getElementById("light");
    let dark = document.getElementById("dark");
    if(light.disabled){
        light.disabled = false;
        dark.disabled = true;
        localStorage.setItem('theme', "dark");
    }else{
        light.disabled = true;
        dark.disabled = false;
        localStorage.setItem('theme', "light");
    }
}
function applyTheme(){
    let theme = localStorage.getItem('theme');
    if(theme){
        if(theme == "light"){
            light.disabled = true;
            dark.disabled = false;
        }else{
            
            light.disabled = false;
            dark.disabled = true;
        }
    }
    console.log("tvar");
}

let themeButton = document.querySelector(".checkbox-wrapper-2");
themeButton.addEventListener('change', changeTheme);
applyTheme();