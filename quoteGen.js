//1. Create 2 arrays quote and author
//2. Create a random nuber and use it as an index
//3. fade in and fade out on quotebox

$(document).ready(function () {
  $("h1").hide().show("slow");
  
  // Created 2 arrays with in the variable "pics" and "colors"
  
  function quoteGen () {   
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', 
    '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857","#3b806d","#ff5722","#009688","#F08080","#808000","#00FF00","#00FFFF","#008080","#FF00FF"
    ,"#800000","#C0C0C0","#FA8072","#FFA07A","#DB7093","#FFFACD","#BDB76B","#DDA0DD","#6A5ACD","#20B2AA","#B0C4DE","#a4f4ed"];
    var pics = [];
    for(i=1;i<=42;i++)
        pics.push("images/"+i+".jpg");
    
    var randomNum = Math.floor(Math.random()*pics.length);
    
    // random number as an index
    var randomAuthor = pics[randomNum];
    var randomColor = colors[randomNum];
    
    //set picture
    $(" .container-fluid, .btn").css('background-color',randomColor);
    document.getElementById('q').innerHTML = '<img src='+randomAuthor+' class="responsive" style="width:400ps;height:400px;max-width:300px;"/>'; 
} // end quoteGen
  
  
  
  //call quoteGen when the button is clicked  
  $(".btn-info").on("click", function () {
  $(".quotebox").fadeOut(1000);
  setTimeout(function() { quoteGen(); }, 1000);  
  $(".quotebox").fadeIn(1000);  
    });
  
   
   

}); // end document.ready

//********************************************* Quote in text version *************************************************//
// var quote = [
    //   "You can’t live your life for other people. You’ve got to do what’s right for you, even if it hurts some people you love.",
    //   "Don’t ever let somebody tell you you can’t do something, not even me. Alright? You have a dream, you gotta protect it. People can’t do something themselves, they wanna tell you you can’t do it. If you want something, go get it.",
    //   "To see the world, things dangerous to come to, to see behind walls, to draw closer, to find each other and to feel. That is the purpose of life.",
    //   "If you’re going to try, go all the way. Otherwise don’t even start. This could mean losing girlfriends, wives, relatives, jobs. And maybe your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery, isolation. Isolation is the gift. All the others are a test of your endurance. Of how much you really want to do it. And you’ll do it, despite rejection in the worst odds. And it will be better than anything else you can imagine.",
    //   "Great men are not born great, they grow great.",
    //   "I know what I have to do now, I’ve got to keep breathing because tomorrow the sun will rise. Who knows what the tide could bring?",
    //   "Do, or do not. There is no try.",
    //   "This shit’s chess, it ain’t checkers!",
    //   "Life’s this game of inches. So is football. Because in either game, life or football, the margin for error is so small -- I mean one-half a step too late, or too early, and you don’t quite make it. One-half second too slow, too fast, you don’t quite catch it.",
    //   "Being perfect is not about that scoreboard out there. It’s not about winning. It’s about you and your relationship with yourself, your family and your friends. Being perfect is about being able to look your friends in the eye and know that you didnt let them down because you told them the truth. And that truth is you did everything you could. There wasnt one more thing you could’ve done. Can you live in that moment as best you can, with clear eyes, and love in your heart, with joy in your heart? If you can do that gentleman – you’re perfect!",
    //   "Let me tell you something you already know. The world ain’t all sunshine and rainbows. It’s a very mean and nasty place and I don’t care how tough you are it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain’t about how hard you’re hit. It’s about how hard you can get hit and keep moving forward. How much you can take and keep moving forward. That’s how winning is done!Now if you know what you’re worth then go out and get what you’re worth. But ya gotta be willing to take the hits, and not pointing fingers saying you ain’t where you wanna be because of him, or her, or anybody! Cowards do that and that ain’t you! You’re better than that!",
    //   "We walk away from our dreams afraid we may fail, or worse yet, afraid we may succeed.",
    //   "No matter what anybody tells you, words and ideas can change the world."
    // ];
    // var author = [
    //   " - The Notebook",
    //   " - Chris Gardner, from The Pursuit of Happyness",
    //   " - The Secret Life of Walter Mitty",
    //   " - Factotum",
    //   " - Mario Puzo, from The Godfather",
    //   " - Cast Away",
    //   " - Yoda in The Empire Strikes Back",
    //   " - Alonzo Harris in Training Day",
    //   " - Tony D'Amato in Any Given Sunday",
    //   " - Coach Gary Gaines, from Friday Night Lights",
    //   " - Rocky Balboa",
    //   " - William Forrester",
    //   " - John Keating"
    // ];
   //Generated a random number
   //var randomNum = Math.floor(Math.random()*pics.length);
    // random number as an index
    //var randomQuote = quote[randomNum];
    //var randomAuthor = author[randomNum];
    //var randomColor = colors[randomNum];
    // append text
    // $(".quote").text(randomQuote);
    // $(".author").text(randomAuthor);
    //$(" .container-fluid, .btn").css('background-color',randomColor);
     //call quoteGen when the button is clicked  
    // $(".btn-info").on("click", function () {
    // $(".quotebox").fadeOut(1000);
    // setTimeout(function() { quoteGen(); }, 1000);  
    // $(".quotebox").fadeIn(1000);  
    //     });
    