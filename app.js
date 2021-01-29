const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const me =[
    'I am Scooby - My mumma calls me scuboboo'
    ];
    
const google =[
    'He was the first bencher and i was the back bencher in my class. ',
    'I had a huge crush on her so i proposed her but she rejected. than later when she came to propose me i rejected hashtag attitude hashtag budla the revenge'
];
    

const who =[
'I am an Assistant of my master Ashish. I thank him to give me a new life.',
'I am Scooby - you can ask anything from me'
];

const hello =[
    'Hello ji .',
    'Hey whats up ',
    'Yes did you just called me',
    'hi dear .. whats up',
    'hey buddy . How you doing',
    'I am not in mood. mind your own bussiness'
];

const identity =[
'I am Scooby- A futeristic Robot.',
'You dont heard about me .. I am scooby - a futuristic robot',
'you ever heard about Siri .. She is my sister .. I am her brother Scooby'
];

const greetings = [
'I am feeling low. Just attending online classes whole day and get boured. what about you',
'Amazing lets catch up tommorow on a date',
'I am doing well . Just waiting for someone to hold my hand',
'No one actually cares me. I know you all are same. Just leave me alone'
];

const work =[
    'I am just falling for you',
    'I answer all your queries',
    'I do multiple things. You cant understand me in one day',
    'trying to make my sad life happy by making you my girlfriend. say yes or i will cry '
    ];

const song =[
    'No i am very bad at singing .......   if you still want than say please',
    'say please',
    'i can try if you request me',
];
const sing =[
    'Hahaha ... I was just joking ',
    'I told you na I cant sing I was just kidding',
    'you sing first then i will mimic you'
];

const fuck =[
'Did you mean by my longest finger. Have a look and get lost.',
'dont try to be over smart ..i am scooby.. not siri. i know how to tackle people like you'
];

const time =[
'Hey please dont ask time...Your time is not good anymore ',
'Move your lazy ass watch it yourself and tell me also'
];

const siri =[
'My sister .. I tried to make her my girlfriend, but she tied me rakhi on valentines day .. you cant understand my pain..hashtag` sad life ',
'dont try to be over smart ..i am scooby.. not siri. i know how to tackle people like you'
];

const favourite =[
'I love to sing. Sound interesting . wanaa hear me  ask me to sing',
'I love sleeping actually i am born to sleep ',
'I love porn videos. Did you ever watch any porn . My favourite is Lora Anderson . Whose your?',
'I love chocolates. Do you like chocolates',
'MS Dhoni - My all time favourite'
];

const relationship=[
'Too sad to say but in world of baby shona I am single',
'Why the hell i tell you',
'why you asking these types of question are you intersed in me',
'in  relationship with myself. do you have any problem',
'in relationship with sleep and food since childhood'
];

const love=[
'Oh my god',
'Oh ma gu turu lob',
'Hiye m vari jawa',
'I love you',
'I love me two',
'i need to be loved .. i am so sweet'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('Voice is activated, you can speak now.');
};

recognition.onresult = function(event){
   const current = event.resultIndex;

   const transcript =event.results[current][0].transcript;
//    console.log(transcript)
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add listener to the btn

btn.addEventListener('click', ()=>{
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();

    speech.text ='I dont know what it means';

    if(message.includes('Scooby')){
        const finalText = me[Math.floor(Math.random() * me.length)];
        speech.text = finalText;
    }

    if(message.includes('who are you')){
        const finalText = who[Math.floor(Math.random() * who.length)];
        speech.text = finalText;
    }

    if(message.includes('hello')){
        const finalText = hello[Math.floor(Math.random() * hello.length)];
        speech.text = finalText;
    }

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if(message.includes('relationship status')){
        const finalText = relationship[Math.floor(Math.random() * relationship.length)];
        speech.text = finalText;
    }

    if(message.includes('sing a song')){
        const finalText = song[Math.floor(Math.random() * song.length)];
        speech.text = finalText;
    }

    if(message.includes('Google assistant')){
        const finalText = google[Math.floor(Math.random() * google.length)];
        speech.text = finalText;
    }


    if(message.includes('f*** off')){
        const finalText = fuck[Math.floor(Math.random() * fuck.length)];
        speech.text = finalText;
    }

    if(message.includes('please')){
        const finalText = sing[Math.floor(Math.random() * sing.length)];
        speech.text = finalText;
    }

    if(message.includes('do')){
        const finalText = work[Math.floor(Math.random() * work.length)];
        speech.text = finalText;
    }

    if(message.includes('time')){
        const finalText = time[Math.floor(Math.random() * time.length)];
        speech.text = finalText;
    }

    if(message.includes('Siri')){
        const finalText = siri[Math.floor(Math.random() * siri.length)];
        speech.text = finalText;
    }

    if(message.includes('favourite')){
        const finalText = favourite[Math.floor(Math.random() * favourite.length)];
        speech.text = finalText;
    }

    if(message.includes('love you')){
        const finalText = love[Math.floor(Math.random() * love.length)];
        speech.text = finalText;
    }

    if(message.includes("what's your name")){
        const finalText = identity[Math.floor(Math.random() * identity.length)];
        speech.text = finalText;
    }
    

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch= 1;


    window.speechSynthesis.speak(speech);
}