var user = prompt("Welcome to my adventure game. Are you ready to play?").toUpperCase();
var firstName = "Allison";
var lastName = "Hopper";

switch(user) {
    case 'YES':
        console.log( "You're so brave. Do you have a sword?" );
            if( firstName && lastName) {
                console.log("true");
            }
            else {
                console.log("false");
            }
        break;
    case 'NO':
        console.log( "Fraidy cat!" );
            if( firstName || lastName) {
                console.log("booya");
            }
            else {
                console.log("skeeter");
            }
        break;
    case 'MAYBE':
        console.log( "It's OK to be scared." );
        break;
    default:
        console.log( "I'm sorry, I don't recognize your answer. Try again." );
}