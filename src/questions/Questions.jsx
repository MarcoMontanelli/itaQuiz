const questions = [
   
    {
        question: "Which is my favourite color?",
        options: ["True","False"],
        correctAnswer: "True",
        media: "../src/assets/red.PNG",
        mediaType: "image",
      },
      {
        question: "Which is more important for the italian economy?",
        options: ["Pistacchio di Bronte","The Intel factory"],
        correctAnswer: "Pistacchio di Bronte",
        media: "../src/assets/pistacchio.jpg",
        mediaType: "image",
      },
      {
        question: "What did capitan Schettino do during the costa concordia accident?",
        options: ["He accidentally fell into a lifeboat","He saved hundreds of people","He was busy meeting his misstress"],
        correctAnswer: "He accidentally fell into a lifeboat",
        media: "../src/assets/concordia.jpg",
        mediaType: "image",
      },
      {
        question: "What happend on the 23rd of may 1992 at 17:58:48 at 38.182778°, 13.244722°",
        options: ["Nothing","Nothing","Nothing","A terrorist attack"],
        correctAnswer: "Nothing",
        media: "../src/assets/capaci.jpg",
        mediaType: "image",
      },
      {
        question: "What happend on the 14th of August 2018 at 11:36 at 	44.425833°, 8.888889°",
        options: ["Nothing","Nothing","Nothing","A typical display of the longevity of italian building"],
        correctAnswer: "Nothing",
        media: "../src/assets/Morandi.jpg",
        mediaType: "image",
      },
      {
        question: "What happend at 21:45:07 on the 13th of January 2012 at 42.365278°, 10.921667° ",
        options: ["Nothing","Nothing","Nothing","Titanic 2.0"],
        correctAnswer: "Nothing",
        media: "../src/assets/capitano.webp",
        mediaType: "image",
      },
      {
        question: "What happend on the 18th of January 2017 at 16:48 at 42.430939°, 13.780912°",
        options: ["Nothing","Nothing","Nothing","An avalance"],
        correctAnswer: "Nothing",
        media: "../src/assets/rigopiano.jpg",
        mediaType: "image",
      },
      {
        question: "Who is this gentleman?",
        options: ["A femminist activist","Filippo Turati","A communist","A murderer who belongs in jail"],
        correctAnswer: "A femminist activist",
        media: "../src/assets/turetta.jpg",
        mediaType: "image",
      },
      {
        question: "What should you do?",
        options: ["Contact the council to complain","Threaten the council and ask for pizzo", "Take the traffic light down and sell it for scrap copper"],
        correctAnswer: "Take the traffic light down and sell it for scrap copper",
        media: "Your local council has decided to install a new traffic light to ease the frequent traffic congestions in front of your home. After a few days you realize that the new hardware is making it difficult to drive at 200 mph without a license and plate with your 30 years old volkswagen golf 1.9 tdi",
        mediaType: "text",
      },
      {
        question: "What do you think?",
        options: ["I strongly agree","No wtf"],
        correctAnswer: "I strongly agree",
        media:`
        Combattenti di terra, di mare e dell'aria! Camicie nere della rivoluzione e delle legioni! 
        Uomini e donne d'Italia, dell'Impero e del regno d'Albania! Ascoltate! 
        Un'ora segnata dal destino batte nel cielo della nostra patria. 
        L'ora delle decisioni irrevocabili. 
        La dichiarazione di guerra è già stata consegnata agli ambasciatori 
        di Gran Bretagna e di Francia. 
        Scendiamo in campo contro le democrazie plutocratiche e reazionarie dell'Occidente, 
        Visioni delle altre città italiane
        che, in ogni tempo, 
        hanno ostacolato la marcia, e spesso insidiato l'esistenza medesima del popolo italiano. 
        Alcuni lustri della storia più recente si possono riassumere in queste parole, 
        frasi, promesse, minacce, ricatti e, alla fine, 
        quale coronamento dell'edificio, l'ignobile assedio societario di cinquantadue stati. 
        Se noi oggi siamo decisi ad affrontare i rischi ed i sacrifici di una guerra, vi è che l'onore,
        gli interessi, l'avvenire ferreamente lo impongono,
        poiché un grande popolo è veramente tale se considera sacri i suoi impegni
        e se non evade dalle prove supreme che determinano il corso della storia.
        Noi impugniamo le armi per risolvere, dopo il problema risolto delle nostre frontiere continentali, 
        il problema delle nostre frontiere marittime; noi vogliamo spezzare le catene di ordine  
        territoriale e militare che ci soffocano nel nostro mare, poiché un popolo di quarantacinque  
        milioni di anime non è veramente libero se non ha libero l'accesso all'Oceano. 
        L'Italia, proletaria e fascista, è per la terza volta in piedi,  
        forte, fiera e compatta come non mai.  
        La parola d'ordine è una sola,  
        categorica e impegnativa per tutti.  
        Essa già trasvola ed accende i cuori dalle Alpi all'Oceano Indiano: vincere! 
        E vinceremo, per dare finalmente un lungo periodo di pace con la giustizia all'Italia, all'Europa, al mondo.
        Popolo italiano! Corri alle armi, e dimostra la tua tenacia,
        il tuo coraggio, il tuo valore..
        `,
        mediaType: "text",
      },
      {
        question: "Who is this guy?",
        options: ["A true pillar of the community", "An innocent man", "A murderer who belongs in jail", "Idk"],
        correctAnswer: "An innocent man",
        media: "../src/assets/boss.PNG",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["A legitimate businessman", "A knight", "Angela Merkel", "Idk"],
        correctAnswer: "A legitimate businessman",
        media: "../src/assets/silvio.webp",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["An innocent old man", "A famous poet from Tuscany", "A master of the italian language", "All of the above"],
        correctAnswer: "All of the above",
        media: "../src/assets/pietro.jpg",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["An general ", "A famous poet", "A master of the italian language", "All of the above"],
        correctAnswer: "All of the above",
        media: "../src/assets/gda.jpg",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["Amico delle guardie ", "A tv presenter", "A snitch", "All of the above"],
        correctAnswer: "All of the above",
        media: "../src/assets/guardie.jpg",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["A famous chef ", "A tv presenter", "A fascist", "All of the above"],
        correctAnswer: "All of the above",
        media: "../src/assets/rubio.webp",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["A politician ", "A tv presenter", "A legend", "All of the above"],
        correctAnswer: "All of the above",
        media: "../src/assets/gerry.jpg",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["A famous politician ", "An african italian man", "One of the worst rappers of italy", "All of the above"],
        correctAnswer: "All of the above",
        media: "../src/assets/gucci boy.jpg",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["A random man from Tuscany", "A legitimate businessman", "Orlando furioso", "All of the above"],
        correctAnswer: "All of the above",
        media: "../src/assets/orlando.png",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["Karl Marx", "A computer science professor", "A communist", "All of the above"],
        correctAnswer: "Karl Marx",
        media: "../src/assets/karlMarx.jpg",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["Napoleone Bonaparte", "An historian", "A communist", "Alessandro Barbero", "All of the above"],
        correctAnswer: "Alessandro Barbero",
        media: "../src/assets/ale.jpg",
        mediaType: "image",
      },
      {
        question: "Who is this guy?",
        options: ["Van Gogh ", "Caparezza", "Tunnel", "All of the above"],
        correctAnswer: "All of the above",
        media: "../src/assets/capa.jpg",
        mediaType: "image",
      },
      {
        question: "Watch this video, which is the best animal out there?",
        options: ["Women", "Goats", "Vincitore becchi"],
        correctAnswer: "Goats",
        media: "https://www.youtube.com/embed/Jo07YIB3HBU", 
        mediaType: "youtube",
      },
      {
        question: "What should you do?",
        options: ["Quando c'era lui i treni arrivavano in orario","You stand on the table and you do the famous handpose", "You scold him for making such distasteful jokes"],
        correctAnswer: "You stand on the table and you do the famous handpose",
        media: "Your grandpa invites you to dinner and he starts yapping about the events from 1922 to 1943.",
        mediaType: "text",
      },
      
    {
        question: "Who is he?",
        options: ["A random bald italian man", "One of the greatest journalists", "The best", "idk"],
        correctAnswer: "One of the greatest journalists",
        media: "../src/assets/benito.jpeg",
        mediaType: "image"
      },
    // Add more questions as needed
  ];
  
  export default questions;
  