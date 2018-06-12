$(document).ready(function(){

    var HomeScreen = {
        backgroundColor: "rgba(206,66,244,0.5)",
        POSMenuElements: ["ABOUT"],
        settingsMenuElements: ["BACKGROUND"],
        shutDownMenuElements: ["LOGOUT"],
        dockElements: ["Files","Internet","Text Edit"],
        appWindowNames: ["#fileManager","#internetBrowser","#textEditor"],
        dockElementsImages: ["files.png","internet.png","textEdit.png"]
    };

    
    HomeScreen.fillTaskBarMenus = function(){
        for(let i = 0; i <HomeScreen.POSMenuElements.length; i++){
            $("#POSMenu").append("<li><button id='" + HomeScreen.POSMenuElements[i] + "' class='taskBarButton'>" + HomeScreen.POSMenuElements[i] + "</button></li>");
        }
        for(let i = 0; i <HomeScreen.settingsMenuElements.length; i++){
            $("#settingsMenu").append("<li><button id='" + HomeScreen.settingsMenuElements[i] + "' class='taskBarButton'>" + HomeScreen.settingsMenuElements[i] + "</button></li>");
        }
        for(let i = 0; i <HomeScreen.shutDownMenuElements.length; i++){
            $("#shutDownMenu").append("<li><button id='" + HomeScreen.shutDownMenuElements[i] + "' class='taskBarButton'>" + HomeScreen.shutDownMenuElements[i] + "</button></li>");
        }
    };

    HomeScreen.fillDock = function(){
        for(let i = 0; i <HomeScreen.dockElements.length; i++){
            $("#dock").append("<span class='dockItem'><button data-index='" + i + "' class='dockButton'><img src='./assets/dock/" + HomeScreen.dockElementsImages[i] + "'></button></span>");
        }
    };
    
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

        // windows
        $(".window").css('top', (window.innerHeight - $(".window").height())/2);
        $(".window").css('left', (window.innerWidth - $(".window").width())/2);
    };
    
    HomeScreen.update = function(){
        $("POSMenuBox").hide();
        $("settingsMenuBox").hide();
        $("#homeScreen").css('background-color',HomeScreen.backgroundColor);
    };
    
    HomeScreen.logout = function(){
        $("#homeScreen").hide();
        $("#loginBox").show();
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

        //app opening
        $(document).on('click',".dockButton",function(){
            $(".window").hide();
            let index = $(this).attr('data-index');
            $(HomeScreen.appWindowNames[index]).show();
        });

        //app closing
        $(document).on('click','.windowCloseButton',function(){
            $(".window").hide();
        });

        $(document).on('click','#LOGOUT',HomeScreen.logout);
    };

    HomeScreen.start();

    // $("#textEditor").show();
});

function closeAllApps(){
    $("#titleBar").hide();
}

