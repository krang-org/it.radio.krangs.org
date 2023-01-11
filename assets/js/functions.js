window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Ferretti Battaglia E Figli",
      "url": "./commercials/it-IT/artigianato/ferretti-battaglia-e-figli/1673463943897/commercial.mp3",
      "artist": "Artigianato",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Galli Ross Group",
      "url": "./commercials/it-IT/difesa-e-spazio/galli-ross-group/1673464553349/commercial.mp3",
      "artist": "Difesa E Spazio",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Donati Group",
      "url": "./commercials/it-IT/forniture-e-attrezzature-per-le-attivit-commerciali/donati-group/1673461719675/commercial.mp3",
      "artist": "Forniture E Attrezzature Per Le Attivit Commerciali",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Greco Milani E Battaglia Spa",
      "url": "./commercials/it-IT/gruppi-di-studio/greco-milani-e-battaglia-spa/1673461153131/commercial.mp3",
      "artist": "Gruppi Di Studio",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Guerra Fabbri E Monti Spa",
      "url": "./commercials/it-IT/marittimo/guerra-fabbri-e-monti-spa/1673462124335/commercial.mp3",
      "artist": "Marittimo",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Parisi Monti E Leone E Figli",
      "url": "./commercials/it-IT/scrittura-e-editing/parisi-monti-e-leone-e-figli/1673461768833/commercial.mp3",
      "artist": "Scrittura E Editing",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Esposito S R L ",
      "url": "./commercials/it-IT/difesa-e-spazio/esposito-s-r-l-/1673462320645/commercial.mp3",
      "artist": "Difesa E Spazio",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Battaglia Conte S R L ",
      "url": "./commercials/it-IT/musica/battaglia-conte-s-r-l-/1673461462535/commercial.mp3",
      "artist": "Musica",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Palmieri S R L ",
      "url": "./commercials/it-IT/stampa/palmieri-s-r-l-/1673462284966/commercial.mp3",
      "artist": "Stampa",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Vitali Galli E Bianc Group",
      "url": "./commercials/it-IT/servizi-al-consumatore/vitali-galli-e-bianc-group/1673461278762/commercial.mp3",
      "artist": "Servizi Al Consumatore",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Galli Basile E Figli",
      "url": "./commercials/it-IT/servizi-per-individui-e-famiglie/galli-basile-e-figli/1673462719026/commercial.mp3",
      "artist": "Servizi Per Individui E Famiglie",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Grasso Orlando Spa",
      "url": "./commercials/it-IT/gestione-dell-istruzione/grasso-orlando-spa/1673462219719/commercial.mp3",
      "artist": "Gestione Dell Istruzione",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Greco Marchetti E Sorrentino Spa",
      "url": "./commercials/it-IT/software-per-computer/greco-marchetti-e-sorrentino-spa/1673461194291/commercial.mp3",
      "artist": "Software Per Computer",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Mazza Cont E Caruso Spa",
      "url": "./commercials/it-IT/logistica-e-catena-di-fornitura/mazza-cont-e-caruso-spa/1673464706607/commercial.mp3",
      "artist": "Logistica E Catena Di Fornitura",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Basile Ricci E Figli",
      "url": "./commercials/it-IT/alimenti-e-bevande/basile-ricci-e-figli/1673462055923/commercial.mp3",
      "artist": "Alimenti E Bevande",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Vitale Barone E Figli",
      "url": "./commercials/it-IT/e-learning/vitale-barone-e-figli/1673461945206/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Gallo Fabbri E Figli",
      "url": "./commercials/it-IT/servizi-di-informazione/gallo-fabbri-e-figli/1673463703947/commercial.mp3",
      "artist": "Servizi Di Informazione",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Riva Donati Spa",
      "url": "./commercials/it-IT/istruzione-primaria-e-secondaria/riva-donati-spa/1673461470813/commercial.mp3",
      "artist": "Istruzione Primaria E Secondaria",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Bianchi Ruggiero E Giuliani Spa",
      "url": "./commercials/it-IT/amministrazione-governativa/bianchi-ruggiero-e-giuliani-spa/1673463257974/commercial.mp3",
      "artist": "Amministrazione Governativa",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Sala Group",
      "url": "./commercials/it-IT/servizi-di-informazione/sala-group/1673461340102/commercial.mp3",
      "artist": "Servizi Di Informazione",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Negri Spa",
      "url": "./commercials/it-IT/automazione-industriale/negri-spa/1673462938374/commercial.mp3",
      "artist": "Automazione Industriale",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Testa Group",
      "url": "./commercials/it-IT/organizzazione-politica/testa-group/1673462510036/commercial.mp3",
      "artist": "Organizzazione Politica",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Moretti Rizzi E Morelli S R L ",
      "url": "./commercials/it-IT/cura-della-salute-mentale/moretti-rizzi-e-morelli-s-r-l-/1673463809124/commercial.mp3",
      "artist": "Cura Della Salute Mentale",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Pellegrino Valentini E Figli",
      "url": "./commercials/it-IT/nanotecnologia/pellegrino-valentini-e-figli/1673463724193/commercial.mp3",
      "artist": "Nanotecnologia",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Palumbo Moretti E Leone E Figli",
      "url": "./commercials/it-IT/immobili-commerciali/palumbo-moretti-e-leone-e-figli/1673463679324/commercial.mp3",
      "artist": "Immobili Commerciali",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Orlando Barone S R L ",
      "url": "./commercials/it-IT/musei-e-istituzioni/orlando-barone-s-r-l-/1673461253975/commercial.mp3",
      "artist": "Musei E Istituzioni",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Fabbri Martino Spa",
      "url": "./commercials/it-IT/pratica-legale/fabbri-martino-spa/1673464585122/commercial.mp3",
      "artist": "Pratica Legale",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Cattaneo Orlando Group",
      "url": "./commercials/it-IT/investigazioni-e-sicurezza/cattaneo-orlando-group/1673462906679/commercial.mp3",
      "artist": "Investigazioni E Sicurezza",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Rizzo S R L ",
      "url": "./commercials/it-IT/aviazione-e-aerospaziale/rizzo-s-r-l-/1673462477392/commercial.mp3",
      "artist": "Aviazione E Aerospaziale",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Grassi Fontana Group",
      "url": "./commercials/it-IT/agricoltura-e-pesca/grassi-fontana-group/1673464137465/commercial.mp3",
      "artist": "Agricoltura E Pesca",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Barbieri Fontana E Figli",
      "url": "./commercials/it-IT/trasporti-autotrasporto-ferrovia/barbieri-fontana-e-figli/1673461263523/commercial.mp3",
      "artist": "Trasporti Autotrasporto Ferrovia",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Ferrari S R L ",
      "url": "./commercials/it-IT/moda-e-abbigliamento/ferrari-s-r-l-/1673463788877/commercial.mp3",
      "artist": "Moda E Abbigliamento",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Marini Group",
      "url": "./commercials/it-IT/reti-informatiche/marini-group/1673463398689/commercial.mp3",
      "artist": "Reti Informatiche",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Marini S R L ",
      "url": "./commercials/it-IT/investigazioni-e-sicurezza/marini-s-r-l-/1673461406306/commercial.mp3",
      "artist": "Investigazioni E Sicurezza",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Longo De Rosa Spa",
      "url": "./commercials/it-IT/importazione-ed-esportazione/longo-de-rosa-spa/1673461208332/commercial.mp3",
      "artist": "Importazione Ed Esportazione",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Bernardi Battaglia Group",
      "url": "./commercials/it-IT/musica/bernardi-battaglia-group/1673462851242/commercial.mp3",
      "artist": "Musica",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Sorrentino Palmieri E Guerra E Figli",
      "url": "./commercials/it-IT/aviazione-e-aerospaziale/sorrentino-palmieri-e-guerra-e-figli/1673463297537/commercial.mp3",
      "artist": "Aviazione E Aerospaziale",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Carbon Martini Group",
      "url": "./commercials/it-IT/vini-e-spiriti/carbon-martini-group/1673462859173/commercial.mp3",
      "artist": "Vini E Spiriti",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Ferrara Carbon E Vitale Spa",
      "url": "./commercials/it-IT/organizzazione-politica/ferrara-carbon-e-vitale-spa/1673461568493/commercial.mp3",
      "artist": "Organizzazione Politica",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Ruggiero Neri E Romano E Figli",
      "url": "./commercials/it-IT/servizi-ambientali/ruggiero-neri-e-romano-e-figli/1673462753210/commercial.mp3",
      "artist": "Servizi Ambientali",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Serr Sanna E Vitali E Figli",
      "url": "./commercials/it-IT/design/serr-sanna-e-vitali-e-figli/1673462762888/commercial.mp3",
      "artist": "Design",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Sanna Parisi Group",
      "url": "./commercials/it-IT/servizi-ambientali/sanna-parisi-group/1673461113955/commercial.mp3",
      "artist": "Servizi Ambientali",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Ferraro Group",
      "url": "./commercials/it-IT/raccolta-di-fondi/ferraro-group/1673462683571/commercial.mp3",
      "artist": "Raccolta Di Fondi",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Orlando Bernardi E Rizzo Spa",
      "url": "./commercials/it-IT/ricerca-di-mercato/orlando-bernardi-e-rizzo-spa/1673463783637/commercial.mp3",
      "artist": "Ricerca Di Mercato",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Palumbo Sorrentino Group",
      "url": "./commercials/it-IT/ricerca-di-mercato/palumbo-sorrentino-group/1673464814713/commercial.mp3",
      "artist": "Ricerca Di Mercato",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Villa Greco E Benedetti Group",
      "url": "./commercials/it-IT/media-e-comunicazioni/villa-greco-e-benedetti-group/1673461306436/commercial.mp3",
      "artist": "Media E Comunicazioni",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Benedetti Silvestri E Figli",
      "url": "./commercials/it-IT/banca-d-investimento/benedetti-silvestri-e-figli/1673464610077/commercial.mp3",
      "artist": "Banca D Investimento",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Costa Palmieri S R L ",
      "url": "./commercials/it-IT/pratica-legale/costa-palmieri-s-r-l-/1673461314690/commercial.mp3",
      "artist": "Pratica Legale",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Martinelli Galli E Greco S R L ",
      "url": "./commercials/it-IT/spedizioni-e-consegne/martinelli-galli-e-greco-s-r-l-/1673461228947/commercial.mp3",
      "artist": "Spedizioni E Consegne",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Mazza Group",
      "url": "./commercials/it-IT/sicurezza-pubblica/mazza-group/1673461173475/commercial.mp3",
      "artist": "Sicurezza Pubblica",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "De Rosa S R L ",
      "url": "./commercials/it-IT/costruzione-ferroviaria/de-rosa-s-r-l-/1673461144153/commercial.mp3",
      "artist": "Costruzione Ferroviaria",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Morelli Marchetti E De Angelis Spa",
      "url": "./commercials/it-IT/ambiente-e-rinnovabili/morelli-marchetti-e-de-angelis-spa/1673464015335/commercial.mp3",
      "artist": "Ambiente E Rinnovabili",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Marini Mazza E Cattaneo Spa",
      "url": "./commercials/it-IT/servizi-pubblici/marini-mazza-e-cattaneo-spa/1673463366335/commercial.mp3",
      "artist": "Servizi Pubblici",
      "cover_art_url": "assets/img/krang/krang-radio-062.jpg"
    },
    {
      "name": "Riva S R L ",
      "url": "./commercials/it-IT/ricerca-di-mercato/riva-s-r-l-/1673463535369/commercial.mp3",
      "artist": "Ricerca Di Mercato",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Marini Sala Group",
      "url": "./commercials/it-IT/outsourcing-offshoring/marini-sala-group/1673464847573/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Ferrari Lombardo E Figli",
      "url": "./commercials/it-IT/organizzazione-politica/ferrari-lombardo-e-figli/1673462735678/commercial.mp3",
      "artist": "Organizzazione Politica",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Palumbo Conte E Rinaldi Group",
      "url": "./commercials/it-IT/produzione-cinematografica-e-televisiva/palumbo-conte-e-rinaldi-group/1673464363546/commercial.mp3",
      "artist": "Produzione Cinematografica E Televisiva",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Martinelli De Luca E Figli",
      "url": "./commercials/it-IT/salute-benessere-e-fitness/martinelli-de-luca-e-figli/1673461374963/commercial.mp3",
      "artist": "Salute Benessere E Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Costa Group",
      "url": "./commercials/it-IT/latte/costa-group/1673461692896/commercial.mp3",
      "artist": "Latte",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Sartori Fior E Ross Group",
      "url": "./commercials/it-IT/e-learning/sartori-fior-e-ross-group/1673462729652/commercial.mp3",
      "artist": "E Learning",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Esposito Fior Spa",
      "url": "./commercials/it-IT/amministrazione-governativa/esposito-fior-spa/1673462071383/commercial.mp3",
      "artist": "Amministrazione Governativa",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Bianc De Angelis E Figli",
      "url": "./commercials/it-IT/materiali-da-costruzione/bianc-de-angelis-e-figli/1673463714652/commercial.mp3",
      "artist": "Materiali Da Costruzione",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Longo E Figli",
      "url": "./commercials/it-IT/manifattura/longo-e-figli/1673461385066/commercial.mp3",
      "artist": "Manifattura",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Bruno Valentini E Figli",
      "url": "./commercials/it-IT/marketing-e-pubblicit-/bruno-valentini-e-figli/1673461576261/commercial.mp3",
      "artist": "Marketing E Pubblicit ",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Rinaldi Ferretti E Martini S R L ",
      "url": "./commercials/it-IT/stampa/rinaldi-ferretti-e-martini-s-r-l-/1673462600284/commercial.mp3",
      "artist": "Stampa",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Conte S R L ",
      "url": "./commercials/it-IT/relazioni-pubbliche-e-comunicazioni/conte-s-r-l-/1673464307147/commercial.mp3",
      "artist": "Relazioni Pubbliche E Comunicazioni",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Lombardi Messina E Figli",
      "url": "./commercials/it-IT/architettura-e-pianificazione/lombardi-messina-e-figli/1673464424465/commercial.mp3",
      "artist": "Architettura E Pianificazione",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Damico Spa",
      "url": "./commercials/it-IT/amministrazione-governativa/damico-spa/1673461542586/commercial.mp3",
      "artist": "Amministrazione Governativa",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Bruno S R L ",
      "url": "./commercials/it-IT/intrattenimento/bruno-s-r-l-/1673463545022/commercial.mp3",
      "artist": "Intrattenimento",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Testa S R L ",
      "url": "./commercials/it-IT/telecomunicazioni/testa-s-r-l-/1673464277448/commercial.mp3",
      "artist": "Telecomunicazioni",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Rizzi Group",
      "url": "./commercials/it-IT/spedizioni-e-consegne/rizzi-group/1673464355188/commercial.mp3",
      "artist": "Spedizioni E Consegne",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Morelli Bellini S R L ",
      "url": "./commercials/it-IT/salute-benessere-e-fitness/morelli-bellini-s-r-l-/1673464542797/commercial.mp3",
      "artist": "Salute Benessere E Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-048.jpg"
    },
    {
      "name": "Fontana Fior E Caputo E Figli",
      "url": "./commercials/it-IT/gestione-degli-investimenti/fontana-fior-e-caputo-e-figli/1673461133189/commercial.mp3",
      "artist": "Gestione Degli Investimenti",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Messina Montanari E Lombardo S R L ",
      "url": "./commercials/it-IT/ricerca-di-mercato/messina-montanari-e-lombardo-s-r-l-/1673462340552/commercial.mp3",
      "artist": "Ricerca Di Mercato",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Bianchi D Amico E Negri S R L ",
      "url": "./commercials/it-IT/medicina-alternativa/bianchi-d-amico-e-negri-s-r-l-/1673464835376/commercial.mp3",
      "artist": "Medicina Alternativa",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Moretti Testa E Giordano Group",
      "url": "./commercials/it-IT/trasporti-autotrasporto-ferrovia/moretti-testa-e-giordano-group/1673463390009/commercial.mp3",
      "artist": "Trasporti Autotrasporto Ferrovia",
      "cover_art_url": "assets/img/krang/krang-radio-014.jpg"
    },
    {
      "name": "Martini Donati E Ricci S R L ",
      "url": "./commercials/it-IT/allevamento/martini-donati-e-ricci-s-r-l-/1673464716236/commercial.mp3",
      "artist": "Allevamento",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Galli Group",
      "url": "./commercials/it-IT/banca-d-investimento/galli-group/1673462348677/commercial.mp3",
      "artist": "Banca D Investimento",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Rinaldi Gentile Group",
      "url": "./commercials/it-IT/pubblicit-e-marketing/rinaldi-gentile-group/1673462771849/commercial.mp3",
      "artist": "Pubblicit E Marketing",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Silvestri Morelli E Figli",
      "url": "./commercials/it-IT/automotive/silvestri-morelli-e-figli/1673463220354/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Benedetti Palmieri Group",
      "url": "./commercials/it-IT/immobili-commerciali/benedetti-palmieri-group/1673463636581/commercial.mp3",
      "artist": "Immobili Commerciali",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "De Luca Group",
      "url": "./commercials/it-IT/vini-e-spiriti/de-luca-group/1673462592053/commercial.mp3",
      "artist": "Vini E Spiriti",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Benedetti Silvestri Group",
      "url": "./commercials/it-IT/allevamento/benedetti-silvestri-group/1673463496830/commercial.mp3",
      "artist": "Allevamento",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Cattaneo Spa",
      "url": "./commercials/it-IT/materiali-da-costruzione/cattaneo-spa/1673461903487/commercial.mp3",
      "artist": "Materiali Da Costruzione",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Esposito Farin E Cont E Figli",
      "url": "./commercials/it-IT/ospedali-e-cure-sanitarie/esposito-farin-e-cont-e-figli/1673462880817/commercial.mp3",
      "artist": "Ospedali E Cure Sanitarie",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Morelli Amato Spa",
      "url": "./commercials/it-IT/scrittura-e-editing/morelli-amato-spa/1673463288577/commercial.mp3",
      "artist": "Scrittura E Editing",
      "cover_art_url": "assets/img/krang/krang-radio-071.jpg"
    },
    {
      "name": "Parisi S R L ",
      "url": "./commercials/it-IT/wireless/parisi-s-r-l-/1673462006236/commercial.mp3",
      "artist": "Wireless",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Ferrari Spa",
      "url": "./commercials/it-IT/outsourcing-offshoring/ferrari-spa/1673462744509/commercial.mp3",
      "artist": "Outsourcing Offshoring",
      "cover_art_url": "assets/img/krang/krang-radio-010.jpg"
    },
    {
      "name": "Serr Esposito E D Amico E Figli",
      "url": "./commercials/it-IT/veterinaria/serr-esposito-e-d-amico-e-figli/1673463688270/commercial.mp3",
      "artist": "Veterinaria",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Marino Caputo E Figli",
      "url": "./commercials/it-IT/servizi-per-individui-e-famiglie/marino-caputo-e-figli/1673461327631/commercial.mp3",
      "artist": "Servizi Per Individui E Famiglie",
      "cover_art_url": "assets/img/krang/krang-radio-069.jpg"
    },
    {
      "name": "Rinaldi Ferrari S R L ",
      "url": "./commercials/it-IT/servizi-di-informazione/rinaldi-ferrari-s-r-l-/1673461057677/commercial.mp3",
      "artist": "Servizi Di Informazione",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Palumbo E Figli",
      "url": "./commercials/it-IT/difesa-e-spazio/palumbo-e-figli/1673461186639/commercial.mp3",
      "artist": "Difesa E Spazio",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Bernardi S R L ",
      "url": "./commercials/it-IT/tabacco/bernardi-s-r-l-/1673463342734/commercial.mp3",
      "artist": "Tabacco",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Bernardi De Angelis E Monti Group",
      "url": "./commercials/it-IT/tecnologia-dell-informazione-e-servizi/bernardi-de-angelis-e-monti-group/1673461219291/commercial.mp3",
      "artist": "Tecnologia Dell Informazione E Servizi",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Mazza Group",
      "url": "./commercials/it-IT/gestione-di-organizzazioni-senza-scopo-di-lucro/mazza-group/1673463587097/commercial.mp3",
      "artist": "Gestione Di Organizzazioni Senza Scopo Di Lucro",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Cattaneo Basile E Marian Group",
      "url": "./commercials/it-IT/servizi-per-individui-e-famiglie/cattaneo-basile-e-marian-group/1673461103113/commercial.mp3",
      "artist": "Servizi Per Individui E Famiglie",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Santoro Bellini E D Amico S R L ",
      "url": "./commercials/it-IT/produzione-alimentare/santoro-bellini-e-d-amico-s-r-l-/1673461239035/commercial.mp3",
      "artist": "Produzione Alimentare",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Ferretti S R L ",
      "url": "./commercials/it-IT/giochi-d-azzardo-e-casin-/ferretti-s-r-l-/1673463476953/commercial.mp3",
      "artist": "Giochi D Azzardo E Casin ",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Caruso Ferraro E Figli",
      "url": "./commercials/it-IT/software-per-computer/caruso-ferraro-e-figli/1673461296620/commercial.mp3",
      "artist": "Software Per Computer",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Romano Farin E Fontana Group",
      "url": "./commercials/it-IT/relazioni-pubbliche-e-comunicazioni/romano-farin-e-fontana-group/1673463627205/commercial.mp3",
      "artist": "Relazioni Pubbliche E Comunicazioni",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Negri Bernardi E Pagano Spa",
      "url": "./commercials/it-IT/alimenti-e-bevande/negri-bernardi-e-pagano-spa/1673461552193/commercial.mp3",
      "artist": "Alimenti E Bevande",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Damico Vitale S R L ",
      "url": "./commercials/it-IT/artigianato/damico-vitale-s-r-l-/1673462926855/commercial.mp3",
      "artist": "Artigianato",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Montanari Grasso S R L ",
      "url": "./commercials/it-IT/industria-estrattiva/montanari-grasso-s-r-l-/1673462198397/commercial.mp3",
      "artist": "Industria Estrattiva",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Guerra S R L ",
      "url": "./commercials/it-IT/semiconduttori/guerra-s-r-l-/1673463049047/commercial.mp3",
      "artist": "Semiconduttori",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Ricci S R L ",
      "url": "./commercials/it-IT/nanotecnologia/ricci-s-r-l-/1673462956999/commercial.mp3",
      "artist": "Nanotecnologia",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Silvestri Group",
      "url": "./commercials/it-IT/musei-e-istituzioni/silvestri-group/1673463553699/commercial.mp3",
      "artist": "Musei E Istituzioni",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Rinaldi E Figli",
      "url": "./commercials/it-IT/tabacco/rinaldi-e-figli/1673462664409/commercial.mp3",
      "artist": "Tabacco",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Longo Messina E Palmieri Group",
      "url": "./commercials/it-IT/stampa/longo-messina-e-palmieri-group/1673464747102/commercial.mp3",
      "artist": "Stampa",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Carbon Rizzi Spa",
      "url": "./commercials/it-IT/marketing-e-pubblicit-/carbon-rizzi-spa/1673462869394/commercial.mp3",
      "artist": "Marketing E Pubblicit ",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Rinaldi Fabbri E Damico S R L ",
      "url": "./commercials/it-IT/aviazione-e-aerospaziale/rinaldi-fabbri-e-damico-s-r-l-/1673462991599/commercial.mp3",
      "artist": "Aviazione E Aerospaziale",
      "cover_art_url": "assets/img/krang/krang-radio-013.jpg"
    },
    {
      "name": "De Rosa Battaglia E Barbieri E Figli",
      "url": "./commercials/it-IT/relazioni-governative/de-rosa-battaglia-e-barbieri-e-figli/1673464597114/commercial.mp3",
      "artist": "Relazioni Governative",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Bellini Martino Group",
      "url": "./commercials/it-IT/gruppi-di-studio/bellini-martino-group/1673462329962/commercial.mp3",
      "artist": "Gruppi Di Studio",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Colombo Messina E Figli",
      "url": "./commercials/it-IT/automotive/colombo-messina-e-figli/1673464755786/commercial.mp3",
      "artist": "Automotive",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Moretti Gallo Spa",
      "url": "./commercials/it-IT/servizi-finanziari/moretti-gallo-spa/1673464678618/commercial.mp3",
      "artist": "Servizi Finanziari",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Longo S R L ",
      "url": "./commercials/it-IT/forniture-e-attrezzature-per-le-attivit-commerciali/longo-s-r-l-/1673461446563/commercial.mp3",
      "artist": "Forniture E Attrezzature Per Le Attivit Commerciali",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "De Angelis Group",
      "url": "./commercials/it-IT/sicurezza-informatica-e-di-rete/de-angelis-group/1673463951721/commercial.mp3",
      "artist": "Sicurezza Informatica E Di Rete",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Battaglia Giordano E De Luca S R L ",
      "url": "./commercials/it-IT/gestione-dell-istruzione/battaglia-giordano-e-de-luca-s-r-l-/1673464616662/commercial.mp3",
      "artist": "Gestione Dell Istruzione",
      "cover_art_url": "assets/img/krang/krang-radio-025.jpg"
    },
    {
      "name": "Sorrentino Spa",
      "url": "./commercials/it-IT/allevamento/sorrentino-spa/1673461619533/commercial.mp3",
      "artist": "Allevamento",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Carbon S R L ",
      "url": "./commercials/it-IT/costruzione-ferroviaria/carbon-s-r-l-/1673464496735/commercial.mp3",
      "artist": "Costruzione Ferroviaria",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Leone Group",
      "url": "./commercials/it-IT/istruzione-primaria-e-secondaria/leone-group/1673461161932/commercial.mp3",
      "artist": "Istruzione Primaria E Secondaria",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Barone Marino E Marian S R L ",
      "url": "./commercials/it-IT/arte-e-cultura/barone-marino-e-marian-s-r-l-/1673463200776/commercial.mp3",
      "artist": "Arte E Cultura",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Serr Longo E Ferrari S R L ",
      "url": "./commercials/it-IT/produzione-cinematografica-e-televisiva/serr-longo-e-ferrari-s-r-l-/1673462583530/commercial.mp3",
      "artist": "Produzione Cinematografica E Televisiva",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Sanna Conte Spa",
      "url": "./commercials/it-IT/industria-estrattiva/sanna-conte-spa/1673461914256/commercial.mp3",
      "artist": "Industria Estrattiva",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Valentini Group",
      "url": "./commercials/it-IT/servizi-di-telecomunicazioni/valentini-group/1673464219740/commercial.mp3",
      "artist": "Servizi Di Telecomunicazioni",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Testa Leone S R L ",
      "url": "./commercials/it-IT/musica/testa-leone-s-r-l-/1673463985224/commercial.mp3",
      "artist": "Musica",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Marian Coppola E Figli",
      "url": "./commercials/it-IT/cosmetici/marian-coppola-e-figli/1673464825143/commercial.mp3",
      "artist": "Cosmetici",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Sorrentino Costa E Martino E Figli",
      "url": "./commercials/it-IT/costruzioni/sorrentino-costa-e-martino-e-figli/1673461797252/commercial.mp3",
      "artist": "Costruzioni",
      "cover_art_url": "assets/img/krang/krang-radio-051.jpg"
    },
    {
      "name": "Martini Mazza E Rizzo Group",
      "url": "./commercials/it-IT/ristoranti/martini-mazza-e-rizzo-group/1673463484891/commercial.mp3",
      "artist": "Ristoranti",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Ricci Palumbo E Giordano Spa",
      "url": "./commercials/it-IT/servizi-sanitari/ricci-palumbo-e-giordano-spa/1673463355055/commercial.mp3",
      "artist": "Servizi Sanitari",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Gentile Serr Group",
      "url": "./commercials/it-IT/relazioni-pubbliche-e-comunicazioni/gentile-serr-group/1673461628937/commercial.mp3",
      "artist": "Relazioni Pubbliche E Comunicazioni",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Fabbri Barbieri S R L ",
      "url": "./commercials/it-IT/costruzioni-navali/fabbri-barbieri-s-r-l-/1673461759024/commercial.mp3",
      "artist": "Costruzioni Navali",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Sartori Russo Spa",
      "url": "./commercials/it-IT/pratica-medica/sartori-russo-spa/1673464347760/commercial.mp3",
      "artist": "Pratica Medica",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Ferrari Rizzo Group",
      "url": "./commercials/it-IT/servizi-ambientali/ferrari-rizzo-group/1673463106657/commercial.mp3",
      "artist": "Servizi Ambientali",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Valentini Gatti E Sanna S R L ",
      "url": "./commercials/it-IT/bancario/valentini-gatti-e-sanna-s-r-l-/1673463175710/commercial.mp3",
      "artist": "Bancario",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Pagano Spa",
      "url": "./commercials/it-IT/giochi-d-azzardo-e-casin-/pagano-spa/1673461726248/commercial.mp3",
      "artist": "Giochi D Azzardo E Casin ",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Valentini E Figli",
      "url": "./commercials/it-IT/media-online/valentini-e-figli/1673463011944/commercial.mp3",
      "artist": "Media Online",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "De Santis Vitali E Riva Spa",
      "url": "./commercials/it-IT/trasporto-e-trasporto-marittimo/de-santis-vitali-e-riva-spa/1673463654390/commercial.mp3",
      "artist": "Trasporto E Trasporto Marittimo",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Neri Montanari E Parisi E Figli",
      "url": "./commercials/it-IT/immobili-commerciali/neri-montanari-e-parisi-e-figli/1673463096935/commercial.mp3",
      "artist": "Immobili Commerciali",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Leone Orlando E Figli",
      "url": "./commercials/it-IT/media-trasmissivi/leone-orlando-e-figli/1673461081358/commercial.mp3",
      "artist": "Media Trasmissivi",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Barbieri Rizzo E Neri S R L ",
      "url": "./commercials/it-IT/prodotti-per-consumatori/barbieri-rizzo-e-neri-s-r-l-/1673463182735/commercial.mp3",
      "artist": "Prodotti Per Consumatori",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Marino Ferraro Group",
      "url": "./commercials/it-IT/difesa-e-spazio/marino-ferraro-group/1673461535154/commercial.mp3",
      "artist": "Difesa E Spazio",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Esposito D Amico E Rossetti Spa",
      "url": "./commercials/it-IT/animazione/esposito-d-amico-e-rossetti-spa/1673464857348/commercial.mp3",
      "artist": "Animazione",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "De Angelis Negri Group",
      "url": "./commercials/it-IT/macchine/de-angelis-negri-group/1673463516435/commercial.mp3",
      "artist": "Macchine",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Silvestri Moretti Group",
      "url": "./commercials/it-IT/allevamento/silvestri-moretti-group/1673463667954/commercial.mp3",
      "artist": "Allevamento",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Donati D Amico E Battaglia S R L ",
      "url": "./commercials/it-IT/pratica-legale/donati-d-amico-e-battaglia-s-r-l-/1673463041271/commercial.mp3",
      "artist": "Pratica Legale",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Gallo E Figli",
      "url": "./commercials/it-IT/media-trasmissivi/gallo-e-figli/1673462208448/commercial.mp3",
      "artist": "Media Trasmissivi",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Sorrentino Ferrara E Marino E Figli",
      "url": "./commercials/it-IT/capitali-di-rischio-e-private-equity/sorrentino-ferrara-e-marino-e-figli/1673464786675/commercial.mp3",
      "artist": "Capitali Di Rischio E Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Lombardi Marino E Messina Spa",
      "url": "./commercials/it-IT/agricoltura-e-alimentazione/lombardi-marino-e-messina-spa/1673462890546/commercial.mp3",
      "artist": "Agricoltura E Alimentazione",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Orlando S R L ",
      "url": "./commercials/it-IT/salute-benessere-e-fitness/orlando-s-r-l-/1673463248956/commercial.mp3",
      "artist": "Salute Benessere E Fitness",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Silvestri De Angelis E Lombardo S R L ",
      "url": "./commercials/it-IT/ricerca-di-mercato/silvestri-de-angelis-e-lombardo-s-r-l-/1673461979555/commercial.mp3",
      "artist": "Ricerca Di Mercato",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Ross Santoro S R L ",
      "url": "./commercials/it-IT/istituzioni-religiose/ross-santoro-s-r-l-/1673462403339/commercial.mp3",
      "artist": "Istituzioni Religiose",
      "cover_art_url": "assets/img/krang/krang-radio-095.jpg"
    },
    {
      "name": "Colombo E Figli",
      "url": "./commercials/it-IT/addestramento-e-reclutamento/colombo-e-figli/1673462187544/commercial.mp3",
      "artist": "Addestramento E Reclutamento",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Damico Vitali Spa",
      "url": "./commercials/it-IT/sviluppo-di-programmi/damico-vitali-spa/1673461740796/commercial.mp3",
      "artist": "Sviluppo Di Programmi",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Sorrentino Pagano Spa",
      "url": "./commercials/it-IT/farmaceutici/sorrentino-pagano-spa/1673462813989/commercial.mp3",
      "artist": "Farmaceutici",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Palumbo Group",
      "url": "./commercials/it-IT/pubblicit-e-marketing/palumbo-group/1673463155667/commercial.mp3",
      "artist": "Pubblicit E Marketing",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Sala Rizzi E Vitale S R L ",
      "url": "./commercials/it-IT/capitali-di-rischio-e-private-equity/sala-rizzi-e-vitale-s-r-l-/1673462519254/commercial.mp3",
      "artist": "Capitali Di Rischio E Private Equity",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Palumbo Donati E Milani Spa",
      "url": "./commercials/it-IT/biblioteche/palumbo-donati-e-milani-spa/1673464145555/commercial.mp3",
      "artist": "Biblioteche",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Palumbo Mazza E Carbon Spa",
      "url": "./commercials/it-IT/servizi-ambientali/palumbo-mazza-e-carbon-spa/1673462674146/commercial.mp3",
      "artist": "Servizi Ambientali",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Villa Mancini E Montanari E Figli",
      "url": "./commercials/it-IT/produzione-dei-media/villa-mancini-e-montanari-e-figli/1673461287639/commercial.mp3",
      "artist": "Produzione Dei Media",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Ferretti Fontana E Orlando E Figli",
      "url": "./commercials/it-IT/artigianato/ferretti-fontana-e-orlando-e-figli/1673463407604/commercial.mp3",
      "artist": "Artigianato",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Silvestri E Figli",
      "url": "./commercials/it-IT/agricoltura/silvestri-e-figli/1673464697109/commercial.mp3",
      "artist": "Agricoltura",
      "cover_art_url": "assets/img/krang/krang-radio-018.jpg"
    },
    {
      "name": "Coppola Group",
      "url": "./commercials/it-IT/magazzinaggio/coppola-group/1673461069514/commercial.mp3",
      "artist": "Magazzinaggio",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Marian Farin Spa",
      "url": "./commercials/it-IT/intrattenimento/marian-farin-spa/1673463166131/commercial.mp3",
      "artist": "Intrattenimento",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Farin Group",
      "url": "./commercials/it-IT/animazione/farin-group/1673464688400/commercial.mp3",
      "artist": "Animazione",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Leone Group",
      "url": "./commercials/it-IT/turismo-e-intrattenimento/leone-group/1673463526552/commercial.mp3",
      "artist": "Turismo E Intrattenimento",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Giuliani Spa",
      "url": "./commercials/it-IT/hardware-per-computer/giuliani-spa/1673462946442/commercial.mp3",
      "artist": "Hardware Per Computer",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Ferri Amato E D Amico S R L ",
      "url": "./commercials/it-IT/semiconduttori/ferri-amato-e-d-amico-s-r-l-/1673461041826/commercial.mp3",
      "artist": "Semiconduttori",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Caruso Marini E Gatti E Figli",
      "url": "./commercials/it-IT/farmaceutici/caruso-marini-e-gatti-e-figli/1673462701630/commercial.mp3",
      "artist": "Farmaceutici",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Farin Mazza E Rizzi Group",
      "url": "./commercials/it-IT/servizi-per-individui-e-famiglie/farin-mazza-e-rizzi-group/1673462441668/commercial.mp3",
      "artist": "Servizi Per Individui E Famiglie",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Ferraro Spa",
      "url": "./commercials/it-IT/giurisdizione/ferraro-spa/1673464128454/commercial.mp3",
      "artist": "Giurisdizione",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Carbon Spa",
      "url": "./commercials/it-IT/organizzazioni-civiche-e-sociali/carbon-spa/1673463826061/commercial.mp3",
      "artist": "Organizzazioni Civiche E Sociali",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Moretti D Amico Spa",
      "url": "./commercials/it-IT/sicurezza-informatica-e-di-rete/moretti-d-amico-spa/1673462046898/commercial.mp3",
      "artist": "Sicurezza Informatica E Di Rete",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Moretti Morelli E Caruso Spa",
      "url": "./commercials/it-IT/beni-di-lusso-e-gioielli/moretti-morelli-e-caruso-spa/1673462692596/commercial.mp3",
      "artist": "Beni Di Lusso E Gioielli",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Santoro Pagano S R L ",
      "url": "./commercials/it-IT/gestione-degli-investimenti/santoro-pagano-s-r-l-/1673464156416/commercial.mp3",
      "artist": "Gestione Degli Investimenti",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Lombardo Giuliani E Figli",
      "url": "./commercials/it-IT/design-grafico/lombardo-giuliani-e-figli/1673463443003/commercial.mp3",
      "artist": "Design Grafico",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Montanari Gatti E Longo E Figli",
      "url": "./commercials/it-IT/impianti-e-servizi-ricreativi/montanari-gatti-e-longo-e-figli/1673464025254/commercial.mp3",
      "artist": "Impianti E Servizi Ricreativi",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Pellegrini Cattaneo E Messina Spa",
      "url": "./commercials/it-IT/servizi-per-individui-e-famiglie/pellegrini-cattaneo-e-messina-spa/1673462899267/commercial.mp3",
      "artist": "Servizi Per Individui E Famiglie",
      "cover_art_url": "assets/img/krang/krang-radio-037.jpg"
    },
    {
      "name": "Fior Silvestri E De Santis S R L ",
      "url": "./commercials/it-IT/impianti-e-servizi-ricreativi/fior-silvestri-e-de-santis-s-r-l-/1673463002252/commercial.mp3",
      "artist": "Impianti E Servizi Ricreativi",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Gallo S R L ",
      "url": "./commercials/it-IT/design-grafico/gallo-s-r-l-/1673464533618/commercial.mp3",
      "artist": "Design Grafico",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    }    
  ]
});

