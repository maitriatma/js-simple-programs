const Jokes = ["Why don't scientists trust atoms? Because they make up everything.","I told my wife she was drawing her eyebrows too high. She looked surprised.","I'm reading a book on the history of glue - I just can't seem to put it down.","A man wakes from a coma. His wife changes out of her black clothes and, irritated, remarks, I really cannot depend on you in anything, can I!","As I get older, I remember all the people I lost along the way. Maybe my budding career as a tour guide was not the right choice.","Why did the man miss the funeral? He wasn’t a mourning person."," Want to know how you make any salad into a caesar salad? Stab it twenty-three times","Give a man a match, and he’ll be warm for a few hours. Set him on fire, and he will be warm for the rest of his life.","My wife is mad that I have no sense of direction. So I packed up my stuff and right.","When does a joke become a dad joke? When it leaves you and never comes back.","What's red and bad for your teeth? A brick."]
console.log(Jokes.length)
const on_press = () => {        
    const randomInt = Math.floor(Math.random()*Jokes.length)
    const current_joke = document.querySelector("h1");
    const btn = document.querySelector("button");
    btn.innerText= "NEXT";
    console.log(randomInt);
    current_joke.innerText =  Jokes[randomInt];
}

 let arr  = [2345678,1234567,3246789];
