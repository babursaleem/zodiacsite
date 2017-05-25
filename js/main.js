// set Id html and refer to in array. Use commas to seperate each value except last one for each array
var zodiacArray = [
  {
    sign: "aries",
    description: "This is an ideal day to begin a creative venture, Aries. You've had many ideas and creative urges. Today it's time to choose one and take the first step to making your vision a reality. You will find that the form will change. This is no reason to be discouraged. It's part of the normal evolution of any work of art. The key here is to begin.",
    img: "img/aries.png"
  },

  {
    sign: "taurus",
    description: "Your naturally loving nature gets a boost today, Taurus. You could look especially attractive, so don't be surprised if you draw admiring looks from strangers. Romantic novels and movies could seem appealing now, but you're more interested in the real thing. If you can, try to schedule alone time with the special person in your life. You won't regret it!",
    img: "img/taurus.png"
  },

  {
    sign: "gemini",
    description: "Whether or not you should make a specific expenditure could cause some tension between you and a partner, Gemini. You may think that it isn't feasible now, while your friend is determined to go for it. This isn't the day to try to reach an agreement in this matter. Neither of you is likely to give in. Wait a couple days until you're both a bit less tense.",
    img: "img/gemini.jpg"
  },

{
  sign: "cancer",
  description: "Cancer, you don't have to be at everyone's beck and call all the time. This is exhausting, and you lose contact with yourself. You should try to take some time out today. Take a good look at your life to see where you're going. Go for a walk or take a long bubble bath. Things will be much clearer after a relaxing day of reflection.",
  img: "img/cancer.jpg"
},

{
  sign: "leo",
  description: "Is it possible you're too demanding, Leo? Today's planetary aspects may be asking you this question. You're choosy about the people you spend time with, and you have a tendency to ask them to go too far for you. Sometimes you have trouble knowing your limits where other people are concerned. You might want to think about this.",
  img: "img/leo.png"
},

{
  sign: "virgo",
  description: "Today's a day to daydream, although this may not be an activity you usually do. You may even feel as if you're on vacation. Let's just hope people don't ask you a lot of difficult questions, because your answers will be anything but clear. But you shouldn't have to carry the weight of the world on your shoulders every day, Virgo.",
  img: "img/virgo.jpg"
},

{
  sign: "libra",
  description: "If you have someone special in your life, Libra, today is a perfect day to stop playing at being your partner's parent, as you sometimes seem to do. Reverse roles, and let other people take care of you. The world won't fall apart if you let go for a while. No matter what happens, a day like today should open your eyes.",
  img: "img/libra.jpg"
},

{
  sign: "scorpio",
  description: "You won't be able to fix your indecisiveness, Scorpio. You just need to give yourself some time. The direction your life is taking isn't clear at the moment. There are great changes going on inside you. So, even though it may sound like strange advice, don't do a thing about it! Let the situation get clearer before you act.",
  img: "img/scorpio.jpg"
},

{
  sign: "sagittarius",
  description: "You have a strange and wonderful day ahead, Sagittarius. Once you've finished your work, you may want to either draw or write something that will help you remember today for a long time. You're beginning to see the results of recent changes in you, and you're looking for a way to express them. It may be difficult to find just the right words. But aren't you a natural-born writer? You also have the same sign as me which makes you the best!",
  img: "img/sagittarius.gif"
},

{
  sign: "capricorn",
  description: "You have a nice day in store, Capricorn. People may seem more attentive to your needs and generally very pleasant. You may not be used to this kind of treatment! You feel more outgoing and sociable than ever. You could take advantage of the day's tolerant atmosphere to meet people you may have been too afraid to introduce yourself to. They will surely have some new things to teach you.",
  img: "img/capricorn.png"
},

{
  sign: "aquarius",
  description: "Today is a day for healing and reconciliation. You may have been feeling abused and mistreated lately by someone (or a few people) in your family over the past few weeks. You're now ready for a new start, because you were able to work things out and you've learned something from what happened. Take the time to savor the moment, and spend some time with the people you love.",
  img: "img/aquarius.jpg"
},

{
  sign: "pisces",
  description: "You may feel living your life is like crossing a desert, but fortunately, Pisces, today brings your oasis. Take advantage of it! Some people you've met over the past few weeks could turn out to be more interesting than you originally thought. It's up to you to change those parts of your personality that have been holding you back.",
  img: "img/pisces.jpg"
},
];

// set function to get info from users input (form) and reference Id set in html
// for each index, if sign matches description, execute sign and console log
function horoscope (){
var userdata = document.getElementById("userdata");
// console.log(userdata.value);
for (var i = 0; i < zodiacArray.length; i++){
  // console.log(userdata.value, zodiacArray[i].sign)
  // zodiac.Array.length = 12 because of 12 horoscope signs
if (userdata.value == zodiacArray[i].sign){
  //value = whatever is typed in input by user (form in html)
console.log(zodiacArray[i].sign + zodiacArray[i].description + zodiacArray[i].img);

var sign = document.getElementById("sign");
var img = document.getElementById("img");
var description = document.getElementById("description");
sign.innerHTML = zodiacArray[i].sign;
description.innerHTML = zodiacArray[i].description;
img.src = zodiacArray[i].img;

    };
  };
};
