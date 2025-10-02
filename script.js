// Данные о странах и достопримечательностях
const landmarksData = {
  "countries": [
    {
      "country": "France",
      "flag": "🇫🇷",
      "landmarks": [
        {
          "name": "Eiffel Tower",
          "address": "Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France",
          "coordinates": [48.8584, 2.2945]
        },
        {
          "name": "Palace of Versailles",
          "address": "Place d'Armes, 78000 Versailles, France",
          "coordinates": [48.8049, 2.1204]
        }
      ],
      "number": 1
    },
    {
      "country": "Uzbekistan",
      "flag": "🇺🇿",
      "landmarks": [
        {
          "name": "Registan",
          "address": "Registon ko'chasi, Samarqand, Uzbekistan",
          "coordinates": [39.6547, 66.9597]
        },
        {
          "name": "Ichan Kala",
          "address": "Ichan Kala, Khiva, Uzbekistan",
          "coordinates": [41.3784, 60.3600]
        }
      ],
      "number": 2
    },
    {
      "country": "South Korea",
      "flag": "🇰🇷",
      "landmarks": [
        {
          "name": "Gyeongbokgung Palace",
          "address": "161 Sajik-ro, Jongno-gu, Seoul, South Korea",
          "coordinates": [37.5796, 126.9770]
        },
        {
          "name": "Bukchon Hanok Village",
          "address": "37 Gyedong-gil, Jongno-gu, Seoul, South Korea",
          "coordinates": [37.5838, 126.9850]
        },
        {
          "name": "Namsan Tower",
          "address": "105 Namsangongwon-gil, Yongsan-gu, Seoul, South Korea",
          "coordinates": [37.5512, 126.9882]
        }
      ],
      "number": 3
    },
    {
      "country": "Saudi Arabia",
      "flag": "🇸🇦",
      "landmarks": [
        {
          "name": "Masjid al-Haram",
          "address": "Al Haram, Mecca 24231, Saudi Arabia",
          "coordinates": [21.4225, 39.8262]
        },
        {
          "name": "Al-Masjid an-Nabawi",
          "address": "Al Haram, Medina 42311, Saudi Arabia",
          "coordinates": [24.4672, 39.6142]
        }
      ],
      "number": 4
    },
    {
      "country": "Japan",
      "flag": "🇯🇵",
      "landmarks": [
        {
          "name": "Fushimi Inari Shrine",
          "address": "68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto, Japan",
          "coordinates": [34.9671, 135.7727]
        },
        {
          "name": "Osaka Castle",
          "address": "1-1 Osakajo, Chuo Ward, Osaka, Japan",
          "coordinates": [34.6873, 135.5262]
        }
      ],
      "number": 5
    },
    {
      "country": "USA",
      "flag": "🇺🇸",
      "landmarks": [
        {
          "name": "Statue of Liberty",
          "address": "Liberty Island, New York, NY 10004, USA",
          "coordinates": [40.6892, -74.0445]
        },
        {
          "name": "Grand Canyon",
          "address": "Grand Canyon National Park, Arizona, USA",
          "coordinates": [36.1069, -112.1129]
        }
      ],
      "number": 6
    },
    {
      "country": "Spain",
      "flag": "🇪🇸",
      "landmarks": [
        {
          "name": "Sagrada Familia",
          "address": "Carrer de Mallorca, 401, 08013 Barcelona, Spain",
          "coordinates": [41.4036, 2.1744]
        },
        {
          "name": "Alhambra",
          "address": "Calle Real de la Alhambra, s/n, 18009 Granada, Spain",
          "coordinates": [37.1760, -3.5889]
        }
      ],
      "number": 7
    },
    {
      "country": "Italy",
      "flag": "🇮🇹",
      "landmarks": [
        {
          "name": "Colosseum",
          "address": "Piazza del Colosseo, 1, 00184 Roma RM, Italy",
          "coordinates": [41.8902, 12.4922]
        },
        {
          "name": "Leaning Tower of Pisa",
          "address": "Piazza del Duomo, 56126 Pisa PI, Italy",
          "coordinates": [43.7230, 10.3966]
        }
      ],
      "number": 8
    },
    {
      "country": "China",
      "flag": "🇨🇳",
      "landmarks": [
        {
          "name": "Great Wall (Badaling)",
          "address": "Badaling, Yanqing District, Beijing, China",
          "coordinates": [40.4319, 116.5704]
        },
        {
          "name": "Forbidden City",
          "address": "4 Jingshan Front St, Dongcheng, Beijing, China",
          "coordinates": [39.9163, 116.3972]
        }
      ],
      "number": 9
    },
    {
      "country": "Germany",
      "flag": "🇩🇪",
      "landmarks": [
        {
          "name": "Brandenburg Gate",
          "address": "Pariser Platz, 10117 Berlin, Germany",
          "coordinates": [52.5163, 13.3777]
        },
        {
          "name": "Neuschwanstein Castle",
          "address": "Neuschwansteinstraße 20, 87645 Schwangau, Germany",
          "coordinates": [47.5576, 10.7498]
        }
      ],
      "number": 10
    },
    {
      "country": "United Kingdom",
      "flag": "🇬🇧",
      "landmarks": [
        {
          "name": "Big Ben and Westminster",
          "address": "Westminster, London SW1A 0AA, UK",
          "coordinates": [51.4994, -0.1245]
        },
        {
          "name": "Stonehenge",
          "address": "Amesbury, Salisbury SP4 7DE, UK",
          "coordinates": [51.1789, -1.8262]
        }
      ],
      "number": 11
    },
    {
      "country": "India",
      "flag": "🇮🇳",
      "landmarks": [
        {
          "name": "Taj Mahal",
          "address": "Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001, India",
          "coordinates": [27.1751, 78.0421]
        },
        {
          "name": "Meenakshi Temple",
          "address": "Madurai Main, Madurai, Tamil Nadu 625001, India",
          "coordinates": [9.9197, 78.1194]
        }
      ],
      "number": 12
    },
    {
      "country": "Turkey",
      "flag": "🇹🇷",
      "landmarks": [
        {
          "name": "Hagia Sophia",
          "address": "Sultan Ahmet, Ayasofya Meydanı No:1, 34122 Fatih/İstanbul, Turkey",
          "coordinates": [41.0086, 28.9802]
        },
        {
          "name": "Cappadocia",
          "address": "Göreme, Nevşehir Province, Turkey",
          "coordinates": [38.6431, 34.8306]
        }
      ],
      "number": 13
    },
    {
      "country": "Brazil",
      "flag": "🇧🇷",
      "landmarks": [
        {
          "name": "Christ the Redeemer",
          "address": "Parque Nacional da Tijuca, Rio de Janeiro - RJ, Brazil",
          "coordinates": [-22.9519, -43.2105]
        },
        {
          "name": "Iguazu Falls",
          "address": "Foz do Iguaçu, Paraná, Brazil",
          "coordinates": [-25.6953, -54.4367]
        }
      ],
      "number": 14
    },
    {
      "country": "Egypt",
      "flag": "🇪🇬",
      "landmarks": [
        {
          "name": "Pyramids of Giza",
          "address": "Al Haram, Nazlet El-Semman, Al Giza Desert, Egypt",
          "coordinates": [29.9792, 31.1342]
        },
        {
          "name": "Luxor Temple",
          "address": "Luxor City, Luxor, Egypt",
          "coordinates": [25.6872, 32.6396]
        }
      ],
      "number": 15
    },
    {
      "country": "Canada",
      "flag": "🇨🇦",
      "landmarks": [
        {
          "name": "Niagara Falls",
          "address": "Niagara Falls, Ontario, Canada",
          "coordinates": [43.0962, -79.0377]
        },
        {
          "name": "CN Tower",
          "address": "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
          "coordinates": [43.6426, -79.3871]
        }
      ],
      "number": 16
    },
    {
      "country": "Australia",
      "flag": "🇦🇺",
      "landmarks": [
        {
          "name": "Sydney Opera House",
          "address": "Bennelong Point, Sydney NSW 2000, Australia",
          "coordinates": [-33.8568, 151.2153]
        },
        {
          "name": "Great Barrier Reef",
          "address": "Queensland, Australia",
          "coordinates": [-18.2871, 147.6992]
        }
      ],
      "number": 17
    },
    {
      "country": "Russia",
      "flag": "🇷🇺",
      "landmarks": [
        {
          "name": "Red Square",
          "address": "Red Square, Moscow, Russia",
          "coordinates": [55.7539, 37.6208]
        },
        {
          "name": "Hermitage Museum",
          "address": "Palace Square, 2, St Petersburg, Russia",
          "coordinates": [59.9398, 30.3146]
        }
      ],
      "number": 18
    },
    {
      "country": "Argentina",
      "flag": "🇦🇷",
      "landmarks": [
        {
          "name": "Obelisk of Buenos Aires",
          "address": "Av. 9 de Julio, C1043 CABA, Argentina",
          "coordinates": [-34.6037, -58.3816]
        },
        {
          "name": "Perito Moreno Glacier",
          "address": "Los Glaciares National Park, Santa Cruz Province, Argentina",
          "coordinates": [-50.3306, -73.2406]
        }
      ],
      "number": 19
    },
    {
      "country": "Thailand",
      "flag": "🇹🇭",
      "landmarks": [
        {
          "name": "Wat Phra Kaew",
          "address": "Na Phra Lan Rd, Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok, Thailand",
          "coordinates": [13.7500, 100.4916]
        },
        {
          "name": "Wat Arun",
          "address": "158 Wang Doem Rd, Wat Arun, Bangkok Yai, Bangkok, Thailand",
          "coordinates": [13.7438, 100.4889]
        }
      ],
      "number": 20
    },
    {
      "country": "Iran",
      "flag": "🇮🇷",
      "landmarks": [
        {
          "name": "Golestan Palace",
          "address": "Panzdah-e-Khordad St, Tehran, Iran",
          "coordinates": [35.6804, 51.4206]
        },
        {
          "name": "Persepolis",
          "address": "Marvdasht, Fars Province, Iran",
          "coordinates": [29.9358, 52.8900]
        }
      ],
      "number": 21
    },
    {
      "country": "Kazakhstan",
      "flag": "🇰🇿",
      "landmarks": [
        {
          "name": "Bayterek Tower",
          "address": "Dostyk St, Nur-Sultan, Kazakhstan",
          "coordinates": [51.1282, 71.4304]
        },
        {
          "name": "Hazret Sultan Mosque",
          "address": "Tauelsizdik Ave, Nur-Sultan, Kazakhstan",
          "coordinates": [51.1282, 71.4304]
        }
      ],
      "number": 22
    },
    {
      "country": "Malaysia",
      "flag": "🇲🇾",
      "landmarks": [
        {
          "name": "Petronas Twin Towers",
          "address": "Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia",
          "coordinates": [3.1579, 101.7116]
        },
        {
          "name": "Batu Caves",
          "address": "Gombak, 68100 Batu Caves, Selangor, Malaysia",
          "coordinates": [3.2373, 101.6839]
        }
      ],
      "number": 23
    },
    {
      "country": "Indonesia",
      "flag": "🇮🇩",
      "landmarks": [
        {
          "name": "Borobudur",
          "address": "Jl. Badrawati, Borobudur, Magelang, Central Java, Indonesia",
          "coordinates": [-7.6079, 110.2038]
        },
        {
          "name": "Uluwatu Temple",
          "address": "Pecatu, South Kuta, Badung Regency, Bali, Indonesia",
          "coordinates": [-8.8294, 115.0850]
        }
      ],
      "number": 24
    },
    {
      "country": "Mexico",
      "flag": "🇲🇽",
      "landmarks": [
        {
          "name": "Teotihuacan",
          "address": "San Juan Teotihuacan, State of Mexico, Mexico",
          "coordinates": [19.6925, -98.8439]
        },
        {
          "name": "Chichen Itza",
          "address": "Tinum, Yucatán, Mexico",
          "coordinates": [20.6843, -88.5678]
        }
      ],
      "number": 25
    },
    {
      "country": "Tanzania",
      "flag": "🇹🇿",
      "landmarks": [
        {
          "name": "Mount Kilimanjaro",
          "address": "Kilimanjaro National Park, Tanzania",
          "coordinates": [-3.0674, 37.3556]
        },
        {
          "name": "Serengeti National Park",
          "address": "Serengeti, Tanzania",
          "coordinates": [-2.1530, 34.6857]
        }
      ],
      "number": 26
    },
    {
      "country": "South Africa",
      "flag": "🇿🇦",
      "landmarks": [
        {
          "name": "Table Mountain",
          "address": "Table Mountain National Park, Cape Town, South Africa",
          "coordinates": [-33.9628, 18.4093]
        },
        {
          "name": "Robben Island",
          "address": "Robben Island, Cape Town, South Africa",
          "coordinates": [-33.8069, 18.3662]
        }
      ],
      "number": 27
    },
    {
      "country": "Morocco",
      "flag": "🇲🇦",
      "landmarks": [
        {
          "name": "Jemaa el-Fnaa",
          "address": "Marrakech 40000, Morocco",
          "coordinates": [31.6258, -7.9891]
        },
        {
          "name": "Hassan II Mosque",
          "address": "Blvd Sidi Mohammed Ben Abdallah, Casablanca 20000, Morocco",
          "coordinates": [33.6089, -7.6328]
        }
      ],
      "number": 28
    },
    {
      "country": "Norway",
      "flag": "🇳🇴",
      "landmarks": [
        {
          "name": "Geirangerfjord",
          "address": "Geiranger, Stranda, Møre og Romsdal, Norway",
          "coordinates": [62.1015, 7.2059]
        },
        {
          "name": "Oslo Opera House",
          "address": "Kirsten Flagstads Plass 1, 0150 Oslo, Norway",
          "coordinates": [59.9075, 10.7522]
        }
      ],
      "number": 29
    },
    {
      "country": "Sweden",
      "flag": "🇸🇪",
      "landmarks": [
        {
          "name": "Royal Palace Stockholm",
          "address": "Slottsbacken 1, 111 30 Stockholm, Sweden",
          "coordinates": [59.3267, 18.0719]
        },
        {
          "name": "Vasa Museum",
          "address": "Galärvarvsvägen 14, 115 21 Stockholm, Sweden",
          "coordinates": [59.3280, 18.0914]
        }
      ],
      "number": 30
    },
    {
      "country": "Greece",
      "flag": "🇬🇷",
      "landmarks": [
        {
          "name": "Acropolis of Athens",
          "address": "Athens 105 58, Greece",
          "coordinates": [37.9715, 23.7267]
        },
        {
          "name": "Santorini Caldera",
          "address": "Fira, Santorini 847 00, Greece",
          "coordinates": [36.3932, 25.4615]
        }
      ],
      "number": 31
    },
    {
      "country": "Vietnam",
      "flag": "🇻🇳",
      "landmarks": [
        {
          "name": "Ha Long Bay",
          "address": "Hạ Long, Quảng Ninh, Vietnam",
          "coordinates": [20.9101, 107.1839]
        },
        {
          "name": "Imperial City of Hue",
          "address": "Thành phố Huế, Thừa Thiên Huế, Vietnam",
          "coordinates": [16.4637, 107.5909]
        }
      ],
      "number": 32
    },
    {
      "country": "Portugal",
      "flag": "🇵🇹",
      "landmarks": [
        {
          "name": "Belem Tower",
          "address": "Av. Brasília, 1400-038 Lisboa, Portugal",
          "coordinates": [38.6916, -9.2160]
        },
        {
          "name": "Palácio da Pena",
          "address": "Estrada da Pena, 2710-609 Sintra, Portugal",
          "coordinates": [38.7875, -9.3906]
        }
      ],
      "number": 33
    },
    {
      "country": "Philippines",
      "flag": "🇵🇭",
      "landmarks": [
        {
          "name": "Chocolate Hills",
          "address": "Carmen, Bohol, Philippines",
          "coordinates": [9.9129, 124.1694]
        },
        {
          "name": "Banaue Rice Terraces",
          "address": "Banaue, Ifugao, Philippines",
          "coordinates": [16.9240, 121.0550]
        }
      ],
      "number": 34
    },
    {
      "country": "New Zealand",
      "flag": "🇳🇿",
      "landmarks": [
        {
          "name": "Milford Sound",
          "address": "Fiordland National Park, New Zealand",
          "coordinates": [-44.6414, 167.9253]
        },
        {
          "name": "Hobbiton Movie Set",
          "address": "501 Buckland Rd, Matamata 3472, New Zealand",
          "coordinates": [-37.8721, 175.6828]
        }
      ],
      "number": 35
    },
    {
      "country": "Jordan",
      "flag": "🇯🇴",
      "landmarks": [
        {
          "name": "Petra",
          "address": "Wadi Musa, Ma'an Governorate, Jordan",
          "coordinates": [30.3285, 35.4444]
        },
        {
          "name": "Dead Sea",
          "address": "Dead Sea, Jordan Valley",
          "coordinates": [31.5590, 35.4732]
        }
      ],
      "number": 36
    },
    {
      "country": "Colombia",
      "flag": "🇨🇴",
      "landmarks": [
        {
          "name": "Ciudad Perdida",
          "address": "Sierra Nevada de Santa Marta, Colombia",
          "coordinates": [11.0400, -73.9100]
        },
        {
          "name": "Walled City of Cartagena",
          "address": "Cartagena, Bolívar, Colombia",
          "coordinates": [10.4236, -75.5369]
        }
      ],
      "number": 37
    },
    {
      "country": "Kenya",
      "flag": "🇰🇪",
      "landmarks": [
        {
          "name": "Maasai Mara",
          "address": "Narok County, Kenya",
          "coordinates": [-1.4091, 35.1264]
        },
        {
          "name": "Mount Kenya",
          "address": "Mount Kenya National Park, Kenya",
          "coordinates": [-0.1527, 37.3084]
        }
      ],
      "number": 38
    },
    {
      "country": "Finland",
      "flag": "🇫🇮",
      "landmarks": [
        {
          "name": "Helsinki Cathedral",
          "address": "Unioninkatu 29, 00170 Helsinki, Finland",
          "coordinates": [60.1699, 24.9384]
        },
        {
          "name": "Suomenlinna Fortress",
          "address": "Suomenlinna C1, 00190 Helsinki, Finland",
          "coordinates": [60.1478, 24.9892]
        }
      ],
      "number": 39
    },
    {
      "country": "Netherlands",
      "flag": "🇳🇱",
      "landmarks": [
        {
          "name": "Rijksmuseum",
          "address": "Museumstraat 1, 1071 XX Amsterdam, Netherlands",
          "coordinates": [52.3600, 4.8852]
        },
        {
          "name": "Keukenhof Gardens",
          "address": "Stationsweg 166A, 2161 AM Lisse, Netherlands",
          "coordinates": [52.2667, 4.5467]
        }
      ],
      "number": 40
    },
    {
      "country": "Switzerland",
      "flag": "🇨🇭",
      "landmarks": [
        {
          "name": "Matterhorn",
          "address": "Zermatt, Valais, Switzerland",
          "coordinates": [45.9763, 7.6586]
        },
        {
          "name": "Château de Chillon",
          "address": "Avenue de Chillon 21, 1820 Veytaux, Switzerland",
          "coordinates": [46.4142, 6.9275]
        }
      ],
      "number": 41
    },
    {
      "country": "Iceland",
      "flag": "🇮🇸",
      "landmarks": [
        {
          "name": "Blue Lagoon",
          "address": "Norðurljósavegur 9, 240 Grindavík, Iceland",
          "coordinates": [63.8800, -22.4497]
        },
        {
          "name": "Hallgrímskirkja",
          "address": "Hallgrímstorg 1, 101 Reykjavík, Iceland",
          "coordinates": [64.1415, -21.9269]
        }
      ],
      "number": 42
    },
    {
      "country": "Belgium",
      "flag": "🇧🇪",
      "landmarks": [
        {
          "name": "Grand Place",
          "address": "Grote Markt, 1000 Brussel, Belgium",
          "coordinates": [50.8466, 4.3528]
        },
        {
          "name": "Atomium",
          "address": "Place de l'Atomium 1, 1020 Bruxelles, Belgium",
          "coordinates": [50.8949, 4.3415]
        }
      ],
      "number": 43
    },
    {
      "country": "Peru",
      "flag": "🇵🇪",
      "landmarks": [
        {
          "name": "Machu Picchu",
          "address": "08680, Peru",
          "coordinates": [-13.1631, -72.5450]
        },
        {
          "name": "Nazca Lines",
          "address": "Nazca Desert, Ica Region, Peru",
          "coordinates": [-14.7289, -75.1475]
        }
      ],
      "number": 44
    },
    {
      "country": "Czech Republic",
      "flag": "🇨🇿",
      "landmarks": [
        {
          "name": "Charles Bridge",
          "address": "Karlův most, 110 00 Praha 1, Czechia",
          "coordinates": [50.0865, 14.4115]
        },
        {
          "name": "Prague Castle",
          "address": "Hradčany, 119 08 Prague 1, Czechia",
          "coordinates": [50.0919, 14.3986]
        }
      ],
      "number": 45
    },
    {
      "country": "Hungary",
      "flag": "🇭🇺",
      "landmarks": [
        {
          "name": "Buda Castle",
          "address": "Szent György tér 2, 1014 Budapest, Hungary",
          "coordinates": [47.4960, 19.0396]
        },
        {
          "name": "Parliament Building",
          "address": "Kossuth Lajos tér 1-3, 1055 Budapest, Hungary",
          "coordinates": [47.5079, 19.0458]
        }
      ],
      "number": 46
    },
    {
      "country": "Poland",
      "flag": "🇵🇱",
      "landmarks": [
        {
          "name": "Wawel Royal Castle",
          "address": "Wawel 5, 31-001 Kraków, Poland",
          "coordinates": [50.0547, 19.9353]
        },
        {
          "name": "Old Town Warsaw",
          "address": "Warsaw, Poland",
          "coordinates": [52.2297, 21.0122]
        }
      ],
      "number": 47
    },
    {
      "country": "Ukraine",
      "flag": "🇺🇦",
      "landmarks": [
        {
          "name": "Kyiv Pechersk Lavra",
          "address": "Lavrska St, 15, Kyiv, Ukraine, 01015",
          "coordinates": [50.4358, 30.5588]
        },
        {
          "name": "Saint Sophia Cathedral",
          "address": "Volodymyrska St, 24, Kyiv, Ukraine, 01001",
          "coordinates": [50.4526, 30.5144]
        }
      ],
      "number": 48
    },
    {
      "country": "Chile",
      "flag": "🇨🇱",
      "landmarks": [
        {
          "name": "Easter Island (Moai Statues)",
          "address": "Easter Island, Valparaíso Region, Chile",
          "coordinates": [-27.1127, -109.3497]
        },
        {
          "name": "Atacama Desert",
          "address": "San Pedro de Atacama, Antofagasta Region, Chile",
          "coordinates": [-23.5000, -68.0000]
        }
      ],
      "number": 49
    },
    {
      "country": "Austria",
      "flag": "🇦🇹",
      "landmarks": [
        {
          "name": "Schönbrunn Palace",
          "address": "Schönbrunner Schloßstraße 47, 1130 Wien, Austria",
          "coordinates": [48.1847, 16.3122]
        },
        {
          "name": "St. Stephen's Cathedral",
          "address": "Stephansplatz 3, 1010 Wien, Austria",
          "coordinates": [48.2085, 16.3731]
        }
      ],
      "number": 50
    }
  ]
};

// Глобальные переменные
let map;
let currentMarkers = [];
let selectedCountry = null;

// Инициализация карты
function initMap() {
  map = L.map('map').setView([20, 0], 2);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);
}

// Заполнение списка стран
function populateCountryList() {
  const countryList = document.getElementById('countryList');
  const countryInput = document.getElementById('countryInput');
  
  landmarksData.countries.forEach(country => {
    const option = document.createElement('option');
    option.value = `${country.flag} ${country.country}`;
    countryList.appendChild(option);
  });
  
  // Обработчик выбора страны
  countryInput.addEventListener('input', function() {
    const selectedValue = this.value;
    const countryName = selectedValue.replace(/^🇦-🇿\s/, ''); // Убираем флаг из начала
    
    const country = landmarksData.countries.find(c => c.country === countryName);
    if (country) {
      selectCountry(country);
    }
  });
}

// Выбор страны
function selectCountry(country) {
  selectedCountry = country;
  
  // Показываем панель поиска достопримечательностей
  document.getElementById('landmarkLabel').style.display = 'block';
  document.getElementById('landmarkInput').style.display = 'block';
  document.getElementById('resetButton').style.display = 'block';
  
  // Показываем информационную панель
  const infoPanel = document.getElementById('info-panel');
  infoPanel.style.display = 'block';
  document.getElementById('selectedCountry').textContent = `${country.flag} ${country.country}`;
  
  // Заполняем список достопримечательностей
  populateLandmarksList(country);
  
  // Очищаем карту и добавляем маркеры для выбранной страны
  clearMap();
  addCountryMarkers(country);
  
  // Центрируем карту на стране
  if (country.landmarks.length > 0) {
    const firstLandmark = country.landmarks[0];
    map.setView(firstLandmark.coordinates, 6);
  }
}

// Заполнение списка достопримечательностей
function populateLandmarksList(country) {
  const landmarksList = document.getElementById('landmarksList');
  landmarksList.innerHTML = '';
  
  country.landmarks.forEach(landmark => {
    const landmarkDiv = document.createElement('div');
    landmarkDiv.className = 'landmark-item';
    landmarkDiv.innerHTML = `
      <h4>${landmark.name}</h4>
      <p>📍 ${landmark.address}</p>
    `;
    landmarkDiv.addEventListener('click', () => {
      map.setView(landmark.coordinates, 15);
      highlightMarker(landmark);
    });
    landmarksList.appendChild(landmarkDiv);
  });
}

// Добавление маркеров на карту
function addCountryMarkers(country) {
  country.landmarks.forEach(landmark => {
    const marker = L.marker(landmark.coordinates)
      .addTo(map)
      .bindPopup(`
        <div class="marker-popup">
          <h3>${landmark.name}</h3>
          <p><strong>Страна:</strong> ${country.flag} ${country.country}</p>
          <p><strong>Адрес:</strong> ${landmark.address}</p>
        </div>
      `);
    
    currentMarkers.push(marker);
  });
}

// Подсветка маркера
function highlightMarker(landmark) {
  currentMarkers.forEach(marker => {
    if (marker.getLatLng().lat === landmark.coordinates[0] && 
        marker.getLatLng().lng === landmark.coordinates[1]) {
      marker.openPopup();
    }
  });
}

// Очистка карты
function clearMap() {
  currentMarkers.forEach(marker => {
    map.removeLayer(marker);
  });
  currentMarkers = [];
}

// Сброс поиска
function resetSearch() {
  selectedCountry = null;
  
  // Скрываем панели
  document.getElementById('landmarkLabel').style.display = 'none';
  document.getElementById('landmarkInput').style.display = 'none';
  document.getElementById('resetButton').style.display = 'none';
  document.getElementById('info-panel').style.display = 'none';
  
  // Очищаем поля ввода
  document.getElementById('countryInput').value = '';
  document.getElementById('landmarkInput').value = '';
  
  // Очищаем карту
  clearMap();
  
  // Возвращаем карту к исходному виду
  map.setView([20, 0], 2);
}

// Поиск по достопримечательностям
function setupLandmarkSearch() {
  const landmarkInput = document.getElementById('landmarkInput');
  const landmarkList = document.getElementById('landmarkList');
  
  // Создаем список всех достопримечательностей
  const allLandmarks = [];
  landmarksData.countries.forEach(country => {
    country.landmarks.forEach(landmark => {
      allLandmarks.push({
        ...landmark,
        country: country.country,
        flag: country.flag
      });
    });
  });
  
  // Заполняем datalist
  allLandmarks.forEach(landmark => {
    const option = document.createElement('option');
    option.value = landmark.name;
    landmarkList.appendChild(option);
  });
  
  // Обработчик поиска
  landmarkInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const foundLandmark = allLandmarks.find(landmark => 
      landmark.name.toLowerCase().includes(searchTerm)
    );
    
    if (foundLandmark) {
      const country = landmarksData.countries.find(c => c.country === foundLandmark.country);
      if (country) {
        selectCountry(country);
        // Подсвечиваем найденную достопримечательность
        setTimeout(() => {
          highlightMarker(foundLandmark);
        }, 100);
      }
    }
  });
}

// Обновление статистики
function updateStats() {
  const totalCountries = landmarksData.countries.length;
  const totalLandmarks = landmarksData.countries.reduce((sum, country) => 
    sum + country.landmarks.length, 0
  );
  
  document.getElementById('totalCountries').textContent = totalCountries;
  document.getElementById('totalLandmarks').textContent = totalLandmarks;
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
  initMap();
  populateCountryList();
  setupLandmarkSearch();
  updateStats();
  
  // Обработчик кнопки сброса
  document.getElementById('resetButton').addEventListener('click', resetSearch);
});
