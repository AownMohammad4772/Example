var text = "my name is Aown Mohammad and my father name is Younas Khan";

for(var i = 0 ; text.length; i++) {
    if (text.slice(i,i + 13) === "Aown Mohammad"){
        text = text.slice(0, i) + "usama"
    }
}

console.log(text)