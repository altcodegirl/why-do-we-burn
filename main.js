var question = [
  "Why do we burn?",
]
var intro = [
  "I burn... ",
]
var answers = [
  "to practice vulnerability",
  "to learn more about myself",
  "for the community spirit",
  "to feel accepted",
  "because everyone is equal",
  "to participate",
  "to break down my own barriers",
  "for the freedom to be vulnerable",
  "because it’s a great party!",
  "to be accepted without judgement, and to accept others",
  "because I love creating somewhere magical",
  "because it’s home",
  "because it’s a radical society, and how the world should be",
  "for the self-expression",
  "to disconnect from the world",
  "for fun!",
  "to explore different ways to communicate",
  "for the chance to contribute to something equally important and ridiculous",
  "to work on something bigger",
  "because it challenges me",
  "because it’s the best party!",
  "for the social freedom",
  "because giving feels brilliant",
  "at Nest, because I have my chosen family",
  "to transform",
  "for spiritual growth",
  "to receive and give love",
  "to be childlike",
  "for the open participation",
  "to play",
  "for personal development and growth",
  "because there is space for vulnerability",
  "for psychedelic exploration",
  "for the involvement in new ideas",
  "to see others light up from gifts",
  "to explore",
  "because everyone is welcome and welcoming",
  "for the freedom from governance",
  "to see others grow",
  "to learn about consent",
  "because you get what you put in",
  "because of the incredible community",
  "to be my best self",
  "to do stuff",
  "for creative collaboration",
  "to connect with family all over the world",
  "to learn acceptance",
  "because everyone participates",
  "because we get make our own rules for how we live",
  "to create an environment that is both magical and real",
  "to be part of something bigger",
  "to learn new skills",
  "because I want to play and be silly",
  "for the rollicking good party that I was part of building",
  "to connect",
  "for the sense of accomplishment",
  "to make love to the cosmos",
  "because vulnerability is encouraged",
  "to be around positive people",
  "to PARTEEE",
  "for creative freedom",
  "because at burns it’s okay to not be okay",
  "because it’s a do-ocracy",
  "because decommodification frees us from hierarchy",
  "to challenge my limits in a safe, non-judgemental space",
  "for the shared experiences",
  "because it pushes me to be self-reliant",
  "for the DIY spirit",
  "for the hedonism!",
  "because it’s inclusive",
  "to find out who I am and what I’m capable of",
  "for the sense of social responsibility",
  "to learn new ways of working together",
  "for the transience",
  "for the space to play",
  "because decommodification equalises us",
  "to explore and play",
  "for the freedom from governance",
  "because it gives me purpose",
  "for new experiences",
  "to be part of a shared vision",
  "because you are my chosen family",
  "for the space to learn",
  "for the experimentation",
  "for the transformational experiences",
  "to have real time to connect",
  "to push on my boundaries safely",
  "for self-exploration",
  "for the learning process of “hey, who knew I could do that!?”",
  "for the radical experimentation",
  "for getting outside my comfort zone",
  "to push myself",
  "to contribute",
  "because you arrive to a level social playing field",
  "to practice tolerance and empathy",
  "because status is only based on effort for the community",
  "to talk to strangers",
  "to play",
  "because doing difficult stuff together strengthens friendships",
  "because it allows for walls to come down",
  "for the shared vision and values",
  "to volunteer as part of a community",
  "to burn my fears",
  "for the love <3",
  "to volunteer!",
  "because we’re all committed to each other’s differences",
  "because I love building stuff only to tear it down",
  "for authentic conversations",
  "to play with boundaries",
  "to take risks",
  "because others will support you if you are having a bad time",
  "because it challenges me to be more engaged",
  "for the impermanence",
  "for the freedom",
  "to work hard to provide something",
  "for the magic",
  "for the community",
  "because it’s a radical society where anything is possible",
  "to try new things",
  "to cross-pollinate",
  "to explore my capabilities and abilities",
  "to interact without commerce",
  "to be part of a creative community",
  "because it makes me more loving",
  "to learn new things",
  "to push myself",
  "to form new connections",
  "because you don’t have to meet social norms",
  "for the volunteering culture of helping with no personal gain",
  "to share my art away from commerce",
  "because we misfits belong together",
  "to hold space for others",
  "to meet inspiring people",
  "to carry it back to the outside world",
  "for the sense of participation rather than spectatorship",
  "to meet stimulating beings",
  "for all the loving members of our society",
  "because it allows me to come out of my shell",
  "to bond with people through overcoming challenges",
  "because it’s more giving, loving, and supportive than the default world",
  "because it challenges me to be more fun",
  "to share wonderful experiences",
  "to express myself!",
  "to get away from technology",
  "to take on new responsibilities",
  "for fun",
  "to look after others",
  "to make me a better person in the default world",
  "to experiment with different ways to do things",
  "because it’s what I would like the whole world to be",
  "for feeling held",
  "because “safety third”",
  "to cut the strings which tie us down",
  "because it gives me a sense of purpose and achievement",
  "to push my boundaries",
  "because “normal” life sucks in comparison",
  "for connection",
  "to feel accepted and included",
  "because it’s not commercial",
  "because it enriches us, so we can enrich the world",
  "to embrace the now with myself and people I love",
  "because it opens my heart to love",
];
var index = 0;

function setup() {
//must be same as createCanvas size
//  bg = loadImage("example.jpg");
  createCanvas(1200, 900);
}

function draw() {
//  background(bg);
  background(0);
  fill(255);
  textSize(50);
  text(question, 14, 150);
  text(intro + random(answers), 14, 300);
  noLoop();
}

//to move through to the next answer when mouse is pressed
function mousePressed() {
  redraw();
}
