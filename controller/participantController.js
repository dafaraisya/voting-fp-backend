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
      .sort({ _id: 1 })
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
      name: "Reva Amudyana Dewayani",
      nim: "H0219079",
      departemen: "Ilmu Tanah",
      tahun: 2019,
      email: "revamudyana@student.uns.ac.id",
    },
    {
      name: "Muhammad Zarkasi",
      nim: "H0818068",
      departemen: "Agribisnis",
      tahun: 2018,
      email: "muhammadzarkasi@student.uns.ac.id",
    },
    {
      name: "Teguh Juliansyah Putra",
      nim: "H0218062",
      departemen: "Ilmu Tanah",
      tahun: 2018,
      email: "teguhjuliansyahputra.ixd@student.uns.ac.id",
    },
    {
      name: "Rafi Akbar Husain",
      nim: "H0519099",
      departemen: "Peternakan",
      tahun: 2019,
      email: "akbarrafi34756@student.uns.ac.id",
    },
    {
      name: "Veronica Alfina Dellachristi",
      nim: "H0719182",
      departemen: "Agroteknologi",
      tahun: 2019,
      email: "veronicadellachristi@student.uns.ac.id",
    },
    {
      name: "Athala Rania Insyira",
      nim: "H0719025",
      departemen: "Agroteknologi",
      tahun: 2019,
      email: "rathala40@student.uns.ac.id",
    },
    {
      name: "Fidelia Putri Bellyanda Krisdhiarto",
      nim: "H0220029",
      departemen: "Ilmu Tanah",
      tahun: 2020,
      email: "fideliaputri10@student.uns.ac.id",
    },
    {
      name: "Fito Albayat",
      nim: "H0220030",
      departemen: "Ilmu Tanah",
      tahun: 2020,
      email: "fitoalbayat@student.uns.ac.id",
    },
    {
      name: "Marsini",
      nim: "H0519077",
      departemen: "Peternakan",
      tahun: 2019,
      email: "marshsini@student.uns.ac.id",
    },
    {
      name: "Aurelianetta Girda Neysamora",
      nim: "H0220013",
      departemen: "Ilmu Tanah",
      tahun: 2020,
      email: "aurelianettagirda@gmail.com",
    },
    {
      name: "Dewi ocktavia ekawati",
      nim: "H0720049",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "dewiocktavia01@gmail.com",
    },
    {
      name: "Addina Harir Nur Azka",
      nim: "H0220001",
      departemen: "Ilmu Tanah",
      tahun: 2020,
      email: "addinaazka@student.uns.ac.id",
    },
    {
      name: "Happy Khaerani Nuvus",
      nim: "H0418031",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2018,
      email: "happykhaerani@student.uns.ac.id",
    },
    {
      name: "Hafida Narulita Sari",
      nim: "H0418029",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2018,
      email: "hafidafinarulita@student.uns.ac.id",
    },
    {
      name: "Alifian Z B",
      nim: "H0819010",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "bimbimantoro@student.uns.ac.id",
    },
    {
      name: "Nurita Miftakhul Janah",
      nim: "H0819090",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "nuritamifta@student.uns.ac.id",
    },
    {
      name: "Muhammad Iqbal Rifa'i",
      nim: "H0819085",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "rifaiqbal@student.uns.ac.id",
    },
    {
      name: "Widyaningrum Sekar Rini",
      nim: "H0819114",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "widyaningrumsr28@gmail.com",
    },
    {
      name: "Angga Susi Anjarwati",
      nim: "H0418012",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2018,
      email: "anggasusi15@student.uns.ac.id",
    },
    {
      name: "Khofifah Siti Nurwangsa",
      nim: "H0418040",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2018,
      email: "Khofifahsiti@student.uns.ac.id",
    },
    {
      name: "Muhammad Dafa Ramadhan Putra Amadya",
      nim: "H0819083",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "daffaramadhan.dr55@student.uns.ac.id",
    },
    {
      name: "Arsalan Amri Rakhshan Jaan Van Der Pol",
      nim: "H0720023",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "arsalanvanderpol@student.uns.ac.id",
    },
    {
      name: "Gayatri Sitoresmi",
      nim: "H0720075",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "gayatristrsm@student.uns.ac.id",
    },
    {
      name: "Muhammad Farhan Alfianto",
      nim: "H0720114",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "farhanalfianto125@student.uns.ac.id",
    },
    {
      name: "Novanda Wisnu Ardhana",
      nim: "H0720127",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "novandawisnuardhana@student.uns.ac.id",
    },
    {
      name: "Bintang Seta Samudra",
      nim: "H0720035",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "bintangseta77@student.uns.ac.id",
    },
    {
      name: "Sabitha Rista Dewanti",
      nim: "H0720155",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "sabitha@student.uns.ac.id",
    },
    {
      name: "Nurul I",
      nim: "H0720130",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "nurulistiqla01@student.uns.ac.id",
    },
    {
      name: "Zaid Zamany N",
      nim: "H0819118",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "nurrachman648@student.uns.ac.id",
    },
    {
      name: "Syahrul Ramadhan",
      nim: "H0720164",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "syahrul19@student.uns.ac.id",
    },
    {
      name: "Ivan Avicenna Arisandy",
      nim: "H0720094",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "ivankovavicenna@student.uns.ac.id",
    },
    {
      name: "Rona hadaya zain",
      nim: "H0720153",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "ronahadaya123@student.uns.ac.id",
    },
    {
      name: "Afifah Ayu Nur Aini",
      nim: "H0418003",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2018,
      email: "afifahayunuraini@student.uns.ac.id",
    },
    {
      name: "Dian Ayu Khairunnisa",
      nim: "H0819039",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "dianayu757@student.uns.ac.id",
    },
    {
      name: "Riza Noermala Putri",
      nim: "H0720147",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "rnputri14@gmail.com",
    },
    {
      name: "Alvian Maghribi Ihza Hartono",
      nim: "H0720010",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "alvihza202@student.uns.ac.id",
    },
    {
      name: "Erdhofin",
      nim: "H0720058",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "ofinerdhofin@student.uns.ac.id",
    },
    {
      name: "Ridwan Priyo Prayoga",
      nim: "H0520102",
      departemen: "Peternakan",
      tahun: 2020,
      email: "ridwanprayoga@student.uns.ac.id",
    },
    {
      name: "Elien Aprianti Faustin",
      nim: "H0819045",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "elienaprianti@student.uns.ac.id",
    },
    {
      name: "Giovani Ananda Alfareza",
      nim: "H0819060",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "giovanialfareza2001@gmail.com",
    },
    {
      name: "Faisal Ubaydillah Gilang Ramadhan",
      nim: "H0520039",
      departemen: "Peternakan",
      tahun: 2020,
      email: "faisalubaydillah1018@student.uns.ac.id",
    },
    {
      name: "Putri Ulaya Firyal",
      nim: "H0518071",
      departemen: "Peternakan",
      tahun: 2018,
      email: "putriulayafiryal@student.uns.ac.id",
    },
    {
      name: "indana istiqomah",
      nim: "H0720090",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "indanaistiqomah@student.uns.ac id",
    },
    {
      name: "Moya Trishna Pramasti",
      nim: "H0520074",
      departemen: "Peternakan",
      tahun: 2020,
      email: "moya3223@student.uns.ac.id",
    },
    {
      name: "Candha Aji Prakoso",
      nim: "H0520026",
      departemen: "Peternakan",
      tahun: 2020,
      email: "candhra_ap7@student.uns.ac.id",
    },
    {
      name: "Crestiano Anaz",
      nim: "H0520028",
      departemen: "Peternakan",
      tahun: 2020,
      email: "crestianoanaz2001@student.uns.ac.id",
    },
    {
      name: "Taufik Zulkarnain",
      nim: "H0520112",
      departemen: "Peternakan",
      tahun: 2020,
      email: "Zulkarnaun.7@student.uns.ac.id",
    },
    {
      name: "Yogi Setyo Pambudi",
      nim: "H0720173",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "yogisetyopambudi@student.uns.ac.id",
    },
    {
      name: "Nur Hidayatun Na'imah",
      nim: "H0519095",
      departemen: "Peternakan",
      tahun: 2019,
      email: "naimahn09@student.uns.ac.id",
    },
    {
      name: "Hendi Saputra Dewa",
      nim: "H0519063",
      departemen: "Peternakan",
      tahun: 2019,
      email: "hendidewa@student.uns.ac.id",
    },
    {
      name: "Alqolbu Layyin Arroqiiq",
      nim: "H0519013",
      departemen: "Peternakan",
      tahun: 2019,
      email: "Alqolbu.layyin7@student.uns.ac.id",
    },
    {
      name: "Aviana Nur R",
      nim: "H0519029",
      departemen: "Peternakan",
      tahun: 2019,
      email: "viadiany2504@student.uns.ac.id",
    },
    {
      name: "Imelda Renita Alfara",
      nim: "H0519065",
      departemen: "Peternakan",
      tahun: 2019,
      email: "imeldarenita91@student.uns.ac.id",
    },
    {
      name: "Zahwa azzahra",
      nim: "H0519130",
      departemen: "Peternakan",
      tahun: 2019,
      email: "azzahrazahwa16@student.uns.ac.id",
    },
    {
      name: "Rijal Muhammad Syuhada'",
      nim: "H0720143",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "rijal.syuhada@student.uns.ac.id",
    },
    {
      name: "Esra Puspita Hakiki Mandhegani",
      nim: "H0519052",
      departemen: "Peternakan",
      tahun: 2019,
      email: "kikimandhegani29@student.uns.ac.id",
    },
    {
      name: "Galih Henggar Jati",
      nim: "H0720072",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "galihhenggarjati@student.uns.ac.id",
    },
    {
      name: "Dinar Fitriandini",
      nim: "H0417021",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2017,
      email: "dinarfitri48@student.uns.ac.id",
    },
    {
      name: "Miftahul Jannah",
      nim: "H0918057",
      departemen: "Ilmu Teknologi Pangan",
      tahun: 2018,
      email: "miftahulj@student.uns.ac.id",
    },
    {
      name: "Fransisca Candra Dewi",
      nim: "H0720069",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "fransiscachandra55@student.uns.ac.id",
    },
    {
      name: "Arif Nur Hasyif",
      nim: "H0519024",
      departemen: "Peternakan",
      tahun: 2019,
      email: "arifnurhasyif@student.uns.ac.id",
    },
    {
      name: "Rizqi Luwih Saputri",
      nim: "H0720150",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "rizqiluwih23@student.uns.ac.id",
    },
    {
      name: "Ajeng Rifta Prembayun",
      nim: "H0219003",
      departemen: "Ilmu Tanah",
      tahun: 2019,
      email: "riftaajeng_19@student.uns.ac.id",
    },
    {
      name: "Aprinia Laikha yahenda Firda",
      nim: "H0720020",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "Aprinia_frd@student.uns.ac.id",
    },
    {
      name: "Annisa Kurnia Herlina",
      nim: "H0219010",
      departemen: "Ilmu Tanah",
      tahun: 2019,
      email: "annisa.kurniaherlina@student.uns.ac.id",
    },
    {
      name: "Sonhaji Pratito",
      nim: "H0217061",
      departemen: "Ilmu Tanah",
      tahun: 2017,
      email: "sonhajipratito@student.uns.ac.id",
    },
    {
      name: "Naufal Roem Isma’il",
      nim: "H0720125",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "roemismail31@student.uns.ac.id",
    },
    {
      name: "Nadia Alifia Rahma",
      nim: "H0718112",
      departemen: "Agroteknologi",
      tahun: 2018,
      email: "nadiaalifia@student.uns.ac.id",
    },
    {
      name: "Cantika Ratu Roseyana",
      nim: "H1020016",
      departemen: "Pengelolaan Hutan",
      tahun: 2020,
      email: "cantikaratu02@student.uns.ac.id",
    },
    {
      name: "Rhapsody Dwiki Widiantori",
      nim: "H0520101",
      departemen: "Peternakan",
      tahun: 2020,
      email: "rhapsodydwiki@student.uns.ac.id",
    },
    {
      name: "Diajeng Rahma Febriana",
      nim: "H1020021",
      departemen: "Pengelolaan Hutan",
      tahun: 2020,
      email: "diajengrf@student.uns.ac.id",
    },
    {
      name: "dina sukma sari",
      nim: "H1020022",
      departemen: "Pengelolaan Hutan",
      tahun: 2020,
      email: "dinasukmasari@student.uns.ac.id",
    },
    {
      name: "Dechan Cantona Jhunta Mahastra",
      nim: "H1020020",
      departemen: "Pengelolaan Hutan",
      tahun: 2020,
      email: "dechancantona@student.uns.ac.id",
    },
    {
      name: "Naufal Arrahman Surya",
      nim: "H0818075",
      departemen: "Agribisnis",
      tahun: 2018,
      email: "Naufalarrahman_4@student.uns.ac.id",
    },
    {
      name: "Chairunissa Putri Avianti",
      nim: "H0217013",
      departemen: "Ilmu Tanah",
      tahun: 2017,
      email: "chairunissaputriavianti@student.uns.ac.id",
    },
    {
      name: "Jihad Khadaffi",
      nim: "H0219053",
      departemen: "Ilmu Tanah",
      tahun: 2019,
      email: "jihadkhadaffi@student.uns.ac.id",
    },
    {
      name: "Bunga Tri Pradika Ramadani",
      nim: "H1020015",
      departemen: "Pengelolaan Hutan",
      tahun: 2020,
      email: "bungatri738@student.uns.ac.id",
    },
    {
      name: "Muhammad Fajrur Rifqi",
      nim: "H1019027",
      departemen: "Pengelolaan Hutan",
      tahun: 2019,
      email: "fajrurrifqi@student.coid",
    },
    {
      name: "Fegi Cahya Mentari",
      nim: "H0218018",
      departemen: "Ilmu Tanah",
      tahun: 2018,
      email: "fegichymntr@student.uns.ac.id",
    },
    {
      name: "Dilla Aulia Karima",
      nim: "H0416020",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2016,
      email: "dilla.ak@student.uns.ac.id",
    },
    {
      name: "Hafshah azizah",
      nim: "H1020030",
      departemen: "Pengelolaan Hutan",
      tahun: 2020,
      email: "hafshahazizah@student.uns.ac.id",
    },
    {
      name: "Monalisa Indah Parawansa",
      nim: "H0720108",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "monalisaindpra@student.uns.ac.id",
    },
    {
      name: "Alya Sausan Fauziyah",
      nim: "H0719008",
      departemen: "Agroteknologi",
      tahun: 2019,
      email: "alyasausanf@student.uns.ac.id",
    },
    {
      name: "Brigita Arientania Nugraha",
      nim: "H0218008",
      departemen: "Ilmu Tanah",
      tahun: 2018,
      email: "arientania6@student.uns.ac.id",
    },
    {
      name: "Wisnu Krismonanto",
      nim: "H0217070",
      departemen: "Ilmu Tanah",
      tahun: 2017,
      email: "krismonantow@student.uns.ac.id",
    },
    {
      name: "Nanda Mei Istiqomah",
      nim: "H0217046",
      departemen: "Ilmu Tanah",
      tahun: 2017,
      email: "meimei2017_99@student.uns.ac.id",
    },
    {
      name: "Verona Putri Essla",
      nim: "H0219100",
      departemen: "Ilmu Tanah",
      tahun: 2019,
      email: "verona@student.uns.ac.id",
    },
    {
      name: "Lily Rahmanisa",
      nim: "H0219060",
      departemen: "Ilmu Tanah",
      tahun: 2019,
      email: "rahmanisalily15@student.uns.ac.id",
    },
    {
      name: "Erra Melanie Ariesta Adjie",
      nim: "H0219029",
      departemen: "Ilmu Tanah",
      tahun: 2019,
      email: "erramelanie@student.uns.ac.id",
    },
    {
      name: "Depas Isa Bela",
      nim: "H1019013",
      departemen: "Pengelolaan Hutan",
      tahun: 2019,
      email: "depasisabela@student.uns.ac.id",
    },
    {
      name: "INTAN R A",
      nim: "H1019021",
      departemen: "Pengelolaan Hutan",
      tahun: 2019,
      email: "intan.alhuda@student.uns.ac.id",
    },
    {
      name: "Jihan Rosyadatuz Zakiyyah",
      nim: "H0717076",
      departemen: "Agroteknologi",
      tahun: 2017,
      email: "jihanrosyadatuz27@student.uns.ac.id",
    },
    {
      name: "Nur ramadhani",
      nim: "H1020053",
      departemen: "Pengelolaan Hutan",
      tahun: 2020,
      email: "nurramadhani0000@students.uns.ac.id",
    },
    {
      name: "Yudi Setiawan",
      nim: "H0418087",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2018,
      email: "yudisetiawan052@student.uns.ac.id",
    },
    {
      name: "Muhammad Gilang Nur Alif",
      nim: "H0420052",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2020,
      email: "gilang.17.uns.ac.id@student.uns.ac.id",
    },
    {
      name: "Galuh Pramudita",
      nim: "H0820048",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "galuh.pramudita@students.uns.ac.id",
    },
    {
      name: "Okky Lusiawati",
      nim: "H0820098",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "okky.lusiawati@student.uns.ac.id",
    },
    {
      name: "Septi Wahyu Wijayanti",
      nim: "H0419089",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2019,
      email: "septiwijayanti@student.uns.ac.id",
    },
    {
      name: "Clarrisa Diva",
      nim: "H0819031",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "clarrrisadivaa@student.uns.ac.id",
    },
    {
      name: "Nur Mei Azizah",
      nim: "H0820096",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "nurmeiazizah@student.uns.ac.id",
    },
    {
      name: "Lina Fitriyani",
      nim: "H0820069",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "linafitriyani@student.uns.ac.id",
    },
    {
      name: "Aliffa Mahayu S.",
      nim: "H0820009",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "aliffamahayu@student.uns.ac id",
    },
    {
      name: "Bintang Fortuna Permataningsih",
      nim: "H0219020",
      departemen: "Ilmu Tanah",
      tahun: 2019,
      email: "bintangningsih77@student.uns.ac.id",
    },
    {
      name: "Sabhna Aulia Salsabilla",
      nim: "H0820108",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "Sabhna.aulia@student.uns.ac.id",
    },
    {
      name: "Rahma Sesotya Wibowo",
      nim: "H0818084",
      departemen: "Agribisnis",
      tahun: 2018,
      email: "rahmasesotyaw@student.uns.ac.id",
    },
    {
      name: "Salsabila Aprilia Hudoyo",
      nim: "H0818092",
      departemen: "Agribisnis",
      tahun: 2018,
      email: "Salsabilahudoyo@student.uns.ac.id",
    },
    {
      name: "Ananda Budi Lestari",
      nim: "H0818008",
      departemen: "Agribisnis",
      tahun: 2018,
      email: "ananda.budilestari72a@student.uns.ac.id",
    },
    {
      name: "Dimas Himawan P",
      nim: "H0719051",
      departemen: "Agroteknologi",
      tahun: 2019,
      email: "dimas.himawan.prasetyo@student.uns.ac.id",
    },
    {
      name: "Anisa Pawitasari",
      nim: "H0820013",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "anisaflo@student.uns.ac.id",
    },
    {
      name: "Laily Agustin",
      nim: "H0820065",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "Lailyagustin2001@student.uns.ac.id",
    },
    {
      name: "Insyirah Ayu",
      nim: "H0820060",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "ayuardila@student.uns.ac.id",
    },
    {
      name: "Muhammad Arsyad Pahlevi",
      nim: "H0820083",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "m.arsyadpahlevi@student.uns.ac.id",
    },
    {
      name: "Iftitaha Fadhila",
      nim: "H0918045",
      departemen: "Ilmu Teknologi Pangan",
      tahun: 2018,
      email: "iftitaha.fadhila@student.uns.ac.id",
    },
    {
      name: "Muchammad Mu'amar Fahmi",
      nim: "H0820080",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "Fahmi.99500@student.uns.ac.id",
    },
    {
      name: "Nurdiana",
      nim: "H0820097",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "nurdianaanwar@student.uns.ac.id",
    },
    {
      name: "Annisa Nurfitria Juan",
      nim: "H0718025",
      departemen: "Agroteknologi",
      tahun: 2018,
      email: "annisajuan@student.uns.ac.id",
    },
    {
      name: "Nanda Izwin Meutiashifa",
      nim: "H0820091",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "meutiashifa1011@student.uns.ac.id",
    },
    {
      name: "Wahyu Aji Nugroho",
      nim: "H0519124",
      departemen: "Peternakan",
      tahun: 2019,
      email: "wahyuaji1121@student.uns.ac.id",
    },
    {
      name: "Feriawan agung",
      nim: "H0418027",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2018,
      email: "Feriawan_23@student.uns.ac.id",
    },
    {
      name: "Lastrinita Paschedonna Prabanu",
      nim: "H0820066",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "lastrinita.trini@student.uns.ac.id",
    },
    {
      name: "Nesia Aninda",
      nim: "H0219072",
      departemen: "Ilmu Tanah",
      tahun: 2019,
      email: "nesia.aninda05@student.uns.ac.id",
    },
    {
      name: "Nadya Elvira",
      nim: "H0218041",
      departemen: "Ilmu Tanah",
      tahun: 2018,
      email: "nadyaelvira20@student.uns.ac.id",
    },
    {
      name: "Ila Mawadah Rahma",
      nim: "H0820053",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "ilamawadah71@student.uns.ac.id",
    },
    {
      name: "Inesya Nur Rohmah",
      nim: "H0820058",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "inesyanurrohmah@student.uns.ac.id",
    },
    {
      name: "Rizky Diah",
      nim: "H0518077",
      departemen: "Peternakan",
      tahun: 2018,
      email: "rizkydiah12@student.uns.ac.id",
    },
    {
      name: "Pascal Sisent Atharicho",
      nim: "H0820100",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "Patharicho@student.uns.ac.id",
    },
    {
      name: "Fitri pringgawati",
      nim: "H0420030",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2020,
      email: "Fitriprnggwt06@student.uns.ac.id",
    },
    {
      name: "Jadid Adrian Syarif",
      nim: "H0820062",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "jadidadrian06@student.uns.ac.id",
    },
    {
      name: "Tiara Dwina L",
      nim: "H0819109",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "tiaradwina123@student.uns.ac.id",
    },
    {
      name: "Muhammad ayyub nasrullah",
      nim: "H0819082",
      departemen: "Agribisnis",
      tahun: 2019,
      email: "ayyubzawadhi99@student.uns.ac.id",
    },
    {
      name: "Afifah Rahmaniah",
      nim: "H0820004",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "afifah.rahmaniah@student.uns.ac.id",
    },
    {
      name: "ara shaula maulida",
      nim: "h0820015",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "arashaulam@student.uns.ac.id",
    },
    {
      name: "fauzan abdurrahim",
      nim: "h0820040",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "pou787@student.uns.ac.id",
    },
    {
      name: "MUTYA AYUNINGTIAS",
      nim: "H0420057",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2020,
      email: "mutyaayuningtias177@student.uns.ac.id",
    },
    {
      name: "Elang Imantiar Al Fawwaz Syah",
      nim: "H0820030",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "alfawwazsyah@student.uns.ac.id",
    },
    {
      name: "Mahesa Antariksa",
      nim: "H0918053",
      departemen: "Ilmu Teknologi Pangan",
      tahun: 2018,
      email: "mahesaantariksa@student.uns.ac.id",
    },
    {
      name: "Arizal Nur F",
      nim: "H0416010",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2016,
      email: "rizalnurfakih@student.uns.ac.id",
    },
    {
      name: "Wendy Yoga Artananda",
      nim: "H0820121",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "wendyyoga@student.uns.ac.id",
    },
    {
      name: "Marsandi Demes Sejati",
      nim: "H0820076",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "marsandids3@student.uns.ac.id",
    },
    {
      name: "Conzena Veranita Putri",
      nim: "H0420019",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2020,
      email: "Conzenavera11@student.uns.ac.id",
    },
    {
      name: "Azzamia Azizah Andaru",
      nim: "H0820020",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "azzamia@student.uns.ac.id",
    },
    {
      name: "Maharani Indah Palupi",
      nim: "H0719114",
      departemen: "Agroteknologi",
      tahun: 2019,
      email: "yonoh746@student.uns.ac.id",
    },
    {
      name: "Rizki Guntur Panemuan",
      nim: "H0820107",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "rizkiguntur@student.uns.ac.id",
    },
    {
      name: "Naufal Imaduddin",
      nim: "H0820093",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "naufal.imaduddin0271@student.uns.ac.id",
    },
    {
      name: "Adellya Nur Azizah",
      nim: "H0820001",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "adellyanurazizah29@student.uns.ac.id",
    },
    {
      name: "Miftahul jannah",
      nim: "H0720104",
      departemen: "Agroteknologi",
      tahun: 2020,
      email: "jannahmiftahul2109@student.uns.ac.id",
    },
    {
      name: "Inayatus Sa'adah",
      nim: "H0820055",
      departemen: "Agribisnis",
      tahun: 2020,
      email: "inayatuss01@student.ac.id",
    },
    {
      name: "Elnawawi Muchti",
      nim: "H0518029",
      departemen: "Peternakan",
      tahun: 2018,
      email: "Nawawialwim@student.uns.ac",
    },
    {
      name: "Aisya Shabrina",
      nim: "H0518003",
      departemen: "Peternakan",
      tahun: 2018,
      email: "aisya_shabrina@student.uns.ac.id",
    },
    {
      name: "Murninur Alifia",
      nim: "H0518062",
      departemen: "Peternakan",
      tahun: 2018,
      email: "murninuralifia@student.uns.ac.id",
    },
    {
      name: "Anindhyta Febri Prasasti",
      nim: "H0518010",
      departemen: "Peternakan",
      tahun: 2018,
      email: "aanindfp29@student.uns.ac.id",
    },
    {
      name: "GEBBY ROSITA JOLANDA PUTRI",
      nim: "H0518044",
      departemen: "Peternakan",
      tahun: 2018,
      email: "Gebby_rosita70@student.uns.ac.id",
    },
    {
      name: "Al Ghozi Hutama Widan",
      nim: "H0518005",
      departemen: "Peternakan",
      tahun: 2018,
      email: "Ghozi_hutama@student.uns.ac.id",
    },
    {
      name: "Aisyah Milasari",
      nim: "H0518004",
      departemen: "Peternakan",
      tahun: 2018,
      email: "aisyahmilasari12@student.uns.ac.id",
    },
    {
      name: "Rifka Ratna Annisa",
      nim: "H0918074",
      departemen: "Ilmu Teknologi Pangan",
      tahun: 2018,
      email: "rifkaratna26@student.uns.ac.id",
    },
    {
      name: "Suci Prastyaningrum",
      nim: "H0719173",
      departemen: "Agroteknologi",
      tahun: 2019,
      email: "suciprastyaningrum@student.uns.ac.id",
    },
    {
      name: "Sabrina nur fadilaj",
      nim: "H0518079",
      departemen: "Peternakan",
      tahun: 2018,
      email: "Sabrinanurfadilah_23@student.uns.ac.id",
    },
    {
      name: "Didik Imam Kholistiawan",
      nim: "H0518026",
      departemen: "Peternakan",
      tahun: 2018,
      email: "didikimam@student.uns.ac.id",
    },
    {
      name: "Mukhlis Jihad Robbani",
      nim: "H0416043",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2016,
      email: "mukhlis23@student.uns.ac.id",
    },
    {
      name: "Mohammad Ilham Dhiaurridho",
      nim: "H0518057",
      departemen: "Peternakan",
      tahun: 2018,
      email: "moh.ilham.d@student.uns.ac.id",
    },
    {
      name: "Ginanjar Dwi Cahyanto",
      nim: "H0416028",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2016,
      email: "ginanjardc@student.uns.ac.id",
    },
    {
      name: "Ervyana Rendasari",
      nim: "H0518032",
      departemen: "Peternakan",
      tahun: 2018,
      email: "ervyana.02@student.uns.ac.id",
    },
    {
      name: "Sukaryo",
      nim: "H0518088",
      departemen: "Peternakan",
      tahun: 2018,
      email: "Sukaryo2908@student.uns.ac.id",
    },
    {
      name: "Yilia Hernan Puspita",
      nim: "H0418088",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2018,
      email: "yuliahernan@student.uns.ac.id",
    },
    {
      name: "Debra Bening",
      nim: "H0518021",
      departemen: "Peternakan",
      tahun: 2018,
      email: "debrabeningg@student.uns.ac.id",
    },
    {
      name: "Aurelia Citrawati",
      nim: "H0519028",
      departemen: "Peternakan",
      tahun: 2019,
      email: "aaureli77@student.uns.ac.id",
    },
    {
      name: "Marsini",
      nim: "H0519077",
      departemen: "Peternakan",
      tahun: 2019,
      email: "marshsini@student.uns.ac.id",
    },
    {
      name: "Tri Aswuri Juniarti",
      nim: "H0717140",
      departemen: "Agroteknologi",
      tahun: 2017,
      email: "triaswuri.34@student.uns.ac.id",
    },
    {
      name: "Nurul fadillah",
      nim: "H0418059",
      departemen: "Penyuluhan dan Komunikasi Pertanian",
      tahun: 2018,
      email: "nrl_fadillah@student.uns.ac.id",
    },
    {
      name: "Olivia Kurniasari",
      nim: "H0719146",
      departemen: "Agroteknologi",
      tahun: 2019,
      email: "oliviakurniasari0@student.uns.ac.id",
    },
    {
      name: "Ridwan Nur Ramadhan",
      nim: "H0719158",
      departemen: "Agroteknologi",
      tahun: 2019,
      email: "ridwannurr41@student.uns.ac.id",
    },
    {
      name: "Rachmat Bayu T",
      nim: "H0518072",
      departemen: "Peternakan",
      tahun: 2018,
      email: "bayurachmat31@student.uns.ac.id",
    },
    {
      name: "Syiva Levaza",
      nim: "H0518089",
      departemen: "Peternakan",
      tahun: 2018,
      email: "Syivalevaza11@student.uns.ac.id",
    },
    {
      name: "Luluk Nur Janah",
      nim: "H0519075",
      departemen: "Peternakan",
      tahun: 2019,
      email: "lulukn444@student.uns.ac.id",
    },
    {
      name: "Arina El-Haq",
      nim: "H0917021",
      departemen: "Ilmu Teknologi Pangan",
      tahun: 2017,
      email: "elhaqarina@student.uns.ac.id",
    },
    {
      name: "Bayu Ardhy Putra",
      nim: "H0518015",
      departemen: "Peternakan",
      tahun: 2018,
      email: "bayuardi65@student.uns.ac.id",
    },
    {
      name: "Hanif Zaki Pratama",
      nim: "H0919049",
      departemen: "Ilmu Teknologi Pangan",
      tahun: 2019,
      email: "hanifzaki12@student.uns.ac.id",
    },
  ];

  participants.forEach((_participant) => {
    var participant = new Participant();
    participant.name = _participant.name;
    participant.nim = _participant.nim;
    participant.email = _participant.email;
    participant.session.id = "5fdf482e95ab036b9995ab01";
    participant.session.number = 5;
    participant.session.min = new Date("2020-12-21T08:00:00.000Z");
    participant.session.max = new Date("2020-12-21T17:00:00.000Z");

    // Save and validate
    participant.save(function (err) {
      if (err) return res.status(500).json(err);

      Session.findById(_participant.session.id, function (err, session) {
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
    });
  });
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
