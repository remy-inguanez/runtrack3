
var code="";
document.addEventListener('keydown', function(event)

{
    var clav = event.key;
    code = code + clav;

    if(code == "remy")

    {
        var foot = document.createElement('footer');
        var div = document.createElement('div');
        var head = document.createElement('header');
        document.body.prepend(foot);
        document.body.prepend(div);
        document.body.prepend(head);
        head.append("LaPlateforme_");
        div.append("Bien joué vous avez trouvé le code konami!");
        foot.append("Copyright 2020 | By Rémy ");
    }
})
