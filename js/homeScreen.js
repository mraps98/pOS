$(document).ready(function(){

    var HomeScreen = {
        backgroundColor: "rgba(206,66,244,0.5)",
    };

    HomeScreen.start = function(){
        HomeScreen.setLayout();
        HomeScreen.update();
    };

    HomeScreen.setLayout = function(){
        $("#homeScreen").css('height',window.innerHeight);
    }

    HomeScreen.update = function(){
        $("#homeScreen").css('background-color',HomeScreen.backgroundColor);
    };

    HomeScreen.start();
});