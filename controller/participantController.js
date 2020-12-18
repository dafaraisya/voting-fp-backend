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
      .sort({ _id: -1 })
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
      "name": "Fauza Dwi Saputri",
      "nim": "H0919045",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "Fauzadwi30@student.uns.ac.id"
    },
    {
      "name": "Tyo Isnandika",
      "nim": "H0920095",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "tyoisnandika98@student.uns.ac.id"
    },
    {
      "name": "Rizca Febry Tiana",
      "nim": "H0918076",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "rizcafebrytiana@student.uns.ac.id"
    },
    {
      "name": "Dara Ninggar Hanifa",
      "nim": "H0918021",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "daraninggar01@student.uns.ac.id"
    },
    {
      "name": "Putri Intan Berliana",
      "nim": "H0920076",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "putriintan@student.uns.ac.id"
    },
    {
      "name": "Navila rahma maulida",
      "nim": "H0920069",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "navilarahma@student.uns.ac.id"
    },
    {
      "name": "Rheza Ardian Saputra",
      "nim": "H0920082",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "rhezaardian@student.uns.ac.id"
    },
    {
      "name": "Pusti Nariswari Balindra",
      "nim": "H0920075",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "pusti@student.uns.ac.id"
    },
    {
      "name": "Sumayyah Hanaani09",
      "nim": "H0919097",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "hananots@student.uns.ac.id"
    },
    {
      "name": "Mikael Figo Bara Erlangga",
      "nim": "H0919065",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "figobara1@student.uns.ac.id"
    },
    {
      "name": "Karimah",
      "nim": "H0920049",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "karimah56@student.uns.ac.id"
    },
    {
      "name": "Masqueena Clarissa D",
      "nim": "H0920056",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "masqueenaclarissa@student.uns.ac.id"
    },
    {
      "name": "Shynta Yuliyani",
      "nim": "H0920086",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "shynyull127@student.uns.ac.id"
    },
    {
      "name": "Nadzifa Cindy Carissa Putri",
      "nim": "H0920064",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "nadzifac@student.uns.ac.id"
    },
    {
      "name": "Mu'adz",
      "nim": "H0919067",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "muadz01@student.uns.ac.id"
    },
    {
      "name": "Athallah Oxy Pradana",
      "nim": "H0920015",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "oxyathallah@student.uns.ac.id"
    },
    {
      "name": "Ahmad Alifandi",
      "nim": "H0920005",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "ahmad.alifandi77@student.uns.ac.id"
    },
    {
      "name": "Dita Amelia Wulandari",
      "nim": "H0919040",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "Ditaameliaw@student.uns.ac.id"
    },
    {
      "name": "Btari Naura Khalianatantry",
      "nim": "H0920025",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "btarinaura@student.uns.ac.id"
    },
    {
      "name": "Belinda Sonata",
      "nim": "H0919025",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "belindasonata_23@student.uns.ac.id"
    },
    {
      "name": "Noah Presley Norel",
      "nim": "H0920071",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "norelnoah@student.uns.ac.id"
    },
    {
      "name": "Rossinta Ratna Komala Sudarman",
      "nim": "H0919089",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "rossinta.r.k.s20@student.uns.ac.id"
    },
    {
      "name": "Reza Sintha Arbiniyanti",
      "nim": "H0920081",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "reza.sintha@student.uns.ac.id"
    },
    {
      "name": "Tirsa Anastasya Handoyo",
      "nim": "H0920093",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "tasyahandoyo@student.uns.ac.id"
    },
    {
      "name": "Aulia Nuril Khasanah",
      "nim": "H0920018",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "aulianuril@student.uns.ac.id"
    },
    {
      "name": "Karina Anastasya Putri",
      "nim": "H0919057",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "karinaanastasya@student.uns.ac.id"
    },
    {
      "name": "Qanita Syahshiyah",
      "nim": "H0920077",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "qanitasyahshiyah@student.uns.ac.id"
    },
    {
      "name": "Nadiatul Khusna",
      "nim": "H0919071",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "nadiaalkhusna22@student.uns.ac.id"
    },
    {
      "name": "Sarah al zahra",
      "nim": "H0920084",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "Sarahalzahra3@student.uns.ac.id"
    },
    {
      "name": "Tholibah Shofi Nur Syafaqoh",
      "nim": "H0920091",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "tholibahshofi22@student.uns.ac.id"
    },
    {
      "name": "Verena Elika Widyastari",
      "nim": "H0920097",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "verenaelika@student.uns.ac.id"
    },
    {
      "name": "Alya Sabrina Pramesti",
      "nim": "H0920007",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "alyasabrina2601@student.uns.ac.id"
    },
    {
      "name": "Annisa Fitri",
      "nim": "H0919015",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "annisaf27@student.uns.ac.id"
    },
    {
      "name": "Cysca Tyakusuma Pradani",
      "nim": "H0920027",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "cyscapradani@student.uns.ac.id"
    },
    {
      "name": "Annida Rachma Wijaya",
      "nim": "H0920010",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "annidarachmawijaya@student.uns.ac.id"
    },
    {
      "name": "Annisa Estiqomah",
      "nim": "H0919014",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "annisa.estiqomah@student.uns.ac.id"
    },
    {
      "name": "Fadil Nurhidayat",
      "nim": "H0920032",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "fadil_nurhidayat@student.uns.ac.id"
    },
    {
      "name": "Aurini Dwi Diana Sari",
      "nim": "H0920019",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "aurinidwi08@student.uns.ac.id"
    },
    {
      "name": "Muhammad Nanang Ilham Kusumah",
      "nim": "H0920060",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "ilhammkusumah@student.uns.ac.id"
    },
    {
      "name": "Sarah Mutmainah",
      "nim": "H0920085",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "mutmainahsarah14@student.uns.ac.id"
    },
    {
      "name": "Fannisa Wardhani",
      "nim": "H0919044",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "fannisa0910@student.uns.ac.id"
    },
    {
      "name": "Amalia Ristanti",
      "nim": "H0919005",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "amaliaristanti035@student.uns.ac.id"
    },
    {
      "name": "Siti Khodijah Putri Wibisono",
      "nim": "H0919093",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "putriwibisono@student.uns.ac.id"
    },
    {
      "name": "Arrum Hamidah Kurniasih",
      "nim": "H0920014",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "arrumhk_18@student.uns.ac.id"
    },
    {
      "name": "Flora Camellia",
      "nim": "H0919047",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "floracamellia@student.uns.ac.id"
    },
    {
      "name": "Fathimah Attaqiyyah",
      "nim": "H0918031",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "fattaqiyya29@student.uns.ac.id"
    },
    {
      "name": "Gabriale Unar sharif",
      "nim": "H0920040",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "gabriales29@student.uns.ac.id"
    },
    {
      "name": "Arlansyach Alwan Fauzan",
      "nim": "H0919020",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "arlanalwan2000@student.uns.ac.id"
    },
    {
      "name": "Zahro Musa",
      "nim": "H0917088",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2017,
      "email": "Musazzzahro99@student.uns.ac.id"
    },
    {
      "name": "Felita Fasya",
      "nim": "H0920035",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "felitafasya12@student.uns.ac id"
    },
    {
      "name": "Risa Rahmania",
      "nim": "H0919086",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "risarahmania@student.uns.ac.id"
    },
    {
      "name": "Nurul Fadhilah",
      "nim": "H0917062",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2017,
      "email": "fadhilahnurul14@student.uns.ac.id"
    },
    {
      "name": "Cholila Qurrotaa'yun",
      "nim": "H0919028",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "qcholila@gmail.com"
    },
    {
      "name": "Melati Sumbawati",
      "nim": "H0917090",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2017,
      "email": "melatisumbawati.01@student.uns.ac.id"
    },
    {
      "name": "Feby Meliana",
      "nim": "H0920034",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "melianafeby88@student.uns.ac.id"
    },
    {
      "name": "Lulu Hidayatul Khasanah",
      "nim": "H0918052",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "luluhidayatulk15@student.uns.ac.id"
    },
    {
      "name": "Alifah Rifdah Rosyidah",
      "nim": "H0919003",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "alifahrifdah@student.uns.ac.id"
    },
    {
      "name": "Fahimatunisa",
      "nim": "H0919042",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "fahima1112@student.uns.ac.id"
    },
    {
      "name": "Riska Ayu Kusnaedi",
      "nim": "H0919087",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "Riskaayukusnaedi@student.uns.ac.id"
    },
    {
      "name": "Eleazar Calvin Paimaon Ritonga",
      "nim": "H0919041",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "calvinritonga@student.uns.ac.id"
    },
    {
      "name": "Zunita Isnaini",
      "nim": "H0920100",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "zunitaisnaini@student.uns.ac.id"
    },
    {
      "name": "Rini Nurkholifah",
      "nim": "H0917071",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2017,
      "email": "rininurkholifah12@student.uns.ac.id"
    },
    {
      "name": "Ratna Ayu Kusumah",
      "nim": "H0919081",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "Ratnaayukusuma@student.uns.ac.id"
    },
    {
      "name": "Arina Nur'aini",
      "nim": "H0920013",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "arinanuraini@student.uns.ac.id"
    },
    {
      "name": "Naula Fitria Bilqis",
      "nim": "H0920067",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "fafafitria121@student.uns.ac.id"
    },
    {
      "name": "Naula Safitri Bilqis",
      "nim": "H0920068",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "naulasafitribilqis@student.uns.ac.id"
    },
    {
      "name": "Siska Nur Islami",
      "nim": "H0920087",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "siskanr0802@student.uns.ac.id"
    },
    {
      "name": "Maharani Anugrahani",
      "nim": "H0920055",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "maharanianugrahani@student.uns.ac.id"
    },
    {
      "name": "Auliya Syifa'ur Rahmah",
      "nim": "H0918015",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "auliyasyifa@student.uns.ac.id"
    },
    {
      "name": "Aulia Rahma Karunia",
      "nim": "H0918014",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "karuniaauliarahma@student.uns.ac.id"
    },
    {
      "name": "Anisya Zoelnanda",
      "nim": "H0917019",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2017,
      "email": "azoelnanda@student.uns.ac.id"
    },
    {
      "name": "Nabilatus Sa'diyah",
      "nim": "H0919069",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "nabilatussadiyah@student.uns.ac.id"
    },
    {
      "name": "Anita Nurul Apriliana",
      "nim": "H0919013",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "anitanurula@student.uns.ac.id"
    },
    {
      "name": "Alfina Ivo Fitriyanaisya",
      "nim": "H0920006",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "alfinaivf@student.uns.ac.id"
    },
    {
      "name": "Annida Faiha",
      "nim": "H0920009",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "annida.faiha22@student.uns.ac.id"
    },
    {
      "name": "Flora Yudhiasti Pramestika",
      "nim": "H0920038",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "floraypramestika@student.uns.ac.id"
    },
    {
      "name": "Adara Sagita Rosanti Primananda",
      "nim": "H0920002",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "adarasagita@student.uns.ac.id"
    },
    {
      "name": "azizah zahroh ihsaniah",
      "nim": "H0919024",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "azizahzahroh123@student.uns.ac.id"
    },
    {
      "name": "Dian Mahesti Pratiwi",
      "nim": "H0920030",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "dianmahesti@student.uns.ac.id"
    },
    {
      "name": "Besti Baramita",
      "nim": "H0920022",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "bestibaramita@student.uns.ac.id"
    },
    {
      "name": "Tri Wening Perwita Sari",
      "nim": "H0920094",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "triweningperwitasari@student.uns.ac.id"
    },
    {
      "name": "Addina Firdaus Latief",
      "nim": "H0920003",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "addinafila@student.uns.ac.id"
    },
    {
      "name": "Muhammad Arfa A",
      "nim": "H0920059",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "muhammadarfa@student.uns.ac.id"
    },
    {
      "name": "Lyra Angelica",
      "nim": "H0920054",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "lyraanglc@student.uns.ac.id"
    },
    {
      "name": "Farandi Angesti Wahyu",
      "nim": "H0920033",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "farandi.2002wahyu@student.uns.ac.id"
    },
    {
      "name": "Intani Febriana Imroatus Solehah",
      "nim": "H0920047",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "intanifbrna@student.uns.ac.id"
    },
    {
      "name": "Aulia Hana Zahiyya",
      "nim": "H0920017",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "hannaahnzhy@student.uns.ac.id"
    },
    {
      "name": "Ghassani Fathin Adani",
      "nim": "H0920042",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "ghassanifathin19@student.uns.ac.id"
    },
    {
      "name": "Adam Yusuf Saputra",
      "nim": "H0920001",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "adamyusufsaputra@student.uns.ac.id"
    },
    {
      "name": "Laela Nur Ramadhani",
      "nim": "H0920052",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "Laellaramadhanii@srudent.uns.ac.id"
    },
    {
      "name": "Talitha Yumna Fausta",
      "nim": "H0920088",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "talithayf@student.uns.ac.id"
    },
    {
      "name": "Indah Kurniasih",
      "nim": "H0920046",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "indahkurn@student.uns.ac.id"
    },
    {
      "name": "Tiara Safitri",
      "nim": "H0920092",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "tiarasafitri@student.uns.ac.id"
    },
    {
      "name": "Argilya Rizky Wuryaningrum",
      "nim": "H0920012",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "argilyarizky@student.uns.ac.id"
    },
    {
      "name": "Prabu Muchammad Abdan Shaalih",
      "nim": "H0920074",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "prabu.muchammad@student.uns.ac.id"
    },
    {
      "name": "Anindya Ayu Salsabila",
      "nim": "H0920008",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "anindyaayus@student.uns.ac.id"
    },
    {
      "name": "Rachel Agatha Novena Kusumaningtyas",
      "nim": "H0920078",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "rachelagatha@student.uns.ac.id"
    },
    {
      "name": "Zainina Zati Hulwani",
      "nim": "H0920098",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "zaininazth@student.uns.ac.id"
    },
    {
      "name": "Brigita Septiana",
      "nim": "H0920024",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "brigita.sptn@student.uns.ac.id"
    },
    {
      "name": "Regan Zharfani Wibowo",
      "nim": "H0920080",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "reganzharfani@student.uns.ac.id"
    },
    {
      "name": "Dean Aryani",
      "nim": "H0920028",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "deanaryani@student.uns.ac.id"
    },
    {
      "name": "Anindita Nagamustika Mahayati",
      "nim": "H0919010",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "aninditanm@student.uns.ac.id"
    },
    {
      "name": "Naila Kayadha",
      "nim": "H0920065",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "nailakayadha@student.uns.ac.id"
    },
    {
      "name": "Aditya Bayhaqi Suraji",
      "nim": "H0919001",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "adityabayhaqi@student.uns.ac.id"
    },
    {
      "name": "Nadiah",
      "nim": "H0920063",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "nau_nau@student.uns.ac.id"
    },
    {
      "name": "Nadia Indi Azama",
      "nim": "H0920062",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "nadiaindi@student.uns.ac.id"
    },
    {
      "name": "Iftitaha Fadhila",
      "nim": "H0918045",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "iftitaha.fadhila@student.uns.ac.id"
    },
    {
      "name": "Fatma Juliana Kartikasari",
      "nim": "H0918032",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "Fatmajuliana@student.uns.ac.id"
    },
    {
      "name": "Hasna Rosyida",
      "nim": "H0918043",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "hasna_r12@student.uns.ac.id"
    },
    {
      "name": "Munna Aisyah",
      "nim": "H0918061",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "munnaaishaa@student.uns.ac.id"
    },
    {
      "name": "Hasna Azhari",
      "nim": "H0918042",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "hasnazhari12@student.uns.ac.id"
    },
    {
      "name": "Yasmin Ghina Salsabila Arsyad",
      "nim": "H0918091",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "yasmin.ghina@student.uns.ac.id"
    },
    {
      "name": "Nisrina Akhrim M",
      "nim": "H0918066",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "akhrimnisrina@student.uns.ac.id"
    },
    {
      "name": "Pandu Pramana Atmaja",
      "nim": "H0918070",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "apandoop@student.uns.ac.id"
    },
    {
      "name": "Layyalin Mumtazah",
      "nim": "H0918049",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "layyalinzh@student.uns.ac.id"
    },
    {
      "name": "Nena herawati",
      "nim": "H0918065",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "nenaaherawati@student.uns.ac.id"
    },
    {
      "name": "Emanuella Sattvika D",
      "nim": "H0918028",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "vikaemanuella@student.uns.ac.id"
    },
    {
      "name": "Hanun Oktaviana Chairunisa",
      "nim": "H0918040",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "hanun.ocha@student.uns.ac.id"
    },
    {
      "name": "Nida Nur Mufidah",
      "nim": "H0920070",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "nidanurmufidah@student.uns.ac.id"
    },
    {
      "name": "Aliza Kholifah",
      "nim": "H0918008",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2018,
      "email": "aliza.kholifah@student.uns.ac.id"
    },
    {
      "name": "Najwa Cita Adhi",
      "nim": "H0920066",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "najwacita02@student.uns.ac.id"
    },
    {
      "name": "Diva Elenna Jiesthasasriya",
      "nim": "H0920031",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "divaelenna@student.uns.ac.id"
    },
    {
      "name": "Izkar lazuardi zamani",
      "nim": "H0917047",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2017,
      "email": "izkarlazuardi@student.uns.ac.id"
    },
    {
      "name": "Anastasia Dinda Putri Adhimukti",
      "nim": "H0917017",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2017,
      "email": "anastasiadinda@student.uns.ac.id"
    },
    {
      "name": "Anisatun Lathifah",
      "nim": "H0919012",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "anisla69447@student.uns.ac.id"
    },
    {
      "name": "Aditya Chanif Indhra Putra",
      "nim": "H0917001",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2017,
      "email": "prince_indhra@student.uns.ac.id"
    },
    {
      "name": "Indah Ardityas Siwi",
      "nim": "H0919051",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "indahardityas@student.uns.ac.id"
    },
    {
      "name": "Dewi arinanda",
      "nim": "H0920029",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "dewiarinandaa@student.uns.ac.id"
    },
    {
      "name": "Khairunnisa Tasqia",
      "nim": "H0917050",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2017,
      "email": "nisatasqia86@student.uns.ac.id"
    },
    {
      "name": "Gabriella Callula Putri Kurniawan",
      "nim": "H0920041",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "gcallulapk@student.uns.ac.id"
    },
    {
      "name": "Jihan Lathifa Hapsari",
      "nim": "H0920048",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2020,
      "email": "jihanlathifa@student.uns.ac.id"
    },
    {
      "name": "Nisrina Qurrota 'Aini",
      "nim": "H0919075",
      "departemen": "Ilmu Teknologi Pangan",
      "year": 2019,
      "email": "nisrina.qurrota@student.uns.ac.id"
    },
    {
      "name": "nuril ali dernansyah",
      "nim": "H0520092",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "nurilali375@student.uns.ac.id"
    },
    {
      "name": "Ammar Ibnu Hasan",
      "nim": "H0518007",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "ammaribnuhasan@student.uns.ac.id"
    },
    {
      "name": "Raihan Aryasatya",
      "nim": "H0520097",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "nipon.kapten104@student.uns.ac.id"
    },
    {
      "name": "Satrio Krishna Wibowo",
      "nim": "H0520106",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "krisnawibowo097@student.uns.ac.id"
    },
    {
      "name": "Nelina",
      "nim": "H0520089",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "Nelina@student.uns.ac.id"
    },
    {
      "name": "Indah Evitasari",
      "nim": "H0520050",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "indahevitaa01@student.uns.ac.id"
    },
    {
      "name": "Muhammad Ridho",
      "nim": "H0520083",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "muhammadridho02@student.uns.ac.id"
    },
    {
      "name": "Muhammad Zahril Nuron Hawafi",
      "nim": "H0520085",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "zahrilmuhammad@student.uns.ac.id"
    },
    {
      "name": "Griselda Ivani Takare",
      "nim": "H0520044",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "griseldaitakare@student.uns.ac.id"
    },
    {
      "name": "Fifin Tria Anggraini",
      "nim": "H0518039",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "fifin_triaanggraini@student.uns.ac.id"
    },
    {
      "name": "Alfina Destianawati",
      "nim": "H0520012",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "alfinadestiana04@student.uns.ac.id"
    },
    {
      "name": "Benard Kyckelhahn",
      "nim": "H0519033",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "benardkyc@student.uns.ac.id"
    },
    {
      "name": "Aulia Fatiya Ashar",
      "nim": "H0518013",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "auliafatiya13@student.uns.ac.id"
    },
    {
      "name": "Septiani Munawaroh",
      "nim": "H0520107",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "septimona@student.uns.ac.id"
    },
    {
      "name": "Abdel Hakim Nabiel El Luthfiy",
      "nim": "H0520002",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "Storyabbas2231@student.uns.ac.id"
    },
    {
      "name": "Annisa nur amieni",
      "nim": "H0518011",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "annisanuramieni@student.uns.ac.id"
    },
    {
      "name": "Muhammad Mustaqiem",
      "nim": "H0520082",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "mhmd.mustakim37@student.uns.ac.id"
    },
    {
      "name": "Muhammad Malik Fajar",
      "nim": "H0518059",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "Muhmalixfajara@student.uns.ac.id"
    },
    {
      "name": "Triyas Nur Wahyuningsih",
      "nim": "H0517097",
      "departemen": "Peternakan",
      "year": 2017,
      "email": "triyasnw16@student.uns.ac.id"
    },
    {
      "name": "Yusuf Sholehudin",
      "nim": "H0520120",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "yusufsholehudin3101@student.uns.ac.id"
    },
    {
      "name": "Dimas Ariyanto Prasetyo",
      "nim": "H0519048",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "dimas871ari@student.uns.ac.id"
    },
    {
      "name": "Arga gumilhang",
      "nim": "H0518012",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "Argapratama18@student.uns.ac.id"
    },
    {
      "name": "Fiqi Rahman Jati",
      "nim": "H0518040",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "Fiqirahman@student.uns.ac.id"
    },
    {
      "name": "Andini Nurlaelasari",
      "nim": "H0519016",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "andini30102001@student.uns.ac.id"
    },
    {
      "name": "Sheva Adi Pamungkas",
      "nim": "H0518086",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "shevaadi26@student.uns.ac.id"
    },
    {
      "name": "Aditya Nova Rismantoro",
      "nim": "H0519004",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "Adty.nva11@student.uns.ac.id"
    },
    {
      "name": "Muhamad Maulana Khasani",
      "nim": "H0519082",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "maulanakhasani1819@student.uns.ac.id"
    },
    {
      "name": "Laila Alfii Anisya",
      "nim": "H0520061",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "lailaalfii04@student.uns.ac.id"
    },
    {
      "name": "Bagas Aji Harvian",
      "nim": "H0517019",
      "departemen": "Peternakan",
      "year": 2017,
      "email": "bagasajiharvian@student.uns.ac.id"
    },
    {
      "name": "Nanik Rochana",
      "nim": "H0519092",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "nanikrch01@student.uns.ac.id"
    },
    {
      "name": "Arif Setya Nugraha",
      "nim": "H0517115",
      "departemen": "Peternakan",
      "year": 2017,
      "email": "arifsetyanugraha960@student.uns.ac.id"
    },
    {
      "name": "Nadia Khairunisa Agustin",
      "nim": "H0517066",
      "departemen": "Peternakan",
      "year": 2017,
      "email": "nadiakhairunisa88@student.uns.ac.id"
    },
    {
      "name": "Satria Adi P",
      "nim": "H0518084",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "Pradanasatria7@student.uns.ac.id"
    },
    {
      "name": "Djorodjatun Samodro Sakti",
      "nim": "H0518027",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "samodrosakti19@student.uns.ac.id"
    },
    {
      "name": "Amira Fathin Rodhiyah",
      "nim": "H0519014",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "Amirafathinrodhiyah_9@student.uns.ac.id"
    },
    {
      "name": "Renda Adib Tantra Wijaya",
      "nim": "H0520099",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "tantrawijaya12@student.uns.ac.id"
    },
    {
      "name": "Nur Mayazah Churin'in",
      "nim": "H0519096",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "nurma.yazah99@student.uns.ac.id"
    },
    {
      "name": "Dhian Enggal Widyastuti",
      "nim": "H0519044",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "dhianenggal_13@student.uns.ac.id"
    },
    {
      "name": "Aisyah Retno Wulandari",
      "nim": "H0519001",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "aisyahretno@student.uns.ac.id"
    },
    {
      "name": "Deni Estu Pamungkas",
      "nim": "H0520030",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "deniestu7@student.uns.ac.id"
    },
    {
      "name": "Chintianna Widhi Atthahirah",
      "nim": "H9519038",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "chintia_widhi101@student.uns.ac.id"
    },
    {
      "name": "Rafi s",
      "nim": "H0519100",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "rafishidqi20@student.uns.ac.id"
    },
    {
      "name": "Hilwa Tsabita Fidinillah",
      "nim": "H0519064",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "hilwatsa@student.uns.ac.id"
    },
    {
      "name": "Faqih Athaillah Gani",
      "nim": "H0520040",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "faqih.gani02@student.uns.ac.id"
    },
    {
      "name": "Utomo Fachrul Umam",
      "nim": "H0517101",
      "departemen": "Peternakan",
      "year": 2017,
      "email": "utomofu@student.uns.ac.id"
    },
    {
      "name": "Siti Arlinda Nurhidayati",
      "nim": "H0519117",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "arlindanurhidayati27@student.uns.ac.id"
    },
    {
      "name": "Ahmad Umar Aditya B",
      "nim": "H0520007",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "umar_aditya7@student.uns.ac.id"
    },
    {
      "name": "Ika N",
      "nim": "H0518047",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "ikangadyas@student.uns.ac.id"
    },
    {
      "name": "Abdul Halim Ayyubi",
      "nim": "H0520003",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "youbee192@student.uns.ac.id"
    },
    {
      "name": "Muhammad Zidane Adhi Surya",
      "nim": "H0520086",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "zidane.surya071@student.uns.ac.id"
    },
    {
      "name": "Kurnia Sari",
      "nim": "H0520060",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "Kurniasari_28@student.uns.ac.id"
    },
    {
      "name": "Fadillah wirahmat",
      "nim": "H0520037",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "fadillahwrmt@student.uns.ac.id"
    },
    {
      "name": "Darrell Syandanareza",
      "nim": "H0520029",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "darrellsreza@student.uns.ac.id"
    },
    {
      "name": "Triyan Prastiwi",
      "nim": "H0520113",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "triyanprastiwi@student.uns.ac.id"
    },
    {
      "name": "Desi Fitriyani",
      "nim": "H0520031",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "desifitriyani@student.uns.ac.id"
    },
    {
      "name": "Annisa Hasna Ayu Luffita",
      "nim": "H0520017",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "hasnaannisa28@student.uns.ac.id"
    },
    {
      "name": "Uly Adiana Setyowati",
      "nim": "H0519123",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "ulyadianas@student.uns.ac.id"
    },
    {
      "name": "Nimas Alifia Nastiti",
      "nim": "H0518065",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "Honastitui@student.uns.ac.id"
    },
    {
      "name": "Giandhar Ryandita Fernanda",
      "nim": "H0520043",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "Giandharryandita20@student.uns.ac.id"
    },
    {
      "name": "Sholihatunnisa Zahra Firstnanda",
      "nim": "H0519116",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "sholihatun.nisa.01@student.uns.ac.id"
    },
    {
      "name": "Nazula Sifaannida",
      "nim": "H0520088",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "nazulasifaannida@student.uns.ac.id"
    },
    {
      "name": "Aan Dwiky Handoyo",
      "nim": "H0520001",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "aandwikyhandoyo@student.uns.ac.id"
    },
    {
      "name": "Aisyah Rahayu",
      "nim": "H0520009",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "aisyahrahayu@student.uns.ac.id"
    },
    {
      "name": "Chilla Lorantika Putri",
      "nim": "H0519037",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "chillaloran@student.uns.ac.id"
    },
    {
      "name": "Windi Nur Yuliana",
      "nim": "H0518096",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "Windi.yuliana8@student.uns.ac.id"
    },
    {
      "name": "Muhammad Fairus ferdiansyah",
      "nim": "H0520080",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "Ferdiansyahfairus82@student.uns.ac.id"
    },
    {
      "name": "Mariana Arga Putri",
      "nim": "H0520069",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "marianaarga4@student.unc.ac.id"
    },
    {
      "name": "Linggarjati Hijri Hilalliyah",
      "nim": "H0520064",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "linggarjati23@student.uns.ac.id"
    },
    {
      "name": "Hesti Fatonah",
      "nim": "H0520048",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "hestifatonah13@student.uns.ac.id"
    },
    {
      "name": "Bagus Miftah Wal Huda",
      "nim": "H0519032",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "bagusmiftah49@student.uns.ac.id"
    },
    {
      "name": "Firmansyah Tristadika Prakosa",
      "nim": "H0519057",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "tristadika@student.uns.ac.id"
    },
    {
      "name": "Saradiva Bilqisyah Azka",
      "nim": "H0520105",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "saradivaazka@student.uns.ac.id"
    },
    {
      "name": "Ammar Zaki Mubarok",
      "nim": "H0520014",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "ammarzakimubarok@student.uns.ac.id"
    },
    {
      "name": "Ananda Rizqi Prima",
      "nim": "H0520015",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "Primananda811@student.uns.ac.id"
    },
    {
      "name": "Aprilya Hanifah Tamartian",
      "nim": "H0520018",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "aprilyahanifah29@student.uns.ac.id"
    },
    {
      "name": "Dinda Eka Pramesti",
      "nim": "H0520034",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "dindaekapramesti@student.uns.ac.id"
    },
    {
      "name": "Diska Difiana Salsabilla",
      "nim": "H0520035",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "Diskads20@student.uns.ac.id"
    },
    {
      "name": "Nur Lathifatun Nisa",
      "nim": "H0520090",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "nurlathifa17@student.uns.ac.id"
    },
    {
      "name": "Naufalda Aqil Mumtazah",
      "nim": "H0520087",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "s9029py@student.uns.ac.id"
    },
    {
      "name": "Muhammad Irfan Robbani",
      "nim": "H0520081",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "muhammadirfan.rob@student.uns.ac.id"
    },
    {
      "name": "Sholahulhaq Nur Hamid",
      "nim": "H0520108",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "nurhamid27@student.uns.ac.id"
    },
    {
      "name": "Revina Natria Dewi",
      "nim": "H0520100",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "revina240102@student.uns.ac.id"
    },
    {
      "name": "Okalya Shiva Yuanwidhita",
      "nim": "H0520093",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "okalyayuanwidhita@student.uns.ac.id"
    },
    {
      "name": "NUR RIZKI AULIA SALSABILA",
      "nim": "H0520091",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "nurrizkiauliasalsabi@student.uns.ac.id"
    },
    {
      "name": "Putri Amarta Thamhari",
      "nim": "H0520095",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "pemirsa20@student.uns.ac.id"
    },
    {
      "name": "Rizky Ananda",
      "nim": "H0520103",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "rizky.ananda02@student.uns.ac.id"
    },
    {
      "name": "Siti Fatimah Az Zahra",
      "nim": "H0520111",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "Sftmhazzahra14@student.uns.ac.id"
    },
    {
      "name": "Silvi Indriana Nur Abdilla",
      "nim": "H0520109",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "silviindriana@student.uns.ac.id"
    },
    {
      "name": "Yusuf Pandu Raharja",
      "nim": "H0519129",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "yusufpandu@student.uns.ac.id"
    },
    {
      "name": "Sekana Ayatus Syifa",
      "nim": "H0517091",
      "departemen": "Peternakan",
      "year": 2017,
      "email": "sekanas24@student.uns.ac.id"
    },
    {
      "name": "Marshanda Eka Salsabila",
      "nim": "H0520070",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "marshandaeka57@student.uns.ac.id"
    },
    {
      "name": "Asri Rosyadah",
      "nim": "H0520020",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "asrirosyadah@student.uns.ac.id"
    },
    {
      "name": "Isna Nuraini",
      "nim": "H0520054",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "isnanuraini312@student.uns.ac.id"
    },
    {
      "name": "Yoga Gading Permadi",
      "nim": "H0520119",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "yogagadingpermadi@student.uns.ac.id"
    },
    {
      "name": "Dita Cahyani",
      "nim": "H0520036",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "ditacahyani@student.uns.ac.id"
    },
    {
      "name": "Alsafa Lintang Puspita",
      "nim": "H0520013",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "alsafa9a.sgr@student.uns.ac.id"
    },
    {
      "name": "Cladenta Rindu Exvanza",
      "nim": "H0519040",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "rinduexvanza31@student.uns.ac.id"
    },
    {
      "name": "Darmawan Didi Candra",
      "nim": "H0519042",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "didicandra66@student.uns.ac.id"
    },
    {
      "name": "Aan Setyo Nugroho",
      "nim": "H0519002",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "aansetyonugroho@student.uns.ac.id"
    },
    {
      "name": "Ayu Sekar Kinasih",
      "nim": "H0520021",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "ayusekarkinasih@student.uns.ac.id"
    },
    {
      "name": "Laila Sulistyorini",
      "nim": "H0520062",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "lailasulistyorini14@gmail.com"
    },
    {
      "name": "Thoriq",
      "nim": "H0518091",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "Thoriq.aldri_8899@student.uns.ac.id"
    },
    {
      "name": "Zaid Surya Al Rahman",
      "nim": "H0518100",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "zaidsurya0503@student.uns.ac.id"
    },
    {
      "name": "Diah Lutfiah Sugar",
      "nim": "H0519045",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "diah_7848@student.uns.ac.id"
    },
    {
      "name": "Fahrul Ardhia Pratama",
      "nim": "H0520038",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "fahrulardhia14@student.uns.ac.id"
    },
    {
      "name": "Akira Ramadhana",
      "nim": "H0520010",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "akiraramadhana@student.uns.ac.id"
    },
    {
      "name": "Nova Rahmatika",
      "nim": "H0518066",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "novarahmatika06@student.uns.ac.id"
    },
    {
      "name": "Hana Listi Sabhekti",
      "nim": "H0520045",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "hanalistisbkt@student.uns.ac.id"
    },
    {
      "name": "Ummatussa'adah",
      "nim": "H0518095",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "ummatussaadah85@student.uns.ac.id"
    },
    {
      "name": "Adestra Ayub Syawala",
      "nim": "H0519003",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "adestraa_31@student.uns.ac.id"
    },
    {
      "name": "Yoga Wina Pratama",
      "nim": "H0519127",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "Yowirrayoga@student.uns.ac.id"
    },
    {
      "name": "Nur Mayazah Churin'in",
      "nim": "H0519096",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "Nurma.yazah99@student.uns.ac.id"
    },
    {
      "name": "Ratna Syifa Sintia",
      "nim": "H0520098",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "ratnasyifa@student.uns.ac.id"
    },
    {
      "name": "David Anggara Putra",
      "nim": "H0518020",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "anggadavid993@student.uns.ac.id"
    },
    {
      "name": "Ika Wahyuningsih",
      "nim": "H0518049",
      "departemen": "Peternakan",
      "year": 2018,
      "email": "ikawahyuningsih@student.uns.ac.id"
    },
    {
      "name": "Ine febriantama",
      "nim": "H0520051",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "Inefebri_07@student.uns.ac.id"
    },
    {
      "name": "Muhamad Bagas Failasof",
      "nim": "H0520075",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "bagasfailasof@student.uns.ac.id"
    },
    {
      "name": "Siti Eshly Woro Kristi",
      "nim": "H0520110",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "worokristi@student.uns.ac.id"
    },
    {
      "name": "Asraf Abwabar Rizqi",
      "nim": "H0519026",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "asyrafar06@student.uns.ac.id"
    },
    {
      "name": "Dimas Dwi Setyawan",
      "nim": "H0519049",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "dimas_setyawan016@student.uns.ac.id"
    },
    {
      "name": "Aghitsna Gita Pradita",
      "nim": "H0519006",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "aghitsna9_9@student.uns.ac.id"
    },
    {
      "name": "Ahmad Musthofa Anshori",
      "nim": "H0519008",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "musthofaahmad4321@students.uns.ac.id"
    },
    {
      "name": "Wening Nurany",
      "nim": "H0519125",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "wening.nurany@student.uns.ac.id"
    },
    {
      "name": "Rifka Tifo Yuliana",
      "nim": "H0519105",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "tiforibka@student.uns.ac.id"
    },
    {
      "name": "Firna Fauziatul Karimah",
      "nim": "H0519058",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "firnafauziatulk@student.uns.ac.id"
    },
    {
      "name": "Mega Hayu Prasetyowati",
      "nim": "H0517052",
      "departemen": "Peternakan",
      "year": 2017,
      "email": "hayumega@student.uns.ac.id"
    },
    {
      "name": "Taufik Ramadhani",
      "nim": "H0519119",
      "departemen": "Peternakan",
      "year": 2019,
      "email": "piktopik@student.uns.ac.id"
    },
    {
      "name": "Arya Ramadhani Gunara",
      "nim": "H0520019",
      "departemen": "Peternakan",
      "year": 2020,
      "email": "arg.arya95@student.uns.ac.id"
    }
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fdc7acdb2ced16b7fcb3f41";
    participant.session.number = 3;
    participant.session.min = new Date("2020-12-20T15:00:00.000+07:00");
    participant.session.max = new Date("2020-12-20T21:00:00.000+07:00");

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
