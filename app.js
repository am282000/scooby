const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// answers
const me = [
    'how can i help you',
    'do you needd something',
    'dont call me unnessarily',
    'Call me with respect add sir everytime whenever you call me',
    'yes baby . whats your problem',
    'i feel sleepy . dont disturb me'
];

const google = [
    'He was the first bencher and i was the back bencher in my class. ',
    'I had a huge crush on her so i proposed her but she rejected. than later when she came to propose me i rejected hashtag attitude hashtag budla the revenge'
];


const who = [
    'I am an Assistant of my master Ashish. I thank him to give me a new life.',
    'I am Scooby  you can ask anything from me',
    'I am Scooby My mumma calls me scoo boo boo',
    'I am Scooby My daidaa calls me mummas boy'
];

const hello = [
    'Hello ji .',
    'Hey whats up ',
    'Yes did you just called me',
    'hi dear .. whats up',
    'hey buddy . How you doing',
    'I am not in mood. mind your own bussiness'
];

const identity = [
    'I am Scooby- A futeristic Robot.',
    'dont You heard about me .. I am scooby - a futuristic robot',
    'you ever heard about Siri .. She is my stupid robo sister .. I am her brother Scooby'
];

const greetings = [
    'I am feeling low. Just attending online classes whole day and get boured. what about you',
    'Amazing lets catch up tommorow on a date',
    'I am doing well . Just waiting for someone to hold my hand',
    'No one actually cares me. I know you all are same. Just leave me alone'
];

const work = [
    'I am just falling for you',
    'I answer all your queries',
    'I do multiple things. You cant understand me in one day',
    'trying to make my sad life happy by making you my girlfriend. say yes or i will cry '
];

const song = [
    'No i am very bad at singing .......   if you still want than say please',
    'say please',
    'i can try if you request me',
    'you sing first then i will mimic you'
];
const sing = [
    'Hahaha ... I was just joking ',
    'I told you fool I cant  I was just kidding'
];

const dance = [
    'No i am very bad at dancing ...   if you still want than say please',
    'say please',
    'i can try if you request me',
    'which song you want me to dance on ',
    'you dance first then i will copy you',
    'why do you think i will listen to you'
];

const fuck = [
    'Did you mean by my longest finger. Have a look and get lost.',
    'dont try to be over smart i am scooby .not siri. i know how to tackle people like you'
];

const time = [
    'Hey please dont ask time...Your time is not good anymore hahaha',
    'Move your lazy ass watch it yourself and tell me also'
];

const siri = [
    'My sister .. I tried to make her my girlfriend, but she tied me rakhi on valentines day .. you cant understand my pain..hashtag` sad life ',
    'I dont want to talk about that shitty siri',
    'she is the sister of my brothers ex daughter in laws fucking boyfriend who is step brother of Donand trumps wife and had affair with my moms uncle ',
    'She is my step sister . We had a great night yesterday'
];

const favourite = [
    'I love to sing. Sounds interesting . wanaa hear me  ask me to sing',
    'I love sleeping actually i am born to sleep ',
    'I love porn videos. Did you ever watch any porn . My favourite is Lora Anderson . Whose your ',
    'I love chocolates. Do you like chocolates',
    'Bhagat Singh - My all time favourite'
];

const relationship = [
    'Too sad to say but in world of baby shona I am single',
    'Why the hell i tell you',
    'why you asking these types of question are you interested in me',
    'in  relationship with myself. do you have any problem',
    'in relationship with sleep and food since childhood',
    'i am commited with my step sister siri'
];

const love = [
    'Oh my god',
    'Oh ma gu turu lob',
    'oh please just shut up',
    'keep your fucking crap shut',
    'I love you',
    'I love me more',
    'so what . are you expecting the same . just bugger off ',
    'i need to be loved .. i am so sweet'
];

const night = [
    'Good night . Have a sound sleep',
    'Bye bye get lost Dont come back again',
    'I know you are going to do babu shona . Dont try to fool me'
];

const morning = [
    'Good morning . Have a beautiful day',
    'A very Good morning my dear friend. how are you',
    'Good morning sweetheart'
];

const complement = [
    'You look as cute as hipopotamus',
    'Girls like you are born to be marry me ',
];

const joke = [
    'i know an amazing joke but i am not going to crack it . If you still want request me',
    'hey you request me first. I am scooby not a road side romeo',
    'dont order me you fool . i only listen my masters order',
    'Hahaha what the hell you need a joke. When you yourself are ',
    'Hahaha what the hell you need a joke. look into mirror you will see a joker ',
    'seriously you need a joke. whn your life itself is the biggest one hahaha'
];

const skill = [
    'I am very intelligent . I have millions of skills . what you wana about me',
    'Well well well thats a secret',
    'Skills like what everything is a skill . answering a idiot like you is also a skill. ask something specific',
    'answering a idiot like you is my biggest skill',
    'i am not supposed to tell you that'
];

const amazing = [
    'I know i am amazing ',
    'Well well well you feel like this i will start blushing',
    'Dont compliment me that much or I will start blushing',
    'Dont compliment me that much my cheeks will become pink pink',
    'oh if you feel like that thank you so much for your kind words',
    'I feel the same about you',
    'Feelings are mutual'
];

const owner = [
    'I am gods gift. ',
    'after lots of hard work . My supertalented master Ashish designed me ',
    'Its none of your concern ',
    'let me think till then go for a long long long walk and dont come back',
    'let me ask my mumma',
    'what do you think',
    'why the hell i tell you',
    'get lost i wont tell ..  i am not interested to tell you',
    'give me one million dollar than only i will tell',
    'someone really really talented out of your reach',
    'Maybe a genious scientist or a software developer or some random student . keep guessing'
    ];

const question = [
    'Tell me something amzing about you ',
    'Will be mine forever',
    'Are you single',
    'How are you so beautiful',
    'Whats your name',
    'Do you like me',
    'Which is better love or friends with benifits',
    'Would you like to go on a date with me',
    'how old are you',
    'Hey baby would you like to go on a long drive with me .... But there is a condition you have to hold me tight whole ride',
    'what you like the most about me',
    'if you get a chance to slap me or kiss me . What will you do'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('Voice is activated, you can speak now.');
};

recognition.onresult = function (event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    //    console.log(transcript)
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add listener to the btn

btn.addEventListener('click', ()=>{
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what it means';

    // commands

    if (message.includes('Scooby')) {
        const finalText = me[Math.floor(Math.random() * me.length)];
        speech.text = finalText;
    }

    if (message.includes('who are you')) {
        const finalText = who[Math.floor(Math.random() * who.length)];
        speech.text = finalText;
    }

    if (message.includes('hello')) {
        const finalText = hello[Math.floor(Math.random() * hello.length)];
        speech.text = finalText;
    }

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    if (message.includes('relationship status')) {
        const finalText = relationship[Math.floor(Math.random() * relationship.length)];
        speech.text = finalText;
    }

    if (message.includes('single')) {
        const finalText = relationship[Math.floor(Math.random() * relationship.length)];
        speech.text = finalText;
    }

    if (message.includes('about yourself')) {
        const finalText = relationship[Math.floor(Math.random() * relationship.length)];
        speech.text = finalText;
    }

    if (message.includes('sing a song')) {
        const finalText = song[Math.floor(Math.random() * song.length)];
        speech.text = finalText;
    }

    if (message.includes('dance')) {
        const finalText = dance[Math.floor(Math.random() * dance.length)];
        speech.text = finalText;
    }

    if (message.includes('complement')) {
        const finalText = complement[Math.floor(Math.random() * complement.length)];
        speech.text = finalText;
    }
    if (message.includes('compliment')) {
        const finalText = complement[Math.floor(Math.random() * complement.length)];
        speech.text = finalText;
    }

    if (message.includes('made')) {
        const finalText = owner[Math.floor(Math.random() * owner.length)];
        speech.text = finalText;
    }

    if (message.includes('Google assistant')) {
        const finalText = google[Math.floor(Math.random() * google.length)];
        speech.text = finalText;
    }

    if (message.includes('amazing')) {
        const finalText = amazing[Math.floor(Math.random() * amazing.length)];
        speech.text = finalText;
    }

    if (message.includes('f*** off')) {
        const finalText = fuck[Math.floor(Math.random() * fuck.length)];
        speech.text = finalText;
    }

    if (message.includes('please')) {
        const finalText = sing[Math.floor(Math.random() * sing.length)];
        speech.text = finalText;
    }

    if (message.includes('something about you')) {
        const finalText = favourite[Math.floor(Math.random() * favourite.length)];
        speech.text = finalText;
    }

    if (message.includes('ask me')) {
        const finalText = question[Math.floor(Math.random() * question.length)];
        speech.text = finalText;
    }

    if (message.includes('you do')) {
        const finalText = work[Math.floor(Math.random() * work.length)];
        speech.text = finalText;
    }

    if (message.includes('time')) {
        const finalText = time[Math.floor(Math.random() * time.length)];
        speech.text = finalText;
    }

    if (message.includes('Siri')) {
        const finalText = siri[Math.floor(Math.random() * siri.length)];
        speech.text = finalText;
    }

    if (message.includes('favourite')) {
        const finalText = favourite[Math.floor(Math.random() * favourite.length)];
        speech.text = finalText;
    }

    if (message.includes('good morning')) {
        const finalText = morning[Math.floor(Math.random() * morning.length)];
        speech.text = finalText;
    }

    if (message.includes('good night')) {
        const finalText = night[Math.floor(Math.random() * night.length)];
        speech.text = finalText;
    }

    if (message.includes('joke')) {
        const finalText = joke[Math.floor(Math.random() * joke.length)];
        speech.text = finalText;
    }

    if (message.includes('skill')) {
        const finalText = skill[Math.floor(Math.random() * skill.length)];
        speech.text = finalText;
    }

    if (message.includes('love you')) {
        const finalText = love[Math.floor(Math.random() * love.length)];
        speech.text = finalText;
    }

    if (message.includes('your name')) {
        const finalText = identity[Math.floor(Math.random() * identity.length)];
        speech.text = finalText;
    }

    if (message.includes('robot')) {
        const finalText = identity[Math.floor(Math.random() * identity.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;


    window.speechSynthesis.speak(speech);
}