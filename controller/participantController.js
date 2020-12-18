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
      "name": "Meilimah Werdiningrum",
      "nim": "H0219064",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "Meilimahw_13@student.uns.ac.id"
    },
    {
      "name": "Doni Rifaldi",
      "nim": "H0217021",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "doni.rivaldi@student.uns.ac.id"
    },
    {
      "name": "Zenita Ayu Permatasari",
      "nim": "H0218072",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "zenitaayupermatasari@student.uns.ac.id"
    },
    {
      "name": "febridita sari dewi",
      "nim": "H0218017",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "febridita9.9d@student.uns.ac.id"
    },
    {
      "name": "Ummy Arisza Nadia",
      "nim": "H0219098",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "Nadiaarisza12@student.uns.ac.id"
    },
    {
      "name": "M. Iqbal Firmansyah",
      "nim": "H0217042",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "m.iqbal.f99@student.uns.ac.id"
    },
    {
      "name": "Nashril Izza Firdaus",
      "nim": "H0217047",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "nashrilfirdaus12@student.uns.ac.id"
    },
    {
      "name": "Meilissar Salahuddin Alif Rahman Nugraha",
      "nim": "H0218035",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "alifrahman022@student.uns.ac.id"
    },
    {
      "name": "Nuraini Dwi Agustina Putri",
      "nim": "H0219075",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "nurainidwi26@student.uns.ac.id"
    },
    {
      "name": "Mega Isti Naaifah",
      "nim": "H0219063",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "megaisna012@student.uns.ac.id"
    },
    {
      "name": "Sutheta Putra Mahdani",
      "nim": "H0219094",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "suthetapmahdani@student.uns.ac.id"
    },
    {
      "name": "Aisyah Defara R",
      "nim": "H0217004",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "arradefara@student.uns.ac.id"
    },
    {
      "name": "Kunti Surya Rohmawati",
      "nim": "H0218032",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "oyasuminasai@student.uns.ac.id"
    },
    {
      "name": "Thifan Rizqi Fauzi",
      "nim": "H0217065",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "fthifan@student.uns.ac.id"
    },
    {
      "name": "Tesalonika Pramudita",
      "nim": "H0220069",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "tesapramudita@student.uns.ac.id"
    },
    {
      "name": "PERTIWI KURNIA DWISETIO",
      "nim": "H0218047",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "tiwidwisetio10@student.uns.ac.id"
    },
    {
      "name": "Hafidzh Ramadhan Irwanto",
      "nim": "H0218024",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "hafidsolo25@student.uns.ac.id"
    },
    {
      "name": "Nur Ayni Fitri",
      "nim": "H0219074",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "aynifitrinur@student.uns.ac.id"
    },
    {
      "name": "DYAH AJENG KARTIKA WULANDARI",
      "nim": "H0220025",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "dyahajengkw@student.uns.ac.id"
    },
    {
      "name": "Cahyaning puspita ati",
      "nim": "H0219021",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "cahyapuspita75@student.uns.ac.id"
    },
    {
      "name": "Aisyah Puspitasari",
      "nim": "H0219002",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "aisyahpuspitasari10@student.uns.ac.id"
    },
    {
      "name": "Isti Khomah Ayu Ika Riyani",
      "nim": "H0220038",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "istikhomah_ayuika@student.uns.ac.id"
    },
    {
      "name": "Nifa Nurfiana",
      "nim": "H0220051",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "nifanurfiana17@student.uns.ac.id"
    },
    {
      "name": "Jihan Nurhidaya",
      "nim": "H0219054",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "Jihannurhidayah19@student.uns.ac.id"
    },
    {
      "name": "Octavia Febriani Nurkolia",
      "nim": "H0220054",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "Octavia.febriani@student.uns.ac.id"
    },
    {
      "name": "RISKHA SAFIRA",
      "nim": "H0220060",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "riskhasafira@student.uns.ac.id"
    },
    {
      "name": "Dona Raharjo",
      "nim": "H0220024",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "donarhrj@student.uns.ac.id"
    },
    {
      "name": "Esti Istiqomah",
      "nim": "H0219030",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "estiistiqomah6@student.uns.ac.id"
    },
    {
      "name": "Sri Rezeki Febriani",
      "nim": "H0219091",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "srirezekifeb@student.uns.ac.id"
    },
    {
      "name": "Relly Yunila Nawangsari",
      "nim": "H0220059",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "rellyyunila8@student.uns.ac.id"
    },
    {
      "name": "Fajriyati Hikmah",
      "nim": "H0219032",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "fajriyatihikmah@student.uns.ac.id"
    },
    {
      "name": "Ilham Tsany",
      "nim": "H0219046",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "ilhamtsany1900@student.uns.ac.id"
    },
    {
      "name": "Silvia Puspita Hapsari",
      "nim": "H0220065",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "Silviapuspita@student.uns.ac.id"
    },
    {
      "name": "Tessa Puri Wardhani",
      "nim": "H0220070",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "tessapuri@student.uns.ac.id"
    },
    {
      "name": "Raihanatu Aisyah Maharani",
      "nim": "H0220057",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "aisyah02maharani@student.uns.ac.id"
    },
    {
      "name": "Luthfi Anidya Putri Az-Zahra",
      "nim": "H0220043",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "luthfianidya@student.uns.ac.id"
    },
    {
      "name": "Ratna Dwi Berliana Putri",
      "nim": "H0220058",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "ratnadbp98@student.uns.ac.id"
    },
    {
      "name": "Haikal Rafi Wardhana",
      "nim": "H0220034",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "haikalrw@student.uns.ac.id"
    },
    {
      "name": "Lelly Wijaya Rahmawati",
      "nim": "H0220041",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "lellywijaya0@student.uns.ac.id"
    },
    {
      "name": "Lisa Fitra Arhamma",
      "nim": "H0220042",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "lisaafitraa20@student.uns.ac.id"
    },
    {
      "name": "Videlia Putri Pratama",
      "nim": "H0220071",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "videliaputripratama@student.uns.ac.id"
    },
    {
      "name": "Chelyna Puspitasari",
      "nim": "H0220019",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "chelynapuspitasari@student.uns.ac.id"
    },
    {
      "name": "Syahidah Kholiliyati",
      "nim": "H0220067",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "kholiliyatisyahidah@student.uns.ac.id"
    },
    {
      "name": "Wulan Rahmawati",
      "nim": "H0220074",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "wulan_rahmawati@student.uns.ac.id"
    },
    {
      "name": "Arief Setyawan",
      "nim": "H0220011",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "ariefsetyawan@student.uns.ac.id"
    },
    {
      "name": "Saferi Idris",
      "nim": "H0219085",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "saferiidris081@student.uns.ac.id"
    },
    {
      "name": "Yara Travelina Noor Rohma",
      "nim": "H0220075",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "yaratravelina@student.uns.ac.id"
    },
    {
      "name": "Afifah Fatinah Nada Putri",
      "nim": "H0220003",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "afifahfnp3@student.uns.ac.id"
    },
    {
      "name": "Ilham Ramdhani",
      "nim": "H0219045",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "ilhamramdhani8041@student.uns.ac.id"
    },
    {
      "name": "Kuncoro Ario Seto",
      "nim": "H0220039",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "kuncoro_seto@student.uns.ac.id"
    },
    {
      "name": "Dhany Eko Prasetyo",
      "nim": "H0220021",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "Prasetyodany93@student.uns.ac.id"
    },
    {
      "name": "Yudith Ariana Agustin",
      "nim": "H0220078",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "yudithariana278@student.uns.ac.id"
    },
    {
      "name": "Habiba Akeyla Ahmadia",
      "nim": "H0220033",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "habibaakeylaa@student.uns.ac.id"
    },
    {
      "name": "Viona Ardhya Amarta",
      "nim": "H0220081",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "vionardhyaar@student.uns.ac.id"
    },
    {
      "name": "Febiana Suci Imawati",
      "nim": "H0220027",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "febianasi@student.uns.ac.id"
    },
    {
      "name": "Dian Velia Adianingtyas",
      "nim": "H0220022",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "dianvelia@student.uns.ac.id"
    },
    {
      "name": "Sindi Fauziah",
      "nim": "H0219089",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "sindifau17@student.uns.ac.id"
    },
    {
      "name": "Azizah Anggun Febriana",
      "nim": "H0220015",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "azizahanggun70@student.uns.ac.id"
    },
    {
      "name": "Safira Indrias Sari",
      "nim": "H0218057",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "safiraindrias@student.uns.ac.id"
    },
    {
      "name": "Cindy wulan",
      "nim": "H0219023",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "wulansar6@student.uns.ac.id"
    },
    {
      "name": "Wulandari",
      "nim": "H0218068",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "wulansdr23@student.uns.ac.id"
    },
    {
      "name": "Azhar Dimas Tjahjanto",
      "nim": "H022014",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "azhar.dimas@student.uns.ac.id"
    },
    {
      "name": "Meyllisa Retno Handayani",
      "nim": "H0220045",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "meyllisaretnoh28@student.uns.ac.id"
    },
    {
      "name": "Monica Putri Solekha",
      "nim": "H0220046",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "monicaputri@student.uns.ac.id"
    },
    {
      "name": "Siti Ramadhani Nur Rissanti",
      "nim": "H0219090",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "siti_rnr12@student.uns.ac.id"
    },
    {
      "name": "Fanin Nur Isnaini",
      "nim": "H0219033",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "faninayaa@student.uns.ac.id"
    },
    {
      "name": "Nesia Febryana",
      "nim": "H0218042",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "febryananesia@student.uns.ac.id"
    },
    {
      "name": "Fredy Gunawan",
      "nim": "H0218021",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "fredygunawan@student.uns.ac.id"
    },
    {
      "name": "Reza Agus Dwiyanto",
      "nim": "H0219080",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "rezaagdw@student.uns.ac.id"
    },
    {
      "name": "Sherly Ayu Anjali",
      "nim": "H0218058",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "sherlyayuanjali88@student.uns.ac.id"
    },
    {
      "name": "Aprillia wulansari",
      "nim": "H0218005",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "Aprillia.wulansari@student.uns.ac.id"
    },
    {
      "name": "Salsabila Khoirunnisa",
      "nim": "H0220064",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "bilasalsak06@student.uns.ac.id"
    },
    {
      "name": "Dita Risky Novianti",
      "nim": "H0218015",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "ditarisky@student.uns.ac.id"
    },
    {
      "name": "Raden Ajeng Alma Azzahra K.P",
      "nim": "H0220062",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "almaazzahra@student.uns.ac.id"
    },
    {
      "name": "Wafiq Istnaini Najibah",
      "nim": "H0220072",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "wafiqistnaininajibah@student.uns.ac.id"
    },
    {
      "name": "Yuliana Eka Saputri",
      "nim": "H0220079",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "yulianaeksptri@student.uns.ac.id"
    },
    {
      "name": "Niswatul Hamidah",
      "nim": "H0220052",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "niswatul.hamidah22@student.uns.ac.id"
    },
    {
      "name": "Vellissa",
      "nim": "H0219099",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "vellissa@student.uns.ac.id"
    },
    {
      "name": "Muna Maysaroh",
      "nim": "H0219068",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "munamays@student.uns.ac.id"
    },
    {
      "name": "Sefina Fauzia Oryza",
      "nim": "H0219088",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "Sefina.oryza_02@student.uns.ac.id"
    },
    {
      "name": "Zulhiza Iedna Yoandani",
      "nim": "H0219102",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "zulhizaiedna01@student.uns.ac.id"
    },
    {
      "name": "Fadhila Diah Ratnasari",
      "nim": "H0219031",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "fadhiladr1414@student.uns.ac.id"
    },
    {
      "name": "Dimas Erlanda Prambudi",
      "nim": "H0219026",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "dimaserlanda2@student.uns.ac.id"
    },
    {
      "name": "Fia Astriyana",
      "nim": "H0219036",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "fiaastri99@student.uns.ac.id"
    },
    {
      "name": "Hafsani Devi Fajarini",
      "nim": "H0219039",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "hafsanidevi123@student.uns.ac.id"
    },
    {
      "name": "Nafila Adinda Putri",
      "nim": "H0219070",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "nafila_adinda12@student.uns.ac.id"
    },
    {
      "name": "Erin Septiana Nurafidah",
      "nim": "H0219028",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "erinseptiana2017@student.uns.ac.id"
    },
    {
      "name": "Widya Oppy Ajeng Azzizah",
      "nim": "H0220073",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "widyaoppy@student.uns.ac.id"
    },
    {
      "name": "Konitah Nur Rahmawati",
      "nim": "H0219056",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "Konitahnr@student.uns.ac.id"
    },
    {
      "name": "Zainal isa abidin",
      "nim": "H0220080",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "zaisabidin@student.uns.ac.id"
    },
    {
      "name": "Reza Endwan P",
      "nim": "H0219081",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "Reza_pramanda927@student.uns.ac.id"
    },
    {
      "name": "OCA HIGIAWATI",
      "nim": "H0220053",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "ocahigia@student.uns.ac.id"
    },
    {
      "name": "Annisa Fitriyani Adien Istiqomah",
      "nim": "H0220008",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "annisafaiii@student.uns.ac.id"
    },
    {
      "name": "Az Zahra Permata Wingtyas",
      "nim": "H0219015",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "azzahrapw17@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rosyid Fauzi",
      "nim": "H0220050",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "rosyidfauzi12@student.uns.ac.id"
    },
    {
      "name": "Imam Arifin",
      "nim": "H0217033",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "imamarifin_05@student.uns.ac.id"
    },
    {
      "name": "Ana Rohmatus Sa'dyah",
      "nim": "H0219008",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "anarohmatus@student.uns.ac.id"
    },
    {
      "name": "Ghulam Haidar Aziz",
      "nim": "H0220031",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "ghulamhaidar@student.uns.ac.id"
    },
    {
      "name": "Adelia Pebrina Liestyabudi",
      "nim": "H0220002",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "adeliapebrina6047@student.uns.ac.id"
    },
    {
      "name": "Saeful Bahri",
      "nim": "H0220063",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "saefulbahri17@student.uns.ac.id"
    },
    {
      "name": "Hiroshi Anindya Yasmine Imanni",
      "nim": "H0219042",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "hiroshianindya@student.uns.ac.id"
    },
    {
      "name": "Muhammad Ilyas Saleh",
      "nim": "H0220049",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "milyassaleh@student.uns.ac.id"
    },
    {
      "name": "Raihanah Inas Islami",
      "nim": "H0220056",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "raihanahinass@student.uns.ac.id"
    },
    {
      "name": "Bagus Hanafi",
      "nim": "H0220016",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "bagushanafi@student.uns.ac.id"
    },
    {
      "name": "Balina Dita Eisya Prashanti Nugroho",
      "nim": "H0220017",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "balinadita@student.uns.ac.id"
    },
    {
      "name": "Calvin Mahardika",
      "nim": "H0220018",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "calvinmahardika@student.uns.ac.id"
    },
    {
      "name": "Alussya Putri Krisnandari",
      "nim": "H0220005",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "putrilussy210@student.uns.ac.id"
    },
    {
      "name": "Mayliana Eka Kurniasari",
      "nim": "H0220044",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "maylianakurniasari@student.uns.ac.id"
    },
    {
      "name": "Muhammad Farhan Nahdedy",
      "nim": "H0220047",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "Farhanahdedy@student.uns.ac.id"
    },
    {
      "name": "Latukha Duta Permana",
      "nim": "H0220040",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "dutapermana0901@student.uns.ac.id"
    },
    {
      "name": "Yoga Satrio wibowo",
      "nim": "H0220076",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "yogasw10@student.uns.ac.id"
    },
    {
      "name": "Ilham Ainunsyah Alfarizzi",
      "nim": "H0220037",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "nicoilham5775@student.uns.ac.id"
    },
    {
      "name": "Diva Fortuna Hafi Aprillia",
      "nim": "H0220023",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "divafha@student.uns.ac.id"
    },
    {
      "name": "Atika Rishalah Ad'nin",
      "nim": "H0220012",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "atikarishalah@student.uns.ac.id"
    },
    {
      "name": "Bagas Ardi Jamaludin Adhhar",
      "nim": "H0219016",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "kembar303@student.uns.ac.id"
    },
    {
      "name": "Dzaki Abror Taufiiqul Hakim",
      "nim": "H0220026",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "dzakiabror214@student.uns.ac.id"
    },
    {
      "name": "Galuh Rizky Nugraheni",
      "nim": "H0217027",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "galuhrizkynugraheni@student.uns.ac.id"
    },
    {
      "name": "Hendricus William Siswantoro",
      "nim": "H0220036",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "hendricuswilliam@student.uns.ac.id"
    },
    {
      "name": "Ardiana Rahma Wijayanti",
      "nim": "H0217010",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "ardianarahmawijayanti@student.uns.ac.id"
    },
    {
      "name": "Fahreni Khoiriyah",
      "nim": "H0217024",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "fahrenik_12@student.uns.ac.id"
    },
    {
      "name": "Hayu Wisesa Tuada",
      "nim": "H0220035",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "hayuwisesaa@student.uns.ac.id"
    },
    {
      "name": "Wahyu Galang Pranata",
      "nim": "H0217069",
      "departemen": "Ilmu Tanah",
      "year": 2017,
      "email": "galangpranata83@student.uns.ac.id"
    },
    {
      "name": "Siti Solikhatun Anisa",
      "nim": "H0218061",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "sisolanisa27@student.uns.ac.id"
    },
    {
      "name": "Alif Haruno Yekti",
      "nim": "H0220004",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "alifharuno_1203@student.uns.ac.id"
    },
    {
      "name": "Angger dara kusumaningati",
      "nim": "H0220006",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "angger.dara_123@student.uns.ac.id"
    },
    {
      "name": "Sukma Eka Maulana",
      "nim": "H0220066",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "sukmaekamaulana@student.uns.ac.id"
    },
    {
      "name": "Tiara Meti Pratingkas",
      "nim": "H0218063",
      "departemen": "Ilmu Tanah",
      "year": 2018,
      "email": "tiarametipratingkas@student.uns.ac.id"
    },
    {
      "name": "Sahala Riyadini",
      "nim": "H0219086",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "sahalariyadini@student.uns.ac.id"
    },
    {
      "name": "Anida Rizky Aulia Khasanah",
      "nim": "H0220007",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "anidaaulia15@student.uns.ac.id"
    },
    {
      "name": "Yoga Warana Tama",
      "nim": "H0220077",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "yogawt1607@student.uns.ac.id"
    },
    {
      "name": "Nanda Mutiara Pradiana Wulandari",
      "nim": "H0219071",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "nandamutiara.23@student.uns.ac.id"
    },
    {
      "name": "Suciati Dwi N",
      "nim": "H0219093",
      "departemen": "Ilmu Tanah",
      "year": 2019,
      "email": "sucinuraeni7@student.uns.ac.id"
    },
    {
      "name": "Ghulam Zakiyya Thoriqul Haq",
      "nim": "H0220032",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "ghlmzakiyya@student.uns.ac.id"
    },
    {
      "name": "Muhammad Hafizh Husna Prakosa",
      "nim": "H0220048",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "hafizh_husna@student.uns.ac.id"
    },
    {
      "name": "Feby Anggraini Safista",
      "nim": "H0220028",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "febyanggrainisa@student.uns.ac.id"
    },
    {
      "name": "Taufik Yoga",
      "nim": "H0220068",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "taufik.yoga_22@student.uns.ac.id"
    },
    {
      "name": "Anugerah Yudha Alamsyah",
      "nim": "H0220010",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "yudha.alamsyah17@student.uns.ac.id"
    },
    {
      "name": "Rivagita Frizza Ananda",
      "nim": "H0220061",
      "departemen": "Ilmu Tanah",
      "year": 2020,
      "email": "rivagitananda@student.uns.ac.id"
    },
    {
      "name": "NANDA MUHAMAD YUSUF MAHENDRA",
      "nim": "H1019031",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "ymnandamuhamad@student.uns.ac.id"
    },
    {
      "name": "Muhammad Zakaria",
      "nim": "H1019028",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "muhammadzakaria.1102@student.uns.ac.id"
    },
    {
      "name": "Alya Nurhaliza",
      "nim": "H1019004",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "alyanurhaliza44@gmail.com"
    },
    {
      "name": "Tutiana Widya Desiani",
      "nim": "H1020079",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "tutianawidya@student.uns.ac.id"
    },
    {
      "name": "MARINA SONIA PRAMESTI",
      "nim": "H1020043",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "marinayos321@student.uns.ac.id"
    },
    {
      "name": "Salma Saidah Herdyanti",
      "nim": "H1020074",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "salmasaidah@student.uns.ac.id"
    },
    {
      "name": "Charellibra Willy Octavian",
      "nim": "H1020017",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "charel_willy4@student.uns.ac.id"
    },
    {
      "name": "Muhammad nur Kholis Majid",
      "nim": "H1020047",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "munurkholis25@student.uns.ac.id"
    },
    {
      "name": "farid fauzan al waliyuddin",
      "nim": "H1020027",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "fafauzan@student.uns.ac.id"
    },
    {
      "name": "Muhammad rangga ababil",
      "nim": "H1020049",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "Rangga.ababil@student.uns.ac.id"
    },
    {
      "name": "Sania Salsabila Azzahra",
      "nim": "H1020075",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "saniaazzahra@student.uns.ac.id"
    },
    {
      "name": "Ibrahim Fima P",
      "nim": "H1020033",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "ibrahimfp@student.uns.ac.id"
    },
    {
      "name": "Ferun nanda syahwana putra",
      "nim": "H1020029",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "Ferunnanda@student.uns.ac.id"
    },
    {
      "name": "Farid yahya nugraha",
      "nim": "H1020028",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "Faridyahya.nugraha@student.uns.ac.id"
    },
    {
      "name": "Fattahillah Sala",
      "nim": "H1019018",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "fhsala05@student.uns.ac.id"
    },
    {
      "name": "Alvien Gusti Prasditio",
      "nim": "H1020005",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "alvien.gustip@student.uns.ac.id"
    },
    {
      "name": "Chofifah Nour Hidayati",
      "nim": "H1020018",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "chofifahhidayati@student.uns.ac.id"
    },
    {
      "name": "Nurayni Dwi Astuti",
      "nim": "H1020055",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "nuraynidwi3@student.uns.ac.id"
    },
    {
      "name": "Reggina H P",
      "nim": "H1020066",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "regginaputriph@student.uns.ac.id"
    },
    {
      "name": "PEMOET EDHI PRASTIWI",
      "nim": "H1020057",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "epemoett@student.uns.ac.id"
    },
    {
      "name": "Yesinta Mariana Rahmawati",
      "nim": "H1020081",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "yesintamr@student.uns.ac.id"
    },
    {
      "name": "Raihan Muslim Ramadhan",
      "nim": "H1020064",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "raihaanramadhaan1121@student.uns.ac.id"
    },
    {
      "name": "Rizquna Amalia",
      "nim": "H1020073",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "rizquna_amalia1485@student.uns.ac.id"
    },
    {
      "name": "Risma Nur Laili Salma Nabela",
      "nim": "H1020072",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "rismanurlaili_sn22@student.uns.ac.id"
    },
    {
      "name": "Nurya Rufaida Zulfa",
      "nim": "H1020056",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "nuryazulfa@student.uns.ac.id"
    },
    {
      "name": "Nur Wahyu Utami",
      "nim": "H1020054",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "nurwahyuutami@student.uns.ac.id"
    },
    {
      "name": "Prasojo Katon Dewanto",
      "nim": "H1020058",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "prasojo.dewanto@student.uns.ac.id"
    },
    {
      "name": "Maria Clara Yosepha",
      "nim": "H1020042",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "mariaclara14@student.uns.ac.id"
    },
    {
      "name": "Retno Asih Wulandary",
      "nim": "H1020067",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "retnoasihwulandary@student.uns.ac.id"
    },
    {
      "name": "Lyslin Yusi Melani",
      "nim": "H1020039",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "lyslinyusi@student.uns.ac.id"
    },
    {
      "name": "Qonita Qurrota A'yunin",
      "nim": "H1020061",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "qurrotaqonita@students.uns.ac.id"
    },
    {
      "name": "Naufal Hafizh Anas",
      "nim": "H1020050",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "hafizhanas121@student.uns.ac.id"
    },
    {
      "name": "Afifatul Inayah Arrosadah",
      "nim": "H1020004",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "afifatul.inayah.a88@student.uns.ac.id"
    },
    {
      "name": "Eleonora Kenyo Siloam Saputro",
      "nim": "H1020023",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "eleonorakss@student.uns.ac.id"
    },
    {
      "name": "Hasan Weildan",
      "nim": "H1020031",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "hasan.weildan.h31@student.uns.ac.id"
    },
    {
      "name": "Aryanti Deca Prameswari",
      "nim": "H1020012",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "decaprameswari@student.uns.ac.id"
    },
    {
      "name": "Zuhrifa Sabilla Firdaus",
      "nim": "H1020082",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "Zuhrifasabilla23@student.uns.ac.id"
    },
    {
      "name": "Ariansyah widi widagdo",
      "nim": "H1020011",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "Ariansyahwidi24@student.uns.ac.id"
    },
    {
      "name": "Miftakhul ilmi nurrohmah",
      "nim": "h1020044",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "mifi.miftakhulilminr@student.uns.ac.id"
    },
    {
      "name": "Risa Novarika",
      "nim": "H1020071",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "risanovarika@student.uns.ac.id"
    },
    {
      "name": "Aghdiatama Dava Indratna",
      "nim": "H1019002",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "davaindratna@student.uns.ac.id"
    },
    {
      "name": "Laila Ramadhania",
      "nim": "H1020037",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "lailaraaa@student.uns.ac.id"
    },
    {
      "name": "Ragiel Imam Khoiri",
      "nim": "H1020063",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "ragiel_123@student.uns.ac.id"
    },
    {
      "name": "Exelino Christ Dio",
      "nim": "H1020024",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "exelonochristdio@student.uns.ac.id"
    },
    {
      "name": "Nur Faizah Niqmahtullah",
      "nim": "H1020052",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "nniqmahtullah@student.uns.ac.id"
    },
    {
      "name": "Ibnu Romadhon",
      "nim": "H1020032",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "ibnuromadhon@student.uns.ac.id"
    },
    {
      "name": "Ria Raudhatul Fariha",
      "nim": "H1020068",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "riarfariha@student.uns.ac.id"
    },
    {
      "name": "Yusuf Maulana Putra",
      "nim": "H1019045",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "yusufmaulana@student.uns.ac.id"
    },
    {
      "name": "Naj Muddin Machmud",
      "nim": "H1019030",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "naj.machmud@student.uns.ac.id"
    },
    {
      "name": "Titis Maharani",
      "nim": "H1020077",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "titismaharani09@student.uns.ac.id"
    },
    {
      "name": "Imam Zaki",
      "nim": "H1020034",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "imamzaki26@student.uns.ac.id"
    },
    {
      "name": "Rieska Rahayu S",
      "nim": "H1020070",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "rieskarsftr244@student.uns.ac.id"
    },
    {
      "name": "Richella Ramadhani Alam Rinjani",
      "nim": "H1020069",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "richellarar@student.uns.ac.id"
    },
    {
      "name": "Fahmi Yahya",
      "nim": "H1020025",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "fahmiyahyaa@student.uns.ac.id"
    },
    {
      "name": "Ana Fa'iqohul Hasanah",
      "nim": "H1020007",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "anafaiqoh987@student.uns.ac.id"
    },
    {
      "name": "Aprilia Dwi Rahmawati",
      "nim": "H1020009",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "aprilii.dwi54@student.uns.ac.id"
    },
    {
      "name": "Rachma Nurfazryn",
      "nim": "H1020062",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "rachmanurfazryn@student.uns.ac.id"
    },
    {
      "name": "Amjad Mamdukh Fauzi",
      "nim": "H1020006",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "amfpyo312@student.uns.ac.id"
    },
    {
      "name": "Sidqi Amanullah",
      "nim": "H1020076",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "shidqiamanullah.sa@student.uns.ac.id"
    },
    {
      "name": "Indah Lestari",
      "nim": "H1020035",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "indah13@student.uns.ac.id"
    },
    {
      "name": "Keysha Nurrushifa Nirmala",
      "nim": "H1020036",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "keyshann1908@student.uns.ac.id"
    },
    {
      "name": "Ammar Abdurrohman",
      "nim": "H1019006",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "ammartalaga23@student.uns.ac.id"
    },
    {
      "name": "Nabilah Khairunnisa Putri",
      "nim": "H1019029",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "khairunnisaputrinabilah@student.uns.ac.id"
    },
    {
      "name": "Sri Puji Astuti",
      "nim": "H1019040",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "pujispa.06@student.uns.ac.id"
    },
    {
      "name": "Siti Nurul Khasanah",
      "nim": "H1019039",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "sitinurul@student.uns.ac.id"
    },
    {
      "name": "Arroffi Zidane Muslim",
      "nim": "H1019910",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "arofimuslim66@gmail.com"
    },
    {
      "name": "Arwansyah Bintang Prabowo",
      "nim": "H1019011",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "arwansyah.b@student.uns.ac.id"
    },
    {
      "name": "Anissa Wahyuningsih",
      "nim": "H1019007",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "anissawhy26@student.uns.ac.id"
    },
    {
      "name": "Azah Dewi Sukmawati Ayuningtiyas",
      "nim": "H1020013",
      "departemen": "Pengelolaan Hutan",
      "year": 2020,
      "email": "azahdewi@student.uns.ac.id"
    },
    {
      "name": "Nur Kartikawati",
      "nim": "H1019032",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "kartikawatinur@student.uns.ac.id"
    },
    {
      "name": "Putri Waryanti",
      "nim": "H1019033",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "putriwaryanti06@student.uns.ac.id"
    },
    {
      "name": "Annisa Alfiana Damayanti",
      "nim": "H1019009",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "annisaalfiana13@student.uns.ac.id"
    },
    {
      "name": "Dhinda Tazkiya",
      "nim": "H1019014",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "tazkiyadhinda@student.uns.ac.id"
    },
    {
      "name": "Sherlina Aprilia Qoirul Nimah",
      "nim": "H1019038",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "sherlinaapril@student.uns.ac.id"
    },
    {
      "name": "Wisnu Saputra",
      "nim": "H1019044",
      "departemen": "Pengelolaan Hutan",
      "year": 2019,
      "email": "wisnuptr31@student.uns.ac.id"
    },
    {
      "name": "Qonia Az Zahra",
      "nim": "H1019034",
      "departemen": "pengelolaan Hutan",
      "year": 2019,
      "email": "qoniazzahraa7@student.uns.ac.id"
    }
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fdc7a66b2ced16b7fcb3f3f";
    participant.session.number = 1;
    participant.session.min = new Date("2020-12-19T15:00:00.000+07:00");
    participant.session.max = new Date("2020-12-19T21:00:00.000+07:00");

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
