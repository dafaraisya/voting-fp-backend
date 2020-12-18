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
      "name": "Sabrina Ayu N",
      "nim": "H0418073",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "sabrinaayunovita@student.uns.ac.id"
    },
    {
      "name": "Nika Damayanti",
      "nim": "H0418052",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "damayantiii27nk@student.uns.ac.id"
    },
    {
      "name": "Khanif Irsyad Fahmi",
      "nim": "H0418039",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "Khanifirsyad@student.uns.ac.id"
    },
    {
      "name": "Nugroho Hasan",
      "nim": "H0418055",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "nugrohohasan@student.uns.ac.id"
    },
    {
      "name": "Alfika Aninda Wahyuni",
      "nim": "H0420005",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "alfikaaninda20@student.uns.ac.id"
    },
    {
      "name": "Prisca Puspita Sari",
      "nim": "H0418064",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "prisca.puspuspus.1251@student.uns.ac.id"
    },
    {
      "name": "Umi Hanifah",
      "nim": "H0419097",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "umihanifah001@student.uns.ac.id"
    },
    {
      "name": "Agustianingrum",
      "nim": "H0418006",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "agustianingrum76@student.uns.ac.id"
    },
    {
      "name": "Galuh Anggani",
      "nim": "H0149027",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "galuhanggani46@student.uns.ac.id"
    },
    {
      "name": "Gilang Fadhilah Apriddisa Rasundawa",
      "nim": "H0419028",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "rsndw2992@student.uns.ac.id"
    },
    {
      "name": "Syafiq Dzaky Al Amin",
      "nim": "H0420085",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "syafiqdzaky@student.uns.ac.id"
    },
    {
      "name": "Hasna Khairunnisa",
      "nim": "H0419030",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "hasnakhrnnsa@student.uns.ac.id"
    },
    {
      "name": "PUSPITA ANNISA UTAMI",
      "nim": "H0418065",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "puspitaannisa@student.uns.ac.id"
    },
    {
      "name": "Novemi Tobi Fahrudin",
      "nim": "H0418053",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "tnovemi@student.uns.ac.id"
    },
    {
      "name": "Vanesa Della Ferdiana",
      "nim": "H0420089",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "vanesadella@student.uns.ac.id"
    },
    {
      "name": "Sebening Andjar Asmara",
      "nim": "H0419088",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "andjar.asmara6@student.uns.ac.id"
    },
    {
      "name": "Rahma Zuhaida",
      "nim": "H0419074",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "rahmazuhaida@student.uns.ac.id"
    },
    {
      "name": "Elisa Tri Rahmawati",
      "nim": "H0419017",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "elisatrirahmawati@student.uns.ac.id"
    },
    {
      "name": "Muhammad Hasrila Difa",
      "nim": "H0420053",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "hasriladifa@student.uns.ac.id"
    },
    {
      "name": "Yasmin Suci Tazkiatunnufus",
      "nim": "H0418086",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "tazkia767574@student.uns.ac.id"
    },
    {
      "name": "Siti Uswatun Khasanah",
      "nim": "H0420083",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "sitiuswatunkh11@student.uns.ac.id"
    },
    {
      "name": "Afifah Nindya Ainulia",
      "nim": "H0418004",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "afifahnindyaa@student.uns.ac.id"
    },
    {
      "name": "Hasna Latifah",
      "nim": "H0418032",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "hasnalatifah028@student.uns.ac.id"
    },
    {
      "name": "Nur Kholilah",
      "nim": "H0419071",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "nurkllh19@student.uns.ac.id"
    },
    {
      "name": "Winnita sherlynda",
      "nim": "H0418085",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "Winnita_shrlynd@student.uns.ac.id"
    },
    {
      "name": "Muhammad Naufal Fahlevi Al-Ghiffari",
      "nim": "H0420055",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "alghifari.naufal27@student.uns.ac.id"
    },
    {
      "name": "Dennys Tyas Hapsari",
      "nim": "H0418021",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "dennystyas@student.uns.ac.id"
    },
    {
      "name": "AULIA RAHMA FAIZATI",
      "nim": "H0418019",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "auliarahmaf@student.uns.ac.id"
    },
    {
      "name": "Vera Darayani Rafienda",
      "nim": "H0418082",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "vera.drafienda8@student.uns.ac.id"
    },
    {
      "name": "Katarina Faraliana Saputri",
      "nim": "H0419041",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "katarinafaraliana27@student.uns.ac.id"
    },
    {
      "name": "Dinda Catur Wulandari",
      "nim": "H0419015",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "dindacaturw@student.uns.ac.id"
    },
    {
      "name": "Adifa Istiqomah",
      "nim": "H0420002",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "adifaistiqomah@student.uns.ac.id"
    },
    {
      "name": "Lisa Putri Atmaja",
      "nim": "H0419045",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "lisaputriatmaja.23@student.uns.ac.id"
    },
    {
      "name": "Conzena Veranita Putri",
      "nim": "H0420019",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "conzenavera11@student.uns.ac.id"
    },
    {
      "name": "Winda Puspita Dewi",
      "nim": "H0417083",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2017,
      "email": "windapuspita13@student.uns.ac.id"
    },
    {
      "name": "Fetria Andriani",
      "nim": "H0419026",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "fetriaandriani073@student.uns.ac.id"
    },
    {
      "name": "Ardelia Rahma Selena",
      "nim": "H0418015",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "ardelia_selena@student.uns.ac.id"
    },
    {
      "name": "Whienanda Surya Hapsari",
      "nim": "H0418084",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "whienandahapsa@student.uns.ac.id"
    },
    {
      "name": "Ariza Febriyanti",
      "nim": "H0418016",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "arizafebri19@student.uns.ac.id"
    },
    {
      "name": "AULIA AZIZAH ISMA",
      "nim": "H0418018",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "auliaazizahisma00@student.uns.ac.id"
    },
    {
      "name": "Rizky Wisnu Ardhana",
      "nim": "H0418072",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "rizkyardhana13@student.uns.ac.id"
    },
    {
      "name": "Nugrahenna Hajar",
      "nim": "H0419070",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "nugrahennahajar@student.uns.ac.id"
    },
    {
      "name": "Risma Rusniati",
      "nim": "H0418071",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "rusniati_risma03@student.uns.ac.id"
    },
    {
      "name": "Fairuz Hanifah Wahyudyanti",
      "nim": "H0419022",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "fairuzhanifahwahyudyanti@student.uns.ac.id"
    },
    {
      "name": "Tika Sekar Kinasih",
      "nim": "H0417076",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2017,
      "email": "tikasekarkinasih@student.uns.ac.id"
    },
    {
      "name": "Melinawati Dwi Cahya Ningrum",
      "nim": "H0418048",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "Melinawatidcn@student.uns.ac.id"
    },
    {
      "name": "Sationa Carmelita Siburian",
      "nim": "H0418074",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "sationasationa22@student.uns.ac.id"
    },
    {
      "name": "nurul retno saputri",
      "nim": "H0418060",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "nurulretnosaputri@student.uns.ac.id"
    },
    {
      "name": "Monika Ardela",
      "nim": "H0420050",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "monikaardela24@student.uns.ac.id"
    },
    {
      "name": "Melga Yudistiya A.P",
      "nim": "H0418047",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "elga_pratomo17@student.uns.ac.id"
    },
    {
      "name": "Anggun Tri Hapsari",
      "nim": "H0420009",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "angguntrihapsari73@student.uns.ac.id"
    },
    {
      "name": "Zidan Nur Aziz Balfas",
      "nim": "H0420093",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "zidanbalfas5@student.uns.ac.id"
    },
    {
      "name": "Daning Luthfiah Rahma",
      "nim": "H0420021",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "daninglfr@student.uns.ac.id"
    },
    {
      "name": "Widya Sofia Nurjanah",
      "nim": "H0420091",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "widya.sofia4@student.uns.ac.id"
    },
    {
      "name": "Endang Sulastri",
      "nim": "H0419019",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "endang.sulastri16@student.uns.ac.id"
    },
    {
      "name": "Raihana Rahma",
      "nim": "H0420071",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "raihanarahma14@student.uns.ac.id"
    },
    {
      "name": "Fahrul Mahfut",
      "nim": "H0418024",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "fahrulmahfut@student.uns.ac.id"
    },
    {
      "name": "Sita Rizkiana Fitri",
      "nim": "H0417070",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2017,
      "email": "sitafitri15@student.uns.ac.id"
    },
    {
      "name": "Lingga Harzaldi Sukarno",
      "nim": "H0418042",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "linggaharzaldi17@student.uns.ac.id"
    },
    {
      "name": "Adhitya Satria",
      "nim": "H0419001",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "adhityasw@student.uns.ac.id"
    },
    {
      "name": "Abida Choirul Mar'ati",
      "nim": "H0417001",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2017,
      "email": "abidachoirul@student.uns.ac.id"
    },
    {
      "name": "Nurliana Umi Widyastuti",
      "nim": "H0418058",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "Liana03_umi@student.uns.ac.id"
    },
    {
      "name": "Nur Kholiq Birr Samsita",
      "nim": "H0419072",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "kholiq.samsita@student.uns.ac.id"
    },
    {
      "name": "Micelle Lovinia Arwindianti",
      "nim": "H0420048",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "Micellelovinia_20@student.uns.ac.id"
    },
    {
      "name": "Ninda Meilani",
      "nim": "H0420062",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "ninda.meilani48@student.uns.ac.id"
    },
    {
      "name": "Novianto Yoga Wibisono",
      "nim": "H0419069",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "noviantoyogawibisono@student.uns.ac.id"
    },
    {
      "name": "Meinata Bella Ayutianti",
      "nim": "H0420047",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "meinatabella05@student.uns.ac.id"
    },
    {
      "name": "Hanif Fakhri Suryono",
      "nim": "H0419029",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "hanifsuryono@student.uns.ac.id"
    },
    {
      "name": "Lucia Indah Pita Sari",
      "nim": "H0418043",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "luciaindahps@student.uns.ac.id"
    },
    {
      "name": "Nur Latifah",
      "nim": "H0420064",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "nurlatifah_1510@student.uns.ac.id"
    },
    {
      "name": "Wahyu Sri Maryatun",
      "nim": "H0420090",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "wahyusm432@student.uns.ac.id"
    },
    {
      "name": "ADIMAS MADESAPUTRO",
      "nim": "H0418001",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "Adimasms20@student.uns.ac.id"
    },
    {
      "name": "Natan rio s",
      "nim": "H0419065",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "natanriosaputra@student.uns.ac.id"
    },
    {
      "name": "Nismara Pramesti Agung",
      "nim": "H0420063",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "raranismara@student.uns.ac.id"
    },
    {
      "name": "Muhammad Lanang Samudro",
      "nim": "H0418049",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "muhammadlanang123@student.uns.ac.id"
    },
    {
      "name": "Hesti Kris Darwanti",
      "nim": "H0419031",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "hestikd8@student.uns.ac.id"
    },
    {
      "name": "Safira Amalia Sukisno",
      "nim": "H0419084",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "Safiramaliaa2606@student.uns.ac.id"
    },
    {
      "name": "Maulana Thariq Prajaduta Sutikno",
      "nim": "H0419050",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "maulanathariq234@student.uns.ac.id"
    },
    {
      "name": "DEVINA RAHMAWATI",
      "nim": "H0419012",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "devinarahma4@student.uns.ac.id"
    },
    {
      "name": "Fahbri Yola Oktaviani",
      "nim": "H0419021",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "fahbriyola@student.uns.ac.id"
    },
    {
      "name": "Sandra Mega Prestiana",
      "nim": "H0419087",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "sandraprestiana18@student.uns.ac.id"
    },
    {
      "name": "Rofifah Arij Dewanti",
      "nim": "H0419082",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "rofifaharij@student.uns.ac.id"
    },
    {
      "name": "Aziza Ridha Septika",
      "nim": "H0419006",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "azizaridha09@student.uns.ac.id"
    },
    {
      "name": "Azza Handriyani Yahya",
      "nim": "H0420016",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "hyazza10@student.uns.ac.id"
    },
    {
      "name": "Kurnia Anshoriah",
      "nim": "H0418041",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "kurnia_ans.1@student.uns.ac.id"
    },
    {
      "name": "Vionita Putri Nugraningrum",
      "nim": "H0417081",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2017,
      "email": "vionitaputri26@student.uns.ac.id"
    },
    {
      "name": "Fransisca Ayu Prasetyo Murti",
      "nim": "H0420031",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "fransiscafrancis2@student.uns.ac.id"
    },
    {
      "name": "Nir Fai’za Alfia N",
      "nim": "h0418056",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "nurfaizaalfia@student.uns.ac.id"
    },
    {
      "name": "Tarisa Damayanti",
      "nim": "H0419094",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "tarisadamayanti98@student.uns.ac.id"
    },
    {
      "name": "Agustin Presi Dwi Setyowati",
      "nim": "H0418007",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "prisagustin55@student.uns.ac.id"
    },
    {
      "name": "Rahmad Rifky Maulana",
      "nim": "H0419075",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "rahmadrifkymaulana@student.uns.ac.id"
    },
    {
      "name": "Tri Kurnianingsih",
      "nim": "H0420087",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "trikurnia@student.uns.ac.id"
    },
    {
      "name": "Dina Rahmawati",
      "nim": "H0419014",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "dinarahma@student.uns.ac.id"
    },
    {
      "name": "Gantsar Artha Poetradewa",
      "nim": "H0418028",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "gantsararthapd@student.uns.ac.id"
    },
    {
      "name": "Afni Khanifatul Amalia",
      "nim": "H0418005",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "afni.amali4@student.uns.ac.id"
    },
    {
      "name": "Sindy Icha Mardiana",
      "nim": "H0420082",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "sindyicha_30@student.uns.ac id"
    },
    {
      "name": "Muhammad Safrudin Musthofa",
      "nim": "H0491057",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "musthofathofa234@student.uns.ac.id"
    },
    {
      "name": "Amilia Khoirunnisa",
      "nim": "H0418011",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "amilia.nisa12345@student.uns.ac.id"
    },
    {
      "name": "Rachmah Prada Yunita",
      "nim": "H0420067",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "rachmahprada28@student.uns.ac.id"
    },
    {
      "name": "Rusdianti Putri Kinasih",
      "nim": "H0420074",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "rusdiantiputri@student.uns.ac.id"
    },
    {
      "name": "Muhammad Rizal Khadafi",
      "nim": "H0418050",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "rizal.khadafi280100@student.uns.ac.id"
    },
    {
      "name": "Syafira Meila Dhesti Maharani",
      "nim": "H0420086",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "syafirameila@student.uns.ac.id"
    },
    {
      "name": "Deah Ayu Mega Agustiani",
      "nim": "H0419011",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "deahayumega17@student.uns.ac.id"
    },
    {
      "name": "Hasna Sausan Khairunnisa'",
      "nim": "H0420035",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "hasnasausan22@student.uns.ac.id"
    },
    {
      "name": "Muhammad Fikri Arifuddin",
      "nim": "H0420051",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "mfikri516@student.uns.ac.id"
    },
    {
      "name": "Dwi Harjanti Silo Putri",
      "nim": "H0420025",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "dwiharjantisiloputri@student.uns.ac.id"
    },
    {
      "name": "Yuhibbu Noor Hudan",
      "nim": "H0420092",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "yuhibbuhudan@student.uns.ac.id"
    },
    {
      "name": "Vivi Oktaviani",
      "nim": "H0420095",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "vivi.okta27@student.uns.ac.id"
    },
    {
      "name": "Niken Lestari Handayani",
      "nim": "H0420061",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "nikenl97@student.uns.ac.id"
    },
    {
      "name": "salsabila nurindra",
      "nim": "H0420077",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "salsanurindra@student.uns.ac.id"
    },
    {
      "name": "rifka atmajaya",
      "nim": "H0418069",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "rifka_atma@student.uns.ac.id"
    },
    {
      "name": "Shentya Sany Herawati",
      "nim": "H0420081",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "shentyasanyh@student.uns.ac.id"
    },
    {
      "name": "Ratih Dewi Pekerti",
      "nim": "H0418068",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "ratihdewi@student.uns.ac.id"
    },
    {
      "name": "Satrio Eka Pujinugroho",
      "nim": "H042008”",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "satrioeka123@student.uns.ac.id"
    },
    {
      "name": "Sekar Arum Wijayanti",
      "nim": "H0418075",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "sekararrum@student.uns.ac.id"
    },
    {
      "name": "Zuhroti enis afifah",
      "nim": "H0430094",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "zuhrotienis@student.uns.ac.id"
    },
    {
      "name": "Alsira Aina Az-Zahra",
      "nim": "H04180101",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "alsira.aina@student.uns.ac.id"
    },
    {
      "name": "Maysela Kalisi Putri Perdani",
      "nim": "H0420045",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "mayselaputri09@student.uns.ac.id"
    },
    {
      "name": "Maharani Sania Fitri",
      "nim": "H0420044",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "maharani.sf25@student.uns.ac.id"
    },
    {
      "name": "Alfian Khamal Mustafa",
      "nim": "H0419002",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "Alfiankhamalm12@student.uns.ac.id"
    },
    {
      "name": "Muhammad Ivan Rizki",
      "nim": "H0420054",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "muhammadivanrizki@student.uns.ac.id"
    },
    {
      "name": "Fadila Adhaningtyas S",
      "nim": "H0420029",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "fadila.adhaningtyas@student.uns.ac.id"
    },
    {
      "name": "Nur Rahmatul Mahshunah",
      "nim": "H0420065",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "nurrahmatulmahshunah@student.uns.ac.id"
    },
    {
      "name": "Salwa Sania Salsabila",
      "nim": "H0420079",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "salwasania04@student.uns.ac.id"
    },
    {
      "name": "Raden Roro Ilma Kusuma Wardani",
      "nim": "H0417056",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2017,
      "email": "ilmakusuma@student.uns.ac.id"
    },
    {
      "name": "Nathania Fredlina Shaffa Haurelia",
      "nim": "H0420059",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "shaffahahu@student.uns.ac.id"
    },
    {
      "name": "Apriani Kusnul Khotimah",
      "nim": "H0420011",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "akusnulk20@student.uns.ac.id"
    },
    {
      "name": "Aulia Istiqomah Sularno",
      "nim": "H0420015",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "auliais@student.uns.ac.id"
    },
    {
      "name": "Accorda Fianka Sudibyo Putri",
      "nim": "H0420001",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "accordafsp@student.uns.ac.id"
    },
    {
      "name": "Fata amria tsani",
      "nim": "H0418026",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "fataamria@student.uns.ac.id"
    },
    {
      "name": "Nuzul Asti Rezauji",
      "nim": "H0418061",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2018,
      "email": "Nuzul218@student.uns.ac.id"
    },
    {
      "name": "Shelly Anisa Dwianti",
      "nim": "H0419091",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "shellyanisa@student.uns.ac.id"
    },
    {
      "name": "azizatur rahmawati",
      "nim": "H0419007",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "rahmawatiaziza8@student.uns.ac.id"
    },
    {
      "name": "Tabita Galuh Nugrahani",
      "nim": "H0419093",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "tabitagaluh@student.uns.ac.id"
    },
    {
      "name": "Tiara Octari Pravina",
      "nim": "H0419095",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "tiaraoctari123@student.uns.ac.id"
    },
    {
      "name": "Berlian Noor Kirana",
      "nim": "H0420017",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "berliannoorkirana@student.uns.ac.id"
    },
    {
      "name": "Anggun Melvana Audria",
      "nim": "H0420008",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "melvana.anggun02@student.uns.ac.id"
    },
    {
      "name": "Zefanya Talentaning Putri",
      "nim": "H0419102",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "zefanyatp26@student.uns ac.id"
    },
    {
      "name": "Dian Sulistyaningrum",
      "nim": "H0420024",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2020,
      "email": "diansulistyaningrum7@student.uns.ac.id"
    },
    {
      "name": "Shella Anggita Pramestika",
      "nim": "H0419090",
      "departemen": "Penyuluhan & Komunikasi Pertanian",
      "year": 2019,
      "email": "shellaanggita8888@student.uns.ac.id"
    },
    {
      "name": "Rizqy Tiyasa Ramadhan",
      "nim": "H0420073",
      "departemen": "Penyuluhan dan komunikasi pertanian",
      "year": 2020,
      "email": "rtiyasar@student.uns.ac.id"
    },
    {
      "name": "Lintang Mukti Pinastri",
      "nim": "H0420042",
      "departemen": "Penyuluhan dan komunikasi pertanian",
      "year": 2020,
      "email": "lintangmuktip@student.uns.ac.id"
    },
    {
      "name": "Katerina",
      "nim": "H0419103",
      "departemen": "Penyuluhan dan komunikasi pertanian",
      "year": 2019,
      "email": "katerina262@student.uns.ac.id"
    },
    {
      "name": "Intan Ayu Oktaviani",
      "nim": "H0420038",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "intanayuokt@student.uns.ac.id"
    },
    {
      "name": "Hanifa Aisya Prarea",
      "nim": "H0420034",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "hanifaap1510@student.uns.ac.id"
    },
    {
      "name": "Kirei Ayumi Ning Hardian",
      "nim": "H0420040",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "kireiayumihardian@student.uns.ac.id"
    },
    {
      "name": "Ika Puji Lestari",
      "nim": "H0420037",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "Ikapujilestari@student.uns.ac.id"
    },
    {
      "name": "Salma Alifia",
      "nim": "H0420076",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "salmaalifia@student.uns.ac.id"
    },
    {
      "name": "Hafidh Tegar Sanubari",
      "nim": "H0420032",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "Htegar1@student.uns.ac.id"
    },
    {
      "name": "Ermanda Puspaningtyas",
      "nim": "H0420027",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "ermandapuspaningtyas@student.uns.ac.id"
    },
    {
      "name": "salwa alivya dewi",
      "nim": "H0419086",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "salwaalivya@student.uns.ac.id"
    },
    {
      "name": "Citra",
      "nim": "H0419009",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "citrapermata08@student.uns.ac.id"
    },
    {
      "name": "Ricky Ivan Andianto",
      "nim": "H0419080",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "rickyivan_17@student.uns.ac.id"
    },
    {
      "name": "Okyana Rochimatul Hasanah",
      "nim": "H0420066",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "okyanarochimatul@student.uns.ac.id"
    },
    {
      "name": "Cut Adira Titania Putri",
      "nim": "H0420020",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "cutadira11@student.uns.ac.id"
    },
    {
      "name": "Lufiana Riko Saputra",
      "nim": "H0420043",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "Saputrariko990@student.uns.ac.id"
    },
    {
      "name": "Eullia Tri Mukti Hezak",
      "nim": "H0420028",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "eulliahz@student.uns.ac.id"
    },
    {
      "name": "ALFIA HAPPY CAHYANTI",
      "nim": "H0420004",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "alfia_happy39@student.uns.ac.id"
    },
    {
      "name": "Nafiza Rachmavianti",
      "nim": "H0419063",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "nafizarachma@student.uns.ac.id"
    },
    {
      "name": "Muhammad Fuad Ghifari",
      "nim": "H0419055",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "fuaadgh@student.uns.ac.id"
    },
    {
      "name": "Leony Indraswari Putri",
      "nim": "H0420041",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "leonyindraswari@student.uns.ac.id"
    },
    {
      "name": "Anisya Oktaviana",
      "nim": "H0420010",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "anisyaoktaviana@student.uns.ac.id"
    },
    {
      "name": "Iva Candra Oktavira",
      "nim": "H0420039",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "ivaoktavira@student.uns.ac.id"
    },
    {
      "name": "IBRAHIM SURYA SANTOSO",
      "nim": "H0420036",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "Ibrahimss.1610@student.uns.ac.id"
    },
    {
      "name": "Arsita Dyah Wiratri",
      "nim": "H0419004",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "arsitadyahwiratri@student.uns.ac.id"
    },
    {
      "name": "Ichsan Jati Pamungkas",
      "nim": "H0419032",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "Ichsanjati@student.uns.ac.id"
    },
    {
      "name": "Ananda Rizky Widodo",
      "nim": "H0419003",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "anandarizkywidodo@student.uns.ac.id"
    },
    {
      "name": "Chrisma Orasa Nugrahani",
      "nim": "H0416016",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2016,
      "email": "chrismahani@student.uns.ac.id"
    },
    {
      "name": "Ma'rifatul Ummayah",
      "nim": "H0420046",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "maya212@student.uns.ac.id"
    },
    {
      "name": "SABNA KUMALASARI",
      "nim": "H0420075",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "sabnakumalasari@student.uns.ac.id"
    },
    {
      "name": "Abi",
      "nim": "H0417002",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "abiyoso@student.uns.ac.id"
    },
    {
      "name": "Tsalis Ridhani Yuniar Swastika",
      "nim": "H0419096",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "tsalisridhani@student.uns.ac.id"
    },
    {
      "name": "Muhamad Wahid Agung Saputro",
      "nim": "H0417047",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "agungcg24@student.uns.ac.id"
    },
    {
      "name": "Hasnaini Tungga Dewi",
      "nim": "H0418033",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2018,
      "email": "hasnainitd@student.uns.ac.id"
    },
    {
      "name": "Lusi Hikmawati",
      "nim": "H0417039",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "hikmawatilusi@student.uns.ac.id"
    },
    {
      "name": "Anggun Rifay Fentria",
      "nim": "H0417009",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "anggun_rifay@student.uns.ac.id"
    },
    {
      "name": "Riskia Akbar Ramadhan",
      "nim": "H0418070",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2018,
      "email": "riskiaakbarr@student.uns.ac.id"
    },
    {
      "name": "Jessica Arum Sabattini",
      "nim": "H0418037",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2018,
      "email": "sabattiniarums554@student.uns.ac.id"
    },
    {
      "name": "Distantya Ika Putri Hanifa",
      "nim": "H0419016",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "distantyaikha@student.uns.ac.id"
    },
    {
      "name": "Marfu'ah Shalihah",
      "nim": "H0417041",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "fuah3112@student.uns.ac.id"
    },
    {
      "name": "Lingga Sukma Handari",
      "nim": "H0419044",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "linggasukma@student.uns.ac.id"
    },
    {
      "name": "Destrian Sofiana",
      "nim": "H0420023",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "sofiandest@student.uns.ac"
    },
    {
      "name": "Karlindya Rahma",
      "nim": "H0419040",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "karlindyarahma@student.uns.ac.id"
    },
    {
      "name": "Roisatul Khoiriyati",
      "nim": "H0417065",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "rakyk01@student.uns.ac.id"
    },
    {
      "name": "nadia ananingsyah sekar ayu",
      "nim": "h0419060",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "nadinesky@student.uns.ac.id"
    },
    {
      "name": "Hilda Cahya Yolanda",
      "nim": "H0418034",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2018,
      "email": "Hildacahya10@student.uns.ac.id"
    },
    {
      "name": "Suryani Latifah M",
      "nim": "H0417075",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "suryanilatifah@student.uns.ac.id"
    },
    {
      "name": "Raditya Oktavian pramudya",
      "nim": "H0420069",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "radityaoktavianp@student.uns.ac.id"
    },
    {
      "name": "Eirene Asharela Indraswari Putri",
      "nim": "H0420026",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "eireneasharela@student.uns.ac.id"
    },
    {
      "name": "Tri Maulanasari",
      "nim": "H0417077",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "tri.maulanasari@student.uns.ac.id"
    },
    {
      "name": "Ferlita Azadhea Sasqia Putri",
      "nim": "H0417029",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "ferlitaazadhea05@gmail.com"
    },
    {
      "name": "Nadia Widya Arum",
      "nim": "H0417049",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "nadiawidyaarum@student.uns.ac.id"
    },
    {
      "name": "NAUFAL RASTRA SHUBHI",
      "nim": "H0420060",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "naufalrastra310701@student.uns.ac.id"
    },
    {
      "name": "Raulliano Bagus Aguiera",
      "nim": "H0420072",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "Raullianodeltat@student.uns.ac.id"
    },
    {
      "name": "Ardila Bela Aprillia",
      "nim": "H0420012",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "ardila.aprilliabela@student.uns.ac.id"
    },
    {
      "name": "Hasna Nazihah",
      "nim": "H0417032",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "hasna.nazihah@student.uns.ac.id"
    },
    {
      "name": "Ilham Muharom",
      "nim": "H0418036",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2018,
      "email": "ilhammuharom02@student.uns.ac.id"
    },
    {
      "name": "Rieke Salsabila",
      "nim": "H0417059",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "salsabilarieke19@student.uns.ac.id"
    },
    {
      "name": "Farchan",
      "nim": "H0418025",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2018,
      "email": "Farchan_septya99@student.uns.ac.id"
    },
    {
      "name": "Rachmah Prada Yunita",
      "nim": "H0420067",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "rachmahprada28@student.uns.ac.id"
    },
    {
      "name": "Elshafia Alya Desia Nugroho",
      "nim": "H0419018",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "elshafiaalya@student.uns.ac.id"
    },
    {
      "name": "KHRISNA ADHY PURNOMO",
      "nim": "F3617031",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "khrisnaadhyp@student.uns.ac.id"
    },
    {
      "name": "Nahtania Nur Syafa",
      "nim": "H0420058",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "nahtania@student.uns.ac.id"
    },
    {
      "name": "Nadia Husna Hapsari",
      "nim": "H0419061",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "nadiahusnahapsari@student.uns.ac.id"
    },
    {
      "name": "Ndaru Bagas Prasetya",
      "nim": "H0418051",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2018,
      "email": "prasetya.ndaru09@student.uns.ac.id"
    },
    {
      "name": "Almira Mutiara Wulandari",
      "nim": "H0417007",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2017,
      "email": "almtdriii99@student.uns.ac.id"
    },
    {
      "name": "Fattah Hayu Savitri",
      "nim": "H0419024",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2019,
      "email": "fattahhayus@student.uns.ac.id"
    },
    {
      "name": "Ichsan Nurrochim",
      "nim": "H0418035",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2018,
      "email": "Nurrochim554@student.uns.ac.id"
    },
    {
      "name": "Rafly Fatkhurrahim",
      "nim": "H0420070",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "raflyfatkhurrahim@student.uns.ac.id"
    },
    {
      "name": "Didin Ardi Hidayat",
      "nim": "H0418022",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2018,
      "email": "didinardi99@student.uns.ac.id"
    },
    {
      "name": "Salsabila Putri Shalihah",
      "nim": "H0420078",
      "departemen": "Penyuluhan dan Komunikasi Pertanian",
      "year": 2020,
      "email": "sabilprisal@student.uns.ac.id"
    },
    {
      "name": "Ida Dwi Sutrisni",
      "nim": "H0419033",
      "departemen": "Penyuluhan dan komunikasi pertanian",
      "year": 2019,
      "email": "idadwisutrisni91@student.uns.ac id"
    },
    {
      "name": "Anggita Oktaviani Hafizhah",
      "nim": "H0420007",
      "departemen": "Penyuluhan dan komunikasi pertanian",
      "year": 2020,
      "email": "tatabaroroh21@student.uns.ac.id"
    },
    {
      "name": "Wawan Ariawan",
      "nim": "H0817110",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "wawanariawan07@student.uns.ac.id"
    },
    {
      "name": "Ghulam Tasdiqie Ahmad",
      "nim": "H0818035",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "ghulamtasdiqieahmad@student.uns.ac.id"
    },
    {
      "name": "Cindy Wulandari",
      "nim": "H0819030",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "Cindy_wulandar1@student.uns.ac.id"
    },
    {
      "name": "Ade Candra Puspita",
      "nim": "H0819001",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "adecandrapuspita01@student.uns.ac.id"
    },
    {
      "name": "Hilma Tannisa Akhyasunnas",
      "nim": "H0819063",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "hilmatannisa@student.uns.ac.id"
    },
    {
      "name": "Ignatius Galih Ari Wibowo",
      "nim": "H0819065",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "ignatiusgalih@student.uns.ac id"
    },
    {
      "name": "Gisela Lintang Maheswarina",
      "nim": "H0819061",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "maheslintang@student.uns.ac.id"
    },
    {
      "name": "Ishtar Khalifah",
      "nim": "H0819070",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "Kalishtar.03@student.uns.ac.id"
    },
    {
      "name": "Hudzaifa Musyaffa Iqbal",
      "nim": "H0818041",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "hudzaifah.budiman@student.uns.ac.id"
    },
    {
      "name": "Dwi Purnamasari",
      "nim": "H0819044",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "dwipurnamasari@student.uns.ac.id"
    },
    {
      "name": "Atila Windi Kurniawati",
      "nim": "H0819023",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "atilawindi_21@student.uns.ac.id"
    },
    {
      "name": "Putri Siti Awaliyah",
      "nim": "H0818083",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "putriawaliyah51@student.uns.ac.id"
    },
    {
      "name": "Nadhif Darwinto Aji",
      "nim": "H0818071",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "nadhifdarwintoaji@student.uns.ac.id"
    },
    {
      "name": "Nur Ismail Darojat",
      "nim": "H0820095",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "nurismaildrjt@student.uns.ac.id"
    },
    {
      "name": "Fadhil Ichwan Al Akbar",
      "nim": "H0820034",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "fadhilichwan15@student.uns.ac.id"
    },
    {
      "name": "Firdausa Rahmanda",
      "nim": "H0818033",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "firdarahmanda@student.uns.ac.id"
    },
    {
      "name": "Sri Astuti",
      "nim": "H0817099",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "sriastuti0899@student.uns.ac.id"
    },
    {
      "name": "Deandra Suci Nur Widayati",
      "nim": "H0819036",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "Deandra.suci12@student.uns.ac.id"
    },
    {
      "name": "Alfan Hidayat",
      "nim": "H0819008",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "alfanhidayatuns@student.uns.ac.id"
    },
    {
      "name": "Amalia Febriyani",
      "nim": "H0819012",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "amalia.fbr1@student.uns.ac.id"
    },
    {
      "name": "Alvina Damayanti",
      "nim": "H0819011",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "alvndamayanti@student.uns.ac.id"
    },
    {
      "name": "Abdul Latif Alghifari",
      "nim": "H0818001",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "abdullatifalghifari15@student.uns.ac.id"
    },
    {
      "name": "Hollanda Bronovita Ulfa",
      "nim": "H0819064",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "hollandabronovita@student.uns.ac.id"
    },
    {
      "name": "Hanifah Ambar Azizah",
      "nim": "H0818038",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "hanifahambar99@student.uns.ac.id"
    },
    {
      "name": "Febriani Puspitaningrum",
      "nim": "H0819055",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "befipuspita@student.uns.ac.id"
    },
    {
      "name": "Revy Satria Ediatama",
      "nim": "H0818086",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "revy.satriaediatama@student.uns.ac.id"
    },
    {
      "name": "Parica Chairunnisa",
      "nim": "H0817077",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "paricacha@student.uns.ac.id"
    },
    {
      "name": "Lia Leviana",
      "nim": "H0818058",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "lialeviana58@student.uns.ac.id"
    },
    {
      "name": "Wahidah Izzatus Silmi",
      "nim": "H0818104",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "wahidahizzatus30@student.uns.ac.id"
    },
    {
      "name": "Indah Khoirunnisa",
      "nim": "H0819067",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "ininisa86@student.uns.ac.id"
    },
    {
      "name": "Faridah Humane Saraswati",
      "nim": "H0819050",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "faridahhumane@student.uns.ac.id"
    },
    {
      "name": "Fitria Agni Kusumawati",
      "nim": "H0817036",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "fitriaagni12@student.uns.ac.id"
    },
    {
      "name": "Fitriyani Mega Utami",
      "nim": "H0820047",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "fitriyanimegaa@student.uns.ac"
    },
    {
      "name": "Rizka Amarylis S",
      "nim": "H0819098",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "rizkaamarylis8@student.uns.ac.id"
    },
    {
      "name": "Letisia Nur Safitriyani",
      "nim": "H0819078",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "letisafitri0702@student.uns.ac.id"
    },
    {
      "name": "Budi Wijayanto",
      "nim": "H0818017",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "budiwijayanto717@student.uns.ac.id"
    },
    {
      "name": "Intan Ardyningrum",
      "nim": "H0817045",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "intanardyningrum@student.uns.ac.id"
    },
    {
      "name": "Iis Sawitri",
      "nim": "H0819066",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "iissawitri005@gmail.com"
    },
    {
      "name": "Nur Aeni",
      "nim": "H0818080",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "isyani428.com@student.uns.ac.id"
    },
    {
      "name": "Sandra SS",
      "nim": "H0818093",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "Sandra.surya5447@student.uns.ac.id"
    },
    {
      "name": "Alfian Bayu Pamungkas",
      "nim": "H0818007",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "albayu@student.uns.ac.id"
    },
    {
      "name": "Dewi Sartika",
      "nim": "H0819038",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "kadewisa14@student.uns.ac.id"
    },
    {
      "name": "Iin Mutmainah",
      "nim": "H0818043",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "iinmtmnh05@student.uns.ac.id"
    },
    {
      "name": "Nisrina Nuraini",
      "nim": "H0819089",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "nisrina.nuraini29@student.uns.ac.id"
    },
    {
      "name": "Christina Pralambang Tunggal Siwi",
      "nim": "H0819029",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "christinapts@student.uns.ac.id"
    },
    {
      "name": "Lailatun Fauziyyah",
      "nim": "H0819075",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "lailatunfauziyyah@student.uns.ac.id"
    },
    {
      "name": "Aulia Lintang Fitranti",
      "nim": "H0819024",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "aulialintang77@student.uns.ac.id"
    },
    {
      "name": "Siti Fatimah",
      "nim": "H0819104",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "sitifatimah_24@student.uns.ac.id"
    },
    {
      "name": "Ummi Rohmawati",
      "nim": "H0817107",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "ummirohmawati@student.uns.ac.id"
    },
    {
      "name": "Rhegar Maharadika Edy Pamungkas",
      "nim": "H8019096",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "rhegar.maharadika@student.uns.ac.id"
    },
    {
      "name": "Fatimah Az Zahra",
      "nim": "H0819051",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "zahrafatimah09@student.uns.ac.id"
    },
    {
      "name": "Isnarosan Suci Andriani",
      "nim": "H0818046",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "isnarosansuci@student.uns.ac.id"
    },
    {
      "name": "Adi Warsito",
      "nim": "H0817001",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "adiwarsito665@student.uns.ac.id"
    },
    {
      "name": "Anita Dewi Ashari",
      "nim": "H0819017",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "anitadewi@student.uns.ac.id"
    },
    {
      "name": "Dwi Kristian Waruwu",
      "nim": "H0817115",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "dwikristianwar@student.uns.ac.id"
    },
    {
      "name": "Dinda putri nursamawati",
      "nim": "h0818023",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "dputri1237@student.uns.ac.id"
    },
    {
      "name": "Hendry Dwi Noor W",
      "nim": "H0819062",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "hendrywibisono835@student.uns.ac.id"
    },
    {
      "name": "Nabilla Gita Ratrifa",
      "nim": "H0818070",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "ratrifanabillagita.ngr@student.uns.ac.id"
    },
    {
      "name": "Arma Ramadhan",
      "nim": "H0818013",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "Armaramadhan99@student.uns.ac.id"
    },
    {
      "name": "Aziz Pungky A",
      "nim": "H0819025",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "azizpungky@student.uns.ac.id"
    },
    {
      "name": "Fitria Nur Hidayah",
      "nim": "H0819057",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "fitrianurhidayah@student.uns.ac.id"
    },
    {
      "name": "Bilal Anom A",
      "nim": "H0818016",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "bilalanomanbiyaksa@student.uns.ac.id"
    },
    {
      "name": "Vania D H",
      "nim": "H0818103",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "Vania_dwike@student.uns.ac.ud"
    },
    {
      "name": "Dina Putri Ambarwati",
      "nim": "H0819040",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "dinaputam@student.uns.ac.id"
    },
    {
      "name": "Khinasthi Dias Prastiwi",
      "nim": "H0819073",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "khinasthi28.dias@student.uns.ac.id"
    },
    {
      "name": "Atika Maulida A",
      "nim": "H0820018",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "atikaazzahra@student.uns.ac.id"
    },
    {
      "name": "Andika Gifari Dwitama",
      "nim": "H0817009",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "gifariandika@student.uns.ac.id"
    },
    {
      "name": "Khairum Bannaati Ahmad",
      "nim": "H0819072",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "Khairum_ahmd@student.uns.ac.id"
    },
    {
      "name": "FAJAR AYU NUGRAHENI",
      "nim": "H0819049",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "fajarayunugraheni2001@gmail.com"
    },
    {
      "name": "Faiz Oktavian Huda",
      "nim": "H0819048",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "rayhan.tshani2009@student.uns.ac.id"
    },
    {
      "name": "Iffan Izzul Haq",
      "nim": "H0818042",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "iffanhaq@gmail.com"
    },
    {
      "name": "Muhammad Fuad Al Hazmi",
      "nim": "H0819084",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "fuad28alhazmi@student.uns.ac.id"
    },
    {
      "name": "Adisti Regita Ramadani",
      "nim": "H0819004",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "agrariadisti_01@student.uns.ac.id"
    },
    {
      "name": "Nabila Threa Fernanda",
      "nim": "H0820089",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "nabilafrnd@student.uns.ac.id"
    },
    {
      "name": "Faqih Fawwaz Muhammad",
      "nim": "H0820036",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "faqihfawwazmuh@student.uns.ac.id"
    },
    {
      "name": "Febri Nur Yasin",
      "nim": "H0819054",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "febrinur_25@student.uns.ac.id"
    },
    {
      "name": "Monica Tri Rahma",
      "nim": "H0820079",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "monicatrirahma@student.uns.ac.id"
    },
    {
      "name": "Mayang Risti K.D",
      "nim": "H0819080",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "mayangristi2612@student.uns.ac.id"
    },
    {
      "name": "Dahriyanti",
      "nim": "H0819034",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "dahriyanti28@student.uns.ac.id"
    },
    {
      "name": "Dwi Aulia",
      "nim": "H0819043",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "d.aulia1603@student.uns.ac.id"
    },
    {
      "name": "Salsabila Andjani",
      "nim": "H0820112",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "s.andjani19@student.uns.ac.id"
    },
    {
      "name": "Indriyani Eka Sari",
      "nim": "H0819068",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "indrieka@student.uns.ac.id"
    },
    {
      "name": "Aditya Ilham Saptiawan",
      "nim": "H0817003",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "Radenilham21@student.uns.ac.id"
    },
    {
      "name": "Inayya Putri Pidata",
      "nim": "H0817044",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "inayya.pidata@student.uns.ac.id"
    },
    {
      "name": "Arifianton Pemdyan NR",
      "nim": "H0817015",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "fianvengeace01@student.uns.ac.id"
    },
    {
      "name": "Azizah Chaula Zukiya",
      "nim": "H0817021",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "azizahchaula@student.uns.ac.id"
    },
    {
      "name": "Arda Jowansa Fladi Maymetrika",
      "nim": "H0819021",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "ardajowansafm@student.uns.ac.id"
    },
    {
      "name": "Sultan Hidayatulloh",
      "nim": "H0819105",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "sultanhidayatulloh5@student.uns.ac.id"
    },
    {
      "name": "Annis Sholikah",
      "nim": "H0819018",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "annisshol17@student.uns.ac.id"
    },
    {
      "name": "Briliantika Putri Anggita",
      "nim": "H0819027",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "briliantika.p@student.uns.ac.id"
    },
    {
      "name": "Ferry Rachmanto",
      "nim": "H0818032",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "ferryrachmanto@student.uns.ac.id"
    },
    {
      "name": "Mohammad Rheza Hendriwinata",
      "nim": "H0818065",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "rheza.hendriwinata@student.uns.ac.id"
    },
    {
      "name": "Puji Rahayy",
      "nim": "H0819092",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "pujirhy09@student.uns.ac.id"
    },
    {
      "name": "Annisaa Widyaningrum",
      "nim": "H0819020",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "annisaawidyaningrum@student.uns.ac.id"
    },
    {
      "name": "Rizki Dwi Utami",
      "nim": "H0819099",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "Kikirdu@student.uns.ac.id"
    },
    {
      "name": "Endang Pratiwi",
      "nim": "H0818029",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "endang_pratiwi23@student.uns.ac.id"
    },
    {
      "name": "Habibah Nurul Falah",
      "nim": "H0818037",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "habibahnurulf@student.uns.ac.id"
    },
    {
      "name": "Azmi Fabila Anggita S",
      "nim": "H0819026",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "azmifabila@student.uns.ac.id"
    },
    {
      "name": "Tasya Amilia",
      "nim": "H0818096",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "tasya.amilia@student.uns.ac.id"
    },
    {
      "name": "Maheswari Candraningtyas",
      "nim": "H0819079",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "candracandra03@student.uns.ac.id"
    },
    {
      "name": "Antonia Roselina Delfina Pauline",
      "nim": "H0820014",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "delfina.pauline17@student.uns.ac.id"
    },
    {
      "name": "Cita Ayu Setia Ningsih",
      "nim": "H0820024",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "citaayu2002@student.uns.ac.id"
    },
    {
      "name": "Linda Apriliana Peryoga Putri",
      "nim": "H0820070",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "aprilianalinda1@student.uns.ac.id"
    },
    {
      "name": "Lusia Dara Sari",
      "nim": "H0820072",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "lusia.darasari@student.uns.ac.id"
    },
    {
      "name": "Cahya Sekar Imani",
      "nim": "H0820023",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "cahyasi58@student.uns.ac.id"
    },
    {
      "name": "Mahdaviqia Dharmawan",
      "nim": "H0820075",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "mahdaviqia123@student.uns.ac.id"
    },
    {
      "name": "alifia cerista mardani",
      "nim": "h0820010",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "alifiaceristam@student.uns.ac.id"
    },
    {
      "name": "Sekar Adi Wijayanti",
      "nim": "H0820115",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "sekaradiw26@student.uns.ac.id"
    },
    {
      "name": "Amrina Rosada",
      "nim": "H0820012",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "amrina28@student.uns.ac.id"
    },
    {
      "name": "Olivia Hilda Indra Janti",
      "nim": "H0820099",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "Oliviahilda16@student.uns.ac.id"
    },
    {
      "name": "Eldya Durrani Canceregna Vardanta",
      "nim": "H0820031",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "eldyadurrani@student.ac.id"
    },
    {
      "name": "Faa'iz Zaki Mufid",
      "nim": "H0820033",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "faaiz_zaki21@student.uns.ac.id"
    },
    {
      "name": "Listya Hatmadiya",
      "nim": "H0820071",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "listyahtmdy@student.uns.ac.id"
    },
    {
      "name": "zakki millati asna",
      "nim": "H0820124",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "millati57@student.uns.ac.id"
    },
    {
      "name": "Nafisah Rahmiantini",
      "nim": "H0820090",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "nafisahrahmiantini12@student.uns.ac.id"
    },
    {
      "name": "Salsabila Sampurnani",
      "nim": "H0820113",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "salsabilasampurnani@student.uns.ac.id"
    },
    {
      "name": "Arsita Kurniawati",
      "nim": "H0820017",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "arsitaakr_24@student.uns.ac.id"
    },
    {
      "name": "Aisyah Hana Nurhafizhah",
      "nim": "H0820007",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "aisyahhana@student.uns.ac.id"
    },
    {
      "name": "Putri Anggita Suksmasari",
      "nim": "H0820102",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "putrianggita@student.uns.ac.id"
    },
    {
      "name": "Aditya Pramudya Erlangga",
      "nim": "H0820002",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "peaaditya733@student.uns.ac.id"
    },
    {
      "name": "Denny Fauzi Arya Nugraha",
      "nim": "H0820026",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "dennyfauzi12@student.uns.ac.id"
    },
    {
      "name": "Bintang Cahyo Wibowo",
      "nim": "H0820022",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "bintangcahyo000@student.uns.ac.id"
    },
    {
      "name": "Farah Amalia Harviana",
      "nim": "H0820037",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "farahamaliaharviana@student.uns.ac.id"
    },
    {
      "name": "Ibnu Nafik",
      "nim": "H0820051",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "ibnu_nafik@student.uns.ac.id"
    },
    {
      "name": "Luthfian Renaltha Ibrahim",
      "nim": "H0820074",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "luthfianrenaltha@student.uns.ac.id"
    },
    {
      "name": "Septiana Putri Utami",
      "nim": "H0820116",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "septianaputriutami@student.uns.ac.id"
    },
    {
      "name": "Fadistika Rahmadini",
      "nim": "H0820035",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "fadistikarahmadini@student.uns.ac.id"
    },
    {
      "name": "Ageng Teguh Pamuji",
      "nim": "H0820005",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "agengteguhpamuji@student.uns.ac.id"
    },
    {
      "name": "Rafif Muharram Ar-Rasyid",
      "nim": "H0820105",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "rafif823@student.uns.ac.id"
    },
    {
      "name": "Aditya Ramadan Nur Hidayah",
      "nim": "H0820003",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "adityarnh@student.uns.ac.id"
    },
    {
      "name": "Yoga Aji Pradana",
      "nim": "H0818109",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "yoga.a.pradana@student.uns.ac.id"
    },
    {
      "name": "Karlina Yuliati",
      "nim": "H0818051",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "yuliatikarlina19@student.uns.ac.id"
    },
    {
      "name": "Irdan Muzakki",
      "nim": "H0820061",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "irdanmuzakki9@student.uns.ac.id"
    },
    {
      "name": "Istiqomah Dita Maharani",
      "nim": "H0818048",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "dita160100@student.uns.ac.id"
    },
    {
      "name": "Rayyan Muhammad",
      "nim": "H0819095",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "rayyanmhmd12@student.uns.ac.id"
    },
    {
      "name": "Latifah Dita Cahyani",
      "nim": "H0820067",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "latifahditacahyani@student.uns.ac.id"
    },
    {
      "name": "Agil Ariadi Asmoaji",
      "nim": "H0819007",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "agil_ariadi@student.uns.ac.id"
    },
    {
      "name": "ardhi kurnianto",
      "nim": "H0818012",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "ardhikurnianto.24@student.uns.ac.id"
    },
    {
      "name": "Salsa Noor Azizah",
      "nim": "H0820111",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "salsanooraz@student.uns.ac.id"
    },
    {
      "name": "Muri Aditama",
      "nim": "H0820087",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "muriaditama15@gmail.com"
    },
    {
      "name": "Tsanya Atikah Oktaviana",
      "nim": "H0820119",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "tsanyaatikah@student.uns.ac.id"
    },
    {
      "name": "Febiati Nur Arofah",
      "nim": "H0820041",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "febianarfh@student.uns.ac.id"
    },
    {
      "name": "Fikri Achmad fahrezi",
      "nim": "H0820043",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "fikriachmad11@student.uns.ac"
    },
    {
      "name": "Ilyasa Abyan Afkari",
      "nim": "H0820054",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "ilyasaafkari@student.uns.ac.id"
    },
    {
      "name": "Jericho Pandita Gunawan",
      "nim": "H0820064",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "jericho.pg372@student.uns.ac.id"
    },
    {
      "name": "Firzanah Adya Talitha",
      "nim": "H0820045",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "firzanahadya@student.uns.ac.id"
    },
    {
      "name": "Diah Putri Kurnia",
      "nim": "H0820028",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "diahputrik02@student.uns.ac.is"
    },
    {
      "name": "Tisa Nur Khasanah",
      "nim": "H0817104",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "tisank@student.uns.ac.id"
    },
    {
      "name": "Poppy Litasari",
      "nim": "H0820101",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "poppylitasari@student.uns.ac.id"
    },
    {
      "name": "Nabila Azka Putri",
      "nim": "H0820088",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "nabilaazkaputri27@student.uns.ac.id"
    },
    {
      "name": "Liliyes Lina Tory Aisiyah",
      "nim": "H0820068",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "liliyeslina15@student.uns.ac.id"
    },
    {
      "name": "Aksel Pangestu Fitrahmadani Mokora",
      "nim": "H0820008",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "Akselpangestu77@student.uns.ac.id"
    },
    {
      "name": "Indra Bagaskara",
      "nim": "H0820057",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "indrabagas444@student.uns.ac.id"
    },
    {
      "name": "Arih Rahmawati",
      "nim": "H0820016",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "arihrahmawati@student.uns.ac.id"
    },
    {
      "name": "Fattah Ul Janah",
      "nim": "H0820039",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "fattahuljnh07@student.uns.ac.id"
    },
    {
      "name": "Ambarwati Nurjanah",
      "nim": "H0820011",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "ambarwatinurjanah08@student.uns.ac.id"
    },
    {
      "name": "Fitri Nur Aziizah",
      "nim": "H0820046",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "fitriaziizah@student.uns.ac.id"
    },
    {
      "name": "Cesianne Zoe Setiawan",
      "nim": "H0819028",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "cesiannezoesetiawan@student.uns.ac.id"
    },
    {
      "name": "Selamita Rusdiana Kurniasari",
      "nim": "H0819101",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "selamitarusdiana49@student.uns.ac.id"
    },
    {
      "name": "Naufal Pratama Widya Waskito",
      "nim": "H0818076",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "naual16@student.uns.ac.id"
    },
    {
      "name": "Zeino Heka Widhi Raharjo",
      "nim": "H0818112",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "zeinoheka@student.uns.ac.id"
    },
    {
      "name": "Mia Alfiyatus Sholehah",
      "nim": "H0818063",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "miaalfiya05@student.uns.ac.id"
    },
    {
      "name": "Isti Ayuning Rahmawati",
      "nim": "H0818047",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "istiayuning@student.uns.ac.id"
    },
    {
      "name": "Dyah arum eka nur arifah",
      "nim": "H0818027",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "dyaharummmm21@student.uns.ac.id"
    },
    {
      "name": "Maulana Hasan Yusuf",
      "nim": "H0820077",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "maulanahasanyusuf@student.uns.ac.id"
    },
    {
      "name": "Dimas Susanto",
      "nim": "H0818022",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "dimassusanto22@student.uns.ac.id"
    },
    {
      "name": "Dhiya Zakkiyah Jahro Azizah",
      "nim": "H0820027",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "dhiyazakkiyah19@student.uns.ac.id"
    },
    {
      "name": "Leni Irawati",
      "nim": "H0818057",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "leni.irawati17@student.uns.ac.id"
    },
    {
      "name": "Ahmad Hanafi",
      "nim": "H0818006",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "ahmadHanafi.uns.ac id@student.uns.ac.id"
    },
    {
      "name": "Agata Widhi Feby Ratna Sari",
      "nim": "H0818005",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "agata_widhifrs.2000@student.uns.ac.id"
    },
    {
      "name": "Mayang Angling Arum Sari",
      "nim": "H0818062",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "mayangangling@student.uns.ac.id"
    },
    {
      "name": "Cornelya Venny Wijaya",
      "nim": "H0819032",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "cornelyavenny.vw@student.uns.ac.id"
    },
    {
      "name": "Heruka Ahmad Milareva",
      "nim": "H0818040",
      "departemen": "Agribisnis",
      "year": 2018,
      "email": "herukaahmadmilareva@student.uns.ac.id"
    },
    {
      "name": "Cindy Puspitasari",
      "nim": "H0817025",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "cindypuspitasari@student.uns.ac.id"
    },
    {
      "name": "Ajeng Salsa Nareta",
      "nim": "H0817006",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "ajengsalsa243@student.uns.ac.id"
    },
    {
      "name": "Annisa Setyaningrum",
      "nim": "H0819019",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "annisasetyaningrum19@student.uns.ac.id"
    },
    {
      "name": "Adhias Nabilla Noor Zahrani",
      "nim": "H0819002",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "nabilla.zahrani97@student.uns.ac.id"
    },
    {
      "name": "Daniar Taufiqurrahman",
      "nim": "H0819035",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "daniartr21@student.uns.ac.id"
    },
    {
      "name": "Evan Agas Hanafi",
      "nim": "H0820032",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "agashanafi@student.uns.ac.id"
    },
    {
      "name": "Fauzan Hadyan Aryaputra",
      "nim": "H0819052",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "fauzanaryaputra1507@student.uns.ac.id"
    },
    {
      "name": "Febrinna Hannis Faradilla",
      "nim": "H0820042",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "febrinnahannisf@student.uns.ac.id"
    },
    {
      "name": "Aditya Eben Ezer Siahaan",
      "nim": "H0819005",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "adityaebenezer@student.uns.ac.id"
    },
    {
      "name": "Febrypanka Tristan Leatemia",
      "nim": "H0819056",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "tristan.leatemia7@student.uns.ac.id"
    },
    {
      "name": "Ignatius Galih Ari Wibowo",
      "nim": "H0819065",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "ignatiusgalih@student.uns.ac.id"
    },
    {
      "name": "Dinul Qoyyimah",
      "nim": "H0819041",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "dinulqoyyimah@student.uns.ac.id"
    },
    {
      "name": "Tedi Kurniadi",
      "nim": "H0817102",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "tedikurniadi@student.uns.ac.id"
    },
    {
      "name": "Sarah Nisa'urrahmah",
      "nim": "H0817092",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "sarahnisau@student.uns.ac.id"
    },
    {
      "name": "Krisnandhita Bayu Ajie",
      "nim": "H0817048",
      "departemen": "Agribisnis",
      "year": 2017,
      "email": "kbayuajie5115@student.uns.ac.id"
    },
    {
      "name": "Damar Ariefin",
      "nim": "H0820025",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "obelo2marfin@student.uns.ac.id"
    },
    {
      "name": "Luthfia Andri Astuti",
      "nim": "H0820073",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "Luthfiandria16@student.uns.ac.id"
    },
    {
      "name": "Gilang Aji Saloka",
      "nim": "H0819059",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "salokagilang21@student.uns.ac.id"
    },
    {
      "name": "Nimas Suci Kusuma Melati",
      "nim": "H0819088",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "nimassucikm@student.uns.ac.id"
    },
    {
      "name": "Rifqi Aji Maulana",
      "nim": "H0819097",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "Rifqiaji_2304@student.uns.ac.id"
    },
    {
      "name": "Anggraini Nur Indah Sejati",
      "nim": "H0819016",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "anggrainiindah1@student.uns.ac.id"
    },
    {
      "name": "Adinda Vinka Ayu Hapsari",
      "nim": "H0819003",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "vinkahapsari31@student.uns.ac.id"
    },
    {
      "name": "Fahmi Aziz",
      "nim": "H0819046",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "azizfahmi995@student.uns.ac.id"
    },
    {
      "name": "Kartika Endah Puspita",
      "nim": "H0819071",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "kartika_endah@student.uns.ac.id"
    },
    {
      "name": "INEZ DAMAYANTI",
      "nim": "H0819069",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "inez.damay@student.uns.ac.id"
    },
    {
      "name": "Yeni Astiwi",
      "nim": "H0819115",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "yeniast@student.uns.ac.id"
    },
    {
      "name": "Galuh Wahyu Pratiwi",
      "nim": "H0819058",
      "departemen": "Agribisnis",
      "year": 2019,
      "email": "Galuhpratiwi46@student.uns.ac.id"
    },
    {
      "name": "Yohana Brenda Aprilia",
      "nim": "H0820123",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "yohanabrenda22@student.uns.ac.id"
    },
    {
      "name": "Natasya Erischa Pranadita",
      "nim": "H0820092",
      "departemen": "Agribisnis",
      "year": 2020,
      "email": "Natasyaerischa_08@student.uns.ac.id"
    }
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fdc7a92b2ced16b7fcb3f40";
    participant.session.number = 2;
    participant.session.min = new Date("2020-12-19T21:00:00.000+07:00");
    participant.session.max = new Date("2020-12-20T03:00:00.000+07:00");

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
