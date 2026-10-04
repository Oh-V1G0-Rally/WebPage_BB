/**
 * Casa Vacanza Da Jesi - Concesio (Brescia)
 * Modulo Internazionalizzazione Multilingua: Italiano (IT), English (EN), Español (ES)
 */

const TRANSLATIONS = {
  it: {
    page_title: "Casa Vacanza Da Jesi | B&B e Alloggio a Concesio (Brescia) • Fino a 6 Ospiti • ★4.98 Airbnb",
    meta_desc: "Soggiorna a Casa Vacanza Da Jesi in Via Don Cattina, 18 a Concesio (Brescia). Fino a 6 ospiti, 1 camera matrimoniale, 1 camera con 2 letti singoli, divano letto, terrazza, Wi-Fi e parcheggio gratuito.",
    
    // Announcement
    announcement_cin: "Struttura turistica verificata • Codice Identificativo Nazionale: ",
    announcement_rating: "Valutazione Airbnb: ",
    
    // Header & Nav
    nav_dimora: "La Dimora",
    nav_ambienti: "Ambienti",
    nav_servizi: "Servizi",
    nav_dintorni: "Dintorni & Territorio",
    nav_arrivare: "Come Raggiungerci",
    nav_recensioni: "Recensioni",
    nav_contatti: "Contatti",
    btn_airbnb: "AirBnB",
    
    // Hero
    hero_badge: "Valutazione <strong>4.98 ★</strong> su Airbnb • Amato dagli Ospiti",
    hero_title: "Il tuo soggiorno ideale tra <span class=\"highlight\">Brescia</span>, laghi incantevoli e relax.",
    hero_desc: "Un appartamento luminoso, moderno e arredato a nuovo in Via Don Cattina 18 a Concesio. Ampia terrazza privata, due accoglienti camere da letto (una matrimoniale e una con due letti singoli), divano letto a due posti (fino a 6 ospiti), cucina accessoriata e la massima comodità per visitare Brescia, la Franciacorta e i laghi.",
    hero_btn_airbnb: "Prenota su AirBnB",
    hero_btn_direct: "Richiedi Disponibilità Diretta",
    hero_btn_photos: "Guarda le Foto",
    hero_pill_guests: "Fino a 6 Ospiti",
    hero_pill_beds: "1 Matrimoniale + 2 Singoli + Divano Letto",
    hero_pill_terrace: "Terrazza Panoramica",
    hero_pill_wifi: "Wi-Fi Gratuito",
    hero_pill_parking: "Parcheggio Gratuito",
    hero_floating_title: "Via Don Cattina, 18",
    hero_floating_desc: "25062 Concesio (BS) • Quartiere residenziale calmo e ben servito.",

    // About
    about_badge: "La Nostra Accoglienza",
    about_title: "Uno spazio accogliente, curato e pronto per un soggiorno fino a 6 persone",
    about_p1: "Benvenuti a <strong>Casa Vacanza Da Jesi</strong>! Situata a Concesio in Via Don Cattina 18, la nostra abitazione offre una soluzione comoda, moderna e silenziosa, a pochissimi minuti dal cuore di Brescia e strategicamente posizionata per raggiungere la Franciacorta, il Lago d'Iseo e il Lago di Garda.",
    about_p2: "La struttura dispone di <strong>una camera con letto matrimoniale</strong>, una <strong>seconda camera con due comodi letti singoli</strong> e di un <strong>divano letto per 2 persone</strong> nell'ampio soggiorno, garantendo così fino a <strong>6 comodi posti letto</strong>. A disposizione degli ospiti troverai una cucina completa, arredi nuovi e una splendida <strong>terrazzina privata</strong> per mangiare o rilassarsi all'aperto.",
    stat_guests: "Ospiti Max",
    stat_rooms: "Camere + Divano",
    stat_rating: "Rating Airbnb",
    stat_relax: "Relax",
    about_btn_explore: "Esplora gli Ambienti",
    about_btn_surroundings: "Scopri i Dintorni",

    // Gallery
    gallery_badge: "Foto degli Spazi",
    gallery_title: "Gli Ambienti della Casa",
    gallery_subtitle: "Ogni dettaglio è stato curato per garantire il massimo del comfort e della funzionalità. Clicca su ciascuna foto per ingrandirla a schermo intero.",
    filter_all: "Tutti gli Ambienti",
    filter_living: "Soggiorno & Salone",
    filter_kitchen: "Cucina",
    filter_bedrooms: "Camere da Letto",
    filter_bathroom: "Bagno",
    filter_outdoor: "Terrazza & Esterno",
    hint_swipe: "Scorri per esplorare",
    
    // Gallery Cards
    card_living_1_title: "Salone & Zona Living",
    card_living_1_desc: "Spazio living accogliente con comodo divano e Smart TV per serate di totale relax.",
    card_living_2_title: "Arredi Moderni e Spazio Aperto",
    card_living_2_desc: "Dettagli curati, pavimentazione elegante e atmosfera calda.",
    card_kitchen_1_title: "Cucina Attrezzata",
    card_kitchen_1_desc: "Piano cottura, forno, frigorifero con freezer, macchina del caffè e set completo di stoviglie.",
    card_kitchen_2_title: "Zona Pranzo & Dettagli",
    card_kitchen_2_desc: "Spazio ideale per pasti in famiglia o con amici, con accesso rapido alla terrazza.",
    card_bed_a1_title: "Camera Principale (Matrimoniale)",
    card_bed_a1_desc: "Letto matrimoniale ergonomico, materasso di alta qualità, armadio capiente e silenziosità garantita.",
    card_bed_a2_title: "Luminosità & Arredi Nuovi",
    card_bed_a2_desc: "Biancheria da letto igienizzata inclusa, prese comode per smartphone e illuminazione rilassante.",
    card_bed_a3_title: "Spazio Armadio e Comfort",
    card_bed_a3_desc: "Ampio armadio guardaroba per sistemare bagagli e abiti in totale comodità.",
    card_bed_b1_title: "Camera Secondaria (Due Letti Singoli)",
    card_bed_b1_desc: "Dotata di due comodi letti singoli, ideale per bambini, amici o colleghi in un'atmosfera quieta.",
    card_bed_b2_title: "Flessibilità & Comfort per Ospiti",
    card_bed_b2_desc: "Camera matrimoniale e seconda camera con due letti singoli separati: versatilità e privacy.",
    card_bath_1_title: "Bagno Moderno & Confortevole",
    card_bath_1_desc: "Box doccia ampio, bidet, asciugacapelli, set asciugamani morbidi e prodotti essenziali.",
    card_outdoor_1_title: "Terrazzina Panoramica Esterna",
    card_outdoor_1_desc: "Il fiore all'occhiello: goditi un aperitivo al tramonto o la colazione all'aria aperta.",
    card_outdoor_2_title: "Affaccio Silenzioso",
    card_outdoor_2_desc: "Contesto residenziale calmo, ideale per riposare dopo una giornata di escursioni o lavoro.",
    card_outdoor_3_title: "Ingresso & Facciata",
    card_outdoor_3_desc: "Palazzina tranquilla con accesso comodo e posti auto nelle immediate vicinanze.",
    card_kitchen_3_title: "Piano Cottura & Forno",
    card_kitchen_3_desc: "Tutto l'occorrente per cucinare in totale autonomia durante il tuo soggiorno.",
    card_bed_a4_title: "Finiture & Comfort Camera Principale",
    card_bed_a4_desc: "Atmosfera accogliente per un sonno riposante dopo le escursioni o la giornata lavorativa.",
    card_bed_a5_title: "Dettagli di Design",
    card_bed_a5_desc: "Arredi moderni, tonalità rilassanti e cura meticolosa di ogni particolare.",
    card_bed_b3_title: "Camera Secondaria - Letti Singoli",
    card_bed_b3_desc: "Due letti singoli accoglienti con arredi moderni e illuminazione pensati per il riposo.",
    card_bath_2_title: "Zona Lavabo & Sanitari",
    card_bath_2_desc: "Ambiente bagno igienizzato, funzionale e rifinito con gusto contemporaneo.",
    card_hall_title: "Anticamera & Disimpegno",
    card_hall_desc: "Ingresso spazioso che distribuisce in modo ottimale la zona giorno e la zona notte.",

    // Amenities
    amenities_badge: "Comfort Inclusi",
    amenities_title: "I Servizi a Tua Disposizione",
    amenities_subtitle: "Tutto ciò che serve per una vacanza spensierata o per un comodo viaggio di lavoro.",
    amenity_wifi_title: "Wi-Fi ad Alta Velocità",
    amenity_wifi_desc: "Connessione Internet veloce e stabile, ideale sia per lo streaming che per lo smart working o videochiamate.",
    amenity_parking_title: "Parcheggio Gratuito",
    amenity_parking_desc: "Comodo parcheggio gratuito disponibile in loco, per lasciare l'auto in tutta tranquillità.",
    amenity_tv_title: "Smart TV & Intrattenimento",
    amenity_tv_desc: "Televisore di ultima generazione nel soggiorno, perfetto per rilassarsi la sera.",
    amenity_kitchen_title: "Cucina Completa",
    amenity_kitchen_desc: "Piano cottura, forno, frigorifero, macchina del caffè, stoviglie, pentole e condimenti di base.",
    amenity_terrace_title: "Terrazza Esterna Privata",
    amenity_terrace_desc: "Splendida terrazzina attrezzata per godersi pranzi e cene all'aperto o un buon caffè al mattino.",
    amenity_ac_title: "Climatizzazione su Richiesta",
    amenity_ac_desc: "Possibilità di usufruire di aria condizionata nei mesi più caldi per il massimo benessere termico.",
    amenity_laundry_title: "Lavatrice & Kit Stiro",
    amenity_laundry_desc: "Lavatrice in loco, stendibiancheria, ferro e asse da stiro disponibili per soggiorni di ogni durata.",
    amenity_capacity_title: "Capienza Fino a 6 Ospiti",
    amenity_capacity_desc: "Una camera matrimoniale, una camera con due comodi letti singoli e divano letto a 2 posti in soggiorno.",

    // Surroundings
    surroundings_badge: "Esperienze & Territorio",
    surroundings_title: "Cosa Trovi nelle Vicinanze",
    surroundings_subtitle: "Da Concesio puoi raggiungere in pochi minuti meraviglie storiche, laghi incantevoli, cantine d'eccellenza e le cime alpine.",
    attraction_brescia_title: "Brescia Centro Storico",
    attraction_brescia_desc: "Città d'arte e cultura: visita il Tempio Capitolino e il Parco Archeologico Romano (Sito UNESCO), il complesso di Santa Giulia, il Castello del Falcone e Piazza della Loggia.",
    attraction_iseo_title: "Lago d'Iseo & Franciacorta",
    attraction_iseo_desc: "Raggiungi le celebri colline della Franciacorta per tour e degustazioni nelle cantine storiche. Scopri il fascino romantico del Lago d'Iseo e prendi il battello per Monte Isola.",
    attraction_garda_title: "Lago di Garda",
    attraction_garda_desc: "Il lago più grande d'Italia: visita Salò, Desenzano del Garda, Sirmione con il Castello Scaligero e le Terme di Catullo, e Gardone Riviera con il Vittoriale degli Italiani.",
    attraction_maniva_title: "Passo Maniva & Montagna",
    attraction_maniva_desc: "In inverno stazione sciistica (Maniva Ski) per sci alpino, snowboard e ciaspolate. In estate paradiso per trekking in quota, rifugi alpini e percorsi per mountain bike.",
    attraction_paolo_title: "Museo Collezione Paolo VI",
    attraction_paolo_desc: "Concesio è la città natale di Papa Paolo VI (G.B. Montini). Il museo ospita una prestigiosa galleria d'arte contemporanea con opere di Matisse, Chagall, Fontana e Morandi.",
    attraction_mella_title: "Pista Ciclabile del Fiume Mella",
    attraction_mella_desc: "Suggestivo percorso ciclopedonale immerso nel verde che costeggia il fiume Mella, raggiungibile a due passi da casa. Ideale per passeggiate rilassanti, jogging mattutino o escursioni in bici verso Brescia o la Val Trompia.",
    dist_brescia: "10-12 Minuti",
    dist_iseo: "15-20 Minuti",
    dist_garda: "25-35 Minuti",
    dist_maniva: "35-40 Minuti",
    dist_paolo: "3 Minuti",
    dist_mella: "1-2 Minuti (A piedi)",
    tag_unesco: "Sito UNESCO",
    tag_castle: "Castello",
    tag_museums: "Musei",
    tag_wine: "Vini Franciacorta",
    tag_monte_isola: "Monte Isola",
    tag_boat: "Tour in Battello",
    tag_sirmione: "Sirmione",
    tag_salo: "Salò",
    tag_thermal: "Spiagge & Terme",
    tag_ski: "Sci & Neve",
    tag_trekking: "Trekking Alpino",
    tag_food: "Rifugi Gastronomici",
    tag_art: "Arte Contemporanea",
    tag_history: "Storia Locale",
    tag_culture: "Cultura",
    tag_bike: "Pista Ciclabile",
    tag_nature: "Natura & Relax",
    tag_walk: "Passeggiate",

    // Gallery Badges
    card_badge_salone: "Soggiorno",
    card_badge_cucina: "Cucina",
    card_badge_principale: "Camera Principale",
    card_badge_secondaria: "Camera Singoli",
    card_badge_bagno: "Bagno",
    card_badge_terrazza: "Terrazza Privata",
    card_badge_balcone: "Balcone & Vista",
    card_badge_esterno: "Esterno Casa",
    card_badge_ingresso: "Ingresso",

    // Transport
    transport_badge: "Mobilità & Posizione",
    transport_title: "Come Raggiungerci",
    transport_subtitle: "Concesio (frazione Costorio) gode di collegamenti veloci con il centro di Brescia, le stazioni ferroviarie e i principali aeroporti del Nord Italia.",
    transport_box_title: "Connessioni & Mezzi di Trasporto",
    transport_box_desc: "Che tu viaggi con la tua auto o con i mezzi pubblici, arrivare a Casa Jesi è semplice e senza stress.",
    transport_bus_title: "Autobus di Linea",
    transport_bus_desc: "Fermata a pochi metri a piedi da casa con collegamenti regolari e frequenti per Brescia centro e la Val Trompia.",
    transport_metro_title: "Metropolitana di Brescia (MetroBS)",
    transport_metro_desc: "Capolinea 'Prealpino' a soli 5 minuti in auto o bus, con ampio parcheggio scambiatore. Ti porta in Piazza Vittoria e alla Stazione FS in meno di 10 minuti.",
    transport_train_title: "Stazione Ferroviaria di Brescia",
    transport_train_desc: "A circa 15 minuti. Hub Alta Velocità Frecciarossa e Italo (Milano a 35 min, Verona a 30 min, Venezia a 1h30).",
    transport_air_title: "Aeroporti Vicini",
    transport_air_desc: "Milano Bergamo Orio al Serio (BGY) a 45 min, Verona Villafranca (VRN) a 45 min, Milano Linate (LIN) a 60 min.",
    btn_google_maps: "Apri su Google Maps",
    btn_apple_maps: "Apri su Apple Maps",

    // Reviews
    reviews_caption: "Valutazione basata sulle recensioni verificate su AirBnB",
    reviews_btn_airbnb: "Leggi tutte su AirBnB",
    hint_swipe_reviews: "Scorri per leggere le recensioni",
    review_1_text: "“La casa è ancora più bella che nelle fotografie! Spaziosa, pulitissima e luminosa. La terrazza è stata perfetta per cenare all'aperto la sera con una brezza piacevole. Posizione strategica per andare sia a Brescia che sul Lago d'Iseo!”",
    review_1_author: "Marco e Chiara",
    review_1_stay: "Ospiti verificate • Soggiorno in coppia",
    review_2_text: "“Host gentilissimo e sempre reperibile per qualsiasi informazione. Cucina con tutto il necessario e letti comodissimi. Avere il parcheggio privato facile e le meraviglie dei laghi e della città a breve distanza ha reso il soggiorno speciale per tutta la famiglia.”",
    review_2_author: "Elena B.",
    review_2_stay: "Ospite verificata • Vacanza in famiglia",
    review_3_text: "“Ottimo punto d'appoggio per lavoro e turismo. Wi-Fi impeccabile per lavorare da remoto e metro Prealpino comodissima per raggiungere il centro di Brescia senza pensieri di traffico o ZTL. Consigliatissimo!”",
    review_3_author: "Davide G.",
    review_3_stay: "Ospite verificato • Viaggio di lavoro",

    // FAQ
    faq_badge: "Domande Frequenti",
    faq_title: "Hai Domande sul Soggiorno?",
    faq_subtitle: "Ecco le risposte ai dubbi più comuni dei nostri ospiti.",
    faq_q1: "Quali sono gli orari di Check-in e Check-out?",
    faq_a1: "Il check-in è concordabile in base alle tue esigenze (generalmente a partire dalle ore 15:00), con massima disponibilità per accogliervi al vostro arrivo. Il check-out è previsto entro le ore 10:00 o 11:00 per consentire l'accurata pulizia e sanificazione degli ambienti.",
    faq_q2: "Il parcheggio è compreso e disponibile?",
    faq_a2: "Sì! C'è ampia disponibilità di parcheggio comodo e gratuito proprio adiacente alla struttura, senza alcuna difficoltà nel trovare posto a qualunque ora del giorno o della notte.",
    faq_q3: "La biancheria da letto e da bagno è fornita?",
    faq_a3: "Certamente. Forniamo lenzuola pulite, piumoni/coperte, set completo di asciugamani per ogni ospite, asciugacapelli e sapone per garantire un soggiorno piacevole sin dal primo istante.",
    faq_q4: "È presente l'aria condizionata?",
    faq_a4: "Sì, è disponibile l'aria condizionata su richiesta a pagamento per i periodi estivi.",
    faq_q5: "Ci sono negozi e servizi raggiungibili a piedi?",
    faq_a5: "Sì, nelle immediate vicinanze troverai supermercati, panetterie, farmacia, tabaccheria, bar, ristoranti, pizzerie e la fermata dei bus di linea.",

    // Booking & Contact
    booking_banner_title: "Pronto a Prenotare il Tuo Soggiorno?",
    booking_banner_desc: "Puoi prenotare in tempo reale con tutte le garanzie sul nostro annuncio ufficiale AirBnB con recensioni a 5 stelle, oppure scriverci direttamente per richiedere preventivi speciali, date personalizzate o soggiorni prolungati.",
    booking_banner_btn: "Prenota Ora su Airbnb",
    booking_banner_guarantee: "Conferma immediata e pagamenti protetti",
    contact_direct_badge: "Contatto Rapido",
    contact_direct_title: "Siamo a Tua Completa Disposizione",
    contact_direct_desc: "Per qualsiasi domanda prima del viaggio o esigenze particolari di orario, scrivici direttamente via email o sui nostri canali social.",
    contact_email_title: "Email Diretta",
    contact_address_title: "Indirizzo Alloggio",
    contact_insta_title: "Seguici su Instagram",
    contact_cin_title: "Codice CIN / Registrazione Ufficiale",
    form_title: "Richiedi Informazioni o un Preventivo",
    form_desc: "Compila il form sottostante per verificare date disponibili o chiedere informazioni sull'alloggio.",
    form_name_label: "Nome e Cognome *",
    form_name_placeholder: "Es. Mario Rossi",
    form_email_label: "Indirizzo Email *",
    form_email_placeholder: "nome@email.it",
    form_phone_label: "Telefono / WhatsApp",
    form_phone_placeholder: "+39 333 1234567",
    form_guests_label: "Numero Ospiti",
    form_guest_1: "1 Ospite",
    form_guest_2: "2 Ospiti",
    form_guest_3: "3 Ospiti",
    form_guest_4: "4 Ospiti",
    form_guest_5: "5 Ospiti",
    form_guests_opt_max: "6 Ospiti (Massimo alloggio)",
    form_checkin_label: "Data Check-in",
    form_checkout_label: "Data Check-out",
    form_message_label: "Messaggio o Note Particolari",
    form_message_placeholder: "Segnala eventuali richieste: orari di arrivo, animali, lettino neonato, ecc...",
    form_privacy_text: "Ho letto e accetto l'<a href=\"privacy-cookie-policy.html\" target=\"_blank\">informativa sulla privacy (GDPR)</a>. I dati inviati saranno utilizzati esclusivamente per dare risposta alla presente richiesta.",
    form_submit_btn: "Invia Richiesta all'Host",

    // Cookie Banner
    cookie_title: "La tua privacy è importante",
    cookie_desc: "Utilizziamo cookie tecnici essenziali per garantire il funzionamento del sito. Con il tuo consenso, utilizziamo anche cookie statistici e mappe di terze parti per migliorare l'esperienza di navigazione. Leggi la nostra <a href=\"privacy-cookie-policy.html\">Cookie & Privacy Policy</a>.",
    cookie_accept_all: "Accetta Tutti",
    cookie_reject: "Solo Necessari",
    cookie_customize: "Personalizza",

    // Mobile Language Selector
    mobile_lang_label: "Lingua:",

    // Footer
    footer_desc: "Il rifugio perfetto a Concesio (Brescia) per scoprire le bellezze artistiche, i laghi lombardi e la natura della Val Trompia nel massimo del relax.",
    footer_legal: "Struttura adibita a Locazione Turistica ai sensi delle normative nazionali e regionali vigenti.",
    footer_nav_title: "Navigazione",
    footer_exp_title: "Esperienze Vicine",
    footer_contact_title: "Contatti & Prenotazioni",
    footer_copy: "© 2026 Casa Vacanza Da Jesi • Concesio (Brescia) • Tutti i diritti riservati.",
    footer_link_home: "Inizio Pagina",
    footer_link_house: "La Dimora",
    footer_link_photos: "Tutte le Foto",
    footer_link_amenities: "Servizi Inclusi",
    footer_link_surroundings: "Cosa Vedere nei Dintorni",
    footer_link_reach: "Come Raggiungerci",
    footer_link_privacy: "Informativa Privacy (GDPR)",
    footer_link_cookies: "Gestisci Preferenze Cookie",
    footer_link_consent: "Consenso Cookie",
    floating_btn_text: "Prenota su Airbnb (4.98★)"
  },

  en: {
    page_title: "Casa Vacanza Da Jesi | B&B & Holiday Home in Concesio (Brescia) • Up to 6 Guests • ★4.98 Airbnb",
    meta_desc: "Stay at Casa Vacanza Da Jesi on Via Don Cattina, 18 in Concesio (Brescia). Up to 6 guests, 1 double bedroom, 1 twin bedroom, sofa bed, terrace, Wi-Fi and free parking.",
    
    // Announcement
    announcement_cin: "Verified tourist accommodation • National Identification Code: ",
    announcement_rating: "Airbnb Rating: ",
    
    // Header & Nav
    nav_dimora: "The House",
    nav_ambienti: "Rooms & Spaces",
    nav_servizi: "Amenities",
    nav_dintorni: "Surroundings",
    nav_arrivare: "How to Reach Us",
    nav_recensioni: "Reviews",
    nav_contatti: "Contact",
    btn_airbnb: "AirBnB",
    
    // Hero
    hero_badge: "Rating <strong>4.98 ★</strong> on Airbnb • Guest Favorite",
    hero_title: "Your ideal getaway near <span class=\"highlight\">Brescia</span>, enchanting lakes & relax.",
    hero_desc: "A bright, modern, newly furnished apartment on Via Don Cattina 18 in Concesio. Large private terrace, two cozy bedrooms (one double and one with two twin beds), double sofa bed (up to 6 guests), fully equipped kitchen and the utmost convenience to explore Brescia, Franciacorta and the lakes.",
    hero_btn_airbnb: "Book on AirBnB",
    hero_btn_direct: "Request Direct Availability",
    hero_btn_photos: "View Photos",
    hero_pill_guests: "Up to 6 Guests",
    hero_pill_beds: "1 Double + 2 Single Beds + Sofa Bed",
    hero_pill_terrace: "Panoramic Terrace",
    hero_pill_wifi: "Free Wi-Fi",
    hero_pill_parking: "Free Parking",
    hero_floating_title: "Via Don Cattina, 18",
    hero_floating_desc: "25062 Concesio (BS) • Quiet, well-served residential area.",

    // About
    about_badge: "Our Hospitality",
    about_title: "A welcoming, refined space ready for a stay of up to 6 people",
    about_p1: "Welcome to <strong>Casa Vacanza Da Jesi</strong>! Located in Concesio on Via Don Cattina 18, our home offers a comfortable, modern, and peaceful stay just minutes from the heart of Brescia and strategically positioned to explore Franciacorta, Lake Iseo, and Lake Garda.",
    about_p2: "The apartment features <strong>one bedroom with a double bed</strong>, a <strong>second bedroom with two comfortable twin beds</strong>, and a <strong>double sofa bed</strong> in the spacious living room, accommodating up to <strong>6 guests</strong>. You'll also enjoy a fully equipped kitchen, brand-new furnishings, and a lovely <strong>private terrace</strong> for outdoor dining and relaxation.",
    stat_guests: "Max Guests",
    stat_rooms: "Bedrooms + Sofa",
    stat_rating: "Airbnb Rating",
    stat_relax: "Relaxation",
    about_btn_explore: "Explore the Spaces",
    about_btn_surroundings: "Discover Surroundings",

    // Gallery
    gallery_badge: "Photos of Spaces",
    gallery_title: "The Rooms of the House",
    gallery_subtitle: "Every detail has been curated to ensure maximum comfort and functionality. Click on each photo to enlarge it full screen.",
    filter_all: "All Spaces",
    filter_living: "Living Room",
    filter_kitchen: "Kitchen",
    filter_bedrooms: "Bedrooms",
    filter_bathroom: "Bathroom",
    filter_outdoor: "Terrace & Outdoor",
    hint_swipe: "Swipe to explore",
    
    // Gallery Cards
    card_living_1_title: "Living Room & Lounge Area",
    card_living_1_desc: "Inviting living space with comfortable sofa and Smart TV for relaxing evenings.",
    card_living_2_title: "Modern Furniture & Open Space",
    card_living_2_desc: "Refined details, elegant flooring, and a warm atmosphere.",
    card_kitchen_1_title: "Fully Equipped Kitchen",
    card_kitchen_1_desc: "Stovetop, oven, fridge with freezer, coffee maker, and complete dishware set.",
    card_kitchen_2_title: "Dining Area & Details",
    card_kitchen_2_desc: "Ideal space for family meals or dining with friends, with quick terrace access.",
    card_bed_a1_title: "Main Bedroom (Double Bed)",
    card_bed_a1_desc: "Ergonomic double bed, high-quality mattress, spacious wardrobe, and guaranteed quietness.",
    card_bed_a2_title: "Brightness & Brand New Furniture",
    card_bed_a2_desc: "Sanitized bed linens included, handy phone charging sockets, and soothing lighting.",
    card_bed_a3_title: "Wardrobe Space & Comfort",
    card_bed_a3_desc: "Spacious wardrobe to store luggage and clothes with total ease.",
    card_bed_b1_title: "Second Bedroom (Two Twin Beds)",
    card_bed_b1_desc: "Equipped with two comfortable twin beds, ideal for kids, friends, or colleagues in a peaceful setting.",
    card_bed_b2_title: "Flexibility & Comfort for Guests",
    card_bed_b2_desc: "Double bedroom plus second bedroom with two separate twin beds: maximum versatility and privacy.",
    card_bath_1_title: "Modern & Comfortable Bathroom",
    card_bath_1_desc: "Spacious shower stall, bidet, hairdryer, fluffy towel set, and essential toiletries.",
    card_outdoor_1_title: "Panoramic Outdoor Terrace",
    card_outdoor_1_desc: "The highlight of the house: enjoy sunset drinks or breakfast in the open air.",
    card_outdoor_2_title: "Peaceful View",
    card_outdoor_2_desc: "Quiet residential setting, ideal for recharging after a day of sightseeing or work.",
    card_outdoor_3_title: "Entrance & Facade",
    card_outdoor_3_desc: "Quiet building with easy access and free parking in the immediate vicinity.",
    card_kitchen_3_title: "Stovetop & Oven",
    card_kitchen_3_desc: "Everything you need to cook independently during your stay.",
    card_bed_a4_title: "Finishes & Main Bedroom Comfort",
    card_bed_a4_desc: "Cozy atmosphere for a restful sleep after outdoor excursions or a work day.",
    card_bed_a5_title: "Design Details",
    card_bed_a5_desc: "Contemporary furniture, relaxing color tones, and meticulous care in every detail.",
    card_bed_b3_title: "Second Bedroom - Twin Beds",
    card_bed_b3_desc: "Two cozy twin beds with modern furnishings and lighting designed for good rest.",
    card_bath_2_title: "Sink Area & Fixtures",
    card_bath_2_desc: "Sanitized bathroom environment, functional and finished with contemporary taste.",
    card_hall_title: "Anteroom & Hallway",
    card_hall_desc: "Spacious entrance hall providing an optimal separation between living and sleeping areas.",

    // Amenities
    amenities_badge: "Included Amenities",
    amenities_title: "Amenities at Your Disposal",
    amenities_subtitle: "Everything you need for a carefree holiday or a comfortable business trip.",
    amenity_wifi_title: "High-Speed Wi-Fi",
    amenity_wifi_desc: "Fast and stable Internet connection, perfect for streaming, remote working, or video calls.",
    amenity_parking_title: "Free Parking",
    amenity_parking_desc: "Convenient free parking available right on site, to leave your car in peace.",
    amenity_tv_title: "Smart TV & Entertainment",
    amenity_tv_desc: "Latest-generation television in the living room, ideal for relaxing at night.",
    amenity_kitchen_title: "Complete Kitchen",
    amenity_kitchen_desc: "Stovetop, oven, refrigerator, coffee machine, cookware, pots, and basic condiments.",
    amenity_terrace_title: "Private Outdoor Terrace",
    amenity_terrace_desc: "Splendid furnished terrace to enjoy outdoor meals or a morning coffee.",
    amenity_ac_title: "Air Conditioning on Request",
    amenity_ac_desc: "Option to request air conditioning during warmer months for optimal climate comfort.",
    amenity_laundry_title: "Washing Machine & Ironing Kit",
    amenity_laundry_desc: "On-site washing machine, drying rack, iron, and ironing board for stays of any duration.",
    amenity_capacity_title: "Capacity Up to 6 Guests",
    amenity_capacity_desc: "One double bedroom, one bedroom with two twin beds, and a double sofa bed in the living room.",

    // Surroundings
    surroundings_badge: "Experiences & Territory",
    surroundings_title: "What's Nearby",
    surroundings_subtitle: "From Concesio you can quickly reach historical sights, charming lakes, prestigious wineries, and alpine peaks.",
    attraction_brescia_title: "Brescia Historic Center",
    attraction_brescia_desc: "City of art and culture: visit the Capitoline Temple and Roman Archaeological Park (UNESCO site), Santa Giulia museum complex, the Castle of Brescia, and Piazza della Loggia.",
    attraction_iseo_title: "Lake Iseo & Franciacorta",
    attraction_iseo_desc: "Reach the renowned hills of Franciacorta for winery tours and sparkling DOCG tastings. Discover the romantic charm of Lake Iseo and take the ferry to Monte Isola.",
    attraction_garda_title: "Lake Garda",
    attraction_garda_desc: "Italy's largest lake nearby: visit Salò, Desenzano del Garda, Sirmione with the Scaligero Castle and Catullo thermal baths, plus Gardone Riviera and the Vittoriale.",
    attraction_maniva_title: "Passo Maniva & Mountains",
    attraction_maniva_desc: "In winter a popular ski resort (Maniva Ski) for alpine skiing, snowboarding, and snowshoeing. In summer, an alpine haven for hiking, mountain lodges, and biking.",
    attraction_paolo_title: "Paul VI Collection Museum",
    attraction_paolo_desc: "Concesio is the birthplace of Pope Paul VI (G.B. Montini). The museum houses an acclaimed contemporary art gallery with masterpieces by Matisse, Chagall, Fontana, and Morandi.",
    attraction_mella_title: "Mella River Cycle Path",
    attraction_mella_desc: "Scenic pedestrian and cycling trail immersed in nature along the Mella river, just steps from the house. Perfect for leisurely walks, morning jogging, or bike rides towards Brescia or Val Trompia.",
    dist_brescia: "10-12 Minutes",
    dist_iseo: "15-20 Minutes",
    dist_garda: "25-35 Minutes",
    dist_maniva: "35-40 Minutes",
    dist_paolo: "3 Minutes",
    dist_mella: "1-2 Minutes (On foot)",
    tag_unesco: "UNESCO Site",
    tag_castle: "Castle",
    tag_museums: "Museums",
    tag_wine: "Franciacorta Wine",
    tag_monte_isola: "Monte Isola",
    tag_boat: "Boat Tour",
    tag_sirmione: "Sirmione",
    tag_salo: "Salò",
    tag_thermal: "Beaches & Spas",
    tag_ski: "Ski & Snow",
    tag_trekking: "Alpine Trekking",
    tag_food: "Mountain Lodges",
    tag_art: "Contemporary Art",
    tag_history: "Local History",
    tag_culture: "Culture",
    tag_bike: "Cycle Path",
    tag_nature: "Nature & Relax",
    tag_walk: "Walking & Jogging",

    // Gallery Badges
    card_badge_salone: "Living Room",
    card_badge_cucina: "Kitchen",
    card_badge_principale: "Master Bedroom",
    card_badge_secondaria: "Twin Bedroom",
    card_badge_bagno: "Bathroom",
    card_badge_terrazza: "Private Terrace",
    card_badge_balcone: "Balcony & View",
    card_badge_esterno: "House Exterior",
    card_badge_ingresso: "Entrance",

    // Transport
    transport_badge: "Mobility & Location",
    transport_title: "How to Reach Us",
    transport_subtitle: "Concesio (Costorio area) enjoys fast connections to Brescia city center, railway hubs, and major Northern Italy airports.",
    transport_box_title: "Connections & Transport Options",
    transport_box_desc: "Whether traveling by car or public transit, getting to Casa Jesi is simple and hassle-free.",
    transport_bus_title: "Public Bus Lines",
    transport_bus_desc: "Bus stop just a few meters on foot from the house, with frequent connections to Brescia center and Val Trompia.",
    transport_metro_title: "Brescia Metro (MetroBS)",
    transport_metro_desc: "'Prealpino' terminal station only 5 minutes by car or bus with large park-and-ride lot. Takes you to Piazza Vittoria and Central Station in under 10 minutes.",
    transport_train_title: "Brescia Central Train Station",
    transport_train_desc: "About 15 minutes away. High-speed Frecciarossa and Italo hub (Milan 35 min, Verona 30 min, Venice 1h30).",
    transport_air_title: "Nearby Airports",
    transport_air_desc: "Milan Bergamo Orio al Serio (BGY) 45 min, Verona Villafranca (VRN) 45 min, Milan Linate (LIN) 60 min.",
    btn_google_maps: "Open in Google Maps",
    btn_apple_maps: "Open in Apple Maps",

    // Reviews
    reviews_caption: "Rating based on verified reviews on AirBnB",
    reviews_btn_airbnb: "Read all on AirBnB",
    hint_swipe_reviews: "Swipe to read reviews",
    review_1_text: "“The apartment is even nicer than in the pictures! Spacious, sparkling clean, and bright. The terrace was perfect for outdoor dining in the evening with a lovely breeze. Strategic location to visit both Brescia and Lake Iseo!”",
    review_1_author: "Marco & Chiara",
    review_1_stay: "Verified guests • Couple stay",
    review_2_text: "“Super kind host, always available for any question. Kitchen with everything needed and very comfortable beds. Having easy private parking and the lakes and city so close made our family vacation truly special.”",
    review_2_author: "Elena B.",
    review_2_stay: "Verified guest • Family vacation",
    review_3_text: "“Excellent base for both work and tourism. Impeccable Wi-Fi for remote work and the Prealpino metro is super convenient to reach downtown Brescia without worrying about traffic or restricted zones. Highly recommended!”",
    review_3_author: "Davide G.",
    review_3_stay: "Verified guest • Business trip",

    // FAQ
    faq_badge: "Frequently Asked Questions",
    faq_title: "Questions About Your Stay?",
    faq_subtitle: "Here are answers to the most common questions from our guests.",
    faq_q1: "What are the Check-in and Check-out times?",
    faq_a1: "Check-in can be arranged according to your schedule (typically from 3:00 PM onwards), with full flexibility to welcome you upon arrival. Check-out is by 10:00 or 11:00 AM to allow thorough cleaning and sanitation.",
    faq_q2: "Is parking included and readily available?",
    faq_a2: "Yes! There is ample, easy, and free parking space available right next to the property, with no difficulty finding a spot at any hour of the day or night.",
    faq_q3: "Are bed linens and bath towels provided?",
    faq_a3: "Certainly. We provide fresh sheets, duvets/blankets, full towel sets for each guest, hairdryer, and soap to ensure a comfortable stay right from the start.",
    faq_q4: "Is air conditioning available?",
    faq_a4: "Yes, air conditioning is available upon request for a small fee during the summer months.",
    faq_q5: "Are there shops and services within walking distance?",
    faq_a5: "Yes, in the immediate vicinity you will find supermarkets, bakeries, pharmacy, newsstand, bars, restaurants, pizzerias, and local bus stops.",

    // Booking & Contact
    booking_banner_title: "Ready to Book Your Stay?",
    booking_banner_desc: "You can book in real-time with full buyer guarantees on our official 5-star AirBnB listing, or write directly to us for special quotes, customized dates, or extended stays.",
    booking_banner_btn: "Book Now on Airbnb",
    booking_banner_guarantee: "Instant confirmation & protected payments",
    contact_direct_badge: "Quick Contact",
    contact_direct_title: "We Are at Your Full Disposal",
    contact_direct_desc: "For any questions prior to your trip or special timing requests, write directly to us via email or social media.",
    contact_email_title: "Direct Email",
    contact_address_title: "Apartment Address",
    contact_insta_title: "Follow Us on Instagram",
    contact_cin_title: "National Identification Code (CIN)",
    form_title: "Request Information or a Quote",
    form_desc: "Fill out the form below to check available dates or ask any questions about the accommodation.",
    form_name_label: "Full Name *",
    form_name_placeholder: "e.g. John Doe",
    form_email_label: "Email Address *",
    form_email_placeholder: "name@email.com",
    form_phone_label: "Phone / WhatsApp",
    form_phone_placeholder: "+39 333 1234567",
    form_guests_label: "Number of Guests",
    form_guest_1: "1 Guest",
    form_guest_2: "2 Guests",
    form_guest_3: "3 Guests",
    form_guest_4: "4 Guests",
    form_guest_5: "5 Guests",
    form_guest_6: "6 Guests (Max capacity)",
    form_guests_opt_max: "6 Guests (Max capacity)",
    form_checkin_label: "Check-in Date",
    form_checkout_label: "Check-out Date",
    form_message_label: "Message or Special Requests",
    form_message_placeholder: "Let us know any requests: arrival time, pets, baby cot, etc...",
    form_privacy_text: "I have read and accept the <a href=\"privacy-cookie-policy.html\" target=\"_blank\">privacy policy (GDPR)</a>. The submitted data will be used solely to respond to this inquiry.",
    form_submit_btn: "Send Request to Host",

    // Cookie Banner
    cookie_title: "Your privacy is important",
    cookie_desc: "We use essential technical cookies to ensure the website functions properly. With your consent, we also use analytics cookies and third-party maps to enhance your browsing experience. Read our <a href=\"privacy-cookie-policy.html\">Cookie & Privacy Policy</a>.",
    cookie_accept_all: "Accept All",
    cookie_reject: "Only Necessary",
    cookie_customize: "Customize",

    // Mobile Language Selector
    mobile_lang_label: "Language:",

    // Footer
    footer_desc: "The perfect haven in Concesio (Brescia) to discover historical gems, Lombard lakes, and the nature of Val Trompia in total relaxation.",
    footer_legal: "Tourist rental accommodation compliant with current Italian national and regional regulations.",
    footer_nav_title: "Navigation",
    footer_exp_title: "Nearby Highlights",
    footer_contact_title: "Contact & Bookings",
    footer_copy: "© 2026 Casa Vacanza Da Jesi • Concesio (Brescia) • All rights reserved.",
    footer_link_home: "Top of Page",
    footer_link_house: "The House",
    footer_link_photos: "All Photos",
    footer_link_amenities: "Included Amenities",
    footer_link_surroundings: "What to See Nearby",
    footer_link_reach: "How to Reach Us",
    footer_link_privacy: "Privacy Policy (GDPR)",
    footer_link_cookies: "Manage Cookie Preferences",
    footer_link_consent: "Cookie Consent",
    floating_btn_text: "Book on Airbnb (4.98★)"
  },

  es: {
    page_title: "Casa Vacanza Da Jesi | Alojamiento y B&B en Concesio (Brescia) • Hasta 6 Huéspedes • ★4.98 Airbnb",
    meta_desc: "Alójate en Casa Vacanza Da Jesi en Via Don Cattina, 18 en Concesio (Brescia). Hasta 6 huéspedes, 1 dormitorio de matrimonio, 1 dormitorio con 2 camas individuales, sofá cama, terraza, Wi-Fi y aparcamiento gratuito.",
    
    // Announcement
    announcement_cin: "Alojamiento turístico verificado • Código Identificativo Nacional: ",
    announcement_rating: "Puntuación Airbnb: ",
    
    // Header & Nav
    nav_dimora: "La Casa",
    nav_ambienti: "Estancias",
    nav_servizi: "Servicios",
    nav_dintorni: "Alrededores",
    nav_arrivare: "Cómo Llegar",
    nav_recensioni: "Reseñas",
    nav_contatti: "Contacto",
    btn_airbnb: "AirBnB",
    
    // Hero
    hero_badge: "Puntuación <strong>4.98 ★</strong> en Airbnb • Favorito entre Huéspedes",
    hero_title: "Tu estancia ideal entre <span class=\"highlight\">Brescia</span>, lagos encantadores y relax.",
    hero_desc: "Un apartamento luminoso, moderno y recién amueblado en Via Don Cattina 18 en Concesio. Amplia terraza privada, dos acogedores dormitorios (uno de matrimonio y otro con dos camas individuales), sofá cama doble (hasta 6 huéspedes), cocina totalmente equipada y la máxima comodidad para visitar Brescia, Franciacorta y los lagos.",
    hero_btn_airbnb: "Reservar en AirBnB",
    hero_btn_direct: "Solicitar Disponibilidad Directa",
    hero_btn_photos: "Ver Fotos",
    hero_pill_guests: "Hasta 6 Huéspedes",
    hero_pill_beds: "1 Cama Doble + 2 Individuales + Sofá Cama",
    hero_pill_terrace: "Terraza Panorámica",
    hero_pill_wifi: "Wi-Fi Gratuito",
    hero_pill_parking: "Aparcamiento Gratuito",
    hero_floating_title: "Via Don Cattina, 18",
    hero_floating_desc: "25062 Concesio (BS) • Barrio residencial tranquilo y con todos los servicios.",

    // About
    about_badge: "Nuestra Hospitalidad",
    about_title: "Un espacio acogedor, cuidado y listo para estancias de hasta 6 personas",
    about_p1: "¡Bienvenidos a <strong>Casa Vacanza Da Jesi</strong>! Situada en Concesio en Via Don Cattina 18, nuestra vivienda ofrece una solución cómoda, moderna y silenciosa, a pocos minutos del centro de Brescia y en una ubicación estratégica para visitar Franciacorta, el Lago de Iseo y el Lago de Garda.",
    about_p2: "El alojamiento cuenta con <strong>un dormitorio con cama de matrimonio</strong>, un <strong>segundo dormitorio con dos cómodas camas individuales</strong> y un <strong>sofá cama para 2 personas</strong> en el amplio salón, garantizando hasta <strong>6 cómodas plazas</strong>. Los huéspedes disponen de cocina completa, mobiliario nuevo y una maravillosa <strong>terraza privada</strong> para comer o relajarse al aire libre.",
    stat_guests: "Huéspedes Máx",
    stat_rooms: "Habitaciones + Sofá",
    stat_rating: "Puntuación Airbnb",
    stat_relax: "Relax",
    about_btn_explore: "Explorar los Espacios",
    about_btn_surroundings: "Descubrir Alrededores",

    // Gallery
    gallery_badge: "Fotos de los Espacios",
    gallery_title: "Las Estancias de la Casa",
    gallery_subtitle: "Cada detalle ha sido cuidado para garantizar el máximo confort y funcionalidad. Haz clic en cada foto para ampliarla a pantalla completa.",
    filter_all: "Todas las Estancias",
    filter_living: "Salón & Estar",
    filter_kitchen: "Cocina",
    filter_bedrooms: "Dormitorios",
    filter_bathroom: "Baño",
    filter_outdoor: "Terraza & Exterior",
    hint_swipe: "Desliza para explorar",
    
    // Gallery Cards
    card_living_1_title: "Salón & Zona de Estar",
    card_living_1_desc: "Espacio de estar acogedor con cómodo sofá y Smart TV para noches de total descanso.",
    card_living_2_title: "Mobiliario Moderno y Espacio Abierto",
    card_living_2_desc: "Detalles cuidados, suelo elegante y un ambiente cálido.",
    card_kitchen_1_title: "Cocina Totalmente Equipada",
    card_kitchen_1_desc: "Placa, horno, frigorífico con congelador, cafetera y vajilla completa.",
    card_kitchen_2_title: "Comedor & Detalles",
    card_kitchen_2_desc: "Espacio ideal para comidas en familia o con amigos, con acceso directo a la terraza.",
    card_bed_a1_title: "Dormitorio Principal (Cama Doble)",
    card_bed_a1_desc: "Cama doble ergonómica, colchón de alta calidad, amplio armario y tranquilidad garantizada.",
    card_bed_a2_title: "Luminosidad & Muebles Nuevos",
    card_bed_a2_desc: "Ropa de cama higienizada incluida, enchufes cómodos para móvil e iluminación relajante.",
    card_bed_a3_title: "Armario Amplio y Confort",
    card_bed_a3_desc: "Gran armario ropero para colocar maletas y ropa con total comodidad.",
    card_bed_b1_title: "Segundo Dormitorio (Dos Camas Individuales)",
    card_bed_b1_desc: "Equipado con dos cómodas camas individuales, ideal para niños, amigos o compañeros en un entorno tranquilo.",
    card_bed_b2_title: "Flexibilidad & Confort para Huéspedes",
    card_bed_b2_desc: "Dormitorio de matrimonio y segundo dormitorio con dos camas individuales: versatilidad y privacidad.",
    card_bath_1_title: "Baño Moderno & Confortable",
    card_bath_1_desc: "Ducha amplia, bidé, secador de pelo, toallas suaves y productos de higiene básicos.",
    card_outdoor_1_title: "Terraza Panorámica Exterior",
    card_outdoor_1_desc: "El punto fuerte de la casa: disfruta de un aperitivo al atardecer o del desayuno al aire libre.",
    card_outdoor_2_title: "Vistas Tranquilas",
    card_outdoor_2_desc: "Ambiente residencial sereno, ideal para descansar tras un día de excursiones o trabajo.",
    card_outdoor_3_title: "Entrada & Fachada",
    card_outdoor_3_desc: "Edificio tranquilo con cómodo acceso y plazas de aparcamiento en las inmediaciones.",
    card_kitchen_3_title: "Placa de Cocina & Horno",
    card_kitchen_3_desc: "Todo lo necesario para cocinar con total autonomía durante tu estancia.",
    card_bed_a4_title: "Acabados & Confort del Dormitorio Principal",
    card_bed_a4_desc: "Atmósfera acogedora para un sueño reparador tras las excursiones o la jornada laboral.",
    card_bed_a5_title: "Detalles de Diseño",
    card_bed_a5_desc: "Mobiliario moderno, tonos relajantes y atención meticulosa a cada detalle.",
    card_bed_b3_title: "Segundo Dormitorio - Camas Individuales",
    card_bed_b3_desc: "Dos camas individuales confortables con mobiliario moderno e iluminación pensada para el descanso.",
    card_bath_2_title: "Zona de Lavabo & Sanitarios",
    card_bath_2_desc: "Baño higienizado, funcional y acabado con gusto contemporáneo.",
    card_hall_title: "Vestíbulo & Distribuidor",
    card_hall_desc: "Entrada espaciosa que distribuye de manera óptima la zona de día y la zona de noche.",

    // Amenities
    amenities_badge: "Comodidades Incluidas",
    amenities_title: "Los Servicios a Tu Disposición",
    amenities_subtitle: "Todo lo necesario para unas vacaciones sin preocupaciones o un cómodo viaje de trabajo.",
    amenity_wifi_title: "Wi-Fi de Alta Velocidad",
    amenity_wifi_desc: "Conexión a Internet rápida y estable, ideal para streaming, teletrabajo o videollamadas.",
    amenity_parking_title: "Aparcamiento Gratuito",
    amenity_parking_desc: "Cómodo aparcamiento gratuito disponible en las inmediaciones para dejar el coche con total tranquilidad.",
    amenity_tv_title: "Smart TV & Entretenimiento",
    amenity_tv_desc: "Televisor de última generación en el salón, perfecto para relajarse por la noche.",
    amenity_kitchen_title: "Cocina Completa",
    amenity_kitchen_desc: "Placa, horno, nevera, cafetera, vajilla, sartenes y condimentos básicos.",
    amenity_terrace_title: "Terraza Exterior Privada",
    amenity_terrace_desc: "Espléndida terraza amueblada para disfrutar de comidas al aire libre o un buen café matutino.",
    amenity_ac_title: "Aire Acondicionado a Petición",
    amenity_ac_desc: "Posibilidad de solicitar aire acondicionado en los meses de calor para el máximo bienestar.",
    amenity_laundry_title: "Lavadora & Kit de Planchado",
    amenity_laundry_desc: "Lavadora en la vivienda, tendedero, plancha y tabla de planchar para estancias de cualquier duración.",
    amenity_capacity_title: "Capacidad Hasta 6 Huéspedes",
    amenity_capacity_desc: "Un dormitorio doble, un dormitorio con dos camas individuales y sofá cama doble en el salón.",

    // Surroundings
    surroundings_badge: "Experiencias & Territorio",
    surroundings_title: "Qué Ver en los Alrededores",
    surroundings_subtitle: "Desde Concesio puedes llegar en pocos minutos a maravillas históricas, lagos de ensueño, prestigiosas bodegas y cumbres alpinas.",
    attraction_brescia_title: "Brescia Centro Histórico",
    attraction_brescia_desc: "Ciudad de arte y cultura: visita el Templo Capitolino y el Parque Arqueológico Romano (UNESCO), el complejo de Santa Giulia, el Castillo de Brescia y Piazza della Loggia.",
    attraction_iseo_title: "Lago de Iseo & Franciacorta",
    attraction_iseo_desc: "Llega a las colinas de Franciacorta para tours y catas en bodegas históricas. Descubre el encanto del Lago de Iseo y toma el barco a Monte Isola.",
    attraction_garda_title: "Lago de Garda",
    attraction_garda_desc: "El lago más grande de Italia: visita Salò, Desenzano del Garda, Sirmione con el Castillo Scaligero y las Termas de Catulo, y Gardone Riviera con el Vittoriale.",
    attraction_maniva_title: "Passo Maniva & Montaña",
    attraction_maniva_desc: "En invierno estación de esquí (Maniva Ski) para esquí alpino, snowboard y raquetas. En verano, paraíso de senderismo, refugios alpinos y rutas en bicicleta de montaña.",
    attraction_paolo_title: "Museo Colección Pablo VI",
    attraction_paolo_desc: "Concesio es la ciudad natal del Papa Pablo VI (G.B. Montini). El museo alberga una prestigiosa galería de arte contemporáneo con obras de Matisse, Chagall, Fontana y Morandi.",
    attraction_mella_title: "Vía Verde del Río Mella",
    attraction_mella_desc: "Sugerente sendero ciclopeatonal rodeado de naturaleza a orillas del río Mella, a pocos pasos de la casa. Ideal para paseos relajantes, jogging matinal o excursiones en bici hacia Brescia o Val Trompia.",
    dist_brescia: "10-12 Minutos",
    dist_iseo: "15-20 Minutos",
    dist_garda: "25-35 Minutos",
    dist_maniva: "35-40 Minutos",
    dist_paolo: "3 Minutos",
    dist_mella: "1-2 Minutos (A pie)",
    tag_unesco: "Sitio UNESCO",
    tag_castle: "Castillo",
    tag_museums: "Museos",
    tag_wine: "Vinos Franciacorta",
    tag_monte_isola: "Monte Isola",
    tag_boat: "Paseo en Barco",
    tag_sirmione: "Sirmione",
    tag_salo: "Salò",
    tag_thermal: "Playas & Termas",
    tag_ski: "Esquí & Nieve",
    tag_trekking: "Senderismo Alpino",
    tag_food: "Refugios Gastronómicos",
    tag_art: "Arte Contemporáneo",
    tag_history: "Historia Local",
    tag_culture: "Cultura",
    tag_bike: "Carril Bici",
    tag_nature: "Naturaleza & Relax",
    tag_walk: "Paseos & Jogging",

    // Gallery Badges
    card_badge_salone: "Salón",
    card_badge_cucina: "Cocina",
    card_badge_principale: "Dormitorio Principal",
    card_badge_secondaria: "Habitación Individuales",
    card_badge_bagno: "Baño",
    card_badge_terrazza: "Terraza Privada",
    card_badge_balcone: "Balcón & Vistas",
    card_badge_esterno: "Exterior Casa",
    card_badge_ingresso: "Entrada",

    // Transport
    transport_badge: "Movilidad & Ubicación",
    transport_title: "Cómo Llegar",
    transport_subtitle: "Concesio (zona Costorio) cuenta con conexiones rápidas con el centro de Brescia, las estaciones de tren y los principales aeropuertos del norte de Italia.",
    transport_box_title: "Conexiones & Opciones de Transporte",
    transport_box_desc: "Tanto si viajas en coche como en transporte público, llegar a Casa Jesi es sencillo y sin estrés.",
    transport_bus_title: "Autobuses de Línea",
    transport_bus_desc: "Parada a pocos metros a pie de la casa con conexiones regulares y frecuentes con Brescia centro y Val Trompia.",
    transport_metro_title: "Metro de Brescia (MetroBS)",
    transport_metro_desc: "Estación terminal 'Prealpino' a solo 5 minutos en coche o autobús con gran aparcamiento disuasorio. Te lleva al centro y a la estación en menos de 10 minutos.",
    transport_train_title: "Estación de Tren de Brescia",
    transport_train_desc: "A unos 15 minutos. Nodo de Alta Velocidad Frecciarossa e Italo (Milán a 35 min, Verona a 30 min, Venecia a 1h30).",
    transport_air_title: "Aeropuertos Cercanos",
    transport_air_desc: "Milán Bérgamo Orio al Serio (BGY) a 45 min, Verona Villafranca (VRN) a 45 min, Milán Linate (LIN) a 60 min.",
    btn_google_maps: "Abrir en Google Maps",
    btn_apple_maps: "Abrir en Apple Maps",

    // Reviews
    reviews_caption: "Puntuación basada en reseñas verificadas en AirBnB",
    reviews_btn_airbnb: "Leer todas en AirBnB",
    hint_swipe_reviews: "Desliza para leer las reseñas",
    review_1_text: "“¡La casa es todavía más bonita que en las fotos! Espaciosa, limpísima y luminosa. La terraza fue perfecta para cenar al aire libre por la noche con una brisa muy agradable. ¡Ubicación estratégica tanto para ir a Brescia como al Lago de Iseo!”",
    review_1_author: "Marco y Chiara",
    review_1_stay: "Huéspedes verificados • Estancia en pareja",
    review_2_text: "“Anfitrión amabilísimo y siempre disponible para cualquier consulta. Cocina con todo lo necesario y camas comodísimas. Tener aparcamiento privado fácil y las maravillas de los lagos y la ciudad a poca distancia hizo que la estancia fuera especial para toda la familia.”",
    review_2_author: "Elena B.",
    review_2_stay: "Huésped verificada • Vacaciones en familia",
    review_3_text: "“Excelente punto de partida tanto para trabajo como para turismo. Wi-Fi impecable para teletrabajar y el metro Prealpino es comodísimo para llegar al centro de Brescia sin preocuparse del tráfico o zonas de bajas emisiones. ¡Muy recomendable!”",
    review_3_author: "Davide G.",
    review_3_stay: "Huésped verificado • Viaje de trabajo",

    // FAQ
    faq_badge: "Preguntas Frecuentes",
    faq_title: "¿Tienes Preguntas sobre la Estancia?",
    faq_subtitle: "Aquí tienes respuestas a las dudas más comunes de nuestros huéspedes.",
    faq_q1: "¿Cuáles son los horarios de Check-in e Check-out?",
    faq_a1: "El check-in se acuerda según tus necesidades (habitualmente a partir de las 15:00), con total disponibilidad para recibirte a tu llegada. El check-out es hasta las 10:00 o 11:00 para garantizar la desinfección y limpieza del espacio.",
    faq_q2: "¿El aparcamiento está incluido y disponible?",
    faq_a2: "¡Sí! Hay amplio aparcamiento cómodo y gratuito justo al lado del alojamiento, sin dificultad para aparcar a cualquier hora del día o de la noche.",
    faq_q3: "¿Se proporciona ropa de cama y toallas de baño?",
    faq_a3: "Por supuesto. Proporcionamos sábanas limpias, edredones/mantas, juego completo de toallas para cada huésped, secador de pelo y jabón para una estancia perfecta desde el primer momento.",
    faq_q4: "¿Hay aire acondicionado?",
    faq_a4: "Sí, disponemos de aire acondicionado bajo petición con suplemento para los periodos de verano.",
    faq_q5: "¿Hay tiendas y servicios a poca distancia a pie?",
    faq_a5: "Sí, en las inmediaciones encontrarás supermercados, panaderías, farmacia, estanco, bares, restaurantes, pizzerías y paradas de autobús.",

    // Booking & Contact
    booking_banner_title: "¿Listo para Reservar tu Estancia?",
    booking_banner_desc: "Puedes reservar en tiempo real con todas las garantías en nuestro anuncio oficial de AirBnB con puntuación de 5 estrellas, o escribirnos directamente para presupuestos personalizados o estancias prolongadas.",
    booking_banner_btn: "Reservar Ahora en Airbnb",
    booking_banner_guarantee: "Confirmación inmediata y pagos protegidos",
    contact_direct_badge: "Contacto Rápido",
    contact_direct_title: "Estamos a Tu Entera Disposición",
    contact_direct_desc: "Para cualquier pregunta previa al viaje o necesidades especiales de horario, escríbenos directamente por email o en nuestras redes sociales.",
    contact_email_title: "Email Directo",
    contact_address_title: "Dirección del Alojamiento",
    contact_insta_title: "Síguenos en Instagram",
    contact_cin_title: "Código de Registro Oficial (CIN)",
    form_title: "Solicita Información o un Presupuesto",
    form_desc: "Completa el siguiente formulario para comprobar fechas disponibles o consultar cualquier duda sobre la casa.",
    form_name_label: "Nombre y Apellidos *",
    form_name_placeholder: "Ej. Carlos García",
    form_email_label: "Correo Electrónico *",
    form_email_placeholder: "nombre@email.es",
    form_phone_label: "Teléfono / WhatsApp",
    form_phone_placeholder: "+34 600 123456",
    form_guests_label: "Número de Huéspedes",
    form_guest_1: "1 Huésped",
    form_guest_2: "2 Huéspedes",
    form_guest_3: "3 Huéspedes",
    form_guest_4: "4 Huéspedes",
    form_guest_5: "5 Huéspedes",
    form_guest_opt_max: "6 Huéspedes (Capacidad máxima)",
    form_guests_opt_max: "6 Huéspedes (Capacidad máxima)",
    form_checkin_label: "Fecha de Check-in",
    form_checkout_label: "Fecha de Check-out",
    form_message_label: "Mensaje o Peticiones Especiales",
    form_message_placeholder: "Indica tus peticiones: hora aproximada de llegada, mascotas, cuna para bebé, etc...",
    form_privacy_text: "He leído y acepto la <a href=\"privacy-cookie-policy.html\" target=\"_blank\">política de privacidad (RGPD)</a>. Los datos enviados se utilizarán únicamente para responder a esta solicitud.",
    form_submit_btn: "Enviar Solicitud al Anfitrión",

    // Cookie Banner
    cookie_title: "Tu privacidad es importante",
    cookie_desc: "Utilizamos cookies técnicas esenciales para garantizar el funcionamiento del sitio. Con tu consentimiento, también utilizamos cookies estadísticas y mapas de terceros para mejorar la experiencia de navegación. Lee nuestra <a href=\"privacy-cookie-policy.html\">Política de Cookies & Privacidad</a>.",
    cookie_accept_all: "Aceptar Todas",
    cookie_reject: "Solo Necesarias",
    cookie_customize: "Personalizar",

    // Mobile Language Selector
    mobile_lang_label: "Idioma:",

    // Footer
    footer_desc: "El refugio perfecto en Concesio (Brescia) para descubrir las joyas artísticas, los lagos lombardos y la naturaleza de Val Trompia con total relax.",
    footer_legal: "Alojamiento destinado a Arrendamiento Turístico conforme a la legislación nacional y regional vigente.",
    footer_nav_title: "Navegación",
    footer_exp_title: "Lugares Cercanos",
    footer_contact_title: "Contacto & Reservas",
    footer_copy: "© 2026 Casa Vacanza Da Jesi • Concesio (Brescia) • Todos los derechos reservados.",
    footer_link_home: "Inicio de Página",
    footer_link_house: "La Casa",
    footer_link_photos: "Todas las Fotos",
    footer_link_amenities: "Servicios Incluidos",
    footer_link_surroundings: "Qué Ver en los Alrededores",
    footer_link_reach: "Cómo Llegar",
    footer_link_privacy: "Política de Privacidad (RGPD)",
    footer_link_cookies: "Gestionar Preferencias de Cookies",
    footer_link_consent: "Consentimiento de Cookies",
    floating_btn_text: "Reservar en Airbnb (4.98★)"
  }
};

/**
 * Controller per il cambio dinamico della lingua
 */
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'it';

  const t = TRANSLATIONS[lang];

  // Aggiorna titolo e meta description
  if (t.page_title) document.title = t.page_title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t.meta_desc) metaDesc.setAttribute('content', t.meta_desc);

  // Aggiorna lang su <html>
  document.documentElement.lang = lang;

  // Traduce tutti gli elementi con data-i18n
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Traduce placeholder
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Traduce title
  const titleElements = document.querySelectorAll('[data-i18n-title]');
  titleElements.forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key] !== undefined) {
      el.setAttribute('title', t[key]);
    }
  });

  // Aggiorna lo stato visivo di tutti i selettori di lingua (desktop e mobile)
  document.querySelectorAll('[data-lang]').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Aggiorna label pulsante corrente nella barra superiore
  const currentLangLabel = document.querySelector('.current-lang-code');
  if (currentLangLabel) {
    currentLangLabel.textContent = lang.toUpperCase();
  }

  // Salva preferenza in localStorage
  try {
    localStorage.setItem('casajesi_lang', lang);
  } catch (e) {}
}

function initI18n() {
  // Gestione click opzioni lingua
  document.addEventListener('click', (e) => {
    const langBtn = e.target.closest('[data-lang]');
    if (langBtn) {
      const selectedLang = langBtn.getAttribute('data-lang');
      setLanguage(selectedLang);
      
      // Chiudi dropdown se aperto
      const dropdown = document.querySelector('.lang-dropdown');
      if (dropdown) dropdown.classList.remove('show');
      const toggle = document.querySelector('#langToggleBtn');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }

    // Toggle dropdown lingua
    const toggleBtn = e.target.closest('#langToggleBtn');
    if (toggleBtn) {
      e.stopPropagation();
      const dropdown = document.querySelector('.lang-dropdown');
      if (dropdown) {
        const isShown = dropdown.classList.toggle('show');
        toggleBtn.setAttribute('aria-expanded', isShown ? 'true' : 'false');
      }
    } else if (!e.target.closest('.lang-selector-wrap')) {
      const dropdown = document.querySelector('.lang-dropdown');
      if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        const toggle = document.querySelector('#langToggleBtn');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });

  // Rileva lingua iniziale: URL (?lang=...) > localStorage > navigator.language > IT
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const storedLang = localStorage.getItem('casajesi_lang');
  const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();

  let initialLang = 'it';
  if (urlLang && TRANSLATIONS[urlLang]) {
    initialLang = urlLang;
  } else if (storedLang && TRANSLATIONS[storedLang]) {
    initialLang = storedLang;
  } else if (browserLang && TRANSLATIONS[browserLang]) {
    initialLang = browserLang;
  }

  setLanguage(initialLang);
}

// Inizializza al caricamento del DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
