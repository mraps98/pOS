$(document).ready(function(){
    
    var LoginScreen = {
        username : "admin",
        password : "hello",
        tries : 0
    };

    LoginScreen.setLayout = function(){
        let offset = 140;
        $("#loginBox").css('margin-top', (window.innerHeight/2 - offset) + 'px');
    }

    LoginScreen.login = function(){
        if(LoginScreen.tries == 2){
            $("#loginBox").html("<div>Too many Login Attempts. Please Come back later</div>")
        }
        if ($("#loginUsername").val() && $("#loginPassword").val()){
            if ($("#loginUsername").val() == LoginScreen.username && $("#loginPassword").val() == LoginScreen.password){
                $("#loginUsername").val("");
                $("#loginPassword").val("");
                $("#loginBox").hide();
                $("#homeScreen").show();
            }else{
                $("#error").show();
                LoginScreen.tries++;
            }
        }
 
        console.log(LoginScreen.tries);
    }

    LoginScreen.start = function(){
        LoginScreen.setLayout();

        
        $("#loginButton").on("click",LoginScreen.login);
        $("#loginUsername").keypress(function(e){
            if(e.which == 13){
                LoginScreen.login();
            }
        });
        $("#loginPassword").keypress(function(e){
            if(e.which == 13){
                LoginScreen.login();
            }
        });
    }
    
    LoginScreen.start();
});