
document.addEventListener("onpageshow", function() {
    // use random number ranges as specified in instructions and provide limits to make the game winable
    var gameMin = 15;
    var gameMax = 100;
    var gemMin = 1;
    var gemMax = 12;

    // object to store game details    
    var game = {
        wins: 0,
        losses: 0,
        totalScore: 0,
        curTargetVal: Math.floor(Math.random() * (gameMax - gameMin)) + gameMin,
        ruby: Math.floor(Math.random() * (gemMax - gemMin)) + gemMin,
        sapphire: Math.floor(Math.random() * (gemMax - gemMin)) + gemMin,
        topaz: Math.floor(Math.random() * (gemMax - gemMin)) + gemMin,
        emerald: Math.floor(Math.random() * (gemMax - gemMin)) + gemMin,

        // reset the game scores
        reset: function() {
            this.wins = 0;
            this.losses = 0;
            this.totalScore = 0;
            this.curTargetVal = Math.floor(Math.random() * (gameMax - gameMin)) + gameMin;
            this.ruby = Math.floor(Math.random() * (gemMax - gemMin)) + gemMin;
            this.sapphire = Math.floor(Math.random() * (gemMax - gemMin)) + gemMin;
            this.topaz = Math.floor(Math.random() * (gemMax - gemMin)) + gemMin;
            this.emerald = Math.floor(Math.random() * (gemMax - gemMin)) + gemMin;
        }

    };

    // this allows the game to start on the HTML
    function work() {

        $("#target").text(game.curTargetVal);
        $("#total").text(game.totalScore);

        
        $("#ruby").attr("data-points", game.ruby);
        $("#sapphire").attr("data-points", game.sapphire);
        $("#topaz").attr("data-points", game.topaz);
        $("#emerald").attr("data-points", game.emerald);
        console.log(Response)
    };

    // handle for click event on gem image
    function gemClick() {
        // get points for the clicked gem from data-attribute
        var points = parseInt($(this).attr("data-points"));
        // increment total score
        game.totalScore += points;
        // if score crossed threshold its a loss
        if (game.totalScore > game.curTargetVal) {
            // increment losses count
            game.losses++;
            // show losses on HTML
            $("#loss").text("Losses: " + game.losses);
            $("#msg").text("You lose!");
            // start a new game
            game.reset();
            work();
        } 
        // score meets target, its a win
        else if (game.totalScore === game.curTargetVal) {
            // increment wins count
            game.wins++;
            // show wins on HTML
            $("#msg").text("You win!!");
            $("#win").text("Wins: " + game.wins);
            // starts a new game
            game.reset();
            work();
        } else      
            $("#total").text(game.totalScore);
    };

    // register click event per gem image
    $(".gem").on("click", gemClick);

    // start game on page load
    this.work();

});