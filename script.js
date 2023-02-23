const pageInfo = {
    
}

document.getElementById("tabSelected").onchange = (evt) => {
    console.log(evt.target.value);

    const tabSelected = pageInfo[evt.target.value].info;

    console.log(tabSelected);//every time a new tab is selected, do these following steps

    let generatedHTML ="";//holds the js

    for (const page of tabSelected) {
        if (tab.selected) {
            generatedHTML += "<div>";
        }
    }