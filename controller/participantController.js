// Import Participant model
Participant = require("../model/participantModel");
Session = require("../model/sessionModel");

var ip = [
  "36.81.8.39",
  "115.178.245.1",
  "120.188.87.161",
  "182.2.70.49",
  "36.82.16.96",
  "182.1.113.100",
  "36.72.212.123",
  "180.242.214.231",
  "182.2.41.152",
  "182.0.198.123",
  "36.65.160.63",
  "182.2.40.27",
  "36.74.208.155",
  "182.2.71.32",
  "182.0.237.81",
  "103.79.154.187",
  "114.5.109.44",
  "182.2.37.131",
  "120.188.74.160",
  "182.2.39.180",
];

// Handle index actions
exports.index = function (req, res) {
  Participant.get(function (err, participants) {
    if (err) {
      return res.json({
        status: "error",
        message: err,
      });
    }

    participants = [].concat(participants).reverse();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: participants,
    });
  });
};

// Handle search actions
exports.search = function (req, res) {
  Participant.find(
    {
      name: {
        $regex: req.params.name,
      },
    },
    function (err, participants) {
      if (err) {
        return res.json({
          status: "error",
          message: err,
        });
      }

      participants = [].concat(participants).reverse();

      return res.json({
        status: "success",
        message: "Participant Added Successfully",
        data: participants,
      });
    }
  );
};

// Handle index actions
exports.indexByPage = async function (req, res) {
  var page = req.params.page;
  try {
    var totalParticipant = await Participant.count();
    var participants = await Participant.find()
      .sort({ 'session.number': 1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();

    return res.json({
      status: "success",
      message: "Participant Added Successfully",
      data: {
        participants: participants,
        totalPage: Math.ceil(totalParticipant / 10),
      },
    });
  } catch (err) {
    return res.send(err);
  }
};

// Handle view actions
exports.view = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);
    return res.json({
      message: "participants Detail Loading...",
      data: participant,
    });
  });
};

// Handle create actions
exports.new = function (req, res) {

  var participants = [
    {
      "name": "Sastra Yudha Pamungkas",
      "nim": "H0719167",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "sastrayudha@student.uns.ac.id"
    },
    {
      "name": "Fèbri Muhammad N",
      "nim": "H0719070",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "febri.muhnas@student.uns.ac.id"
    },
    {
      "name": "Gina Safira Picasso",
      "nim": "H0719082",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "ginasafiraa@student.uns.ac.id"
    },
    {
      "name": "Febrian Maharani",
      "nim": "H0719071",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "febrianmaharani@student.uns.ac.id"
    },
    {
      "name": "Muhammad Dio Nugroho Anindra Putra",
      "nim": "H0719124",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "Dioanindra@student.uns.ac.id"
    },
    {
      "name": "Wahid Mu'tashim Billah",
      "nim": "H0716123",
      "departemen": "Agroteknologi",
      "year": 2016,
      "email": "wahidmutashim@student.uns.ac.id"
    },
    {
      "name": "Agustina Melani Widyowati",
      "nim": "H0719002",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "agustinamelani30@students.uns.ac.id"
    },
    {
      "name": "Aulia Rahma",
      "nim": "H0717021",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "rahma.asa27@student uns.ac.id"
    },
    {
      "name": "Moch. Irfan Khakim",
      "nim": "H0720106",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "irfanhkm11@student.uns.ac.id"
    },
    {
      "name": "Mohamad Abror Hidayat",
      "nim": "H0720107",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "muhammadabrorhidayat@student.uns.ac.id"
    },
    {
      "name": "Catalina Dara Ayu Az-Zahra",
      "nim": "H0718043",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "catalinadara@student.uns.ac.id"
    },
    {
      "name": "Putri Febri Pranata",
      "nim": "H0719150",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "putrifebripranata@student.uns.ac id"
    },
    {
      "name": "NADIYA NUR AINI",
      "nim": "H0718113",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "nadiyanuraini@student.uns.ac.id"
    },
    {
      "name": "Bianka Tresta Nurlitha",
      "nim": "H0720033",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "biankanurlitha@student.uns.ac.id"
    },
    {
      "name": "Salma Nabila Huwaida",
      "nim": "H0719165",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "salmanhwd@student.uns.ac.id"
    },
    {
      "name": "Peni Agustini",
      "nim": "H0719148",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "peniagustini@gmail.com"
    },
    {
      "name": "Giftiyatul Fitriah",
      "nim": "H0719081",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "giftiyatul.fitriah19@student.uns.ac.id"
    },
    {
      "name": "Elvira Frizalino Salam",
      "nim": "H0719061",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "elvirafrizalino@student.uns.ac.id"
    },
    {
      "name": "Khansa' Rana Afifah",
      "nim": "H0719103",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "khansaranaa@student.uns.ac.id"
    },
    {
      "name": "Angelo Di Lorenzo",
      "nim": "H0719011",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "angelodlorenzo@student.uns.ac.id"
    },
    {
      "name": "Erna Parmelina",
      "nim": "H0720059",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "eparmelina@student.uns.ac.id"
    },
    {
      "name": "Nur Alim",
      "nim": "H0719140",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "nuralim145_barru@student.uns"
    },
    {
      "name": "CAHYO DWI PRIYAMBODO",
      "nim": "H0719040",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "Cahyodwi@student.uns.ac.id"
    },
    {
      "name": "Firda noor komala",
      "nim": "H0718066",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "firdanorkumala14@student.uns.ac.id"
    },
    {
      "name": "Asma Nur Zakiyah",
      "nim": "H0719023",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "asmazakiyah@student.uns.ac.id"
    },
    {
      "name": "Lisannawati Dian Nirbayati",
      "nim": "H0719111",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "lisannawatidian83@student.uns.ac.id"
    },
    {
      "name": "Nafi'a Nurul Firdaus",
      "nim": "H0718114",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "nafianurul.09@student.uns.ac.id"
    },
    {
      "name": "Zaenab zakiyyatun Qalbi",
      "nim": "H0719192",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "zaenab0709@student.uns.ac.id"
    },
    {
      "name": "Qonita Rahma",
      "nim": "H0718130",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "qonitarahma12@student.uns.ac.id"
    },
    {
      "name": "Ivan Goldwin",
      "nim": "H0720095",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "ivangoldwin@student.uns.ac.id"
    },
    {
      "name": "Adinda Vietrannissa",
      "nim": "H0718003",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "Adindavietra@student.uns.ac.id"
    },
    {
      "name": "Dian Nugi Paramita",
      "nim": "H0717037",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "diannugip@student.uns.ac.id"
    },
    {
      "name": "Rosdiana Ayuningtyas",
      "nim": "H0719163",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "ros_diana1008@student.uns.ac.id"
    },
    {
      "name": "Addienna Afifah",
      "nim": "H0718001",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "addiennafifah25@student.uns.ac.id"
    },
    {
      "name": "Gabriela Deananda Meysanti",
      "nim": "H0720070",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "nandadea01@student.uns.ac.id"
    },
    {
      "name": "Aulia salsa defani",
      "nim": "H0718034",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "auliasalsa2000@student.uns.ac.id"
    },
    {
      "name": "Iskandar",
      "nim": "H0719094",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "kandarcuy@student.uns.ac.id"
    },
    {
      "name": "Refitri Yanuar Milenia",
      "nim": "H0719154",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "ryanuarmilenia@student.uns.ac.id"
    },
    {
      "name": "Panji Tresna Janatha",
      "nim": "H0719147",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "panjitresnajanatha@student.uns.ac.id"
    },
    {
      "name": "Annisa Luthfia Rahma",
      "nim": "H0719014",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "annisa_luthfia76@student.uns.ac.id"
    },
    {
      "name": "Dinayati",
      "nim": "H0719052",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "dinayati872@student.uns.ac.id"
    },
    {
      "name": "Adhitama Andrian Pramana",
      "nim": "H0719001",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "adhitamaand@student.uns.ac.id"
    },
    {
      "name": "Novita Romadhani",
      "nim": "H0719139",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "novitaromadhani2116@student.uns.ac.id"
    },
    {
      "name": "Fajar n",
      "nim": "H0716049",
      "departemen": "Agroteknologi",
      "year": 2016,
      "email": "bramastafjr@student.uns.ac.id"
    },
    {
      "name": "tagam",
      "nim": "H0718149",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "tagam@student.uns.ac.id"
    },
    {
      "name": "Novita Nur Rahmadhani",
      "nim": "H0719138",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "novitanurrahmadhani17@student.uns.ac.id"
    },
    {
      "name": "M Aziz Nurdiyanto",
      "nim": "H0718101",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "maziznurdiyanto@student.uns.ac.id"
    },
    {
      "name": "Lelya Gussyanti",
      "nim": "H0718088",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "lelyagussyanti@student.uns.ac.id"
    },
    {
      "name": "Alfika Rizka Hapsari",
      "nim": "H0719007",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "Alfikarizkahapsari@gmail.com"
    },
    {
      "name": "FRANCISCA SYAHRANI ADE NUGROHO",
      "nim": "H0719078",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "syahranifrancisca@student.uns.ac.id"
    },
    {
      "name": "Elisa Dewanti",
      "nim": "H0719057",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "elisadewanti@student.uns.ac.id"
    },
    {
      "name": "Elisabeth Kireina Vianney",
      "nim": "H0719058",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "kireinavianney@student.uns.ac.id"
    },
    {
      "name": "Bayutama Rahmawan",
      "nim": "H0719034",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "bayutamar@student.uns.ac.id"
    },
    {
      "name": "Rio Aditya Pratama",
      "nim": "H0720144",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "rioa829@student.uns.ac.id"
    },
    {
      "name": "Franciska Linda",
      "nim": "H0719079",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "franciskalinda2508@student.uns.ac.id"
    },
    {
      "name": "Nurul Hanifah Ranastuti",
      "nim": "H0720129",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "nurulhanifahr16@student.uns.ac.id"
    },
    {
      "name": "Nadia Azzahro",
      "nim": "H0720122",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "nadiaazzahro@student.uns.ac.id"
    },
    {
      "name": "Dhanuaji Alghifari Harnowo",
      "nim": "H0720050",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "dhanuaji2002@student.uns.ac.id"
    },
    {
      "name": "Muhammad Ihsan",
      "nim": "H0720116",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "sansroland@student.uns.ac.id"
    },
    {
      "name": "Annisa Nur Rahmawati",
      "nim": "H0720018",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "annisanr@student.uns.ac.id"
    },
    {
      "name": "Helvany Arli Adisti",
      "nim": "H0720081",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "elvaniarlianti12@student.uns.ac.id"
    },
    {
      "name": "Gandis Pramudya Wardani",
      "nim": "H0720074",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "gandisp28@student.uns.ac.id"
    },
    {
      "name": "Resa Angga Dwi Saputra",
      "nim": "H0720142",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "resaangga29@student.uns.ac.id"
    },
    {
      "name": "Rafidah Agnesa Candra Kirana",
      "nim": "H0720136",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "rafidahack@student.uns.ac.id"
    },
    {
      "name": "Maria Lintang Chrismas Ayu",
      "nim": "H0719115",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "marialintang@student.uns.ac.id"
    },
    {
      "name": "Miftahul Jannah",
      "nim": "H0720104",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "jannahmiftahul2109@student.uns.ac.id"
    },
    {
      "name": "Hesti Triyana",
      "nim": "H0720083",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "hestitriyana@student.uns.ac.id"
    },
    {
      "name": "Grefta Jessika Sanni",
      "nim": "H0720077",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "greftaajsn@student.uns.ac.id"
    },
    {
      "name": "Rafif Fairuz Qalbi",
      "nim": "H0720137",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "fairuzqalbi@student.uns.ac.id"
    },
    {
      "name": "Annisa Nur Fadhillah",
      "nim": "H0720017",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "anisfdh123@student.uns.ac.id"
    },
    {
      "name": "Nabila Dwita Putri",
      "nim": "H0720121",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "Ndwitaputri@student.uns.ac.id"
    },
    {
      "name": "Kekeh Fadhilah",
      "nim": "H0720096",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "kekehfadhilah50@student.uns.ac.id"
    },
    {
      "name": "Rahmat Rizqi",
      "nim": "H0720138",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "rahmatrizqi27@stusent.uns.ac.id"
    },
    {
      "name": "Zahid Jalaluddin Haqani",
      "nim": "H0720175",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "zahidhaqani@student.uns.ac.id"
    },
    {
      "name": "Fiska Elvina Oktin",
      "nim": "H0720068",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "fiskana02@student.uns.ac"
    },
    {
      "name": "Novia Rahma Azzahra",
      "nim": "H0719136",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "noviazzahra.24@student.uns.ac.id"
    },
    {
      "name": "ADE WIDYA PUTRI",
      "nim": "H0720002",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "adewidya0102@student.uns.ac.id"
    },
    {
      "name": "Muhammad Zafran Maqarim",
      "nim": "H0720118",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "zafranaffifi119@student.uns.ac.id"
    },
    {
      "name": "Nanda Saskya",
      "nim": "H0719132",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "nandasaskya@student.uns.ac.id"
    },
    {
      "name": "Ayu Lestari",
      "nim": "H0718035",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "ayu_lestari017@student.uns.ac.id"
    },
    {
      "name": "Safira Nadhifatul Ardhina",
      "nim": "H0717128",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "Safiraardhin@student.uns.ac.id"
    },
    {
      "name": "Dewi Ayu Panuntun",
      "nim": "H0719048",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "suksesterus@student.uns.ac.id"
    },
    {
      "name": "Rahayu Utaminingsih",
      "nim": "H0718132",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "rahayuutaminingsih1@gmail.com"
    },
    {
      "name": "Siti Salsabila",
      "nim": "H0719172",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "sitisalsabila@student.uns.ac.id"
    },
    {
      "name": "NOR ISNAENI DWI ARISTA",
      "nim": "H0717102",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "dewi.arista99@student.uns.ac.id"
    },
    {
      "name": "Afifah Wahyuning Ramadhany",
      "nim": "H0718005",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "afifahwr22@student.uns.ac.id"
    },
    {
      "name": "Pratekwo Kurnia Aji",
      "nim": "H0718127",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "pratekwo@student.uns.ac.id"
    },
    {
      "name": "Ajeng Yunita Puja Sari",
      "nim": "H0718010",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "ajengyps@student.uns.ac.id"
    },
    {
      "name": "Dhea Clarista Tri Wulansuci",
      "nim": "H0718050",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "dheaclarista30@student.uns.ac.id"
    },
    {
      "name": "Satya Primasasta Zulhivan",
      "nim": "H0717132",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "satyaprimasasta@student.uns.ac.id"
    },
    {
      "name": "Haidar Miftahul Falah",
      "nim": "H0720078",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "kaitohaidar@student.uns.ac.id"
    },
    {
      "name": "Umniyati Zulfa Salsabila",
      "nim": "H0720168",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "umniyatizulfa19@student.uns.ac.id"
    },
    {
      "name": "Kholid Rifai",
      "nim": "H0720097",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "rifaikholid@student.uns.ac.id"
    },
    {
      "name": "Elvina Emalia",
      "nim": "H0720057",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "elvina2468_emalia@student.uns.ac.id"
    },
    {
      "name": "prakosa",
      "nim": "H0718126",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "prakosa.dj@student.uns.ac.id"
    },
    {
      "name": "Nia gusniar",
      "nim": "H0719135",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "gusniarnia08@student.uns.ac.id"
    },
    {
      "name": "Fadila Kharisma",
      "nim": "H0720060",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "fadilakharisma21@student.uns.ac.id"
    },
    {
      "name": "Aprilia Setia Agustin",
      "nim": "H0719018",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "apriliasetia12@student.uns.ac.id"
    },
    {
      "name": "Bramesty Laras Hanif",
      "nim": "H0719038",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "bramestylaras1006@student.uns.ac.id"
    },
    {
      "name": "Annisa Nur Hazizah",
      "nim": "H0719016",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "Annisanur799@student.uns.ac.id"
    },
    {
      "name": "Arda Octavarika Nurrahmah",
      "nim": "H0719019",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "ardaoctavarika29@student.uns.ac.id"
    },
    {
      "name": "Yunita Ratna Fauziah",
      "nim": "H0719189",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "yunitaratnaf@student.uns.ac.id"
    },
    {
      "name": "Dito Fandi Prasetyo",
      "nim": "H0720053",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "ditofandi@student.uns.ac.id"
    },
    {
      "name": "Retno Ermawati",
      "nim": "H0719156",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "retnowati8687@student.uns.ac.id"
    },
    {
      "name": "M.FARIZ FAKRURRAHMAN",
      "nim": "H0720100",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "faarizh@student.uns.ac.id"
    },
    {
      "name": "Hibatulloh azizi",
      "nim": "H0720084",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "Hibatullahazizi_54@student.uns.ac.id"
    },
    {
      "name": "Dhiasty Ekananda Anindyaswari",
      "nim": "H0717035",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "dhiasty@student.uns.ac.id"
    },
    {
      "name": "Fathoniyah Purnama Sari",
      "nim": "H0717055",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "nanaspf@student.uns.ac.id"
    },
    {
      "name": "Rizal Wirawan",
      "nim": "H0719160",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "zale@student.uns.ac.id"
    },
    {
      "name": "Bravilio Fitra Anggara",
      "nim": "H0717024",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "anggarafitra@student.uns.ac.id"
    },
    {
      "name": "Daffa Maulana Muhammad",
      "nim": "H0717028",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "fammaoel@student.uns.ac.id"
    },
    {
      "name": "atria herviana",
      "nim": "H0718033",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "atriaherviana@student.uns.ac.id"
    },
    {
      "name": "Galuh Fadwa Ammi Putri",
      "nim": "H0717059",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "galuhfadwa@student.uns.ac.id"
    },
    {
      "name": "Christian Ardianto Wibowo",
      "nim": "H0719044",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "christianawibowo10@student.uns.ac.id"
    },
    {
      "name": "Aisyah Taqiyyah Fa'izah",
      "nim": "H0719004",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "aisyah.taqiyyahf18@student.uns.ac.id"
    },
    {
      "name": "Erika Ananda Pradita Putri",
      "nim": "H0719062",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "rkaa_1@student.uns.ac.id"
    },
    {
      "name": "Yudhi Ardhani",
      "nim": "H0719188",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "yudhiar21@student.uns.ac.id"
    },
    {
      "name": "Ririn Haniffatussolikhah",
      "nim": "H0717116",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "rinhaniffa@student.uns.ac.id"
    },
    {
      "name": "Litasya Khoirotun Hisaan",
      "nim": "H0719112",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "litasyakh25@student.uns.ac.id"
    },
    {
      "name": "Muhammad Hazza Wildan Farabi",
      "nim": "H0717090",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "muhammadhazza@student.uns.ac.id"
    },
    {
      "name": "Ekayanti Tyas Utami",
      "nim": "H0717045",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "eka17utami@student.uns.ac.id"
    },
    {
      "name": "Canakya",
      "nim": "H0717026",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "canakyacoco@student.uns.ac.id"
    },
    {
      "name": "M Tegar Anadyasa S",
      "nim": "H0717094",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "Mtegar92@student.uns.ac.id"
    },
    {
      "name": "Ardan Imam Perkasa",
      "nim": "H0719020",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "ardan_imam@student.uns.ac.id"
    },
    {
      "name": "Dea Puspita",
      "nim": "H0720045",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "deapuspita@student.uns.ac.id"
    },
    {
      "name": "Aulia Hanna Albarri",
      "nim": "H0720027",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "hannaalbarri.24@student.uns.ac.id"
    },
    {
      "name": "Rizki Nur Miati",
      "nim": "H0720148",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "rizkinurmiati211201@student.uns.ac.id"
    },
    {
      "name": "Dita Apriliani Pratiwi",
      "nim": "H0720052",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "ditaaprilianipratiwi@student.uns.ac.id"
    },
    {
      "name": "Rissa Kurnia Anggraini",
      "nim": "H0720145",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "rissakurniaanggraini@student.uns.ac.id"
    },
    {
      "name": "Birgita Tessa Crossyta",
      "nim": "H0720036",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "btcrossyta@student.uns.ac.id"
    },
    {
      "name": "Roro Fajriyati",
      "nim": "H0717124",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "rorofajriyati@student.uns.ac.id"
    },
    {
      "name": "Ayu Dilla Anggreani",
      "nim": "H0720030",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "ayudillaa@student.uns.ac.id"
    },
    {
      "name": "Ichsan Nugrhadi Sukamto",
      "nim": "H0720087",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "ichsansn02@student.uns.ac.id"
    },
    {
      "name": "Pradita Eka Septiana",
      "nim": "H0720135",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "praditaekaseptiana@student.uns.ac.id"
    },
    {
      "name": "Iistikharoh",
      "nim": "H017065",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "caca_1272007@student.uns.ac.id"
    },
    {
      "name": "Inayah Sekar Baiti",
      "nim": "H0720089",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "inayahsekar@student.uns.ac.id"
    },
    {
      "name": "Firyal Labibah Hambali",
      "nim": "H0719076",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "firyallhambali@student.uns.ac.id"
    },
    {
      "name": "Rohmah Saptowati",
      "nim": "H0720151",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "rohmahspt@student.uns.ac.id"
    },
    {
      "name": "Aminudin",
      "nim": "H0720013",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "Aminudin_31@student.uns.ac.id"
    },
    {
      "name": "Daniel Krisna Murti",
      "nim": "H0720042",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "danielmurty3@student.uns.ac.id"
    },
    {
      "name": "Chatarina Dian Pertiwi Bere",
      "nim": "H0720039",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "chatarinadian@student.uns.ac.id"
    },
    {
      "name": "Sabrina Fauziah",
      "nim": "H0720156",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "sabrinafauziah25@student.uns.ac.id"
    },
    {
      "name": "Musa Irawan",
      "nim": "H0720120",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "musa17@student.uns.ac.id"
    },
    {
      "name": "Fedoryan Akmal Taufiqurahman",
      "nim": "H0720066",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "fedoryan93@student.uns.ac.id"
    },
    {
      "name": "Naufal Ghazy Wicaksono",
      "nim": "H0717098",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "naufalghazy@student.uns.ac.id"
    },
    {
      "name": "David Kuntoro Salim",
      "nim": "H0720044",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "davidkuntorosalim12@student.uns.ac.id"
    },
    {
      "name": "Adiba Safira Rizqi",
      "nim": "H0720003",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "adibasafira@student.uns.ac.id"
    },
    {
      "name": "Desy Amalia Amanaf",
      "nim": "H0717032",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "desy.amalia05@student.uns.ac.id"
    },
    {
      "name": "Fadhillah Brimantara",
      "nim": "H0719065",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "iamfadhillah@student.uns.ac.id"
    },
    {
      "name": "Vania Widya Eka Kristiani",
      "nim": "H0720170",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "vaniawidya17@student.uns.ac"
    },
    {
      "name": "Titis Suparwati Setiyaningsih",
      "nim": "H0718154",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "titissuparwati@student.uns.ac.id"
    },
    {
      "name": "Indriawati Anggraini",
      "nim": "H0720093",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "anggrainiindriiawati@student.uns.ac.id"
    },
    {
      "name": "Chesya Grace Andira",
      "nim": "H0719043",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "chesyacga@student.uns.ac.id"
    },
    {
      "name": "Latiffah Indriana Septin",
      "nim": "H0719107",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "latiffahindrianas@gmail.com"
    },
    {
      "name": "Farathia Jasmine",
      "nim": "H0719067",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "farathiaj@student.uns.ac.id"
    },
    {
      "name": "Salsa nur fitriani",
      "nim": "H0720158",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "salsafitriani@student.ins.ac.id"
    },
    {
      "name": "Calista Dottie Indriashari",
      "nim": "H0720038",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "calista.dottie@student.uns.ac.id"
    },
    {
      "name": "Novilia Romadhona",
      "nim": "H0719137",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "noviliaromadhona.23@student.uns.ac.id"
    },
    {
      "name": "Nurin Adyanisa Fajrin",
      "nim": "H0719143",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "nurin_adyanisa2001@student.uns.ac.id"
    },
    {
      "name": "Ridwan Budi Saputra",
      "nim": "H0719157",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "rdwnridi@student.uns.ac.id"
    },
    {
      "name": "Asyifa Nur Fatimah Setiyadi",
      "nim": "H0720025",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "asyifanurfs@student.uns.ac.id"
    },
    {
      "name": "Siti Nur Aisyah",
      "nim": "H0720163",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "snaisyah138@student.uns.ac.id"
    },
    {
      "name": "Novi Safitri",
      "nim": "H0720128",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "novisafitri@student.uns.ac.id"
    },
    {
      "name": "Briliana Amelia Silvi",
      "nim": "H0720037",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "basilvi@student.uns.ac.id"
    },
    {
      "name": "Vania Ananda",
      "nim": "H0717143",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "Vaniaananda0307@student.uns.ac.id"
    },
    {
      "name": "Aziz Kusuma Wardana",
      "nim": "H0719032",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "azizkw13@student.uns.ac.id"
    },
    {
      "name": "Indri Yana Yuniati",
      "nim": "H0720092",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "indriyana@student.uns.ac.id"
    },
    {
      "name": "Puput Maryani",
      "nim": "H0718129",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "maryannipuput@student.uns.ac.id"
    },
    {
      "name": "Galih Adithya Aziz",
      "nim": "H0720071",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "galihadithyaa@student.uns.ac.id"
    },
    {
      "name": "Anastasia Nuri Figlia Carina",
      "nim": "H0720016",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "carinafiglia@student.uns.ac.id"
    },
    {
      "name": "Prasanti Laksita Karimah",
      "nim": "H0719149",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "prasanti_laksita@student.uns.ac.id"
    },
    {
      "name": "zadia zora mufida",
      "nim": "H0719191",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "zadiazora@student.uns.ac.id"
    },
    {
      "name": "Nanda Fajar G",
      "nim": "H0719131",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "nandafajar_19@student.uns.ac.id"
    },
    {
      "name": "Desfinenda Calistarajni",
      "nim": "H0720046",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "desfinendacalista@student.uns.ac.id"
    },
    {
      "name": "Nur Fitria Agustina",
      "nim": "H0719141",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "nurfitriaagustina17@student.uns.ac.id"
    },
    {
      "name": "M. Mumtazul Fikri Nurfiansyah",
      "nim": "H0718091",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "mumtazul@student.uns.ac.id"
    },
    {
      "name": "Qothrunnada Salma",
      "nim": "H0719151",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "salmashofi62@student.uns.ac.id"
    },
    {
      "name": "Muhammad Luthfi Akbar",
      "nim": "H0719129",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "muhammadluthfi.official@student.uns.ac.id"
    },
    {
      "name": "Srika Rahmawati",
      "nim": "H0717137",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "ikasrika6@student.uns.ac.id"
    },
    {
      "name": "Dina Mardiyana",
      "nim": "H0718053",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "dinamardiyanaa23@student.uns.ac.id"
    },
    {
      "name": "Okta Viana Faridaturrofiah",
      "nim": "H0719145",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "Oktavianaf@student.uns.ac.id"
    },
    {
      "name": "Alfian Haryudana",
      "nim": "H0718012",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "h2000alfian@student.uns.ac.id"
    },
    {
      "name": "Alifiati saifira salma",
      "nim": "H0717010",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "alifiatisaifira@student.uns.ac.id"
    },
    {
      "name": "Alfida Muthi'ah",
      "nim": "H0718013",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "alfida1@student.uns.ac.id"
    },
    {
      "name": "Muhammad Naufal Baihaqqi",
      "nim": "H0717093",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "naufal_b@student.uns.ac.id"
    },
    {
      "name": "Andika Nugrahaningrum",
      "nim": "H0719010",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "andikangrm@student.uns.ac.id"
    },
    {
      "name": "Farhan Syaeful Fatah",
      "nim": "H0717053",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "Farhansyaeful@student.uns.ac.id"
    },
    {
      "name": "Nur Uswatun Khasanah",
      "nim": "H0719142",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "nuruswatun_23@student.uns.ac.id"
    },
    {
      "name": "Chrisiwi Mustikaning Ati",
      "nim": "H0720040",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "chrisiwima@student.uns.ac.id"
    },
    {
      "name": "Ratri Widyawati",
      "nim": "H0719153",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "ratriwidyawati10@student.uns.ac.id"
    },
    {
      "name": "Jeffrizal Muhammad",
      "nim": "H0719097",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "jeffrizalmuhammad@student.uns.ac.id"
    },
    {
      "name": "Ali Mustofa",
      "nim": "H0718015",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "aliemustofa32@student.uns.ac.id"
    },
    {
      "name": "Marsa Al Hanan Sifai",
      "nim": "H0718093",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "marsasifai95@student.uns.ac.id"
    },
    {
      "name": "Fauziyah Umi Adiningtyas",
      "nim": "H0719069",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "ucik.adiningtyas12@student.uns.ac.id"
    },
    {
      "name": "Ariya Mahmud Tahannatha Agung",
      "nim": "H0719021",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "ariyamahmud12@student.uns.ac.id"
    },
    {
      "name": "Taufik Cahya Raharja",
      "nim": "H0719176",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "taufikcahya@student.uns.ac.id"
    },
    {
      "name": "BRQ DAGFA INKA MAHADIKA",
      "nim": "H0719039",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "Brqdagfa6@student.uns.ac.id"
    },
    {
      "name": "Mohammad Daffa Mahadika Pradipta",
      "nim": "H0718099",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "daffadiya@student.uns.ac.id"
    },
    {
      "name": "Devi Mei Linda Kurniawati",
      "nim": "H0720047",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "devilinda_25@student.uns.ac.id"
    },
    {
      "name": "Fatiha Nida Khoiriya",
      "nim": "H0717056",
      "departemen": "Agroteknologi",
      "year": 2017,
      "email": "epatihanida@student.uns.ac.is"
    },
    {
      "name": "Yasin Nabil Ajaba",
      "nim": "H0718160",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "yaseennabil@student.uns.ac"
    },
    {
      "name": "Riza Anjariyani Resnanti",
      "nim": "H0720146",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "rizaanjariyani@student.uns.ac.id"
    },
    {
      "name": "Sela Firnanda I",
      "nim": "H0720160",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "selafirna@student.uns.ac.id"
    },
    {
      "name": "Oktavia Khoirun Nisa",
      "nim": "H0720133",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "via92498@student.uns.ac.id"
    },
    {
      "name": "Austina Oktavia Putri",
      "nim": "H0720028",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "austinaputri04@student.uns.ac.id"
    },
    {
      "name": "Sholikha Eka",
      "nim": "H0718144",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "sholikha.e@student.uns.ac.id"
    },
    {
      "name": "Yogi Rafina Nugrahani",
      "nim": "H0720172",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "yogirafina34@student.uns.ac.id"
    },
    {
      "name": "Alvito Seno Bachtiar",
      "nim": "H0720012",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "vito.alvito724020@student.uns.ac.id"
    },
    {
      "name": "Afifah Ika Putri",
      "nim": "H0720005",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "afifahikaputri@student.uns.ac.id"
    },
    {
      "name": "Ana Farah Rafidah",
      "nim": "H0720015",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "ana.farahrafidah@student.uns.ac.id"
    },
    {
      "name": "Aldarisma Nur Aini",
      "nim": "H0720008",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "aldarismanur@student.uns.ac.id"
    },
    {
      "name": "Azka Tsurayya",
      "nim": "H0720032",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "tsurayyaazka9@student.uns.ac.id"
    },
    {
      "name": "Autiya Za'im Mar'atu Hanifah",
      "nim": "H0720029",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "autiyazaim28@student.uns.ac.id"
    },
    {
      "name": "Arina Sekar Basuki",
      "nim": "H0720021",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "arinasekarb@student.uns.ac.id"
    },
    {
      "name": "Daffa Aqila Fadhlurrahman",
      "nim": "H0720041",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "Daffa.aqilla.fr_15@student.uns.ac.id"
    },
    {
      "name": "Adinda Kusnul Khotimah",
      "nim": "H0720004",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "adindakusnulk@student.uns.ac.id"
    },
    {
      "name": "Aisha Hanifah Puspa Riyanto",
      "nim": "H0720007",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "aishahanifah.ah@student.uns.ac.id"
    },
    {
      "name": "Nurunnisa Shafa Aliya",
      "nim": "H0720131",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "nurunnisaaliya@student.uns.ac.id"
    },
    {
      "name": "Syanly Hanan Al Sidan Prayitno",
      "nim": "H0720165",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "syanlyhnn@student.uns.ac.id"
    },
    {
      "name": "Wisnu Prasetyo Aji",
      "nim": "H0720171",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "wisnu_prasetyo31@student.uns.ac.id"
    },
    {
      "name": "Fiorella Diva Azzahra",
      "nim": "H0720067",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "fiorelladivaa@student.uns.ac.id"
    },
    {
      "name": "Alfino Wahyu Primayuda",
      "nim": "H0720009",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "alf27wp@student.uns.ac.id"
    },
    {
      "name": "Galuh Intan Kumalasari",
      "nim": "H0720073",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "kumalasariintan@student.uns.ac.id"
    },
    {
      "name": "Fajar Anwar Hidayad",
      "nim": "H0720062",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "Fajarhiadayad10@student.uns.ac.id"
    },
    {
      "name": "Deviana Dwi Saputri",
      "nim": "H0720048",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "devianadwi@student.uns.ac.id"
    },
    {
      "name": "Fara Nabila",
      "nim": "H0720064",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "faranabila127@student.uns.ac.id"
    },
    {
      "name": "Vania setowati ubayadi",
      "nim": "H0720169",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "vaniasetowati@student.uns.ac.id"
    },
    {
      "name": "Meilia Ayu Mutiara",
      "nim": "H0720103",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "meiliaayumutiara@student.uns.ac.id"
    },
    {
      "name": "Husna Warsila Sujono",
      "nim": "H0720085",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "husnawarsila@student.uns.ac.id"
    },
    {
      "name": "Jen Priatama Nugraha",
      "nim": "H0718078",
      "departemen": "Agroteknologi",
      "year": 2018,
      "email": "jenpriataman123@student.uns.ac.id"
    },
    {
      "name": "Fauzan Hariawan",
      "nim": "H0720065",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "fzn.hrwn10@student.uns.ac.id"
    },
    {
      "name": "Kristina ayu isnaeni",
      "nim": "H0720098",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "Kristinaayu859@student.uns.ac.id"
    },
    {
      "name": "Audhia An Nafisa",
      "nim": "H0719026",
      "departemen": "Agroteknologi",
      "year": 2019,
      "email": "audhiaa0208@student.uns.ac.id"
    },
    {
      "name": "Millata Akmaliya H",
      "nim": "H0720105",
      "departemen": "Agroteknologi",
      "year": 2020,
      "email": "millataakmaliya@student.uns.ac.id"
    }
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fdc7afeb2ced16b7fcb3f42";
    participant.session.number = 4;
    participant.session.min = new Date("2020-12-20 21:00:00.000+07:00");
    participant.session.max = new Date("2020-12-20 21:00:00.000+07:00");

    // Save and validate
    participant.save(function (err) {
      if (err) return res.status(500).json(err);

      Session.findById(participant.session.id, function (err, session) {
        if (err) return res.status(500).json(err);
        session.total_participant++;
        Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
          (session) => {
            if (session) {
            } else {
            }
          }
        );
      });

      /*return res.json({
        message: "New Participant Created!",
        data: participant,
      });*/
    });
  })
};

// Handle update actions
exports.update = function (req, res) {
  var moveSession = false;
  var oldSession = {};
  var newSession = {};

  Participant.findById(req.params.id, function (err, participant) {
    if (err) throw err;
    if (participant.session.id != req.body.sessionId) {
      moveSession = true;
      oldSession = participant.session;
      newSession = {
        id: req.body.sessionId,
        number: req.body.sessionNumber,
        start: new Date(req.body.sessionMin),
        end: new Date(req.body.sessionMax),
      };
    }
  });

  Participant.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        nim: req.body.nim,
        email: req.body.email,
        "session.id": req.body.sessionId,
        "session.number": req.body.sessionNumber,
        "session.min": new Date(req.body.sessionMin),
        "session.max": new Date(req.body.sessionMax),
      },
    }
  )
    .then((participant) => {
      if (participant) {
        if (moveSession) {
          Session.findById(newSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant++;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });

          Session.findById(oldSession.id, function (err, session) {
            if (err) throw err;
            session.total_participant--;
            Session.findOneAndUpdate(
              { _id: session._id },
              { $set: session }
            ).then((session) => {
              if (session) {
              } else {
              }
            });
          });
        }

        return res.json({
          message: "participant updated",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle vote actions
exports.vote = function (req, res) {
  Participant.findOneAndUpdate(
    { _id: req.body.id_participant },
    {
      $set: {
        "voting.id_candidate_bem": req.body.id_candidate_bem,
        "voting.id_candidate_legislatif": req.body.id_candidate_legislatif,
        "voting.id_candidate_legislatif2": req.body.id_candidate_legislatif2,
        "voting.time": Date(),
        "voting.counted": 0,
      },
    }
  )
    .then((participant) => {
      if (participant) {
        return res.json({
          message: "participant voted",
          data: participant,
        });
      } else {
        return res.json({
          message: "participant not found",
          data: {},
        });
      }
    })
    .catch((err) => {
      return res.json({
        message: "error",
        data: err,
      });
    });
};

// Handle delete actions
exports.delete = function (req, res) {
  Participant.findById(req.params.id, function (err, participant) {
    if (err) return res.send(err);

    Session.findById(participant.session.id, function (err, session) {
      if (err) throw err;
      session.total_participant--;
      console.log("sessions id:" + session._id);
      Session.findOneAndUpdate({ _id: session._id }, { $set: session }).then(
        (session) => {
          if (session) {
            Participant.deleteOne(
              {
                _id: req.params.id,
              },
              function (err, participant) {
                if (err) res.send(err);

                return res.json({
                  status: "success",
                  message: "Participant Deleted!",
                });
              }
            );
          } else {
          }
        }
      );
    });
  });
};

// Handle delete actions
exports.force_delete = function (req, res) {
  Participant.deleteOne(
    {
      _id: req.params.id,
    },
    function (err, participant) {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Participant Deleted!",
      });
    }
  );
};
