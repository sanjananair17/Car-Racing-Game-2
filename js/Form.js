class Form{
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130,0);

        var input = createInput("Name");
        input.position(130,160);

        var greeting = createElement("h3");

        var button = createButton("Play");
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount++;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Hello "+name);
            greeting.position(130,160);
        })
    }
}