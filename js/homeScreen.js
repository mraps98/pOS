$(document).ready(function(){

    var HomeScreen = {
        backgroundColor: "rgba(206,66,244,0.5)",
        POSMenuElements: ["ABOUT"],
        settingsMenuElements: ["BACKGROUND"],
        shutDownMenuElements: ["LOGOUT"],
        dockElements: ["Files","Internet","Text Edit"],
        dockElementsImages: ["files.png","internet.png","textEdit.png"]
    };

    
    HomeScreen.fillTaskBarMenus = function(){
        for(let i = 0; i <HomeScreen.POSMenuElements.length; i++){
            $("#POSMenu").append("<li><button class='taskBarButton'>" + HomeScreen.POSMenuElements[i] + "</button></li>");
        }
        for(let i = 0; i <HomeScreen.settingsMenuElements.length; i++){
            $("#settingsMenu").append("<li><button class='taskBarButton'>" + HomeScreen.settingsMenuElements[i] + "</button></li>");
        }
        for(let i = 0; i <HomeScreen.shutDownMenuElements.length; i++){
            $("#shutDownMenu").append("<li><button class='taskBarButton'>" + HomeScreen.shutDownMenuElements[i] + "</button></li>");
        }
    };

    HomeScreen.fillDock = function(){
        for(let i = 0; i <HomeScreen.dockElements.length; i++){
            $("#dock").append("<span class='dockItem'><button class='dockButton'><img src='./assets/dock/" + HomeScreen.dockElementsImages[i] + "'></button></span>");
        }
    }
    
    HomeScreen.setLayout = function(){
        // homescreen size
        $("#homeScreen").css('height',window.innerHeight);

        // menu toolbars
        $(".taskBarMenuBox").css('top',22);
        $("#POSMenuBox").css('left',0);
        $("#settingsMenuBox").css('left',45);
        $("#shutDownMenuBox").css('right',0);

        // dock
        $("#dock").css('bottom',0);
        $("#dock").show();
        $("#dock").css('left', (window.innerWidth - $("#dock").width())/2);
    };
    
    HomeScreen.update = function(){
        $("POSMenuBox").hide();
        $("settingsMenuBox").hide();
        $("#homeScreen").css('background-color',HomeScreen.backgroundColor);
    };
    
    HomeScreen.start = function(){
        HomeScreen.fillTaskBarMenus();
        HomeScreen.fillDock();
        HomeScreen.setLayout();
        HomeScreen.update();

        // taskbar menu listener
        $(document).on('click',".taskBarButton",function(){
            $(".taskBarMenuBox").hide();
            let menuName = $(this).attr("data-menu");
            $("#"+menuName+"Box").show();
        })
        $(document).on('mouseleave','.taskBarMenuBox',function(){
            $(this).hide();
        });   
    };

    HomeScreen.start();

    $("#textEditor").show();
});