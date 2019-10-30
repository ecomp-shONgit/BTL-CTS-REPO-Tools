/*




# 2017/2018 BTL CTS Project, Prof. Charlotte Schubert, Alte Geschichte Leipzig
# Function: knowledge base
# abkAW (ruecker), abkGrLaDGE (dge), abkAWgrkl (ruecker2), abkAWocd (ocd)

# GPLv3 copyrigth
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/


let inverseabkAWWAkba = {}; //TLL and GR Klassik to merge
let abkAW = {
 "NECTAR.": [
  "Nectarius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "300", 
   "397", 
   "episcopus Constantinopolitani?", 
   ""
  ]
 ], 
 "PS. VAL. CEM.": [
  "Pseudo-Valerianus Cemenelensis", 
  {
   "hom.": "homilia in dedicatione ecclesiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAVD.": [
  "Gaudentius", 
  {
   "Aug. c. Gaud.": "epistularum fragmenta"
  }, 
  [
   "350", 
   "450", 
   "Donatistarum episcopus", 
   ""
  ]
 ], 
 "CHRON.": [
  "", 
  {
   "Alex. chron. I": "chronicum Alexandrinum q. d.", 
   "Gall. chron. I": "chronica Gallica varia", 
   "Caesaraug. chron. II": "chronicorum Caesaraugustanorum q. d. reliquiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CENS.": [
  "", 
  {
   "frg.": "fragmentum Censorini quod vocatur (perperam erat librariis genuini opusculi pars)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "VAL. SORAN.": [
  "Q. Valerius Soranus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-140", 
   "-82", 
   "", 
   ""
  ]
 ], 
 "EXVP.": [
  "Iulius Exuperantius", 
  {
   "opusculum (sc. de Mario; sequitur Sallustium)": "opusculum (sc. de Mario; sequitur Sallustium)"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "GREG. ILIB.": [
  "Gregorius Iliberritanus", 
  {
   "de arca": "de arca Noe", 
   "in eccles.": "fragmenta duo praebentia explanationes in ecclesiasten", 
   "in gen.": "fragmenta praebentia expositiones in genesim", 
   "in cant.": "explanatio in canticum canticorum", 
   "fid.": "de fide"
  }, 
  [
   "330", 
   "393", 
   "episcopus (Luciferianus?)", 
   ""
  ]
 ], 
 "MEN.": [
  "Arrius Menander", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "213", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EPIT.": [
  "", 
  {
   "Alex.": "epitome rerum gestarum Alexandri Magni", 
   "Gai": "Gai iurisconsulti institutionum epitome"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POL. SILV.": [
  "Polemius Silvius", 
  {
   "laterculus": "laterculus"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "OPP.": [
  "C. Oppius", 
  {
   "hist.": "vitarum fragmenta"
  }, 
  [
   "-100", 
   "-30", 
   "", 
   ""
  ]
 ], 
 "PS. GARG. MART.": [
  "Pseudo-Gargilius Martialis", 
  {
   "fragmenta, quae in codicibus quibusdam subiunguntur": "fragmenta, quae in codicibus quibusdam subiunguntur", 
   "med.": "GARG. MART. med."
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "GEST.": [
  "", 
  {
   "Pilat.": "gesta Pilati, sc. euangelii Nicodemi pars prior e graeco versa", 
   "Xyst.": "gesta de Xysti (sc. Sixti III papae) purgatione", 
   "Liber.": "gesta Liberii papae", 
   "Melet.": "gesta Meletii schismatici Aegyptii"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SALV.": [
  "Salvianus", 
  {
   "eccl.": "ad ecclesiam", 
   "epist.": "epistulae", 
   "gub.": "de gubernatione dei"
  }, 
  [
   "400", 
   "475", 
   "presbyter Massiliensis", 
   ""
  ]
 ], 
 "EXPOS.": [
  "", 
  {
   "fid. Caspari Anecd.": "expositiones fidei vel symboli variae anon., e. g. fragm. editum a Caspari, Anecd."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DONATIO": [
  "", 
  {
   "Tiburt.": "a Fl. Valila ecclesiae cuidam Tiburtinae facta", 
   "Monim. (CIL VI 10231)": "Iuliae Monimes"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. TER.": [
  "Pseudo-Terentius", 
  {
   "Andr. alt. exit.": "Andria alter exitus"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "EVTYCH.": [
  "Eutyches", 
  {
   "gramm.": "ars de verbo"
  }, 
  [
   "380", 
   "456", 
   "grammaticus", 
   ""
  ]
 ], 
 "SANTRA": [
  "Santra", 
  {
   "trag.": "tragoediarum fragmenta", 
   "frg. Non.": "pedestrium operum fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   "e. g. fragm. servatum apud NON."
  ]
 ], 
 "RVT. LVP.": [
  "P. Rutilius Lupus", 
  {
   "schemata dianoeas et lexeos": "schemata dianoeas et lexeos"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "LVCR.": [
  "T. Lucretius Carus", 
  {
   "de rerum natura": "de rerum natura"
  }, 
  [
   "-99", 
   "-53", 
   "", 
   ""
  ]
 ], 
 "GALBA": [
  "Ser. Sulpicius Galba", 
  {
   "Cic. fam.": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-1", 
   "Pr\u00e4tor 54 v. Chr.", 
   ""
  ]
 ], 
 "IVST.": [
  "M. Iunian(i)us Iustinus", 
  {
   "epitoma historiarum Philippicarum Pompei Trogi": "epitoma historiarum Philippicarum Pompei Trogi"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "MET. CEL.": [
  "Q. Caecilius Metellus Celer", 
  {
   "Cic. fam.": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-59", 
   "", 
   ""
  ]
 ], 
 "ORIG.": [
  "Origenis", 
  {
   "in I reg.": "homilia in librum I regum", 
   "in Matth.": "commentariorum in Matthaeum quae exstant"
  }, 
  [
   "185", 
   "254", 
   "scriptor ecclesia", 
   "opera ab anonymis e graeco versa"
  ]
 ], 
 "SVPERSCR.": [
  "", 
  {
   "praef. bibl. monarch. in Marc. cod. A": "superscriptiones in codicibus antiquis, e. g. quae antecedit PRAEF. bibl. monarch. in Marc. in codice A"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TERT.": [
  "Q. Septimius Florens Tertullianus Carthaginiensis", 
  {
   "scorp.": "scorpiace", 
   "virg. vel.": "de virginibus velandis", 
   "idol.": "de idololatria", 
   "monog.": "de monogamia", 
   "orat.": "de oratione", 
   "dig.": "fragmenta in digesta servata", 
   "ieiun.": "de ieiunio adversus psychicos", 
   "Scap.": "ad Scapulam", 
   "uxor.": "ad uxorem", 
   "apol.": "apologeticum", 
   "adv. Iud.": "adversus Iudaeos", 
   "cult. fem.": "de cultu feminarum", 
   "patient.": "de patientia", 
   "spect.": "de spectaculis", 
   "frg. Fulg. serm.": "deperditorum operum fragmenta, e. g. fragm. servatum apud FVLG. serm. ant.", 
   "mart.": "ad martyras", 
   "bapt.": "de baptismo", 
   "anim.": "de anima", 
   "nat.": "ad nationes", 
   "adv. Prax.": "adversus Praxean", 
   "coron.": "de corona", 
   "resurr.": "de resurrectione mortuorum", 
   "paenit.": "de paenitentia", 
   "pall.": "de pallio", 
   "pudic.": "de pudicitia", 
   "carn.": "de carne Christi", 
   "praescr.": "de praescriptione haereticorum", 
   "test. anim.": "de testimonio animae", 
   "castit.": "de exhortatione castitatis", 
   "adv. Hermog.": "adversus Hermogenem", 
   "adv. Marc.": "adversus Marcionem", 
   "adv. Val.": "adversus Valentinianos", 
   "fug.": "de fuga in persecutione"
  }, 
  [
   "150", 
   "220", 
   "", 
   ""
  ]
 ], 
 "CASS.": [
  "C. Cassius Longinus", 
  {
   "ad Ciceronem epistulae": "ad Ciceronem epistulae"
  }, 
  [
   "-85", 
   "-42", 
   "Caesaris interfector", 
   ""
  ]
 ], 
 "EPISC.": [
  "", 
  {
   "Gall. Leo M. epist.": "episcoporum Galliae quorundam epistulae ad Leonem Magnum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FACVND.": [
  "Facundus Hermianensis", 
  {
   "defens.": "pro defensione trium capitulorum vel ad Iustinianum", 
   "c. Moc.": "contra Mocianum", 
   "fid.": "epistola fidei catholicae in defensione trium capitulorum"
  }, 
  [
   "500", 
   "599", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "NIL.": [
  "N(e)ilus von Ankyra", 
  {
   "magist.": "de magistris et discipulis", 
   "octo vit. vers. A": "de octo vitiis generalibus, versio A"
  }, 
  [
   "399", 
   "499", 
   "", 
   "operum, quae Nilo cuidam (Ancyrano?) aut Euagrio Pontico ascribuntur, versiones lat."
  ]
 ], 
 "PS. MAR. VICTORIN.": [
  "Pseudo-Marius Victorinus", 
  {
   "gramm.": "Aelius Festus Apthonius (Asmonius?), opus grammaticum (initium periit), quod iam saec. V, ut videtur, cum Marii Victorini artis genuinae fragmento", 
   "[hymn.]": "[hymn.]", 
   "ad Iust.": "ad Iustinum Manichaeum", 
   "verb. script.": "de verbis scripturae", 
   "phys.": "de physicis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHIRON": [
  "", 
  {
   "mulomedicina Chironis q. d.": "mulomedicina Chironis q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "QVADRIG.": [
  "Q. Claudius Quadrigarius", 
  {
   "hist.": "annalium fragm."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "INTERLOC.": [
  "", 
  {
   "praef. vig. (CIL VI 266)": "interlocutiones Aelii Floriani, Herennii Modestini, Faltonii Restitutiani praefectorum vigilum de lite fullonum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. TIT.": [
  "Pseudo-Titus", 
  {
   "epist.": "epistula de dispositione sancti\u00admonii"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "SCHOL.": [
  "", 
  {
   "Ter.": "scholia in Terentium", 
   "Strozz.": "Strozziana", 
   "Bemb. Ad.": "Bembina", 
   "Veron. Aen.": "codicis rescripti Veronensis bibl. capit. 38 (saec. V/VI) in VERG. Aen., ecl., georg.", 
   "Theb.": "Lactantii Placidi quae feruntur scholia in STAT. Theb.", 
   "Sang.": "Sangermanensia", 
   "Pers.": "scholia Bernensia in PERS.", 
   "Gron. A": "Gronoviana codicis Voss. lat. Q", 
   "Ambr. rec.": "Ambrosiana recentiora codicis rescripti Bobiensis", 
   "Sinait.": "fragmenta Sinaitica scholiorum in Vlpiani libros ad Sabinum", 
   "Iuv.": "scholia in IVV. vetustiora", 
   "Cic.": "scholia in orationes Ciceronis", 
   "ed. Web. 10,546": "edita a Weber", 
   "Basilic.": "scholia graeca in Basilicorum libros", 
   "Hor.": "scholia in Horatium", 
   "Prud. epil.": "scholia in Prudentium", 
   "B 3,283": "scholia codicis Bernensis 45 (saec. X) ab Usener omissa", 
   "Vat.": "codicis Vaticani rescripti", 
   "Ov. Ib.": "scholia in OV. Ib.", 
   "Bern. ecl.": "Bernensia in VERG. ecl. et georg.", 
   "Vet. Lat. Ezech.": "scholia in VET. LAT., e. g. codicis 175 in Ezech.", 
   "Germ.": "scholia in Germanici Aratea", 
   "Clun.": "codicum Cluniacensis et Ambrosiani", 
   "Arat.": "Aratus latinus cum scholiis", 
   "scholia": "scholia", 
   "Suet. Iul.": "scholia (adhuc minus apte 'glossae') codicis Memmiani in SVET. Iul.", 
   "Stat.": "scholia in Statium", 
   "Bob.": "codicis rescripti Bobiensis", 
   "gloss. G carm. 4,15,21": "scholia glossarum G appendicis in HOR., e. g. in carm. 4,15,21", 
   "Opt. Porf. carm.": "scholia in OPT. PORF. carm.", 
   "Vind. ars": "codicis Vindobonensis (saec. X/XI) in HOR. ars", 
   "Verg.": "scholia in Vergilium", 
   "Ach.": "in STAT. Ach.", 
   "carm. 4,15,31sq.": "in HOR. pseudacroniana, e. g. in carm. 4,15,31sq.", 
   "Bas.": "Basileensia", 
   "Medic. ecl.": "codicis Medicei (Laurent. 39. 1) in VERG. ecl.", 
   "Lucan.": "scholia in Lucanum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TARQVIT. PRISC.": [
  "Tarquitius Priscus", 
  {
   "Macr. Sat.": "ostentarii arborarii fragmenta servata apud MACR. Sat."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "ELOG.": [
  "", 
  {
   "Inscr. Ital. XIII": "clarorum virorum elogia (praeter INSCR. column. rostr., v. infra), Inscr. Ital. XIII", 
   "Scip. (CE 958)": "elogia Scipionum q. d., e. g. Cn. Cornelii Cn. f. Hispani"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. AGENN.": [
  "Pseudo-Agennius", 
  {
   "commenta gromatica": "commenta gromatica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. TROG.": [
  "Pompeius Trogus", 
  {
   "hist.": "historiae Philippicae", 
   "prol.": "prologi", 
   "Iust.": "fragmenta varia, e. g. fragm. servatum apud IVST.", 
   "anim. Plin. nat.": "de animalibus"
  }, 
  [
   "-50", 
   "50", 
   "", 
   "fragmentum servatum apud PLIN. nat."
  ]
 ], 
 "PASCENT.": [
  "Pascentius", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[DESCR.]": [
  "", 
  {
   "[Ierus.]": "descriptio parrochiae Ierusalem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAECIN.": [
  "A. Caecina", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-1", 
   "A. fil.", 
   ""
  ]
 ], 
 "[FAVSTIN.]": [
  "Faustinus", 
  {
   "[pass. dom.]": "homilia de passione domini"
  }, 
  [
   "", 
   "", 
   "", 
   "EVSEB. GALLIC. hom. 13,9"
  ]
 ], 
 "THEODERIC.": [
  "Theodericus", 
  {
   "praecept.": "praeceptum (sive edictum contra sacerdotes substantiae ecclesiae alienatores)"
  }, 
  [
   "451", 
   "526", 
   "rex Ostrogothorum", 
   ""
  ]
 ], 
 "PAROCH.": [
  "", 
  {
   "Suev.": "parochiale Suevum sive divisio Theodemiri sive concilium Lucense"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[EGID. MESS.]": [
  "", 
  {
   "[libell.]": "libellus vel epistula petitoria ab (A)egidio et Messiano oblata Symmacho papae"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. Arel. 29"
  ]
 ], 
 "[ANON.] $1": [
  "anonymus", 
  {
   "[in psalm.]": "glossae in psalm."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVSEB. VERC.": [
  "Eusebius <Vercellensis>", 
  {
   "epist.": "epistulae"
  }, 
  [
   "283", 
   "371", 
   "episcopus", 
   ""
  ]
 ], 
 "FIRM.": [
  "Iulius Firmicus Maternus Siculus", 
  {
   "err.": "de errore profanarum religionum", 
   "math.": "mathesis"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "IVL. VAL.": [
  "Iulius Valerius Alexander Polemius", 
  {
   "Pseudocallisthenis historia Alexandri Magni e graeco versa": "Pseudocallisthenis historia Alexandri Magni e graeco versa"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "PS. CASSIOD.": [
  "Pseudo-Cassiodorus", 
  {
   "rhet.": "rhetorica excerpta", 
   "de orat.": "de oratione et de octo partibus orationis", 
   "pasch.": "computus paschalis"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "VVLG.": [
  "", 
  {
   "Philem.": "Pauli epistula ad Philemonem", 
   "Ioel": "Io(h)el", 
   "Phil.": "Pauli epistula ad Philippenses", 
   "thren.": "threni sive lamentationes Hieremiae", 
   "apoc.": "apocalypsis Iohannis apostoli", 
   "Agg.": "Agg(a)eus propheta", 
   "Mal.": "Malachi(as)", 
   "Dan.": "Dani(h)el propheta", 
   "Esth.": "Esther (Hester)", 
   "Soph.": "Sophonias (Sof\u2014)", 
   "Eph.": "Pauli epistula ad Ephesios", 
   "Is.": "Isaias", 
   "Luc.": "euangelium sec. Lucam", 
   "Ruth": "Ruth", 
   "num.": "numeri", 
   "I. II Tim.": "Pauli epistulae ad Timotheum", 
   "Col.": "Pauli epistula ad Colossenses", 
   "eccles.": "ecclesiastes", 
   "I\u2014IV reg.": "libri regum", 
   "I. II par.": "paralipomenon sive verba dierum", 
   "exod.": "exodus", 
   "[I. II Macc.]": "libri Macc(h)ab(a)eorum", 
   "Nah.": "Na(h)um", 
   "[Sirach]": "liber Iesu filii Sirach sive eccle\u00adsiasticus", 
   "gen.": "genesis", 
   "Ier.": "Ieremias (Hieremias)", 
   "Ioh.": "euangelium sec. Iohannem", 
   "I. II. III Ioh.": "epistulae Iohannis", 
   "Gal.": "Pauli epistula ad Galatas", 
   "psalm.": "psalmi (cf. HIER. psalt. sec. Hebr., PSALT. Rom.)", 
   "Ion.": "Iona(s)", 
   "Iob": "Iob", 
   "iud.": "liber iudicum", 
   "I. II Esdr.": "Esdras (Ezras), lib. 1 et 2", 
   "Tit.": "Pauli epistula ad Titum", 
   "Ezech.": "Ezechiel (Hiezechiel) propheta", 
   "Matth.": "euangelium sec. Matth(a)eum", 
   "lev.": "leviticus", 
   "I. II Petr.": "epistulae Petri", 
   "biblia sacra iuxta vulgatam": "biblia sacra iuxta vulgatam", 
   "Os.": "Osea (Osee)", 
   "Hebr.": "Pauli epistula ad Hebraeos", 
   "Iac.": "Iacobi epistula", 
   "Zach.": "Za(c)charias", 
   "[III. IV Esdr.]": "Esdras (Ezras), lib. 3 et 4 (apocr.)", 
   "Rom.": "Pauli epistula ad Romanos", 
   "[sap.]": "sapientia Salomonis", 
   "[Bar.]": "Baruch", 
   "I. II Thess.": "Pauli epistulae ad Thessalonicenses", 
   "Marc.": "euangelium sec. Marcum", 
   "I. II Cor.": "Pauli epistulae ad Corinthios", 
   "Am.": "Amos propheta", 
   "cant.": "canticum canticorum", 
   "Ios.": "Iosue", 
   "prov.": "proverbia Salomonis", 
   "Tob.": "Tobias", 
   "Hab.": "Habacuc (Abacuc) propheta", 
   "Mich.": "Micha(eas)", 
   "act.": "actus apostolorum", 
   "Iudas": "epistula Iudae", 
   "deut.": "deuteronomium", 
   "Iudith": "Iudith", 
   "[or. Man.]": "oratio Manasse (apocr.)", 
   "Abd.": "Abdias propheta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VEREC.": [
  "Verecundus", 
  {
   "in cant.": "commentarii super cantica ecclesiastica", 
   "satisfact.": "carmen de satisfactione paenitentiae"
  }, 
  [
   "500", 
   "552", 
   "episcopus Iuncensis", 
   ""
  ]
 ], 
 "[EXC.]": [
  "", 
  {
   "[Cassiod. inst. app.]": "[Cassiod. inst. app.]"
  }, 
  [
   "", 
   "", 
   "", 
   "CASSIOD. inst. app."
  ]
 ], 
 "PRAEDEST.": [
  "", 
  {
   "liber praedestinatus": "liber praedestinatus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. ASCON.": [
  "Pseudo-Asconius", 
  {
   "div. in Caec.": "in divinationem in Q. Caecilium", 
   "Verr.": "in Verrinas (sc. Verr. I. II 1. 2)"
  }, 
  [
   "400", 
   "499", 
   "", 
   "commentarii vel scholia Ciceronis orationum tradita una cum ASCON., sed non ab eo confecta"
  ]
 ], 
 "DECRET.": [
  "", 
  {
   "centumvir. Veient. (CIL XI 3805)": "decretum centumvirorum municipii Augusti Veientis", 
   "Ostr. (CIL XI 5750)": "Ostrensium", 
   "Lun. (CIL XI 1354)": "Lunensium", 
   "centon.": "decreta centonariorum (sc. de patronis cooptandis; cf. DECRET. fabr. Reg.)", 
   "Sentin. (CIL XI 5749)": "Sentinatium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEDIT.": [
  "Valerius Aedituus", 
  {
   "epigr.": "epigrammata"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "CVRIVS": [
  "M'. Curius Patrensis (?)", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "LAEL.": [
  "C. Laelius Sapiens", 
  {
   "or. frg. Fest.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud FEST."
  }, 
  [
   "-200", 
   "-123", 
   "", 
   ""
  ]
 ], 
 "HYD.": [
  "Hydatius Lemicus in Gallaecia", 
  {
   "chron. II": "continuatio chronicorum Hieronymianorum (v. HIER. chron.), vol. II"
  }, 
  [
   "400", 
   "469", 
   "", 
   ""
  ]
 ], 
 "FVR. ANT.": [
  "Furius Antias", 
  {
   "carm. frg.": "carmina"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "POTAM.": [
  "Potamius", 
  {
   "tract. 2": "tractatus 2 (de martyrio Isaiae prophetae)", 
   "tract. 1": "tractatus 1 (de Lazaro)", 
   "epist. ad Athan.": "epistula ad Athanasium", 
   "[Lazar.]": "[Lazar.]", 
   "subst.": "epistula de substantia patris et filii et spiritus sancti"
  }, 
  [
   "300", 
   "399", 
   "episcopus Olisiponensis", 
   ""
  ]
 ], 
 "ADNOT.": [
  "", 
  {
   "bell. p. 4,17": "de bello civili inter Caesarem et Pompeium, p. 4 lin. 17", 
   "argum. 10": "argumentum libri 10", 
   "10,545": "ad libr. 10 vers. 545", 
   "Fronto": "Fronto adnotatus, sc. adnotationes cod. Frontoniani Bobiensis", 
   "Lucan.": "adnotationes super Lucanum medio aevo in hanc formam redactae, quarum tamen fundamentum est Vaccae q. d. in Lucanum commentarius"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOVIVS": [
  "Novius", 
  {
   "Atell.": "Atellanarum fragmenta"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "QVINT.": [
  "M. Fabius Quintilianus", 
  {
   "inst.": "institutio oratoria", 
   "decl.": "declamationes minores"
  }, 
  [
   "35", 
   "96", 
   "", 
   ""
  ]
 ], 
 "PS. PROSP.": [
  "Pseudo-Prosper", 
  {
   "vocat. gent.": "de vocatione omnium gentium libri", 
   "carm. de prov.": "carmen de providentia dei", 
   "conf.": "confessio", 
   "[prom.]": "[prom.]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIST. AVG.": [
  "", 
  {
   "Diad.": "Diadumenus Antoninus (vita XVI)", 
   "quatt. tyr.": "quattuor tyranni (sc. Firmus, Saturninus, Proculus, Bonosus; vita XXIX)", 
   "Geta": "Antoninus Geta (vita XIV)", 
   "Did.": "Didius Iulianus (vita IX)", 
   "Valer.": "Valeriani duo (vita XXII)", 
   "Pius": "Antoninus Pius (vita III)", 
   "Max. Balb.": "Maximus et Balbinus (vita XXI)", 
   "Aur.": "M. Aurelius Antoninus philosophus (vita IV)", 
   "Prob.": "Probus (vita XXVIII)", 
   "Ael.": "Aelius (olim Helius; vita II)", 
   "Alb.": "Clodius Albinus (vita XII)", 
   "Opil.": "Opilius Macrinus (vita XV)", 
   "Aurelian.": "Aurelianus (vita XXVI)", 
   "Hadr.": "Hadrianus (vita I)", 
   "Avid.": "Avidius Cassius (vita VI)", 
   "Comm.": "Commodus Antoninus (vita VII)", 
   "Pesc.": "Pescennius Niger (vita XI)", 
   "Heliog.": "Antoninus Heliogabalus (vita XVII)", 
   "Claud.": "Claudius (vita XXV)", 
   "Pert.": "Helvius Pertinax (vita VIII)", 
   "Sept. Sev.": "Septimius Severus (vita X)", 
   "Gall.": "Gallieni duo (vita XXIII)", 
   "Gord.": "Gordiani tres (vita XX)", 
   "Alex.": "Alexander Severus (vita XVIII)", 
   "Maximin.": "Maximini duo (vita XIX)", 
   "Carac.": "Antoninus Caracallus (vita XIII)", 
   "Car.": "Carus et Carinus et Numerianus (vita XXX)", 
   "Tac.": "Tacitus (vita XXVII)", 
   "trig. tyr.": "triginta tyranni (vita XXIV)", 
   "Ver.": "Verus (vita V)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LABEO": [
  "Attius Labeo", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata", 
   "Homer. frg. schol. Pers. 1,4": "(qui vertit) Homeri carmina, fragmentum servatum in SCHOL. Pers. 1,4"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "INTERPR.": [
  "", 
  {
   "Gai": "interpretationis institutionum Gai fragmenta, quae in cod. Augustodunensi leguntur", 
   "Paul. sent.": "interpretationes constitutionum et sententiarum, quas e collectionibus variis (sc. COD. Greg. Visig., COD. Herm. Visig., COD. Theod., NOVELL.) et e Pauli sententiis excerpsit breviarium Alarici"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASCELL.": [
  "A. Cascellius", 
  {
   "dicta (ex eius libro bene dictorum?) a scriptoribus servata, e. g. dictum apud MACR. Sat.": "dicta (ex eius libro bene dictorum?) a scriptoribus servata, e. g. dictum apud MACR. Sat."
  }, 
  [
   "-100", 
   "-1", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EVAGR. PONT.": [
  "Euagrius Ponticus", 
  {
   "rec. W": "versio vel recensio W a Wilmart edita", 
   "sent. virg.": "sententiae ad virginem", 
   "rec. H": "versio vel recensio H iam diu nota", 
   "sent. mon.": "sententiae ad monachos", 
   "rec. A": "recensio A, sc. versio nondum contaminata"
  }, 
  [
   "345", 
   "399", 
   "", 
   "opera e graeco versa"
  ]
 ], 
 "AGREST.": [
  "Agrestius", 
  {
   "carm.": "carminis de fide ad Avitum episcopum quae exstant"
  }, 
  [
   "400", 
   "499", 
   "episcopus (Lucensis?)", 
   ""
  ]
 ], 
 "RADEGVND.": [
  "Radegundis", 
  {
   "epist. Greg. Tur. Franc.": "epistula ad episcopos"
  }, 
  [
   "520", 
   "587", 
   "", 
   "v. GREG. TVR. Franc."
  ]
 ], 
 "LIBERAT.": [
  "Liberatus", 
  {
   "breviarium causae Nestorianorum et Eutychianorum": "breviarium causae Nestorianorum et Eutychianorum"
  }, 
  [
   "500", 
   "599", 
   "archidiaconus Carthaginiensis", 
   ""
  ]
 ], 
 "SVRA": [
  "Aemilius Sura", 
  {
   "hist.": "de annis populi Romani"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "[LVCVLENT.]": [
  "Luculentius", 
  {
   "commentarii in aliquot novi testamenti partes (immo collectio homiliarum de lectionibus liturgicis)": "commentarii in aliquot novi testamenti partes (immo collectio homiliarum de lectionibus liturgicis)"
  }, 
  [
   "850", 
   "950", 
   "", 
   ""
  ]
 ], 
 "MONTAN.": [
  "Montanus Toletanus", 
  {
   "carm. frg.": "carminum fragmenta", 
   "epist.": "epistulae"
  }, 
  [
   "450", 
   "531", 
   "episcopus", 
   ""
  ]
 ], 
 "VAL. MAX.": [
  "Valerius Maximus", 
  {
   "facta et dicta memorabilia": "facta et dicta memorabilia"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "VIGIL. TRID.": [
  "Vigilius Tridentinus", 
  {
   "ad Simplic.": "epistula ad Simplicianum episcopum Mediolanensem", 
   "ad Ioh.": "epistula ad Iohannem Chrysostomum"
  }, 
  [
   "350", 
   "405", 
   "episcopus", 
   ""
  ]
 ], 
 "SATVRN.": [
  "Claudius Saturninus", 
  {
   "dig.": "fragm. servatum in DIG."
  }, 
  [
   "450", 
   "550", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "AGNELL.": [
  "Agnellus", 
  {
   "epist.": "epistula ad Arminium de ratione fidei"
  }, 
  [
   "487", 
   "570", 
   "episcopus Ravennas", 
   ""
  ]
 ], 
 "AFRIC.": [
  "Sex. Caecilius Africanus", 
  {
   "dig": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "175", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CAPREOL.": [
  "Capreolus", 
  {
   "[epist. 1]": "epistula prior, sc. ad concilium Ephesium", 
   "epist. 2": "epistula altera, sc. ad Vitalem et Tonantium"
  }, 
  [
   "350", 
   "437", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "TRAIAN.": [
  "imp. Traianus", 
  {
   "Plin. epist.": "epistulae ad Plinium"
  }, 
  [
   "53", 
   "117", 
   "", 
   ""
  ]
 ], 
 "IVLIAN.": [
  "Iulianus", 
  {
   "epit. in psalm.": "in psalmos epitome q. d.", 
   "Aug.": "verba Iuliani ab Augustino allata", 
   "in Os.": "commentarius in Osee prophetam", 
   "praef. in proph.": "praefatio in prophetas", 
   "epit. novell.": "epitome novellarum Iustiniani", 
   "frg. VIII": "fragmenta apud Bedam servata (sc. series VIIsq.; cetera fragmenta v. IVLIAN. Aug.), series VIII", 
   "dig.": "fragmenta in digesta (et alibi) servata", 
   "in Am.": "commentarius in Amos prophetam", 
   "in psalm.": "versionis latinae commentarii Theodori Mopsuesteni in psalmos, quam nunc fere omnes Iuliano tribuunt, reliquiae", 
   "in Iob": "commentarius in Iob", 
   "in Ioel": "commentarius in Ioel prophetam"
  }, 
  [
   "300", 
   "399", 
   "iurisconsultus Constantinopolitanus", 
   ""
  ]
 ], 
 "TRYPH.": [
  "Claudius Tryphoninus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "OV.": [
  "P. Ovidius Naso", 
  {
   "medic.": "medicaminum faciei femineae quae exstant", 
   "epist.": "epistulae (heroides)", 
   "trist.": "tristia", 
   "Ib.": "Ibis", 
   "am.": "amores", 
   "Med. frg.": "Medeae tragoediae fragmenta", 
   "Pont.": "epistulae ex Ponto", 
   "carm. frg.": "carminum fragmenta", 
   "ars": "ars amatoria", 
   "fast.": "fasti (opus imperfectum)", 
   "rem.": "remedia amoris", 
   "met.": "metamorphoses", 
   "hal.": "halieutica"
  }, 
  [
   "-43", 
   "17", 
   "", 
   ""
  ]
 ], 
 "TIBERIAN.": [
  "Tiberianus (fortasse C. Annius Tiberianus praef. praet. a. 336)", 
  {
   "carm.": "carmina"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "GRATT.": [
  "Grattius", 
  {
   "cynegetica": "cynegetica"
  }, 
  [
   "-60", 
   "20", 
   "", 
   ""
  ]
 ], 
 "LAVRENT.": [
  "Laurentius (Mellifluus)", 
  {
   "eleem.": "homilia de eleemosyna", 
   "Chan.": "Iohannis Chrysostomi de muliere Chananaea homilia e graeco versa", 
   "paen.": "de paenitentia (de duobus temporibus)"
  }, 
  [
   "400", 
   "499", 
   "episcopus quidam (Novarum in Moesia?)", 
   ""
  ]
 ], 
 "PS. PRISC.": [
  "Pseudo-Priscianus", 
  {
   "de accentibus liber": "de accentibus liber"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PSALT.": [
  "", 
  {
   "Rom.": "Romanum", 
   "psalterium": "psalterium", 
   "[Cas.]": "Casinense nunc ut ceteri Veteris Latinae textus allatum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIB. SEQ.": [
  "Vibius Sequester", 
  {
   "geogr.": "de fluminibus, fontibus, lacubus eqs. libellus geographicus"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "TARRA": [
  "Tarra Hispanus", 
  {
   "epist.": "epistula ad Reccaredum I regem Visigothorum"
  }, 
  [
   "550", 
   "650", 
   "monachus", 
   ""
  ]
 ], 
 "CENTO": [
  "", 
  {
   "de incarn.": "cento de verbi incarnatione versibus Vergilianis compositus", 
   "de eccl.": "cento de ecclesia versibus Vergilianis compositus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLLIO": [
  "C. Asinius Pollio", 
  {
   "carm. frg. Char. gramm.": "carminum fragm. servatum apud CHAR. gramm.", 
   "or. frg. Char. gramm.": "orationum fragmenta, e. g. fragm. servatum apud CHAR. gramm.", 
   "Cic. fam.": "epistulae ad Ciceronem", 
   "hist.": "historiae"
  }, 
  [
   "-76", 
   "5", 
   "", 
   ""
  ]
 ], 
 "ABLAB.": [
  "Ablabius", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "250", 
   "338", 
   "Constantini Magni Familiaris", 
   ""
  ]
 ], 
 "CYPR.": [
  "Thascius Caecilius Cyprianus", 
  {
   "laps.": "de lapsis", 
   "eleem.": "de opere et eleemosynis", 
   "domin. orat.": "de dominica oratione", 
   "patient.": "de bono patientiae", 
   "idol.": "quod idola dii non sint (opusculum vix genuinum)", 
   "zel.": "de zelo et livore", 
   "testim.": "ad Quirinum vel testimonia (sc. e scripturis sacris excerpta)", 
   "sent. episc.": "sententiae episcoporum de haereticis baptizandis (sc. acta concilii Carthaginiensis kal. Sept. a. 256 habiti, quae postea versa sunt graece)", 
   "praef.": "praefatio", 
   "mortal.": "de mortalitate", 
   "epist. Silvan": "epistula ad Silvanum al.", 
   "ad Donat.": "ad Donatum", 
   "hab. virg.": "de habitu virginum (ad virgines)", 
   "unit. eccl.": "de  catholicae ecclesiae unitate", 
   "Demetr.": "ad Demetrianum (sc. paganum)", 
   "epist. epistulae collectae": "diverse", 
   "Fort.": "ad Fortunatum (de exhortatione martyrii)"
  }, 
  [
   "200", 
   "258", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "EGNAT.": [
  "Egnatius", 
  {
   "carm. frg.": "carminis de rerum natura fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[GLOSS.] $3": [
  "", 
  {
   "[Verg. ed. Hagen E 287]": "glossae Vergilianae editae ab Hagen, glossarum ab E incipientium glossa 287"
  }, 
  [
   "", 
   "", 
   "", 
   "GLOSS. LI Ansil. EX 1437"
  ]
 ], 
 "EPIGR.": [
  "", 
  {
   "Bob.": "epigrammata Bobiensia q. d. (nonnulla sunt Naucellii)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIRAE": [
  "", 
  {
   "dirae, carmen appendicis Vergilianae": "dirae, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDYM.": [
  "Didymus Alexandrinus", 
  {
   "metrol. II": "fragmentum operis \u03a0\u03b5\u03c1\u1f76 \u03c4\u1fc6\u03c2 \u03c0\u03b1\u03c1\u1f70 \u1fec\u03c9\u03bc\u03b1\u03af\u03bf\u03b9\u03c2 \u1f00\u03bd\u03b1\u03bb\u03bf\u03b3\u03af\u03b1\u03c2 apud PRISC. fig. num. gramm. III 411sq. servatum", 
   "theophan.": "opus quoddam de theophania (fragmentum; graecum periit)"
  }, 
  [
   "310", 
   "398", 
   "", 
   "opera latine versa"
  ]
 ], 
 "ALTERC.": [
  "", 
  {
   "Hadr. et Epict.": "altercatio Hadriani Augusti et Epicteti philosophi", 
   "Heracl.": "altercatio Heracliani laici (sc. orthodoxi) cum Germinio episcopo Sirmiensi (sc. Ariano)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. QVAEST.": [
  "Paulus Quaestor", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "nicht datierbar", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEV. MALAC.": [
  "Severus (Malacitanus?)", 
  {
   "euang.": "euangelia"
  }, 
  [
   "500", 
   "599", 
   "episcopus", 
   ""
  ]
 ], 
 "ANTON.": [
  "M. Antonius", 
  {
   "epistulae ad Ciceronem datae": "epistulae ad Ciceronem datae", 
   "orationum edictorumque fragm. servata apud CIC. Phil.": "orationum edictorumque fragm. servata apud CIC. Phil.", 
   "fragmenta (fere orationis pro C. Norbano) servata apud CIC. de orat.": "fragmenta (fere orationis pro C. Norbano) servata apud CIC. de orat."
  }, 
  [
   "-143", 
   "-87", 
   "orator", 
   ""
  ]
 ], 
 "GILD.": [
  "Gildas Sapiens Britannus", 
  {
   "paenit.": "praefatio de paenitentia", 
   "Brit.": "de excidio et conquestu Britanniae", 
   "epist.": "fragmenta epistularum"
  }, 
  [
   "500", 
   "570", 
   "", 
   ""
  ]
 ], 
 "POSTVL.": [
  "", 
  {
   "ap. procos. Aug. c. Cresc.": "postulatio apud Herodem proconsulem servata apud AVG. c. Cresc."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LVCIL. IVN.": [
  "Lucilius Iunior", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "6", 
   "99", 
   "", 
   ""
  ]
 ], 
 "VITAE": [
  "", 
  {
   "patr. Iurens.": "vitae patrum Iurensium", 
   "patr.": "vitae patrum sive historia eremitica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RVFIN.": [
  "Tyrannius (Turranius) Rufinus", 
  {
   "apol. Orig.": "apologeticus Pamphili martyris pro Origene latine versus", 
   "Clement.": "Clementis Romani quae feruntur recognitiones latine versae", 
   "Orig. in Rom.": "Origenis commentarius in Pauli epistulam ad Romanos latine versus", 
   "Adamant.": "libri Adamantii Origenis adversus haereticos latine versi", 
   "sent. Sext.": "Sexti quae feruntur sententiae latine versae", 
   "Orig. princ.": "Origenis libri de principiis latine versi", 
   "symb.": "expositio symboli", 
   "hist. mon.": "de vita sanctorum, i. historia monachorum latine versa", 
   "Orig. in psalm.": "Origenis homiliae in psalmos 36\u201438 latine versae", 
   "apol. adv. Hier.": "apologia adversus Hieronymum", 
   "hist.": "Eusebii historia ecclesiastica translata et continuata", 
   "epil.": "epilogus ipsius Rufini", 
   "Basil. reg.": "Basilii regula latine versa", 
   "patr.": "de benedictionibus patriarcharum", 
   "Basil. hom.": "Basilii homiliae aliquot latine versae", 
   "Orig. in gen.": "Origenis homiliae in heptateuchon (praeter deut.) latine versae", 
   "apol. ad Anast.": "apologia ad Anastasium papam", 
   "epist. Clement.": "epistula Clementis ad Iacobum latine versa", 
   "praef. Rufin.": "praefatio ipsius Rufini", 
   "Hier. adv. Rufin.": "epistulae ad Hieronymum partes apud HIER. adv. Rufin. 3 servatae", 
   "praef. Orig.": "praefatio Origenis", 
   "Greg. Naz. orat.": "Gregorii Nazianzeni orationes latine versae", 
   "Orig. in cant.": "Origenis commentarius in canticum canticorum latine versus"
  }, 
  [
   "345", 
   "412", 
   "presbyter Aquileiensis", 
   ""
  ]
 ], 
 "EVGIPP.": [
  "Eugippius", 
  {
   "reg.": "regula (sc. cento cod. Paris. 12634 traditus, qui nunc Eugippio ascribitur)", 
   "Sev.": "vita Severini (commemoratorium)", 
   "epist. ad Prob.": "epistula ad Probam", 
   "exc. Aug.": "excerpta ex operibus S. Augustini", 
   "epist. ad Pasch.": "epistula ad Paschasium"
  }, 
  [
   "465", 
   "533", 
   "abbas castelli Lucullani prope Neapolim", 
   ""
  ]
 ], 
 "GLOSS. $1": [
  "", 
  {
   "iurispr.": "glossarium iurisprudentiae incipiens a voce $Ladet (= habet), sc. lexicon vocum latinarum temporibus Byzantinis fere e THEOPHIL. inst. Iust. excerptum", 
   "Leid. Hessels": "Leid. Hessels"
  }, 
  [
   "", 
   "", 
   "", 
   "GLOSS. LI Ansil. ZO 16 (med. p. 96)"
  ]
 ], 
 "GLOSS. $3": [
  "", 
  {
   "Vatic. Reg. 203": "glossae codicis Vaticani Regin. 203"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. $2": [
  "", 
  {
   "Paul.": "glossarii bilinguis fere in Pauli apostoli epistulas reliquiae servatae papyro saec. IV/V (respiciuntur II Cor., Eph., Gal., Rom.)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. $4": [
  "", 
  {
   "PA 25 (cod. Paris.)": "glossa PA 25 allata ex ipso codice Parisino in duo volumina diviso (A\u2014E: cod. 11529; F\u2014Z: cod. 11530; Lowe 611)", 
   "LI Ansil. ZI 1": "glossaria latina a Lindsay al. collecta, vol. I, glossarium Ansileubi q. d. (vel liber glossarum), glossarum quae incipiunt a litteris ZI glossa 1 (olim et hoc et alia huius collectionis glossaria afferebamus sec. collectionem vetustiorem, quae tamen etiam nunc non raro adhibenda est)", 
   "SI 617 (mens. p. 114)": "glossa SI 617 integra una cum ceteris, quibus mensium nomina tractantur, a Mountford edita, p. 114 (quae glossae apud Lindsay notis 'Mens. ' vel 'mens. ' distinctae sunt)", 
   "interpr. nom. p. 189,340": "interpretatio nominum, p. 189 glossa 340", 
   "L Corp.": "glossarium codicis 144 collegii Cantabrigiensis q. d. Corpus Christi editum a Lindsay", 
   "Z 7": "glossarum a littera Z incipientium glossa 7", 
   "Zeitschr. Pap. Epigr. 47,1982 p. 293": "glossaria nonnulla", 
   "ZO 16 (med. p. 96)": "glossa ZO 16 integra una cum ceteris, quae e medicorum scriptis sumptae sunt, ab Heiberg edita, p. 96 (usque adhuc nota propria utebamur indicantes paginam et lineam sec. Heiberg)", 
   "UD 3 (diff. p. 113)": "glossa UD 3 integra una cum aliis, quae e differentiis q. d. sumptae sunt, ab Uhlfelder edita, p. 113 (quae glossae apud Lindsay plerumque nota 'Diff. ' distinctae sunt)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. LEO M.": [
  "Pseudo-Leo Magnus", 
  {
   "humil.": "epistula ad Demetriadem virginem de vera humilitate"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "LVSC. LANVV.": [
  "Luscius Lanuvinus", 
  {
   "com.": "Thensauri palliatae fragmentum"
  }, 
  [
   "-200", 
   "-100", 
   "comicus", 
   ""
  ]
 ], 
 "[BRVT. ET CASS.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "CASS. Cic. fam."
  ]
 ], 
 "TARR. PAT.": [
  "Tarruntenus (Tarrutenius) Paternus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "OROS.": [
  "Paulus(?) Orosius", 
  {
   "apol.": "liber apologeticus, sc. contra Iohannem episcopum Hierosolymitanum et contra Pelagium", 
   "comm.": "commonitorium ad Augustinum de errore Priscillianistarum et Origenistarum", 
   "hist.": "historiae adversum paganos"
  }, 
  [
   "385", 
   "418", 
   "presbyter Hispanus", 
   ""
  ]
 ], 
 "SORT.": [
  "", 
  {
   "Sangall.": "sortes codicis rescripti Sangallensis 908", 
   "sortes versibus hexametris scriptae": "sortes versibus hexametris scriptae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COD.": [
  "", 
  {
   "gest. in sen.": "gesta in senatu Romano de codice Theodosiano publicando", 
   "de emend. cod.": "constitutio 'Cordi' de emendatione codicis Iustiniani et secunda eius editione", 
   "Visig.": "epitome Visigothica (sc. breviarii Alarici)", 
   "de cod. comp.": "constitutio 'Haec' de novo codice componendo", 
   "Herm.": "codex Hermogenianus (sc. principum constitutiones ab Hermogeniano quodam [HERMOG. ?] collectae) deperditus, cuius tamen fragmenta alia alibi servata sunt", 
   "Greg.": "codex Gregorianus (sc. principum constitutiones a Gregorio quodam collectae) deperditus, cuius tamen fragmenta alia alibi servata sunt", 
   "Theod.": "codex Theodosianus (sc. principum inde a Constantino constitutiones iussu Theodosii II collectae)", 
   "de cod. confirm.": "constitutio 'Summa' de Iustiniano codice confirmando", 
   "Iust.": "codex Iustinianus (sc. principum inde ab Hadriano constitutiones iussu Iustiniani collectae) retractatus", 
   "const. de constit.": "constitutio de constitutionariis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MVTIAN.": [
  "Mutianus", 
  {
   "Chrysost. hom.": "Iohannis Chrysostomi homiliae in epistulam ad Hebraeos iussu Cassiodori e graeco versae"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "VOLVS.": [
  "Rufius Antonius Agrypnius Volusianus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "SVLP. SEV.": [
  "Sulpicius Severus", 
  {
   "dial.": "dialogi", 
   "epist.": "epistulae", 
   "Mart.": "vita S. Martini", 
   "chron.": "chronica", 
   "[epist. app.]": "[epist. app.]"
  }, 
  [
   "363", 
   "425", 
   "", 
   ""
  ]
 ], 
 "EPHR.": [
  "Ephraem Syrus", 
  {
   "iudic. et resurr.": "de iudicio dei et resurrectione ... vel de extremo iudicio", 
   "beat.": "de beatitudine animae", 
   "paenit.": "de paenitentia", 
   "de die iudic.": "de die iudicii", 
   "Ioseph": "sermo in Ioseph (sc. patriarcham)", 
   "luctam.": "de luctamine spiritali vel de luctationibus", 
   "compunct.": "de compunctione cordis vel monita"
  }, 
  [
   "306", 
   "373", 
   "", 
   ""
  ]
 ], 
 "CALP.": [
  "L. Calpurnius Piso Frugi (Censorius)", 
  {
   "ecl.": "eclogae (bucolica)", 
   "hist.": "annalium fragmenta"
  }, 
  [
   "-180", 
   "-120", 
   "historicus", 
   ""
  ]
 ], 
 "LACT.": [
  "L. Cae(ci)lius Firmianus Lactantius", 
  {
   "opif.": "de opificio dei (vel formatione hominis)", 
   "mort. pers.": "de mortibus persecutorum", 
   "Phoen.": "de ave Phoenice (carmen nonnullis spurium)", 
   "epit.": "divinarum institutionum (sc. LACT. inst.) epitome", 
   "ira": "de ira dei", 
   "interpol.": "interpolationes", 
   "inst.": "divinae institutiones", 
   "frg.": "fragmenta operum deperditorum"
  }, 
  [
   "250", 
   "320", 
   "rhetor Africanus", 
   ""
  ]
 ], 
 "VENVL.": [
  "Venuleius Saturninus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "RVFIN. $1": [
  "Rufinus", 
  {
   "gramm.": "commentarii in metra Terentiana et de numeris oratorum"
  }, 
  [
   "400", 
   "499", 
   "grammaticus Antiochensis", 
   ""
  ]
 ], 
 "MARCIVS": [
  "(Cn.) Marcius vates", 
  {
   "carm. frg.": "fragmenta carminum, sc. quae inter praecepta numerantur"
  }, 
  [
   "-270", 
   "-200", 
   "", 
   ""
  ]
 ], 
 "CREMVT.": [
  "A. Cremutius Cordus", 
  {
   "hist.": "annalium fragmenta"
  }, 
  [
   "-50", 
   "25", 
   "historicus", 
   ""
  ]
 ], 
 "VERS.": [
  "", 
  {
   "metr. Bass. gramm.": "versus a Caesio Basso aliisque metricis ficti, e. g. apud BASS. gramm."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIER.": [
  "Hieronymus Stridonensis", 
  {
   "in Ioel.": "commentarii in Ioel prophetam", 
   "in Hab.": "commentarii in Habacuc prophetam (divisi in libros duos)", 
   "in eccles.": "commentarii in ecclesiasten", 
   "in Is.": "tractatus duo in Isaiam", 
   "Aug. epist. Divj.": "epistula ad Aurelium episcopum Carthaginiensem nuper reperta", 
   "in psalm. I": "series prior", 
   "interpr. Iob": "interpretatio vetustior libri Iob emendata ab Hieronymo sec. hexapla Origenis (distinguenda a VVLG. Iob)", 
   "in Gal.": "commentarii in epistulam Pauli ad Galatas (divisi in libros tres)", 
   "in psalm. II": "series altera", 
   "in Philem.": "commentarii in epistulam Pauli ad Philemonem", 
   "epist. epistularum corpus ab editoribus compositum": "diverse", 
   "[monogr.]": "[monogr.]", 
   "a. Abr.": "ad annum post natum Abraham 2394 (anni indicantur kat\u00e0 denos in margine sinistra numeris Romanis linea subscripta insignibus)", 
   "epist.": "Hieronymi epistula operi anteposita", 
   "in Mich.": "commentarii in Michaeam prophetam (divisi in libros duos)", 
   "in Zach.": "commentarii in Zachariam prophetam (divisi in libros tres)", 
   "in Soph.": "commentarii in Sophoniam prophetam", 
   "vita": "vitae trium monachorum", 
   "nom. hebr.": "hebraica nomina (liber interpretationis hebraicorum nominum)", 
   "c. Vigil.": "contra Vigilantium presbyterum Gallum", 
   "adv. Iovin.": "adversus Iovinianum", 
   "chron.": "chronicon omnimodae historiae, sc. Eusebii Caesariensis chronicorum pars altera e graeco versa, retractata", 
   "in Os.": "commentarii in Osee prophetam (divisi in libros tres)", 
   "quaest. hebr. in gen.": "quaestiones hebraicae in genesim", 
   "epist. Theod.": "epistula Theodori monachi Tabennensis de pascha e graeco (quod periit) versa", 
   "interpr. Salom. praef.": "interpretatio vetustior librorum Salomonis ab Hieronymo emendata (distinguenda a VVLG.), praefatio Hieronymi (cetera perierunt)", 
   "in Ezech.": "homiliae XIV in Ezechielem (graeca perierunt)", 
   "interpr. par. praef.": "interpretatio vetustior librorum paralipomenon ab Hieronymo emendata (distinguenda a VVLG. par.), praefatio Hieronymi (cetera perierunt)", 
   "in Luc.": "homiliae XXXIX in Lucam (exstant fragmenta graeca)", 
   "in psalm.": "tractatus in psalmos", 
   "adv. Rufin.": "adversus Rufinum libri tres", 
   "Pauli": "vita Pauli Thebaei", 
   "Malchi": "vita Malchi (captivus monachus)", 
   "Orsies. doctr.": "(H)orsiesii abbatis Tabennensis doctrina latine versa", 
   "in Ier.": "commentarii in Ieremiam prophetam imperfecti", 
   "in Am.": "commentarii in Amos prophetam (divisi in libros tres)", 
   "in Matth.": "commentarii in Matthaeum (divisi in libros IV)", 
   "in Nah.": "commentarii in Nahum prophetam", 
   "praef.": "Hieronymi praefatio (non solum regulae, sed totius Pachomianorum corporis)", 
   "virg. Mar.": "adversus Helvidium de Mariae virginitate perpetua", 
   "prol.": "prologus totius operis", 
   "in Marc.": "tractatus in Marci euangelium", 
   "epist. Pachom.": "epistulae Pachomii abbatis Tabennensis e graeco versae", 
   "in Dan.": "commentarii in Danielem prophetam", 
   "Hilar.": "vita Hilarionis", 
   "in Tit.": "commentarii in epistulam Pauli ad Titum", 
   "tract.": "tractatus vel sermones ab Hieronymo habiti", 
   "[prol. gal.]": "prologus galeatus q. d.", 
   "psalt. sec. Hebr.": "psalterium sec. (iuxta) Hebraeos, sc. psalmi ex hebr. versi", 
   "lib. 3 praef.": "praefatio libri tertii", 
   "c. Ioh.": "contra Iohannem Hierosolymitanum episcopum", 
   "vir. ill.": "de illustribus viris (de scriptoribus ecclesiasticis)", 
   "c. Lucif.": "altercatio Luciferiani et orthodoxi (dialogus contra Luciferianos)", 
   "euang.": "ad euangelium", 
   "in Eph.": "commentarii in epistulam Pauli ad Ephesios (divisi in libros tres)", 
   "in Ion.": "commentarii in Ionam prophetam", 
   "reg. Pachom.": "regula Pachomii abbatis Tabennensis aliorumque (?) versa e graeco una cum aliis Pachomianis", 
   "Victorin. Poetov. in apoc.": "Victorini Poetovionensis commentarius in apocalypsin ab Hieronymo retractatus", 
   "praef. Vulg. Dan.": "praefationes ad singulas Vulgatae partes conscriptae", 
   "sit. et. nom.": "de locis (de situ et nominibus locorum hebraicorum)", 
   "in Agg.": "commentarii in Aggaeum prophetam", 
   "in Mal.": "commentarii in Malachiam prophetam", 
   "hom. Orig.": "homiliae Origenis quot e graeco vertit Hieronymus", 
   "in Abd.": "commentarii (sc. alteri) in Abdiam prophetam", 
   "[mon. Pachom.]": "[mon. Pachom.]", 
   "in cant.": "homiliae duae in canticum canticorum (graeca perierunt)", 
   "Didym. spir.": "Didymi Alexandrini liber de spiritu sancto latine versus", 
   "adv. Pelag.": "dialogus adversus Pelagianos"
  }, 
  [
   "347", 
   "420", 
   "presbyter et abbas Bethlehemiticus", 
   ""
  ]
 ], 
 "CHALC.": [
  "C(h)alcidius", 
  {
   "praef.": "praefatio operis (sc. epistula ad Osium)", 
   "comm.": "commentarius (in Platonis Timaeum)", 
   "transl.": "(Platonis Timaei) translatio"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "ANTHIM.": [
  "Anthimus", 
  {
   "praef.": "praefatio", 
   "de observatione ciborum epistula ad Theodoricum regem Francorum": "de observatione ciborum epistula ad Theodoricum regem Francorum"
  }, 
  [
   "450", 
   "550", 
   "medicus", 
   ""
  ]
 ], 
 "PONTIAN.": [
  "Pontianus", 
  {
   "epist.": "epistula ad imp. Iustinianum"
  }, 
  [
   "500", 
   "599", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "QVEROL.": [
  "incerti auctoris", 
  {
   "Querolus sive Aulularia": "Querolus sive Aulularia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FERREOL.": [
  "Ferreolus", 
  {
   "reg.": "regula monastica"
  }, 
  [
   "530", 
   "581", 
   "episcopus Vceticensis Gallus", 
   ""
  ]
 ], 
 "EVTR.": [
  "Eutropius", 
  {
   "breviarium ab urbe condita": "breviarium ab urbe condita"
  }, 
  [
   "300", 
   "390", 
   "", 
   ""
  ]
 ], 
 "PAMMACH.": [
  "Pammachius et Oceanus", 
  {
   "Hier. epist.": "epistula ad Hieronymum"
  }, 
  [
   "350", 
   "409", 
   "", 
   ""
  ]
 ], 
 "CLOD. LIC.": [
  "C. Clodius Licinus", 
  {
   "hist.": "fragmenta librorum rerum Romanarum"
  }, 
  [
   "-50", 
   "50", 
   "historicus", 
   ""
  ]
 ], 
 "CASS. FEL.": [
  "Cassius Felix", 
  {
   "de medicina ex Graecis logicae sectae auctoribus liber translatus": "de medicina ex Graecis logicae sectae auctoribus liber translatus"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "HEGES.": [
  "Hegesippus", 
  {
   "historia, sc. Flavii Iosephi de bello Iudaico opus e graeco versum atque retractatum": "historia, sc. Flavii Iosephi de bello Iudaico opus e graeco versum atque retractatum"
  }, 
  [
   "100", 
   "180", 
   "", 
   ""
  ]
 ], 
 "EPITAPH.": [
  "", 
  {
   "Plaut. Gell. 1,24,3": "epitaphia Naevii, Pacuvii, Plauti, quae GELL. 1,24 tradit (ipsis poetis tribuit)", 
   "Mar. Avent.": "epitaphium Marii Aventicensis episcopi", 
   "All. Potest. (CE 1988)": "epitaphium Alliae Potestatis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NAEV.": [
  "Cn. Naevius", 
  {
   "carm. frg.": "carminum praeter scaenica (sc. fere belli Punici) fragmenta", 
   "praetext.": "praetextarum fragmenta", 
   "trag.": "tragoediarum fragmenta", 
   "[ep.]": "[ep.]", 
   "com.": "comoediarum fragmenta"
  }, 
  [
   "-265", 
   "-201", 
   "", 
   ""
  ]
 ], 
 "TICID.": [
  "Ticidas", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-100", 
   "-46", 
   "", 
   ""
  ]
 ], 
 "[IVS]": [
  "", 
  {
   "[hosp.]": "[hosp.]", 
   "[magistr. Pompel.]": "[magistr. Pompel.]", 
   "[colleg. eborar.]": "[colleg. eborar.]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. leg. iurid."
  ]
 ], 
 "NOVAT.": [
  "Novatus", 
  {
   "sententia de humilitate et oboedientia et de calcanda superbia": "sententia de humilitate et oboedientia et de calcanda superbia"
  }, 
  [
   "100", 
   "151", 
   "catholicus", 
   ""
  ]
 ], 
 "PS. DIOSC.": [
  "Pseudo-Dioscurides", 
  {
   "[Vind.]": "[Vind.]", 
   "herb. fem.": "de herbis femininis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "P. SCAEV.": [
  "P. Mucius Scaevola", 
  {
   "Cic. dom.": "fragm. servatum apud CIC. dom."
  }, 
  [
   "-180", 
   "-115", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "NINN.": [
  "Ninnius Crassus", 
  {
   "carm. frg.": "Iliados fragmenta"
  }, 
  [
   "republikanische Zeit, keine Lebensdaten", 
   "", 
   "\u00dcbersetzer der Ilias", 
   ""
  ]
 ], 
 "PS. HIPPOCR.": [
  "Pseudo-Hippocrates", 
  {
   "ad Antioch.": "epistula (e graeco versa) ad Antiochum regem (epist. Dioclis ad Antigonum regem sec. Paulum Aeginetam al.)", 
   "ad Maecen.": "epistula ad Maecenatem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. OV.": [
  "Pseudo-Ovidius", 
  {
   "Aen. 12,10": "argumenta decasticha Aeneidos, lib. 12 vers. 10", 
   "buc. georg. 28": "argumenta tetrasticha bucolicon et georgicon, vers. 28 Shackleton Bailey (usque adhuc 24 Riese)", 
   "argum.": "argumenta Vergilii carminum", 
   "epist.": "versus, qui multis Ovidii epistulis heroid. anteponuntur", 
   "Aen. 12 monost.": "eidem argumento praepositum monostichum"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "PROVERB.": [
  "", 
  {
   "Graec. B": "proverbia Graecorum, series B"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "REPOS.": [
  "Reposianus", 
  {
   "concubitus Martis et Veneris": "concubitus Martis et Veneris"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "BASS.": [
  "Caesius Bassus", 
  {
   "gramm.": "fragmentum libri de metris sub nomine Atilii Fortunatiani traditum (postea contaminatum)", 
   "eiusdem libri fragm. allatum a RVFIN. gramm.": "eiusdem libri fragm. allatum a RVFIN. gramm.", 
   "lyricorum fragm. allatum a PRISC. gramm.": "lyricorum fragm. allatum a PRISC. gramm."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "FEST.": [
  "Sex. Pompeius Festus", 
  {
   "epitomae operis de verborum significatu Verrii Flacci (aet. Augusti et Tiberii) quae exstant": "epitomae operis de verborum significatu Verrii Flacci (aet. Augusti et Tiberii) quae exstant"
  }, 
  [
   "150", 
   "199", 
   "", 
   ""
  ]
 ], 
 "PS. PRIMAS.": [
  "Pseudo-Primas", 
  {
   "in Rom.": "commentarius in epistulas Paulinas Primasio perperam attributus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONSTANT. PORPH.": [
  "Constantinus Porphyrogenitus", 
  {
   "caer. aul. Byz.": "de caerimoniis aulae Byzantinae, ex quo opere graeco (postea retractato) afferimus interdum voces latinas in formulis vetustioribus servatas"
  }, 
  [
   "905", 
   "959", 
   "imperator Byzantinus", 
   ""
  ]
 ], 
 "FAVST. REI.": [
  "Faustus Reiensis", 
  {
   "grat.": "de gratia quae exstant", 
   "[symb.]": "homiliae de symbolo duae", 
   "epist.": "epistulae", 
   "spir.": "de spiritu sancto (opus iam antiquitus etiam Paschasio diacono Romano ascriptum)", 
   "rat. fid.": "de ratione fidei (opusculum olim Fausto ascriptum, nunc plerisque dubium aut spurium)"
  }, 
  [
   "400", 
   "495", 
   "in Gallia Narbonensi civitatis episcopus", 
   ""
  ]
 ], 
 "RVSTIC.": [
  "Rusticus", 
  {
   "epist. ad Eucher.": "epistula ad Eucherium", 
   "[synod. ...]": "synodicon, pars ab ipso Rustico latine versa", 
   "c. aceph.": "contra acephalos disputatio"
  }, 
  [
   "", 
   "", 
   "presbyter", 
   ""
  ]
 ], 
 "LEP.": [
  "M. Aemilius Lepidus Porcina", 
  {
   "or. frg. Prisc. gramm. II": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm. II", 
   "Cic. fam.": "epistulae"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "CONSVLT.": [
  "", 
  {
   "Zacch.": "consultationes Zacchaei christiani et Apollonii philosophi", 
   "consultatio veteris cuiusdam iurisconsulti q. d.": "consultatio veteris cuiusdam iurisconsulti q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVSTINVS": [
  "imp. Iustinus", 
  {
   "novell. Iust.": "novellae Iustiniani"
  }, 
  [
   "450", 
   "527", 
   "", 
   ""
  ]
 ], 
 "HIPPIATR.": [
  "", 
  {
   "gr. II": "corpus hippiatricorum graecorum, sc. fragmenta ex operibus antiquitate vergente de mulomedicina sim. conscriptis excerpta tempore Byzantino collecta, vol. II"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPHAN.": [
  "Stephanus Larissenus et alii", 
  {
   "libelli tres ad Bonifatium papam": "libelli tres ad Bonifatium papam"
  }, 
  [
   "450", 
   "550", 
   "episcopus", 
   ""
  ]
 ], 
 "NEMES.": [
  "Nemesianus et socii", 
  {
   "cyn.": "cynegeticon quae supersunt", 
   "auc.": "carminis Nemesiano ascripti de aucupio fragmenta", 
   "ecl.": "eclogae (bucolica)", 
   "frg. 1": "fragmentum 1", 
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AVSPIC.": [
  "Auspicius", 
  {
   "ad Arbog.": "epistula ad Arbogastem comitem Treverorum"
  }, 
  [
   "400", 
   "499", 
   "episcopus ecclesiae Tullensis", 
   ""
  ]
 ], 
 "VERAN.": [
  "Veranus", 
  {
   "sententia de castitate sacerdotum": "sententia de castitate sacerdotum", 
   "Macr. Sat.": "de rebus sacris"
  }, 
  [
   "550", 
   "600", 
   "episcopus (sive Cabellitanus sive Lugdunensis)", 
   ""
  ]
 ], 
 "APRISS.": [
  "Aprissius (?)", 
  {
   "Atellanarum(?) poeta": "Atellanarum(?) poeta"
  }, 
  [
   "-150", 
   "-50", 
   "", 
   "fragmentum, quod servavit VARRO ling."
  ]
 ], 
 "SCAEV.": [
  "(Q.) Cervidius Scaevola", 
  {
   "carm. frg.": "carminum fragm.", 
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "VLFILA": [
  "Vlfila", 
  {
   "Maximin. c. Ambr.": "fides (ab Auxentio allata)"
  }, 
  [
   "311", 
   "383", 
   "episcopus Arianus Gothorum", 
   ""
  ]
 ], 
 "ORAT.": [
  "", 
  {
   "Claud. (CIL XIII 1668)": "Claudii de iure honorum Gallis dando", 
   "imp.": "orationes imperatorum inscriptionibus papyrisve traditae", 
   "Hadr. (CIL XIV 3579)": "laudatio funebris ab imp. Hadriano in honorem Matidiae socrus habita", 
   "Vesp. (CIL XIV 3608)": "fragmentum orationis imp. Vespasiani in honorem Ti. Plautii Silvani Aeliani"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAST.": [
  "Anastasius I", 
  {
   "epistula ad Simplicianum (Epist. pontif. 276)": "epistula ad Simplicianum (Epist. pontif. 276)"
  }, 
  [
   "350", 
   "401", 
   "papa", 
   ""
  ]
 ], 
 "GAETVL.": [
  "Cn. Cornelius Lentulus Gaetulicus", 
  {
   "carm. frg.": "carminum fragmentum"
  }, 
  [
   "-20", 
   "39", 
   "cos. 26", 
   ""
  ]
 ], 
 "NIGID.": [
  "P. Nigidius Figulus", 
  {
   "Prisc. gramm.": "fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm."
  }, 
  [
   "-100", 
   "-45", 
   "", 
   ""
  ]
 ], 
 "AETNA": [
  "", 
  {
   "Aetna, carmen appendicis Vergilianae": "Aetna, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FILASTR.": [
  "Filastrius (vel Filaster)", 
  {
   "diversarum haereseon liber (de haeresibus)": "diversarum haereseon liber (de haeresibus)"
  }, 
  [
   "330", 
   "397", 
   "episcopus Brixiensis", 
   ""
  ]
 ], 
 "SVLP. VICT.": [
  "Sulpicius Victor", 
  {
   "rhet.": "institutiones oratoriae"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "MACER": [
  "C. Licinius Macer Calvi pater", 
  {
   "carm. frg.": "carminum fragmenta", 
   "dig.": "fragmenta in digesta servata", 
   "or. frg. Prisc. gramm.": "orationis pro Tuscis fragm. servatum apud PRISC. gramm.", 
   "hist.": "opus historicum, sc. annales"
  }, 
  [
   "-150", 
   "-66", 
   "", 
   ""
  ]
 ], 
 "LYGD.": [
  "Lygdamus (pseudon.)", 
  {
   "elegiae, quae sunt corporis Tibulliani": "elegiae, quae sunt corporis Tibulliani"
  }, 
  [
   "-43", 
   "50", 
   "", 
   ""
  ]
 ], 
 "DOM. AF.": [
  "Cn. Domitius Afer", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "0", 
   "59", 
   "", 
   ""
  ]
 ], 
 "REGVLA": [
  "", 
  {
   "Macar.": "Mac(h)arii abbatis quae fertur (fortasse Porcarii)", 
   "Paul. Steph.": "Pauli et Stephani abbatum", 
   "patr. II": "patrum secunda", 
   "mag.": "magistri", 
   "orient.": "orientalis (vix Vigilii diaconi)", 
   "regulae monachorum": "regulae monachorum", 
   "Tarnat.": "monasterii Tarna(n)tensis", 
   "patr. I": "patrum prima", 
   "patr. III": "patrum tertia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARBO": [
  "C. Papirius Carbo", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. de orat.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. de orat."
  }, 
  [
   "-250", 
   "-119", 
   "", 
   ""
  ]
 ], 
 "[RAVENN.]": [
  "", 
  {
   "Ravennatis anonymi cosmographia": "Ravennatis anonymi cosmographia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONIAN.": [
  "Leonianus", 
  {
   "Alc. Avit. epist.": "epistula ad Sapaudum"
  }, 
  [
   "450", 
   "550", 
   "archidiaconus", 
   ""
  ]
 ], 
 "EPIST.": [
  "", 
  {
   "de aedif. (CIL VI 1585b)": "epistulae rationalium (praecedit petitio Adrasti lib.) de aedificio post columnam divi Marci exstruendo", 
   "Alex.": "epistula Alexandri Macedonis ad Aristotelem magistrum suum de itinere suo et de situ Indiae", 
   "Arel.": "epistulae collectionis Arelatensis q. d., sc. quae non a pontificibus Romanis conscriptae sunt", 
   "apost.": "epistulae apostolorum q. d. e graeco (quod periit) versae fragmenta", 
   "Ann.": "fragmentum epistulae Annae ad Senecam q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[CAEL.]": [
  "", 
  {
   "[hist.]": "[hist.]"
  }, 
  [
   "", 
   "", 
   "", 
   "COEL. hist."
  ]
 ], 
 "LIB.": [
  "", 
  {
   "chron. I": "Lib. gen. I", 
   "de praen.": "liber de praenominibus q. d. (fragm. ex C. Titi Probi opere grammatico servatum)", 
   "gener.": "liber generationis uterque, qui ex eadem stirpe (Hippolyti chronicis graecis) ac CHRON. Alex. ortus iuxta hoc opusculum a Mommsen editus est", 
   "pontif. frg. Veron.": "fragm. Veronense operis cuiusdam libro pontificali similis", 
   "de asse": "liber de asse (olim perperam Balbo gromatico adscriptus)", 
   "pontif.": "liber pontificalis (gesta pontificum Romanorum), sc. pars prima, cuius recensionem priorem nunc plurimi a. 530/532 confectam esse censent", 
   "col.": "liber (sc. gromaticus) coloniarum q. d. (sequitur quodammodo Balbum quendam al.)", 
   "iubil.": "libri iubilaeorum fere a. 100 a. Chr. hebraice conscripti e versione graeca latine versi quae exstant", 
   "geneal. chron. I": "liber genealogus (confectus saec. Vin. , progrediente saec. non semel tantum retractatus), vol. I", 
   "a. 334 chron. I": "Lib. gen. II a. 334"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[TRACT.] $2": [
  "", 
  {
   "[de trin.]": "[de trin.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PELAG. frg."
  ]
 ], 
 "COLL.": [
  "", 
  {
   "Mos.": "lex dei sive Mosaicarum et Romanarum legum collatio (fragmentum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONSTANTIVS": [
  "Constantius", 
  {
   "epist.": "epistulae, quae vitae praemittuntur", 
   "vita Germ.": "vita Germani episcopi Autissiodorensis", 
   "praef.": "vitae praefatio"
  }, 
  [
   "420", 
   "497", 
   "clericus Lugdunensis", 
   ""
  ]
 ], 
 "PS. DOSITH.": [
  "", 
  {
   "frg. iur.": "fragmentum Dositheanum vel de manumissionibus q. d. iurisconsulti cuiusdam graece et latine servatum inter Pseudodositheana hermeneumata (sc. quae interdum una cum DOSITH. traduntur)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[LIC. EVDOX.]": [
  "Licinia Eudoxia Augusta", 
  {
   "[Leo M. epist.]": "ad Theodosium imperatorem inter Leonis Magni epistulas"
  }, 
  [
   "422", 
   "462", 
   "", 
   "CONC. S II 3,1 p. 15,29"
  ]
 ], 
 "[PS. LACT.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "LACT."
  ]
 ], 
 "LAEV.": [
  "Laevius", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "100", 
   "99", 
   "poeta", 
   ""
  ]
 ], 
 "VICT. TONN.": [
  "Victor Tonnennensis", 
  {
   "chron.": "chronica"
  }, 
  [
   "500", 
   "599", 
   "episcopus", 
   ""
  ]
 ], 
 "[PS. HIL. AREL.]": [
  "Pseudo-Hilarius Arelatensis", 
  {
   "[in epist. canon.]": "tractatus in septem epistulas canonicas"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PHYSIOL.": [
  "", 
  {
   "Physiologus latinus": "Physiologus latinus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MART.": [
  "M. Valerius Martialis", 
  {
   "epigr.": "epigrammaton (vel spectaculorum) liber"
  }, 
  [
   "40", 
   "104", 
   "ex Hispania Tarraconensi Bilbilitanus", 
   ""
  ]
 ], 
 "ORIENT.": [
  "Orientius", 
  {
   "comm.": "commonitorium", 
   "carm. app.": "carminum minorum, quae Orientio vix recte adscripta sunt, appendix"
  }, 
  [
   "370", 
   "450", 
   "poeta christianus (fortasse episcopus Ausciorum, civitatis Aquitaniae)", 
   ""
  ]
 ], 
 "PACIAN.": [
  "Pacianus", 
  {
   "bapt.": "sermo de baptismo", 
   "epist.": "epistulae contra Novatianos", 
   "paraen.": "paraenesis ad paenitentiam"
  }, 
  [
   "300", 
   "393", 
   "episcopus Barcinonensis", 
   ""
  ]
 ], 
 "HERMEN.": [
  "", 
  {
   "Celtis coll.": "hermeneumata codicis Conradi Celtis, colloquia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FANN.": [
  "C. Fannius M. f.", 
  {
   "orationis c. C. Gracchum fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.": "orationis c. C. Gracchum fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.", 
   "hist.": "librorum historicorum (sc. annalium; vix attribuendi sunt alteri C. Fannio) fragmenta"
  }, 
  [
   "-170", 
   "-120", 
   "", 
   ""
  ]
 ], 
 "EXC. $1": [
  "", 
  {
   "Sang. chron. I": "excerpta Sangallensia (immo excerptorum illorum ad FAST. Vind. pertinentium partes eae, quas Mommsen sub hoc titulo edidit), vol. I", 
   "metrol. chron. I": "excerpta metrologica (sc. de mensuris et ponderibus; servata sunt in cod. Vind. 89), vol. I", 
   "not. urb. chron. I": "excerpta de montibus et aquis urbis Romae, tradita una cum Notitia urbis Romae q. d. (sc. REG. urb.), vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. PETR. CHRYS.": [
  "Pseudo-Petrus Chrysologus", 
  {
   "serm. Migne suppl. 3": "sermones alibi editi, e. g. apud Migne suppl. 3", 
   "serm.": "sermones collectionis Felicianae spurii"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARM.": [
  "Parmenianus", 
  {
   "Aug. c. Parm.": "fragmenta servata apud AVG. c. Parm."
  }, 
  [
   "300", 
   "399", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "PS. CYPR.": [
  "Pseudo-Cyprianus", 
  {
   "pudic.": "de bono pudicitiae", 
   "adv. Iud.": "adversus Iudaeos", 
   "laud. mart.": "de laude martyrii", 
   "pasch.": "de pascha computus", 
   "Iud. incred.": "ad Vigilium episcopum de Iudaica incredulitate (i. Celsi cuiusdam epistula)", 
   "singul. cler.": "de singularitate clericorum", 
   "or.": "orationes (sc. preces, quae sec. exempla quaedam graeca confectae sunt)", 
   "epist. 4": "epistulae quattuor ab Hartel collectae", 
   "aleat.": "de aleatoribus", 
   "mont.": "de montibus Sina et Sion", 
   "exhort. paen.": "exhortatio de paenitentia (sc. collectio locorum e sacris scripturis excerptorum)", 
   "[merced.]": "[merced.]", 
   "[abus.]": "de duodecim abusivis saeculi", 
   "cena": "cena Cypriani q. d.", 
   "ad Novat.": "ad Novatianum", 
   "spect.": "de spectaculis", 
   "tract.": "tractatus de centesima, de sexagesima, de tricesima (sc. mercede; respicitur Matth. 13,8)", 
   "rebapt.": "de rebaptismate"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[CASSIOD. (?)]": [
  "", 
  {
   "[epil. Esth.]": "[epil. Esth.]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIL. bibl. Esth."
  ]
 ], 
 "[GLOSS.]": [
  "", 
  {
   "[Journ. Rom. Stud. 72,1982,105 cap. 77]": "[Journ. Rom. Stud. 72,1982,105 cap. 77]", 
   "[Itala]": "[Itala]"
  }, 
  [
   "", 
   "", 
   "", 
   "SCHOL. Vet. Lat."
  ]
 ], 
 "PS. SORAN.": [
  "Pseudo-Soranus (scripta perperam Sorano tributa)", 
  {
   "puls.": "de pulsibus (\u03c0\u03b5\u03c1\u1f76 \u03c3\u03c6\u03c5\u03b3\u03bc\u1f78\u03bd) libellus", 
   "praef.": "praefatio", 
   "quaest. med.": "quaestiones medicinales", 
   "epit.": "epitome SORANI in cod. Laurent", 
   "dol. matric.": "capitulum de dolore matricis", 
   "[isag.]": "in artem medendi isagoge"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ADDIT.": [
  "", 
  {
   "Prosp. chron. I p. 497": "additamenta varia ad PROSP. chron., vol. I p. 497 Mommsen", 
   "Prosp. Havn. chron. I p. 333,523 vel p. 339,24": "additamenta Havniensia ad PROSP. chron. (immo excerptorum cod. Havniensi servatorum pars ea, quam ad chronica Italica q. d. revocavit Mommsen), vol. I p. 333 ad ann. 523 vel p. 339 \u00a724"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. TERT.": [
  "Pseudo-Tertullianus", 
  {
   "execr.": "de execrandis gentium diis fragmentum", 
   "haer.": "adversus omnes haereses"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CHROMAT.": [
  "epistulae Chromatio et Heliodoro suppositae", 
  {
   "[Ps. Hier. epist.]": "inter epistulas Hieronymo suppositas epist."
  }, 
  [
   "600", 
   "625", 
   "", 
   ""
  ]
 ], 
 "VITR.": [
  "Vitruvius", 
  {
   "de architectura": "de architectura"
  }, 
  [
   "-80", 
   "-15", 
   "", 
   ""
  ]
 ], 
 "AVDAX": [
  "Audax", 
  {
   "gramm.": "de Scauri et Palladii libris excerpta", 
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "MACEDON.": [
  "Macedonius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "400", 
   "499", 
   "vicarius Africae", 
   ""
  ]
 ], 
 "ARGVM.": [
  "", 
  {
   "Plaut. Amph.": "argumenta Plauti comoediarum, e. g. argum. Amphitruonis alterum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[TRACT.] $1": [
  "", 
  {
   "[in Matth.]": "tractatus in Matthaeum nunc Chromatio tributi"
  }, 
  [
   "", 
   "", 
   "", 
   "CHROMAT. in Matth."
  ]
 ], 
 "CANON.": [
  "", 
  {
   "canones, sc. decreta sim. conciliorum synodorumque et alia ecclesiae antiquae monumenta apost.": "canones apostolorum ecclesiastici e graeco versi", 
   "[Caes. Arel. II]": "[Caes. Arel. II]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VATIN.": [
  "P. Vatinius", 
  {
   "Cic. fam.": "epistulae ad Ciceronem"
  }, 
  [
   "-95", 
   "-42", 
   "", 
   ""
  ]
 ], 
 "PS. ATHAN.": [
  "Pseudo-Athanasius", 
  {
   "in symb.": "enarratio in symbolum apostolorum", 
   "Lucif. epist.": "epistulae ad Luciferum", 
   "[pasch.]": "[pasch.]", 
   "ad mon.": "exhortatio ad monachos vel de observationibus monachorum", 
   "epist. Pers.": "epistula ad Persarum episcopum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRAG.": [
  "", 
  {
   "inc.": "incertorum fragmenta tragica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAEF.": [
  "", 
  {
   "pasch.": "prologus computi paschalis codicis Coloniensis", 
   "in epist. Paul.": "in epistulas Paulinas", 
   "bibl.": "praefationes, argumenta sim. librorum  biblicorum; notae selectae", 
   "Marcion. in I Cor.": "Marcionensis q. d. in Pauli epistulam ad Corinthios priorem", 
   "Pelag. in I Cor.": "Pelagiana in Pauli epistulam ad Corinthios priorem", 
   "Salv. eccl.": "praefatio recensionis Bernensis in SALV. eccl.", 
   "monarch. in Marc.": "monarchianae q. d., e. g. in euang. Marci"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAENIT.": [
  "", 
  {
   "Hibern.": "paenitentialia Hiberniae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[EPIST.] $2": [
  "", 
  {
   "[Paul. et Cor.]": "[Paul. et Cor.]", 
   "[Patern.]": "[Patern.]"
  }, 
  [
   "", 
   "", 
   "", 
   "ACT. Pauli Cor."
  ]
 ], 
 "[EPIST.] $3": [
  "", 
  {
   "[Sapph.]": "epistula Sapphus"
  }, 
  [
   "", 
   "", 
   "", 
   "OV. epist. 15"
  ]
 ], 
 "[EPIST.] $1": [
  "", 
  {
   "[ed. Morin (RevB\u00e9n. 34)]": "[ed. Morin (RevB\u00e9n. 34)]", 
   "[ed. Morin (RevB\u00e9n. 40)]": "[ed. Morin (RevB\u00e9n. 40)]"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. Bachiar. 2"
  ]
 ], 
 "ALBINVS": [
  "Albinus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-200", 
   "-101", 
   "Aulus Postumius Albinus cos. 151?", 
   ""
  ]
 ], 
 "SCAVR.": [
  "M. Aemilius Scaurus", 
  {
   "gramm.": "de orthographia liber", 
   "app. gramm.": "appendix sive fragmenta Scauro adiuncta", 
   "or. frg. Char. gramm.": "orationum fragmenta, e. g. fragm. servatum apud CHAR. gramm.", 
   "hist.": "de vita sua"
  }, 
  [
   "-50", 
   "34", 
   "", 
   ""
  ]
 ], 
 "[EPIST.] $4": [
  "", 
  {
   "[synod. ... (Hil. ...)]": "[synod. ... (Hil. ...)]"
  }, 
  [
   "", 
   "", 
   "", 
   "HIL. coll. antiar."
  ]
 ], 
 "HOMER.": [
  "Homerus latinus vel Ilias latina (Baebio) Italico cuidam ascripta (sc. Iliados epitome latina)", 
  {}, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "MACR.": [
  "Macrobius Ambrosius Theodosius", 
  {
   "somn.": "commentarii in Ciceronis somnium Scipionis", 
   "exc. gramm.": "excerpta quaedam ex opere grammatico de differentiis et societatibus graeci latinique verbi", 
   "Sat.": "Saturnaliorum quae exstant"
  }, 
  [
   "385", 
   "430", 
   "vir clarissimus et inlustris", 
   ""
  ]
 ], 
 "PROP.": [
  "Sex. Propertius", 
  {
   "elegiae": "elegiae"
  }, 
  [
   "-48", 
   "-15", 
   "", 
   ""
  ]
 ], 
 "MAX. TAVR.": [
  "Maximus (sc. maior) Taurinensis", 
  {
   "[hom. app.]": "homiliae tres appendicis", 
   "[serm. app.]": "[serm. app.]", 
   "[serm. 17]": "[serm. 17]", 
   "serm. Rev. B\u00e9n\u00e9d. 97,1987 p. 40": "sermonis genuini (?) fragm. nunc initio donatum, p. 40 Rev. B\u00e9n\u00e9d.", 
   "[cap. euang.]": "[cap. euang.]", 
   "[c. pag.]": "[c. pag.]", 
   "[serm. 113]": "[serm. 113]", 
   "[c. Iud.]": "[c. Iud.]", 
   "sermones (a Mutzenbecher collecti)": "sermones (a Mutzenbecher collecti)", 
   "[bapt.]": "[bapt.]", 
   "[hom.]": "[hom.]"
  }, 
  [
   "350", 
   "420", 
   "episcopus", 
   ""
  ]
 ], 
 "POMPIL.": [
  "Pompilius", 
  {
   "trag.": "tragoediae", 
   "[epigr.]": "[epigr.]"
  }, 
  [
   "0", 
   "99", 
   "grammaticus?", 
   "PAPIN. epigr. Varro ling. 7,28 et VARRO Men. 356"
  ]
 ], 
 "[IMP. AVG.]": [
  "", 
  {
   "[Mart.]": "imperatorum Romanorum reliquiae, e. g. Augustus, carmen servatum apud MART."
  }, 
  [
   "-63", 
   "14", 
   "", 
   "AVGVSTVS Mart."
  ]
 ], 
 "[CONSENS.]": [
  "", 
  {
   "[mon.]": "regula consensoria monachorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FORMVLA": [
  "", 
  {
   "Baet. (CIL II 5406)": "formula Baetica ad rem fiducialem pertinens"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[EVSEB.]": [
  "Eusebius Pamphili", 
  {
   "[epist. Athan.]": "epistulae duae (sc. ad Alexandrum et ad Euphrationem) e graeco versae (fragmenta), vol. III Opitz"
  }, 
  [
   "260", 
   "340", 
   "episcopus Caesariensis", 
   ""
  ]
 ], 
 "PS. ORSIES.": [
  "Pseudo-(H)orsiesius", 
  {
   "cogit.": "de sex cogitationibus sanctorum libellus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXC.": [
  "", 
  {
   "Bob. gramm. I": "excerpta Bobiensia q. d. (non 'ex Charisii arte grammatica') vel anonymus Bobiensis, vol. I", 
   "barb.": "excerpta barbari vel ex barbaro, sc. eae barbari Scaligeri q. d. partes, quae non sub nota CHRON. Alex. afferuntur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVSEB. EMES.": [
  "Eusebius <Emesenus>", 
  {
   "serm.": "sermones", 
   "[mart.]": "sermo de martyribus"
  }, 
  [
   "295", 
   "359", 
   "episcopus", 
   "serm. 6,32"
  ]
 ], 
 "TIMAS.": [
  "Timasius et Iacobus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "FRG.": [
  "", 
  {
   "apoc.": "fragmentum fort. ex apocalypsi quadam e graeco versa sumptum (afferuntur signa Antichristi)", 
   "Ps. Apul. herb.": "fragmentum (antidotum) traditum una cum PS. APVL. herb."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONFESS.": [
  "", 
  {
   "confessorum epistula ad Cyprianum": "confessorum epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAGELL.": [
  "Vagellius", 
  {
   "carm. frg. Sen. nat.": "carminum fragm. servatum apud SEN. nat."
  }, 
  [
   "0", 
   "100", 
   "", 
   ""
  ]
 ], 
 "MART. CAP.": [
  "Martianus Minneius Felix Capella Carthaginiensis", 
  {
   "de nuptiis Philologiae et Mercurii": "de nuptiis Philologiae et Mercurii"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "MARCIAN.": [
  "Aelius Marcianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "150", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[EVANG.]": [
  "", 
  {
   "[de nativ. Mar.]": "euangelium apocryphum de nativitate Mariae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[HIL.]": [
  "", 
  {
   "[Leo M. epist.]": "[Leo M. epist.]"
  }, 
  [
   "", 
   "", 
   "", 
   "HILARVS ad Pulch."
  ]
 ], 
 "CLEDON.": [
  "Cledonius", 
  {
   "gramm.": "ars grammatica (in Donati artes exstantes)"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "VAL.": [
  "C. Aburnius Valens", 
  {
   "dig.": "fragmenta in digesta servata", 
   "com.": "comoediae (an mimi?) fragmentum unicum"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "LVP.": [
  "Lupus", 
  {
   "epist.": "epistula ad Thalasium episcopum Andecavensem"
  }, 
  [
   "383", 
   "487", 
   "episcopus Trecensis et Euphronius episcopus Augustodunensis", 
   ""
  ]
 ], 
 "[ITALA]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "VET. LAT."
  ]
 ], 
 "PAVL. MED.": [
  "Paulinus Mediolanensis", 
  {
   "vita Ambr.": "vita Ambrosii episcopi Mediolanensis", 
   "adv. Cael.": "libellus adversum Caelestium Zosimo papae datus", 
   "[bened. 11,2]": "de benedictionibus patriarcharum libellus"
  }, 
  [
   "350", 
   "450", 
   "diaconus", 
   ""
  ]
 ], 
 "SERM.": [
  "", 
  {
   "Arian. frg.": "Arianorum sermonum fragmenta Bobiensia", 
   "Anal. Bolland. 96": "editus in Anal. Bolland. vol. 96", 
   "Bibl. Cas. III 118": "editi in florilegio Bibliothecae Casinensis", 
   "[Caspari Anecd.]": "ed. Caspari", 
   "de conf. diab.": "de confusione diaboli et inferni", 
   "Caspari p. 220,12": "ed. Caspari", 
   "sermo, sermones (sc. incertae attributionis)": "sermo, sermones (sc. incertae attributionis)", 
   "Arian.": "Arianus quidam", 
   "Migne suppl.": "sermones duo Fausti Reiensis qui feruntur", 
   "[Journ. Theol. Stud. 17,1916 p. 232,27]": "sermones Ariani, quos Spagnolo et Turner in Journ. Theol. Stud. ediderunt", 
   "[de vita Genes. 7]": "de vita S. Genesii", 
   "Corp. Vind. 21": "editi in Corporis Vindobonensis vol. 21", 
   "Mediol. frg.": "fragmenta Mediolanensia (olim perperam Arrianorum sermonum series altera)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MANIL.": [
  "L. (?) Manilius", 
  {
   "carm. frg.": "carminum fragmenta", 
   "astronomica": "astronomica"
  }, 
  [
   "-200", 
   "-100", 
   "", 
   ""
  ]
 ], 
 "LVCID.": [
  "Lucidus", 
  {
   "Faust. Rei. epist.": "epistula ad Faustum Reiensem et alios"
  }, 
  [
   "400", 
   "499", 
   "presbyter", 
   ""
  ]
 ], 
 "LVCIAN.": [
  "Lucianus", 
  {
   "Cypr. epist.": "epistula ad Celerinum"
  }, 
  [
   "350", 
   "395", 
   "", 
   ""
  ]
 ], 
 "FORMVL.": [
  "", 
  {
   "Andecav.": "formulae Andecavenses, sc. exempla instrumentorum variorum (e. g. venditionis) Andecavis collecta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LVCC.": [
  "L. Lucceius", 
  {
   "Cic. fam.": "epistula ad Ciceronem"
  }, 
  [
   "-100", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "[SISEBVT.]": [
  "Sisebutus", 
  {
   "carmen de eclipsibus solis et lunae": "carmen de eclipsibus solis et lunae"
  }, 
  [
   "550", 
   "621", 
   "rex Gothorum", 
   ""
  ]
 ], 
 "ANIAN.": [
  "An(n)ianus Celedensis", 
  {
   "Chrysost. laud. Paul.": "versio homiliarum 7 Iohannis Chrysostomi super Pauli apostoli laudibus", 
   "Chrysost. hom.": "versio homiliarum 25 priorum Iohannis Chrysostomi in Matthaeum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "IOVIN.": [
  "Iovinianus", 
  {
   "Hier. adv. Iovin.": "verba ab Hieronymo allata"
  }, 
  [
   "330", 
   "399", 
   "haereticus", 
   ""
  ]
 ], 
 "CLOD.": [
  "Ser. Clodius (vel Claudius)", 
  {
   "fragmenta grammatica a scriptoribus servata, e. g. fragm. quod affert VARRO ling.": "fragmenta grammatica a scriptoribus servata, e. g. fragm. quod affert VARRO ling."
  }, 
  [
   "-120", 
   "-60", 
   "", 
   ""
  ]
 ], 
 "CAELEST.": [
  "Caelestius Pelagianus", 
  {
   "Aug. perf. iust.": "operum reliquiae ab Augustino servatae"
  }, 
  [
   "350", 
   "431", 
   "", 
   ""
  ]
 ], 
 "MALL. THEOD.": [
  "Flavius Mallius Theodorus", 
  {
   "gramm.": "de metris"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[VICTORIN.]": [
  "", 
  {
   "[leg. dom.]": "versus Victorini cuiusdam de lege domini", 
   "[Macc.]": "[Macc.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PS. HIL. Macc. rec. B"
  ]
 ], 
 "EVFRAS.": [
  "Eufrasius", 
  {
   "epistula ad Ruricium": "epistula ad Ruricium"
  }, 
  [
   "450", 
   "515", 
   "episcopus Arvernus", 
   ""
  ]
 ], 
 "[REG. FRANC.]": [
  "", 
  {
   "[reg. Franc.]": "generatio regum (Francorum; vulgo 'Fr\u00e4nkische V\u00f6lkertafel')"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RVT. RVF.": [
  "P. Rutilius Rufus", 
  {
   "or. frg. Diom. gramm.": "orationum fragmenta, e. g. fragm. servatum apud DIOM. gramm.", 
   "hist.": "de vita sua"
  }, 
  [
   "-158", 
   "-78", 
   "", 
   ""
  ]
 ], 
 "[PS. MACAR.]": [
  "Pseudo-Macarius Aegyptius", 
  {
   "[reg.]": "[reg.]", 
   "[epist.]": "epistula ad monachos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VARRO AT.": [
  "P. Terentius Varro Atacinus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-82", 
   "-35", 
   "", 
   ""
  ]
 ], 
 "CALL.": [
  "Callistratus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "50", 
   "150", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "LAVS": [
  "", 
  {
   "Pis.": "laus Pisonis (sc. C. Calpurnii Pisonis)"
  }, 
  [
   "", 
   "", 
   "incertus poeta", 
   ""
  ]
 ], 
 "SEPT. SER.": [
  "Septimius Serenus", 
  {
   "carm. frg.": "opuscula (ruralia)"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "FLORENT.": [
  "Florentius", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata", 
   "Lucif. epist.": "epistula ad Luciferum"
  }, 
  [
   "350", 
   "450", 
   "magister officiorum", 
   ""
  ]
 ], 
 "[PS. MATTH.]": [
  "Pseudo-Mattheus", 
  {
   "[euang.]": "euangelium apocryphum, sc. liber de ortu beatae Mariae et infantia salvatoris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRESB.": [
  "presbyteri Romani", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GRACCHAN.": [
  "M. Iunius Gracchanus", 
  {
   "Plin. nat.": "de potestatibus, fragm. servatum apud PLIN. nat."
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "HYMN.": [
  "", 
  {
   "Walpole": "hymni a Walpole collecti", 
   "[Ambros. I]": "hymnorum olim Ambrosio ascriptorum series prior", 
   "Ambros. II": "hymnorum olim Ambrosio ascriptorum series altera"
  }, 
  [
   "", 
   "", 
   "", 
   "HYMN. Walpole"
  ]
 ], 
 "MARIAN.": [
  "Marianus", 
  {
   "carm. frg.": "carminis, sc. Lupercalium (?), fragmentum"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "[ANON.]": [
  "", 
  {
   "[de grad.]": "[de grad.]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIRT.": [
  "A. Hirtius", 
  {
   "Cic. Att.": "epistula ad Ciceronem", 
   "Gall.": "liber 8 Caesaris commentariorum belli Gallici libris septem ab Hirtio additus"
  }, 
  [
   "-90", 
   "-43", 
   "Caesaris familiaris", 
   ""
  ]
 ], 
 "MAR. VICTOR": [
  "Claudius Marius Victor(ius)", 
  {
   "praef.": "praefatio (precatio)", 
   "aleth.": "alethia"
  }, 
  [
   "400", 
   "499", 
   "rhetor Massiliensis", 
   ""
  ]
 ], 
 "VARRO": [
  "M. Terentius Varro Reatinus", 
  {
   "carm. frg. Gell.": "carminum fragmenta, e. g. fragm. servatum apud GELL.", 
   "Men.": "saturarum Menippearum fragmenta", 
   "rust.": "res rusticae", 
   "frg. Non.": "operum pedestrium deperditorum fragmenta, e. g. fragm. servatum apud NON.", 
   "ling.": "de lingua latina"
  }, 
  [
   "-116", 
   "-27", 
   "", 
   ""
  ]
 ], 
 "ANNIVS": [
  "T. Annius Luscus", 
  {
   "orationis in Ti. Gracchum fragm. servatum apud FEST.": "orationis in Ti. Gracchum fragm. servatum apud FEST."
  }, 
  [
   "-200", 
   "-101", 
   "cos. 153?", 
   ""
  ]
 ], 
 "ACT.": [
  "acta \u00a0christiana", 
  {
   "Carp.": "acta martyrum Carpi, Pamfili (Papyli), Agathonicae (sub Marco Aurelio aut Decio; BHL 1622m), quae sequuntur exemplar quoddam graecum", 
   "Arv.": "fratrum Arvalium", 
   "Aug. (CIL VI 32323) 168": "quintorum (imp. Augusti), lin. 168", 
   "lud. saec.": "ludorum saecularium", 
   "Archel.": "Hegemonii cuiusdam (saec. IV1) acta Archelai (sc. disputatio Archelai episcopi adversus Manen haeresiarcham) e graeco versa", 
   "Phileae": "acta martyris Phileae Thmuitarum episcopi (fere 306; BHL 6799) sequentia exemplar graecum (cuius  fragmenta praebet Pap. Chester Beatty)", 
   "a. 105 (CIL VI 2075) II 7": "ad ann. 105, col. II lin. 7", 
   "Sept. Sev. 9 (CIL VI 32334) 12 vel 5a,92 Pighi": "septimorum (imp. Septimii Severi), fragm. 9 Mommsen lin. 12 vel n. 5a lin. 92 Pighi", 
   "a. 27 (CIL VI 2024) f 8": "ad ann. 27, fragm. f lin. 8", 
   "Petr.": "actorum Petri apostoli quae e graeco versa exstant (actus Petri cum Simone vel actus Vercellenses; BHL 6656)", 
   "Dom. (CIL VI 2071) I 5": "aetatis imp. Domitiani, (fragm. D) col. I lin. 5", 
   "Achat.": "acta Achatii (immo Acacii, qui vixit sub Decio; BHL 25), quae sequuntur exemplar quoddam graecum", 
   "[Claud.] inc. (CIL VI 32325) c 6": "aetatis incertae (quae ad ludos Claudii vel Domitiani perti\u00adnent), fragm. c lin. 6", 
   "Iul.": "acta martyris Iulii veterani (sub Diocletiano; BHL 4555)", 
   "Pauli": "actorum Pauli apostoli graecorum (fragmenta tan\u00adtum sunt servata) quae exstant latine"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIV.": [
  "T. Livius Patavinus", 
  {
   "epit. Oxyrh.": "operis Liviani epitoma, cuius fragmenta servata sunt fere papyro Oxyrhynch. 668", 
   "perioch.": "operis Liviani integri periochae, quae codicibus servantur", 
   "operis maximi historici ('ab urbe condita') quae exstant": "operis maximi historici ('ab urbe condita') quae exstant"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOG.": [
  "Hermogenianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "250", 
   "350", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "VINC. VICT.": [
  "Vincentius Victor", 
  {
   "Aug. anim.": "fragmenta servata apud AVG. anim."
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "IVVENC.": [
  "C. Vettius Aquilinus Iuvencus", 
  {
   "euangelia": "euangelia"
  }, 
  [
   "250", 
   "350", 
   "presbyter Hispanus", 
   ""
  ]
 ], 
 "CHRONOGR.": [
  "", 
  {
   "a. 354 chron. I": "chronographus anni 354 q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. NYSS.": [
  "Gregorius Nyssenus", 
  {
   "ad Phil.": "epistula ad Philippum monachum de Arianorum oppositionibus e graeco versa"
  }, 
  [
   "335", 
   "394", 
   "", 
   ""
  ]
 ], 
 "PS. RVFIN.": [
  "Pseudo-Rufinus (scripta Rufino vix recte tributa)", 
  {
   "[praef. in\u00a0proph.]": "[praef. in\u00a0proph.]", 
   "Ios. bell. Iud.": "Flavii Iosephi libri de bello Iudaico latine versi", 
   "[in\u00a0Am.]": "commentarii in prophetas minores iam Iuliano episcopo Aeclanensi ascribuntur", 
   "Clement.": "incerti interpretis additamentum ad RVFIN. Clement.", 
   "[in\u00a0Ioel]": "[in\u00a0Ioel]", 
   "[in psalm.]": "commentarius in psalmos", 
   "fid.": "liber de fide", 
   "[in\u00a0Os.]": "[in\u00a0Os.]"
  }, 
  [
   "350", 
   "450", 
   "", 
   "IVLIAN. in Am."
  ]
 ], 
 "[FRG.] $1": [
  "", 
  {
   "[Sinait.]": "[Sinait.]"
  }, 
  [
   "", 
   "", 
   "", 
   "SCHOL. Sinait."
  ]
 ], 
 "GREG. TVR.": [
  "(Georgius Florentius) Gregorius Turonensis", 
  {
   "Franc.": "historiae, sc. historia Francorum", 
   "glor. conf.": "in gloria confessorum (e numero librorum 7 miraculorum)", 
   "[Thom.]": "[Thom.]", 
   "vit. patr.": "de vita patrum", 
   "in psalm.": "tractatus psalterii (commentarii in psalmos) fragmenta", 
   "glor. mart.": "in gloria martyrum (e numero librorum 7 miraculorum)", 
   "Mart.": "de virtutibus Martini (sc. episcopi Turonensis; opus e numero librorum 7 miraculorum)", 
   "Iul.": "de virtutibus Iuliani (e numero librorum 7 miraculorum)", 
   "Andr.": "de miraculis Andreae apostoli", 
   "stell.": "de cursu stellarum ratio, qualiter ad officium (sc. monasticum) implendum debeat observari", 
   "dorm.": "passio martyrum VII dormientium apud Ephesum"
  }, 
  [
   "538", 
   "594", 
   "episcopus", 
   ""
  ]
 ], 
 "PACTIO": [
  "", 
  {
   "reg. Greg. Tur. Franc.": "pactio Gunthchramni et Childeberthi regum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAL. ANT.": [
  "Valerius Antias", 
  {
   "hist.": "annales"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "CONSENT.": [
  "Consentius", 
  {
   "epistulae ad Augustinum": "epistulae ad Augustinum", 
   "gramm.": "artis grammaticae quae exstant"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "AVR.": [
  "imp. M. Aurelius", 
  {
   "epist.": "epistula ad omnes episcopos per Byzacenam et Arzugitanam provinciam constitutos", 
   "Fronto": "epistulae ad Frontonem magistrum una cum eiusdem operibus servatae"
  }, 
  [
   "121", 
   "180", 
   "", 
   ""
  ]
 ], 
 "PS. VEN. FORT.": [
  "Pseudo-Venantius Fortunatus", 
  {
   "[vita Remed.]": "vita Remedii", 
   "carm. app.": "carminum spuriorum appendix", 
   "vita Med.": "vita Medardi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CET. FAV.": [
  "M. Cetius Faventinus", 
  {
   "artis architectonicae privatis usibus adbreviatus liber (sc. epitome Vitruvii)": "artis architectonicae privatis usibus adbreviatus liber (sc. epitome Vitruvii)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "FEL.": [
  "Felix Manichaeus", 
  {
   "Aug. c. Fel.": "verba ab Augustino allata"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[GALL. PLAC.]": [
  "Aelia Galla Placidia Augusta", 
  {
   "[Leo M. epist.]": "epistulae duae, sc. inter Leonis Magni epistulas"
  }, 
  [
   "390", 
   "450", 
   "", 
   "CONC. S II 3,1"
  ]
 ], 
 "MET. NVM.": [
  "Q. Caecilius Metellus Numidicus", 
  {
   "or. frg. Gell.": "orationum fragmenta a scriptoribus servata"
  }, 
  [
   "-150", 
   "-91", 
   "", 
   "e. g. fragm. apud GELL."
  ]
 ], 
 "[PS. PHOEBAD.]": [
  "", 
  {
   "[fid.]": "[fid.]"
  }, 
  [
   "", 
   "", 
   "", 
   "GREG. ILIB. fid."
  ]
 ], 
 "VRAN.": [
  "Vranius", 
  {
   "epist.": "epistula de obitu Paulini Nolani"
  }, 
  [
   "350", 
   "450", 
   "presbyter", 
   ""
  ]
 ], 
 "HILARVS": [
  "Hilarus", 
  {
   "ad Pulch.": "epistula, quam scripsit Hilarus tunc diaconus ad Pulcheriam Augustam (exstat versio graeca)", 
   "Victor. pasch.": "epistula, quam scripsit Hilarus tunc archidiaconus ad Victorium Aquitanum"
  }, 
  [
   "400", 
   "468", 
   "papa", 
   ""
  ]
 ], 
 "FLAV.": [
  "Flavius", 
  {
   "hymn.": "hymnus"
  }, 
  [
   "500", 
   "591", 
   "episcopus Cabilonensis?", 
   ""
  ]
 ], 
 "VOLVMN.": [
  "Volumnius", 
  {
   "carm. frg. gramm.": "carminum fragm. servatum in DVB. NOM. gramm."
  }, 
  [
   "-100", 
   "-1", 
   "(fortasse P. Volumnius Eutrapelus Ciceronis familiaris)", 
   ""
  ]
 ], 
 "PS. SOL.": [
  "Pseudo-Solinus (fragmenta Solino adiuncta)", 
  {
   "add.": "additamenta codicum aliquot ad Solinum", 
   "Pont.": "fragm. carminis 'Ponticon' inscripti"
  }, 
  [
   "600", 
   "699", 
   "", 
   ""
  ]
 ], 
 "PS. HOR.": [
  "Pseudo-Horaz", 
  {
   "sat.": "versus spurii HOR. sat."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSSID.": [
  "Possidius", 
  {
   "indic.": "indiculum operum Augustini", 
   "vita Aug.": "vita Augustini"
  }, 
  [
   "370", 
   "437", 
   "episcopus Calamensis", 
   ""
  ]
 ], 
 "NOM.": [
  "", 
  {
   "Gall. chron. I": "de nominibus (urbibus?) Gallicis", 
   "mart.": "nomina martyrum Lugdunensium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEO M.": [
  "Leo Magnus", 
  {
   "epist. epistulae": "diverse", 
   "serm. app.": "sermonum (sc. spuriorum) appendix", 
   "[epist. app. 8]": "appendix ad Leonis epistulas a Migne editas, pars octava (de conc. Constantinop. a. 450)", 
   "serm.": "sermones"
  }, 
  [
   "400", 
   "461", 
   "papa", 
   ""
  ]
 ], 
 "CVRIO AVUS": [
  "C. Scribonius Curio avus", 
  {
   "orationis pro Fulvio fragm. servatum apud CIC. inv.": "orationis pro Fulvio fragm. servatum apud CIC. inv."
  }, 
  [
   "-90", 
   "-49", 
   "", 
   ""
  ]
 ], 
 "GAVDENT.": [
  "Gaudentius", 
  {
   "serm. praef.": "sermonum ab ipso Gaudentio collectorum praefatio ad Benivolum", 
   "serm.": "sermones et tractatus"
  }, 
  [
   "350", 
   "406", 
   "episcopus Brixiensis", 
   ""
  ]
 ], 
 "[IVLIAN.]": [
  "Iulianus", 
  {
   "[Leo M. epist. app. 6 p. 1244B]": "epistula ad Leonem imperatorem e graeco versa, edita in appendice ad Leonis Magni epistulas"
  }, 
  [
   "400", 
   "499", 
   "episcopus Coensis", 
   "CONC. S II 5 p. 66,39"
  ]
 ], 
 "VICT. VIT.": [
  "Victor Vitensis", 
  {
   "historia persecutionis Africanae provinciae": "historia persecutionis Africanae provinciae", 
   "[not.]": "[not.]"
  }, 
  [
   "400", 
   "490", 
   "episcopus", 
   ""
  ]
 ], 
 "PHILOCAL.": [
  "Furius Dionysius Philocalus (Fil-)", 
  {
   "fast. Dec. 31": "fasti ad diem 31 mensis Decembris (codicibus traditi)"
  }, 
  [
   "300", 
   "399", 
   "", 
   "(Inscr. Ital. XIII 2 p. 261)"
  ]
 ], 
 "PSALM.": [
  "", 
  {
   "resp. ed. Roca\u2014Puig": "psalmus responsorius sive hymnus a Roca\u2014Puig editus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CEREAL.": [
  "Cerealis", 
  {
   "contra Maximinum Arianum": "contra Maximinum Arianum"
  }, 
  [
   "400", 
   "480", 
   "episcopus Castelloripensis", 
   ""
  ]
 ], 
 "VARIVS": [
  "L. Varius Rufus", 
  {
   "carm. frg.": "carminum fragm.", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-70", 
   "-15", 
   "Vergilii familiaris", 
   ""
  ]
 ], 
 "BIBAC.": [
  "M. Furius Bibaculus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-103", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "VERVS": [
  "imp. Verus", 
  {
   "Fronto": "epistulae ad Frontonem"
  }, 
  [
   "150", 
   "219", 
   "", 
   ""
  ]
 ], 
 "SCROFA": [
  "Cn. Tremelius Scrofa", 
  {
   "Colum.": "de agri cultura"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   "cuiusdam de agri cultura operis fragm. servatum apud COLVM."
  ]
 ], 
 "[EVTYCH.]": [
  "", 
  {
   "epistulae, quam Eutyches haereticus ad Leonem Magnum miserat,versio altera": "epistulae, quam Eutyches haereticus ad Leonem Magnum miserat,versio altera"
  }, 
  [
   "", 
   "", 
   "", 
   "CONC. S II 4 p. 150,33"
  ]
 ], 
 "MAVRIC.": [
  "Iunius Mauricianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CASSIAN.": [
  "Iohannes Cassianus", 
  {
   "c. Nest.": "de incarnatione domini contra Nestorium", 
   "inst.": "de institutis coenobiorum et de octo principalium vitiorum remediis", 
   "conl.": "conlationes (sc. dialogi cum monachis Aegyptiis)"
  }, 
  [
   "360", 
   "435", 
   "presbyter Massiliensis", 
   ""
  ]
 ], 
 "PETRON. BONON.": [
  "Petronius", 
  {
   "serm.": "sermones duo"
  }, 
  [
   "350", 
   "450", 
   "episcopus Bononiensis (an Veronensis?)", 
   ""
  ]
 ], 
 "LVTAT.": [
  "Q. Lutatius Catulus pater", 
  {
   "epigr.": "epigrammata"
  }, 
  [
   "-150", 
   "-87", 
   "", 
   ""
  ]
 ], 
 "VIVENTIOL.": [
  "Viventiolus", 
  {
   "epist.": "epistula ad episcopos provinciae Lugdunensis", 
   "Alc. Avit. epist.": "epistula ad Alcimum Avitum"
  }, 
  [
   "117", 
   "284", 
   "episcopus Lugdunensis", 
   ""
  ]
 ], 
 "AVGVRIN.": [
  "Sentius Augurinus", 
  {
   "carm.": "carmen"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "PERVIG.": [
  "", 
  {
   "Ven.": "pervigilium Veneris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVOD.": [
  "Euodius", 
  {
   "fid.": "de fide contra Manichaeos", 
   "Aug. epist.": "epistulae ad Augustinum datae", 
   "epist. ad Val.": "epistula ad Valentinum abbatem Hadrumetinum"
  }, 
  [
   "350", 
   "424", 
   "episcopus Vzalitanus Africae proconsularis", 
   ""
  ]
 ], 
 "SERG.": [
  "Sergius (?)", 
  {
   "gramm.": "de littera, de syllaba, de pedibus, de accentibus, de distinctione"
  }, 
  [
   "400", 
   "499", 
   "grammaticus", 
   ""
  ]
 ], 
 "FORT.": [
  "Fortunatus Manichaeus", 
  {
   "Aug. c. Fort.": "quae in disputatione contra Augustinum in medium protulit"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "DIMENS.": [
  "", 
  {
   "provinc.": "demensuratio (olim dimensuratio) provinciarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PATR.": [
  "", 
  {
   "Nic.": "patrum concilii Nicaeni nomina"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANVLIN.": [
  "Anul(l)inus", 
  {
   "epistula ad Constantinum Magnum": "epistula ad Constantinum Magnum"
  }, 
  [
   "150", 
   "250", 
   "procos. Africae", 
   ""
  ]
 ], 
 "CONSTANT.": [
  "imp. Constantinus Magnus", 
  {
   "epist. ad Opt. Porf.": "epistula ad Optatianum Porfyrium (spuria sec. Polara)"
  }, 
  [
   "270", 
   "337", 
   "", 
   ""
  ]
 ], 
 "PERS.": [
  "A. Persius Flaccus", 
  {
   "saturae": "saturae"
  }, 
  [
   "34", 
   "62", 
   "", 
   ""
  ]
 ], 
 "PAP.": [
  "", 
  {
   "Rainer.": "in Corpore Papyrorum Raineri archiducis Austriae (C. P. R.) editae", 
   "Marini": "ed. Marini", 
   "Tj\u00e4der": "ed. Tj\u00e4der (cf. PAP. Marini)", 
   "Wessely": "ed. Wessely", 
   "Rylands": "Mancunii in bibliotheca, cui nomen est John Rylands Library, asservatae (P. Ryl.)", 
   "Sammelb.": "editae apud Preisigke/Bilabel/alios, Sammelbuch", 
   "Oxyrh.": "Oxyrhynchi repertae (P. Oxy.)", 
   "Berol.": "Berolinenses (B. G. U.)", 
   "Soc. Ital.": "ed. Societ\u00e0 italiana per la ricerca dei Papiri greci e latini (P. S. I.)", 
   "Michig.": "in Vniversitatis Michiganae collectione asservatae (P. Mich.)", 
   "Genav.": "Genavienses (P. Gen. lat.)", 
   "papyri\u00a0 (notae selectae)": "papyri\u00a0 (notae selectae)", 
   "Journ. Rom. Stud. 67,1977,52 l. 50": "in ephemeridibus editae, e. g. in Journ. Rom. Stud. 67 (1977) p. 52, lin. 50", 
   "Amherst": "in collectione Amherst de Hackney nobilis viri asservatae (P. Amh.)", 
   "mil. Fink": "militares ed. Fink (R. M. R.)", 
   "Corp.": "in Corpore Papyrorum Latinarum (C. P. L.) editae praeter eas, quae notis suis afferuntur, ut e. g. EPIST. Claud.", 
   "Britann.": "Londinienses in Museo Britannico asservatae (P. Lond.)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MET. MAC.": [
  "Q. Caecilius Metellus Macedonicus", 
  {
   "or. frg. Gell.": "orationis de prole augenda"
  }, 
  [
   "-190", 
   "-115", 
   "", 
   "fragmenta apud GELL. servata"
  ]
 ], 
 "LAVREA": [
  "Tullius Laurea", 
  {
   "epigr.": "epigramma in fontes salubres Ciceronianos"
  }, 
  [
   "-100", 
   "-1", 
   "Ciceronis libertus", 
   ""
  ]
 ], 
 "IOH. TOMIT.": [
  "Iohannes Tomitanus", 
  {
   "haer.": "de duabus haeresibus Nestorianorum et Eutychianistarum"
  }, 
  [
   "450", 
   "550", 
   "episcopus Scytha", 
   ""
  ]
 ], 
 "VIR.": [
  "incerti auctoris", 
  {
   "ill.": "liber de viris illustribus urbis Romae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVSEB. CAES.": [
  "Eusebius Pamphili Caesariensis", 
  {
   "ad Carp.": "epistula ad Carpianum bis e graeco versa"
  }, 
  [
   "260", 
   "340", 
   "episcopus", 
   ""
  ]
 ], 
 "HADR.": [
  "imp. Hadrianus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "76", 
   "138", 
   "", 
   ""
  ]
 ], 
 "DYNAM.": [
  "Dynamius", 
  {
   "vita Max.": "vita sancti Maximi episcopi Reiensis"
  }, 
  [
   "450", 
   "550", 
   "patricius", 
   ""
  ]
 ], 
 "PS. CAES. AREL.": [
  "", 
  {
   "vid.": "de viduitate servanda"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "HIPPOCR.": [
  "Hippocrates Cos corpusque Hippocratici", 
  {
   "[cib.]": "[cib.]", 
   "mul.": "de morbis mulierum", 
   "progn.": "prognosticum", 
   "aer.": "de aere aquis locis", 
   "[diaet.]": "[diaet.]", 
   "num. sept.": "de numeris septenariis", 
   "aphor.": "aphorismi", 
   "vict.": "de victu"
  }, 
  [
   "-460", 
   "-370", 
   "medicus", 
   "scripta e graeco versa"
  ]
 ], 
 "[PAPYR.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "PAP."
  ]
 ], 
 "PS. AVR. VICT.": [
  "Pseudo-Aurelius Victor", 
  {
   "orig.": "origo gentis Romanae"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "CAES. AREL.": [
  "Caesarius Arelatensis", 
  {
   "reg. mon.": "regula monachorum", 
   "testam.": "testamentum", 
   "epist. de hum.": "epistula de humilitate ad monachos", 
   "reg. virg.": "regula virginum", 
   "[suggest.]": "suggestio", 
   "[libell.]": "libellus Symmacho papae oblatus (sc. epistula altera petitoria) nunc non nisi altera nota notatur", 
   "grat.": "sententia de gratia (contra eos, qui dicunt quare aliis det deus gratiam, aliis non det)", 
   "serm.": "sermones (quos Caesarius magna ex parte e scriptoribus vetustioribus excerpsit)", 
   "serm. Misc. Dekkers": "sermo, quem praebent Miscellanea Dekkers", 
   "in apoc.": "in Iohannis apocalypsim expositio", 
   "epist. ad virg.": "epistulae ad virgines (sc. sanctimoniales)", 
   "brev.": "breviarium adversus haereticos", 
   "serm. app.": "sermonum appendix (frustula dubia)", 
   "trin.": "de mysterio sanctae trinitatis (opusculum in fine mutilum)", 
   "epist. ad Ruric.": "epistula ad Ruricium episcopum"
  }, 
  [
   "470", 
   "542", 
   "episcopus", 
   ""
  ]
 ], 
 "MAECEN.": [
  "C. Cilnius Maecenas", 
  {
   "carm. frg.": "carminum fragmenta", 
   "Sen. epist.": "fragmenta operum oratione soluta conscriptorum a scrip\u00actoribus servata, e. g. fragm. apud SEN. epist."
  }, 
  [
   "-70", 
   "-8", 
   "", 
   ""
  ]
 ], 
 "ORIGO": [
  "", 
  {
   "Const.": "origo Constantini (sc. Magni) imperatoris", 
   "Rom. chron.": "origo gentis Romanorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITAL.": [
  "Vitalis et Tonantius (vix Constantius)", 
  {
   "epist.": "epistula ad Capreolum episcopum Carthaginiensem"
  }, 
  [
   "350", 
   "450", 
   "monachi Hispani", 
   ""
  ]
 ], 
 "PROSP.": [
  "Prosper Tiro Aquitanus", 
  {
   "epigr.": "epigrammata ex sententiis Augustini", 
   "sent.": "liber sententiarum (sc. ex Augustini operibus delibatarum)", 
   "chron. I": "epitoma chronicorum, vol. I", 
   "auct. de grat.": "praeteritorum sedis apostolicae episcoporum auctoritates de gratia dei", 
   "resp. ad Gall.": "pro Augustino responsiones ad capitula obiectionum Gallorum calumniantium", 
   "epitaph.": "epitaphium Nestorianae et Pelagianae haereseon", 
   "in psalm.": "expositio in psalmos 100\u2014150", 
   "resp. ad Vinc.": "pro Augustino responsiones ad capitula obiectionum Vincentianarum", 
   "c. coll.": "de gratia dei et libero arbitrio contra collatorem", 
   "epist. 2,20": "epistula ad Rufinum quendam", 
   "carm. de ingrat.": "carmen de ingratis", 
   "epist. 1,9": "epistula ad Augustinum", 
   "resp. ad Gen.": "pro Augustino responsiones ad excerpta Genuensium", 
   "epigr. in obtrect. Aug.": "epigrammata in obtrectatorem Augustini"
  }, 
  [
   "390", 
   "455", 
   "", 
   ""
  ]
 ], 
 "APP. CLAVD.": [
  "Appius Claudius Caecus", 
  {
   "carm. frg.": "carminum (sc. sententiarum) fragmenta"
  }, 
  [
   "-340", 
   "-273", 
   "", 
   ""
  ]
 ], 
 "VIRG.": [
  "Virgilius Maro", 
  {
   "epist.": "epistulae", 
   "epit.": "epitomae"
  }, 
  [
   "600", 
   "699", 
   "grammaticus", 
   ""
  ]
 ], 
 "DIG.": [
  "", 
  {
   "tit. libr.": "tituli librorum, sc. index librorum ad digesta compilanda adhibitorum (graece conscriptus, sed librorum nomina plurima latine redduntur)", 
   "de conc. dig.": "constitutio 'Omnem' (const. de conceptione digestorum altera)", 
   "digesta seu pandectae Iustiniani Augusti, sc. ius iurisconsultorum ex eorum scriptis iussu Iustiniani collectum, mutatum, in novum ordinem redactum, ab Iustiniano confirmatum": "digesta seu pandectae Iustiniani Augusti, sc. ius iurisconsultorum ex eorum scriptis iussu Iustiniani collectum, mutatum, in novum ordinem redactum, ab Iustiniano confirmatum", 
   "de confirm. dig.": "constitutio 'Tanta' (const. de confirmatione digestorum [= COD. Iust. 1,17,2]; recensio graeca: D\u00e9dohken)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOVELL.": [
  "", 
  {
   "Theod.": "Theodosius II", 
   "Marc.": "Marcianus", 
   "Valent.": "Valentinianus III", 
   "edict.": "verba latina in sylloge q. d. Authenticum servata illius edicti", 
   "Sev.": "Severus", 
   "Max. frg.": "Maximus, fragm. suspectum", 
   "Maior.": "Maiorianus", 
   "app.": "appendix constitutionum dispersarum", 
   "Iust.": "leges novellae, sc. constitutiones, quas post COD. Iust. editum tulit imp. Iustinianus (plurimae sunt primitus graece scriptae; Iuliani epitome v. IVLIAN. epit. novell.; v. etiam EDICT. imp. Iust. de fide)", 
   "Anth.": "Anthemius"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TAVRENT.": [
  "Taurentius", 
  {
   "ad Ruric. epist.": "epistula 3 inter epistulas ad Ruricium scriptas"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "LVCIVS": [
  "Lucius episcopus et socii", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRISC.": [
  "Priscianus", 
  {
   "rhet.": "praeexercitamina (praeexercitamenta?), sc. progymn\u00e1smata Hermogenis latine versa", 
   "III\u00a0430\u2014440": "=\u00a0PRISC. rhet.", 
   "II. \u00a0III\u00a01\u2014377:\u00a0": "institutiones grammaticae (interpolationes aliquot afferuntur nota PS. PRISC., e. g. PS. PRISC. gramm. II 193)", 
   "periheg.": "\u03c0\u03b5\u03c1\u03b9\u03ae\u03b3\u03b7\u03c3\u03b9\u03c2 Dionysii latine versa", 
   "Anast.": "carmen de laude Anastasii imperatoris", 
   "III\u00a0418\u2014429:": "de metris fabularum Terentii", 
   "III\u00a0443\u2014456:": "institutio de nomine et pronomine et verbo", 
   "III\u00a0459\u2014515:": "partitiones XII versuum Aeneidos prin\u00ad", 
   "gramm.": "gramm.", 
   "[metrol. II 86,1]": "[metrol. II 86,1]", 
   "III\u00a0405:": "epistula ad Symmachum", 
   "[fig. num. gramm. III 417]": "[fig. num. gramm. III 417]", 
   "III\u00a0406\u2014417:": "de figuris numerorum (olim PRISC. fig. num. vel PRISC. metrol.)"
  }, 
  [
   "450", 
   "550", 
   "grammaticus", 
   ""
  ]
 ], 
 "EVAGR. GALL.": [
  "Euagrius Gallus", 
  {
   "alterc.": "altercatio legis inter Simonem Iudaeum et Theophilum Christianum"
  }, 
  [
   "538", 
   "600", 
   "", 
   ""
  ]
 ], 
 "L. CAES.": [
  "L. Iulius Caesar", 
  {
   "Prisc. gramm.": "de auguralibus, fragmenta servata apud PRISC., e. g. gramm."
  }, 
  [
   "-110", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "AVFVST.": [
  "Aufustius", 
  {
   "fragmenta a scriptoribus servata, e. g. fragm. apud PAVL. FEST.": "fragmenta a scriptoribus servata, e. g. fragm. apud PAVL. FEST."
  }, 
  [
   "-100", 
   "-1", 
   "grammaticus", 
   ""
  ]
 ], 
 "AVG.": [
  "Aurelius Augustinus", 
  {
   "gen. ad litt. imperf.": "de genesi ad litteram imperfectus liber", 
   "c. Iulian.": "contra Iulianum (sc. Aeclanensem episcopum Pelagianum eiusque libros ad Turbantium)", 
   "quaest. Dulc.": "de octo Dulcitii quaestionibus", 
   "in Gal.": "expositio epistulae ad Galatas", 
   "c. Priscill.": "ad Orosium contra Priscillianistas et Origenistas", 
   "c. Gaud.": "contra Gaudentium Donatistarum episcopum", 
   "un. eccl.": "epistula ad catholicos de secta Donatistarum (vulgo: de unitate ecclesiae)", 
   "serm.": "sermones genuini", 
   "c. Pelag.": "contra duas epistulas Pelagianorum (sc. Iuliani Aeclanensis episcopi et sociorum eius)", 
   "c. Iulian. op. imperf.": "opus imperfectum contra Iulianum (sc. Aeclanensem episcopum Pelagianum eiusque libros ad Florum)", 
   "catech. rud.": "de catechizandis rudibus", 
   "c. Faust.": "contra Faustum Manichaeum", 
   "in Rom.": "expositio quarundam propositionum ex epistula ad Romanos", 
   "c. Parm.": "contra epistulam Parmeniani", 
   "c. Arian.": "contra sermonem Arianorum", 
   "psalm. c. Don.": "psalmus contra partem Donati (sc. psalmus abecedarius)", 
   "urb. exc.": "de excidio urbis Romae", 
   "in Matth.": "quaestiones XVI in Matthaeum (sc. quae in codicibus sequuntur quaest. euang.)", 
   "fid. et symb.": "de fide et symbolo", 
   "util. cred.": "de utilitate credendi", 
   "bon. viduit.": "de bono viduitatis (epistula ad Iulianam viduam)", 
   "grat. Christ.": "de gratia Christi  (= contra Pelagium et Caelestium de gratia Christi et de peccato originali)", 
   "nupt. et concup.": "de nuptiis et concupiscentia ad Valerium", 
   "gen. ad litt.": "de genesi ad litteram", 
   "corrept.": "de correptione et gratia", 
   "immort.": "de immortalitate animae", 
   "nat. et grat.": "de natura et gratia", 
   "epist. Divj.": "epistulae collectionis a Divjak repertae", 
   "trin.": "de trinitate", 
   "op monach.": "de opere monachorum", 
   "perf. iust.": "de perfectione iustitiae hominis", 
   "mag.": "de magistro", 
   "cur. mort.": "de cura pro mortuis gerenda", 
   "c. Secundin.": "contra Secundinum Manichaeum eiusque epistulam", 
   "pat.": "de patientia", 
   "adv. Iud.": "adversus Iudaeos", 
   "in Rom. imperf.": "epistulae ad Romanos inchoata expositio (sc. imperfecta)", 
   "[bapt. c. Don.]": "de baptismo contra Donatistas tractatus", 
   "soliloq.": "soliloquia", 
   "pecc. mer.": "de peccatorum meritis et remissione", 
   "praed. sanct.": "de praedestinatione sanctorum", 
   "anim.": "de anima et eius origine (vel de natura et origine animae, sc. contra Vincentium Victorem)", 
   "spec.": "speculum (sc. praecepta e scripturis sacris excerpta; incipit: Quis ignorat)", 
   "cons. euang.": "de consensu euangelistarum", 
   "mor. Manich.": "de moribus Manichaeorum", 
   "contin.": "de continentia", 
   "pecc. orig.": "de peccato originali (= contra Pelagium et Caelestium de gratia Christi et de peccato originali)", 
   "c. Adim.": "contra Adimantum Manichaei discipulum", 
   "retract.": "retractationes", 
   "de mend.": "de mendacio", 
   "ord.": "de ordine", 
   "c. Maximin.": "contra Maximinum Arianorum episcopum", 
   "c. Emer.": "gesta cum Emerito Donatistarum episcopo", 
   "quaest. hept.": "quaestionum in heptateuchum", 
   "fid. et op.": "de fide et operibus", 
   "dialect.": "de dialectica", 
   "divers. quaest.": "de diversis quaestionibus", 
   "quaest. euang.": "quaestiones euangeliorum (sc. sec. Matthaeum et Lucam)", 
   "mus.": "de musica", 
   "epist. epistularum corpus ab editoribus compositum paulatimque auctum, a Maurinis in hunc ordinem redactum": "diverse", 
   "un. bapt.": "de unico baptismo contra Petilianum", 
   "c. epist. fund.": "contra epistulam Manichaei, quam vocant fundamenti", 
   "grat.": "de gratia et libero arbitrio", 
   "coll. c. Maximin.": "collatio cum Maximino Arianorum episcopo", 
   "conf.": "confessiones", 
   "mor. eccl.": "de moribus ecclesiae catholicae", 
   "spir. et litt.": "de spiritu et littera", 
   "c. mend.": "contra mendacium (sc. ad Consentium)", 
   "virg.": "de sancta virginitate", 
   "coll. c. Don.": "breviculus collationis cum Donatistis", 
   "bon. coniug.": "de bono coniugali", 
   "serm ad. Caesar.": "sermo ad Caesareensis ecclesiae plebem", 
   "de duab. anim.": "de duabus animabus (sc. contra Manichaeos)", 
   "lib. arb.": "de libero arbitrio", 
   "bapt.": "de baptismo (sc. contra Donatistas)", 
   "quaest. Simpl.": "de diversis quaestionibus ad Simplicianum", 
   "haer.": "de haeresibus ad Quodvultdeum", 
   "enchir.": "enchiridion vel ad Laurentium de fide, spe et caritate", 
   "in euang. Ioh.": "in Iohannis euangelium tractatus", 
   "gramm.": "ars sancti Augustini pro fratrum mediocritate breviata", 
   "vera relig.": "de vera religione", 
   "anth.": "anthologiae latinae carmina ea, quae non sine causa Augustino ascribuntur", 
   "adv. Don.": "post collationem adversus Donatistas (vel contra partem Donati post gesta)", 
   "loc. hept.": "locutiones in heptateuchum", 
   "rhet.": "de rhetorica", 
   "c. Cresc.": "contra Cresconium grammaticum partis Donati", 
   "c. Petil.": "contra litteras Petiliani (sc. Donatistae)", 
   "c. acad.": "contra academicos", 
   "mor.": "libri duo de moribus contra Manichaeos conscripti", 
   "octo quaest.": "de octo quaestionibus ex veteri testamento", 
   "persev.": "de dono perseverantiae", 
   "gest. Pelag.": "de gestis Pelagii", 
   "in psalm.": "in psalmos enarrationes (sc. sermones) quot in unum collectae sunt (aliae latent inter serm.)", 
   "beat. vit.": "de beata vita", 
   "div. daem.": "de divinatione daemonum", 
   "util. ieiun.": "de utilitate ieiunii", 
   "symb.": "de symbolo sermo ad catechumenos", 
   "doctr. christ.": "de doctrina christiana", 
   "adult. coniug.": "ad Pollentium de adulterinis coniugiis", 
   "nat. bon.": "de natura boni (sc. adversus Manichaeos)", 
   "quant. anim.": "de animae quantitate", 
   "gramm. V 524,36": "regulae (excerptae ex Augustini de grammatica libro deperdito?), vol. V p. 524 lin. 36 Keil", 
   "civ.": "de civitate dei", 
   "in epist. Ioh.": "in epistulam Iohannis ad Parthos tractatus", 
   "fid. invis.": "de fide rerum invisibilium", 
   "c. Fel.": "contra Felicem Manichaeum", 
   "in Iob": "adnotationes in Iob", 
   "de serm. dom.": "de sermone domini in monte", 
   "c. Fort.": "contra Fortunatum Manichaeum disputatio", 
   "gen. c. Manich.": "de genesi contra Manichaeos", 
   "c. adv. leg.": "contra adversarium legis et prophetarum", 
   "discipl.": "de disciplina christiana", 
   "agon.": "de agone christiano"
  }, 
  [
   "354", 
   "430", 
   "episcopus Hipponensis", 
   ""
  ]
 ], 
 "[BAVDON.]": [
  "Baudonivia", 
  {
   "vita S. Radegundis": "vita S. Radegundis"
  }, 
  [
   "550", 
   "650", 
   "", 
   ""
  ]
 ], 
 "DIOSC.": [
  "Pedianius Dioscurides", 
  {
   "gr.": "voces latinae, quae Dioscuridi graeco interpositae sunt", 
   "Vind.": "recensio Vindobonensis", 
   "epist.": "epistula Dioscuridis libro 1 praemissa", 
   "de materia medica (opus graece conscriptum) versio (immo retractatio) latina integra (Dioscorides Longobardus q. d.)": "de materia medica (opus graece conscriptum) versio (immo retractatio) latina integra (Dioscorides Longobardus q. d.)"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "HYG.": [
  "Hyginus minor", 
  {
   "geneal.": "genealogiae", 
   "Char. gramm.": "operum reliquiae a scriptoribus servatae, e. g. fragm. apud CHAR. gramm.", 
   "grom.": "operis gromatici de limitibus, de condicionibus agrorum, de generibus controversiarum fragmenta", 
   "astr.": "astronomica", 
   "fab.": "fabulae", 
   "lim. grom.": "de limitibus constituendis opus gromaticum"
  }, 
  [
   "50", 
   "150", 
   "gromaticus", 
   ""
  ]
 ], 
 "ANNIAN.": [
  "Annianus", 
  {
   "carm. frg.": "Faliscorum carminum fragmenta"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "SEV.": [
  "Severus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "episcopus Milevitanus", 
   ""
  ]
 ], 
 "PS. EPHR.": [
  "Pseudo-Ephraem Syrus", 
  {
   "paenit.": "de paenitentia", 
   "serm. Cas. III": "sermo in transfigurationem domini, editus in Bibliothecae Casinensis vol. 3"
  }, 
  [
   "600", 
   "699", 
   "", 
   ""
  ]
 ], 
 "EVCHER.": [
  "Eucherius", 
  {
   "form.": "formulae spiritalis intellegentiae", 
   "instr.": "instructiones", 
   "epist. ad Val.": "epistula paraenetica ad Valerianum cognatum de contemptu mundi et saecularis philosophiae", 
   "laud. her.": "de laude (h)eremi", 
   "[hom.]": "homiliae apud Migne 50 Eucherio tributae", 
   "epist. ad Salv.": "epistula ad Salvium episcopum", 
   "pass. Acaun.": "passio Acaunensium martyrum (sc. legionis Thebaeorum)"
  }, 
  [
   "400", 
   "450", 
   "episcopus Lugdunensis", 
   ""
  ]
 ], 
 "GRAEC.": [
  "Graecus", 
  {
   "ad Ruric. epist.": "epistula ad Ruricium"
  }, 
  [
   "400", 
   "499", 
   "episcopus Massiliensis", 
   ""
  ]
 ], 
 "PRISCILL.": [
  "Priscillianus", 
  {
   "can.": "canones in epistulas Paulinas (a Peregrino quodam episcopo retractati)", 
   "epist. Oros. comm.": "epistulae fragm. servatum apud OROS. comm.", 
   "tract.": "tractatus"
  }, 
  [
   "340", 
   "385", 
   "episcopus haereticus Abilensis", 
   ""
  ]
 ], 
 "CLEM.": [
  "Terentius Clemens", 
  {
   "dig.": "fragmenta in digesta servata", 
   "ad. Cor.": "epistula ad Corinthios genuina (sc. prior) e graeco versa"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "HORTENS.": [
  "Q. Hortensius Hortalus", 
  {
   "or. frg. Char. gramm.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "-114", 
   "-50", 
   "orator", 
   ""
  ]
 ], 
 "HIL.": [
  "Hilarius Pictaviensis", 
  {
   "syn.": "de synodis (de fide orientalium)", 
   "frg. min.": "fragmenta minora a scriptoribus servata", 
   "[euang.]": "[euang.]", 
   "in Matth.": "commentarii in Matthaeum", 
   "[gen.]": "[gen.]", 
   "hymn.": "libri hymnorum reliquiae", 
   "myst.": "tractatus mysteriorum quae exstant", 
   "psalm. instr.": "instructio psalmorum, sc. praefatio tractatuum in psalm.", 
   "ad Const.": "ad Constantium imperatorem", 
   "[op. hist.]": "[op. hist.]", 
   "app.": "appendix", 
   "in psalm.": "tractatuum (commentariorum) in psalmos quae exstant", 
   "Aug. epist.": "epistulae ad Augustinum", 
   "c. Aux.": "contra Auxentium episcopum Mediolanensem", 
   "[epist. ad fil.]": "[epist. ad fil.]", 
   "[Macc.]": "[Macc.]", 
   "coll. antiar.": "collectanea antiariana Parisina q. d., sc. fragmenta operis historici de controversia Ariana (= adversum Valentem et Vrsacium?), quibus plurimae synodorum epistulae sim. servantur", 
   "c. Const.": "contra Constantium imperatorem", 
   "trin.": "de trinitate (de fide, adversum Arianos)"
  }, 
  [
   "315", 
   "367", 
   "episcopus", 
   ""
  ]
 ], 
 "[PAVL. STEPH.]": [
  "", 
  {
   "[reg.]": "[reg.]"
  }, 
  [
   "", 
   "", 
   "", 
   "REGVLA Paul. Steph."
  ]
 ], 
 "CLAVD. MAM.": [
  "Mamertus Claudianus", 
  {
   "epist.": "epistulae duae", 
   "anim.": "de statu animae"
  }, 
  [
   "400", 
   "473", 
   "presbyter Viennensis", 
   ""
  ]
 ], 
 "ENNOD.": [
  "Magnus Felix Ennodius", 
  {
   "carm.": "carmina", 
   "dict.": "dictiones", 
   "opusc.": "opuscula miscella", 
   "epist.": "epistulae"
  }, 
  [
   "473", 
   "521", 
   "episcopus Ticinensis", 
   ""
  ]
 ], 
 "NIPS.": [
  "M. Iunius Nipsus", 
  {
   "grom.": "grom."
  }, 
  [
   "100", 
   "199", 
   "gromaticus", 
   ""
  ]
 ], 
 "PS. HYG.": [
  "Pseudo-Hyginus", 
  {
   "mun. castr.": "liber de munitionibus (vel metatione) castrorum q. d. (mutilus)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "EPIST. $2": [
  "", 
  {
   "Pacon.": "epistula Paconii cuiusdam ad Macedonem", 
   "Orcist. (CIL III 7000)": "epistula (preces) Orcistanorum ad imp. Constantinum Magnum aliosque", 
   "Pap. Corp.": "minoris momenti epistulae, e. g. PAP. Corp."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $3": [
  "", 
  {
   "ad quinquennal. (CIL VI 33840)": "epistula (petitio) Geminii Eutychetis coloni ad quinquen-nales", 
   "prox. tabul. (CIL VI 10233)": "epistula Martialis lib. proximi tabulariorum", 
   "Salpens. (CIL II 1282)": "epistula sive decretum municipum municipii Salpensani de Aemilio Papo commendando", 
   "procos. (CIL III 13651)": "epistulae proconsulum, e. g. Pauli Fabii Maximi procos. Asiae de anni Asiani ordinatione", 
   "quindecimvir. (CIL X 3698)": "epistula XVvirum sacris faciundis ad praetores et magistratus Cumanorum", 
   "quattuorvir. (CIL V 1978)": "epistula M. Laetorii M. f. Patercliani quattuorviri iure dicundo ad collegium quoddam Opiterginum", 
   "pontif.": "epistulae (earumve fragmenta) genuinae pontificum Romanorum, quae latine conscriptae sunt", 
   "Paul. Laod.": "epistula apocrypha Pauli apostoli ad Laodicenses", 
   "quinquennal. (CIL VI 33840)": "epistula Euphratae et Salvii quinquennalium ad quaestores de petitione Geminii Eutychetis coloni", 
   "praef. Aeg. (Chart. lat. ant. III 215)": "epistula Minicii Itali praefecti Aegypti ad Celsianum", 
   "procur. (CIL X 7024)": "epistulae procuratorum, e. g. Iulii Paterni procuratoris (ad imp. M. Aurelium et L. Verum, ut vid.)", 
   "praet. ad Tiburt. (CIL I2 586)": "epistula L. Cornelii Cn. f. praetoris ad Tiburtes", 
   "Pelag. Vindob.": "epistularum (?) Pelagianarum fragmenta Vindobonensia", 
   "ad procur. (CIL VIII 25943)": "epistula (petitio) colonorum ad procuratores", 
   "promag. pontif. (CIL VI 2120)": "epistula Velii Fidi promagistri pontificum ad Iubentium Celsum collegam", 
   "praef. praet. (CIL IX 2438)": "epistulae praefectorum praetorio, e. g. Bassaei Rufi et Macrinii Vindicis ad magistratus Saepinatium", 
   "Philer. (Chart. lat. ant. X 428)": "epistula Philerotos cuiusdam ad conservos"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $1": [
  "", 
  {
   "rec. g": "recensio g (sc. versio apud CASSIOD. hist. 2,15)", 
   "rec. b": "recensio b (sc. codicis Veronensis, versa e graeco)", 
   "Claud. Terent. (Pap. Corp. 254)": "epistula Claudii Terentiani ad Claudium Tiberianum patrem", 
   "Honorii": "Honorii epistula ad milites", 
   "ed. Caspari": "epistulae a Caspari editae", 
   "Syntroph. (CIL VI 10239)": "T. Flavii Syntrophi", 
   "Ibae Facund. defens.": "epistula Ibae episcopi, fragm. versionis cuiusdam a Facundo servatum", 
   "Chlodov.": "epistula Chlodovechi regis Francorum ad episcopos regionum nuper expugnatarum", 
   "Candid. (CIL VI 10242)": "C. Iulii Candidi ad libertos Samiarii Quintiani", 
   "Merov.": "epistulae aevi Merovingici (praecipue paparum et episcoporum) a Gundlach collectae", 
   "Constant. ad eccl. Alex.": "Constantini Magni epistula ad ecclesiam Alexandrinam", 
   "rec. a": "recensio a (sc. authentica?)", 
   "Migne suppl.": "epistulae quaedam christianae, quarum verba praebet Migne suppl.", 
   "Chart. lat. ant.": "minoris momenti epistulae, e. g. CHART. lat. ant.", 
   "imp.": "epistulae imperatorum vel imperatricum (exempla selecta)", 
   "decur. Forosempron. (CIL XI 6123)": "epistula duumvirorum et decurionum Forosemproniensium ad C. Hedium C. f. Verum", 
   "Grat. ad Ambr.": "Gratiani epistula ad Ambrosium", 
   "Artemid. (CIL VI 10241)": "T. Flavii Artemidori", 
   "rec. Par.": "recensio cod. Parisini", 
   "episc. Greg. Tur. Franc.": "epistulae episcoporum quorundam a Gregorio Turonensi traditae", 
   "Maxim. Aug. in psalm.": "epistula Maximianistarum", 
   "Iulian. de postul.": "Iuliani epistula ad Apronianum de postulando", 
   "Austras.": "epistulae Austrasicae q. d.", 
   "inc. (CIL II 5368)": "incerti de iudiciis privatis", 
   "de Melch.": "epistula de Melchisedech Damaso papae supposita", 
   "rec. Ver.": "recensio cod. Veronensis", 
   "Aug. Suet. Claud.": "Augusti epistularum fragmenta a scriptoribus servata, e. g. fragm. apud SVET. Claud.", 
   "Iulian. (CIL III 141658)": "epistulae Iuliani (praefecti annonae?) ad navicularios marinos Arelatenses et ad procuratorem quendam Augg.", 
   "leg. iurid. (CIL II 2959)": "epistula Claudii Quartini legati iuridici ad duumviros Pompelonensium", 
   "Iren. (CIL VI 10247)": "Statiae Irenes", 
   "donat.": "epistulae (acta sim.) donatoriae", 
   "Aur. (Inscr. Maroc. Gascou 94)": "M. Aurelii et Commodi ad Vallium Maximianum", 
   "canon.": "epistula canonica q. d. (de presbyteris, diaconis, sub-diaconis)", 
   "leg. pr. pr. (CIL XIII 3162)": "epistulae legatorum pro praetore, e. g. Cl. Paulini ad Sennium Sollemnem", 
   "Bachiar.": "epistulae duae Bachiario a Morin tributae", 
   "Constant. in Arium": "Constantini Magni in Arium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "METROL.": [
  "", 
  {
   "tabulae metrologicae variae": "tabulae metrologicae variae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $4": [
  "", 
  {
   "Syner. (Pap. Oxyrh. XLIV 3208)": "epistula Synerotos cuiusdam ad Chium", 
   "Secundi (CIL XII 4393)": "epistula Sex. Fadii Secundi Musae ad collegium fabrum Narbonense,"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. $5": [
  "", 
  {
   "Vinisii": "epistula Vinisii Britannici cuiusdam ad Nigram", 
   "Visig.": "inter epistulas Visigothicas"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXPOS. $1": [
  "", 
  {
   "mundi": "expositio totius mundi et gentium (e graeco versa retrac\u00adtataque)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. ANTIOCH.": [
  "Gregorius Antiochenus", 
  {
   "bapt.": "sermo de baptismo Christi e graeco versus"
  }, 
  [
   "300", 
   "399", 
   "presbyter", 
   ""
  ]
 ], 
 "BASILIC.": [
  "", 
  {
   "Basilik\u00e1, sc. Leonis imperatoris recensio legum Iustinianarum (sc. COD. Iust., DIG., INST. Iust., NOVELL. Iust.) graeca, quae integra non exstat": "Basilik\u00e1, sc. Leonis imperatoris recensio legum Iustinianarum (sc. COD. Iust., DIG., INST. Iust., NOVELL. Iust.) graeca, quae integra non exstat"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTHIAN.": [
  "Furius Anthianus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "200", 
   "299", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "THEOD.": [
  "imp. Theodosius I", 
  {
   "epist. ad Auson.": "epistula ad Ausonium"
  }, 
  [
   "347", 
   "395", 
   "", 
   ""
  ]
 ], 
 "Q. CIC.": [
  "Q. Tullius Cicero", 
  {
   "carm. frg.": "carminis fragm.", 
   "pet.": "commentariolum petitionis (sive de petitione consulatus) ad M. fratrem", 
   "Cic. fam.": "epistulae ad Tironem et ad M. fratrem"
  }, 
  [
   "-102", 
   "-43", 
   "Marci frater", 
   ""
  ]
 ], 
 "BITHYN.": [
  "Pompeius Bithynicus", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-108", 
   "-48", 
   "", 
   ""
  ]
 ], 
 "TRACH.": [
  "P. Galerius Trachalus", 
  {
   "or. frg. Quint. inst.": "orationum fragmenta, e. g. fragm. servatum apud QVINT. inst."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "VINDIC.": [
  "Vindicianus (Afer)", 
  {
   "epit. alt.": "expositionis membrorum epitome anonyma altera uberior", 
   "epist. ad Valent.": "epistula ad imp. Valentinianum", 
   "gyn.": "eiusdem expositionis epitome anonyma (quae gynaecia vocatur)", 
   "med.": "medicorum placita", 
   "epist. ad Pentad.": "epistula ad Pentadium nepotem suum"
  }, 
  [
   "350", 
   "450", 
   "medicus", 
   ""
  ]
 ], 
 "EVSTATH.": [
  "Eustathius", 
  {
   "Basil. hex.": "Basilii Magni in hexaemeron homiliarum versio latina"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "ARIVS": [
  "Ar(r)ius", 
  {
   "ad Euseb.": "ad Eusebium Nicomediensem epistula ter latine versa"
  }, 
  [
   "256", 
   "336", 
   "haeresiarcha", 
   ""
  ]
 ], 
 "DON.": [
  "Aelius Donatus", 
  {
   "Phorm.": "in Phormionis", 
   "Ter.": "commentum Terentii certe non ita a Donato conscriptum", 
   "mai.": "ars maior q. d.", 
   "epist.": "epistula ad L. Munatium vitae Vergilii in cod. Paris. praemissa", 
   "min.": "ars minor q. d.", 
   "vita Verg.": "vita Vergilii", 
   "Verg. ecl. praef.": "praefatio commentarii in Vergilii eclogas deperditi, quae sequitur in codicibus vitam Vergilii", 
   "gramm.": "ars, sc. grammatica", 
   "de com.": "excerpta de comoedia q. d.", 
   "vita Ter.": "vita Terentii in codicibus commento Terentii praemissa", 
   "Phorm. praef.": "in Phormionem commenti praefatio"
  }, 
  [
   "320", 
   "380", 
   "grammaticus", 
   ""
  ]
 ], 
 "ANON. $1": [
  "anonymus", 
  {
   "c. philos.": "contra philosophos (i. e. altercationes Augustini et philosophorum paganorum)", 
   "in Hebr.": "in epistulam ad Hebraeos", 
   "de Petro apost.": "de Petro apostolo Christum negante fragmentum", 
   "in Matth.": "fragmentum Matth. 24,20\u201444 exponens", 
   "in Rom.": "in epistulam ad Romanos", 
   "med. ed. Piechotta": "fragmentum operis ad medicinam pertinentis codice Vossiano Q. 9 saec. VI servatum", 
   "proph.": "prophetiae ex omnibus libris (fere veteris et novi testamenti) collectae", 
   "de mach. bell.": "de machinis bellicis (immo de rebus bellicis)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $2": [
  "anonymus (AMBROSIAST. ?)", 
  {
   "de trib. mensur.": "de tribus mensuris (sc. Matth. 13,33 memoratis) fragmentum", 
   "de taxone": "de taxone", 
   "Vales.": "anonymi Valesiani pars posterior q. d. (complectens cap. 7\u201416)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIGIL. THAPS.": [
  "Vigilius Thapsensis", 
  {
   "c. Eutych.": "contra Eutychetem", 
   "c. Arian.": "contra Arianos, Sabellianos et Photinianos dialogus"
  }, 
  [
   "400", 
   "480", 
   "episcopus", 
   ""
  ]
 ], 
 "INDEX": [
  "", 
  {
   "person. Plaut. Capt.": "index personarum, quae in singulis comoediarum Plautin. et Terent. partibus prodeunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVST. VRGELL.": [
  "Iustus Vrgellitanus", 
  {
   "ad Serg.": "epistula ad Sergium episcopum", 
   "epist.": "epistulae", 
   "ad Iust.": "epistula ad Iustum diaconum", 
   "in cant.": "in cantica canticorum explicatio mystica (expositio)", 
   "serm.": "sermo in natale sancti Vincentii"
  }, 
  [
   "450", 
   "550", 
   "episcopus Vrgellitanus Hispanus", 
   ""
  ]
 ], 
 "PHILARG.": [
  "Iunius Philargyrius (Filagrius?)", 
  {
   "praef. rec. I": "praefatio sive vita Vergiliana (recensio I)", 
   "Verg. ecl.": "explanatio in bucolica Vergilii"
  }, 
  [
   "400", 
   "499", 
   "grammaticus", 
   ""
  ]
 ], 
 "AVR. VICT.": [
  "Sex. Aurelius Victor Afer", 
  {
   "Caes.": "historiae abbreviatae (vulgo: liber de Caesaribus)"
  }, 
  [
   "320", 
   "390", 
   "", 
   ""
  ]
 ], 
 "LVX.": [
  "Luxurius", 
  {
   "anth.": "carmina in anthologiam latinam recepta"
  }, 
  [
   "500", 
   "599", 
   "poeta Carthaginiensis", 
   ""
  ]
 ], 
 "ELEG.": [
  "", 
  {
   "in Maecen.": "elegiae in Maecenatem, carmen vel carmina appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[L. CRASS.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "CRASS."
  ]
 ], 
 "POSTVM.": [
  "A. Postumius Albinus", 
  {
   "hist.": "annales"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "FAVSTIN.": [
  "Faustinus Luciferianus", 
  {
   "fid.": "fides Theodosio imperatori oblata", 
   "trin.": "de trinitate (de fide contra Arianos)"
  }, 
  [
   "250", 
   "304", 
   "presbyter Romanus", 
   ""
  ]
 ], 
 "LAEL. FEL.": [
  "Laelius Felix", 
  {
   "Gell.": "fragm. servatum apud GELL."
  }, 
  [
   "50", 
   "150", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PS. QVINT.": [
  "Pseudo-Quintilianus", 
  {
   "decl.": "declamationes maiores"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "PS. IVVENC.": [
  "Pseudo-Iuvencus", 
  {
   "praef. pr.": "praefatio (sc. prior)"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "[FRG.]": [
  "", 
  {
   "[Berol.]": "[Berol.]", 
   "[c. Arrian.]": "fragmentum contra Arrianos"
  }, 
  [
   "", 
   "", 
   "", 
   "FRG. de iudic."
  ]
 ], 
 "IVNIL.": [
  "Iunil(li)us Africanus", 
  {
   "instituta regularia divinae legis": "instituta regularia divinae legis"
  }, 
  [
   "500", 
   "553", 
   "", 
   ""
  ]
 ], 
 "OPT. PORF.": [
  "Publilius Optatianus Porfyrius", 
  {
   "[epigr. frg.]": "[epigr. frg.]", 
   "carm.": "carmen", 
   "[schol. carm.]": "[schol. carm.]", 
   "epist. ad Constant.": "epistula ad Constantinum Magnum"
  }, 
  [
   "260", 
   "335", 
   "", 
   "qui carmina figurata q. d. vel technopaegnia composuit"
  ]
 ], 
 "PATRIC.": [
  "Magonus Sucatus Patricius", 
  {
   "epist.": "epistula ad milites Corotici sive epistularum", 
   "dict.": "dicta Patricii", 
   "conf.": "confessio sive epistularum", 
   "frg. 3": "epistularum deperditarum fragm. 3"
  }, 
  [
   "400", 
   "461", 
   "apostolus Hibernorum", 
   ""
  ]
 ], 
 "[PS. ANTON. MVSA]": [
  "", 
  {
   "[herb. bet.]": "[herb. bet.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PS. MVSA herb. Vett."
  ]
 ], 
 "MOD.": [
  "Herennius Modestinus", 
  {
   "anth.": "carmen in anthologiam latinam receptum", 
   "dig.": "fragmenta in collectionibus antiquis (praecipue DIG.) servata", 
   "frg.": "fragmenta aliter servata"
  }, 
  [
   "185", 
   "250", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "THEOPHIL.": [
  "Theophilus", 
  {
   "inst. Iust.": "institutionum Iustiniani (INST. Iust.) paraphrasis graeca"
  }, 
  [
   "500", 
   "550", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "HIST.": [
  "", 
  {
   "Apoll.": "historia Apollonii regis Tyri"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STILO": [
  "L. Aelius Stilo Praeconinus", 
  {
   "Fest.": "fragmenta, e. g. fragm. servatum apud FEST."
  }, 
  [
   "-154", 
   "-74", 
   "grammaticus", 
   ""
  ]
 ], 
 "IVV.": [
  "D. Iunius Iuvenalis", 
  {
   "saturarum libri V": "saturarum libri V"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "[SPART.]": [
  "Aelius Spartianus, e numero scriptorum historiae Augustae fictorum", 
  {}, 
  [
   "117", 
   "284", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "SACERD.": [
  "Marius Plotius Sacerdos", 
  {
   "gramm.": "artes grammaticae"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "MORET.": [
  "", 
  {
   "moretum, carmen appendicis Vergilianae": "moretum, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RVRIC.": [
  "Ruricius", 
  {
   "epist.": "epistulae"
  }, 
  [
   "450", 
   "508", 
   "episcopus Lemovicinus", 
   ""
  ]
 ], 
 "[TREB.]": [
  "Trebellius Pollio, e numero scriptorum historiae Augustae fictorum", 
  {}, 
  [
   "117", 
   "285", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "ARNOB. IVN.": [
  "Arnobius iunior", 
  {
   "in Luc.": "expositiunculae in euangelium (Iohannis Matthaei Lucae)", 
   "in psalm.": "commentarii in psalmos", 
   "ad Greg.": "liber ad Gregoriam in palatio constitutam", 
   "confl.": "conflictus (sc. altercatio) Arnobii catholici cum Serapione Aegyptio haeretico"
  }, 
  [
   "300", 
   "355", 
   "", 
   ""
  ]
 ], 
 "EVGRAPH.": [
  "Eugraphius", 
  {
   "Ter. Ad.": "commentum Terentii, in Adelphorum"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "[FLAVIAN. ]": [
  "Flavianus", 
  {
   "Leo M. epist.": "epistulae duae ad Leonem Magnum bis e graeco versae, sc. inter illius epistulas"
  }, 
  [
   "400", 
   "449", 
   "episcopus Constantinopolitani", 
   "CONC. S II ..."
  ]
 ], 
 "CLAVD. DON.": [
  "Ti. Claudius Donatus", 
  {
   "epil.": "epilogi fragmentum", 
   "Aen.": "interpretationes Vergilianae, sc. Aeneidos", 
   "prooem.": "prooemium"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PS. MAVRIC.": [
  "(Pseudo-) Mauricius", 
  {
   "strat.": "strategicon"
  }, 
  [
   "539", 
   "602", 
   "vix imperator Byzantinus", 
   ""
  ]
 ], 
 "CANDID.": [
  "Candidus", 
  {
   "gen. div.": "liber de generatione divina (sc. epistula prior sec. Henry/Hadot)"
  }, 
  [
   "350", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CYRILL.": [
  "", 
  {
   "rec. II 8": "recensio II cap. 8", 
   "prol.": "prologus vel praefatio de ratione paschae Cyrillo Alexandrino perperam ascripta", 
   "rec. I 6": "recensio I cap. 6"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVET.": [
  "C. Suetonius Tranquillus", 
  {
   "Otho": "de vita Caesarum lib. VII 2: Otho", 
   "Claud.": "de vita Caesarum lib. V: divus Claudius", 
   "Aug.": "de vita Caesarum lib. II: divus Augustus", 
   "Dom.": "de vita Caesarum lib. VIII 3: Domitianus", 
   "vita Crispi": "vita Passieni Crispi", 
   "vita Hor.": "vita Horatii", 
   "Nero": "de vita Caesarum lib. VI: Nero", 
   "Tit.": "de vita Caesarum lib. VIII 2: divus Titus", 
   "gramm.": "de grammaticis et rhetoribus cap. 1\u201424", 
   "vita Lucani": "vita Lucani", 
   "Vesp.": "de vita Caesarum lib. VIII 1: divus Vespasianus", 
   "rhet.": "de grammaticis et rhetoribus", 
   "Galba": "de vita Caesarum lib. VII 1: Galba", 
   "Vit.": "de vita Caesarum lib. VII 3: Vitellius", 
   "Cal.": "de vita Caesarum lib. IV: C. Caligula", 
   "vita Plin.": "vita Plinii maioris", 
   "Iul.": "de vita Caesarum lib. I: divus Iulius", 
   "[vita Verg.]": "[vita Verg.]", 
   "Tib.": "de vita Caesarum lib. III: Tiberius", 
   "vita Ter.": "vita Terentii", 
   "frg.": "fragmenta varia"
  }, 
  [
   "70", 
   "122", 
   "", 
   ""
  ]
 ], 
 "HESYCH.": [
  "Hesychius <Hierosolymitanus>", 
  {
   "Aug. epist.": "epistula ad Augustinum", 
   "in lev.": "commentarius in leviticum e graeco versus et retractatus"
  }, 
  [
   "400", 
   "450", 
   "presbyter Hierosolymitanus", 
   ""
  ]
 ], 
 "FAV. EVL.": [
  "Favonius Eulogius", 
  {
   "disputatio de somnio Scipionis": "disputatio de somnio Scipionis"
  }, 
  [
   "350", 
   "450", 
   "rhetor Carthaginiensis", 
   ""
  ]
 ], 
 "FORTVN. AQVIL.": [
  "Fortunatianus", 
  {
   "in euang.": "commentarii in euangelia (usque adhuc: in Matthaeum)"
  }, 
  [
   "300", 
   "400", 
   "episcopus Aquileiensis", 
   ""
  ]
 ], 
 "AVRELIAN.": [
  "Aurelianus", 
  {
   "reg. mon.": "regula ad monachos", 
   "reg. virg.": "regula ad virgines", 
   "app.": "appendix"
  }, 
  [
   "523", 
   "551", 
   "episcopus Arelatensis", 
   ""
  ]
 ], 
 "VICTOR CAP.": [
  "Victor Capuanus", 
  {
   "frg. Spicil. Solesm. I": "fragmenta, e. g. fragm. editum apud Pitra, Spicilegium Solesmense I", 
   "harm. euang. praef.": "in harmoniam euangeliorum q. d. praefatio"
  }, 
  [
   "500", 
   "599", 
   "episcopus", 
   ""
  ]
 ], 
 "[SALON.]": [
  "Salonius", 
  {
   "[in eccles.]": "in ecclesiasten", 
   "[in prov.]": "in proverbia Salomonis expositiones"
  }, 
  [
   "400", 
   "499", 
   "episcopus Viennensis", 
   ""
  ]
 ], 
 "MVMM.": [
  "Mummius", 
  {
   "Atell.": "Atellanarum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "HOR.": [
  "Q. Horatius Flaccus", 
  {
   "carm. saec.": "carmen saeculare", 
   "ars": "de arte poetica (epistula ad Pisones)", 
   "carm.": "carmina", 
   "epist.": "epistulae", 
   "epod.": "epodi (iambi)", 
   "sat.": "saturae (sermones)"
  }, 
  [
   "-65", 
   "-8", 
   "", 
   ""
  ]
 ], 
 "VESPA": [
  "Vespa", 
  {
   "iudicium coci et pistoris iudice Vulcano": "iudicium coci et pistoris iudice Vulcano"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "BENED.": [
  "Benedictus Nursinus", 
  {
   "reg.": "regula monachorum"
  }, 
  [
   "480", 
   "547", 
   "", 
   ""
  ]
 ], 
 "PASSIEN.": [
  "C. Sallustius Crispus Passienus", 
  {
   "or. frg. Quint. inst.": "orationis fragm. servatum apud QVINT. inst."
  }, 
  [
   "-86", 
   "-34", 
   "", 
   ""
  ]
 ], 
 "SEV. MINOR.": [
  "Severus Minoricensis", 
  {
   "epistula ad omnem ecclesiam": "epistula ad omnem ecclesiam"
  }, 
  [
   "350", 
   "450", 
   "episcopus", 
   ""
  ]
 ], 
 "SVLLA": [
  "L. Cornelius Sulla", 
  {
   "hist.": "commentarii rerum gestarum"
  }, 
  [
   "-138", 
   "-78", 
   "", 
   ""
  ]
 ], 
 "PS. THOM.": [
  "Pseudo-Thomas", 
  {
   "apoc.": "apocalypsis", 
   "euang.": "euangelium sive tractatus de pueritia Iesu"
  }, 
  [
   "", 
   "", 
   "apostolus", 
   ""
  ]
 ], 
 "NOT.": [
  "", 
  {
   "episc.": "notitia provinciarum et civitatum Africae sive nomina episcoporum vel sedium illius regionis", 
   "laterc. gramm.": "notarum iuris laterculi", 
   "dign.": "notitia dignitatum omnium, tam civilium quam militarium", 
   "Tripol.": "provinciae Tripolitanae", 
   "Tir.": "commentarii notarum Tironianarum", 
   "Suet. gramm.": "notarum, quae versibus apponi consuerunt, laterculus fortasse e Suetonio excerptus", 
   "urb. Const.": "notitia urbis Constantinopolitanae", 
   "or.": "in partibus orientis", 
   "occ.": "in partibus occidentis", 
   "proc. Afr.": "provinciae proconsularis Africae", 
   "Maur. Caes.": "provinciae Mauretaniae Caesariensis", 
   "cod. Vat. Bas. D. 182 (Lowe 1a)": "notae codicibus ante saec. VII exaratis ascriptae, e. g. nota (manu FVLG. RVSP. ?) cod. Vat. Bas. D. 182 (Lowe, Cod. lat. ant. 1a; servat HIL. trin. al. )", 
   "Num.": "provinciae Numidiae", 
   "Gall.": "notitia Galliarum (i. e. provinciarum et civitatum Gallicanarum)", 
   "Maur. Sitif.": "provinciae Mauretaniae Sitifensis", 
   "Sard.": "insulae Sardiniae", 
   "Byz.": "provinciae Byzacenae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PANEG.": [
  "", 
  {
   "collectio panegyricorum latinorum": "collectio panegyricorum latinorum", 
   "in Mess.": "panegyricus in Messallam Corvinum Tibullo suppositus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GARG. MART.": [
  "Gargilius Martialis", 
  {
   "med.": "medicinae ex oleribus et pomis", 
   "cur. boum": "curae boum", 
   "fragmenta ex eius opere vel operibus excerpta": "fragmenta ex eius opere vel operibus excerpta", 
   "pom.": "de arboribus pomiferis fragmenta codice Neapolitano rescripto servata (vel de hortis)"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "LIC. MVC.": [
  "C. Licinius Mucianus", 
  {
   "Plin. nat.": "operis, quo mirabilia et al. narrantur, fragm. servatum apud PLIN. nat."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "VOLCAC.": [
  "Volcacius Sedigitus", 
  {
   "carm. frg.": "liber de poetis"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "[PS. MAR. MERC.]": [
  "Pseudo-Marius Mercator", 
  {
   "[Nest. epist.]": "Nestorii epistulae tres"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PASCASIN.": [
  "Pasc(h)asinus", 
  {
   "epist.": "epistula ad Leonem Magnum"
  }, 
  [
   "400", 
   "499", 
   "episcopus Lilybaetanus", 
   ""
  ]
 ], 
 "FAVST.": [
  "Faustus Manichaeus", 
  {
   "Aug. c. Faust.": "verba ab Augustino allata"
  }, 
  [
   "350", 
   "399", 
   "", 
   ""
  ]
 ], 
 "ASCON.": [
  "Q. Asconius Pedianus", 
  {
   "tog. cand.": "orationum Ciceronis enarrationis quae exstant (sc. in exstantes orationes Mil., Pis., Scaur.; in deperditas Corn(elianas duas), tog. cand.), in orationem in toga candida deperditam"
  }, 
  [
   "-9", 
   "76", 
   "", 
   ""
  ]
 ], 
 "PAVLA": [
  "Paula et Eustochium", 
  {
   "Hier. epist.": "epistula ad Marcellam"
  }, 
  [
   "368", 
   "420", 
   "", 
   ""
  ]
 ], 
 "PS. VICT. VIT.": [
  "Pseudo-Victor Vitensis", 
  {
   "hom.": "homilia de Cypriano episcopo", 
   "pass.": "passio septem monachorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COTTA": [
  "C. Aurelius Cotta", 
  {
   "orationis cuiusdam fragm. servatum apud CHAR. gramm.": "orationis cuiusdam fragm. servatum apud CHAR. gramm."
  }, 
  [
   "-124", 
   "-73", 
   "", 
   ""
  ]
 ], 
 "ANTH.": [
  "", 
  {
   "anthologiae latinae q. d. pars prior (partem posteriorem v. CE), sc. collectio carminum saec. VI facta, codice Salmasiano partim servata, a Riese post alios carminibus aliunde collectis aucta (carmina non ita pauca recentiora sunt quam ut afferantur": "anthologiae latinae q. d. pars prior (partem posteriorem v. CE), sc. collectio carminum saec. VI facta, codice Salmasiano partim servata, a Riese post alios carminibus aliunde collectis aucta (carmina non ita pauca recentiora sunt quam ut afferantur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEXTIL.": [
  "Sextilius Ena", 
  {
   "carm. frg. Sen. suas.": "carminum fragm. servatum apud SEN. suas."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "PARTHEN.": [
  "Parthenius", 
  {
   "epist.": "epistula ad Sigesteum comitem"
  }, 
  [
   "500", 
   "599", 
   "presbyter Africanus", 
   ""
  ]
 ], 
 "AMM.": [
  "Ammianus Marcellinus Antiochenus", 
  {
   "res gestae": "res gestae"
  }, 
  [
   "325", 
   "400", 
   "", 
   ""
  ]
 ], 
 "PIVS": [
  "imp. Antoninus Pius", 
  {
   "Fronto": "epistulae ad Frontonem"
  }, 
  [
   "86", 
   "161", 
   "", 
   ""
  ]
 ], 
 "GRAN. LIC.": [
  "Granius Licinianus", 
  {
   "operis historici fragmenta codice rescripto servata": "operis historici fragmenta codice rescripto servata"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "PS. MAX. TAVR.": [
  "Pseudo-Maximus", 
  {
   "bapt. 3": "de baptismo tractatus III", 
   "serm. app. 31": "sermones appendicis apud Migne 57 exstantis", 
   "serm. 113": "sermones CXVI apud Migne collecti", 
   "hom.": "homiliae", 
   "serm. Rev. B\u00e9n\u00e9d. 97,1987": "sermones III, quos edidit \u00c9taix", 
   "[serm. 7,4 M.]": "[serm. 7,4 M.]", 
   "sermones (a Mutzenbecher editi)": "sermones (a Mutzenbecher editi)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVAGR.": [
  "Euagrius Antiochenus", 
  {
   "vita Anton.": "versio vel retractatio vitae Antonii monachi ab Athanasio"
  }, 
  [
   "300", 
   "393", 
   "", 
   ""
  ]
 ], 
 "SYMB.": [
  "", 
  {
   "Corp. Christ.": "editum in Corporis Christianorum", 
   "Athan.": "symbolum Athanasii", 
   "Nicaen. Canon. Turner I": "symboli Nicaeni (a. 325) versiones latinae, e. g. quae edita est CANON. Turner I", 
   "symbola fidei": "symbola fidei"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. PETRIC.": [
  "Paulinus Petricordiae", 
  {
   "praef.": "praefatio", 
   "visit. nepot.": "de visitatione nepotuli sui", 
   "carm. praef.": "praefatio ad carmina minora", 
   "orant.": "de orantibus", 
   "Mart.": "de vita Martini episcopi"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "ARBON.": [
  "Arb(r)onius Silo (sc. pater)", 
  {
   "carm. frg.": "carminum fragmentum"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "VICTORIN. POETOV.": [
  "Victorinus Poetovionensis", 
  {
   "in apoc.": "commentarius in apocalypsin", 
   "fabr. mund.": "tractatus de fabrica mundi"
  }, 
  [
   "250", 
   "304", 
   "episcopus", 
   ""
  ]
 ], 
 "CYPR. GALL.": [
  "Cyprianus Gallus", 
  {
   "iud.": "heptateuchos q. d., sc. veteris testamenti libri nonnulli versibus redditi (servatus est heptateuchos, sc. gen., exod., lev., num., deut., Ios., iud. [mutil. in fine])", 
   "frg.": "deperditorum carminum fragmenta, quae quidem Peiper Cypriano Gallo ascripsit (partim falso)", 
   "[cena]": "cena Cypriani q. d. (v. PS. CYPR. cena) versibus reddita"
  }, 
  [
   "350", 
   "450", 
   "poeta", 
   ""
  ]
 ], 
 "PETR.": [
  "Petrus diaconus et alii", 
  {
   "Fulg. Rusp. epist.": "epistula ad Fulgentium et coepiscopos"
  }, 
  [
   "1107", 
   "1159", 
   "", 
   ""
  ]
 ], 
 "[PROCOP.]": [
  "", 
  {
   "[Ps. Hier. epist.]": "versio lat. epistulae Procopii Gazaei ad Hieronymum quendam (inter S. Hieronymi epistulas perperam receptae) olim iuxta textum gr. edita non iam affertur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PORC. LIC.": [
  "Porcius Licinus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-150", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "EVCLID.": [
  "Euclides", 
  {
   "elem.": "elementa e graeco versa"
  }, 
  [
   "-299", 
   "-200", 
   "geometres", 
   ""
  ]
 ], 
 "PEREGR.": [
  "", 
  {
   "Aeth.": "peregrinatio Aetheriae sive potius itinerarium Egeriae (vix Silviae)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DVB. NOM.": [
  "", 
  {
   "gramm.": "de dubiis nominibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAESELL.": [
  "L. Caesellius Vindex", 
  {
   "fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "50", 
   "150", 
   "grammaticus", 
   ""
  ]
 ], 
 "MARTYR.": [
  "Martyrius", 
  {
   "gramm.": "de B muta et V vocali"
  }, 
  [
   "450", 
   "550", 
   "Adamantii filius", 
   ""
  ]
 ], 
 "[VICTORIN.] $1": [
  "", 
  {
   "[vita dom.]": "carmen de nativitate, vita, passione et resurrectione domini"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOL.": [
  "C. Iulius Solinus", 
  {
   "collectanea rerum memorabilium": "collectanea rerum memorabilium"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "EPIPHAN. SCHOL.": [
  "Epiphanius Scholasticus", 
  {
   "Phil. Carp. in cant.": "Philonis Carpasiotae commentarius in canticum canticorum e graeco versus", 
   "Didym. in Iudam": "Didymi Alexandrini in epistulas canonicas (sc. catholicas q. d.) brevis enarratio e graeco versa atque retractata, in epistulae Iudae"
  }, 
  [
   "500", 
   "599", 
   "", 
   "versiones librorum graecorum iussu Cassiodori factae"
  ]
 ], 
 "SEV. NICAN.": [
  "Sevius Nicanor", 
  {
   "sat. frg. Suet. gramm.": "saturae fragm. servatum apud SVET. gramm."
  }, 
  [
   "-300", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "SASERN.": [
  "Sasernae", 
  {
   "Varro rust.": "de agri cultura fragmenta, quae servavit VARRO rust."
  }, 
  [
   "-200", 
   "-101", 
   "pater et filius", 
   ""
  ]
 ], 
 "R. GEST.": [
  "", 
  {
   "div. Aug.": "res gestae divi Augusti"
  }, 
  [
   "", 
   "", 
   "", 
   "olim ex monumento Ancyrano solo allatae"
  ]
 ], 
 "CASS. SEV.": [
  "Cassius Severus", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "-50", 
   "32", 
   "", 
   ""
  ]
 ], 
 "THESS. TRALL.": [
  "Thessalus <Trallianus>", 
  {
   "plant.": "de plantis duodecim signis et septem planetis subiectis (qui floruit aet. Neronis) tributi versio lat. antiqua"
  }, 
  [
   "0", 
   "99", 
   "medicus", 
   ""
  ]
 ], 
 "TRACT. $1": [
  "", 
  {
   "Pelag.": "epistulae et tractatus Pelagiani", 
   "de sepulchr. grom.": "tractatus de sepulchris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRACT. $2": [
  "", 
  {
   "de trin. fid.": "tractatus de trinitate fidei catholicae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. DIONYS. ALEX.": [
  "(Pseudo-) Dionysius Alexandrinus", 
  {
   "epist.": "epistula"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLANC.": [
  "L. Munatius Plancus", 
  {
   "Cic. fam.": "epistulae fere ad Ciceronem"
  }, 
  [
   "-87", 
   "-15", 
   "", 
   "v. CIC. fam."
  ]
 ], 
 "APIC.": [
  "Apicius", 
  {
   "exc.": "excerpta a Vinidario quodam (sed non e nostra decem librorum collectione) servata codice Salmasiano", 
   "pim.": "brevis pimentorum", 
   "de re coquinaria": "de re coquinaria", 
   "cib.": "brevis ciborum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "TITVLVS": [
  "", 
  {
   "Hor. carm. 1,16 rec. Ps": "titulus recensionis Ps ad HOR. carm. 1,16", 
   "Mart.": "titulus vel lemma ad MART."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IDIOM.": [
  "", 
  {
   "cas. gramm.": "de idiomatibus casuum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAST.": [
  "", 
  {
   "fer. lat. a. 109": "fasti feriarum latinarum ad ann. 109", 
   "I chron. I": "fasti priores, vol. I", 
   "triumph.": "fasti triumphales, sc. laterculi triumphorum", 
   "Capitol. a. 13": "Capitolini ad ann. 13 p. Chr. (=ann. urbis conditae 766)", 
   "min. dom. Aug. Antiat. a. 51": "fasti ministrorum domus Augustae, e. g. Antiates ad ann. 51", 
   "Pomp. a. 46 a. Chr.": "Pompeiani ad ann. 46 a. Chr.", 
   "mag. Ost. a. 146": "fasti magistratuum municipalium sim., e. g. Ostienses ad ann. 154", 
   "mag. vici": "fasti magistrorum vici", 
   "augur. a. 7": "fasti augurum ad ann. 7", 
   "Sal. Palat. a. 201": "fasti Saliorum Palatinorum ad ann. 201", 
   "sacerd. Iov. a. 238": "fasti sacerdotum in aede Iovis Propugnatoris consistentium ad ann. 238", 
   "scrib. quaest. a. 81": "fasti scribarum quaestoriorum (sc. sex primorum?) ad ann. 81", 
   "cos.": "fasti consulares", 
   "sodal. Augustal. a. 91": "fasti sodalium Augustalium Claudialium (olim partim 'acta' vel 'fasti collegiorum sacerdotalium incertorum') ad ann. 91", 
   "sodal. Antoninian. a. 236": "fasti sodalium Antoninianorum (?) ad ann. 236", 
   "Vind.": "fasti Vindobonenses, sc. epitomae duae chronicorum Italicorum (annalium Ravennatium) mutilae", 
   "Capitol. a. 19 a. Chr.": "Capitolini ad ann. 19 a. Chr. (=ann. urbis conditae 735)", 
   "II chron. I": "fasti posteriores, vol. I", 
   "Barberin. a. 21 a. Chr.": "Barberiniani ad ann. 21 a. Chr. (olim saxum V)", 
   "colleg.": "fasti consulares collegiorum", 
   "inc. Lun. a. 19": "collegii incerti (lapicidarum?) Lunenses ad ann. 19 p. Chr. (=ann. urbis conditae 772)", 
   "Antiat. mai. a. 84 a. Chr.": "Antiates maiores (olim non distincti a minoribus) ad ann. 84 a. Chr.", 
   "ann. Iul. Arv. Nov. 14": "fasti anni Iuliani, e. g. fratrum Arvalium ad diem 14 mensis Novembris", 
   "urb. a. 21": "urbani ad ann. 21 p. Chr.", 
   "sepulcr. a. 3 a. Chr.": "collegii sepulcralis urbani ad ann. 3 a. Chr.", 
   "Merseb. a. 454": "fasti Merseburgenses, sc. epitomae cuiusdam chronicorum Italicorum (annalium Ravennatium) fragmenta, ad ann. 454", 
   "ann. Num. Antiat. Interkal. 23": "fasti anni Numani Antiates (sive Antiates maiores) ad diem 23 mensis Interkalaris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILAGR.": [
  "Philagrius", 
  {
   "med.": "de medicina, versio Latina"
  }, 
  [
   "200", 
   "299", 
   "<Epirotes> medicus", 
   "fragmenta latina in Alexandri Tralliani versione latina"
  ]
 ], 
 "CHROMAT.": [
  "Chromatius", 
  {
   "serm.": "sermones", 
   "in Matth.": "tractatus in Matthaeum", 
   "[beat.]": "sermo de octo beatitudinibus"
  }, 
  [
   "345", 
   "407", 
   "episcopus Aquileiensis", 
   ""
  ]
 ], 
 "VET. LAT.": [
  "", 
  {
   "II Macc.": "libri Maccabaeorum", 
   "Am.": "Amos", 
   "apoc.": "apocalypsis", 
   "Esth. H": "liber  Esther, e. g. additamentum H", 
   "Iac.": "epistula Iacobi", 
   "Vetus Latina": "Vetus Latina", 
   "Bar.": "Baruch"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RABIR.": [
  "Rabirius", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "COMM.": [
  "Commodianus", 
  {
   "apol.": "carmen apologeticum q. d. (carmen de duobus populis)", 
   "instr.": "instructiones per litteras versuum primas (sc. acrostichidibus ornatae)"
  }, 
  [
   "200", 
   "299", 
   "poeta", 
   ""
  ]
 ], 
 "AVIAN.": [
  "Avianus", 
  {
   "praef.": "fabularum praefatio, sc. epistula dedicatoria", 
   "fab.": "fabulae", 
   "[apol.]": "fabularum apologi (olim etiam prologi nominabantur)"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "VISIO": [
  "", 
  {
   "Pauli": "visio Pauli apostoli apocrypha latine versa"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAX. MADAVR.": [
  "Maximus Madaurensis", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "grammaticus paganus", 
   ""
  ]
 ], 
 "PS. IOH. MED.": [
  "(Pseudo-) Iohannes <Mediocris>", 
  {
   "hom.": "collectio homiliarum 31 per Chrysostomicarum editiones dispersarum"
  }, 
  [
   "", 
   "", 
   "episcopus Neapolitanus", 
   ""
  ]
 ], 
 "PAVL.": [
  "Paulinus quidam", 
  {
   "Faust. Rei. epist.": "epistula ad Faustum", 
   "epigr.": "epigramma", 
   "dig.": "fragmenta in digestis aliisve collectionibus servata", 
   "paenit.": "sermo de paenitentia ad monachos", 
   "sent.": "sententiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CATO $1": [
  "M. Porcius Cato (sc. Vticensis)", 
  {
   "ad Ciceronem epistula": "ad Ciceronem epistula"
  }, 
  [
   "-95", 
   "-46", 
   "", 
   ""
  ]
 ], 
 "CORN. SEV.": [
  "Cornelius Severus", 
  {
   "carm. frg.": "carminum vel carminis fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "CAES.": [
  "C. Iulius Caesar", 
  {
   "anal. frg. Char. gramm.": "de analogia, fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.", 
   "civ.": "commentarii belli civilis", 
   "carm. in Ter.": "carminum fragmentum, sc. versus in Terentium Afrum", 
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "Anticat. frg. Gell.": "Anticato, fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "epistulae una cum Ciceronis ad Atticum epistulis servatae": "epistulae una cum Ciceronis ad Atticum epistulis servatae", 
   "Gall.": "commentarii belli Gallici"
  }, 
  [
   "-100", 
   "-44", 
   "", 
   ""
  ]
 ], 
 "NERAT.": [
  "L. Neratius Priscus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "50", 
   "133", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PS. PAVL. NOL.": [
  "Pseudo-Paulinus Nolanus", 
  {
   "exc. Bob.": "excerpta Bobiensia", 
   "epist. app.": "appendix epistularum Paulino Nolano suppositarum", 
   "carm.": "carmina spuria inter PAVL. NOL. carm.", 
   "carm. app.": "appendix carminum Paulino Nolano suppositorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOH. MAXENT.": [
  "Iohannes Maxentius", 
  {
   "[c. Nest.]": "contra Nestorianos capitula", 
   "[fid.]": "professio brevissima catholicae fidei", 
   "[profess.]": "de Christo professio, sc. libelli fidei pars posterior (pars prior notabatur 'epist. ')", 
   "[ad Horm.]": "ad epistulam Hormisdae papae responsio", 
   "[epist.]": "epistula ad legatos sedis apostolicae, sc. libelli fidei pars prior (pars posterior notabatur 'profess. ')", 
   "[adunat.]": "adunationis ratio verbi dei ad propriam carnem", 
   "[dial.]": "dialogus contra Nestorianos", 
   "[c. Aceph.]": "contra Acephalos"
  }, 
  [
   "450", 
   "550", 
   "monachus Scytha", 
   "Conc. S IV 2 p. 14,22"
  ]
 ], 
 "NVMITOR.": [
  "Numitorius", 
  {
   "carm. frg.": "carminum (antibucolicon) fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "PS. HIER.": [
  "Pseudo-Hieronymus", 
  {
   "[expos. in Ioh.]": "expositio (in) quattuor euangel., in Iohannem", 
   "chron. exord.": "exordium q. d. in uno alterove codice post HIER. chron. praef. insertum", 
   "praef. com.": "epistula ad Constantium, sc. praefatio lectionarii cuiusdam", 
   "[ad mon.]": "homilia ad monachos", 
   "tract.": "tractatus de psalm. 50", 
   "in Rom.": "ad Pelagii commentarium in Pauli apostoli epistulam ad Romanos", 
   "[in Iob]": "[in Iob]", 
   "Salom.": "explanatio de Salomone", 
   "doctr.": "homilia, 'in qua corruptio Doctrinae Apostolorum vituperatur'", 
   "Victorin. Poetov. in apoc.": "Victorini Poetovionensis commentarius in apocalypsin ab Hieronymo retractatus, recensio posterior", 
   "[in Marc.]": "commentarius in euangelium secundum Marcum", 
   "fid.": "fides Hieronymi", 
   "mon. Pachom.": "monita sancti Pachomii", 
   "epist. epistulae": "diverse", 
   "indic. de haer.": "indiculus de haeresibus", 
   "[expos. interl. in Ioh.]": "[expos. interl. in Ioh.]", 
   "monogr.": "de monogramma Christi"
  }, 
  [
   "400", 
   "599", 
   "", 
   ""
  ]
 ], 
 "PORPH.": [
  "Pomponius Porphyrio", 
  {
   "vita Hor.": "vita Horatii", 
   "Hor. sat.": "commentum in HOR., e. g. in sat."
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "ASELL.": [
  "Sempronius Asellio", 
  {
   "hist.": "rerum gestarum fragmenta"
  }, 
  [
   "-159", 
   "-91", 
   "", 
   ""
  ]
 ], 
 "SEVERIN.": [
  "Severinus", 
  {
   "doctr.": "doctrina de sapientia"
  }, 
  [
   "301", 
   "399", 
   "episcopus (von K\u00f6ln?)", 
   ""
  ]
 ], 
 "DORCAT.": [
  "Dorcatius", 
  {
   "carm. frg.": "carminum fragmentum unicum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MIM.": [
  "", 
  {
   "inc.": "mimographi incerti"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. PHILO": [
  "Pseudo-Philo", 
  {
   "antiq.": "libri antiquitatum biblicarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[LEG. ...]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "LEX ..."
  ]
 ], 
 "AT. CAP.": [
  "C. Ateius Capito", 
  {
   "fragmenta": "fragmenta"
  }, 
  [
   "-50", 
   "22", 
   "iurisconsultus", 
   "quibus scriptores ea tradentes Atei nomen addunt, e. g. fragm. apud MACR. Sat."
  ]
 ], 
 "LEPOR.": [
  "Leporius", 
  {
   "libellus emendationis (satisfactionis)": "libellus emendationis (satisfactionis)"
  }, 
  [
   "350", 
   "450", 
   "monachus Gallus", 
   ""
  ]
 ], 
 "ALBINOV.": [
  "Albinovanus Pedo", 
  {
   "carm.": "carminis fragmentum"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "NEPOTIAN.": [
  "Ianuarius Nepotianus", 
  {
   "epitomae Valerii Maximi quae exstant": "epitomae Valerii Maximi quae exstant"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "SEN.": [
  "L. Annaeus Seneca", 
  {
   "Ag.": "Agamemno", 
   "rem. fort.": "de remediis fortuitorum quae exstant", 
   "amic.": "de amicitia fragmenta Palatina", 
   "Herc. O.": "Hercules (Oetaeus)", 
   "Oed.": "Oedipus", 
   "frg.": "deperditorum operum fragmenta minora", 
   "Thy.": "Thyestes", 
   "Phaedr.": "Phaedra sive Hippolytus", 
   "benef.": "de beneficiis", 
   "1": "de\u00a0providentia\u00a0(opus\u00a0senectutis)", 
   "apocol.": "divi Claudii apocolocyntosis", 
   "2": "de\u00a0constantia\u00a0sapientis", 
   "7": "de\u00a0vita\u00a0beata", 
   "6": "consolatio\u00a0ad\u00a0Marciam\u00a0(aet. Calig.)", 
   "9": "de\u00a0tranquillitate\u00a0animi", 
   "8": "de\u00a0otio\u00a0(post\u00a062?)", 
   "11\u00a0(olim\u00a012)": "consolatio\u00a0ad\u00a0Polybium\u00a0(a. 41/44)", 
   "suas.": "suasoriarum liber", 
   "epist.": "epistulae morales ad Lucilium", 
   "Med.": "Medea", 
   "Herc. f.": "Hercules (furens)", 
   "vita patr.": "de vita patris quae exstant", 
   "dial.": "dialogi", 
   "Tro.": "Troades", 
   "10": "de\u00a0brevitate\u00a0vitae\u00a0(a. 48/50)", 
   "3\u20145": "de\u00a0ira\u00a0libri\u00a01\u20143\u00a0(Caligula\u00a0mortuo)", 
   "clem.": "de clementia (opus mutilum)", 
   "Phoen.": "Phoenissae", 
   "nat.": "naturales quaestiones", 
   "12\u00a0(olim\u00a011)": "consolatio\u00a0ad\u00a0Helviam\u00a0(fere\u00a0a. 42)", 
   "contr.": "controversiae"
  }, 
  [
   "1", 
   "65", 
   "(Seneca philosophus, rhetoris filius)", 
   ""
  ]
 ], 
 "AVELL.": [
  "", 
  {
   "app.": "appendices editioni collectionis Avellanae aliunde additae", 
   "collectio Avellana q. d., qua continentur fere epistulae imperatorum pontificum (maxime Romanorum) aliorum aut latine conscriptae aut e graeco versae": "collectio Avellana q. d., qua continentur fere epistulae imperatorum pontificum (maxime Romanorum) aliorum aut latine conscriptae aut e graeco versae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCIP. MIN.": [
  "P. Cornelius Scipio Aemilianus Africanus minor", 
  {
   "or. frg. Isid. orig.": "orationum fragmenta, e. g. fragm. servatum apud ISID. orig."
  }, 
  [
   "-185", 
   "-129", 
   "", 
   ""
  ]
 ], 
 "GAV. BASS.": [
  "Gavius Bassus", 
  {
   "Gell.": "operis de origine verborum et vocabulorum fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "GAIVS": [
  "Gaius", 
  {
   "dig.": "fragmenta operum (praeter inst.) in digesta servata", 
   "inst.": "institutiones", 
   "[epit.]": "[epit.]"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "TVRN.": [
  "Turnus", 
  {
   "sat. frg.": "saturarum fragm."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "[PS. THEOD.]": [
  "", 
  {
   "[hom.]": "homiliarum 5 et 6 Theodoto episcopo Ancyrano ascriptarum versio latina"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMMENT.": [
  "", 
  {
   "augur. Varro ling.": "commentariorum auguralium fragmentum, quod servavit VARRO ling.", 
   "in Don. gramm. V": "fragmenta, quae e commentariis in Donatum servatis in codicibus excerpsit Keil, vol. V", 
   "quaestor. Varro ling.": "commentarii anquisitionis Sergii quaestoris fragmenta, quae servavit VARRO ling.", 
   "cons. Varro ling.": "commentariorum consularium fragmentum, quod servavit VARRO ling.", 
   "Lucan.": "Lucani commenta Bernensia q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. VARRO": [
  "Pseudo-Varro", 
  {
   "sent.": "sententiae"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "CALV.": [
  "C. Licinius Macer Calvus", 
  {
   "carm. frg.": "carminum fragmenta", 
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "-82", 
   "-47", 
   "", 
   ""
  ]
 ], 
 "EVSEB. MED.": [
  "Eusebius <Mediolanensis>", 
  {
   "epistula ad Leonem Magnum": "epistula ad Leonem Magnum"
  }, 
  [
   "400", 
   "475", 
   "episcopus", 
   ""
  ]
 ], 
 "AVIEN.": [
  "Rufius Festus Avien(i)us", 
  {
   "orb. terr.": "orbis terrae descriptio", 
   "carm. ad Flav.": "carmen ad Flavianum Myrmeicum", 
   "carm. ad Nort.": "carmen de se ad deam Nortiam", 
   "Arat.": "Arati Phain\u00f3mena latine versa et retractata", 
   "ora": "de ora maritima"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "ARRVNT.": [
  "L. Arruntius", 
  {
   "hist.": "belli Punici historiarum fragmenta"
  }, 
  [
   "-100", 
   "-1", 
   "cos. 22?", 
   ""
  ]
 ], 
 "THEOPHIL. ALEX.": [
  "Theophilus Alexandrinus", 
  {
   "praef.": "praefatio in computum paschalem (de observatione sanctae paschae)", 
   "epist.": "epistula ad imp. Theodosium"
  }, 
  [
   "350", 
   "412", 
   "episcopus", 
   ""
  ]
 ], 
 "IVL. HON.": [
  "Iulius Honorius", 
  {
   "cosmogr.": "cosmographia, sc. explanatio orbis terrarum depicti a discipulo quodam edita"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "LVCIL.": [
  "C. Lucilius", 
  {
   "saturarum fragmenta": "saturarum fragmenta"
  }, 
  [
   "-180", 
   "-103", 
   "", 
   ""
  ]
 ], 
 "RVST. HELP.": [
  "Rustic(i)us Helpidius (Domnulus)", 
  {
   "benef.": "carmen de Christi Iesu beneficiis", 
   "hist. testam.": "historiarum testamenti veteris et novi tristicha"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PELAG.": [
  "scripta nonnulla Pelagio haeretico tributa", 
  {
   "[in Rom. prol.]": "[in Rom. prol.]", 
   "frg. Migne suppl. 1": "operum deperditorum fragm. apud Migne suppl. 1", 
   "Aug. grat. Christ.": "operum deperditorum fragmenta apud scriptores servata, e. g. fragm. servatum apud AVG. grat. Christ.", 
   "in Rom.": "expositio in epistulam Pauli ad Romanos", 
   "epist. ad Demetr.": "epistula ad Demetriadem", 
   "[in I Cor. argum.]": "[in I Cor. argum.]", 
   "[in Tit. argum.]": "[in Tit. argum.]", 
   "[indur.]": "[indur.]", 
   "[argum.]": "[argum.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PRAEF. bibl. in epist. Paul."
  ]
 ], 
 "LICENT.": [
  "Licentius", 
  {
   "carm. ad Aug.": "carmen ad Augustinum"
  }, 
  [
   "370", 
   "450", 
   "Augustini familiaris", 
   ""
  ]
 ], 
 "POLYCARP.": [
  "Polycarpus", 
  {
   "ad Philipp.": "epistula ad Philippenses latine versa"
  }, 
  [
   "69", 
   "155", 
   "episcopus Smyrnaei", 
   ""
  ]
 ], 
 "CATVLL.": [
  "C. Valerius Catullus Veronensis", 
  {
   "carmina": "carmina"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "BALB.": [
  "L. Cornelius Balbus Gaditanus (sc. maior)", 
  {
   "ad Ciceronem epistulae": "ad Ciceronem epistulae"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[ZACCH.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "CONSVLT. Zacch."
  ]
 ], 
 "SVLP. ALEX.": [
  "Sulpicius Alexander", 
  {
   "Greg. Tur. Franc.": "historia, fragm. servatum apud GREG. TVR. Franc."
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "DIOSC. $1": [
  "Dioscorus", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "CASSIVS": [
  "Cassius quidam (Cassius Severus?)", 
  {
   "verba servata apud QVINT. inst.": "verba servata apud QVINT. inst."
  }, 
  [
   "-50", 
   "32", 
   "", 
   ""
  ]
 ], 
 "MART. BRAC.": [
  "Martinus <Bracarensis>", 
  {
   "form. vit.": "formula vitae honestae (sequitur Martinus Senecam philosophum)", 
   "superb.": "de superbia", 
   "pasch.": "de pascha", 
   "humil.": "exhortatio humilitatis", 
   "epitaph.": "epitaphium Martini Bracarensis", 
   "sent. patr.": "sententiae patrum Aegyptiorum e graeco collectae et versae", 
   "iact.": "pro repellenda iactantia", 
   "canon.": "canones quorundam conciliorum maximam partem e graeco versi, quos Martinus collegit et retractavit", 
   "refect.": "versus in refectorio", 
   "ira": "de ira", 
   "in bas.": "versus in basilica sancti Martini Turonensis", 
   "corr.": "de correctione rusticorum (epistula ad Polemium)", 
   "trin. mers.": "de trina mersione"
  }, 
  [
   "510", 
   "589", 
   "episcopus primo Dumiensis, postea Bracarensis in Gallaecia", 
   ""
  ]
 ], 
 "PS. OROS.": [
  "Pseudo-Orosius", 
  {
   "epist.": "epistula ad Augustinum de haeresibus"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "TREBAT.": [
  "C. Trebatius Testa", 
  {
   "Gell.": "de religionibus, de civili iure al. , fragmenta, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-84", 
   "4", 
   "", 
   ""
  ]
 ], 
 "COMPVT.": [
  "", 
  {
   "a. 452 chron. I": "computatio anni 452, vol. I", 
   "Carth.": "computus Carthaginiensis q. d. (de ratione paschae)", 
   "prol.": "prologus Coloniensis q. d. (exstat etiam in cod. Oxoniensi)", 
   "cod. Ambr.": "computi paschalis fragmentum codice Ambrosiano servatum (pertinet ad supputationem Romanam q. d.)", 
   "cod. Col.": "computorum paschalium fragmenta codice Coloniensi servata (pertinent ad supputationem Romanam q. d.)", 
   "frg.": "fragmenta Coloniensia q. d."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCENS.": [
  "", 
  {
   "Is.": "ascensio Isaiae apocrypha, fragmenta versionis latinae antiquae (exstant 2,14\u20143,13. 7,1\u201419)"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "BASIL.": [
  "Basilius Magnus", 
  {
   "hom.": "homiliae duae codicis Paris", 
   "[ad fil.]": "[ad fil.]", 
   "ad mon.": "admonitio ad monachos"
  }, 
  [
   "330", 
   "379", 
   "", 
   "PS. BASIL. ad fil."
  ]
 ], 
 "SVBSCR.": [
  "", 
  {
   "Verg. cod. M": "subscriptiones in codicibus antiquis, e. g. in codice Vergiliano Mediceo"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GVNDOB.": [
  "Gundobadus", 
  {
   "Alc. Avit. epist.": "epistula ad Alcimum Avitum"
  }, 
  [
   "474", 
   "516", 
   "Burgundionum rex", 
   ""
  ]
 ], 
 "EDICT.": [
  "", 
  {
   "praet.": "edicta praetorum", 
   "Gunthr.": "edictum Gunthramni regis Francorum", 
   "de salut. et sport. Num. (CIL VIII 17896)": "edictum Vlpii Marisciani consularis provinciae Numidiae de ordine salutationis sportularumque", 
   "dig.": "fragmenta a scriptoribus vel in collectionibus tradita, e. g. fragm. servatum DIG.", 
   "Childeb.": "fragmentum edicti Childeberti I regis Francorum", 
   "procos. (Inscr. Ephes. Wankel 19A)": "edicta proconsulum, e. g. Paulli Fabii Persici procos. Asiae", 
   "praef. urb. (CIL VI 1770)": "edictum Turcii Aproniani praefecti urbis de pecoribus vendendis", 
   "Caes. Oct. (Chart. lat. ant. X 416)": "edictum Caesaris Octaviani triumviri de privilegiis veteranorum", 
   "Aug. (CIL X 4842)": "Augusti de aquaeductu Venafrano", 
   "Diocl.": "Diocletiani aliorumque de pretiis rerum venalium; exstant fragmenta latina et graeca", 
   "de camp. Esquil. (CIL I2 839)": "edictum L. Sentii C. f. praetoris de campo Esquilino", 
   "imp.": "edicta imperatorum (exempla selecta)", 
   "Carac. (Inscr. Maroc. Gascou 100)": "Caracallae", 
   "inc. (Chart. lat. ant. X 415)": "incerti de temporibus accusationum", 
   "Theodor.": "edictum Theodorici q. d., sc. Theoderico Magno ascriptum (rectene?)", 
   "Hunir. Vict. Vit.": "edicta Hunirici (Hunerici) regis Vandalorum", 
   "Aur. dig.": "M. Aurelii edictum servatum DIG.", 
   "leg. pr. pr. (Ann\u00e9e \u00c9pigr. 1976 n. 653)": "edicta legatorum pro praetore, e. g. Sex. Sotidii Strabonis Libuscidiani de cursu publico", 
   "aed. cur. Gell.": "edictum aedilium curulium, fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "cens. de rhet. Suet. rhet.": "edictum censorum de rhetoribus traditum apud SVET. rhet.", 
   "Iust. de fide": "Iustiniani edictum de recta fide (a. 551) e graeco versum", 
   "reg. Goth. de pecor. (CIL IX 2826)": "edictum regis Gothorum de pecoribus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ROMVL.": [
  "Romulus (fiktiver Verfasser)", 
  {
   "Aesopus latinus": "Aesopus latinus", 
   "epist. Romul.": "epistula Romuli", 
   "epist. Aesop.": "epistula Aesopi", 
   "fab. 98,6 rec. vet.": "fabula 98 \u00a76 recensionis veteris"
  }, 
  [
   "399", 
   "499", 
   "", 
   ""
  ]
 ], 
 "ANON.": [
  "anonymus", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum", 
   "de decem virg.": "quaestionum de euangeliis fragmentum de decem virginibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TVBERO": [
  "Q. Aelius Tubero", 
  {
   "Gell.": "ad C. Oppium libri fragm. servatum apud GELL.", 
   "hist.": "historiae"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "RHET.": [
  "", 
  {
   "Her.": "rhetorica ad C. Herennium", 
   "min.": "rhetores latini minores ab Halm collecti"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. NICET.": [
  "", 
  {
   "pasch.": "operis de ratione paschae recensio A"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENOL.": [
  "", 
  {
   "Colot. Dec. (Inscr. Ital. XIII 2 p. 290)": "menologium sive kalendarium rusticum Colotianum, sc. ad mensem Decembrem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[DECRET.]": [
  "", 
  {
   "colleg. inc. Pol.": "colleg. inc. Pol.", 
   "colleg. fam. Simitth.": "colleg. fam. Simitth."
  }, 
  [
   "", 
   "", 
   "", 
   "DECRET. dendr. Pol."
  ]
 ], 
 "PS. PHOC.": [
  "Pseudo-Phocas", 
  {
   "gramm.": "de aspiratione liber"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVPPL.": [
  "", 
  {
   "Lucan.": "supplementum ad ADNOT. Lucan., scholion in LVCAN."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COSMOGR.": [
  "", 
  {
   "cosmographia anon. (Aethico in libris recentioribus tributa)": "cosmographia anon. (Aethico in libris recentioribus tributa)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DICTVM": [
  "", 
  {
   "dicta clarorum virorum a scriptoribus servata, e. g. Ciceronis dictum apud QVINT. inst.": "dicta clarorum virorum a scriptoribus servata, e. g. Ciceronis dictum apud QVINT. inst."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VEG.": [
  "P. (Flavius) Vegetius Renatus", 
  {
   "mil.": "epitoma rei militaris", 
   "mulom.": "digesta artis mulomedicinae"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PS. VERG.": [
  "", 
  {
   "Aen.": "versus Vergilii Aeneidos libro 1 praefixi"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "AVX.": [
  "Auxentius", 
  {
   "Maximin. c. Ambr.": "epistulae de Vlfila episcopo quae exstant", 
   "Hil. c. Aux.": "epistula ad imperatores Valentinianum et Valentem"
  }, 
  [
   "400", 
   "499", 
   "episcopus Durostorensis Arianus", 
   ""
  ]
 ], 
 "VEL.": [
  "Velius Longus", 
  {
   "gramm.": "de orthographia"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "BELL.": [
  "", 
  {
   "Hisp.": "de bello Hispaniensi", 
   "Alex.": "de bello Alexandrino", 
   "Afr.": "de bello Africo"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GRILL.": [
  "Grillius", 
  {
   "rhet.": "commentarii in CIC. inv. quae exstant", 
   "frg. Courc.": "fragmentum a Courcelle Grillio ascriptum"
  }, 
  [
   "400", 
   "499", 
   "scriptor rhetoricus", 
   ""
  ]
 ], 
 "CONSVL.": [
  "", 
  {
   "Constant. chron. I": "consularia Constantinopolitana vel Hydatiana q. d. (e partibus alias alibi scriptis composita; recensio nondum decurtata versa est graece), vol. I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CINNA": [
  "C. Helvius Cinna", 
  {
   "carm.": "carmina"
  }, 
  [
   "-100", 
   "-44", 
   "", 
   ""
  ]
 ], 
 "CIRIS": [
  "", 
  {
   "Ciris, carmen appendicis Vergilianae": "Ciris, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CELS.": [
  "Pseudo-Celsus", 
  {
   "epist.": "epistula ad Pullium Natalem"
  }, 
  [
   "-25", 
   "50", 
   "", 
   ""
  ]
 ], 
 "FAV.": [
  "Favorinus", 
  {
   "orationis fragm. servatum apud GELL.": "orationis fragm. servatum apud GELL."
  }, 
  [
   "50", 
   "150", 
   "quidam vetus orator (de nomine certatur)", 
   ""
  ]
 ], 
 "NERO": [
  "imp. Nero", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "37", 
   "68", 
   "", 
   ""
  ]
 ], 
 "PS. PACIAN.": [
  "PS.-Pacianus", 
  {
   "sim. carn.": "liber de similitudine carnis peccati"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VLT. SYLL.": [
  "", 
  {
   "de ultimis syllabis liber ad Caelestinum": "de ultimis syllabis liber ad Caelestinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLIN.": [
  "Apollinaris <Valentinus>", 
  {
   "epistulae ad Alcimum Avitum": "epistulae ad Alcimum Avitum"
  }, 
  [
   "453", 
   "520", 
   "Valentiae episcopus frater Aviti", 
   ""
  ]
 ], 
 "GERM.": [
  "Germanicus Caesar", 
  {
   "Aratea q. d. (sunt, qui opus ei abiudicent)": "Aratea q. d. (sunt, qui opus ei abiudicent)"
  }, 
  [
   "-25", 
   "19", 
   "", 
   ""
  ]
 ], 
 "PS. HOS.": [
  "", 
  {
   "sent.": "sententiae (doctrina) de observatione disciplinae dominicae Hosio (Ossio) episcopo suppositae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VLP.": [
  "Domitius Vlpianus", 
  {
   "reg.": "liber singularis regularum", 
   "dig.": "fragmenta in digestis aliisve collectionibus servata", 
   "frg. Spicil. Solesm. I": "fragmenta varia, e. g. fragm. editum apud Pitra, Spicilegium Solesmense I", 
   "frg. Vind.": "institutionum fragmenta Vindobonensia", 
   "disp. frg. IIB": "disputationum fragmenta Argentoratensia"
  }, 
  [
   "150", 
   "228", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "EPIPHAN.": [
  "Epiphanius", 
  {
   "in euang.": "interpretatio euangeliorum (sc. Matth., Marc., Luc.)", 
   "[in cant.]": "[in cant.]", 
   "Avell.": "operis de XII gemmis rationalis summi sacerdotis epitoma latina (ne graecum quidem opus integrum exstat) magna ex parte servata in collect. Avellana", 
   "de mensur.": "de mensuris et ponderibus quae latine exstant"
  }, 
  [
   "", 
   "", 
   "episcopus quidam latinus", 
   ""
  ]
 ], 
 "[GLOSS.] $2": [
  "", 
  {
   "[Suet.]": "[Suet.]"
  }, 
  [
   "", 
   "", 
   "", 
   "SCHOL. Suet."
  ]
 ], 
 "CORNVT.": [
  "L. Annaeus Cornutus", 
  {
   "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud GELL.": "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "SECVNDIN.": [
  "Secundinus Manichaeus", 
  {
   "epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[GLOSS.] $1": [
  "", 
  {
   "[med. ed. Heiberg]": "[med. ed. Heiberg]"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. AVG.": [
  "Pseudo-Augustinus", 
  {
   "or. trin.": "oratio in librum de trinitate", 
   "solut.": "solutiones diversarum quaestionum ab haereticis (sc. Arianis) obiectarum", 
   "sent.": "liber sententiarum XXI", 
   "[dial. quaest.]": "dialogus quaestionum", 
   "alterc.": "altercatio ecclesiae et synagogae", 
   "c. Fulg.": "contra Fulgentium Donatistam", 
   "[temp. barb.]": "[temp. barb.]", 
   "orat.": "sermo de oratione et eleemosyna", 
   "c. Felician.": "contra Felicianum Arianum de unitate trinitatis", 
   "reg.": "regulae monasticae", 
   "[catacl.]": "[catacl.]", 
   "frg. Migne": "fragmenta operis cuiusdam de unitate patris et filii et spiritus sancti servata ab Hincmaro", 
   "serm.": "sermones Augustino suppositi, qui ante a. 600 ab anonymis conscripti sunt", 
   "symb. Caspari Anecd.": "expositio super symbolum", 
   "[de esu agni]": "sermo de esu agni", 
   "epist. app.": "epistularum spuriarum appendix", 
   "[de Rustic.]": "sermo de Rusticiano subdiacono", 
   "quaest. test.": "quaestionum veteris et novi testamenti conscriptarum ab AMBROSIAST. recensiones duae (utraque contaminata; recensio q. d. tertia medii est aevi)", 
   "[de IV. fer.]": "[de IV. fer.]", 
   "[neoph. 4 ]": "ad neophytos sermones 2\u20144", 
   "[carit.]": "sermonis de caritate fragmentum", 
   "[neoph. 1]": "ad neophytos sermo primus", 
   "un. trin.": "de unitate sanctae trinitatis", 
   "[in Matth.]": "[in Matth.]", 
   "spec.": "de divinis scripturis sive speculum (incipit: In deuteronomio: audi Israhel, dominus deus tuus)", 
   "hypomn.": "hypomnesticon (vulgo hypognosticon) contra Pelagianos sive Caelestianos haereticos", 
   "praed. dei": "de praedestinatione dei", 
   "haer. app.": "appendix Augustini operis genuini de haeresibus", 
   "test. fid.": "testimonia fidei", 
   "[c. Iud. pag. Ar.]": "[c. Iud. pag. Ar.]", 
   "[in apoc.]": "[in apoc.]", 
   "comm.": "commonitorium, quomodo sit agendum cum Manichaeis qui convertuntur", 
   "[eleem.]": "sermo de generalitate eleemosynarum", 
   "categ.": "categoriae decem ex Aristotele decerptae vel tractatus de categoriis Aristotelis (paraphrasis q. d. Themistiana)", 
   "vit. christ.": "de vita christiana (Pelagii?)", 
   "praed. et grat.": "de praedestinatione et gratia", 
   "coll. c. Pasc.": "collatio cum Pascentio Ariano", 
   "[haer.]": "[haer.]", 
   "[symb.]": "[symb.]", 
   "[cant. nov.]": "[cant. nov.]", 
   "cons. mort.": "sermones de consolatione mortuorum", 
   "sobr.": "de sobrietate et castitate"
  }, 
  [
   "1050", 
   "1150", 
   "", 
   ""
  ]
 ], 
 "CAVTIO": [
  "", 
  {
   "Phaonis": "cautio L. Domitii Phaonis"
  }, 
  [
   "", 
   "", 
   "", 
   "(CIL X 444)"
  ]
 ], 
 "CARM.": [
  "", 
  {
   "de fig.": "de figuris vel schematibus", 
   "de Alcest.": "de Alcestide (= Pap. Barcinon. inv. n. 158\u2014161)", 
   "de aegr. Perd.": "de aegritudine Perdicae", 
   "[de alphab.]": "versus cuiusdam Scoti de alphabeto (vel versus de nominibus litterarum)", 
   "devot. Macr. Sat.": "carmen devotionis, sc. formula 'in cuiusdam Furii vetustissimo libro' reperta, qua urbes exercitusque devoventur, servata apud MACR. Sat.", 
   "pop. Suet. Iul.": "versus populares, quot Morel ita nominavit, e. g. versus servati apud SVET. Iul.", 
   "laud. dom.": "laudes domini", 
   "app. Maxim.": "carmina appendicis Maximiniani q. d. (sc. tradita una cum MAXIM. eleg.)", 
   "Fronto": "versus (?), quem servavit FRONTO", 
   "de sept. sap.": "de septem sapientibus (carmen servatum apud HYG. fab. 221,2, quem auctorem olim addebamus)", 
   "[in Plaut.]": "carmina sepulcralia in Plautum et al. facta", 
   "de pond.": "de ponderibus et mensuris", 
   "de mens.": "carmina tria de mensibus", 
   "pass. dom.": "de passione domini (carmen aut Lactantio aut Cypriano suppositum, quod aliquamdiu spernebamus)", 
   "de bell. Aeg.": "de Augusti bello Aegyptiaco vel Actiaco (fragmenta Herculanensia interdum Rabirio ascripta)", 
   "cod. Petav.": "carmina (sc. epigraphica) fere codice Petaviano (Paris. lat. 2832) servata", 
   "c. pag.": "contra paganos (vel contra Flavianum)", 
   "evoc. Macr. Sat.": "carmen evocationis, sc. formula 'in cuiusdam Furii vetustissimo libro' reperta, qua di ex urbe oppugnata evocantur, servata apud MACR. Sat.", 
   "de Sod.": "de Sodoma (carmen in codicibus aut Tertulliano aut Cypriano suppositum, ab eodem poeta conscriptum ac CARM. de Iona)", 
   "ad senat.": "ad quendam senatorem (carmen in codicibus Cypriano suppositum)", 
   "Arv. (CE 1)": "carmen Arvale (= Act. Arv. a. 218 [CIL VI 2104] a 32sqq.)", 
   "de Iona": "de Iona (carmen in codicibus aut Tertulliano aut Cypriano suppositum, ab eodem poeta conscriptum ac CARM. de Sod.)", 
   "Sibyll.": "carmen Sibyllinum, quod incipit a verbis 'Mundus origo mea est'", 
   "de pascha": "de pascha (vel de ligno crucis; carmen in codicibus praecipue Cypriano suppositum)", 
   "Priami Varro ling.": "carminis Priami fragmentum, quod servavit VARRO ling.", 
   "[inc. 41 (Quint. inst. 9,2,26)]": "inter incertorum versus a Morel collectos fragm. 41 servatum apud QVINT. inst. 9,2,26", 
   "[poet. min. V 71,10]": "inter carmina a Baehrens (PLM) collecta carm. 71 vol. V editum vers. 10", 
   "Nelei Fest.": "carminis Nelei q. d. (tragoediae?) fragmenta a scriptoribus servata, e. g. fragm. apud FEST", 
   "Sal. Varro ling.": "carminum Saliarium fragmenta, e. g. fragm., quod servavit VARRO ling.", 
   "adv. Marc.": "adversus Marcionem vel Marcionitas (carmen Tertulliano suppositum)", 
   "de resurr.": "de resurrectione mortuorum et de iudicio domini (carmen in codicibus Cypriano aut Tertulliano suppositum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORAC.": [
  "", 
  {
   "Sibyll.": "oraculorum Sibyllinorum versiones lat. variae varie traditae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LECT.": [
  "", 
  {
   "eccl. cod. Fuld.": "index lectionum ecclesiasticarum ex epistulis Paulinis sumptarum, quem Victor Capuanus ex titulis marginalibus compositum codici Fuldensi addidit"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DARES": [
  "Dares Phrygius", 
  {
   "de excidio Troiae historia e graeco (quod periit) versa atque retractata": "de excidio Troiae historia e graeco (quod periit) versa atque retractata"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "OP.": [
  "Arianus qu\u012bdam???", 
  {
   "imperf. in Matth.": "opus imperfectum in Matthaeum, quod Iohannis Chrysostomi nomine traditum est (vix e graeco versum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "INST.": [
  "", 
  {
   "aliment. (CIL II 1174)": "institutio alimentaria Hispalensis", 
   "de inst. promulg.": "constitutio 'Imperatoriam' (const. de institutionibus promulgandis)", 
   "Iust.": "institutiones Iustiniani Augusti, sc. iuris elementa vel praecepta iussu Iustiniani a Theophilo al. composita"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STAT.": [
  "P. Papinius Statius", 
  {
   "Theb.": "Thebais", 
   "Ach.": "Achilleis", 
   "bell. Germ. frg.": "de bello Germanico fragm.", 
   "silv.": "silvae", 
   "eccl. ant.": "statuta ecclesiae antiqua"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SORAN.": [
  "Soranus", 
  {
   "app.": "appendix de pessariis", 
   "gynaecia a Mustione latine versa": "gynaecia a Mustione latine versa"
  }, 
  [
   "50", 
   "150", 
   "medicus", 
   ""
  ]
 ], 
 "FORTVN. $1": [
  "Consult(i)us Fortunatianus", 
  {
   "rhet.": "ars rhetorica"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "ABK\u00fcRZUNG TLL": [
  "Name", 
  {
   "Abk\u00fcrzung Werk": "Werk", 
   "Unterwerke - Abk\u00fcrzung": "Unterwerke"
  }, 
  [
   "Datierung: start_year", 
   "Datierung: end_year", 
   "Notizen", 
   "Zusatz"
  ]
 ], 
 "VIB. CRISP.": [
  "Q. Vibius Crispus", 
  {
   "or. frg. Quint. inst.": "orationum fragmenta, e. g. fragm. servatum apud QVINT. inst."
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "BREV.": [
  "", 
  {
   "de Hier.": "breviarius de Hierosolyma"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPICED.": [
  "", 
  {
   "Drusi": "epicedion Drusi vel consolatio ad Liviam (carmen Ovidio perperam adscriptum)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARIS": [
  "Iulius Paris", 
  {
   "epitome Valerii Maximi": "epitome Valerii Maximi"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "M'. MANIL.": [
  "M'. Manilius", 
  {
   "Varro rust.": "fragm. quod servavit VARRO rust."
  }, 
  [
   "-200", 
   "-100", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[EPIST.]": [
  "", 
  {
   "[Arr. ad Euseb.]": "[Arr. ad Euseb.]"
  }, 
  [
   "", 
   "", 
   "", 
   "ARIVS ad Euseb. vers. g"
  ]
 ], 
 "LYDIA": [
  "Lydia", 
  {
   "carmen appendicis Vergilianae": "carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[MYTHOGR.]": [
  "", 
  {
   "mythographi Vaticani": "mythographi Vaticani"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GALEN.": [
  "Gal(i)enus", 
  {
   "alfab.": "alfabetum q. d. ad Patern(ian)um (inscribitur etiam liber pigmentorum, de qualitate herbarum aromatum seu animalium, Galeni de simplicibus medicinis ad Paternianum, al. )"
  }, 
  [
   "129", 
   "215", 
   "", 
   ""
  ]
 ], 
 "HOS. GETA": [
  "Hosidius Geta", 
  {
   "Med.": "Medea tragoedia (cento Vergilianus)"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "VICTRIC.": [
  "Victricius", 
  {
   "de laude sanctorum": "de laude sanctorum"
  }, 
  [
   "340", 
   "407", 
   "episcopus Rotomagensis", 
   ""
  ]
 ], 
 "PROCL.": [
  "Proclus", 
  {
   "laud. Mar.": "oratio de laudibus Mariae latine versa"
  }, 
  [
   "390", 
   "447", 
   "episcopus Constantinopolis", 
   ""
  ]
 ], 
 "EVANTH.": [
  "Euanthius", 
  {
   "de com.": "de comoedia vel de fabula"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "PS. CATO": [
  "Pseudo-Cato", 
  {
   "monost.": "monosticha", 
   "praef.": "praefatio (epistula)", 
   "dist.": "disticha (sc. hexametrorum paria) vel dicta Catonis", 
   "Mus.": "de Musis", 
   "brev. sent.": "breves sententiae"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "SERV.": [
  "Servius", 
  {
   "vita Verg.": "vita Vergilii", 
   "gramm.": "scripta grammatica varia", 
   "auct. ...": "additamenta alterius recensionis (maxime ex Ael. Donato suppletae, ut vid.), quae Servius Danielis sive auctus vocatur", 
   "Aen.": "commentarius in Vergilii opera"
  }, 
  [
   "350", 
   "450", 
   "grammaticus", 
   ""
  ]
 ], 
 "NON.": [
  "Nonius Marcellus", 
  {
   "de compendiosa doctrina": "de compendiosa doctrina"
  }, 
  [
   "250", 
   "350", 
   "ex Africa Thubursicensis", 
   ""
  ]
 ], 
 "ARATOR": [
  "Arator", 
  {
   "ad Parth.": "epistula ad Parthenium", 
   "ad Flor.": "epistula ad Florianum", 
   "act.": "historia apostolica (de actibus apostolorum)", 
   "ad Vigil.": "epistula ad Vigilium papam"
  }, 
  [
   "450", 
   "550", 
   "poeta", 
   ""
  ]
 ], 
 "CAECIL.": [
  "Caecilius Statius Insuber Gallus", 
  {
   "com.": "comoediarum (sc. palliatarum) fragmenta"
  }, 
  [
   "-220", 
   "-168", 
   "", 
   ""
  ]
 ], 
 "SYAGR.": [
  "Syagrius Gallaeciae", 
  {
   "reg.": "regulae definitionum prolatae contra haereticos"
  }, 
  [
   "400", 
   "487", 
   "episcopus", 
   ""
  ]
 ], 
 "COLVM.": [
  "L. Iunius Moderatus Columella", 
  {
   "arb.": "de arboribus", 
   "de re rustica": "de re rustica"
  }, 
  [
   "0", 
   "99", 
   "ex Hispania Baetica Gaditanus", 
   ""
  ]
 ], 
 "SAB.": [
  "Mas(s)urius Sabinus", 
  {
   "dig.": "fragmenta in digesta servata", 
   "Gell.": "fragmenta varia, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-50", 
   "50", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "IREN.": [
  "Irenaeus", 
  {
   "opus adversus haereses (sc. gnosticas) e graeco versum": "opus adversus haereses (sc. gnosticas) e graeco versum"
  }, 
  [
   "135", 
   "200", 
   "episcopus Lugdunensis", 
   ""
  ]
 ], 
 "OPPIVS": [
  "Oppius", 
  {
   "Macr. Sat.": "de silvestribus arboribus librum, fragmenta servata apud MACR. Sat."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVLPICIA": [
  "Sulpicia", 
  {
   "carm. frg.": "carminum fragm.", 
   "Tib.": "elegiae una cum TIB. traditae", 
   "sat.": "satira q. d. sive conquestio de statu rei publicae et temporibus Domitiani"
  }, 
  [
   "-100", 
   "-1", 
   "Dichterin im Corpus Tibullianum", 
   ""
  ]
 ], 
 "MEMM.": [
  "C. Memmius", 
  {
   "carm. frg.": "carminum fragmentum", 
   "or. frg. Prisc. gramm. II": "orationum fragmenta a scriptoribus servata"
  }, 
  [
   "-150", 
   "-99", 
   "praet. 104.", 
   ""
  ]
 ], 
 "TITIVS": [
  "C. Titius", 
  {
   "or. frg. Macr. Sat.": "fragm. orationis de lege Fannia servatum apud MACR. Sat."
  }, 
  [
   "-200", 
   "-100", 
   "", 
   ""
  ]
 ], 
 "COLLECT.": [
  "", 
  {
   "c. pag.": "contra paganos", 
   "Arian.": "collectio Ariana codicis Veronensis LI (scripti fere 500)", 
   "A 150": "Africana series, ad psalm. 150", 
   "ad psalm.": "collectae, i. orationes dictae ad (sc. post) singulos psalmos", 
   "c. Iud.": "contra Iudaeos", 
   "R 150": "Romana series, ad psalm. 150", 
   "hom.": "homiliae vel homiliarum fragmenta (de lectionibus sanctorum euangeliorum; collectae sunt e variis scriptoribus)", 
   "serm.": "sermones (sc. de sollemnitatibus)", 
   "nom. apost.": "de nominibus apostolorum (opusculum in fronte mutilum; e graeco versum?)", 
   "H 134": "Hispana series, ad psalm. 134", 
   "c. haer.": "contra haereticos (i. orthodoxos)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VERGIN.": [
  "L. Verginius Rufus", 
  {
   "epigr.": "epigramma"
  }, 
  [
   "14", 
   "97", 
   "", 
   ""
  ]
 ], 
 "HIL. AREL.": [
  "Hilarius Arelatensis", 
  {
   "epist. ad Eucher.": "epistula ad Eucherium episcopum Lugdunensem", 
   "vita Honorat.": "sermo de vita Honorati episcopi Arelatensis"
  }, 
  [
   "401", 
   "449", 
   "episcopus", 
   ""
  ]
 ], 
 "LIC. RVF.": [
  "(M. Cn.) Licin(n)ius Rufinus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "185", 
   "235", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "HILARIAN.": [
  "Q. Iulius Hilarianus", 
  {
   "curs. temp.": "pars posterior, sc. de cursu temporum (de mundi duratione)", 
   "pasch.": "pars prior, sc. de die paschae et mensis"
  }, 
  [
   "350", 
   "420", 
   "episcopus Africanus", 
   ""
  ]
 ], 
 "COMMON.": [
  "", 
  {
   "patr.": "commonitiones sanctorum patrum (sc. monachorum) e graeco versae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[ROG.]": [
  "", 
  {
   "[de Germ.]": "[de Germ.]"
  }, 
  [
   "", 
   "", 
   "", 
   "LEX de Germ."
  ]
 ], 
 "ASTER.": [
  "Asterius", 
  {
   "ad Renat.": "liber ad Renatum monachum"
  }, 
  [
   "350", 
   "431", 
   "episcopus Hieronymi familiaris", 
   ""
  ]
 ], 
 "BREV. EXPOS.": [
  "", 
  {
   "Verg. georg.": "brevis expositio Vergilii georgicorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. PELL.": [
  "Paulinus Pellaeus", 
  {
   "praef.": "praefatio", 
   "orat.": "oratio", 
   "[praef.]": "[praef.]", 
   "euch.": "carmen, Eucharisticos deo sub ephemeridis meae textu"
  }, 
  [
   "376", 
   "459", 
   "", 
   ""
  ]
 ], 
 "PS. ASPER": [
  "Pseudo-Asper (Aemilius Asper?)", 
  {
   "suppl.": "ars edita in supplemento Grammaticorum latinorum", 
   "artes grammaticae": "artes grammaticae"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "CLAVD.": [
  "Claudius Claudianus", 
  {
   "carm. min": "carmina minora", 
   "carm. min. app.": "carminum minorum appendix (sc. qua spuria vel suspecta continentur)", 
   "rapt. Pros.": "de raptu Proserpinae fragmentum", 
   "carminum maiorum series": "carminum maiorum series"
  }, 
  [
   "370", 
   "404", 
   "", 
   ""
  ]
 ], 
 "CALID.": [
  "M. Calidius", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud FEST.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud FEST."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[FORTVN.]": [
  "", 
  {
   "[in Matth.]": "[in Matth.]"
  }, 
  [
   "", 
   "", 
   "", 
   "FORTVN. AQVIL. in euang."
  ]
 ], 
 "MELA": [
  "Pomponius Mela", 
  {
   "de chorographia": "de chorographia"
  }, 
  [
   "0", 
   "99", 
   "ex Hispania Tingenteritanus", 
   ""
  ]
 ], 
 "[MIRAC.]": [
  "", 
  {
   "[Theclae]": "miracula sanctae Theclae virginis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMPON.": [
  "P. Pomponius Secundus", 
  {
   "praetext.": "fabularum praetextarum fragm. Unicum", 
   "[sat. frg.]": "[sat. frg.]", 
   "reg. frg.": "fragm. quoddam operis incerti (fortasse regularum)", 
   "Atell.": "fabularum Atellanarum fragmenta", 
   "dig.": "fragmenta in digesta servata", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "0", 
   "60", 
   "", 
   ""
  ]
 ], 
 "[EDICT.]": [
  "", 
  {
   "[Ved. Poll.]": "[Ved. Poll.]"
  }, 
  [
   "", 
   "", 
   "", 
   "EDICT. procos."
  ]
 ], 
 "[PS. FAVST. REI.]": [
  "", 
  {
   "[symb.]": "tractatus de symbolo in codice vix recte Fausto vel Faustino tributus"
  }, 
  [
   "500", 
   "599", 
   "", 
   "EVSEB. GALLIC. hom. app."
  ]
 ], 
 "PLAVT.": [
  "Titus Macc(i)us Plautus", 
  {
   "Aul.": "Aulularia", 
   "Cas.": "Casina", 
   "Cist.": "Cistellaria", 
   "Pseud.": "Pseudolus", 
   "frg. inc.": "incertarum fabularum fragmenta", 
   "Truc.": "Truculentus", 
   "Merc.": "Mercator", 
   "Capt.": "Captivi", 
   "Mil.": "Miles gloriosus", 
   "Poen.": "Poenulus", 
   "Vid.": "Vidularia", 
   "Bacch.": "Bacchides", 
   "Curc.": "Curculio", 
   "Men.": "Menaechmi", 
   "Persa": "Persa", 
   "Trin.": "Trinummus", 
   "Epid.": "Epidicus", 
   "Asin.": "Asinaria", 
   "Rud.": "Rudens", 
   "Stich.": "Stichus", 
   "Most.": "Mostellaria", 
   "Amph.": "Amphitruo", 
   "Achar. frg.": "Acharistio (fragmentum)"
  }, 
  [
   "-254", 
   "-184", 
   "", 
   ""
  ]
 ], 
 "LEANDER": [
  "", 
  {
   "reg.": "regula (de institutione virginum et contemptu mundi)", 
   "hom.": "homilia in concilio Toletano III dicta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOVATIAN.": [
  "Novatianus", 
  {
   "Cypr. epist.": "epistulae ad Cyprianum", 
   "cib. Iud.": "de cibis Iudaicis", 
   "trin.": "de trinitate"
  }, 
  [
   "200", 
   "258", 
   "presbyter Romanus", 
   ""
  ]
 ], 
 "CAES. STRAB.": [
  "C. Iulius Caesar Strabo (Vopiscus?)", 
  {
   "trag.": "tragoediarum fragmenta", 
   "orationum fragm. servatum apud PRISC. gramm.": "orationum fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-130", 
   "-87", 
   "", 
   ""
  ]
 ], 
 "[EVG. TOLET.]": [
  "Eugenius <Toletanus>", 
  {
   "[carm.]": "carmina"
  }, 
  [
   "600", 
   "657", 
   "episcopus", 
   ""
  ]
 ], 
 "SVLP. RVF.": [
  "Ser. Sulpicius Rufus", 
  {
   "or. frg. Quint. inst.": "orationis fragm. servatum apud QVINT. inst.", 
   "Cic. fam.": "epistulae ad Ciceronem, v. CIC. fam.", 
   "frg. Gell.": "fragmenta varia, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-106", 
   "-43", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "AFRAN.": [
  "L. Afranius", 
  {
   "com.": "comoediarum (sc. togatarum) fragmenta"
  }, 
  [
   "-150", 
   "-51", 
   "", 
   ""
  ]
 ], 
 "[EXPOS.]": [
  "", 
  {
   "[fid. Migne]": "expositio fidei edita Migne"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[VIGIL.]": [
  "", 
  {
   "[reg.]": "[reg.]"
  }, 
  [
   "", 
   "", 
   "", 
   "REGVLA orient."
  ]
 ], 
 "CHART.": [
  "", 
  {
   "lat. ant.": "chartae latinae antiquiores"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVSEB. GALLIC.": [
  "Eusebius Gallicanus", 
  {
   "app.": "appendix, sc. 'sermones extravagantes, qui eundem ortum habere videntur'", 
   "hom.": "sc. collectio Gallicana homiliarum, quae in nonnullis codicibus variis Eusebiis ascribitur"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "BRVT.": [
  "M. Iunius Brutus", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.", 
   "epistulae servatae inter epistulas Ciceronis ad Brutum datas": "epistulae servatae inter epistulas Ciceronis ad Brutum datas", 
   "epistulae ad Ciceronem, Brutum et Cassium": "epistulae ad Ciceronem, Brutum et Cassium", 
   "de iure civili, fragm. servatum apud CIC. de orat.": "de iure civili, fragm. servatum apud CIC. de orat."
  }, 
  [
   "0", 
   "-101", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CIC. FIL.": [
  "M. Tullius Cicero", 
  {
   "epistulae inter patris epistulas servatae, v. CIC. fam.": "epistulae inter patris epistulas servatae, v. CIC. fam."
  }, 
  [
   "-65", 
   "-1", 
   "M. filius", 
   ""
  ]
 ], 
 "CHILP.": [
  "Chilpericus", 
  {
   "hymn. Medard.": "hymnus in S. Medardum"
  }, 
  [
   "535", 
   "584", 
   "rex Merovingorum", 
   ""
  ]
 ], 
 "[MAXIM.]": [
  "", 
  {
   "[ad Theoph.]": "[ad Theoph.]"
  }, 
  [
   "", 
   "", 
   "", 
   "MAX. epist."
  ]
 ], 
 "ARVS.": [
  "Arusianus Messius", 
  {
   "gramm.": "opus grammaticum, sc. exempla elocutionum ex Vergilio Sallustio Terentio Cicerone digesta per litteras alphabeti"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "OBSEQ.": [
  "Iulius Obsequens", 
  {
   "prodigiorum libri quae exstant": "prodigiorum libri quae exstant"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "NEBRID.": [
  "Nebridius", 
  {
   "Aug. epist.": "epistulae ad Augustinum"
  }, 
  [
   "300", 
   "390", 
   "grammaticus, Augustinus amicus", 
   ""
  ]
 ], 
 "PRISC. LYD.": [
  "Priscianus Lydus", 
  {
   "solut.": "solutionum ad Chosroem liber latine versus"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "CORNIF.": [
  "Cornificius Gallus", 
  {
   "carm. frg.": "carminum fragmenta", 
   "de Verg. Cledon. gramm. V": "versus de Vergilio a CLEDON. gramm. V"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "ACAC.": [
  "Acacius <Constantinopolitanus>", 
  {
   "epist. Ver.": "ad Simplicium papam epistula, cuius versio latina collectione Veronensi servatur"
  }, 
  [
   "400", 
   "489", 
   "Patriarch von Konstantinopel", 
   ""
  ]
 ], 
 "CAEL. AVR.": [
  "Caelius Aurelianus", 
  {
   "diaet. pass.": "de speciali significatione diaeticarum passionum fragmentum", 
   "chron.": "tardae vel chronicae passiones", 
   "acut.": "celeres vel acutae passiones", 
   "gyn. frg.": "fragmenta ('ex libris responsionum de mulieribus') de gynaeciis a Rose collecta", 
   "[acut. exc.]": "excerpta q. d. ex acutarum passionum libris (sc. Aurelius, de acutis passionibus)", 
   "gyn.": "gynaeciorum Sorani e graeco versorum et retractatorum quae exstant", 
   "salut. praec.": "de salutaribus praeceptis q. d. fragmentum (e libris medicinalium responsionum sumptum)"
  }, 
  [
   "350", 
   "450", 
   "medicus methodicus ex Numidia Siccensis", 
   ""
  ]
 ], 
 "APON.": [
  "Ap(p)onius", 
  {
   "in canticum canticorum expositio": "in canticum canticorum expositio"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PS. SALL.": [
  "scripta Sallustii", 
  {
   "rep.": "epistulae ad Caesarem senem de re publica", 
   "in Tull.": "invectiva in M. Tullium Ciceronem"
  }, 
  [
   "-54", 
   "50", 
   "", 
   ""
  ]
 ], 
 "BALB. $1": [
  "Balbus", 
  {
   "grom.": "expositio et ratio omnium formarum"
  }, 
  [
   "50", 
   "150", 
   "gromaticus", 
   ""
  ]
 ], 
 "RETIC.": [
  "Reticius", 
  {
   "Aug. c. Iulian. op. imperf.": "fragmenta"
  }, 
  [
   "250", 
   "350", 
   "episcopus Augustodunensis", 
   "e. g. fragm. servatum apud AVG. c. Iulian. op. imperf."
  ]
 ], 
 "DIONYS.": [
  "Dionysius Halicarnasensis", 
  {
   "ant.": "antiquitatum Romanarum"
  }, 
  [
   "-54", 
   "7", 
   "rhetor et historicus", 
   ""
  ]
 ], 
 "[MON. ANCYR.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "R. GEST. div. Aug."
  ]
 ], 
 "BRVTTED.": [
  "Bruttedius Niger", 
  {
   "hist.": "fragm. operis historici apud SEN. suas. servata"
  }, 
  [
   "-50", 
   "50", 
   "rhetor et historicus", 
   ""
  ]
 ], 
 "PHYSIOGN.": [
  "anonymus", 
  {
   "de physiognomonia liber": "de physiognomonia liber"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VICTOR": [
  "Victor", 
  {
   "Fulg. Rusp. epist.": "epistula ad Fulgentium Ruspensem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PELAGON.": [
  "Pelagonius", 
  {
   "ars veterinaria": "ars veterinaria"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "LVCIF.": [
  "Lucifer", 
  {
   "non conv.": "de non conveniendo cum haereticis", 
   "reg. apost.": "de regibus apostaticis", 
   "moriend.": "moriundum esse pro dei filio", 
   "non parc.": "de non parcendo in deum delinquentibus", 
   "epist. epistulae": "diverse", 
   "Athan.": "de Athanasio"
  }, 
  [
   "300", 
   "371", 
   "episcopus Caralitanus", 
   ""
  ]
 ], 
 "PS. BASS.": [
  "Pseudo-Bassus", 
  {
   "gramm.": "ars de metris"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "HERACL.": [
  "Heraclius", 
  {
   "Alc. Avit. epist.": "epistulae ad Alcimum Avitum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CODICILL.": [
  "", 
  {
   "codicilli C. Popilii Heraclae": "codicilli C. Popilii Heraclae"
  }, 
  [
   "", 
   "", 
   "", 
   "Ann\u00e9e \u00c9pigr. 1945 n. 136"
  ]
 ], 
 "SALL.": [
  "C. Sallustius Crispus", 
  {
   "epist.": "epistulae ex hist. excerptae", 
   "Mithr.": "epist. Mithridatis", 
   "Phil.": "or. Philippi", 
   "Catil.": "de coniuratione Catilinae", 
   "Pomp.": "epist. Cn. Pompei", 
   "Iug.": "de bello Iugurthino", 
   "Macri": "or. Macri trib. pleb.", 
   "or.": "orationes ex hist. excerptae", 
   "Lep.": "or. Lepidi consulis", 
   "hist.": "historiarum reliquiae", 
   "Cottae": "or. C. Cottae"
  }, 
  [
   "-86", 
   "-34", 
   "", 
   ""
  ]
 ], 
 "ALEX. TRALL.": [
  "Alexander <Trallianus>", 
  {
   "operum versio latina cum aliunde aucta tum contracta": "operum versio latina cum aliunde aucta tum contracta"
  }, 
  [
   "525", 
   "606", 
   "medicus graecus", 
   ""
  ]
 ], 
 "CE": [
  "", 
  {
   "carmina latina epigraphica": "carmina latina epigraphica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. PALAEM.": [
  "Q. Remmius Palaemon", 
  {
   "ars": "ars"
  }, 
  [
   "0", 
   "100", 
   "", 
   ""
  ]
 ], 
 "CELERIN.": [
  "Celerinus", 
  {
   "epistula ad Lucianum": "epistula ad Lucianum"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "[HIL. (?)]": [
  "", 
  {
   "[hymn. de Christo]": "[hymn. de Christo]"
  }, 
  [
   "", 
   "", 
   "", 
   "PS. HIL. hymn. de Christo"
  ]
 ], 
 "PRVD.": [
  "Aurelius Prudentius Clemens", 
  {
   "psych.": "psychomachia", 
   "praef.": "praefatio operum", 
   "cath.": "liber cathemerinon", 
   "perist.": "liber peristephanon", 
   "c. Symm.": "contra Symmachum", 
   "apoth.": "apotheosis", 
   "ham.": "hamartigenia", 
   "epil.": "epilogus operum", 
   "[ditt.]": "[ditt.]", 
   "tituli": "tituli historiarum (vulgo 'dittochaeon')"
  }, 
  [
   "348", 
   "405", 
   "", 
   ""
  ]
 ], 
 "AVF. NAM.": [
  "(P.) Aufidius Namusa", 
  {
   "fragm. servatum apud PRISC. gramm.": "fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-100", 
   "-1", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[BREV.]": [
  "", 
  {
   "[fid. adv. Arian.]": "[fid. adv. Arian.]"
  }, 
  [
   "", 
   "", 
   "", 
   "CAES. AREL. brev."
  ]
 ], 
 "APPEND.": [
  "", 
  {
   "Visig.": "appendices duae legis Romanae Visigothorum (i. e. breviarii Alarici)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AQVILA": [
  "Aquila Romanus", 
  {
   "rhet.": "de figuris sententiarum et elocutionis", 
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "200", 
   "299", 
   "rhetor", 
   ""
  ]
 ], 
 "CIC.": [
  "M. Tullius Cicero", 
  {
   "div.": "de divinatione", 
   "rep. frg.": "librorum de re publica incertorum fragm.", 
   "Arch.": "pro A. Licinio Archia poeta oratio", 
   "Rab. perd.": "pro C. Rabirio perduellionis reo orationis quae exstant", 
   "dom.": "de domo sua ad pontifices oratio", 
   "Rab. Post.": "pro C. Rabirio Postumo oratio", 
   "Planc.": "pro Cn. Plancio oratio", 
   "Q. Rosc.": "pro Q. Roscio Gallo comoedo oratio (mutila)", 
   "orat.": "orator (ad M. Brutum)", 
   "Pis.": "in L. Calpurnium Pisonem oratio", 
   "div. in Caec.": "in Q. Caecilium Nigrum oratio, quae divinatio dicitur", 
   "frg. inc.": "incertorum librorum fragmenta", 
   "Cato": "Cato maior de senectute", 
   "Balb.": "pro L. Cornelio Balbo oratio", 
   "rep.": "librorum de re publica quae exstant", 
   "Quinct.": "pro P. Quinctio oratio", 
   "Vatin.": "in P. Vatinium testem interrogatio", 
   "Deiot.": "pro rege Deiotaro oratio", 
   "Font.": "pro M. Fonteio orationis quae exstant", 
   "Att.": "epistulae ad Atticum", 
   "de orat.": "de oratore", 
   "opt. gen.": "de optimo genere oratorum", 
   "Lael.": "Laelius de amicitia", 
   "Verr.": "in C. Verrem orationes sex", 
   "epist. frg.": "epistularum fragmenta a scriptoribus servata", 
   "Tull.": "pro M. Tullio orationis quae exstant", 
   "ad Q. fr.": "epistulae ad Quintum fratrem", 
   "Phil.": "in M. Antonium orationes Philippicae", 
   "Mur.": "pro L. Murena oratio", 
   "Arat. frg.": "Arateorum fragm.", 
   "Lig.": "pro Q. Ligario oratio", 
   "ac.": "Academici libri ab ipso Cicerone postea retractati", 
   "top.": "topica", 
   "[facet. dict.]": "Ciceronis facete dicta ab aliis collecta", 
   "Marcell.": "pro M. Claudio Marcello oratio", 
   "Flacc.": "pro L. Valerio Flacco oratio", 
   "Mil.": "pro T. Annio Milone oratio", 
   "Caecin.": "pro A. Caecina oratio", 
   "frg.": "incertae sedis fragmenta", 
   "leg. agr.": "de lege agraria orationum quae exstant", 
   "Cluent.": "pro A. Cluentio Habito oratio", 
   "Brut.": "Brutus (sc. de claris oratoribus)", 
   "ad Brut.": "epistulae ad M. Iunium Brutum", 
   "Catil.": "in L. Sergium Catilinam orationes", 
   "Arat.": "Arati Phain\u00f3mena versa atque retractata", 
   "parad.": "paradoxa Stoicorum", 
   "fat.": "de fato quae exstant", 
   "progn. frg.": "prognostica", 
   "p. red. ad Quir.": "post reditum ad Quirites (cum populo gratias egit) oratio", 
   "Tim.": "Timaei Platonici versionis fragmenta", 
   "or. frg.": "orationum deperditarum fragmenta", 
   "fam.": "epistulae ad familiares", 
   "fin.": "de finibus bonorum et malorum", 
   "Manil.": "pro lege Manilia (de imperio Cn. Pompei) oratio", 
   "Cael.": "pro M. Caelio Rufo oratio", 
   "nat. deor.": "de natura deorum", 
   "phil. frg.": "librorum philosophicorum (et aliorum quorundam oratione soluta conscriptorum) deperditorum fragmenta", 
   "Tusc.": "Tusculanae disputationes", 
   "off.": "de officiis", 
   "S. Rosc.": "pro Sex. Roscio Amerino oratio", 
   "Scaur.": "pro M. Aemilio Scauro orationis quae exstant", 
   "leg.": "librorum de legibus quae exstant", 
   "har. resp.": "de haruspicum responso oratio", 
   "Sest.": "pro P. Sestio oratio", 
   "prov.": "de provinciis consularibus oratio", 
   "part.": "partitiones oratoriae", 
   "carm. frg.": "carminum (praeter Aratea) fragmenta vel quae exstant", 
   "inv.": "rhetorici libri qui vocantur de inventione", 
   "Sull.": "pro P. Cornelio Sulla oratio", 
   "p. red. in sen.": "post reditum in senatu (cum senatui gratias egit) oratio", 
   "frg. Hier. epist.": "fragmenta, quibus lacuna inter \u00a75 et 6 hians ex parte saltem expletur, e. g. fragm. servatum apud HIER. epist."
  }, 
  [
   "-106", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "FIN. METR.": [
  "", 
  {
   "gramm.": "quae sub inscriptione 'De finalibus metrorum' a Keil edita sunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MET. NEP.": [
  "Q. Caecilius Metellus Nepos", 
  {
   "Cic. fam.": "ad Ciceronem epistula"
  }, 
  [
   "-100", 
   "-55", 
   "cos. 57", 
   ""
  ]
 ], 
 "FLOR.": [
  "Florus (aut plures Flori)", 
  {
   "anth.": "carmina in anthologia latina Floro cuidam tributa", 
   "carm.": "carmen ad Hadrianum", 
   "epit.": "L. (?) Annaeus Florus, epitoma de Tito Livio q. d.", 
   "Char. gramm.": "Annius Florus, fragmenta apud CHAR. gramm. servata", 
   "Verg.": "P. Annius Florus, Vergilius orator an poeta (fragmentum)"
  }, 
  [
   "50", 
   "150", 
   "", 
   ""
  ]
 ], 
 "VICTORIN.": [
  "Victorinus", 
  {
   "Christ.": "carmen de Iesu Christo deo et homine", 
   "gramm.": "scripta quaedam grammatica, quae uni auctori (Victorino cuidam? vix Mario Victorino) tribuenda videntur esse"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYD.": [
  "Iohannes Lydus", 
  {
   "mag.": "de magistratibus"
  }, 
  [
   "490", 
   "560", 
   "", 
   ""
  ]
 ], 
 "[SER. SAMM.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "SER. med."
  ]
 ], 
 "THEOD. MOPS.": [
  "Theodorus Mopsuestenus", 
  {
   "in Gal.": "commentarius in Pauli epistulas minores", 
   "[in psalm.]": "[in psalm.]", 
   "[epit. in psalm.]": "[epit. in psalm.]"
  }, 
  [
   "350", 
   "429", 
   "episcopus", 
   "IVLIAN. epit. in psalm."
  ]
 ], 
 "LIV. ANDR.": [
  "Livius Andronicus", 
  {
   "carm. frg.": "carmen epicum, sc. Odusia", 
   "trag.": "tragoediarum fragmenta", 
   "com.": "comoediarum fragmenta"
  }, 
  [
   "-300", 
   "-201", 
   "", 
   "Homeri Odyssea e graeco versa"
  ]
 ], 
 "MAECIAN.": [
  "L. Volusius Maecianus", 
  {
   "dig.": "fragmenta in digesta servata", 
   "distrib. 81": "distributio (opus metrologicum in fine mutilum)"
  }, 
  [
   "100", 
   "199", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "LIC. TVR.": [
  "Licinius", 
  {
   "epist.": "epistula"
  }, 
  [
   "450", 
   "550", 
   "episcopus Turonensis", 
   ""
  ]
 ], 
 "FVLG.": [
  "Fabius Planciades Fulgentius Afer", 
  {
   "serm. ant.": "expositio sermonum antiquorum", 
   "Virg. cont.": "expositio Virgilianae continentiae secundum philosophos moralis", 
   "[Theb.]": "super Thebaiden (sc. Statii)", 
   "aet. mund.": "de aetatibus mundi et hominis (opus imperfectum?)", 
   "myth.": "mythologiae"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "CAPER": [
  "Flavius Caper", 
  {
   "gramm.": "libelli de orthographia et de verbis dubiis (qui in codicibus perperam Capro tribuuntur, sed fortasse nonnulla e Capro hausta servant)", 
   "fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.": "fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "150", 
   "250", 
   "grammaticus", 
   ""
  ]
 ], 
 "OSTRAC.": [
  "", 
  {
   "hac nota (sc. insuper indicata editione) afferri possunt ostraca (i. testae inscriptae), sed cum fere una cum inscriptionibus papyrisve edantur, saepius invenientur sub aliis notis": "hac nota (sc. insuper indicata editione) afferri possunt ostraca (i. testae inscriptae), sed cum fere una cum inscriptionibus papyrisve edantur, saepius invenientur sub aliis notis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. BASIL.": [
  "Pseudo-Basilius", 
  {
   "cons.": "de consolatione in adversis", 
   "ad fil.": "admonitio ad filium spiritualem q. d."
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PACVV.": [
  "M. Pacuvius", 
  {
   "praetext.": "fabularum praetextarum fragmenta", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-220", 
   "-130", 
   "", 
   ""
  ]
 ], 
 "PHOEBAD.": [
  "Phoebadius", 
  {
   "c. Arian.": "contra Arianos liber"
  }, 
  [
   "320", 
   "392", 
   "episcopus Aginnensis", 
   ""
  ]
 ], 
 "QVODV.": [
  "Quodvultdeus", 
  {
   "cant. nov.": "de cantico novo", 
   "symb.": "de symbolo", 
   "temp. barb.": "de tempore barbarico sermones duo", 
   "prom.": "liber promissionum et praedictorum dei", 
   "haer.": "adversus quinque haereses", 
   "fer.": "de ultima quarta feria", 
   "catacl.": "de cataclysmo", 
   "grat.": "de accedentibus ad gratiam", 
   "Aug. epist.": "epistulae ad Augustinum", 
   "c. Iud. pag. Ar.": "contra Iudaeos, paganos et Arianos", 
   "virtut. carit.": "de quattuor virtutibus caritatis", 
   "cant. Is.": "sermo de cantico Isaiae"
  }, 
  [
   "350", 
   "454", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "TRIFOL.": [
  "Trifolius", 
  {
   "epist.": "epistula ad Faustum senatorem"
  }, 
  [
   "500", 
   "599", 
   "presbyter", 
   ""
  ]
 ], 
 "DOCTR.": [
  "", 
  {
   "apost.": "doctrina apostolorum e graeco (sed non illius libri exstantis, qui Didach\u00e9h inscribitur) versa"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ENN.": [
  "Q. Ennius", 
  {
   "scaen.": "fragmenta scaenica", 
   "frg. inc.": "fragmenta incerti operis", 
   "frg. var.": "fragmenta varia (sc. et carminum et operum oratione soluta conscriptorum)", 
   "ann.": "annalium fragmenta", 
   "[trag.]": "tragoediarum fragmenta", 
   "[praetext.]": "praetextarum fragmenta", 
   "[com.]": "comoediarum (sc. palliatarum) fragmenta", 
   "sat.": "saturarum fragmenta"
  }, 
  [
   "-239", 
   "-169", 
   "", 
   ""
  ]
 ], 
 "BOETH.": [
  "Anicius Manlius Severinus Boethius", 
  {
   "mus.": "de institutione musica(e)", 
   "[in Porph. dial.]": "[in Porph. dial.]", 
   "syll. categ. introd.": "introductio ad syllogismos categoricos", 
   "in top. Cic.": "commentarii in Ciceronis topica", 
   "syll. hyp.": "de hypotheticis syllogismis", 
   "in categ. comm.": "in categorias Aristotelis commentarius", 
   "diff. top.": "de differentiis topicis", 
   "in Porph. comm.": "in Porphyrii isagogen commentarii", 
   "syll. categ.": "de syllogismo categorico", 
   "Porph. isag.": "Porphyrii isagoge e graeco versa", 
   "elench. soph.": "de sophisticis elenchis liber Aristotelis latine versus", 
   "subst. bon.": "quomodo substantiae in eo, quod sint, bonae sint", 
   "anal. pr.": "analytica priora Aristotelis latine versa", 
   "[anal. post.]": "analytica posteriora Aristotelis latine versa", 
   "divin.": "utrum pater et filius et spiritus sanctus de divinitate substantialiter praedicentur", 
   "top. Arist.": "topica Aristotelis latine versa", 
   "arithm.": "de institutione arithmetica", 
   "in herm. comm.": "in librum Aristotelis peri hermeneias commentarii", 
   "categ.": "categoriae Aristotelis latine versae", 
   "c. Eut.": "contra Eutychen et Nestorium", 
   "herm.": "peri hermeneias liber Aristotelis latine versus", 
   "trin.": "de trinitate", 
   "divis.": "de divisione", 
   "cons.": "philosophiae consolatio"
  }, 
  [
   "480", 
   "526", 
   "patricius", 
   ""
  ]
 ], 
 "MAXIM.": [
  "Maximianus", 
  {
   "eleg.": "elegiae"
  }, 
  [
   "450", 
   "550", 
   "poeta", 
   ""
  ]
 ], 
 "ISAAC": [
  "Isaac Iudaeus", 
  {
   "fid.": "de trinitate (fides Isatis; opusculum mutilum)"
  }, 
  [
   "840", 
   "932", 
   "Isaak (ben Salomon) Israeli, medicus et philosopus", 
   ""
  ]
 ], 
 "SIGISM.": [
  "Sigismundus", 
  {
   "Alc. Avit. epist.": "epistulae ad Symmachum papam, ad Vitalinum senatorem, ad imp. Anastasium I"
  }, 
  [
   "450", 
   "524", 
   "Burgundiae Rex\u00a0", 
   ""
  ]
 ], 
 "HEMINA": [
  "L. Cassius Hemina", 
  {
   "hist.": "annalium fragmenta"
  }, 
  [
   "-199", 
   "-100", 
   "historicus", 
   ""
  ]
 ], 
 "AVSON.": [
  "D. Magnus Ausonius Burdigalensis", 
  {
   "Symm. epist.": "epistula ad Symmachum", 
   "carmina???": "carmina???", 
   "Mos.": "Mosella", 
   "rhop.": "oratio (sc. ad deum) versibus rhopalicis"
  }, 
  [
   "310", 
   "395", 
   "", 
   ""
  ]
 ], 
 "CALDON.": [
  "Caldonius", 
  {
   "epistulae ad Cyprianum": "epistulae ad Cyprianum"
  }, 
  [
   "200", 
   "250", 
   "", 
   ""
  ]
 ], 
 "PS. THEOPHIL.": [
  "Pseudo-Theophilus Antiochenus", 
  {
   "in Ioh.": "commentarius in quattuor euangelia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CIC.": [
  "Pseudo-Cicero", 
  {
   "epist. ad Oct.": "epistula ad Octavianum", 
   "exil.": "oratio pridie quam in exilium iret", 
   "in Sall.": "in C. Sallustium Crispum invectiva"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "NVX": [
  "", 
  {
   "nux elegia pseudovidiana": "nux elegia pseudovidiana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "Q. SCAEV.": [
  "Q. Mucius Scaevola ('pontifex')", 
  {
   "dig.": "fragmenta in digesta servata", 
   "Gell.": "fragmenta alibi servata"
  }, 
  [
   "-140", 
   "-82", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "ANTIDOT.": [
  "", 
  {
   "app.": "antidotariorum appendix", 
   "Brux.": "antidotaria duo codicis Bruxellensis 1342\u201450", 
   "frg. phys.": "fragmentum physicum q. d. una cum antidotariis traditum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IND.": [
  "", 
  {
   "A": "index A, sc. anon. de ortu et obitu prophetarum et apostolorum", 
   "Paul. Pelag.": "index Pelagianus epistularum Paulinarum", 
   "II Cor. A": "indices librorum novi testamenti, e. g. epistulae II ad Corinthios, series codicis A et al.", 
   "bibl.": "indices libris biblicis singulis vel librorum seriei cuidam antepositi", 
   "H": "index H, sc. de XII apostolis, qui Hippolyto tribuitur", 
   "Paul. antipelag. Hebr.": "indices antipelagiani epistularum Paulinarum, epist. ad Hebraeos", 
   "Lucr.": "capitulorum indices aliorum scriptorum operibus antepositi, e. g. index Lucretii", 
   "proph. apost.": "indices prophetarum et/aut apostolorum (agitur praecipue de eorum nominibus, ortu, obitu, sepulchris) varii variis modis et cum exemplaribus graecis et inter se coniuncti", 
   "capp.": "indices capitulorum sim., qui ab anonymis ante saec. VII confecti in codicibus quibusdam antepositi sunt operibus nonnullis", 
   "psalm. I": "indices libri psalmorum, series I", 
   "E": "index E, sc. libellus sancti Epiphanii", 
   "Iob": "indices librorum veteris testamenti, e. g. libri Iob"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECL.": [
  "", 
  {
   "in Catil.": "declamatio in L. Sergium Catilinam Ciceroni subdita"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOST.": [
  "Hostius", 
  {
   "carm.": "carmen (bellum Histricum)"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "PASCH.": [
  "", 
  {
   "Vat. chron. I": "Vaticanum", 
   "paschale": "paschale", 
   "Ciz. chron. I": "Cizense", 
   "Camp. chron. I": "Campanum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAVL. NOL.": [
  "Pontius Meropius Paulinus Nolanus", 
  {
   "[app. exc. Bob.]": "[app. exc. Bob.]", 
   "epist.": "epistulae", 
   "[pass. Genes.]": "[pass. Genes.]", 
   "[carm. app.]": "[carm. app.]", 
   "[epist. app.]": "[epist. app.]", 
   "carm.": "carmina"
  }, 
  [
   "354", 
   "431", 
   "episcopus", 
   "PS. PAVL. NOL. exc. Bob."
  ]
 ], 
 "POMER.": [
  "Iulianus Pomerius", 
  {
   "de vita contemplativa": "de vita contemplativa"
  }, 
  [
   "450", 
   "550", 
   "presbyter Arelatensis", 
   ""
  ]
 ], 
 "[PVP.]": [
  "Pupius", 
  {
   "[epigr.]": "epigramma"
  }, 
  [
   "", 
   "", 
   "", 
   "CARM. Schol. Hor. epist."
  ]
 ], 
 "MAR. AVENT.": [
  "Marius", 
  {
   "chron.": "chronica, quibus Prosperi opus ad ann. 581 producitur"
  }, 
  [
   "530", 
   "594", 
   "episcopus Aventicensis", 
   ""
  ]
 ], 
 "TAC.": [
  "(P.) Cornelius Tacitus", 
  {
   "Agr.": "de vita Iulii Agricolae", 
   "ann.": "annalium (ab excessu divi Augusti)", 
   "Germ.": "Germania (de origine et situ Germanorum)", 
   "hist.": "historiae", 
   "dial.": "dialogus de oratoribus"
  }, 
  [
   "58", 
   "120", 
   "", 
   ""
  ]
 ], 
 "FORTVN.": [
  "Atilius Fortunatianus", 
  {
   "gramm.": "ars (de metris Horatianis), vol. VI"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "BACHIAR.": [
  "Bachiarius", 
  {
   "repar. laps.": "de reparatione lapsi", 
   "fid.": "de fide", 
   "[epist. Migne suppl.]": "[epist. Migne suppl.]"
  }, 
  [
   "350", 
   "450", 
   "scriptor ecclesiasticus (Gallaeciae?)", 
   ""
  ]
 ], 
 "TER.": [
  "P. Terentius Afer", 
  {
   "Phorm.": "Phormio", 
   "Haut.": "H(e)autontimorumenos", 
   "Eun.": "Eunuchus", 
   "Hec.": "Hecyra", 
   "Ad.": "Adelphoe", 
   "Andr.": "Andria"
  }, 
  [
   "-195", 
   "-158", 
   "", 
   ""
  ]
 ], 
 "ERACL.": [
  "Eraclius", 
  {
   "serm.": "sermones"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICET.": [
  "Nicetas <Remesianensis>", 
  {
   "appell.": "de diversis appellationibus Iesu Christo convenientibus", 
   "symb.": "explanatio symboli", 
   "spir.": "de spiritus sancti potentia", 
   "[symb. frg.]": "[symb. frg.]", 
   "vigil.": "de vigiliis servorum dei", 
   "[virg. laps. 52 p. 131,15 B.]": "[virg. laps. 52 p. 131,15 B.]", 
   "virg. laps.": "ad virginem lapsam", 
   "[hymn.]": "[hymn.]", 
   "fid.": "de ratione fidei", 
   "psalm.": "de psalmodiae bono sive de utilitate hymnorum", 
   "compet.": "librorum VI ad competentes fragmenta"
  }, 
  [
   "350", 
   "414", 
   "episcopus Dacus", 
   ""
  ]
 ], 
 "PS. DAMAS.": [
  "Pseudo-Damasus", 
  {
   "epigr.": "epigrammata"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PONT.": [
  "Pontius", 
  {
   "vita Cypr.": "vita Cypriani"
  }, 
  [
   "200", 
   "299", 
   "diaconus Carthaginiensis", 
   ""
  ]
 ], 
 "DAMIG.": [
  "", 
  {
   "lapid.": "liber Damigeronis (vel Euacis) de lapidibus q. d. (sequitur exempla graeca)"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "ATELL.": [
  "", 
  {
   "inc.": "Atellanarum poetae incerti"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[BALB. ET OPP.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "BALB. Cic. Att."
  ]
 ], 
 "MIN. FEL.": [
  "M. Minucius Felix", 
  {
   "Octavius": "Octavius"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "GANN.": [
  "Gannius (vel Gannii) quidam", 
  {
   "carm. frg.": "carminum fragmenta a Prisciano servata", 
   "Paul. Fest.": "fragm. servatum apud PAVL. FEST."
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "LIC. IMBR.": [
  "Licinius Imbrex", 
  {
   "com.": "comoediarum fragmentum"
  }, 
  [
   "-200", 
   "-101", 
   "", 
   ""
  ]
 ], 
 "CORNELIA": [
  "Cornelia", 
  {
   "epist. frg.": "epistula"
  }, 
  [
   "-190", 
   "-100", 
   "mater Gracchorum", 
   ""
  ]
 ], 
 "PRIMAS.": [
  "Primasius", 
  {
   "in apoc.": "commentarius in apocalypsin"
  }, 
  [
   "500", 
   "599", 
   "episcopus Hadrumetinus", 
   ""
  ]
 ], 
 "IVL. VICT.": [
  "C. Iulius Victor", 
  {
   "rhet.": "ars rhetorica"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PS. FVLG. RVSP.": [
  "Pseudo-Fulgentius Ruspensis", 
  {
   "[praedest.]": "[praedest.]", 
   "serm.": "sermones aut in codicibus aut ab editoribus perperam Fulgentio ascripti", 
   "pro fid.": "pro fide catholica (vel de trinitate)"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "PS. VIGIL. THAPS.": [
  "Pseudo-Vigilius Thapsensis", 
  {
   "solut. obi. Arian.": "solutiones obiectionum Arianorum", 
   "[c. Arian.]": "epitome operis q. e. VIGIL. THAPS. c. Arian.", 
   "trin.": "de trinitate", 
   "c. Marivad.": "contra Marivadum (Varimadum) Arianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FERRAND.": [
  "(Fulgentius?) Ferrandus", 
  {
   "epist.": "epistulae", 
   "canon.": "breviatio canonum (sc. conciliorum Graecorum et Africae)"
  }, 
  [
   "500", 
   "547", 
   "diaconus Carthaginiensis", 
   ""
  ]
 ], 
 "TRACT.": [
  "", 
  {
   "de indur. cord. Phar.": "tractatus de induratione cordis Pharaonis (vix Pelagio tribuendus)", 
   "in Luc.": "tractatus Ariani cuiusdam in euangelium sec. Lucam"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IAVOL.": [
  "C. Octavius Tidius Tossianus L. Iavolenus Priscus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "TYCON.": [
  "Tyconius Afer Donatista", 
  {
   "in apoc.": "fragmenta Taurinensia commentarii in apocalypsin", 
   "reg.": "liber regularum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "MESSALLA": [
  "M. Valerius Messalla Corvinus", 
  {
   "or. frg. Fest.": "orationum fragmenta a scriptoribus servata", 
   "fam. frg. Plin. nat.": "de familiis", 
   "ausp. frg. Macr. Sat.": "de auspiciis"
  }, 
  [
   "-64", 
   "8", 
   "", 
   "e. g. fragm. apud FEST."
  ]
 ], 
 "DOM. MARS.": [
  "Domitius Marsus", 
  {
   "carm. frg.": "carminum reliquiae a Baehrens et Morel collectae", 
   "epigr. Bob.": "epigrammata duo servata inter epigrammata Bobiensia", 
   "fragmenta operis pedestris servata apud QVINT. inst.": "fragmenta operis pedestris servata apud QVINT. inst."
  }, 
  [
   "-50", 
   "25", 
   "poeta", 
   ""
  ]
 ], 
 "LONGIN.": [
  "Longinianus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "408", 
   "paganus", 
   ""
  ]
 ], 
 "VELL.": [
  "Velleius Paterculus", 
  {
   "historiae Romanae": "historiae Romanae"
  }, 
  [
   "-20", 
   "30", 
   "", 
   ""
  ]
 ], 
 "CELS.": [
  "A. Cornelius Celsus", 
  {
   "medicina": "medicina", 
   "artes": "artes", 
   "ceterarum operis partium fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "ceterarum operis partium fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst."
  }, 
  [
   "-25", 
   "50", 
   "", 
   ""
  ]
 ], 
 "POMP.": [
  "Pompeius (Maurus)", 
  {
   "commentum artis Donati": "commentum artis Donati", 
   "Cic. Att.": "epistulae fere ad Ciceronem"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "AMBROSIAST.": [
  "Ambrosiaster", 
  {
   "in Gal.": "in epistulae ad Galatas", 
   "in Rom. prol.": "in epistulam ad Romanos, prologus vel argumentum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "SIDON.": [
  "C. Sollius Apollinaris Sidonius Clarimontanus", 
  {
   "carm.": "carmen", 
   "epist.": "epistulae", 
   "epist. (carm. 22)": "epistula carmini 22 adnexa"
  }, 
  [
   "431", 
   "479", 
   "episcopus", 
   ""
  ]
 ], 
 "S. C.": [
  "", 
  {
   "de sumpt. lud. glad.": "de sumptibus ludorum gladiatoriorum minuendis", 
   "Frontin. aq.": "senatus consulta apud scriptores tradita, e. g. apud FRONTIN. aq.", 
   "de Bacch.": "de Bacchanalibus", 
   "de Germ.": "de honoribus Germanico defuncto tribuendis", 
   "Rubr.": "Rubrianum", 
   "Larin.": "Larini repertum", 
   "senatus consulta": "senatus consulta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASSIOD.": [
  "Flavius Magnus Aurelius Cassiodorus", 
  {
   "hist.": "historia ecclesiastica tripartita q. d.", 
   "var.": "variae (sc. epistulae, formulae sim. a Cassiodoro officiis variis fungente conscripta)", 
   "chron. II": "chronica, vol. II", 
   "praef.": "praefatio", 
   "not.": "index notarum", 
   "[Didym.]": "[Didym.]", 
   "anecd. Hold.": "anecdoton Holderi q. d., sc. excerpta ex Cassiodori libello de ordine generis Cassiodororum", 
   "prol. bibl.": "prologus (c. additamentis) Cassiodori ad librorum biblicorum codicem grandiorem q. d. codice Amiatino servatus", 
   "or. frg.": "orationum reliquiae", 
   "Ios. antiq.": "Flavii Iosephi antiquitates Iudaicae curis Cassiodori e graeco versae", 
   "[art. 7 p. 1220A]": "[art. 7 p. 1220A]", 
   "gramm.": "de orthographia", 
   "in psalm.": "expositio psalmorum", 
   "compl. in apoc.": "complexiones in epistolis apostolorum et actibus apostolorum et apocalypsi", 
   "praef. ord.": "praefatio, ordo dicendorum", 
   "[art. 7 p. 357 Mai]": "[art. 7 p. 357 Mai]", 
   "[rhet.]": "de rhetorica", 
   "inst.": "institutiones", 
   "Clem. Alex. adumbr.": "Clementis Alexandrini adumbrationes in epistulas canonicas", 
   "Ios. c. Ap.": "Flavii Iosephi de Iudaeorum vetustate sive contra Apionem (opus curis Cassiodori e graeco versum)", 
   "anim.": "de anima"
  }, 
  [
   "485", 
   "580", 
   "Senator", 
   ""
  ]
 ], 
 "EMPOR.": [
  "Emporius", 
  {
   "rhet.": "de ethopoeia al.  quae exstant (excerpta?)"
  }, 
  [
   "500", 
   "599", 
   "rhetor", 
   ""
  ]
 ], 
 "CHRYSOST.": [
  "Iohannes Chrysostomus", 
  {
   "ad neoph.": "sermo ad neophytos", 
   "hom.": "homiliae et alia opera in editione Basil. collecta", 
   "repar. laps.": "de reparatione lapsi"
  }, 
  [
   "349", 
   "407", 
   "", 
   "operum versiones latinae anon."
  ]
 ], 
 "PETR. CHRYS.": [
  "Petrus Chrysologus", 
  {
   "[serm. de or.]": "[serm. de or.]", 
   "epist. Conc. S II": "epistula ad Eutychen presbyterum", 
   "serm.": "collectio sermonum Feliciana q. d."
  }, 
  [
   "380", 
   "451", 
   "episcopus Ravennas", 
   ""
  ]
 ], 
 "FRONTIN.": [
  "Sex. Iulius Frontinus", 
  {
   "grom.": "excerpta e Frontini opere quodam gromatico", 
   "aq.": "de aquaeductu urbis Romae commentarius", 
   "strat.": "strategemata"
  }, 
  [
   "35", 
   "103", 
   "", 
   ""
  ]
 ], 
 "GRACCH.": [
  "Gracchus", 
  {
   "trag.": "tragoediarum fragmenta", 
   "or. frg. Gell.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "-50", 
   "50", 
   "poeta", 
   ""
  ]
 ], 
 "[CONCORD.]": [
  "", 
  {
   "[Paul. epist. Vulg. (cod. Fuld. al. )]": "[Paul. epist. Vulg. (cod. Fuld. al. )]"
  }, 
  [
   "", 
   "", 
   "", 
   "IND. capp. bibl. Paul. Pelag. 56"
  ]
 ], 
 "CVLEX": [
  "", 
  {
   "culex, carmen appendicis Vergilianae": "culex, carmen appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLIN.": [
  "Plinius Secundus <Iunior>", 
  {
   "epist.": "epistulae", 
   "dub. serm. frg. Char. gramm.": "dubii sermonis librorum fragmenta, e. g. fragm. servatum apud CHAR. gramm.", 
   "phys.": "physica Plinii q. d.", 
   "med.": "de medicina libri III", 
   "nat.": "naturalis historia", 
   "paneg.": "panegyricus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROB.": [
  "M. Valerius Probus?", 
  {
   "app. (gramm. IV)": "appendix Probi", 
   "[schol. Iuv.]": "scholia in IVV.", 
   "scripta Probiana": "scripta Probiana", 
   "litt. sing.": "de litteris singularibus fragmenta", 
   "inst. (gramm. IV)": "instituta artium", 
   "cath. (gramm. IV)": "catholica nominum et verborum", 
   "nom. (gramm. IV)": "de nomine", 
   "Verg.": "commentarius in VERG. ecl. et georg.", 
   "vita Pers.": "vita Persii de commentario Probi Valerii sublata"
  }, 
  [
   "0", 
   "99", 
   "grammaticus", 
   ""
  ]
 ], 
 "IGNAT.": [
  "Ignatius", 
  {
   "Rom. Colbert.": "epistula ad Romanos, quae graeca nondum interpolata martyrio Colbertino vel Antiocheno q. d. inserta una cum hoc martyrio latine versa est (sc. versio re vera vetus)", 
   "epistulae latine versae": "epistulae latine versae", 
   "[ad Rom. vel PS. IGNAT. Rom.]": "epistula ad Romanos (sc. versio vetus vel vetustior q. d. sequens recensionem graecam iam interpolatam)"
  }, 
  [
   "50", 
   "117", 
   "episcopus Antiochenus", 
   ""
  ]
 ], 
 "LENT.": [
  "P. Cornelius Lentulus Spinther", 
  {
   "Cic. fam.": "epistulae"
  }, 
  [
   "-100", 
   "-46", 
   "", 
   ""
  ]
 ], 
 "EVSEB.": [
  "Eusebius Nicomediensis", 
  {
   "ad Paul.": "epistula ad Paulinum (conscripta fere 321) bis e graeco versa"
  }, 
  [
   "250", 
   "341", 
   "", 
   ""
  ]
 ], 
 "IOH. BICL.": [
  "Iohannes Biclarensis", 
  {
   "chron. II": "continuatio chronicorum Victoris Tonnennensis, vol. II"
  }, 
  [
   "550", 
   "620", 
   "abbas Biclarensis Hispanus", 
   ""
  ]
 ], 
 "TIB.": [
  "Albius Tibullus", 
  {
   "elegiae": "elegiae"
  }, 
  [
   "-55", 
   "-18", 
   "", 
   ""
  ]
 ], 
 "FASTID.": [
  "Fastidiosus Arianus", 
  {
   "serm.": "sermo additus epistulae Victoris ad Fulgentium Ruspensem"
  }, 
  [
   "500", 
   "599", 
   "", 
   ""
  ]
 ], 
 "CAEL. SAB.": [
  "Cn. Arulenus Caelius Sabinus", 
  {
   "Gell.": "fragmenta a scriptoribus servata, e. g. fragm. apud GELL."
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "[AEM. PAVL.]": [
  "L. Aemilius Paullus Macedonicus", 
  {
   "fragmentum orationis 167 a. Chr. habitae apud VAL. MAX. traditum": "fragmentum orationis 167 a. Chr. habitae apud VAL. MAX. traditum"
  }, 
  [
   "-229", 
   "-160", 
   "", 
   "VAL. MAX. 5,10,2"
  ]
 ], 
 "AVIT. BRAC.": [
  "Avitus <Bracarensis>", 
  {
   "Lucian. epist.": "epistulae, quam scripsit eodem tempore Lucianus presbyter de revelatione corporis sancti Stephani protomartyris, versiones latinae", 
   "ad. Palc.": "epistula ad Palconium episcopum Bracarensem, quam Avitus Luciani epistulae versioni suae addidit", 
   "rec. B": "recensio B (sc. altera versio a nescio quo confecta)", 
   "rec. A": "recensio (immo versio) A"
  }, 
  [
   "450", 
   "550", 
   "presbyter", 
   ""
  ]
 ], 
 "FORMA": [
  "", 
  {
   "urbis (CIL VI 29844)": "forma urbis Romae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALYP.": [
  "Alypius", 
  {
   "commonitorii fragmentum": "commonitorii fragmentum"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "[GALLICAN.]": [
  "Vulcacius Gallicanus", 
  {}, 
  [
   "250", 
   "350", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "SISENNA": [
  "L. Cornelius Sisenna", 
  {
   "[frg. inc.]": "[frg. inc.]", 
   "Miles. frg.": "Milesiarum latine versarum reliquiae", 
   "hist.": "historiae"
  }, 
  [
   "-118", 
   "-67", 
   "", 
   "hist."
  ]
 ], 
 "CHAR.": [
  "Flavius Sosipater Charisius", 
  {
   "dig.": "fragmenta in digesta servata", 
   "gramm.": "artis grammaticae quae exstant"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "ATHAN.": [
  "Athanasius", 
  {
   "Lucif. epist.": "epistula ad Luciferum", 
   "[epist. ad Epict.]": "epistula ad Epictetum", 
   "epist. ad Potam.": "epistulae ad Potamium (genuinae?) fragmentum ab Alcuino allatum"
  }, 
  [
   "298", 
   "373", 
   "episcopus Alexandrinus", 
   ""
  ]
 ], 
 "VERR. FL.": [
  "M. Verrius Flaccus", 
  {
   "frg. Gell.": "fragmenta fere grammatica, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-60", 
   "37", 
   "", 
   ""
  ]
 ], 
 "VALENT.": [
  "Valentinus Hadrumetinus", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "abbas", 
   ""
  ]
 ], 
 "RVF. FEST.": [
  "Rufius (?) Festus", 
  {
   "breviarium (rerum gestarum populi Romani)": "breviarium (rerum gestarum populi Romani)"
  }, 
  [
   "300", 
   "380", 
   "", 
   ""
  ]
 ], 
 "APVL.": [
  "Apuleius Madaurensis Afer", 
  {
   "apol.": "apologia (pro se de magia liber)", 
   "Plat.": "de Platone et eius dogmate", 
   "flor.": "florida", 
   "mund.": "de mundo (sc. Pseudoaristotelis liber \u03a0\u03b5\u03c1\u1f76 \u039a\u03cc\u03c3\u03bc\u03bf\u03c5 latine versus ac retractatus)", 
   "carm. frg.": "carminum fragmenta", 
   "Socr.": "de deo Socratis", 
   "met.": "metamorphoses (vulgo asinus aureus)", 
   "frg.": "fragmenta post alios a Beaujeu collecta"
  }, 
  [
   "123", 
   "170", 
   "", 
   ""
  ]
 ], 
 "[BASS. GELL.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "GAV. BASS. Gell."
  ]
 ], 
 "PS. LACT. PLAC.": [
  "(Pseudo-) Lactantius Placidus", 
  {
   "fab. Ov.": "narrationes fabularum Ovidianarum"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "CONC.": [
  "", 
  {
   "Aquil. a. 381": "acta concilii Aquileiensis anno 381 habiti", 
   "Carth. a. 416 Aug. epist.": "concilii Carthaginiensis anno 416 habiti epistula, v. AVG. epist.", 
   "Arel. a. 314": "acta concilii Arelatensis anno 314 habiti", 
   "Bagai. a. 394": "fragmenta sententiarum concilii Bagaiensis anno 394 a Donatistis habiti ab Augustino tradita", 
   "Carth. a. 411": "acta concilii Carthaginiensis anno 411 habiti, immo gesta collationis episcoporum catholicorum cum Donatistis (in fine mutila, sed exstant tituli et Augustini breviculus [AVG. coll. c. Don.])", 
   "Carth. a. 345/348": "acta concilii Carthaginiensis inter annos 345 et 348 habiti (?)", 
   "Rom. subdit. a. 325": "acta concilii Romani subditivi anni 325", 
   "Milevit. a. 416 Aug. epist.": "concilii Milevitani anno 416 habiti epistula, v. AVG. epist.", 
   "Rom. a. 595": "concilii Romani anno 595 habiti decretum", 
   "acta sim. conciliorum synodorum sim., sive oecumenicarum sive particularium": "acta sim. conciliorum synodorum sim., sive oecumenicarum sive particularium", 
   "acta conciliorum oecumenicorum (sc. Epheseni a. 431 [tom. I], Chalcedonensis a. 451 [tom. II], Constantinopolitani a. 553 [tom. IV]) et sim. a Schwartz edita (versa magnam partem aut e graeco aut in graecum)": "acta conciliorum oecumenicorum (sc. Epheseni a. 431 [tom. I], Chalcedonensis a. 451 [tom. II], Constantinopolitani a. 553 [tom. IV]) et sim. a Schwartz edita (versa magnam partem aut e graeco aut in graecum)", 
   "[Rom. a. 381]": "concilii Romani anno 381 (immo 378) habiti epistula", 
   "Rom. a. 531": "acta concilii Romani anno 531 habiti", 
   "Rom. a. 465": "acta concilii Romani anno 465 habiti (decretum synodale Hilari papae)", 
   "Aurel. a. 511": "acta concilii Aurelianensis anno 511 habiti", 
   "Rom. a. 502": "acta conciliorum Romanorum annis 499, 501, 502 habitorum, conc. anni 502", 
   "Brac. a. 561": "acta conciliorum Bracarensium, conc. anno 561 habitum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CANNVT.": [
  "P. Cannutius", 
  {
   "orationum fragm. servatum apud PRISC. gramm.": "orationum fragm. servatum apud PRISC. gramm."
  }, 
  [
   "-106", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "COEL.": [
  "L. Coelius Antipater", 
  {
   "hist.": "librorum de bello Punico secundo fragmenta"
  }, 
  [
   "-200", 
   "-101", 
   "historicus", 
   ""
  ]
 ], 
 "TREBON.": [
  "C. Trebonius", 
  {
   "Cic. fam.": "epistula ad Ciceronem"
  }, 
  [
   "-90", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "BVC.": [
  "", 
  {
   "Eins.": "bucolica Einsidlensia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVS IVR.": [
  "", 
  {
   "milit. Gell.": "ius iurandum militare servatum apud GELL", 
   "ius iurandum": "ius iurandum", 
   "Arit. (CIL II 172)": "ius iurandum, quo cives Aritienses in verba imp. Caligulae iuraverunt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEMMA": [
  "", 
  {
   "agn.": "stemma agnationis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASS. PARM.": [
  "C. Cassius Parmensis", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem", 
   "fragm. servatum apud SVET. Aug.": "fragm. servatum apud SVET. Aug."
  }, 
  [
   "-74", 
   "-31", 
   "poeta", 
   ""
  ]
 ], 
 "PS. ORIG.": [
  "Pseudo-Origenis", 
  {
   "hom. in Matth.": "homiliae in Matth. quattuor in homiliario Caroli Magni servatae", 
   "infant.": "homilia de infantibus ab Herode occisis", 
   "hom. Casin.": "homiliae in Matth. tres in cod. Casinensibus servatae", 
   "de Melch.": "sermo de Melchisedech", 
   "in psalm.": "expositio de psalmo", 
   "in Iob": "commentarii in Iob Ariani versio q. d.", 
   "tract.": "tractatus q. d. de libris sanctarum scripturarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CORIPP.": [
  "Fl. Cresconius Corippus Afer", 
  {
   "Anast.": "panegyricus in laudem Anastasii quaestoris et magistri (traditus inter Iust. praef. et Iust.)", 
   "Ioh.": "Iohannis seu de bellis Libycis (sc. a Iohanne Troglita gestis; carmen praecipue in fine mutilum)", 
   "Iust.": "in laudem Iustini Augusti, sc. Minoris (carmen praecipue in fine mutilum; cf. Anast.)"
  }, 
  [
   "500", 
   "570", 
   "", 
   ""
  ]
 ], 
 "MOYS.": [
  "Moyses et socii", 
  {
   "Cypr. epist.": "epistula ad Cyprianum"
  }, 
  [
   "200", 
   "299", 
   "presbyter Romanus", 
   ""
  ]
 ], 
 "PHILVM.": [
  "Philumenus", 
  {
   "med.": "de medicina, versio Latina"
  }, 
  [
   "150", 
   "250", 
   "medicus", 
   ""
  ]
 ], 
 "AVR. OPIL.": [
  "Aurelius Opillus", 
  {
   "fragm. servatum apud GELL.": "fragm. servatum apud GELL."
  }, 
  [
   "-150", 
   "-50", 
   "grammaticus", 
   ""
  ]
 ], 
 "TVRRIB.": [
  "Turribius", 
  {
   "epist.": "epistula ad Idacium et Ceponium episcopos"
  }, 
  [
   "400", 
   "499", 
   "postea episcopus Asturicensis", 
   ""
  ]
 ], 
 "IORD.": [
  "Iordanes Gothus", 
  {
   "Rom.": "de summa temporum vel origine actibusque gentis Romanorum", 
   "Get.": "de origine actibusque Getarum (sc. Gothorum; sequitur Cassiodori opus deperditum)"
  }, 
  [
   "500", 
   "555", 
   "", 
   ""
  ]
 ], 
 "GELL.": [
  "Cn. Gellius", 
  {
   "noctes Atticae": "noctes Atticae", 
   "hist.": "annales"
  }, 
  [
   "-200", 
   "-101", 
   "historicus", 
   ""
  ]
 ], 
 "SIL.": [
  "Ti. Catius Asconius Silius Italicus", 
  {
   "Punica": "Punica"
  }, 
  [
   "25", 
   "100", 
   "", 
   ""
  ]
 ], 
 "GREG. M.": [
  "Gregorius Magnus", 
  {
   "in I reg.": "expositiones in librum primum regum", 
   "epist.": "registrum epistularum, sc. epistulae et similia Gregorii scripta ea, quae olim in registrum Lateranense nunc deperditum recepta sunt", 
   "donat. Andr.": "donatio monasterio S. Andreae facta", 
   "in euang.": "in euangelia homiliae", 
   "resp. ad Aug.": "responsum ad Augustinum Anglorum episcopum", 
   "in Ezech.": "in Ezechielem homiliae", 
   "past.": "regula pastoralis (in quattuor partes digesta)", 
   "dial.": "dialogi (de miraculis patrum Italicorum)", 
   "mortal.": "oratio de mortalitate q. d., sc. denuntiatio pro septiformi letania", 
   "moral.": "moralia q. d., sc. expositio beati Iob", 
   "in cant.": "expositionis in canticum canticorum reliquiae"
  }, 
  [
   "540", 
   "504", 
   "papa", 
   ""
  ]
 ], 
 "MARVLL.": [
  "Marullus mimographus", 
  {
   "mim.": "fragmentum unicum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. PRISC.": [
  "Theodorus Priscianus", 
  {
   "log.": "lib. 2: logicus", 
   "phys.": "libri de physicis fragmentum", 
   "gyn.": "lib. 3: gynaecia", 
   "eup. faen.": "lib. 1: euporiston faenomenon"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "PETRON.": [
  "Petronius (Arbiter)", 
  {
   "satyrica": "satyrica"
  }, 
  [
   "14", 
   "66", 
   "", 
   ""
  ]
 ], 
 "TVRPIL.": [
  "Sex. Turpilius", 
  {
   "com.": "comoediarum palliatarum fragmenta"
  }, 
  [
   "-200", 
   "-104", 
   "", 
   ""
  ]
 ], 
 "PVBLIL.": [
  "Publilius Syrus", 
  {
   "sent.": "sententiae", 
   "mim.": "mimorum fragmenta varia"
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "[ORSIES.]": [
  "", 
  {
   "[doctr.]": "[doctr.]"
  }, 
  [
   "", 
   "", 
   "", 
   "HIER. Orsies. doctr."
  ]
 ], 
 "VEN. FORT.": [
  "Venantius Fortunatus", 
  {
   "expos. orat.": "expositio orationis dominicae", 
   "epist.": "epistulae libris carminum insertae", 
   "[vita Leob.]": "vita Leobini episcopi Carnotensis", 
   "expos. symb.": "expositio symboli", 
   "vita Sev.": "vita Severini episcopi Burdigalensis", 
   "vita Pat.": "vita Paterni episcopi Abrincensis", 
   "praef.": "praefatio carminum (epist. ad Gregorium Turonensem)", 
   "praef. I": "praefatio I (epist. ad Gregorium Turonensem)", 
   "vita Hil.": "vita Hilarii episcopi Pictaviensis", 
   "carm.": "carmina", 
   "laud. Mar.": "in laudem sanctae Mariae", 
   "vita Albin.": "vita Albini episcopi Andecavensis", 
   "Mart.": "vita Martini", 
   "vita Radeg.": "vita Radegundis reginae Francorum", 
   "virt. Hil.": "de virtutibus Hilarii episcopi Pictaviensis", 
   "vita Germ.": "vita Germani episcopi Parisiaci", 
   "carm. app.": "appendix carminum", 
   "vita Marcell.": "vita Marcelli"
  }, 
  [
   "540", 
   "610", 
   "episcopus Pictaviensis", 
   ""
  ]
 ], 
 "PS. IVL. RVF.": [
  "Pseudo-Iulius Rufinianus", 
  {
   "schem. dian.": "de schematis dianoeas", 
   "schem. lex.": "de schematis lexeos"
  }, 
  [
   "250", 
   "350", 
   "", 
   ""
  ]
 ], 
 "DRAC.": [
  "Blossius Aemilius Dracontius", 
  {
   "ros.": "de origine rosarum", 
   "Romul.": "Romulea", 
   "Orest.": "Orestis tragoedia", 
   "mens.": "de mensibus", 
   "laud. dei": "de laudibus dei", 
   "satisf.": "satisfactio"
  }, 
  [
   "400", 
   "499", 
   "iurisconsultus Carthaginiensis, poeta", 
   ""
  ]
 ], 
 "PS. ANATOL.": [
  "Anatolius  Laodicensis", 
  {
   "pasch.": "liber de ratione paschali"
  }, 
  [
   "", 
   "", 
   "episcopus", 
   ""
  ]
 ], 
 "MIRAC.": [
  "", 
  {
   "Steph.": "de miraculis sancti Stephani protomartyris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOMN.": [
  "", 
  {
   "Neron.": "somnium Neronis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXPLAN.": [
  "Sergius vel Servius q. d.", 
  {
   "in Don.": "explanationes in artem Donati (sc. min. et mai.)"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "[IDIOM.]": [
  "", 
  {
   "[gen. gramm.]": "de idiomatibus generum"
  }, 
  [
   "", 
   "", 
   "", 
   "CHAR. gramm."
  ]
 ], 
 "APRING.": [
  "Apringius", 
  {
   "in apoc.": "commentarius in apocalypsin"
  }, 
  [
   "500", 
   "599", 
   "episcopus Pacensis Hispanus", 
   ""
  ]
 ], 
 "MARTYROL.": [
  "", 
  {
   "Hier.": "martyrologium Hieronymianum q. d. (recensio Gallica), sc. fasti ecclesiae perperam Hieronymo adscripti", 
   "9 Kal. Ian.": "a. diem 9 Kal. Ian.", 
   "isag.": "isagogica (sc. epist. Chromatii et Heliodori, epist. Hieronymi, breviarium apostolorum, al.)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM.": [
  "", 
  {
   "vulg.": "versio vulgata", 
   "mand.": "mandata", 
   "vis.": "visiones", 
   "sim.": "similitudines", 
   "Pal.": "versio Palatina"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. THEOD. PRISC.": [
  "Theodori Prisciani appendix", 
  {
   "add.": "additamenta ad THEOD. PRISC.", 
   "simpl. med.": "de simplici medicina liber", 
   "ves. vit.": "de vesicae vitiis capitulum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GRAMM.": [
  "", 
  {
   "suppl.": "opuscula quaedam grammatica supplemento collectionis Keilianae edita, quae non afferuntur notis propriis", 
   "VI": "opuscula quaedam grammatica (fere fragmenta et excerpta) vol. VI collectionis Keilianae edita, quae non afferuntur notis propriis", 
   "de specieb. locut.": "grammaticus quidam, de speciebus locutionis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MISC.": [
  "", 
  {
   "Tir.": "miscellanea Tironiana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. RVF.": [
  "Q. Pompeius (Rufus)", 
  {
   "or. frg. Prisc. gramm. II": "orationum fragm. servatum apud PRISC. gramm. II"
  }, 
  [
   "", 
   "-88", 
   "consul 88 v. Chr.?", 
   ""
  ]
 ], 
 "ALF. AVIT.": [
  "Alfius (vel Alphius) Avitus", 
  {
   "carm. frg.": "carminum fragmenta"
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "PAVL. FEST.": [
  "Paulus Diaconus", 
  {
   "excerpta ex libris Pompeii Festi de significatione verborum": "excerpta ex libris Pompeii Festi de significatione verborum"
  }, 
  [
   "725", 
   "799", 
   "", 
   ""
  ]
 ], 
 "SIGIST.": [
  "Sigisteus", 
  {
   "epist.": "epistula ad Parthenium presbyterum"
  }, 
  [
   "450", 
   "550", 
   "comes", 
   ""
  ]
 ], 
 "IVL. RVF.": [
  "Iulius Rufinianus", 
  {
   "rhet.": "de figuris sententiarum et elocutionis"
  }, 
  [
   "250", 
   "350", 
   "rhetor", 
   ""
  ]
 ], 
 "FERIAL.": [
  "", 
  {
   "Duran. Iul. 23": "militare Duranum ad diem 23 mensis Iulii", 
   "Cum. Mai. 24": "titulis servata, e. g. Cumanum ad diem 24 mensis Maii"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAL. FL.": [
  "C. Valerius Flaccus Setinus Balbus", 
  {
   "Argonautica": "Argonautica"
  }, 
  [
   "0", 
   "90", 
   "", 
   ""
  ]
 ], 
 "PS. GREG. TVR.": [
  "Pseudo-Gregorius Turonensis", 
  {
   "Thom.": "de miraculis Thomae apostoli"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TITIN.": [
  "Titinius", 
  {
   "com.": "comoediarum (fabularum togatarum) fragmenta"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "ITIN.": [
  "", 
  {
   "Theod.": "itin. Theodosii cuiusdam (de situ terrae sanctae)", 
   "Anton. Aug.": "itineraria Antonini Augusti q. d. duo (sc. itin. provin-ciarum et itin. maritimum)", 
   "[rec. B]": "recensio B", 
   "rec. A": "recensio A, sc. prior", 
   "Alex.": "itin. (immo breviarium) Alexandri Magni Traianique contra Persas profectorum", 
   "Anton. Plac.": "itin. Antonini Placentini q. d.", 
   "Burdig.": "itin. Burdigalense", 
   "Eucher.": "itin. Eucherii, sc. de situ Hierosolymae vel Iudaeae ad Faustum (opusculum a plerisque EVCHER. abiudicatum)", 
   "Tungr. (CIL XIII 9158)": "itin. in civitate Tungrorum repertum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMPEL.": [
  "L. Ampelius", 
  {
   "liber memorialis": "liber memorialis"
  }, 
  [
   "200", 
   "299", 
   "", 
   ""
  ]
 ], 
 "GENNAD.": [
  "Gennadius", 
  {
   "[indic. de haer.]": "[indic. de haer.]", 
   "vir. ill.": "de viris illustribus", 
   "dogm.": "definitio ecclesiasticorum dogmatum (de ecclesiasticis dogmatibus)"
  }, 
  [
   "400", 
   "496", 
   "presbyter Massiliensis", 
   ""
  ]
 ], 
 "COPA": [
  "", 
  {
   "copa, elegia appendicis Vergilianae": "copa, elegia appendicis Vergilianae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LABER.": [
  "D. Laberius", 
  {
   "mim.": "mimorum fragmenta"
  }, 
  [
   "-105", 
   "-43", 
   "eques", 
   ""
  ]
 ], 
 "PREC.": [
  "", 
  {
   "Terr.": "Terrae matris", 
   "precatio": "precatio", 
   "herb.": "omnium herbarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAT.": [
  "Cn. Matius", 
  {
   "carm. frg.": "carminum fragmenta", 
   "fam.": "epistula inter Ciceronis epistulas ad familiares servata", 
   "Cic. Att.": "epistula, quam scripsit una cum Trebatio", 
   "epistulae ad Ciceronem": "epistulae ad Ciceronem"
  }, 
  [
   "-70", 
   "10", 
   "", 
   ""
  ]
 ], 
 "PORCAR.": [
  "Porcarius", 
  {
   "mon.": "monita"
  }, 
  [
   "650", 
   "732", 
   "abbas Lerinensis", 
   ""
  ]
 ], 
 "VICTORIN. $1": [
  "Victorinus", 
  {
   "ad Ruric. epist.": "epistula 2 inter epistulas ad Ruricium scriptas"
  }, 
  [
   "450", 
   "550", 
   "(episcopus Foroiuliensis, ut vid.)", 
   ""
  ]
 ], 
 "PELAG. I": [
  "Pelagius I", 
  {
   "defens.": "in defensione trium capitulorum", 
   "epistulas eius v. EPIST. pontif. Gass\u00f3\u2014Batlle": "epistulas eius v. EPIST. pontif. Gass\u00f3\u2014Batlle"
  }, 
  [
   "500", 
   "561", 
   "papa", 
   ""
  ]
 ], 
 "LICINIAN.": [
  "Licinianus", 
  {
   "epist.": "epistulae"
  }, 
  [
   "550", 
   "650", 
   "episcopus Carthaginis Novae", 
   ""
  ]
 ], 
 "SACR.": [
  "", 
  {
   "Arg. Varro ling.": "sacra Argeorum (sc. laterculus sacrariorum quorundam), v. VARRO ling.", 
   "Gelas.": "liber sacramentorum Romanae ecclesiae sive 'sacramentarium Gelasianum vetus'", 
   "Greg.": "sacr. Gregorianum sive Hadrianum", 
   "sacramentaria": "sacramentaria", 
   "Leon.": "sacr. Veronense sive 'Leonianum'"
  }, 
  [
   "", 
   "", 
   "", 
   "(in quibus textus liturgici cum vetustiores tum recentiores collecti sunt, quare tres collectiones notabiliores afferre satis habemus)"
  ]
 ], 
 "GROM.": [
  "", 
  {
   "scripta gromatica, sc. ad artem agrimensorum pertinentia, quorum plurima iam antiquitatis vergentis temporibus in corpus collata sunt (saepe fragmenta, excerpta sim., de quorum aetate nimirum non raro parum constat": "scripta gromatica, sc. ad artem agrimensorum pertinentia, quorum plurima iam antiquitatis vergentis temporibus in corpus collata sunt (saepe fragmenta, excerpta sim., de quorum aetate nimirum non raro parum constat"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DVLC.": [
  "Dulcitius", 
  {
   "Aug. quaest. Dulc.": "quaestiones ad Augustinum missae"
  }, 
  [
   "300", 
   "399", 
   "tribunus et notarius", 
   "v. AVG. quaest. Dulc."
  ]
 ], 
 "RECCARED.": [
  "Reccaredus", 
  {
   "epist. ad Greg. M.": "epistula ad Gregorium Magnum papam"
  }, 
  [
   "550", 
   "601", 
   "rex Gothorum", 
   ""
  ]
 ], 
 "MAXIMIN.": [
  "Maximinus", 
  {
   "[c. pag.]": "[c. pag.]", 
   "[c. haer.]": "[c. haer.]", 
   "[c. Iud.]": "[c. Iud.]", 
   "c. Ambr.": "contra Ambrosium dissertatio, sc. scholiorum codicis Paris", 
   "[serm.]": "[serm.]", 
   "Aug. coll. c. Maximin.": "Maximini cum Augustino disputantis verba", 
   "[hom.]": "[hom.]"
  }, 
  [
   "350", 
   "450", 
   "Arianorum episcopus, Augustini adversarius", 
   ""
  ]
 ], 
 "OPTAT.": [
  "Optatus", 
  {
   "app.": "monumentorum ad Donatistarum historiam pertinentium, quae ab alio collecta Optatus appendicis instar libris suis addiderat, reliquiae", 
   "opus, quod contra Parmenianum Donatistam scripsit": "opus, quod contra Parmenianum Donatistam scripsit", 
   "serm.": "sermo in natali sanctorum innocentium infantum q. d. (minus certum, an genuinus)"
  }, 
  [
   "300", 
   "399", 
   "episcopus Milevitanus Afer", 
   ""
  ]
 ], 
 "MAR. VICTORIN.": [
  "C. Marius Victorinus", 
  {
   "homous.": "de homousio recipiendo", 
   "[ad Iust.]": "[ad Iust.]", 
   "in Phil.": "commentarius in epistulam Pauli ad Philippenses", 
   "hymn.": "hymni (quos olim inter spuria numerabamus)", 
   "in Eph.": "commentarius in epistulam Pauli ad Ephesios", 
   "in Gal.": "commentarius in epistulam Pauli ad Galatas", 
   "rhet.": "explanationes in rhetoricam Ciceronis (sc. CIC. inv.)", 
   "gramm.": "scripta ad grammaticam pertinentia", 
   "defin.": "de definitionibus", 
   "adv. Arium": "adversus Ar(r)ium libri IV", 
   "[verb. script.]": "[verb. script.]", 
   "[Boeth. in Porph. comm. pr.]": "[Boeth. in Porph. comm. pr.]", 
   "gen. div. verb.": "de generatione divini verbi (ad Candidum)", 
   "Porph. isag.": "Porphyrii isagoge e graeco versa"
  }, 
  [
   "281", 
   "363", 
   "rhetor urbis Romae", 
   ""
  ]
 ], 
 "FRG. $2": [
  "", 
  {
   "Vat.": "iuris anteiustiniani fragmenta Vaticana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRG. $1": [
  "", 
  {
   "med. Tolet.": "fragmentum (?) medicum codice Toletano", 
   "Bob. gramm.": "fragmenta et frustula nonnulla codicibus olim Bobiensibus servata, quae ad grammaticam pertinent", 
   "Mur.": "fragmentum Muratorianum", 
   "liturg.": "fragmenta liturgica (sc. series duae quodammodo pertinentes ad liturgiam Gallicanam)", 
   "V 566,9": "de nomine et pronomine, vol. V p. 566 lin. 9 Keil", 
   "VI 629,22": "de versibus, de finalibus syllabis, de structuris, de metris, vol. VI p. 629 lin. 22 Keil", 
   "liturg. (Pap. Corp. 48)": "alia fragmenta liturgica, e. g. fragm. papyraceum quoddam", 
   "de grad. cogn.": "fragmentum de gradibus cognationum", 
   "VII 544,44": "de arte grammatica Sergii et de littera, de accentibus, de propriis nominibus, de nomine, vol. VII p. 544 lin. 44 Keil", 
   "Manich.": "fragmenta Manichaea vel de Manichaeis", 
   "de form. Fab.": "fragmentum Vindobonense de formula Fabiana", 
   "de iure fisci": "fragmenta Veronensia de iure fisci", 
   "Enoch": "fragmentum versionis latinae libri (vel libri 1) Enoch (sc. cap. 106)", 
   "in Hebr.": "commentarius in epist. ad Hebraeos, qui ANON. in Hebr. adhibuit", 
   "iur. publ.": "fragmentum Vindobonense de iure publico", 
   "de iudic.": "fragmenta Berolinensia de iudiciis", 
   "fab. (Pap. Corp. 40)": "fragmenta fabularum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLAVTIVS": [
  "Plautius", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "SEVERIAN.": [
  "Severianus", 
  {
   "hom. de pace": "homilia de pace", 
   "[hom. de python.]": "homilia de pythonibus et maleficiis"
  }, 
  [
   "380", 
   "408", 
   "episcopus Gabalensis", 
   ""
  ]
 ], 
 "IVVENT.": [
  "Iuventius", 
  {
   "com.": "comoediarum fragmenta"
  }, 
  [
   "-150", 
   "-50", 
   "poeta", 
   ""
  ]
 ], 
 "ADVERS.": [
  "", 
  {
   "Aug. c. adv. leg.": "adversarii verba, contra quem scripsit Augustinus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEP.": [
  "Cornelius Nepos", 
  {
   "Epam.": "Epaminondas (XV)", 
   "Lys.": "Lysander (VI)", 
   "Hann.": "Hannibal (XXIII)", 
   "Cim.": "Cimon (V)", 
   "Cato": "Cato (XXIV)", 
   "reg.": "reges (XXI)", 
   "Ages.": "Agesilaus (XVII)", 
   "Att.": "Atticus (XXV)", 
   "Milt.": "Miltiades (I)", 
   "Timol.": "Timoleon (XX)", 
   "Thras.": "Thrasybulus (VIII)", 
   "frg.": "fragmenta", 
   "Phoc.": "Phocion (XIX)", 
   "Dion": "Dion (X)", 
   "Chabr.": "Chabrias (XII)", 
   "Ham.": "Hamilcar (XXII)", 
   "Con.": "Conon (IX)", 
   "Arist.": "Aristides (III)", 
   "Paus.": "Pausanias (IV)", 
   "praef.": "praefatio", 
   "Iph.": "Iphicrates (XI)", 
   "Pel.": "Pelopidas (XVI)", 
   "Timoth.": "Timotheus (XIII)", 
   "Them.": "Themistocles (II)", 
   "Alc.": "Alcibiades (VII)", 
   "Eum.": "Eumenes (XVIII)", 
   "Dat.": "Datames (XIV)"
  }, 
  [
   "-100", 
   "-28", 
   "", 
   ""
  ]
 ], 
 "DAR.": [
  "Darius", 
  {
   "epistula ad Augustinum": "epistula ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CVRT.": [
  "Q. Curtius Rufus", 
  {
   "historiarum Alexandri Magni quae exstant": "historiarum Alexandri Magni quae exstant"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "PAPIN.": [
  "Papinius", 
  {
   "epigr. Varro ling.": "epigrammation quod servavit VARRO ling.", 
   "dig.": "fragmenta in digestis aliisve collectionibus servata", 
   "resp. frg.": "responsorum fragmenta"
  }, 
  [
   "40", 
   "96", 
   "", 
   ""
  ]
 ], 
 "PROC.": [
  "Proculus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "0", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CYRILL.": [
  "Cyrillus Alexandrinus", 
  {
   "hom. pasch.": "homilia, immo epistula paschalis septima decima", 
   "epist. Carth.": "epistula ad concilium Carthaginiense anno 419 habitum missa"
  }, 
  [
   "375", 
   "444", 
   "episcopus", 
   ""
  ]
 ], 
 "DOSITH.": [
  "Dositheus", 
  {
   "gramm.": "artis grammaticae"
  }, 
  [
   "300", 
   "399", 
   "", 
   "quam graece vertit, quae exstant"
  ]
 ], 
 "AVGVSTVS": [
  "imp. Augustus", 
  {
   "operum reliquiae a scriptoribus servatae (praeter EPIST. imp. Aug.), e. g. carmen apud MART.": "operum reliquiae a scriptoribus servatae (praeter EPIST. imp. Aug.), e. g. carmen apud MART."
  }, 
  [
   "-63", 
   "14", 
   "", 
   ""
  ]
 ], 
 "SIC. FLACC.": [
  "Siculus Flaccus", 
  {
   "grom.": "liber gromaticus de condicionibus agrorum"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "IVL. SEV.": [
  "Iulius Severianus", 
  {
   "rhet.": "praecepta artis rhetoricae"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PHAEDR.": [
  "Phaedrus", 
  {
   "fabulae": "fabulae"
  }, 
  [
   "-20", 
   "60", 
   "Augusti libertus", 
   ""
  ]
 ], 
 "TER. MAVR.": [
  "Terentianus Maurus", 
  {
   "carmina de litteris, de syllabis, de metris": "carmina de litteris, de syllabis, de metris"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "ARNOB.": [
  "Arnobius <Africanus>", 
  {
   "nat.": "adversus nationes (vel gentes)"
  }, 
  [
   "250", 
   "330", 
   "rhetor", 
   ""
  ]
 ], 
 "PS. BOETH.": [
  "Pseudo-Boethius", 
  {
   "[grom.]": "demonstratio artis geometricae vel geometria prima", 
   "fid. cath.": "de fide catholica", 
   "[geom.]": "geometria (sc. altera)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SER.": [
  "Q. Serenus", 
  {
   "med.": "liber medicinalis"
  }, 
  [
   "100", 
   "299", 
   "", 
   ""
  ]
 ], 
 "VITA": [
  "", 
  {
   "Fulg. Rusp.": "vita Fulgentii Ruspensis", 
   "Abr. B II": "vita Abrahae eremitae latine versa, versio B pars altera (sc. vita Mariae meretricis)", 
   "Hippocr.": "vita Hippocratis", 
   "Caes. Arel.": "vita Caesarii episcopi Arelatensis", 
   "Nicet.": "vita Nicetii episcopi Lugdunensis", 
   "Hil. Arel.": "vita Hilarii Arelatensis", 
   "Anton.": "vitae Antonii monachi ab Athanasio episcopo Alexandrino conscriptae versio lat.", 
   "Amator.": "vita Amatoris episcopi Autissiodorensis", 
   "Genov.": "vita Genovefae virginis Parisiensis", 
   "Eugen.": "vita Eugeniae", 
   "Lucani": "vita Lucani ex Vaccae q. d. commentario sublata", 
   "vitae scriptorum paganorum": "vitae scriptorum paganorum", 
   "Athan.": "vitae Athanasii historia acephala e graeco versa", 
   "Adae": "vita Adae et Evae apocrypha latine versa", 
   "Iuv.": "vita Iuvenalis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[NICET.]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "PS. NICET. pasch."
  ]
 ], 
 "SVEIVS": [
  "Sueius", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "VICTOR.": [
  "Victorius Aquitanus", 
  {
   "praef.": "praefatio", 
   "pasch.": "cursus paschalis", 
   "Alc. Avit. epist.": "epistula ad Alcimum Avitum", 
   "calc.": "calculus"
  }, 
  [
   "400", 
   "488", 
   "", 
   ""
  ]
 ], 
 "EPIL.": [
  "", 
  {
   "bibl. Esth.": "epilogi vel subscriptiones anon. in codicibus additae libris biblicis, e. g. epilogus libri Esth."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. ANTON.": [
  "", 
  {
   "orationis C. Antonio Hybridae (qui revera a. 64 a. Chr. contra Ciceronem dixerat) suppositae fragm. servatum apud QVINT. inst. 9,3,94": "orationis C. Antonio Hybridae (qui revera a. 64 a. Chr. contra Ciceronem dixerat) suppositae fragm. servatum apud QVINT. inst. 9,3,94"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDASC.": [
  "", 
  {
   "Ter. Hec.": "didascaliae Terentii comoediarum, e. g. didasc. Hecyrae altera", 
   "Plaut. Stich.": "didascaliae Plauti comoediarum (fere Stichi)", 
   "apost.": "didascaliae apostolorum latine versae quae exstant"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DESCENS.": [
  "", 
  {
   "rec. A": "recensio A", 
   "rec. B": "recensio B", 
   "Christi": "descensus Christi ad inferos, sc. euangelii Nicodemi pars posterior e graeco versa et retractata"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[ANATOL.]": [
  "Anatolius Constantinopolitanus", 
  {
   "ad Leonem Magnum inter eiusdem epistulas": "ad Leonem Magnum inter eiusdem epistulas"
  }, 
  [
   "400", 
   "458", 
   "episcopus", 
   ""
  ]
 ], 
 "CONST.": [
  "", 
  {
   "abb.": "constitutum (fragmentum) abbatissae cuiusdam monasterii a Caesario Arel. conditi de iure sepulturae servando", 
   "Sirmond.": "constitutiones Sirmondianae q. d., sc. principum constitutiones codice Theodosiano nondum edito collectae", 
   "veteran.": "constitutiones veteranorum sive diplomata militaria"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FENEST.": [
  "Fenestella", 
  {
   "hist.": "fragmenta a scriptoribus servata"
  }, 
  [
   "-52", 
   "35", 
   "historicus", 
   ""
  ]
 ], 
 "ORIBAS.": [
  "Oribasius", 
  {
   "eup.": "ad Eunapium sive", 
   "syn.": "synopsis ad Eustathium", 
   "opera e graeco versa (exstant duae versiones)": "opera e graeco versa (exstant duae versiones)"
  }, 
  [
   "325", 
   "403", 
   "medicus", 
   ""
  ]
 ], 
 "REG.": [
  "", 
  {
   "urb.": "de regionibus urbis Romae libelli recensio altera", 
   "eccl. Carth.": "registri ecclesiae Carthaginiensis excerpta anonyma"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[PS. EVSEB. CAES.]": [
  "Pseudo-Eusebius", 
  {
   "[hom.]": "homiliae"
  }, 
  [
   "400", 
   "599", 
   "", 
   "EVSEB. EMES. serm. 29,40"
  ]
 ], 
 "VALG.": [
  "C. Valgius Rufus", 
  {
   "carm. frg.": "carminum fragm."
  }, 
  [
   "-65", 
   "-12", 
   "", 
   ""
  ]
 ], 
 "SYMM.": [
  "L. Aurelius Avianius Symmachus", 
  {
   "or.": "orationes", 
   "pater Symm. epist.": "epistula ad filium", 
   "epist.": "epistulae", 
   "rel.": "relationes", 
   "frg.": "variorum operum fragmenta"
  }, 
  [
   "300", 
   "376", 
   "Q. pater", 
   ""
  ]
 ], 
 "ASPER": [
  "Vergilius Asper", 
  {
   "gramm. Verg.": "grammatica Vergiliana"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "MET.": [
  "", 
  {
   "in Naev. Bass. gramm.": "versus in Naevium, quo Metelli poetae versu lacessiti respondisse dicebantur"
  }, 
  [
   "", 
   "", 
   "", 
   "servatus apud BASS. gramm. VI"
  ]
 ], 
 "MANICH.": [
  "Manichaeus", 
  {
   "Aug. c. epist. fund.": "sc. operum a Mani eiusque sectatoribus anon. conscriptorum vel versorum fragmenta a scriptoribus servata, e. g. fragm. apud AVG. c. epist. fund."
  }, 
  [
   "216", 
   "277", 
   "", 
   ""
  ]
 ], 
 "PS. ALEX.": [
  "Alexander <Magnus>", 
  {
   "c. Dind. coll.": "cum Dindimo, rege Bragmanorum, de philosophia per litteras facta collatio (ficta)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SVLP. APOLL.": [
  "C. Sulpicius Apollinaris", 
  {
   "Verg. Aen.": "hexasticha in Aeneidos libris", 
   "perioch. Ter. Andr.": "periochae comoediarum Terentii, e. g. Andriae"
  }, 
  [
   "50", 
   "150", 
   "grammaticus", 
   ""
  ]
 ], 
 "GLOSS.": [
  "", 
  {
   "biling.": "glossaria bilinguia (sc. graeca et latina) in papyris et membranis non post saec. VIIin.  scriptis reperta", 
   "Thesaurus glossarum emendatarum, sc. index alphabeticus glossarum coactarum in Corpus glossariorum latinorum": "Thesaurus glossarum emendatarum, sc. index alphabeticus glossarum coactarum in Corpus glossariorum latinorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALF.": [
  "P. Alfenus Varus Cremonensis", 
  {
   "dig.": "fragmenta in digesta (et alibi) servata"
  }, 
  [
   "1", 
   "99", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "CRASS.": [
  "L. Licinius Crassus orator", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. orat.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud CIC. orat."
  }, 
  [
   "-140", 
   "-91", 
   "", 
   ""
  ]
 ], 
 "PHILO": [
  "Philo(n) Alexandrinus", 
  {
   "quaest. in gen.": "quaestiones in genesi et solutiones", 
   "vita contempl.": "de vita contemplativa sive de statu Essaeorum", 
   "opera latine versa": "opera latine versa"
  }, 
  [
   "-15", 
   "40", 
   "", 
   ""
  ]
 ], 
 "TESTIM.": [
  "", 
  {
   "Corp. Christ.": "testimonia de patre et filio et spiritu sancto"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $1": [
  "", 
  {
   "dendr.": "decreta dendrophororum", 
   "Salens. (Inscr. Maroc. Gascou 307)": "Salensium in honorem M. Sulpicii M. f. Felicis", 
   "Aquil. (CIL V 875)": "Aquileiensium, e. g. in honorem C. Minicii Itali", 
   "Hercul. (CIL X 1453)": "Herculanensium in honorem MM. Remmiorum Ruforum patris et filii", 
   "decur.": "decreta decurionum\u00a0selecta", 
   "Gelas.": "decretum Gelasianum de libris recipiendis et non recipiendis q. d.", 
   "Sentin. (CIL XI 5748)": "Sentinatium", 
   "Volsin. (CIL XI 2702)": "Volsiniensium", 
   "Puteol. (CIL X 1786)": "Puteolanorum in honorem Q. Octavii Agathae patroni", 
   "Pol. (Inscr. Ital. X 1,84)": "Polensium", 
   "[Ferent. Prisc.]": "mentio fit alicuius decreti senatus Ferentinatium, verba eius tamen non perscribuntur", 
   "Tiburt. (CIL XIV 3679a)": "Tiburtinorum in honorem C. Sextilii Ephebi", 
   "Pisaur. (CIL XI 6335)": "Pisaurensium", 
   "Pis. (CIL XI 1420)": "Pisanorum de sacris faciundis L. Caesari, Augusti f.", 
   "fabr.": "decreta fabrum (sc. de patronis cooptandis)", 
   "Reg. (CIL XI 970)": "f. et centonariorum Regiensium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. EXIG.": [
  "Dionysius Exiguus", 
  {
   "[paenit. Thaisis praef.]": "praefatio, quae in nonnullis codicibus vitae vel paenitentiae q. d. sanctae Thaisis meretricis anteposita est", 
   "inv. cap. Ioh.": "de inventione capitis Iohannis Baptistae relatio e graeco versa", 
   "pasch.": "argumenta paschalia", 
   "[vita Thaisis]": "vita vel paenitentia sanctae Thaisis meretricis", 
   "praef.": "praefationes, sc. epistulae dedicatoriae collectionum et versionum a Glorie collectae", 
   "epist. de pasch.": "epistulae duae de computo paschali (1: ad Petronium; 2: ad Bonifatium et Bonum),", 
   "Conc.": "eae Dionysii versiones vel versionum partes, quae actis conciliorum a Schwartz collectis continentur", 
   "Greg. Nyss. creat.": "Gregorii Nysseni liber \u03a0\u03b5\u03c1\u03af \u03ba\u03b1\u03c4\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae\u03c2 \u03b1\u03bd\u03b8\u03c1\u03ce\u03c0\u03bf\u03c5 e graeco versus (de conditione vel creatione hominis)", 
   "[reg. Pachom.]": "Pachomii abbatis regula (sc. regula angeli q. d.) e graeco versa", 
   "vita Pachom.": "vita Pachomii abbatis e graeco versa", 
   "cycl.": "cycli paschales", 
   "[Procl. fid.]": "[Procl. fid.]", 
   "Avell.": "libellus Dioscori et Chaeremonis apocrisiariorum a Dionysio versus", 
   "[Procl. or.]": "[Procl. or.]", 
   "epist. ad Eugipp.": "epistula ad Eugippium (qua dedicatur Greg. Nyss. creat.)", 
   "Proter. epist.": "Proterii episcopi Alexandrini epistula ad Leonem papam de pascha"
  }, 
  [
   "470", 
   "540", 
   "monachus Scythicus", 
   ""
  ]
 ], 
 "DECRET. $3": [
  "", 
  {
   "Amitern. (Ann\u00e9e \u00c9pigr. 1937 n. 119)": "a decurionibus Amiterninis C. Sallio Pompeiano Sofronio oblati", 
   "Naunit. (CIL IX 10)": "ab universo populo emporii Naunitani M. Sal. Balerio oblati", 
   "patron.": "decreta patronatus selecta", 
   "Strabon. (CIL VI 37045)": "decreta duo Cn. Pompeii Sex. f. Strabonis cos.", 
   "de past. pec. (CIL VIII 23956)": "decretum municipale aliquod, ut vid., de pastu pecorum", 
   "Paulli (CIL I2 614)": "decretum L. Aemilii L. f. Paulli procos. Hispaniae", 
   "pontif. (CIL X 8259)": "decretum collegii pontificum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DECRET. $2": [
  "", 
  {
   "Herculan. Truent. (Ephem. Epigr. VIII 210 p. 52)": "decretum Herculaniorum (i. cultorum Herculis) Truentinorum (?)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CVRIO PATER": [
  "C. Scribonius Curio pater", 
  {
   "orationis (?) cuiusdam fragm. servatum apud PRISC. gramm. II": "orationis (?) cuiusdam fragm. servatum apud PRISC. gramm. II"
  }, 
  [
   "-150", 
   "-53", 
   "", 
   ""
  ]
 ], 
 "ATIL.": [
  "Atilius", 
  {
   "com.": "comoediarum fragmenta"
  }, 
  [
   "100", 
   "199", 
   "", 
   ""
  ]
 ], 
 "AGROEC.": [
  "Agroecius", 
  {
   "gramm.": "ars de orthographia"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "PASCHAS.": [
  "Paschasius Dumiensis", 
  {
   "epist.": "epistula ad Eugippium", 
   "verba patr.": "verba sive apopthegmata patrum"
  }, 
  [
   "500", 
   "584", 
   "", 
   ""
  ]
 ], 
 "[CAPITOL.]": [
  "Iulius Capitolinus", 
  {}, 
  [
   "350", 
   "450", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "PS. HIL.": [
  "Pseudo-Hilarius Pictaviensis", 
  {
   "euang.": "de euangelio", 
   "rec. A 394": "recensio A, vers. 394 (ceterum v. euang.)", 
   "[elench.]": "capitulorum elenchus commentariorum Hilarii in Matthaeum", 
   "hymn.": "hymni duo a Feder inter spuria editi", 
   "prat.": "de spiritali prato (fragmentum?)", 
   "hymn. de Christo": "hymnus de Christo", 
   "libell.": "epistula seu libellus apologeticus (sc. contra Arianos)", 
   "rec. B 389": "recensio B, vers. 389 (quam recensionem usque adhuc Victorino cuidam poetae tribuebamus)", 
   "gen.": "in genesin ad Leonem papam", 
   "balt. cast.": "de balteo castitatis (fragmentum?)", 
   "in psalm.": "tractatus in psalmos", 
   "epist. ad fil.": "epistula ad Abram filiam", 
   "[dedic. eccl.]": "sermo de dedicatione ecclesiae", 
   "Macc.": "carmen de martyrio Maccabaeorum", 
   "tract.": "tractatus tres a Mai editi"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "[VOPISC.]": [
  "Fl. Vopiscus Syracusius", 
  {}, 
  [
   "117", 
   "284", 
   "e numero scriptorum historiae Augustae fictorum", 
   "HIST. AVG."
  ]
 ], 
 "RVT. NAM.": [
  "Rutilius Claudius Namatianus", 
  {
   "de reditu suo sive iter Gallicum": "de reditu suo sive iter Gallicum"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "DAMAS.": [
  "Damasus", 
  {
   "carm.": "carmina, sc. epigrammata a Ferrua inter genuina recepta", 
   "epistulae duae ad Hieronymum (Epist. pontif. 239. 253) et tertiae fragmenta": "epistulae duae ad Hieronymum (Epist. pontif. 239. 253) et tertiae fragmenta"
  }, 
  [
   "305", 
   "384", 
   "papa", 
   ""
  ]
 ], 
 "PS. APVL.": [
  "Pseudo-Apuleius", 
  {
   "tit. morb.": "index titulorum morborum", 
   "praef.": "praefatio", 
   "herb.": "herbarium (de medicaminibus herbarum)", 
   "herm.": "\u03a0\u03b5\u03c1\u1f76 \u1f11\u03c1\u03bc\u03b7\u03bd\u03b5\u03af\u03b1\u03c2 (opusculum fortasse genuinum)", 
   "[rem. sal.]": "de remediis salutaribus q. d. fragmentum", 
   "app.": "appendix curarum, quae in codice uno vel altero additae sunt", 
   "Ascl.": "Asclepius", 
   "interpol.": "interpolationes (maxime e Dioscoride sumptae) ad nomina naturamque herbarum pertinentes, quibus et singulae codicum familiae et singuli codices aucti sunt (redduntur apud Howald/Sigerist aut litteris minoribus aut exulant in adnotatione critica)"
  }, 
  [
   "300", 
   "399", 
   "", 
   "(retractatio latina libri Hermetici graeci fere deperditi; sed non ita pauca exstant coptice)"
  ]
 ], 
 "AVF. BASS.": [
  "Aufidius Bassus", 
  {
   "hist.": "fragm. apud SEN. suas. servata"
  }, 
  [
   "-50", 
   "50", 
   "historicus", 
   ""
  ]
 ], 
 "PACON.": [
  "L. Sextilius Paconi(an)us", 
  {
   "carm. frg.": "carminis fragm."
  }, 
  [
   "", 
   "35", 
   "", 
   ""
  ]
 ], 
 "VAL. CEM.": [
  "Valerianus Cemenelensis", 
  {
   "hom.": "homiliae", 
   "epist.": "epistula ad monachos"
  }, 
  [
   "400", 
   "460", 
   "episcopus", 
   ""
  ]
 ], 
 "FELIX": [
  "Felix et socii", 
  {
   "anth.": "carmina in anthologiam latinam recepta", 
   "epistula ad Cyprianum": "epistula ad Cyprianum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIRO": [
  "M. Tullius Tiro", 
  {
   "Gell.": "variorum operum fragmenta, e. g. fragm. servatum apud GELL."
  }, 
  [
   "-103", 
   "-4", 
   "", 
   ""
  ]
 ], 
 "VERG.": [
  "P. Vergilius Maro", 
  {
   "catal.": "carmina kat\u00e0 lept\u00f3n", 
   "ecl.": "eclogae sive bucolica", 
   "epist. Macr. Sat.": "epistulae ad imp. Augustum fragm. (vix spurium) servatum apud MACR. Sat.", 
   "georg.": "georgica", 
   "Aen.": "Aeneis"
  }, 
  [
   "-70", 
   "-19", 
   "", 
   ""
  ]
 ], 
 "PETIL.": [
  "Petilianus", 
  {
   "Aug. c. Petil.": "fragmenta, e. g. fragm. servatum apud AVG. c. Petil."
  }, 
  [
   "350", 
   "450", 
   "episcopus Donatista Cirtensis", 
   ""
  ]
 ], 
 "ATTA": [
  "T. Quin(c)tius Atta", 
  {
   "carm. frg.": "carminum fragm. unicum (ex epigrammatibus)", 
   "com.": "comoediarum (sc. togatarum) fragmenta"
  }, 
  [
   "-150", 
   "-77", 
   "", 
   ""
  ]
 ], 
 "FAB. PICT.": [
  "Fabius Pictor", 
  {
   "iuris pontificii (operis a nonnullis FAB. MAX. tributi) fragmenta a scriptoribus servata, e. g. fragm. apud GELL.": "iuris pontificii (operis a nonnullis FAB. MAX. tributi) fragmenta a scriptoribus servata, e. g. fragm. apud GELL.", 
   "hist.": "librorum historicorum (sc. annalium) fragmenta"
  }, 
  [
   "-254", 
   "-201", 
   "", 
   "vix Q. Fab. Pict., qui annales graecos conscripsit"
  ]
 ], 
 "DIFF.": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PACAT.": [
  "Pacatus", 
  {
   "c. Porph. frg.": "contra Porphyrium fragmenta"
  }, 
  [
   "340", 
   "399", 
   "", 
   ""
  ]
 ], 
 "EVTR. VAL.": [
  "Eutropius Valentiae", 
  {
   "epist.": "epistulae"
  }, 
  [
   "350", 
   "610", 
   "episcopus Hispanus", 
   ""
  ]
 ], 
 "GALL.": [
  "C. Aelius Gallus", 
  {
   "carm. frg.": "carminum fragmenta", 
   "epigr.": "epigramma", 
   "Vib. Seq. geogr.": "fragm. servatum apud VIB. SEQ. geogr.", 
   "Fest.": "operis de significatione verborum, quae ad ius civile pertinent, fragmenta a scriptoribus servata, e. g. fragm. apud FEST."
  }, 
  [
   "-50", 
   "50", 
   "", 
   ""
  ]
 ], 
 "TRABEA": [
  "Trabea", 
  {
   "com.": "comoediarum palliatarum fragmenta"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "[PVLCH.]": [
  "(Aelia) Pulcheria Augusta", 
  {
   "[Leo M. epist.]": "epistula ad Leonem Magnum latine versa"
  }, 
  [
   "", 
   "", 
   "", 
   "CONC. S II 3,1 p. 9,22"
  ]
 ], 
 "COM.": [
  "", 
  {
   "pall. inc.": "comoediae palliatae poetarum incertorum fragmenta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTONIN. HONORAT.": [
  "Antoninus Honoratus", 
  {
   "epist. ad Arc.": "hortatoria ad martyrium epistula ad Arcadium quendam"
  }, 
  [
   "400", 
   "450", 
   "episcopus Afer (sc. Constantinae civitatis)", 
   ""
  ]
 ], 
 "CINC.": [
  "L. Cincius", 
  {
   "fragmenta a scriptoribus servata, e. g. fragm. apud FEST": "fragmenta a scriptoribus servata, e. g. fragm. apud FEST"
  }, 
  [
   "-250", 
   "-150", 
   "", 
   ""
  ]
 ], 
 "ACC.": [
  "Lucius Accius <Pisaurensis>", 
  {
   "carm. frg.": "carminum (praeter scaenica) fragmenta", 
   "praetext.": "praetextarum fragmenta", 
   "trag.": "tragoediarum fragmenta"
  }, 
  [
   "-170", 
   "90", 
   "", 
   ""
  ]
 ], 
 "AMBR.": [
  "Ambrosius", 
  {
   "obit. Valent.": "de obitu Valentiniani (sc. iunioris imperatoris)", 
   "bon. mort.": "de bono mortis", 
   "virginit.": "de virginitate", 
   "incarn.": "de incarnationis dominicae sacramento", 
   "in psalm.": "explanatio XII psalmorum", 
   "Isaac": "de Isaac et anima", 
   "inst. virg.": "de institutione virginis (de S. Mariae virginitate perpetua)", 
   "fug. saec.": "de fuga saeculi", 
   "[Carm. epigr.]": "epigrammata, quae olim medii aevi auctoribus freti (lapides perierunt) plane Ambrosio ascribebamus, nunc a CE non segregare tutius esse censemus", 
   "virg.": "de virginibus", 
   "Noe": "de Noe", 
   "in Luc.": "expositio euangelii sec. Lucam", 
   "Hel.": "de Helia et ieiunio", 
   "Iob": "libri de interpellatione Iob et David", 
   "patr.": "de patriarchis", 
   "tituli": "tituli, qui in basilica Ambrosiana imaginibus quibusdam inscripti Ambrosii (aut Prudentii) esse traduntur", 
   "symb.": "explanatio symboli", 
   "obit. Theod.": "de obitu Theodosii (sc. imperatoris)", 
   "c. Aux.": "sermo contra Auxentium (Arianum) de basilicis tradendis", 
   "Iac.": "de Iacob et vita beata", 
   "parad.": "de paradiso", 
   "paenit.": "de paenitentia", 
   "sacr.": "de sacramentis", 
   "in psalm 118 serm. 22": "expositio in psalmum 118, sermo 22", 
   "exc. Sat.": "de excessu fratris (sc. Satyri)", 
   "Abr.": "de Abraham", 
   "off.": "de officiis ministrorum", 
   "Nab.": "de Nabuthae (i. Naboth)", 
   "vid.": "de viduis", 
   "myst.": "de mysteriis", 
   "hex.": "(h)exa(e)meron", 
   "exhort. virg.": "exhortatio virginitatis", 
   "spir.": "de spiritu sancto", 
   "Cain et Ab.": "de Cain et Abel", 
   "Tob.": "de Tobia", 
   "fid.": "de fide (ad Gratianum Augustum)", 
   "Ioseph": "de Ioseph (sc. patriarcha)", 
   "epist. epistulae": "diverse", 
   "apol. Dav.": "de apologia prophetae David ad Theodosium Augustum"
  }, 
  [
   "339", 
   "397", 
   "episcopus Mediolanensis", 
   ""
  ]
 ], 
 "[LAMPR.]": [
  "Aelius Lampridius (e numero scriptorum historiae Augustae fictorum, quos nunc una nota HIST. AVG. comprehendimus)", 
  {}, 
  [
   "350", 
   "450", 
   "", 
   "HIST. AVG."
  ]
 ], 
 "FVLG. RVSP.": [
  "Fulgentius Ruspensis", 
  {
   "c. Arrian.": "contra Arianos (sc. dicta vel obiectiones regis Thrasamundi et contra ea responsiones)", 
   "epist.": "epistulae", 
   "ad Eugipp. frg.": "'ad Eugippium presbyterum contra sermonem cuiusdam Pelagiani opuscula' deperdita", 
   "rem. pecc.": "de remissione peccatorum", 
   "serm. sermones": "diverse", 
   "c. Fab. frg.": "fragmenta operis contra gesta falsa Fabiani Ariani", 
   "dub.": "sermones dubii in Corp. Christ. editi", 
   "incarn.": "de incarnatione ad Scarilam", 
   "praedest.": "de veritate praedestinationis et gratiae", 
   "fid.": "de fide ad Petrum", 
   "ad Tras.": "ad T(h)rasamundum regem Vandalorum", 
   "c. Fastid.": "contra Fastidiosum Arianum", 
   "ad Monim.": "ad Monimum", 
   "psalm. abeced.": "psalmus abecedarius (sc. contra Arianos)", 
   "trin.": "de trinitate"
  }, 
  [
   "462", 
   "533", 
   "in Byzacena episcopus", 
   ""
  ]
 ], 
 "FAB. MAX.": [
  "Q. Fabius Maximus Servilianus", 
  {
   "hist.": "fragmenta"
  }, 
  [
   "-200", 
   "-201", 
   "historiarum scriptor", 
   ""
  ]
 ], 
 "ATT.": [
  "T. Pomponius Atticus", 
  {
   "epistularum ad Ciceronem amicum": "epistularum ad Ciceronem amicum"
  }, 
  [
   "-110", 
   "-32", 
   "", 
   "fragm. servata apud CIC. Att."
  ]
 ], 
 "SEDAT.": [
  "Sedatus", 
  {
   "ad Ruric. epist.": "epistula 8 inter epistulas ad Ruricium scriptas", 
   "serm.": "sermones tres"
  }, 
  [
   "450", 
   "550", 
   "episcopus Nemausensis", 
   ""
  ]
 ], 
 "SCRIB. LARG.": [
  "Scribonius Largus", 
  {
   "compositiones": "compositiones"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "SCHEM.": [
  "incerti auctoris", 
  {
   "dian.": "sc(h)emata dianoeas"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. MVSA": [
  "(Pseudo-) Antonius Musa", 
  {
   "app.": "appendix unius codicis", 
   "herb. Vett.": "libellus de herba Vettonica (betonica)"
  }, 
  [
   "400", 
   "499", 
   "Augusti medicus", 
   ""
  ]
 ], 
 "PENTAD.": [
  "Pentadius", 
  {
   "anth.": "carmina"
  }, 
  [
   "nicht datierbar", 
   "", 
   "", 
   ""
  ]
 ], 
 "[AGOR.]": [
  "M. Vettius Agorius Praetextatus", 
  {
   "[carm. epigr.]": "carmen nesciocuius persona M. Vettii Agorii Praetextati"
  }, 
  [
   "315", 
   "384", 
   "", 
   ""
  ]
 ], 
 "CATO NEP.": [
  "M. Porcius Cato", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm. II": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud PRISC. gramm. II"
  }, 
  [
   "-200", 
   "-118", 
   "Censorii nepos", 
   ""
  ]
 ], 
 "COLVMB. HYENS.": [
  "Columba (Columcille) <Hyensis>", 
  {
   "fabric.": "hymnus abecedarius de fabrica mundi"
  }, 
  [
   "521", 
   "597", 
   "abbas", 
   ""
  ]
 ], 
 "SCIP. MAI.": [
  "P. Cornelius Scipio Africanus maior", 
  {
   "or. frg. Gell.": "orationum fragmenta (dubia), e. g. fragm. servatum apud GELL."
  }, 
  [
   "-235", 
   "-183", 
   "", 
   ""
  ]
 ], 
 "[PLIN. VAL.]": [
  "Plinius Valerianus", 
  {
   "medicina Plinii (Valeriani)": "medicina Plinii (Valeriani)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TVRRAN.": [
  "Turranius (T. Turranius Niger)", 
  {
   "Diom. gramm.": "de agri cultura fragm. servatum apud DIOM. gramm."
  }, 
  [
   "-100", 
   "-1", 
   "Varronis amicus", 
   ""
  ]
 ], 
 "DIVISIO": [
  "", 
  {
   "orb.": "divisio orbis terrarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROVINC.": [
  "", 
  {
   "laterc. Veron.": "provinciarum laterculus codicis Veronensis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EVGEN.": [
  "Eugenius", 
  {
   "epistula ad cives suos, v. GREG. TVR. Franc.": "epistula ad cives suos, v. GREG. TVR. Franc.", 
   "epistula ad magistratum quendam et liber fidei catholicae, v. VICT. VIT.": "epistula ad magistratum quendam et liber fidei catholicae, v. VICT. VIT."
  }, 
  [
   "450", 
   "505", 
   "episcopus Carthaginiensis", 
   ""
  ]
 ], 
 "SEDVL.": [
  "Sedulius", 
  {
   "[carm. app.]": "carminum appendix ad Sedulium spectantium", 
   "op. pasch.": "opus paschale", 
   "epist.": "epistulae ad Macedonium presbyterum", 
   "carm. pasch.": "carmen paschale", 
   "hymn.": "hymni"
  }, 
  [
   "350", 
   "450", 
   "presbyter", 
   "ANTH. 491\u2014493"
  ]
 ], 
 "RVT. MAX.": [
  "Rutilius Maximus", 
  {
   "dig.": "fragm. servatum in DIG."
  }, 
  [
   "200", 
   "299", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "PRIAP.": [
  "", 
  {
   "Priapea": "Priapea"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. SVLP. SEV.": [
  "Pseudo-Sulpicius Severus", 
  {
   "epist.": "appendix VII epistularum Sulpicio Severo suppositarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CHRYSOST.": [
  "Pseudo-Chrysostomus", 
  {
   "serm. M\u00e9l. Geerard I": "sermo (de beato Ioseph) editus M\u00e9langes Geerard I", 
   "hom.": "homiliae in editione Basil. collectae", 
   "de solstit.": "de solstitia et aequinoctia conceptionis et nativitatis d. n. Iesu Christi et Iohannis Baptistae"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "LEX": [
  "", 
  {
   "Iul. de adult. (dig. 48,5,13)": "lex Iulia de adulteriis", 
   "cur. Iov. Simitth. (CIL VIII 14683)": "lex curiae Iovis (vix decretum collegii familiaris) Simitthensis", 
   "Tarent. (CIL I2 590)": "lex municipii Tarentini", 
   "Mamil. (grom. p. 266,4)": "lex Mamilia Roscia Peducaea Alliena Fabia", 
   "Iul. Pap. (dig. 23,2,44 pr.)": "lex vel leges Iulia (sc. de maritandis ordinibus) et Papia Poppaea", 
   "Plaetor. (Cens. 24,3)": "lex Plaetoria (de iurisdictione), fragm. servatum apud CENS. 24,3", 
   "Irnit.": "lex Irnitana", 
   "Papir. (Fest. p. 344)": "lex Papiria, fragm. servatum apud FEST. p. 344", 
   "[epil. p. 410 E.]": "epilogus post tit. 93 editus", 
   "lib. const.": "liber constitutionum (lex Gundobada)", 
   "Salpens. (CIL II 1963)": "lex municipii Salpensani", 
   "arae Aug. Narb. (CIL XII 4333)": "leges arae, e. g. Augusti Narbonensis", 
   "de Germ.": "lex (rogata) Valeria Aurelia de honoribus Germanico Caesari defuncto tribuendis", 
   "Manc. (CIL VIII 25902)": "lex (epistula?) de villae Magnae colonis ad exemplum legis Mancianae data", 
   "inc. Tarent. (CIL I2 2924)": "lex incerta (repetundarum?) tabulae Tarentinae", 
   "Rom.": "lex Romana (Papianus q. d.)", 
   "met. Vipasc.": "leges metalli Vipascensis", 
   "Rom. ind. capp.": "index capitulorum legi Romanae antepositus", 
   "agr. (CIL I2 585)": "lex (Baebia?) agraria, lin. CIV", 
   "Aquilia (dig. 9,2,27,5)": "lex Aquilia de damno, e. g. fragm. servatum in DIG. 9,2,27,5", 
   "reg. (Fest. p. 230)": "fragmenta legum, quae regibus Romanis ascribuntur, e. g. lex (Romuli) servata apud FEST. p. 230", 
   "[Sal.]": "lex Salica", 
   "eborar. (CIL VI 33885)": "collegii eborariorum et citriariorum", 
   "[extr.]": "lex extravagans", 
   "app.": "appendix (ita nominata a Zeumer1), sc. fragmen-torum Gaudenzianorum pars posterior", 
   "decr. Child.": "decretus Childeberto [II] rege'", 
   "[capit. 7,12 p. 456 E.]": "capitulorum additorum series VII, \u00a712 p. 456 Eckhardt1", 
   "Rubr. (CIL I2 592)": "lex (Rubria q. d.) de Gallia cisalpina", 
   "XII tab.": "lex vel leges XII tabularum", 
   "Hadr. (CIL VIII 25943)": "lex Hadriana q. d. ('sermo procuratorum')", 
   "Atinia (Gell. 17,7,1)": "lex Atinia de usucapione, fragm. servatum apud GELL. 17,7,1", 
   "prol.": "prologus (sc. II brevior q. d.)", 
   "Falcid. (dig. 35,2,1 pr.)": "lex Falcidia, fragmenta servata in DIG. 35,2,1 pr.", 
   "Sal. Merov.": "legis Salicae partes vel recensiones vetustiores (pactus legis Salicae), quae aetate Merovingorum", 
   "locat. Puteol. (Ann\u00e9e \u00c9pigr. 1971 n. 88) 3,25": "leges locationis, e. g. Puteolana", 
   "[Rubr. (?) frg. Atest.]": "[Rubr. (?) frg. Atest.]", 
   "luci": "leges lucorum", 
   "Spolet. (CIL I2 366)": "luci Spoletini", 
   "lib. const. ind. capp.": "index capitulorum libro constitutionum antepositus", 
   "Cic. Att.": "legum, quae non propria nota distinguuntur, fragmenta a scriptoribus servata, e. g. fragm. legis (promulgatae tantum) apud CIC. Att.", 
   "extr.": "constitutiones extravagantes", 
   "[Tarent. repetund.]": "[Tarent. repetund.]", 
   "praef.": "praefatio libri constitutionum ('prima constitutio')", 
   "Malac. (CIL II 1964)": "lex municipii Malacitani", 
   "Iun. Vell. (dig. 28,2,29,12)": "lex Iunia Vellaea", 
   "Bant. (CIL I2 582)": "lex latina tabulae Bantinae", 
   "horr. (CIL VI 33747)": "lex horreorum", 
   "suppl.": "supplementa ex lege Romana (sc. breviario Alarici) excepta", 
   "[chron.]": "chronica regum Visigothorum", 
   "vic. Furf. (CIL I2 756)": "lex a vicanis Furfensibus templo Iovis dicta", 
   "repetund. (CIL I2 583)": "lex (Acilia?) repetundarum", 
   "salut. Dian. et Antin. (CIL XIV 2112)": "collegii salutaris Dianae et Antinoi", 
   "Burg.": "leges Burgundionum (a Gundobado rege vel eius successoribus collectae, datae, retractatae)", 
   "Gabin. Calp. (CIL I2 2500)": "lex Gabinia Calpurnia de Delo insula", 
   "Iul. munic. (CIL I2 593)": "lex tabulae Heracleensis (Iulia municipalis q. d.)", 
   "colleg.": "leges collegiorum", 
   "Lucer. (CIL I2 401)": "luci Lucerini", 
   "Tappula (Inscr. suppl. Ital. 898)": "lex convivalis Tappula", 
   "Visig.": "leges Visigothorum a Zeumer collectae, sc. fere codicis Euriciani fragmenta nec non liber iudiciorum", 
   "Anton. de Term. (CIL I2 589)": "Antonia de Termessibus", 
   "Quinctia (Frontin. aq. 129,11)": "lex Quinctia de aquaeductibus servata apud FRONTIN. aq. 129", 
   "Iul. de vi (coll. Mos. 9,2,2)": "lex (vel leges) Iulia de vi publica et privata", 
   "tab. Heb.": "tabula Hebana", 
   "Corn. de XX quaest. (CIL I2 587)": "lex Cornelia de XX quaestoribus", 
   "conviv. (Querol.)": "lex convivalis (decretum parasiticum) ioci causa ficta, cuius fragm. traditum est una cum QVEROL.", 
   "aq. Tiburt. (CIL XIV 3676)": "aquarum, e. g. aquae Tiburtinae", 
   "par. fac. Puteol. (CIL I2 698)": "lex parieti faciendo Puteolana", 
   "tab. Siar. II": "tabula Siarensis, fragm. II", 
   "Cincia (frg. Vat. 307)": "lex Cincia de donationibus, fragmenta inter FRG. Vat. servata", 
   "Eur.": "codex Eurici regis (466\u2014484) nondum a Leovigildo rege (568\u2014586) retractatus, fragmenta in codice saec. VI servata", 
   "caus.": "septem causas'", 
   "Corn. (Cic. Cluent. 148)": "lex Cornelia de sicariis et veneficis, e. g. fragmenta servata apud CIC. Cluent. 148", 
   "Vrson. (CIL I2 594)": "lex coloniae Genetivae Iuliae sive Vrsonensis", 
   "Atest. (CIL I2 600) 20": "fragmentum Atestinum legis cuiusdam (legi Rubriae similis, sed vix illuc pertinentis), lin. 20", 
   "Sil.": "lex Silia de ponderibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[DECRET.] $3": [
  "", 
  {
   "[de via Caecil.]": "locatio operum in via Caecilia, vix decretum"
  }, 
  [
   "", 
   "", 
   "", 
   "CIL I2 808"
  ]
 ], 
 "[DECRET.] $2": [
  "", 
  {
   "[navic.]": "[navic.]", 
   "[mens.]": "dedicatio statuae a mensoribus Portuensibus facta, vix decretum", 
   "[leg. de substit.]": "decretum quoddam legionis de substitutionibus nota propria non iam distinguitur"
  }, 
  [
   "", 
   "", 
   "", 
   "EPIST. Iulian."
  ]
 ], 
 "[DECRET.] $1": [
  "", 
  {
   "[Herculan. Tiburt.]": "[Herculan. Tiburt.]"
  }, 
  [
   "", 
   "", 
   "", 
   "DECRET. decur. Tiburt."
  ]
 ], 
 "SYNON.": [
  "", 
  {
   "Cic.": "synonyma Ciceronis quae feruntur"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAX. VICTORIN.": [
  "Maxim(ian)us Victorinus", 
  {
   "gramm.": "de ratione metrorum"
  }, 
  [
   "300", 
   "399", 
   "grammaticus", 
   ""
  ]
 ], 
 "PHOC.": [
  "Phocas (Focas)", 
  {
   "carm. de Verg.": "carmen de vita Vergilii", 
   "gramm.": "ars (sive de nomine et verbo)"
  }, 
  [
   "547", 
   "610", 
   "grammaticus", 
   ""
  ]
 ], 
 "DIOM.": [
  "Diomedes", 
  {
   "gramm.": "ars grammatica (nunc decurtata), vol. I"
  }, 
  [
   "300", 
   "399", 
   "", 
   ""
  ]
 ], 
 "PASTOR": [
  "Pastor", 
  {
   "libell.": "libellus in modum symboli"
  }, 
  [
   "400", 
   "499", 
   "episcopus Gallaeciae", 
   ""
  ]
 ], 
 "[ATIL.]": [
  "", 
  {
   "[gramm.]": "[gramm.]"
  }, 
  [
   "", 
   "", 
   "", 
   "FORTVN. gramm."
  ]
 ], 
 "DOLAB.": [
  "P. Cornelius Dolabella", 
  {
   "epistula ad Ciceronem": "epistula ad Ciceronem"
  }, 
  [
   "-70", 
   "-43", 
   "", 
   ""
  ]
 ], 
 "PS. SEN.": [
  "Pseudo-Seneca", 
  {
   "mon.": "monita", 
   "epist. Paul.": "epistulae Senecae ad Paulum et Pauli ad Senecam quae vocantur", 
   "mor.": "liber de moribus", 
   "extr. voc.": "sententiae Rufi q. d. sive Senecae morientis extremae voces"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "PASS.": [
  "", 
  {
   "Quirin.": "passio Quirini episcopi", 
   "Caesar.": "passio Caesarii diaconi et Iuliani presbyteri", 
   "Petr. Paul.": "passiones apostolorum Petri et Pauli", 
   "Mar. Iac.": "passio Mariani et Iacobi", 
   "Thom.": "passio Thomae apostoli", 
   "19": "recensio longior", 
   "Iulian.": "passio Iuliani", 
   "Perp.": "passio Perpetuae et Felicitatis", 
   "Isaac": "passio Isaac et Maximiani", 
   "Lucian.": "acta Luciani et Marciani", 
   "brev.": "passio brevior", 
   "Typas.": "passio Typasii", 
   "[Tarach.]": "passio Tarachi sociorumque", 
   "coron.": "passio IV coronatorum", 
   "Genes.": "passio Genesii Arelatensis Paulino Nolano supposita", 
   "Petr. Andr.": "acta Petri, Pauli, Andreae et Dionysiae latine versa", 
   "Fabii": "passio Fabii vexilliferi", 
   "Polycarp.": "passio Polycarpi e graeco versa", 
   "Fructuos.": "passio Fructuosi episcopi et Augurii et Eulogii diaconorum", 
   "Sus.": "passio Susannae", 
   "Caecil.": "passio Caeciliae", 
   "Clem.": "passio Clementis", 
   "Theclae": "acta Pauli et Theclae latine versa", 
   "Georg.": "passionis Georgii versiones lat. antiquiores", 
   "Andr.": "passiones Andreae apostolic", 
   "Macc.": "passio Macchabaeorum", 
   "Cyriac.": "acta Cyriaci latine versa", 
   "Ignat.": "passio Ignatii episcopi Antiocheni", 
   "Matth.": "martyrium Matthaei apostoli latine versum", 
   "Firm.": "passio et translatio Firmi et Rustici", 
   "Barth.": "passio Bartholomaei apostoli", 
   "Arcad.": "passio Arcadii", 
   "Iren. Sirm.": "passio Irenaei episcopi Sirmiensis", 
   "Donat.": "sermo de passione Donati et Advocati", 
   "Paul.": "passio Pauli apostolic", 
   "Petr.": "passio Petri apostoli", 
   "passiones sanctorum martyrum": "passiones sanctorum martyrum", 
   "Max.": "acta Maximi", 
   "long.": "passio longior", 
   "Crispin.": "passio Crispinae", 
   "Rogat.": "passio Rogatiani et Donatiani", 
   "Marcell.": "acta Marcelli centurionis", 
   "Anastas.": "passio Chrysogoni et Anastasiae", 
   "Scill.": "passio Scil(l)itanorum martyrum", 
   "Stephan.": "passio Stephani papae", 
   "Saturnin.": "passio Saturnini episcopi Tolosani", 
   "Felicit.": "passio Felicitatis cum VII filiis suis", 
   "frg. 3": "recensionis brevioris fragmentum", 
   "Cassian.": "passio Cassiani Tingitani", 
   "Placid.": "passio Eustachii vel Placidae", 
   "Fel.": "passio Felicis episcopi Thibiucensis", 
   "Pont. Cim.": "passio Pontii Cimellensis", 
   "Claud. Ast.": "acta Claudii, Asterii aliorumque", 
   "Saturn. Dat.": "passio Saturnini, Dativi, Felicis, Ampelii sociorumque", 
   "Max. Secund. Donat.": "passio Maximae et Secundae et Donatillae", 
   "Maximil.": "acta Maximiliani", 
   "Montan.": "passio (sive actus et visio) Montani et Lucii", 
   "Cypr. rec. I": "acta proconsularia Cypriani episcopi, recensio I"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAX.": [
  "Maximus <Africanus>", 
  {
   "Cypr. epist.": "epistula ad Cyprianum", 
   "epist.": "epistula ad Theophilum episcopum Alexandrinum", 
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "200", 
   "282", 
   "episcopus", 
   ""
  ]
 ], 
 "PVBLIC.": [
  "Publicola", 
  {
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SINN.": [
  "Sinnius Capito", 
  {
   "Gell.": "fragm. servatum apud GELL."
  }, 
  [
   "-100", 
   "-1", 
   "grammaticus", 
   ""
  ]
 ], 
 "MARCELL.": [
  "Marcellus <Empiricus>; Marcellus Burdigalensis", 
  {
   "chronica a fine Hieronymi chron.": "chronica a fine Hieronymi chron.", 
   "chron.": "pars genuina (bis a Marcellino edita) ad ann. 534 producta", 
   "med. de mens.": "de mensuris et ponderibus medicinalibus", 
   "med.": "de medicamentis", 
   "dig.": "fragmenta in digesta (et alibi) servata", 
   "auct. chron.": "auctarium (in fine mutilum) a quodam Marcellini chronicis additum", 
   "med. praef.": "Marcelli praefatio", 
   "med. carm.": "carmen in fine operis positum", 
   "Cic. fam.": "epistula ad Ciceronem", 
   "Aug. epist.": "epistula ad Augustinum"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "DONATIST.": [
  "", 
  {
   "Aug. un. eccl.": "Donatistarum verba ab Augustino in epistula ad catholicos relata"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VINCENT. LER.": [
  "Vincentius Lerinensis", 
  {
   "exc.": "excerpta ex AVG.", 
   "comm.": "commonitorium"
  }, 
  [
   "350", 
   "450", 
   "presbyter", 
   ""
  ]
 ], 
 "TRANSIT.": [
  "", 
  {
   "Mar.": "transitus Mariae apocryphus latine versus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAVD.": [
  "", 
  {
   "Murdiae (CIL VI 10230)": "Murdiae L. f. cuiusdam", 
   "Turiae": "Turiae q. d.", 
   "laudatio funebris": "laudatio funebris"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IVDICIVM": [
  "", 
  {
   "Contreb. (CIL I2 2951a)": "iudicium, quod senatus Contrebiensis de controversia inter Salluienses et Allavonenses dedit", 
   "Pictav. Greg. Tur. Franc.": "iudicium de monasterio Pictaviensi, v. GREG. TVR. Franc."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALLAD.": [
  "Palladius", 
  {
   "opus agriculturae": "opus agriculturae", 
   "hist. mon.": "historiae monachorum sive Lausiacae latine versae", 
   "c. Ambr. fol.": "contra Ambrosium fragmenta"
  }, 
  [
   "364", 
   "430", 
   "episcopus Helenopolitanus", 
   ""
  ]
 ], 
 "TEST.": [
  "", 
  {
   "(CIL XIII 5708)": "civis cuiusdam Romani Gallicae nationis", 
   "porcelli": "porcelli", 
   "Pap. Corp. 221,64": "Antonii Silvani"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLOAT.": [
  "Cloatius Verus", 
  {
   "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud MACR. Sat.": "fragmenta grammatica a scriptoribus servata, e. g. fragm. apud MACR. Sat."
  }, 
  [
   "-100", 
   "-1", 
   "", 
   ""
  ]
 ], 
 "INVENT.": [
  "", 
  {
   "cruc.": "inventio sanctae crucis (sc. passionis Cyriaci pars prior; e graeco versa)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALC. AVIT.": [
  "Alcimus Ecdicius Avitus", 
  {
   "c. Ar.": "librorum contra Arianos fragmenta", 
   "epist. epistulae": "diverse", 
   "carm.": "carmina", 
   "c. Eutych.": "contra Eutychianam haeresim", 
   "hom.": "homiliarum quae exstant"
  }, 
  [
   "470", 
   "519", 
   "episcopus Viennensis", 
   ""
  ]
 ], 
 "LVCAN.": [
  "M. Annaeus Lucanus", 
  {
   "frg.": "carminum fragmenta", 
   "bellum civile (Pharsalia; quod carmen epicum Lucanus imperfectum reliquit)": "bellum civile (Pharsalia; quod carmen epicum Lucanus imperfectum reliquit)"
  }, 
  [
   "39", 
   "65", 
   "", 
   ""
  ]
 ], 
 "IOH.": [
  "Iohannes", 
  {
   "epist. ad Sen.": "epistula ad Senarium (in fine mutila)"
  }, 
  [
   "", 
   "", 
   "diaconus", 
   ""
  ]
 ], 
 "IANVAR.": [
  "Ianuarianus", 
  {
   "epist.": "epistula ad Valentinum abbatem Hadrumetinum"
  }, 
  [
   "350", 
   "450", 
   "presbyter Africanus", 
   ""
  ]
 ], 
 "NAEV. IVN.": [
  "Naevius iunior", 
  {
   "Cypr. Il.": "Cypriae Iliados fragmenta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRONTO": [
  "M. Cornelius Fronto Cirtensis", 
  {
   "operum (fere epistularum) reliquiae, quae in codicibus rescriptis (fere cod. Bobiensi) exstant": "operum (fere epistularum) reliquiae, quae in codicibus rescriptis (fere cod. Bobiensi) exstant", 
   "carm. frg. gramm. V": "Frontonis cuiusdam fragm. carminis servatum apud CONSENT. gramm. V", 
   "[adnot.]": "[adnot.]", 
   "Char. gramm.": "fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BARNAB.": [
  "", 
  {
   "epistulae Barnabae Pauli socio perperam ascriptae (saec. IImed. ) versio latina": "epistulae Barnabae Pauli socio perperam ascriptae (saec. IImed. ) versio latina"
  }, 
  [
   "300", 
   "499", 
   "", 
   ""
  ]
 ], 
 "SCAEV. MEM.": [
  "Scaevus Memor", 
  {
   "trag.": "tragoediarum fragmentum"
  }, 
  [
   "0", 
   "99", 
   "", 
   ""
  ]
 ], 
 "CRESC.": [
  "Cresconius", 
  {
   "Aug. c. Cresc.": "verba ab Augustino allata"
  }, 
  [
   "350", 
   "450", 
   "grammaticus partis Donati", 
   ""
  ]
 ], 
 "MANCIA": [
  "Helvius Mancia", 
  {
   "or. frg. Val. Max.": "orationis in Scribonium Libonem fragm. servatum apud VAL. MAX."
  }, 
  [
   "-120", 
   "-50", 
   "", 
   ""
  ]
 ], 
 "MACAR.": [
  "Macarius Aegyptius", 
  {
   "ad fil. dei": "epistula ad filios dei q. d. e graeco (inedito) versa"
  }, 
  [
   "300", 
   "391", 
   "", 
   ""
  ]
 ], 
 "SENT.": [
  "", 
  {
   "Minuc.": "Q. et M. Minuciorum Q. ff. Ruforum", 
   "centur.": "P. Matii centurionis legionis III Cyrenaicae", 
   "procos. Sard.": "L. Helvii Agrippae proconsulis Sardiniae", 
   "Helvidii Prisci": "C. Helvidii Prisci arbitri ex compromisso", 
   "leg. Aug. pr. pr.": "C. Avidii Nigrini legati Augusti pro praetore de controversia inter Delphos et Anticyrenses", 
   "subpraef.": "Alfenii Senecionis subpraefecti classis praetoriae Misenatis", 
   "sententiae magistratuum sim. Romanorum de litibus": "sententiae magistratuum sim. Romanorum de litibus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CVRIOS.": [
  "", 
  {
   "urb.": "curiosum urbis Romae, sc. libelli de regionibus urbis Romae recensio altera"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLAC.": [
  "Sex. Placitus Papyriensis", 
  {
   "med.": "liber medicinae"
  }, 
  [
   "350", 
   "450", 
   "", 
   ""
  ]
 ], 
 "MAR. MERC.": [
  "Marius Mercator", 
  {
   "[comp.]": "comparatio dogmatum Pauli Samosateni et Nestorii", 
   "[Theod. exc.]": "Theodori Mopsuesteni al. excerpta", 
   "[Nest. serm.]": "Nestorii sermones XIII de incarnatione Christi", 
   "[Nest. adv. Pel.]": "Nestorii tractatus IV contra haeresim Pelagii", 
   "[Cyr. resp.]": "Cyrilli Alexandrini episcopi responsio ad ea, quae Theodoretus contra anathematismos dixit", 
   "[Cyr. epist. cler. comm.]": "commonitorium epistulae Cyrilli ad clericos subiunctum", 
   "[Theod. expos.]": "expositio pravae fidei Theodori Mopsuesteni (una cum praefatione)", 
   "[Theod. adv. Cyr.]": "excerpta ex libris Theodoreti adversus Cyrillum Alexandrinum episcopum", 
   "[Cyr. epist. syn.]": "Cyrilli Alexandrini episcopi epistula synodica ad Nestorium", 
   "[Nest. epist. Cyr.]": "Nestorii epistula ad Cyrillum Alexandrinum episcopum", 
   "[Cyr. incarn.]": "Cyrilli Alexandrini episcopi scholia de incarnatione unigeniti", 
   "[Cyr. epist. Nest.]": "Cyrilli Alexandrini episcopi epistulae duae ad Nestorium", 
   "[app.]": "appendix ad contradictionem duodecimi anathematismi Nestoriani", 
   "[Cael.]": "commonitorium super nomine Caelestii", 
   "[Theod. refut.]": "refutatio symboli Theodori Mopsuesteni", 
   "[Cyr. apol.]": "Cyrilli Alexandrini episcopi apologeticus pro XII capitibus adversus orientales episcopos", 
   "[Nest. Eph. synod.]": "excerpta antistitum quae recitata sunt contra Nestorium in synodo Ephesiorum", 
   "[Theod. epist.]": "excerpta fere ex epistulis Theodoreti", 
   "[Euther.]": "Eutherii episcopi haeretici fragmenta (una cum interpretis praefatione et epilogo)", 
   "[subnot.]": "liber subnotationum in verba Iuliani (commonitorium adversus haeresim Pelagii)", 
   "[Nest. exc.]": "de diversis Nestorii libris excerpta", 
   "[Cyr. epist. cler.]": "Cyrilli Alexandrini episcopi epistula ad clericos quosdam", 
   "[Nest. epist. Cael.]": "Nestorii epistula ad Caelestinum papam", 
   "[contrad.]": "contradictiones in blasphemias Nestorii XII"
  }, 
  [
   "390", 
   "451", 
   "monachus", 
   "CONC. S I 5 p. 84,17"
  ]
 ], 
 "[LEMMA]": [
  "", 
  {}, 
  [
   "", 
   "", 
   "", 
   "TITVLVS"
  ]
 ], 
 "CELS. $1": [
  "P. Iuventius Celsus", 
  {
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "50", 
   "118", 
   "iurisconsultus", 
   ""
  ]
 ], 
 "OCTAVIA": [
  "Pseudo-Seneca", 
  {
   "Octavia praetexta": "Octavia praetexta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROBA": [
  "", 
  {
   "cento": "Proba, cento Vergilianus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "[TRACT.]": [
  "", 
  {
   "[de agr. insp. grom.]": "tractatus de agrorum inspectione", 
   "[c. Arian.]": "[c. Arian.]"
  }, 
  [
   "", 
   "", 
   "", 
   "PELAG. frg."
  ]
 ], 
 "ISID.": [
  "Isidorus", 
  {
   "sent.": "sententiae (sc. Augustini, Gregorii Magni, al.)", 
   "Sueb.": "de regno Sueborum", 
   "[in gen.]": "[in gen.]", 
   "alleg.": "allegoriae quaedam sacrae scripturae (de nominibus legis et euangeliorum)", 
   "fid. cath.": "de fide catholica ex vetere et novo testamento (contra Iudaeos)", 
   "carm.": "carmina (sc. tituli)", 
   "[in Ios.]": "[in Ios.]", 
   "[in reg.]": "in librum quartum regum", 
   "chron.": "chronica (sc. maiora bis edita)", 
   "dedic. hist. chron. II": "dedicatio historiarum Gothorum Vandalorum Sueborum ad Sisenandum regem (genuina?), vol. II", 
   "praef. test.": "praefationes in libros veteris ac novi testamenti (prooemia)", 
   "[in Esdr.]": "[in Esdr.]", 
   "orig.": "origines (etymologiae; opus imperfectum)", 
   "diff.": "differentiae", 
   "lib. num.": "liber numerorum, qui in sanctis scripturis occurrunt", 
   "epist.": "epistulae", 
   "synon.": "synonyma (de lamentatione animae peccatricis)", 
   "Vand.": "de historia Vandalorum", 
   "[ord. creat.]": "de ordine creaturarum", 
   "[in num.]": "[in num.]", 
   "[in lev.]": "[in lev.]", 
   "eccl. off.": "officia (de ecclesiasticis officiis)", 
   "[in Macc.]": "[in Macc.]", 
   "Goth.": "de origine Gothorum", 
   "[in iud.]": "[in iud.]", 
   "[in exod.]": "[in exod.]", 
   "[diff. app.]": "[diff. app.]", 
   "vir. ill.": "de viris illustribus", 
   "expos. in gen.": "mysticorum expositiones sacramentorum (quaestiones in vetus testamentum, sc. in gen., exod., lev., num., deut., Ios., iud., reg., Esdr., Macc.), in genesin", 
   "reg. monach.": "regula monachorum", 
   "[in deut.]": "[in deut.]", 
   "nat.": "de natura rerum", 
   "ort. et obit.": "de ortu et obitu patrum", 
   "[quaest. test.]": "de vetere et novo testamento quaestiones"
  }, 
  [
   "560", 
   "636", 
   "episcopus Hispalensis", 
   ""
  ]
 ], 
 "SCARILA": [
  "Scarila", 
  {
   "Fulg. Rusp. epist.": "epistula ad Fulgentium Ruspensem"
  }, 
  [
   "450", 
   "550", 
   "", 
   ""
  ]
 ], 
 "RVF.": [
  "Rufus Ephesius", 
  {}, 
  [
   "80", 
   "150", 
   "medicus", 
   ""
  ]
 ], 
 "MEROB.": [
  "Flavius Merobaudes", 
  {
   "Christ.": "de Christo", 
   "carm.": "carmina IV", 
   "pros. frg. 2B": "panegyricus prosa oratione conscriptus (paneg. 1, sc. dictus Aetio cos. II a. 437), fragm. 2B", 
   "poet.": "panegyricus poeticus"
  }, 
  [
   "400", 
   "499", 
   "ex Hispania", 
   ""
  ]
 ], 
 "ASSVMPT.": [
  "", 
  {
   "Moys.": "assumptionis Moysi e graeco fere deperdito latine versae quae exstant (sc. testamentum Mosis)"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYMPH.": [
  "Symp(h)osius", 
  {
   "aenigmata": "aenigmata"
  }, 
  [
   "300", 
   "499", 
   "", 
   ""
  ]
 ], 
 "CAEPIO": [
  "Q. Servilius Caepio", 
  {
   "orationis (in M. Aemilium Scaurum lege Varia) fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm.": "orationis (in M. Aemilium Scaurum lege Varia) fragmenta a scriptoribus servata, e. g. fragm. apud CHAR. gramm."
  }, 
  [
   "-150", 
   "-90", 
   "", 
   ""
  ]
 ], 
 "PAPIR.": [
  "Q. Papiri(an)us", 
  {
   "de orthographia": "de orthographia", 
   "dig.": "fragmenta in digesta servata"
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "FIRMIL.": [
  "Firmiliani", 
  {
   "epistula ad Cyprianum e graeco versa": "epistula ad Cyprianum e graeco versa"
  }, 
  [
   "200", 
   "268", 
   "episcopi Caesareae Cappadociae", 
   ""
  ]
 ], 
 "AGENN.": [
  "Agen(ni)us Vrbicus", 
  {
   "de controversiis agrorum": "de controversiis agrorum"
  }, 
  [
   "400", 
   "499", 
   "gromaticus", 
   ""
  ]
 ], 
 "PHILIPP.": [
  "Philippus", 
  {
   "rec. long.": "recensio longior", 
   "rec. brev.": "recensio brevior", 
   "in Iob": "commentarius in Iob"
  }, 
  [
   "380", 
   "431", 
   "presbyter", 
   ""
  ]
 ], 
 "CENS.": [
  "Censorinus", 
  {
   "de die natali": "de die natali"
  }, 
  [
   "150", 
   "250", 
   "", 
   ""
  ]
 ], 
 "CATO": [
  "M. Porcius Cato Censorius", 
  {
   "mor. frg.": "carmen (?) de moribus", 
   "iur. civ. Fest.": "commentariorum iuris civilis (suntne filii?) fragm. servatum apud FEST.", 
   "ad fil. frg.": "fragmenta, quae Iordan libris ad Marcum filium (sc. praeceptis, certe medicinam agriculturam rhetoricam complectentibus) tribuit", 
   "orat.": "orationum fragmenta", 
   "agr.": "de agri cultura", 
   "[frg. dub. ]": "fragmenta dubiae auctoritatis", 
   "frg. Colum.": "fragmenta in collectionibus a nobis adhibitis omissa e. g. fragm. servatum apud COLVM.", 
   "orig.": "origines", 
   "[dict.]": "Catonis dicta ab Iordan collecta (cave confundas haec cum aliorum dictis ab ipso Catone collectis aut cum PS. CATONE)", 
   "inc. libr. frg.": "incertorum librorum fragmenta", 
   "mil. frg.": "de re militari", 
   "epist. frg.": "epistularum fragmenta"
  }, 
  [
   "-234", 
   "-149", 
   "", 
   ""
  ]
 ], 
 "PS. AMBR.": [
  "Pseudo-Ambrosius", 
  {
   "carm. de tern. num.": "carmen de ternarii numeri excellentia", 
   "spir. sanct.": "de spiritu sancto", 
   "exorc.": "exorcismus", 
   "dign. sacerd.": "de dignitate sacerdotali", 
   "serm.": "sermones", 
   "cond. human.": "de dignitate conditionis humanae", 
   "lib. fid.": "libellus fidei", 
   "symb.": "exhortatio ad neophytos de symbolo", 
   "in Phil.": "tractatus (immo sermo) in Pauli epistulam ad Philippenses 4,4\u20147", 
   "concord.": "de concordia Matthaei et Lucae in genealogia Christi", 
   "serm. Sess.": "sermones codice Sessoriano 55 traditi", 
   "Te deum": "hymnus ille celeberrimus 'Te deum laudamus'", 
   "de anima": "altercationis contra eos, qui animam non confitentur esse facturam aut ex traduce esse dicunt, fragmentum", 
   "in Luc.": "sermo q. d. in Lucam", 
   "[sacr.]": "AMBR. sacr.", 
   "mor. Brachm.": "Palladii operis de gentibus Indiae et Bragmanibus versio quae dicitur De moribus\u00a0Brachmanorum\u00a0 (i. e. Commonitorium Palladii et sqq.)", 
   "epist.": "epistulae", 
   "[epist. de monach.]": "epistulae duae de monacho energumeno", 
   "paenit.": "de paenitentia", 
   "tract. Gratian.": "tractatus de euangelio q. d. ad Gratianum Augustum", 
   "[philos. epist.]": "philosophorum epistulae", 
   "pudic.": "de pudicitia et castitate fragmentum", 
   "laps. virg.": "de lapsu Susannae sive de lapsu virginis consecratae", 
   "mans.": "de XLII mansionibus filiorum Israel", 
   "act. Seb.": "acta Sebastiani martyris", 
   "[prec.]": "precationes", 
   "[epist. de fid.]": "epistula de fide ad Hieronymum", 
   "apol. Dav. II": "apologia David altera", 
   "nat. rer.": "versus de naturis rerum", 
   "trin.": "de trinitate vel in symbolum apostolorum tractatus", 
   "ad virg. dev.": "ad virginem devotam"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "REN. FRIG.": [
  "Renatus Profuturus Frigeridus", 
  {
   "Greg. Tur. Franc.": "historiarum fragmenta servata apud GREG. TVR. Franc."
  }, 
  [
   "400", 
   "499", 
   "", 
   ""
  ]
 ], 
 "TAB.": [
  "", 
  {
   "Albertini": "tabulae ligneae atramento inscriptae (quas E. Albertini primus perscrutatus est) respicientes fere fundorum Africanorum emptiones", 
   "legion.": "tabula legionum", 
   "Dac.": "Dacicae", 
   "aliment.": "tabula alimentaria", 
   "Vel.": "Veleias", 
   "cens. Varro ling.": "tabularum censoriarum fragmenta", 
   "Herculan.": "Herculanenses", 
   "Pomp.": "Pompeianae", 
   "devot.": "tabulae devotionum sive defixionum", 
   "triumph.": "tabula triumphatoria", 
   "fund. Volceian.": "tabula fundorum Volceianorum", 
   "cer.": "tabulae ceratae; exempla selecta", 
   "hosp.": "tabulae patronatus, tesserae hospitii", 
   "[Gracch.]": "Ti. Sempronii Gracchi cos.", 
   "Acil. Glabr.": "Acilii Glabrionis", 
   "Peut.": "tabula Peutingeriana", 
   "Aemil.": "L. Aemilii M. f. cos.", 
   "Vindol.": "tabulae, quae Vindolandae in Britannia repertae sunt", 
   "Baeb.": "Ligurum Baebianorum", 
   "Sulis": "tabulae Aquis Sulis (nunc Bath) in Sulis Minervae templo repertae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAEL.": [
  "M. Caelius Rufus", 
  {
   "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.": "orationum fragmenta a scriptoribus servata, e. g. fragm. apud QVINT. inst.", 
   "ad Ciceronem epistulae": "ad Ciceronem epistulae"
  }, 
  [
   "-88", 
   "-48", 
   "", 
   ""
  ]
 ], 
 "DICT.": [
  "Dictys Cretensis", 
  {
   "ephemeris belli Troiani": "ephemeris belli Troiani"
  }, 
  [
   "300", 
   "399", 
   "", 
   "quam L. Septimius quidam e graeco latine vertit retractavitque"
  ]
 ], 
 "INSCR.": [
  "", 
  {
   "column. rostr. (Inscr. Ital. XIII 3,69)": "inscr. columnae rostratae sive elogium C. Duilii", 
   "Plin. nat.": "apud scriptores antiquos traditae, e. g. apud PLIN. nat.", 
   "Muratori": "ed. Muratori", 
   "ocul. (CIL XIII 10021)": "in signaculis medicorum oculariorum incisae, e. g. inscr. edita CIL XIII 10021", 
   "Hisp. Vives": "Hispaniae ed. Vives", 
   "numm. Sydenham": "nummorum ed. Sydenham (cf. INSCR. numm. lib. rei publ.)", 
   "Alger.": "Algeriae in Africa", 
   "christ. Karth.": "christianae Karthaginis (I. C. Karth.)", 
   "christ. Ital.": "christianae Italiae septimo saeculo antiquiores (I. C. I.)", 
   "tess. lusor. (CIL IX 6728) 23": "in tesseris lusoriis incisae, e. g. CIL IX 6728 n. 23", 
   "Dessau": "ed. Dessau (I. L. S.)", 
   "christ. vet. mus. Vat.": "christianae veteres musei Vaticani", 
   "Baiuar. Vollmer": "Baiuariae ed. Vollmer", 
   "Rhen. Bramb.": "Rhenanae ed. Brambach", 
   "inscriptio(nes); notae selectae": "inscriptio(nes); notae selectae", 
   "Ephem. Epigr.": "editae in Ephemeride Epigraphica, Corporis Inscr. Latinarum supplemento", 
   "christ. Hisp.": "christianae Hispaniae (cf. INSCR. christ. Hisp. Vives)", 
   "Gruter": "ed. Gruter", 
   "Gall. Wuilleumier": "trium Galliarum ed. Wuilleumier", 
   "Tarr. Alf\u00f6ldy": "Tarraconis ed. Alf\u00f6ldy", 
   "Esp\u00e9randieu, Cachets d'oculistes": "ed. Esp\u00e9randieu", 
   "Iugosl. Hoffiller\u2014Saria": "Iugoslaviae ed. Hoffiller/Saria", 
   "Haug et Sixt": "ed. Haug et Sixt (v. nunc CIL XIII)", 
   "Brit.": "Britanniae ed. Collingwood/Wright (R. I. B.)", 
   "Tun. Merlin": "Tunetanae (additamenta ad CIL VIII) ed. Merlin", 
   "numm. lib. rei publ.": "nummorum liberae rei publicae (R. R. C.)", 
   "Sherk, Rom. docum.": "ed. Sherk", 
   "lib. rei p. Degrassi": "liberae rei publicae ed. Degrassi (I. L. L. R. P.)", 
   "numm. Cohen": "nummorum ed. Cohen", 
   "Scyth. Min.": "Scythiae Minoris", 
   "suppl. Ital.": "supplementa Italica (sc. ad CIL V)", 
   "numm. Babelon": "nummorum ed. Babelon (v. nunc fere INSCR. numm. lib. rei publ.)", 
   "Gall. Narb. Esp\u00e9\u00adrandieu": "Galliae Narbonensis (additamenta ad CIL XII) ed. Esp\u00e9randieu", 
   "Hung.": "Hungariae (R. I. U.)", 
   "Maroc. Gascou": "Marocenses ed. Gascou et alii", 
   "for. Rom. (CIL I2 1)": "in foro Romano sub lapide nigro reperta", 
   "Dac.": "Daciae", 
   "lat. Graec. Sasel Kos": "latinae Graeciae (additamenta ad CIL III) ed. Sasel Kos", 
   "numm. Eckhel": "nummorum ed. Eckhel", 
   "Tripol.": "Tripolitaniae ed. Reynolds/Ward Perkins", 
   "Schneider": "ed. Schneider", 
   "christ. Diehl": "christianae ed. Diehl (I. L. C. V.)", 
   "christ. Brit.": "christianae Britanniae", 
   "Gall. Narb.": "Galliae Narbonensis (I. L. N.)", 
   "Ital.": "Italiae (I. I.)", 
   "graec. Rom. Cagnat": "graecae ad res Romanas pertinentes ed. Cagnat (I. G. R. [R.])", 
   "inscriptionum  genera  vel  corpora  (inter uncinos addidimus notas quasdam sollemnes):": "inscriptionum  genera  vel  corpora  (inter uncinos addidimus notas quasdam sollemnes):", 
   "christ. Gall.": "christianae Galliae (R. I. C. G.)", 
   "Iugosl. Sasel": "Iugoslaviae ed. A. et J. Sasel (additamenta ad CIL III)", 
   "numm. Mionnet": "nummorum ed. Mionnet", 
   "suppl. Ital. n. s.": "supplementa Italica, nova series", 
   "lat. Corinth.": "latinae Corinthi (additamenta ad CIL III)", 
   "Notiz. Scavi 1903 p. 256": "editae in Notiz. Scavi, e. g. p. 256 anno 1903", 
   "christ. Hisp. Vives": "christianae Hispaniae ed. Vives", 
   "Afr. Cagnat": "Africae (additamenta ad CIL VIII) ed. Cagnat/Merlin/Chatelain", 
   "christ. Le Blant": "christianae ed. Le Blant (cf. INSCR. christ. Gall.)", 
   "Hermet, La Graufesenque": "ed. Hermet", 
   "gland. plumb. (Ephem. Epigr. VI 124)": "in glandibus plumbeis incisae, e. g. inscr. 124 edita in Ephemeridis Epigraphicae vol. VI", 
   "Moes. Sup.": "Moesiae Superioris (I. M. S.)", 
   "christ. Rossi": "christianae ed. de Rossi", 
   "pariet. Palat.": "parietariae montis Palatini", 
   "Marichal, La Graufesenque": "ed. Marichal", 
   "Ann\u00e9e \u00c9pigr. 1903 n. 386": "editae in Ann\u00e9e \u00c9pigr. (olim loco appendicis ad Revue arch\u00e9ologi\u00acque), e. g. n. 386 anno 1903", 
   "numm. imp.": "nummorum aetatis imperatorum (R. I. C.)", 
   "christ. urb. Rom.": "christianae urbis Romae septimo saeculo antiquiores (I. C. U. R.)", 
   "Orelli\u2014Henzen": "ed. Orelli/Henzen"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ]
};
let abkGrLaDGE = {
 "MAX. TYR.": [
  "Maximus Tyrius sophista", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYPEROCHUS HISTORICUS": [
  "Hyperochus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MODERATUS GADITANUS PHILOSOPHUS": [
  "Moderatus Gaditanus philosophus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NUMENIUS EPIGRAMMATICUS": [
  "Numenius epigrammaticus", 
  {}, 
  [
   "a. II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. AL.": [
  "Demetrius Alexandrinus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIPHAN.": [
  "Antiphanes Macedo uel Megalopolitanus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTO PHIL.": [
  "Aristo Ceus philosophus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STHENEL.": [
  "Sthenelus tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENECR.": [
  "Menecrates comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMONAX TRAGICUS": [
  "Demonax tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYPER.": [
  "Hyperechius", 
  {
   "Mon": "Adhortatio ad monachos"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MALACUS HISTORICUS": [
  "Malacus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. ROM.": [
  "Dionysius Romanus scriptor ecclesiasticus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTIAS TRAGICUS": [
  "Aristias tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMM.": [
  "Simmias uel Simias elegiacus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOCR. EZ.": [
  "Apocryphon Ezechiel", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOBUL. $2": [
  "Aristobulus Milesius historicus", 
  {
   "Ital": "Italica"
  }, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS PHILOSOPHUS (ANON. ) $2": [
  "Anonymus philosophus (Anon. )", 
  {
   "Prol": "Prolegomena in Platonis Philosophiam"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOT. TYR.": [
  "Photius Tyrius", 
  {
   "Supplic": "Supplicatio"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APUL.": [
  "Apuleius scriptor latinus", 
  {
   "Soc": "de deo Socratis"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUANGELIA": [
  "Euangelia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. ALEX.": [
  "Apollodorus Alexandrinus medicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRANS. MARIAE": [
  "Transitus Mariae", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGESILAUS HISTORICUS": [
  "Agesilaus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THALLUS, ANTONIUS EPIGRAMMATICUS": [
  "Thallus, Antonius epigrammaticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILITAS": [
  "Philitas", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOCH.": [
  "Demochares historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPARCHUS FILIUS PISISTRATI TYRANNUS": [
  "Hipparchus filius Pisistrati tyrannus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENIPPUS GEOGRAPHUS": [
  "Menippus geographus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARTHAX HISTORICUS": [
  "Parthax historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIBER.": [
  "Liberius papa", 
  {
   "Ep. Ath": "Epistula ad Athanasium", 
   "Ep. Maced": "Epistula ad Macedonianos"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENETOR HISTORICUS": [
  "Menetor historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTEM. EPH.": [
  "Artemidorus Ephesius historicus et geographus", 
  {
   "Geog": "Geographumena"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEXINUS ELEUS PHILOSOPHUS": [
  "Alexinus Eleus philosophus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. MATTHIAE": [
  "Euangelium uel Traditiones Matthiae", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SATRIUS EPIGRAMMATICUS": [
  "Satrius epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDS. IMP.": [
  "Theodosius II imperator", 
  {
   "Syn": "Sacra ad synodum Ephesinam", 
   "Sacr": "Epistulae sacrae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEONID.": [
  "Cleonides musicus", 
  {
   "Harm": "Introductio harmonica"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMETAS SCHOLASTICUS EPIGRAMMATICUS": [
  "Cometas Scholasticus epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIGER, SEXTIUS": [
  "Niger, Sextius medicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPH. G.": [
  "Stephanus Gobarus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIOCH. AEG.": [
  "Antiochus Aegaeus historicus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONST. DIAC.": [
  "Constantinus diaconus", 
  {
   "Laud": "Laudatio omnium martyrum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEANTHES CYZICENUS HISTORICUS (NEANTH. CYZ. )": [
  "Neanthes Cyzicenus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEGILLUS HISTORICUS": [
  "Megillus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLICR. COM.": [
  "Callicrates comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOPHANTUS COMICUS": [
  "Diophantus comicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILINUS COUS MEDICUS": [
  "Philinus Cous medicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAPH. PIL.": [
  "Anaphora Pilati A, B", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HICES.": [
  "Hicesius medicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTID.": [
  "Aristides apologista", 
  {
   "Apol": "Apologia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEO GRAMMATICUS": [
  "Theo grammaticus", 
  {
   "Pind": "Fragmentum commentariorum de Pythiis Pindari"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEN. HIST.": [
  "Aeneas historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELIT. ANT.": [
  "Melitus uel Meletius Antiochenus", 
  {
   "Fr": "Fragmentum", 
   "Hom": "Homilia", 
   "Ep": "Epistula synodalis ad Iouianum imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTENOR HISTORICUS": [
  "Antenor historicus", 
  {}, 
  [
   "a. II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRESTUS ROMANUS HISTORICUS": [
  "Chrestus Romanus historicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONTIUS ET IOHANNES SCRIPTORES ECCLESIASTICI": [
  "Leontius et Iohannes scriptores ecclesiastici", 
  {
   "Sacr": "Rerum sacrarum liber"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. MOL.": [
  "Apollonius Molo historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOX.": [
  "Dioxippus comicus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRINIS STOICUS": [
  "Crinis stoicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLEM. PHGN.": [
  "Pseudo Polemo physiognomonicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GNOM. OX.": [
  "Gnomica Oxoniensia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTID.": [
  "Antidotus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. MEGALOP.": [
  "Ptolemaeus Megalopolitanus historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIAGOR.": [
  "Diagoras lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. BELLERM.": [
  "Anonyma de musica scripta Bellermanniana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. ADAM": [
  "Apocalypsis Adam fragmenta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAPP.": [
  "Pappus mathematicus", 
  {
   "in Alm": "in Ptolemaei Almagesto libri"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPHR. SYR.": [
  "Ephraem Syrus scriptor ecclesiasticus", 
  {
   "Enc. Bas": "Encomium in Basilium Magnum", 
   "Non rid": "non esse ridendum", 
   "Iudic": "Homilia de iudicio et pretiosa cruce", 
   "Ion": "Sermo in Ionam prophetam et de paenitentia Niniuitarum", 
   "Mag": "oratio de natiuitate (\ufffdcum Magi uenerunt Hierosolymam\ufffd)", 
   "Poenit. Can": "Canones poenitentiales", 
   "Oct": "Fragmenta in Octateuchum"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AFRIC. IUR.": [
  "Africanus, Sextus Caecilius iurisconsultus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AN. OX.": [
  "Anecdota Graeca e cod. MSS. Bibl. Oxon.", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DERCYL.": [
  "Dercylus historicus", 
  {}, 
  [
   "a. Call.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RUFINUS GRAMMATICUS LATINUS": [
  "Rufinus grammaticus latinus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYRIAC.": [
  "Cyriacus scriptor ecclesiasticus", 
  {
   "Laz": "Hymnus in Lazarum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOSIAD. HIST.": [
  "Dosiades historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MESOM.": [
  "Mesomedes lyricus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONT. BYZ.": [
  "Leontius Byzantinus scriptor ecclesiasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUANGELIUM ANONYMUM": [
  "Euangelium Anonymum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHRYN.": [
  "Phrynicus atticista", 
  {
   "PS Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONT. H.": [
  "Leontius Hierosolymitanus scriptor ecclesiasticus", 
  {
   "Nest": "aduersus nestorianos"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMARIUS ALCHEMISTA": [
  "Comarius alchemista", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SALLUST.": [
  "Sallustius philosophus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZEUXIS MAIOR TARENTINUS MEDICUS": [
  "Zeuxis Maior Tarentinus medicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "QUEROL.": [
  "Querolus siue Aulularia comoedia latina", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGIAS": [
  "Agias historicus", 
  {}, 
  [
   "IV/", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTEM.": [
  "Artemidorus Daldianus onirocriticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MITHR.": [
  "Mithridates epistolographus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMARCHUS EPICUREUS": [
  "Hermarchus epicureus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HECATO STOICUS": [
  "Hecato stoicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. SER.": [
  "Demetrius Seriphius historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TROPHIL.": [
  "Trophilus paradoxographus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RUTILIUS RUFUS, P.  HISTORICUS": [
  "Rutilius Rufus, P.  historicus", 
  {
   "Supplic": "Supplicationes"
  }, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FEST.": [
  "Festus grammaticus latinus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOCL.": [
  "Hermocles lyricus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHERMUS TEIUS POETA": [
  "Pythermus Teius poeta", 
  {}, 
  [
   "a. Hippon.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAUID PHILOSOPHUS": [
  "Dauid philosophus", 
  {
   "Prol": "Prolegomena Philosophiae"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SACERD.": [
  "Sacerdos, Marius Plotius grammaticus latinus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARGITES": [
  "Margites", 
  {}, 
  [
   "VII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "PIUS GRAMMATICUS": [
  "Pius grammaticus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDT.": [
  "Theodoretus Cyrensis scriptor ecclesiasticus", 
  {
   "Qu. in": "Pa", 
   "H. Rel": "Historia religiosa", 
   "Fr": "Fragmentum in Ps", 
   "Trin": "de Sancta Trinitate", 
   "Is": "Interpretatio in Isaiam", 
   "Qu. in Ge. , Ex. , Le. , Nu. , De. , Io. , Id. , Ru": "Quaestiones in Octateuchum", 
   "Eran": "Eranistes", 
   "Ep. Conc": "Epistulae", 
   "Hom": "Homilia Chalcedoni habita", 
   "Ep. Sirm": "Epistulae", 
   "Orth": "Quaestiones et responsiones ad orthodoxos", 
   "Affect": "Graecarum affectionum curatio", 
   "Ep": "Epistulae", 
   "Inc": "de incarnatione domini"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOCR. EPH.": [
  "Democritus Ephesius historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEMN. EPH.": [
  "Memno Ephesinus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DID.": [
  "Didymus grammaticus", 
  {
   "Plat": "de dubiis apud Platonem lectionibus", 
   "in D": "in Demosthenem", 
   "OH": "Opuscula historica"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEL. HIST.": [
  "Aelius Dius historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIG. $2": [
  "Antigonus Carystius paradoxographus", 
  {
   "Mir": "Mirabilia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIG. $3": [
  "Antigonus Carystius poeta", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERYC.": [
  "Erycius epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYPR. $2": [
  "Cyprianus Carthaginiensis scriptor ecclesiasticus", 
  {
   "Ep. Sept": "Epistula septuagesima", 
   "Fr. El": "Fragmentum de eleemosyna", 
   "Ep": "Epistulae", 
   "Fr. Fi": "Fragmentum ex epistula ad Fidonem"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTID. LONDON, ETC.": [
  "Antidotum London, Bamber, Reichenau, etc.", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOCL.": [
  "Xenocles tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILONID. II": [
  "Philonides II comicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEXIO GRAMMATICUS": [
  "Alexio grammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDRO HAL.": [
  "Andro Halicarnassensis historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTHEM.": [
  "Anthemius paradoxographus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STESICH.": [
  "Stesichorus lyricus", 
  {}, 
  [
   "VII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIODOR. T.": [
  "Diodorus Tarsensis scriptor ecclesiasticus", 
  {
   "Ps": "Fragmenta in Ps", 
   "Rom": "Fragmenta in Ep. Rom", 
   "Comm. Ps": "Commentarii in Psalmos", 
   "Fat": "Excerpta de opere contra fatum", 
   "Synous": "Fragmenta ex libris contra Synousiastas", 
   "Reg": "Fragmenta in Reges"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODOTUS POETA HISTORICUS": [
  "Theodotus poeta historicus", 
  {}, 
  [
   "a. Alex.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PORPHYRIO, POMPONIUS HORATII COMMENTATOR": [
  "Porphyrio, Pomponius Horatii commentator", 
  {
   "Comm": "Commentum in Horatium"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG. APOLL.": [
  "Diogenes Apolloniates", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MACED.": [
  "Macedonicus Amphipolites lyricus", 
  {}, 
  [
   "I a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENO COMICUS": [
  "Xeno comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOGENES HISTORICUS": [
  "Theogenes historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANECD. LUDW.": [
  "Anecdota Graeca Orthographica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMEAS HISTORICUS": [
  "Demeas historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "A. AL.": [
  "Acta Alexandrinorum", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYC. HIST.": [
  "Lycus historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHYLARCH. $2": [
  "Phylarchus lyricus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THOM. SCHOL.": [
  "Thomas Scholasticus epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PINNES SCRIPTOR ECCLESIASTICUS": [
  "Pinnes scriptor ecclesiasticus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAI. R.": [
  "Caius Romanus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPHANES HISTORICUS": [
  "Theophanes historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "D. S.": [
  "Diodorus Siculus historicus", 
  {
   "Fr. inc": "Fragmenta incertae sedis"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MYRO HISTORICUS": [
  "Myro historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYSIM. $2": [
  "Lysimachus Alexandrinus historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLAUCI.": [
  "Glaucias siue Glaucidas medicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TI. LOCR.": [
  "Timaeus Locrus philosophus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONSTANTIUS IMP.": [
  "Constantius I imperator", 
  {
   "Them": "Epistula ad senatum pro Themistio"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEMINUS EPIGRAMMATICUS": [
  "Geminus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOCRATES HISTORICUS": [
  "Aristocrates historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IULIUS RUFINIANUS RHETOR": [
  "Iulius Rufinianus rhetor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERS.": [
  "Perses epigrammaticus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "V. METROPH.": [
  "Vita Metrophanis et Alexandri episcoporum Constantinopolis", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIN.": [
  "Hegesinus epicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SUIDAS HISTORICUS": [
  "Suidas historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHYSIOG.": [
  "Physiognomonici", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYCUS PYTHAGORICUS": [
  "Lycus pythagoricus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMPONIUS GEOGRAPHUS LATINUS": [
  "Pomponius geographus latinus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOSTEPH. COM.": [
  "Philostephanus comicus", 
  {}, 
  [
   "III/II a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXC. VAT.": [
  "Excerptum Vaticanum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILO BYBLIUS HISTORICUS": [
  "Philo Byblius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BATR.": [
  "Batrachomyomachia", 
  {}, 
  [
   "I a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "VETT. VAL.": [
  "Vettius Valens astrologus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHERENICUS EPICUS": [
  "Pherenicus epicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "BIO PROC.": [
  "Bio Proconnesius historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NAUSIPH.": [
  "Nausiphanes philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO SAM.": [
  "Io Samius epigrammaticus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALL.": [
  "Calleas epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEPUALIUS UEL NEPTUNALIUS UEL NEPTUNIANUS PHILOSOPHUS": [
  "Nepualius uel Neptunalius uel Neptunianus philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETRIUS SCEPSIUS GRAMMATICUS": [
  "Demetrius Scepsius grammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. PROPHET.": [
  "Vitae Prophetarum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYMN.": [
  "Hymni Anonymi", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. $2": [
  "Anonymus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEN. EPH.": [
  "Menander Ephesius historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SM.": [
  "Symmachus interpres Veteris Testamenti", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIERON.": [
  "Hieronymus Eusebius Stridonensis scriptor ecclesiasticus", 
  {
   "Is": "Commentarius in Is", 
   "Ep": "Epistulae", 
   "V. Paul. A, B": "Vita Pauli eremitae.", 
   "Mt": "Commentarius in Eu. Matt", 
   "Pelag": "Aduersus Pelagianos", 
   "Vir. Ill": "de uiris illustribus"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACAC. B.": [
  "Acacius Beroeensis", 
  {
   "Ep. Max": "Epistula ad Maximianum Constantinopolitanum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIPPUS . . . P.": [
  "Philippus V Macedoniae rex epigrammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IULIUS EPICUS": [
  "Iulius epicus", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENOD. TRAG.": [
  "Zenodotus tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RUF.": [
  "Rufus medicus", 
  {
   "Interrog": "Interrogationes", 
   "Sch": "Scholia"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUTOCLIDES HISTORICUS": [
  "Autoclides historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOROTHEUS TYRIUS SCRIPTOR ECCLESIASTICUS": [
  "Dorotheus Tyrius scriptor ecclesiasticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "A\u00cbT.": [
  "A\u00ebtius medicus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMMOD.": [
  "Commodianus poeta latinus christianus", 
  {
   "Instr": "Instructiones per litteras uersuum primas"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BELL. SYR. ANN.": [
  "Belli Syrii Annales", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPO PHILOSOPHUS": [
  "Hippo philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*PSEUDO ARISTIDES RHETOR": [
  "*Pseudo Aristides rhetor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BUCOL. FR. PAP.": [
  "Bucolicorum Fragmenta Papyracea", 
  {
   "Vind": "Fragmentum Bucolicum Vindobonense"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POL. SILU.": [
  "Polemius, Siluius chronographus", 
  {
   "Laterc": "Laterculus"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CEREAL.": [
  "Cerealius epigrammaticus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEXT.": [
  "Sextus pythagoricus", 
  {
   "Sent": "Sententiae"
  }, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUCIL.": [
  "Lucilius, Gaius poeta latinus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NAEU.": [
  "Naeuius poeta latinus", 
  {
   "Trag": "Tragoediarum fragmenta"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCYL.": [
  "Scylax geographus", 
  {
   "Per": "Periplus"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUST. PHIL.": [
  "Iustinus Martyr philosophus et Pseudo Iustinus", 
  {
   "Dial": "Dialogus", 
   "Res": "de resurrectione (fragmenta)", 
   "Qu. Chr": "Quaestiones Christianae", 
   "Fr": "Fragmenta", 
   "Or. Gr": "Oratio ad Graecos", 
   "Ep. Zen. et Ser": "Epistula ad Zenam et Serenum", 
   "Qu. et Resp": "Quaestiones et responsiones ad orthodoxos", 
   "Apol": "Apologiae"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BRUT.": [
  "Brutus epistolographus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORAC. CHALD.": [
  "Oracula Chaldaica", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTOC.": [
  "Eutocius mathematicus", 
  {
   "in Sph. Cyl": "in libros de sphaera et cylindro", 
   "in Con": "Commentaria in Conica"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMO HISTORICUS": [
  "Damo historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOSTR.": [
  "Nicostratus philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOSES ALCHEMISTA": [
  "Moses alchemista", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARC. ER.": [
  "Marcus eremita", 
  {
   "Paen": "de paenitentia (Opusc. 3)", 
   "Nest": "aduersus Nestorianos", 
   "Fr": "Fragmentum", 
   "Temp": "Capitula de temperantia (Opusc. 6)"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUAGO": [
  "Euago Samius historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUST. IMP.": [
  "Iustinus II imperator", 
  {
   "Edict": "Edictum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOCH. $2": [
  "Democlides historicus", 
  {}, 
  [
   "a. Ath.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIL.": [
  "Epilycus comicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOSCORUS EPICUS": [
  "Dioscorus epicus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THGN. TRAG.": [
  "Theognis tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHAN. $2": [
  "Phanias uel Phaenias philosophus", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HADR.": [
  "Hadrianus imperator epigrammaticus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. PAP.": [
  "Iulius papa", 
  {
   "Ep. Dian": "Epistula ad Dianium et Flacillum", 
   "Fr": "Fragmentum de homoousio", 
   "Ep. encycl": "Epistula encyclica"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM.": [
  "Timaeus grammaticus", 
  {
   "Lex": "Lexicum platonicum"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROU. BODL.": [
  "Prouerbia Bodleiana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHANIS HISTORICUS": [
  "Athanis historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DINARCHUS HISTORICUS": [
  "Dinarchus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERIANDER PHILOSOPHUS": [
  "Periander philosophus", 
  {}, 
  [
   "VII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEPOS, CORNELIUS HISTORICUS LATINUS": [
  "Nepos, Cornelius historicus latinus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMESIAN.": [
  "Hermesianax elegiacus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IAMBL.": [
  "Iamblichus philosophus", 
  {
   "Myst": "de mysteriis", 
   "Protr": "Protrepticus", 
   "de An": "de anima", 
   "Sch": "Scholia", 
   "in Nic": "in Nicomachi arithmeticam introductionem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPH. ABYD.": [
  "Pamphilus Abydenus scriptor ecclesiasticus", 
  {
   "Ep. Petr": "Epistula ad Petrum episcopum Antiochiae", 
   "Ep. Io": "Fragmentum epistulae ad Iohannem Antiochenum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOEN.": [
  "Phoenix iambographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYAEN.": [
  "Polyaenus historicus", 
  {
   "Fr": "Fragmenta", 
   "Exc": "Excerpta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOCRITUS COUS GRAMMATICUS": [
  "Xenocritus Cous grammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAT. CP": [
  "Anatolius Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENESTH.": [
  "Menesthenes historicus", 
  {}, 
  [
   "a. Ath.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIPHO ORATOR": [
  "Antipho orator", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOT. $2": [
  "Theotimus historicus", 
  {
   "Ital": "Italica"
  }, 
  [
   "d. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. FLOR.": [
  "Anonymus Florentinus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAMAEL.": [
  "Chamaeleo grammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. ALEX.": [
  "Dionysius Alexandrinus scriptor ecclesiasticus", 
  {
   "Fr. in Lc. 22": "Fragmenta in Eu. Luc. 22", 
   "Ep. Paul. Sam": "Epistula ad Paulum Samosatenum"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERILL. STOIC.": [
  "Herillus Carthaginiensis stoicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOL. MON.": [
  "Nicolaus monachus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. NAASS.": [
  "Euangelium Naassenorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYIDUS TRAGICUS ET LYRICUS": [
  "Polyidus tragicus et lyricus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SILEN.": [
  "Silenus historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOSEBEIA EPIGRAMMATICA": [
  "Theosebeia epigrammatica", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOD.": [
  "Nicodemus Heracleensis epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMAGORAS MINOR RHETOR": [
  "Hermagoras Minor rhetor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD.": [
  "Theodorus Illustrius epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESOP.": [
  "Aesopus fabularum scriptor", 
  {
   "Sent": "Sententiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VINDIC.": [
  "Vindicianus Afer medicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENECR. XANTH.": [
  "Menecrates Xanthius historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCIN.": [
  "Alcinous philosophus", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "STADIAS.": [
  "Stadiasmus siue Periplus Maris Magni", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOD.": [
  "Demodocus lyricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZEN. SID.": [
  "Zeno Sidonius epicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MART. ANT.": [
  "Martyrius Antiochenus", 
  {
   "Pan": "Panegyricus Iohannis Chrysostomi"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARET.": [
  "Aretaeus medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EP. PAUL. APOCR.": [
  "Epistulae Pauli et Corinthiorum apocryphae", 
  {
   "Ep. Paul. Apocr": "Epistula Pauli apocrypha"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIOCHUS ASCALONIUS PHILOSOPHUS": [
  "Antiochus Ascalonius philosophus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STESIMBR.": [
  "Stesimbrotus historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEO AL.": [
  "Theo Alexandrinus mathematicus", 
  {
   "in Ptol": "in Ptolemaei Almagesto libri", 
   "Can. Paru": "in Ptolemaei canones commentarium paruum", 
   "Can. Magn": "in Ptolemaei canones commentarium magnum", 
   "Opt. Rec": "Opticorum recensio"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TZ. $2": [
  "Tzetzes, Isaac grammaticus", 
  {
   "Ep. Episc": "Epistula ad episcopos Asiae et Phrygiae", 
   "Ep. Thds": "Epistula ad Theodosium", 
   "Metr. Pind": "de metris Pindaricis"
  }, 
  [
   "XII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. $3": [
  "Demetrius historicus", 
  {
   "Pamph": "de Pamphylia"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. $2": [
  "Demetrius historicus", 
  {
   "Iud": "de Iudaeae regibus"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RUFIN.": [
  "Rufinianus, Iulius rhetor latinus", 
  {
   "Fig": "de figuris"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HORM.": [
  "Hormisdas papa", 
  {
   "Ep. Epiph": "Epistula ad Epiphanium"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOPHILUS HISTORICUS": [
  "Xenophilus historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOMBROTUS PYTHAGORICUS": [
  "Aristombrotus pythagoricus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. SID.": [
  "Antipater Sidonius epigrammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLID. SINOP.": [
  "Heraclides Sinopensis epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTEMO EPIGRAMMATICUS": [
  "Artemo epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMYL.": [
  "Simylus comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOL. PHIL.": [
  "Apologia Phileae episcopi", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISCH.": [
  "Ischyrionus diaconus", 
  {
   "Libell": "Libellus contra Dioscurum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "H. MON.": [
  "Historia Monachorum in Aegypto", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHEAS MASSILIENSIS GEOGRAPHUS": [
  "Pytheas Massiliensis geographus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDOX.": [
  "Eudoxus astronomus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NARR. IOS.": [
  "Narratio Iosephi Arimathiensis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARCELL. EMP.": [
  "Marcellus Empiricus medicus latinus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BABR. $2": [
  "Babrius", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS IAMBLICHI": [
  "Anonymus Iamblichi", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUSTIC.": [
  "Iusticinus Siciliensis scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRANTOR PHILOSOPHUS ACADEMICUS": [
  "Crantor philosophus academicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASTRAMPS.": [
  "Astrampsychus diuinus et onirocriticus", 
  {
   "Resp": "Decades Responsorum", 
   "Onir": "Onirocriticon"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPH. ATHEN.": [
  "Sophocles Atheniensis tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LINUS EPICUS": [
  "Linus epicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPIAS ELEUS SOPHISTA": [
  "Hippias Eleus sophista", 
  {
   "Hist": "Fragmenta historica"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. GNOST.": [
  "Ptolemaeus gnosticus", 
  {
   "Ep": "Epistula ad Floram"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIDON.": [
  "Sidonius Apollinaris episcopus Aruernicus", 
  {
   "Epist": "Epistulae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIC.": [
  "Nicander Colophonius epicus", 
  {
   "Fr": "Fragmenta", 
   "Sch uetera": "Scholia uetera", 
   "Fr. Hist": "Fragmenta historica", 
   "Th": "Theriaca", 
   "Sch": "Scholia"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAPITO EPIGRAMMATICUS": [
  "Capito epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDT. EBION.": [
  "Theodotus Ebionites scriptor ecclesiasticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPOLOCHUS REI COQUINARIAE SCRIPTOR": [
  "Hippolochus rei coquinariae scriptor", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTONIC. TARENT.": [
  "Aristonicus Tarentinus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. AR.": [
  "Asclepiades Arius historicus", 
  {}, 
  [
   "a. Ath.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLID.": [
  "Heraclides Tarentinus medicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERAS CAPPADOX MEDICUS": [
  "Heras Cappadox medicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSIDIPP. EPIGR.": [
  "Posidippus epigrammaticus", 
  {
   "Fr. Pap": "Fragmenta Papyracea"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOUUM TESTAMENTUM": [
  "Nouum Testamentum", 
  {
   "Eu. Matt": "Euangelium secundum Matthaeum"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SPART.": [
  "Spartianus, Aelius historicus", 
  {
   "Seu": "Septimius Seuerus"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPAGORAS HISTORICUS": [
  "Hippagoras historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUSTR.": [
  "Eustratius philosophus", 
  {
   "in APo": "in analyticorum posteriorum librum secundum commentarium"
  }, 
  [
   "XI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCMAEONIS POEMA EPICUM": [
  "Alcmaeonis poema epicum", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOL.": [
  "Solo lyricus et legislator", 
  {
   "Lg": "Leges", 
   "Ep": "Epistulae"
  }, 
  [
   "VII/VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYCOPHRONID.": [
  "Lycophronides lyricus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARMENO IAMBOGRAPHUS": [
  "Parmeno iambographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PINYTUS EPIGRAMMATICUS": [
  "Pinytus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FULG.": [
  "Fulgentius mythographus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERODES IUD.": [
  "Herodes Iudaeus historicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIT. HEIDEL.": [
  "Epitome Heidelbergensis historiae Diadochorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHESTR. TRAG.": [
  "Archestratus tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROTEU.": [
  "Proteuangelium Iacobi", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOCR. $2": [
  "Socrates et Socratici", 
  {
   "Dict": "Dicta Socratis", 
   "Ep": "Socratis et Socraticorum epistulae"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHOCL.": [
  "Agathocles historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRYSIPP.": [
  "Chrysippus stoicus", 
  {
   "Prou": "de prouidentia liber secundus", 
   "Log": "Quaestiones logicae"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGLAIAS ELEGIACUS": [
  "Aglaias elegiacus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERATOSTH. $2": [
  "Eratosthenes Scholasticus epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FR. PS. GR.": [
  "Fragmenta Pseudepigraphorum Graecorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLIPPUS COMICUS": [
  "Callippus comicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AR. BYZ.": [
  "Aristophanes Byzantius grammaticus", 
  {
   "Fr": "Fragmenta", 
   "Epit": "Historiae Animalium epitome subiunctis Aeliani"
  }, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. AET.": [
  "Alexander Aetolus elegiacus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOCR.": [
  "Philocrates historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHEMACH.": [
  "Archemachus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAR. MERC.": [
  "Marius Mercator scriptor ecclesiasticus", 
  {
   "Sub": "Liber subnotationum in uerbo Iuliani"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUCAN.": [
  "Lucanus, M. Annaeus poeta latinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "A KURZ": [
  "Aname lang", 
  {
   "unterwek abk": "unterwekr", 
   "abk werk": "Werk"
  }, 
  [
   "zeit start", 
   "zeit stopp", 
   "Notizen", 
   "zusatz"
  ]
 ], 
 "EPIGONI POEMA EPICUM": [
  "Epigoni poema epicum", 
  {}, 
  [
   "VII a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYCRITUS HISTORICUS": [
  "Polycritus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPREPIUS PANOPOLITANUS POETA": [
  "Pamprepius Panopolitanus poeta", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATH. MECH.": [
  "Athenaeus mechanicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMIPP.": [
  "Hermippus comicus", 
  {
   "Iamb": "Fragmenta iambica"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STILPO MEGAREUS PHILOSOPHUS": [
  "Stilpo Megareus philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BAS. SEL.": [
  "Basilius Seleuciensis scriptor ecclesiasticus", 
  {
   "V. Thecl": "de vita ac miraculis Theclae", 
   "Pent": "Sermo in Pentecosten", 
   "Pasch": "Homilia in Sanctum Pascha", 
   "Or": "Orationes", 
   "Laz": "Homilia in Lazarum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOSC. HIST.": [
  "Dioscorides historicus (varios autores del mismo nombre)", 
  {}, 
  [
   "IV a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS SCRIPTOR ECCLESIASTICUS (ANON. ) $1": [
  "Anonymus scriptor ecclesiasticus (Anon. )", 
  {
   "V. Thecl": "Vita Theclae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICIAS EPISTOLOGRAPHUS": [
  "Nicias epistolographus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*EPIGRAMMATUM FRAGMENTA PAPYRACEA": [
  "*Epigrammatum Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACAC. CP": [
  "Acacius Constantinopolitanus", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTEAS HIST.": [
  "Aristeas historicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH. TARS.": [
  "Philo Tarsensis medicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARNEISC.": [
  "Carneiscus philosophus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HARP.": [
  "Harpocratio lexicographus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG. $3": [
  "Diogenes Sinopensis philosophus", 
  {
   "Fr": "Fragmenta tragica", 
   "Ep": "Epistulae"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG. $2": [
  "Diogenes medicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON.": [
  "Anonymi", 
  {
   "Com": "de Comoedia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DRACO CORCYRAEUS SCRIPTOR DE LAPIDIBUS": [
  "Draco Corcyraeus scriptor de lapidibus", 
  {}, 
  [
   "a. Ath.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. CAP.": [
  "Antipater Cappadox scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Basilium"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEROPHANES HISTORICUS": [
  "Herophanes historicus", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYCHARM.": [
  "Polycharmus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLISTR. ARIST.": [
  "Callistratus Aristophanius grammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAN.": [
  "Ananius lyricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONST. II IMP.": [
  "Constantinus II imperator", 
  {
   "Ep": "Epistula ad Alexandrinos"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUMACH.": [
  "Eumachus Corcyraeus rerum naturalium scriptor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STRATO LAMPS.": [
  "Strato Lampsacenus philosophus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACTA PHIL.": [
  "Acta Phileae", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AN. BOISS.": [
  "Anecdota Graeca e cod. Regiis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOM.": [
  "Cleomedes astronomus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LONGUS SCRIPTOR EROTICUS": [
  "Longus scriptor eroticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYAEN. $2": [
  "Polyaenus, Iulius epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VICT.": [
  "Victor Antiochenus scriptor ecclesiasticus", 
  {
   "Oct": "Fragmenta in Octateuchum et Reges", 
   "Mc": "Catena in Marcum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIPPUS SCRIPTOR ECCLESIASTICUS": [
  "Hegesippus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIPH. CONST.": [
  "Epiphanius Constantiensis scriptor ecclesiasticus", 
  {
   "Rescr": "Rescriptum ad Acacium et Paulum", 
   "Fr": "Fragmenta", 
   "Patr": "de praegressionibus patriarcharum", 
   "Gemm. Fr": "Fragmentum ex opere de XII gemmis ad Diodorum", 
   "Ep. Io": "Fragmentum epistulae ad Iohannem Hierosolymitanum", 
   "Ep. Fr": "Epistulae Fragmentum", 
   "Num. Myst": "de numerorum mysteriis", 
   "V. Proph": "de uitis prophetarum", 
   "Lat. Mens": "de mensuris et ponderibus uersio latina", 
   "Inhum": "de diuina inhumanatione", 
   "Epit. Haer": "Haereseum"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS.": [
  "Pseudo", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYMEO": [
  "Symeo", 
  {}, 
  [
   "XI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CTESIPPUS HISTORICUS": [
  "Ctesippus historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEROPYTHUS HISTORICUS": [
  "Heropythus historicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH. HIST.": [
  "Philo historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOR.": [
  "Horatius Flaccus, Quintus poeta latinus", 
  {
   "Sat": "Saturae"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GR. THAUM.": [
  "Gregorius Thaumaturgus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Ep. Can": "Epistula canonica", 
   "Fid. Cap": "de fide capitula", 
   "Ep. Philagr": "Epistula ad Philagrium", 
   "Theoph": "in sancta theophania", 
   "Pan. Or": "in Origenem oratio panegyrica"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOSS.": [
  "Nossis epigrammatica", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHERECYD. LER.": [
  "Pherecydes Lerius historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BUTAS EPIGRAMMATICUS": [
  "Butas epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENECR. EPH.": [
  "Menecrates Ephesius poeta philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEUCO COMICUS": [
  "Leuco comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYMN. CURET.": [
  "Hymnus Curetum", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OENOM.": [
  "Oenomaus epigrammaticus", 
  {}, 
  [
   "I a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEM.": [
  "Themistius sophista", 
  {
   "in APr": "in Aristotelis Analyticorum Priorum librum I paraphrasis", 
   "Prud": "Fragmentum de prudentia", 
   "in Ph": "in Aristotelis Physica paraphrasis", 
   "in de An": "in libros Aristotelis de Anima paraphrasis", 
   "ad Lib": "Epistulae ad Libanium"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BASSUS, LOLLIUS EPIGRAMMATICUS": [
  "Bassus, Lollius epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERUIUS HISTORICUS": [
  "Seruius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BRYSO HERACLEOTA PHILOSOPHUS": [
  "Bryso Heracleota philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYC. RHEG.": [
  "Lycus Rheginus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTIPP. HIST.": [
  "Aristippus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDS. AL.": [
  "Theodosius Alexandrinus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VLP. $2": [
  "Vlpianus, Domitius iurisconsultus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DINIAS HISTORICUS": [
  "Dinias historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENARCH.": [
  "Xenarchus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BITO MECHANICUS": [
  "Bito mechanicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALB.": [
  "Albinus philosophus", 
  {
   "Intr": "Introductio in Platonem"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCIRAS COMICUS": [
  "Sciras comicus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CREOPH. EP.": [
  "Creophylus Samius epicus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILISTID.": [
  "Philistides historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. DIAC.": [
  "Iohannes Diaconus grammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMARCHUS HISTORICUS": [
  "Comarchus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELLAD.": [
  "Helladius epigrammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THYMOCL.": [
  "Thymocles epigrammaticus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "MYRSIL.": [
  "Myrsilus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRAIANUS IMPERATOR EPIGRAMMATICUS": [
  "Traianus imperator epigrammaticus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIT. BOST.": [
  "Titus Bostrensis scriptor ecclesiasticus", 
  {
   "Palm": "in ramos palmarum", 
   "Fr. Luc": "Fragmenta in Lucam", 
   "Man": "aduersus Manichaeos"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTOLM.": [
  "Eutolmius epigrammaticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. ANT.": [
  "Demetrius Antigonius historicus", 
  {}, 
  [
   "a. St. Byz.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHLD.": [
  "Philodemus epicureus", 
  {
   "Lib": "de libertate dicendi", 
   "Prou": "de prouidentia", 
   "Hom": "de bono rege secundum Homerum", 
   "Mort": "de morte liber quartus", 
   "Socr": "de secta socratica", 
   "Diu": "de diuitiis liber primus", 
   "Sens": "de sensibus", 
   "Epicur. Tract": "Tractatus de Epicuro et aliis", 
   "Rh": "Volumina rhetorica", 
   "Log. Libr": "logicorum librorum fragmenta", 
   "Herc": "uaria opera aliubi non edita", 
   "Acad. Hist": "Academicorum Historia", 
   "Oec": "de oeconomia", 
   "Stoic. Hist": "Stoicorum Historia", 
   "Epicur. Fr": "Fragmenta incertorum operum de Epicuro", 
   "D": "de diis liber primus et tertius", 
   "Epicur": "de Epicuro liber primus (?) et secundus", 
   "Sto": "de Stoicis", 
   "Grat": "de grato animo", 
   "Elect": "de electionibus et fugis", 
   "Piet": "de pietate", 
   "Sign": "de signis", 
   "Rh. Fr": "Fragmenta uoluminum rhetoricorum", 
   "Cont": "ad contubernales", 
   "Adul": "de adulatione", 
   "Inu": "de inuidia", 
   "Ir": "de ira", 
   "Ins": "de insania", 
   "Coll": "de colloquio", 
   "Vit": "de uitiis liber decimus (de superbia)"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHEL. HIST.": [
  "Archelaus Cappadocius historicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "VRSAC.": [
  "Vrsacius et Valens scriptores ecclesiastici", 
  {
   "Ep. Iul": "Epistula ad Iulium papam"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIC.": [
  "Anaxicrates historicus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOPH. HIST.": [
  "Diophantus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. DEMOCR.": [
  "Pseudo Democritus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTODIC.": [
  "Aristodicus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIEROCL. GR.": [
  "Hierocles grammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OENOM. $2": [
  "Oenomaus philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COLL. AUELL.": [
  "Collectio Auellana", 
  {}, 
  [
   "IV/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTO STOIC.": [
  "Aristo Chius stoicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPHAENETUS HISTORICUS": [
  "Sophaenetus historicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOCALYPSIS ELIAE": [
  "Apocalypsis Eliae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS.": [
  "Dionysius epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRATIN.": [
  "Pratinas lyricus et tragicus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAL.": [
  "Galenus medicus et Pseudo Galenus", 
  {
   "Urin": "de signis ex urinis", 
   "Vict. Att": "de uictu attenuante", 
   "Alim": "Fragmentum in Hippocratis De Alimento", 
   "Exp. Med": "de experientia medica", 
   "Ins. Log": "Institutio logica", 
   "Septim. Part": "de septimestri partu", 
   "Subf. Emp": "Subfiguratio empirica", 
   "Caus. Affect": "de causa affectionum", 
   "in Pl. Tim": "in Platonis Timaeum commentaria", 
   "Propr. Placit": "de propriis placitis", 
   "Consuet": "de consuetudinibus", 
   "Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMELESAGORAS HISTORICUS": [
  "Amelesagoras historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. HER.": [
  "Anonymus apud Herodianum historicum", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CORN.": [
  "Cornutus philosophus", 
  {
   "Rh": "Ars rhetorica"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIPPID.": [
  "Philippides comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROTAGORAS NICAEENSIS ASTROLOGUS": [
  "Protagoras Nicaeensis astrologus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACAC. CAES.": [
  "Acacius Caesariensis", 
  {
   "Fr. Marcell": "Fragmenta contra Marcellum", 
   "Fr. Rom": "Fragmenta in Ep. Romanos", 
   "Oct": "Fragmenta in Octateuchum"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CEB.": [
  "Cebes philosophus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDRONIC. RHOD.": [
  "Andronicus Rhodius philosophus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "A\u00cbTIUS DOXOGRAPHUS": [
  "A\u00ebtius doxographus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS PHILOSOPHUS (ANON. ) $1": [
  "Anonymus philosophus (Anon. )", 
  {
   "in Tht": "Commentarium in Platonis Theaetetum"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TULL. FLACC.": [
  "Tullius Flaccus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RES GESTAE DIUI AUGUSTI": [
  "Res gestae diui Augusti", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORIB. LAT.": [
  "Oribasii uersio latina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUS. GR.": [
  "Pausanias grammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMPHIO HISTORICUS": [
  "Amphio historicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "THYM.": [
  "Thymaridas philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MART. IUL.": [
  "Martyrium sanctae Iulianae", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "LATERC. ALEX.": [
  "Laterculi Alexandrini", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RHIAN.": [
  "Rhianus epicus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. APOLL.": [
  "Iulianus Apollinarista scriptor ecclesiasticus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS HISTORICUS": [
  "Anonymus historicus", 
  {
   "Mul": "Tractatus de mulieribus claris in bello"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GNOMOL. VAT.": [
  "Gnomologium Vaticanum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APHTH.": [
  "Aphthonius rhetor", 
  {
   "Fab": "Fabulae", 
   "Prog": "Progymnasmata"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAST. ANT.": [
  "Anastasius Antiochenus scriptor ecclesiasticus", 
  {
   "Sac": "de sacerdotio", 
   "Anec": "Anecdota", 
   "Fr": "Fragmenta", 
   "Vit. Exced": "Sermo de iis qui uita excedunt"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TEUCER CYZ.": [
  "Teucer Cyzicenus historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GR. AGR.": [
  "Gregorius Agrigentinus scriptor ecclesiasticus", 
  {
   "Eccl": "Explanatio supra Eccl"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACAD. IND.": [
  "Academicorum Philosophorum index Herculanensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. PARIS.": [
  "Anonyma Collectio Synonymica Parisina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMESIAN. HIST.": [
  "Hermesianax Cyprius historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. FR. PAP.": [
  "Vitarum Fragmenta Papyracea", 
  {
   "Phil": "philosophorum uitae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COM. ADESP.": [
  "Comica Adespota", 
  {
   "Dor": "Comica Adespota Dorica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILYLL.": [
  "Philyllius comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRYSIPPUS COMICUS": [
  "Chrysippus comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUTOL.": [
  "Autolycus astronomus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASOKA MAURYA REX INDIAE": [
  "Asoka Maurya rex Indiae", 
  {
   "Edict": "Edictum"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. GAZ.": [
  "Timotheus Gazaeus philosophus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HP.": [
  "Hippocrates medicus", 
  {
   "Vict": "de uictus ratione I-IV", 
   "Septim": "de septimestri partu", 
   "Superf": "de superfoetatione", 
   "Or. Thess": "Orati Thessali", 
   "Prog": "Prognosticum", 
   "Test": "Testamentum", 
   "Epid": "Epidemiorum liber VI", 
   "Nat. Mul": "de natura muliebri", 
   "Hum": "de humoribus", 
   "Vlc": "de ulceribus", 
   "Carn": "de carnibus", 
   "Hebd": "de hebdomadis", 
   "Off": "de officina medici", 
   "VM": "de uetere medicina", 
   "Morb. Sacr": "de morbo sacro", 
   "Prorrh": "Prorrheticus I", 
   "Praec": "Praeceptiones", 
   "Salubr": "de uictu salubri", 
   "Vid. Ac": "de videndi acie", 
   "Sch": "Scholia", 
   "Virg": "de his quae ad uirgines spectant", 
   "Remed": "de remediis"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TAC.": [
  "Tacitus, Cornelius historicus", 
  {
   "Hist": "Historiae", 
   "Ann": "Annales"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILEM. III": [
  "Philemo III comicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. THOM.": [
  "Euangelium Thomae A, B", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MNASALC.": [
  "Mnasalces epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIEROCL. HIST.": [
  "Hierocles historicus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEROD. MED.": [
  "Herodotus medicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OECUM.": [
  "Oecumenius Triccaeus scriptor ecclesiasticus", 
  {
   "Apoc": "Commentarius in Apocalypsin", 
   "Rom. -Heb": "Fragmenta in epistulas Pauli"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYN. ALCH.": [
  "Synesius alchemista", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDR. MOPS.": [
  "Theodorus Mopsuestenus scriptor ecclesiasticus", 
  {
   "Ps": "Commentarii in Psalmos", 
   "Act. Proem": "Proemium in Act. Ap", 
   "Heb": "Commentarius in Ep. Hebr", 
   "Symb": "Symbolum", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Luc": "Fragmenta in Eu. Luc", 
   "Io": "Fragmenta in Eu. Io", 
   "Resp. Chrys": "Responsio ad Chrysostomum", 
   "Oct": "Fragmenta in Octateuchum et Reges"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NESTOR EPIGRAMMATICUS": [
  "Nestor epigrammaticus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. HIST.": [
  "Theodorus Panages historicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "PION.": [
  "Pionius scriptor ecclesiasticus", 
  {
   "V. Polyc": "Vita Polycarpi"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMIG.": [
  "Damigero-Evax scriptores de lapidibus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ABLABIUS ILLUSTRIUS EPIGRAMMATICUS": [
  "Ablabius Illustrius epigrammaticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. HEB.": [
  "Euangelium Hebraeorum", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TERP.": [
  "Terpander lyricus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERENUS, QUINTUS MEDICUS LATINUS": [
  "Serenus, Quintus medicus latinus", 
  {}, 
  [
   "II/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEL. DION.": [
  "Aelius Dionysius grammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IL. PERS.": [
  "Iliu Persis poema epicum", 
  {}, 
  [
   "VIII a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOGNOST.": [
  "Theognostus grammaticus", 
  {
   "Can": "Canones"
  }, 
  [
   "IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. $2": [
  "Asclepiades Prusensis medicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOGENIAN.": [
  "Diogenianus paroemiographus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARESA(S)": [
  "Aresa(s)", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. EUDOX.": [
  "Pseudo Eudoxus astronomus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOBULE HISTORICA": [
  "Nicobule historica", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEN. PROT.": [
  "Menander Protector historicus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLIN.": [
  "Plinius rerum naturalium scriptor latinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELLANIC.": [
  "Hellanicus historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPHILA HISTORICA": [
  "Pamphila historica", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHIN.": [
  "Agathinus medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGRAPH.": [
  "Agrapha", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUSTATHIUS ANTIOCHENUS SCRIPTOR ECCLESIASTICUS (EUST. ANT. )": [
  "Eustathius Antiochenus scriptor ecclesiasticus (Eust. Ant. )", 
  {
   "Hex": "Commentarius in hexaemeron", 
   "Laz": "Homilia spuria de Lazaro, Maria et Martha"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATH. $2": [
  "Athenaeus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMO": [
  "Hermo uel Hermonax epicus", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDEM. $2": [
  "Eudemus poeta medicus", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATER.": [
  "Craterus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPIAS ERYTH.": [
  "Hippias Erythraeus historicus", 
  {}, 
  [
   "helen\u00edst. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEO PHIL.": [
  "Leo Philosophus epigrammaticus", 
  {}, 
  [
   "IX/X d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. AMBR.": [
  "Lexicon Ambrosianum uocabulorum plura significantium", 
  {}, 
  [
   "VIII/IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DICAEARCH. PHIL.": [
  "Dicaearchus philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAEL. AUR.": [
  "Caelius Aurelianus medicus", 
  {
   "Gyn": "Gynaecia"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTYCH.": [
  "Eutychianus historicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERIPH.": [
  "Eriphus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LICIN.": [
  "Licinia Eudoxia Augusta imperatrix", 
  {
   "Ep": "Epistula ad Theodosium"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*VITAE AESCHINIS": [
  "*Vitae Aeschinis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ROMAN.": [
  "Romanus sophista", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAULIN. TYR.": [
  "Paulinus Tyrius scriptor ecclesiasticus", 
  {
   "Symb": "Symbolum", 
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYRUS ASTROLOGUS": [
  "Syrus astrologus", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLYTUS HISTORICUS": [
  "Clytus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATH. PRESB.": [
  "Athanasius Alexandrinus presbyter", 
  {
   "Libell": "Libellus contra Dioscorum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOG. HIST.": [
  "Hermogenes historicus", 
  {
   "Phryg": "de Phrygia"
  }, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PISAND.": [
  "Pisander Camirensis epicus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANACREONT.": [
  "Anacreontea", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOSIAD.": [
  "Dosiadas epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. PHILONID.": [
  "Vita Philonidis Epicurei", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEON. HIST.": [
  "Leonidas historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAMPRID.": [
  "Lampridius, Aelius historicus", 
  {
   "Seuer": "Alexander Seuerus"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. SEG.": [
  "Lexicon Seguerianum", 
  {}, 
  [
   "XI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. STEPH.": [
  "Pseudo Stephanus Alexandrinus", 
  {}, 
  [
   "VI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. SAL.": [
  "Alexander Salaminus scriptor ecclesiasticus", 
  {
   "Cruc. epit": "Epitome encomii crucis", 
   "Barn": "Laudatio in apostolum Barnabam"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUL. AEG.": [
  "Paulus Aegineta medicus", 
  {}, 
  [
   "VII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHIRURG. FR. PAP.": [
  "De Re Chirurgica Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM.": [
  "Hermas pater apostolicus", 
  {
   "Vis": "Visio"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. COM.": [
  "Dionysius comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. GRAMM.": [
  "Iulianus grammaticus latinus", 
  {}, 
  [
   "VII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ADAM.": [
  "Adamantius scriptor ecclesiasticus", 
  {
   "Dial": "Dialogus"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUGENES EPIGRAMMATICUS": [
  "Eugenes epigrammaticus", 
  {}, 
  [
   "d. III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. RHET. CANT.": [
  "Lexicon Rhetoricum Cantabrigiense", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEDIC. FR. PAP.": [
  "De Re Medica Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NONIUS MARCELLUS GRAMMATICUS LATINUS": [
  "Nonius Marcellus grammaticus latinus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "M. ANT.": [
  "Marcus Aurelius Antoninus imperator", 
  {
   "Ep. Sen": "Epistula ad senatum"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MUSAE. $2": [
  "Musaeus philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PSEUDO EUPOLEMUS HISTORICUS": [
  "Pseudo Eupolemus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TYRANNIO GRAMMATICUS": [
  "Tyrannio grammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IDOM.": [
  "Idomeneus Lampsacenus historicus et philosophus", 
  {
   "Hist": "Fragmenta historica"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIU.": [
  "Liuius, Titus historicus latinus", 
  {
   "Per": "Periochae"
  }, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODORUS EPIGRAMMATICUS": [
  "Theodorus epigrammaticus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. ANT.": [
  "Iohannes Antiochenus scriptor ecclesiasticus", 
  {
   "Exc. Salm": "Excerpta Salmasiana ex altera Archaeologia", 
   "Sent": "Sententia"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENODORUS GRAMMATICUS": [
  "Zenodorus grammaticus", 
  {}, 
  [
   "d. D. H.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUMEL. HIST.": [
  "Eumelus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOTIO PARADOXOGRAPHUS": [
  "Sotio paradoxographus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. BAR.": [
  "Apocalypsis Baruch", 
  {}, 
  [
   "a. III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUCILL.": [
  "Lucillius vel Luci(ll)us epigrammaticus", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CTES.": [
  "Ctesias historicus et medicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLID. PONT. GR.": [
  "Heraclides Ponticus grammaticus et poeta", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIBER DUB. NOM.": [
  "Liber de dubiis nominibus", 
  {}, 
  [
   "IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OD. XI SALOM.": [
  "Oda XI Salomonis", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPHILUS HISTORICUS": [
  "Theophilus historicus", 
  {}, 
  [
   "a. Alex.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FIRM. CAES.": [
  "Firmus Caesariensis scriptor ecclesiasticus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. TRAG.": [
  "Theodorus tragicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TROILUS GRAMMATICUS": [
  "Troilus grammaticus", 
  {
   "Prol": "Prolegomena Rhetoricae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HISP. ANON.": [
  "Hispani Anonymi", 
  {}, 
  [
   "a Str.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONST.": [
  "Constantinus I imperator", 
  {
   "Ep": "Epistulae", 
   "Or. S. C": "Oratio ad sanctorum coetum"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUENUS ATHENIENSIS EPIGRAMMATICUS": [
  "Euenus Atheniensis epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIOCH.": [
  "Antiochus epigrammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAEREM.": [
  "Chaeremo tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "D. T.": [
  "Dionysius Thrax grammaticus", 
  {
   "Supp": "Supplementa artis Dionysianae vetusta", 
   "Fr": "Fragmenta", 
   "Sch": "Scholia"
  }, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUEMERUS PHILOSOPHUS": [
  "Euemerus philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARM. NAUP.": [
  "Carmen Naupactium", 
  {}, 
  [
   "VI a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CERCOP.": [
  "Cercopes poema epicum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS.": [
  "Glossaria", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIG. $2": [
  "Epigonus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOT. MIL.": [
  "Diotimus Milesius epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENODOT. NIC.": [
  "Menodotus Nicomedensis medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEOPHR.": [
  "Neophro tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMOSTR.": [
  "Timostratus comicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYCEAS ARGIUUS HISTORICUS": [
  "Lyceas Argiuus historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLONID. HOR.": [
  "Apollonides Horapius historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BIO SOL.": [
  "Bio Soleus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAO COMICUS": [
  "Lao comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. $4": [
  "Ptolemaeus rex Aegypti epigrammaticus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPICR.": [
  "Epicrates comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYC. $2": [
  "Lycophro tragicus", 
  {
   "Fr": "Fragmenta tragica", 
   "Com": "de comoedia fragmenta", 
   "Par": "Paraphrases (Par"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEROPHIL.": [
  "Herophilus medicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. $2": [
  "Ptolemaeus lexicographus", 
  {
   "Vocab": "de differentia vocabulorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIMEN.": [
  "Limenius lyricus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLAUT.": [
  "Plautus comicus latinus", 
  {
   "Vid": "Vidularia"
  }, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BLAES.": [
  "Blaesus comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEMENTINA": [
  "Clementina", 
  {
   "Hom. Clem": "Homiliae Clementinae", 
   "Clem. Recogn": "Recognitiones Clementinae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. ASCAL.": [
  "Iulianus Ascalonita architectus et iurisconsultus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "D.": [
  "Demosthenes orator", 
  {
   "Prooem": "Prooemia", 
   "Fr": "Fragmenta", 
   "Sch": "Scholia"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUCRAT.": [
  "Eucrates historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "A. XANTHIPP.": [
  "Acta Xanthippae et Polyxenae", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. EXEG.": [
  "Anonymus Exegeticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIG.": [
  "Antigonus Carystius biographus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLID. COM.": [
  "Heraclides comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUPHRON.": [
  "Euphronius lyricus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEXIPP. $2": [
  "Dexippus philosophus", 
  {
   "in Cat": "in Aristotelis Categorias commentarium"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTHYCL.": [
  "Euthycles comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTEMO PERG.": [
  "Artemo Pergamenus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. IS.": [
  "Vita Isaei", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEM.": [
  "Geminus astronomus", 
  {
   "Opt": "Optica", 
   "Calend": "Calendarium"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOEB.": [
  "Phoebammo rhetor", 
  {
   "Fig": "de figuris"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLIDEM.": [
  "Clidemus uel Clitodemus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIAS HISTORICUS": [
  "Hegesias historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AXIOP.": [
  "Axiopistus gnomologus", 
  {
   "Dact": "Fabulae dactylicae"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEUER. $2": [
  "Seuerus medicus", 
  {
   "Clyst": "de clysteribus"
  }, 
  [
   "d. Gal.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACRO MEDICUS": [
  "Acro medicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATES COM.": [
  "Crates comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCYTHIN.": [
  "Scythinus Teius poeta philosophus", 
  {
   "Hist": "Fragmenta historica"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOSTR. HIST.": [
  "Nicostratus historicus", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOS.": [
  "Sosicrates uel Sostratus poeta", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*HISTORICORUM FRAGMENTA PAPYRACEA": [
  "*Historicorum Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHAEDO ELIDENSIS PHILOSOPHUS": [
  "Phaedo Elidensis philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. PTOL.": [
  "Pseudo Ptolemaeus gnomologus", 
  {
   "Centil": "Centiloquium"
  }, 
  [
   "a. V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOC.": [
  "Phocylides lyricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUS. NIC.": [
  "Eusebius Nicomediensis scriptor ecclesiasticus", 
  {
   "Libell": "Libellus poenitentiae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIPP.": [
  "Anaxippus comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOM.": [
  "Diomedes grammaticus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPON.": [
  "Hipponax iambographus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOMENES REX SPARTANORUM HISTORICUS": [
  "Cleomenes rex Spartanorum historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METAG.": [
  "Metagenes comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLIT.": [
  "Heraclitus allegorista", 
  {
   "All": "Allegoriae"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. MAC. IUN.": [
  "Pompeius Macer Iunior epigrammaticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "FIRMINUS SCRIPTOR ECCLESIASTICUS": [
  "Firminus scriptor ecclesiasticus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. DICAEARCH.": [
  "Pseudo Dicaearchus uel Heraclides Creticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHITIM.": [
  "Architimus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRAD. PIL.": [
  "Traditio Pilati", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHOERILUS IASIUS EPICUS": [
  "Choerilus Iasius epicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMACHIDAS RHODIUS HISTORICUS ET EPICUS": [
  "Timachidas Rhodius historicus et epicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEXICON QUOD UOCATUR ANTIATTICISTA": [
  "Lexicon quod uocatur Antiatticista", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CREO HISTORICUS": [
  "Creo historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACERAT.": [
  "Aceratus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATH. AL.": [
  "Athanasius Alexandrinus scriptor ecclesiasticus et Pseudo Athanasius", 
  {
   "V. Anton": "Vita Antonii", 
   "Res. Bapt": "Oratio in resurrectionem et in recens baptizatos", 
   "Ep. Fest": "Epistularum festiualium fragmenta", 
   "Apol. Const": "Apologia ad Constantium", 
   "Serm. Fid": "Sermo maior de fide", 
   "Interpr": "Interpretatio symboli", 
   "Diab": "Homilia in diabolum", 
   "Syn": "Epistula de synodis Arimini et Seleuciae", 
   "Theopasch": "Contra Theopaschitas", 
   "Poenit. can": "Canones poenitentiales", 
   "Virg": "de uirginitate", 
   "Inc": "de incarnatione", 
   "Ep": "Epistulae uariae", 
   "Fr. Ps": "Fragmenta in Ps"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FLACCUS, TULLIUS EPIGRAMMATICUS": [
  "Flaccus, Tullius epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLEO GNOSTICUS": [
  "Heracleo gnosticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIST. CHAR.": [
  "Characteres epistolici", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. HES.": [
  "Vitae Hesiodi", 
  {
   "Vit. Hes. Tz": "Vita Hesiodi Tzetzae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BARDES.": [
  "Bardesanes historicus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*ANONYMUS DE SCIENTIA POLITICA SCRIPTOR": [
  "*Anonymus de scientia politica scriptor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "X. EPH.": [
  "Xenopho Ephesius scriptor eroticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZALEUC.": [
  "Zaleucus Locrus pythagoricus et legislator", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. STOIC.": [
  "Antipater Tarsensis stoicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOEN. ANON.": [
  "Phoenicii anonymi", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOL.": [
  "Philolaus philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOROI": [
  "Horoi anonymi Samii", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENO STOIC.": [
  "Zeno Citieus stoicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EURYPHO CNIDIUS MEDICUS": [
  "Eurypho Cnidius medicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. SOR.": [
  "Pseudo Soranus medicus", 
  {
   "Quaest": "Quaestiones medicinales"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUMEL.": [
  "Eumelus epicus et lyricus", 
  {}, 
  [
   "VIII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLID. PONT.": [
  "Heraclides Ponticus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMAEUS ASTROLOGUS": [
  "Timaeus astrologus", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. CAES.": [
  "Iohannes Caesariensis scriptor eclesiasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IREN. TYR.": [
  "Irenaeus Tyrius comes", 
  {
   "Ep": "Epistula ad Orientales"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASSUMPTIO MOSIS": [
  "Assumptio Mosis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDEMUS RHETOR": [
  "Eudemus rhetor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPARCH. $2": [
  "Hipparchus philosophus pythagoricus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPARCH. $1": [
  "Hipparchus epicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLITONYMUS HISTORICUS": [
  "Clitonymus historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOSIUS CORDUBENSIS SCRIPTOR ECCLESIASTICUS": [
  "Hosius Cordubensis scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Constantium imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAEO HISTORICUS": [
  "Paeo historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROTAG.": [
  "Protagoras philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTEMO CLAZ.": [
  "Artemo Clazomenius historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZONAE.": [
  "Zonaeus rhetor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GR. NAZ.": [
  "\"<TD WIDTH=\"\"85%\"\" VALIGN=\"\"TOP\"\" height=\"\"24\"\"> Gregorius Nazianzenus scriptor ecclesiasticus\"", 
  {
   "Test. Add": "de testamentis et adventu Christi (additamentum ad carmen dogmaticum 9", 
   "Mul. Orn": "carmen aduersus mulieres se nimis ornantes", 
   "Ep": "Epistulae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARTH.": [
  "Parthenius mythographus", 
  {
   "Fr": "Fragmenta poetica"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEO RHETOR": [
  "Theo rhetor", 
  {
   "Prog": "Progymnasmata"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIOCH. HIST.": [
  "Antiochus Syracusanus historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENAS CONSTANTINOPOLITANUS SCRIPTOR ECCLESIASTICUS": [
  "Menas Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Ep. Petr": "Epistula ad Petrum Hierosolymitanum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLIPHO PYTHAGORICUS": [
  "Callipho pythagoricus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLAUD. HERM.": [
  "Hermerius, Claudius", 
  {
   "Mul": "Mulomedicina Chironis"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PANYAS.": [
  "Panyasis epicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOR.": [
  "Soranus medicus", 
  {
   "V. Hp": "Vita Hippocratis"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIOCHUS EPISTOLOGRAPHUS": [
  "Antiochus epistolographus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYSTR.": [
  "Polystratus epicureus", 
  {
   "Contempt": "de irrationali contemptu"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TULL. LAUR.": [
  "Tullius Laurea epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGEM. HIST.": [
  "Hegemo Alexandrinus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOENICID.": [
  "Phoenicides comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODOS. BITH.": [
  "Theodosius Bithynius mathematicus et astronomus", 
  {
   "Sph": "Sphaera", 
   "Sch": "Scholia"
  }, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXARCH.": [
  "Anaxarchus philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRYPHIODORUS EPICUS": [
  "Tryphiodorus epicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXAG.": [
  "Anaxagoras philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CERCIDEA": [
  "Cercidea", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EP. DIOG.": [
  "Epistula ad Diognetum", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENAG.": [
  "Xenagoras historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BOETH.": [
  "Boethius philosophus", 
  {
   "Mus": "de institutione musica"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMONIC.": [
  "Demonicus comicus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOCAS DIACONUS": [
  "Phocas diaconus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AN. ATHEN.": [
  "Anecdota Atheniensia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAPH. FR. PAP.": [
  "Anaphorarum Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAPIAS HIEROPOLITANUS SCRIPTOR ECCLESIASTICUS": [
  "Papias Hieropolitanus scriptor ecclesiasticus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FIRM.": [
  "Firmicus Maternus astrologus", 
  {
   "Err. prof. relig": "de errore profanarum religionum"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOCR. $2": [
  "Democritus philosophus", 
  {
   "Fr. O": "Fragmentum Orth"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHOCL.": [
  "Pythocles historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATES MALLOTES GRAMMATICUS (CRATES GR. )": [
  "Crates Mallotes grammaticus (Crates Gr. )", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISTER HISTORICUS": [
  "Ister historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEAET. SCHOL.": [
  "Theaetetus Scholasticus epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. PAUL.": [
  "Apocalypsis Pauli", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. ARIAN.": [
  "Anonymi Varii Ariani", 
  {
   "Virg": "Sermo de virginitate", 
   "Hom. Oct": "Homiliae duae ad octauas Paschae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MNESIM.": [
  "Mnesimachus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTON. AB.": [
  "Antonius abbas", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOSTEPH. HIST.": [
  "Philostephanus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOPH.": [
  "Diophantus mathematicus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DICTYS CRETENSIS": [
  "Dictys Cretensis, translatio Luci Septimii", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BASILIDES GNOSTICUS": [
  "Basilides gnosticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAULIN.": [
  "Paulinus Nolanus episcopus", 
  {
   "V. Ambr": "Vita Ambrosii", 
   "Ep": "Epistulae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLAU. AP.": [
  "Claudius Apollinarius scriptor ecclesiasticus", 
  {
   "Fr. Pasch": "Fragmenta de Paschate"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOMN.": [
  "Domninus Syrus philosophus et mathematicus", 
  {
   "Prop": "de deductione in proportionibus facienda", 
   "Man": "manuale arithmeticae introductionis"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLB. RH.": [
  "Polybius Sardianus rhetor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THGN. HIER.": [
  "Theognis uel Theognius Hierosolymitanus scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRY. HIE.": [
  "Chrysippus Hierosolymitanus presbyter", 
  {
   "Enc. Io. B": "Encomium in Iohannem Baptistam", 
   "Enc. in Mich": "Encomium in Michaelem archangelum", 
   "Enc. in Thdr": "Encomium in Theodorum", 
   "Enc. in M": "Encomium in Mariam Deiparam"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOTAD. COM.": [
  "Sotades comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MICHAELIUS EPIGRAMMATICUS": [
  "Michaelius epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IPHICRATES": [
  "Iphicrates historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. COM.": [
  "Iohannes Comes scriptor ecclesiasticus", 
  {
   "Relat": "Sacrarum largitionum relatio"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIST.": [
  "Antistius epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FELIX III PAPA": [
  "Felix III papa", 
  {
   "Ep. Zen": "Epistula ad Zenonem imperatorem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPH. HIER.": [
  "Stephanus Hierapolitanus scriptor ecclesiasticus", 
  {
   "Agn": "contra Agno\u00ebtas"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AFRIC.": [
  "Africanus, Sextus Iulius uariae scientiae scriptor", 
  {
   "Pers": "Narratio de rebus Persicis", 
   "Cest": "Cesti", 
   "Ep. Orig": "Epistula ad Origenem"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOR. AB.": [
  "Dorotheus Gazaeus abbas", 
  {
   "V. Dosith": "Vita Sancti Dosithei"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTEAS IUDAEUS EPISTOLOGRAPHUS": [
  "Aristeas Iudaeus epistolographus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THPHR.": [
  "Theophrastus philosophus", 
  {
   "Vent": "de uentis", 
   "Vert": "de uertigine", 
   "Od": "de odoribus", 
   "Char": "Characteres", 
   "Metaph": "Metaphysica", 
   "Fr. Pap": "Fragmenta papyracea", 
   "Lex": "\"<FONT FACE=\"\"SPIonic\"\">peri\\ le/cewj</FONT> \"", 
   "Ign": "de igne", 
   "Lap": "de lapidibus", 
   "De elig. magistr": "de eligendis magistratibus"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POEN. APP.": [
  "Poenae Apostolorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARC. SID.": [
  "Marcellus Sidetes poeta medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VEL. LONG.": [
  "Velius Longus grammaticus latinus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. AR.": [
  "Pseudo Dionysius Areopagita scriptor ecclesiasticus", 
  {
   "Myst": "de mystica theologia"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOCRITUS EPIGRAMMATICUS": [
  "Xenocritus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPOCR. CH.": [
  "Hippocrates Chius", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEL. CYZ.": [
  "Gelasius Cyzicenus scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPH.": [
  "Stephanus medicus", 
  {
   "in Hp. Aph": "in Hippocratis Aphorismos I-VI", 
   "in Hp. Fract": "in librum Hippocratis de fracturis", 
   "in Hp. Progn": "in Hippocratis Prognostica", 
   "in Gal. Glauc": "in Galeni ad Glauconem de medendi methodo librum primum", 
   "Ur": "de urina"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOCR.": [
  "Socrates epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSITH.": [
  "Sositheus tragicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARCELLIN. $2": [
  "Marcellinus medicus", 
  {
   "Puls": "de pulsibus"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYPR.": [
  "Cypria poema epicum", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MIM. FR. PAP.": [
  "Mimorum Fragmenta Papyracea", 
  {
   "Charit": "Mimus Charitionis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAPER, FLAUIUS GRAMMATICUS LATINUS": [
  "Caper, Flauius grammaticus latinus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OENOPIDES PHILOSOPHUS": [
  "Oenopides philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATEUAS BOTANICUS": [
  "Crateuas botanicus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDYM.": [
  "Didymus scriptor de mensuris", 
  {
   "Mens": "Mensurae marmorum ac lignorum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NAUMACH.": [
  "Naumachius epicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILET.": [
  "Philetas uel Philitas grammaticus et poeta", 
  {
   "Fr. Poet": "Fragmenta poetica", 
   "Fr. Gramm": "Fragmenta grammatica"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MICH.": [
  "Michael Ephesius philosophus", 
  {}, 
  [
   "XI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOPHO TRAGICUS": [
  "Cleopho tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RHOD.": [
  "Rhodo scriptor ecclesiasticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENO LAOD.": [
  "Zeno Laodicenus medicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. THESS.": [
  "Antipater Thessalonicensis epigrammaticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCAMO HISTORICUS": [
  "Scamo historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTARCH. SAM.": [
  "Aristarchus Samius astronomus", 
  {
   "Hyp": "Hypotheses"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LOBO ARGIUUS": [
  "Lobo Argiuus poeta", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "LOLLIAN.": [
  "Lollianus scriptor eroticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAX. RH.": [
  "Maximus rhetor", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOT. TIR.": [
  "Notae Tironianae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BIO HIST.": [
  "Bio historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IL. PARU.": [
  "Iliades Paruae poemata epica", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MNASEAS HISTORICUS": [
  "Mnaseas historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESAR.": [
  "Aesara uel Aresa(s) philosophus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. D.": [
  "Iohannes Damascenus scriptor ecclesiasticus", 
  {
   "Volunt": "de duabus in Christo uoluntatis"
  }, 
  [
   "VIII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ONOMACRITUS EPICUS": [
  "Onomacritus epicus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERINN.": [
  "Erinna lyrica", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUN. NIC.": [
  "Eunomius Nicomedensis scriptor ecclesiasticus", 
  {
   "Supplic": "Supplicatio"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICANOR GRAMMATICUS": [
  "Nicanor grammaticus", 
  {
   "Od": "\"<FONT FACE=\"\"SPIonic\"\">peri\\ 7)Odusseiakh=j stigmh=j</FONT> \""
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGROETAS HISTORICUS": [
  "Agroetas historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THESSAL.": [
  "Thessalus astrologus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARCINUS TRAGICUS": [
  "Carcinus tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DISP. PHOT.": [
  "Disputatio Photini Manichaei cum Paulo", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "S. E.": [
  "Sextus Empiricus philosophus", 
  {
   "P": "Pyrrhonianae institutiones"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCIP. NASIC.": [
  "Scipio Nasica, P. Cornelius historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BESANT.": [
  "Besantinus epigrammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "S.": [
  "Sophocles tragicus", 
  {
   "Fr. Eleg": "Fragmenta elegiaca", 
   "Fr": "Fragmenta", 
   "Tr": "Trachiniae", 
   "Pae": "Paean", 
   "Sch": "Scholia"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. LAC.": [
  "Demetrius Laco epicureus", 
  {
   "Geom": "de geometria", 
   "Po": "de poematis"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TH.": [
  "Thucydides historicus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. PHIL.": [
  "Euangelium Philippi", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPAS.": [
  "Hippasus pythagoricus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOCL.": [
  "Philocles tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEXICRATES COMICUS": [
  "Dexicrates comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOX.": [
  "Philoxenus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DELLIUS, QUINTUS HISTORICUS": [
  "Dellius, Quintus historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FLAU. ANT.": [
  "Flauianus Antiochenus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Anath": "de non anathematizandis"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. IUD.": [
  "Anonymus Dialogus cum Iudaeis", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NUMEN.": [
  "Numenius Apamensis platonicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MYRIN.": [
  "Myrinus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FR. HIST.": [
  "Fragmenta historica ecclesiastica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHENA.": [
  "Athenaco historicus", 
  {}, 
  [
   "a. helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OLYMP.": [
  "Olympiodorus philosophus", 
  {
   "Prol": "Prolegomena", 
   "in Phd": "in Platonis Phaedonem commentaria", 
   "in Alc": "in Platonis Alcibiadem commentaria", 
   "in Mete": "in Aristotelis Meteora commentaria", 
   "in Grg": "in Platonis Gorgiam commentaria"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MUC. SCAEU.": [
  "Mucius Scaeuola epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GALL. PLAC.": [
  "Galla Placidia imperatrix", 
  {
   "Ep. Thds": "Epistula ad Theodosium"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMOX.": [
  "Damoxenus comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "H. HOM.": [
  "Hymni Homerici", 
  {
   "h. Ven": "hymnus ad Venerem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CROBYL.": [
  "Crobylus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARSEN. HYPS.": [
  "Arsenius Hypselites scriptor ecclesiasticus", 
  {
   "Ep": "Epistulae ad Athanasium"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTICL.": [
  "Anticlides historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCH.": [
  "Scholia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPAT.": [
  "Sopater comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIB.": [
  "Libanius sophista", 
  {
   "Sch": "Scholia"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "T. SAL.": [
  "Testamentum Salomonis", 
  {
   "T. Sal. D": "Vita Salomonis (e codice D)"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. COM. B": [
  "Dionysius Comes B scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. COM. A": [
  "Dionysius Comes A scriptor ecclesiasticus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ET. PARU.": [
  "Etymologicum Paruum", 
  {}, 
  [
   "IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAXAG. COUS": [
  "Praxagoras Cous medicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLIOCH.": [
  "Poliochus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARM.": [
  "Parmenides poeta philosophus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACHAE.": [
  "Achaeus tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLEO GRAMMATICUS": [
  "Heracleo grammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DROMO COMICUS": [
  "Dromo comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDRIS. HIST.": [
  "Andriscus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. TROEZ.": [
  "Demetrius Troezenius poeta philosophus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSIB.": [
  "Sosibius historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GILDAS MONACHUS BRITANNUS": [
  "Gildas monachus Britannus", 
  {
   "Brit": "de excidio e conquestu Britanniae"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CANON.": [
  "Codex Canonum ecclesiasticorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COD. VIS.": [
  "Codex Visionum", 
  {
   "Pat": "ad patientes"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. VIND.": [
  "Lexicon Vindobonense", 
  {}, 
  [
   "XIV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOER.": [
  "Moeris grammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MATI.": [
  "Matidius, Tarsinus et alii scriptores ecclesiastici", 
  {
   "Ep": "Epistula ad Epiphanium"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOB. MON.": [
  "Iobius monachus", 
  {
   "Inc": "Quaestio quare filius incarnatus sit"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGAP. PAPA": [
  "Agapetus papa", 
  {
   "Ep. Syn": "Epistula Synodica"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHERSIAS EPICUS": [
  "Chersias epicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYG.": [
  "Hyginus fabularum scriptor latinus", 
  {
   "Fab": "Fabulae", 
   "Astr": "de astronomia"
  }, 
  [
   "I a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CELT": [
  "*Hermeneumata Graecolatina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. MIL. $2": [
  "Dionysius Milesius sophista", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRISCIAN.": [
  "Priscianus grammaticus", 
  {
   "Inst": "Institutio"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMODAMAS HISTORICUS": [
  "Demodamas historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AN. PAR.": [
  "Anecdota Graeca e cod. MSS. Bibl. Reg. Parisiensis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOBUL.": [
  "Cleobulus philosophus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOS.": [
  "Theosophorum Graecorum Fragmenta", 
  {
   "Tub": "Theosophia Tubingensis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESOP. HIST.": [
  "Aesopus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NOSTI POEMA EPICUM": [
  "Nosti poema epicum", 
  {}, 
  [
   "VII a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. DIACR.": [
  "Iohannes Diacrinomenus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HAGIAS": [
  "Hagias", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYRIAN.": [
  "Syrianus philosophus et rhetor", 
  {
   "in Metaph": "in Metaphysica commentaria", 
   "in Hermog": "in Hermogenem commentaria"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARC. ARG.": [
  "Marcus Argentarius epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHERECR.": [
  "Pherecrates comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERODES ATTICUS HISTORICUS": [
  "Herodes Atticus historicus", 
  {
   "Pol": "de republica"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIU. ANDR.": [
  "Liuius Andronicus epicus latinus", 
  {
   "Carm": "Carminum epicorum fragmenta"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. $2": [
  "Timotheus lyricus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRITIAS PHILOSOPHUS TRAGICUS ELEGIACUS": [
  "Critias philosophus tragicus elegiacus", 
  {
   "Fr. Trag": "Fragmenta tragica", 
   "Eleg": "Fragmenta elegiaca"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ICCUS PYTHAGORICUS": [
  "Iccus pythagoricus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THRASYLLUS ALEXANDRINUS ASTROLOGUS": [
  "Thrasyllus Alexandrinus astrologus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ADRIANUS HISTORICUS": [
  "Adrianus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDOX. COM.": [
  "Eudoxus comicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LOLL.": [
  "Lollius Bassus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRAGMENTUM HYMNI": [
  "Fragmentum Hymni", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIN.": [
  "Epinicus comicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. COM. NOU.": [
  "Demetrius comicus nouae comoediae", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPOTHOO TRAGICUS": [
  "Hippothoo tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARCELLUS ANCYRANUS": [
  "Marcellus Ancyranus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMOLAUS MACEDO POETA": [
  "Timolaus Macedo poeta", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BIAS PHILOSOPHUS": [
  "Bias Philosophus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. HIST.": [
  "Apollonius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEO MAG.": [
  "Leo I papa", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENEMACH.": [
  "Menemachus medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISYLL.": [
  "Isyllus lyricus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*ANONYMUS RHETOR": [
  "*Anonymus rhetor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLEM. HIST.": [
  "Polemo historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. PRISC.": [
  "Theodorus Priscianus (siue Pseudo Theodorus Priscianus) medicus", 
  {
   "Phys": "de Physicis"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANUB.": [
  "ELEGIACUS ET ASTROLOGUS", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAX. GRAMM.": [
  "Maximus grammaticus", 
  {
   "Aug. Epist": "Augustini epistulae"
  }, 
  [
   "a. IV/", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOSTR.": [
  "Philostratus sophista", 
  {
   "VA": "Vita Apollonii", 
   "Gym": "de gymnastica", 
   "Ep": "Epistulae", 
   "Her": "Heroicus"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHENIO COMICUS": [
  "Athenio comicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARIS. $2": [
  "Charisius iurisconsultus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. HIST.": [
  "Alexis Samius historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCENS. IS.": [
  "Ascensio Isaiae", 
  {
   "Ascens. Is. Leg": "Legenda graeca"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. ANTIMONTAN.": [
  "Anonymus Antimontanista", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERENN. PHIL.": [
  "Herennius Philo Byblius historicus et grammaticus", 
  {
   "Hist": "Fragmenta historica", 
   "Diff": "\ufffdEranii\ufffd de differentia significationis", 
   "Sign": "de diuersis uerborum significationibus"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELINNO LYRICA": [
  "Melinno lyrica", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRYS.": [
  "Chrysostomus, Iohannes scriptor ecclesiasticus et Pseudo Chrysostomus", 
  {
   "Serm. Gen": "Sermones in Genesim", 
   "Sest": "pro Sestio", 
   "Nat. Christ": "in natiuitatem Christi", 
   "Catech. Illum": "catecheses ad illuminandos", 
   "Res": "Homilia in resurrectionem Domini", 
   "Top": "Topica", 
   "Brut": "Brutus", 
   "in Eccl": "in Ecclesiasten", 
   "Laud. Thecl": "Fragmentum laudationis Theclae", 
   "Nat": "de natiuitate", 
   "Orat": "Orator", 
   "Fin": "de finibus", 
   "Laed": "quod nemo laeditur nisi a se ipso", 
   "Educ. Lib": "de educandis liberis", 
   "Verr": "in Verrem (actio prima, actio secunda)", 
   "Laud. Paul": "de laudibus Pauli", 
   "Arat": "Arati Phaenomena", 
   "Regr": "de regressu", 
   "Scand": "ad eos qui scandalizati sunt", 
   "Fam": "Epistulae familiares", 
   "Pan. Polyc": "Fragmenta ex panegyrico in Polycarpum", 
   "Tusc": "Tusculanae", 
   "Cael": "pro Caelio", 
   "Off": "de officiis", 
   "Hom. Ps": "Homiliae Pseudo-Chrysostomicae", 
   "Temp": "de temperantia", 
   "Epiph": "de epiphania", 
   "Phil": "Philippicae", 
   "Subintr": "contra eos qui subintroductas habent uirgines", 
   "Thom": "in sanctum Thomam et in oeconomiam domini nostri", 
   "Anom": "contra anomoeos", 
   "Att": "Epistulae ad Atticum", 
   "Fr. Ier": "Fragmentum in Ieremiam", 
   "Diu": "de diuinatione", 
   "Serm. Pasch": "Sermo in Pascha", 
   "Bapt. Tent": "in Baptismum et Tentationem", 
   "Transfig": "in transfigurationem", 
   "Acad": "Academici", 
   "in cat. Petr": "in catenas S. Petri", 
   "Vid": "ad uiduam iuniorem", 
   "Hom. Oz": "Homiliae", 
   "Sac": "de sacerdotio", 
   "Resp": "de respublica", 
   "Ordin": "Sermo cum presbyter fuit ordinatus", 
   "Rab. Post": "pro C. Rabirio Postumo", 
   "Is. interp": "Interpretatio in Isaiam", 
   "QF": "Epistulae ad Quintum fratrem", 
   "Poenit. can": "Canones poenitentiales", 
   "Virg": "de uirginitate", 
   "Thdr": "ad Theodorum lapsum libri", 
   "Incomprehens": "de incomprehensibili dei natura"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEL. CAES.": [
  "Gelasius Caesariensis scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SECUND.": [
  "Secundus philosophus", 
  {
   "Vit": "Vita secundi Philosophi"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOPH.": [
  "Xenophanes poeta philosophus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TZ.": [
  "Tzetzes, Iohannes grammaticus", 
  {
   "ad Lyc": "ad Lycophronem", 
   "ad. Hes. Op": "ad Hesiodi Opera et Dies", 
   "H": "Historiarum uariarum Chiliades", 
   "Alleg. Od": "Allegoriae Odyseae", 
   "Ex": "Exegesis in Homeri Iliadem", 
   "Alleg. Il": "Allegoriae Iliadis", 
   "PH": "Posthomerica", 
   "Ep": "Epistulae", 
   "Trag. Poes": "de tragica poesi"
  }, 
  [
   "XII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERATOSTH. AG.": [
  "Eratosthenes Agacleus historicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "BOEO EPICA UEL BOEUS EPICUS": [
  "Boeo epica uel Boeus epicus", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMIPS.": [
  "Amipsias comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HECAT. ABD.": [
  "Hecateus Abderita historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSSID.": [
  "Possidius episcopus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALL. $2": [
  "Callimachus poeta", 
  {
   "Sch": "Scholia"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. RAU.": [
  "Petrus Rauennensis scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Eutychen"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIO MYTILENAEUS TRAGICUS": [
  "Anaxio Mytilenaeus tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOTINUS ET ALII": [
  "Photinus et alii", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NECT.": [
  "Nectarius Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Thdr": "de festo Theodori"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLAUDIANUS EPIGRAMMATICUS": [
  "Claudianus epigrammaticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METROD. CHIUS": [
  "Metrodorus Chius philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELIT. FR. PAP.": [
  "Melitianorum uel Meletianorum Fragmenta Papyracea", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANASTASIUS TRAULUS EPIGRAMMATICUS": [
  "Anastasius Traulus epigrammaticus", 
  {}, 
  [
   "biz.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASSIAN.": [
  "Cassianus, Iohannes, abbas Massiliensis", 
  {
   "Conl": "Conlatio"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOX. LEUC.": [
  "Philoxenus Leucadius lyricus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARIGNOTE PHILOSOPHA PYTHAGORICA": [
  "Arignote philosopha pythagorica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THRASYL. HIST.": [
  "Thrasylus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GR. ANT.": [
  "Gregorius Antiochenus scriptor ecclesiasticus", 
  {
   "Mul. Ung": "in mulieres unguentiferas"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. BERYT.": [
  "Iohannes Berytensis scriptor ecclesiasticus", 
  {
   "Hom": "Homilia in resurrectionem salvatoris"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTARCH. TRAG.": [
  "Aristarchus tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOCL.": [
  "Aristocles philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. ARCHYT.": [
  "Pseudo Archytas philosophus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLIMORPHUS HISTORICUS": [
  "Callimorphus historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATH. SAM.": [
  "Agatho Samius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAL. GN.": [
  "Valentinus Gnosticus et discipuli", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENOPH. DAM.": [
  "Menophilus Damascenus epicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. EUERG.": [
  "Ptolemaeus Euergetes II historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDRONIC.": [
  "Andronicus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLITOPHO HISTORICUS": [
  "Clitopho historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ELIAS PHILOSOPHUS": [
  "Elias philosophus", 
  {
   "in APr": "Commentarium in Analytica Priora", 
   "in Porph": "in Porphyrii Isagogen commentarium"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ADAM. $2": [
  "Adamantius physiognomonicus", 
  {
   "Vent": "de uentis", 
   "Epit. Matr": "Epitomae Adamantianae codicis Matritensis"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LXX": [
  "Vetus Testamentum Graece redditum", 
  {
   "Ch": "Chronica", 
   "Thd": "Theodotio", 
   "Za": "Zacharias"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYCHRON.": [
  "Polychronius Apameensis scriptor ecclesiasticus", 
  {
   "Fr. Ezech": "Fragmenta in Ez", 
   "Fr. Dan": "Fragmenta in Da"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BAS. ANC.": [
  "Basilius Ancyranus scriptor ecclesiasticus", 
  {
   "Virg": "Liber de uera uirginitate"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. ESD.": [
  "Apocalypsis Esdrae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHEL. AEG.": [
  "Archelaus Aegyptius paradoxographus et epigrammaticus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BEM.": [
  "Bemarchius Caesareus historicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCHEM. DIAN.": [
  "Schemata dianoeae quae ad rhetores pertinent", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITAL.": [
  "Vitalis Apollinarista", 
  {
   "Fr": "Fragmentum de fide"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. I ALEX.": [
  "Timotheus I Alexandrinus scriptor ecclesiasticus", 
  {
   "Resp": "Responsiones canonicae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENIO HISTORICUS": [
  "Xenio historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPARCH.": [
  "Hipparchus astronomus", 
  {
   "Fr. Geog": "Fragmenta Geographica"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLB.": [
  "Polybius historicus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THGN.": [
  "Theognis elegiacus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISIG.": [
  "Isigonus paradoxographus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. BARBER.": [
  "Lexicon Synonymicum Barberinianum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ESAIAS ABBAS": [
  "Esaias abbas", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOT.": [
  "Theotimus historicus", 
  {
   "Cyr": "de Cyrene"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEMISO HIST.": [
  "Themiso historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RHEG.": [
  "Rheginus Constantiensis scriptor ecclesiasticus", 
  {
   "Serm": "Sermo Ephesi habitus"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SULP. MAX.": [
  "Sulpicius Maximus epicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. PHIL.": [
  "Ptolemaeus Philopator tragicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOCLES COMICUS": [
  "Philocles comicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMIAN.": [
  "Damianus opticus", 
  {
   "Opt": "Optica"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPHIPP. HIST.": [
  "Ephippus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTID. QUINT.": [
  "Aristides Quintilianus musicus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUG.": [
  "Augustinus episcopus Hipponensis", 
  {
   "Gen. ad Litt": "de Genesi ad litteram", 
   "Fr": "Fragmenta", 
   "Gest. Pelag": "de gestis Pelagii", 
   "Ciu": "de ciuitate dei", 
   "Serm": "Sermones", 
   "Haer": "de haeresibus ad Quoduultdeum", 
   "Ep": "Epistulae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. LOND.": [
  "Anonymus Londinensis", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDL.": [
  "Theodulus siue Theodorus Persa scriptor ecclesiasticus", 
  {
   "Fr": "Fragmentum", 
   "Id": "Fragmenta in Iudices"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMEL.": [
  "Amelius Apamensis philosophus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIN.": [
  "Dinarchus orator", 
  {
   "Fr. Inc": "Fragmenta incertae sedis"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. COM.": [
  "Apollodorus comicus (Carystius an Gelous incertum)", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHAED.": [
  "Phaedrus fabularum scriptor", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDT. ANC.": [
  "Theodotus Ancyranus scriptor ecclesiasticus", 
  {
   "Hom. SMV et Sym": "Homilia in SMV et Symeonem", 
   "Fr": "Fragmentum", 
   "Hom": "Homiliae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOTAD.": [
  "Sotades lyricus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEN. TACT.": [
  "Aeneas tacticus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLL.": [
  "Apollinaris Laodicenus scriptor ecclesiasticus", 
  {
   "Pr": "Fragmenta in Pr", 
   "Ep. Seb": "Epistula Sebastiani", 
   "Lc": "Fragmenta in Lucam", 
   "Met. Ps": "Metaphrases in Ps", 
   "Fr. Lam": "Fragmenta in Lamentationes", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Fr. Ep. Cath": "Fragmenta in epistulas Catholicas", 
   "Luc": "Fragmenta in Eu. Luc", 
   "Io": "Fragmenta in Eu. Io", 
   "Tom. Syn": "Tomus synodalis", 
   "Oct": "Fragmenta in Octateuchum et Reges", 
   "Rom": "Fragmenta in Ep. Rom"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*MARTYRIUM PANSOPHII": [
  "*Martyrium Pansophii", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOHANNES PHILOPONUS": [
  "Iohannes Philoponus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AN. MATR.": [
  "Anecdota Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DON.": [
  "Donatus, Tiberius Claudius", 
  {
   "Int. Verg": "Interpretationes Vergilianae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCETAS HISTORICUS": [
  "Alcetas historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. LECT.": [
  "Theodorus Lector scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEAGENES RHEGINUS PHILOSOPHUS": [
  "Theagenes Rheginus philosophus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GALLICAN.": [
  "Gallicanus, Vulcacius historicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NECH.": [
  "Nechepso astrologus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYSIM.": [
  "Lysimachus historicus", 
  {
   "Aegypt": "Aegyptiaca"
  }, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "RES GESTAE SAPORIS": [
  "Res gestae diui Saporis", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BENEDICTUS ABBAS": [
  "Benedictus abbas", 
  {
   "Reg": "Regula"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IREN. HARP.": [
  "Irenaeus Harpasianus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALL. SUED.": [
  "Palladius Suedrenus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESCHIN. $2": [
  "Aeschines orator", 
  {
   "Ep": "Epistulae", 
   "Sch": "Scholia"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. EPIGR.": [
  "Iulianus epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEGASTH.": [
  "Megasthenes historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATIN. IUN.": [
  "Cratinus Iunior comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASINIUS QUADRATUS": [
  "ASINIUS QUADRATUS HISTORICUS", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYBIUS GRAMMATICUS": [
  "Polybius grammaticus", 
  {}, 
  [
   "IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. MAG.": [
  "Antipater Magnesius historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GR. NYSS.": [
  "Gregorius Nyssenus scriptor ecclesiasticus", 
  {
   "Ep. Can": "Epistula canonica ad Letoium", 
   "Diff. Ess": "de differentia essentiae et hypostaseos", 
   "Xen": "Tractatus ad Xenodorum", 
   "Hom. Opif": "de opificio hominis", 
   "Inu. Imag": "Inuentio imaginis in Camulianis", 
   "Virg": "de uirginitate", 
   "Annunt": "in annuntiationem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRONICUM ROMANUM": [
  "Chronicum Romanum", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTAXERXES REX PERSARUM EPISTOLOGRAPHUS": [
  "Artaxerxes rex Persarum epistolographus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. GRAM.": [
  "Pompeius grammaticus latinus", 
  {}, 
  [
   "a. VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOPHO COMICUS": [
  "Aristopho comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLOT.": [
  "Plotinus philosophus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENODOT. PERINTH.": [
  "Menodotus Perinthius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COLUM.": [
  "Columella, L. Iunius scriptor rei rusticae latinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGEMON.": [
  "Hegemonius scriptor ecclesiasticus", 
  {
   "Arch": "Acta Archelai"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMIPP. BERYT.": [
  "Hermippus Berytensis historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHILO PHILOSOPHUS": [
  "Chilo philosophus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYP.": [
  "Hyperides orator", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMIAN.": [
  "Ammianus epigrammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. CYZ.": [
  "Dionysius Cyzicenus epigrammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOCL. COM.": [
  "Diocles comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAL. APOLL.": [
  "Valentinus Apollinarista", 
  {
   "Apol": "Capita Apologiae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIMAND.": [
  "Anaximander philosophus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERO MECHANICUS": [
  "Hero mechanicus", 
  {
   "Lib. Geep": "Liber geeponicus", 
   "Fr": "Fragmenta", 
   "Cheir": "Cheiroballistra", 
   "Tab. H": "Tabulae Heronianae"
  }, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IS.": [
  "Isaeus orator", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. AR.": [
  "Iulianus Arianus scriptor ecclesiasticus", 
  {}, 
  [
   "IV d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOPHAN.": [
  "Diophanes epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEPH. ASTR.": [
  "Hephaestio astrologus", 
  {
   "Epit": "Epitomae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIM. HOM.": [
  "Epimerismi Homerici", 
  {
   "Alph": "Epimerismi ordine alphabetico traditi", 
   "Il": "Epimerismi ad Iliadis librum A pertinentes"
  }, 
  [
   "VI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "A\u00cbTHLIUS HISTORICUS": [
  "A\u00ebthlius historicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOX. GRAMM.": [
  "Philoxenus grammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTODEM. EL.": [
  "Aristodemus Eleus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEUTHES ASTROLOGUS": [
  "Seuthes astrologus", 
  {}, 
  [
   "a. II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACL.": [
  "Heraclas medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZON.": [
  "Diodorus Zonas rhetor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERIPLUS MARIS MAGNI": [
  "Periplus Maris Magni", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HESIANAX HISTORICUS": [
  "Hesianax historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIPH.": [
  "Diphilus comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCESIL. $2": [
  "Arcesilaus philosophus", 
  {
   "Fr": "Fragmenta", 
   "Ep": "Epistula"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUC. MEG.": [
  "Euclides Megareus philosophus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. PHAL.": [
  "Demetrius Phalereus historicus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYR. ELEG. ADESP.": [
  "Lyrica elegiaca adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLEM.": [
  "Polemo epigrammaticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "IREN. LUGD.": [
  "Irenaeus Lugdunensis", 
  {
   "Fr": "Fragmenta deperditorum operum", 
   "Fr. Jena": "Fragmentum libri 5 in PJena seruatum", 
   "Ep. Vict": "Epistula ad Victorem"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYMB.": [
  "Symbola", 
  {
   "Caes": "Symbolum Caesariense", 
   "Rom": "Symbolum Romanum", 
   "Nic. CP": "Symbolum Nicaenum Constantinopolitanum", 
   "Sirm": "anath", 
   "Hier": "Symbolum Hierosolymitanum", 
   "Sel": "Symbolum synodi Seleucensis anno"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. EBION.": [
  "Euangelium Ebionitum", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTUS SAL.": [
  "Aristus Salaminius", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS (ANON. )": [
  "Anonymus (Anon. )", 
  {
   "Decl. Par": "declamatio Paridis ad Senatum Troianum"
  }, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAMERC.": [
  "Mamercus elegiacus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAURADAS EPIGRAMMATICUS": [
  "Gauradas epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMONIDES HISTORICUS": [
  "Timonides historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCLERIAS TRAGICUS": [
  "Sclerias tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYLU. P.": [
  "Syluester I papa", 
  {
   "Fr": "Fragmentum operis contra Iudaeos"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANECD. PLANT.": [
  "Anecdota Plantarum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG. BAB. STOIC.": [
  "Diogenes Babylonius stoicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL.": [
  "Ptolemaeus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENOD. HIST.": [
  "Zenodotus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROCH.": [
  "Prochorus Diaconus scriptor ecclesiasticus", 
  {
   "A. Io": "Acta Iohannis"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCIB.": [
  "Alcibiades lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEO GYMN.": [
  "Theo Gymnasiarcha medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CAES.": [
  "Pseudo Caesarius scriptor ecclesiasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIL.": [
  "Anaxilas comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILAGR.": [
  "Philagrius medicus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUARETUS TRAGICUS": [
  "Euaretus tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. $3": [
  "Ptolemaeus mathematicus", 
  {
   "Harm": "Harmonica", 
   "Mus": "Musica", 
   "Tetr": "Tetrabiblos", 
   "Iudic": "de iudicio", 
   "Pseph": "Psephophoria", 
   "Geog": "Geographia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. TRAG.": [
  "Apollodorus tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDR.": [
  "Theodorus Heracleensis uel Theodorus Mopsuestenus", 
  {
   "Mt": "Fragmenta in Eu. Matt"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLIT. $2": [
  "Heraclitus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLIT. $3": [
  "Heraclitus philosophus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIEUCH.": [
  "Dieuches medicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRISCILLIANUS EPISCOPUS HISPANUS": [
  "Priscillianus episcopus hispanus", 
  {
   "Tract": "Tractatus"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. INT.": [
  "Glossematum interpretes grammatici", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HSCH. MIL.": [
  "Hesychius Milesius historicus et biographus", 
  {
   "V. Arist": "Vita Aristotelis"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIADES MEGAREUS LYRICUS": [
  "Philiades Megareus lyricus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOBUL.": [
  "Aristobulus Cassandreus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAN. HIST.": [
  "Manetho historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOTOG.": [
  "Diotogenes philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIPP. COM.": [
  "Hegesippus comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HECAT.": [
  "Hecataeus Milesius historicus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENELAUS AEGAEUS EPICUS": [
  "Menelaus Aegaeus epicus", 
  {}, 
  [
   "d. III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANNICERIS CYRENAICUS PHILOSOPHUS": [
  "Anniceris Cyrenaicus philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CTESIPHO HISTORICUS": [
  "Ctesipho historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDT. ANT.": [
  "Theodotus Antiochenus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUIEN.": [
  "Auienus, R. Festus poeta latinus", 
  {
   "Orb": "Orbis terrae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLUS PHILOSOPHUS": [
  "Polus philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTARCH. EL.": [
  "Aristarchus Eleus historicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HECAT. THAS.": [
  "Hecataeus Thasius epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILTEAS HISTORICUS": [
  "Philteas historicus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIT. LAUR.": [
  "Epitome Synonymica Laurentiana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IAMBULUS HISTORICUS": [
  "Iambulus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOSC. GLOSS.": [
  "Dioscorides glossator", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIG. HIST.": [
  "Antigonus historicus", 
  {
   "Mac": "Macedoniae descriptio"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEO. LAOD.": [
  "Georgius Laodicenus scriptor ecclesiasticus", 
  {
   "Ep. Maced": "Epistula ad Macedonium", 
   "Ep. Dogm": "Epistula dogmatica"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPIATR.": [
  "Hippiatrica", 
  {
   "Hippiatr. Paris": "Hippiatrica Parisina"
  }, 
  [
   "X d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUL. EM.": [
  "Paulus Emesenus scriptor ecclesiasticus", 
  {
   "Hom": "Homiliae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYSIS PHILOSOPHUS": [
  "Lysis philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MUSON.": [
  "Musonius Rufus philosophus", 
  {
   "Fr": "Fragmentum", 
   "Ep": "Epistulae spuriae"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODORID. TRAG.": [
  "Theodorides tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FORTUNAT. $2": [
  "Fortunatianus, Atilius grammaticus latinus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THRASYBULUS EPISTOLOGRAPHUS": [
  "Thrasybulus epistolographus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROMATHIO HISTORICUS": [
  "Promathio historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUST.": [
  "Iustinianus imperator", 
  {
   "Nou": "Nouellae"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLL. $2": [
  "Pollux grammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELIOD.": [
  "Heliodorus medicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VEG.": [
  "Vegetius ueterinarius", 
  {
   "Mul": "Mulomedicina"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYRUS, FLAUIUS EPIGRAMMATICUS": [
  "Cyrus, Flauius epigrammaticus", 
  {
   "Ind": "Indica"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. LYR.": [
  "Apollodorus lyricus", 
  {}, 
  [
   "VI a. C?", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAC. AL.": [
  "Macarius Alexandrinus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Serm": "Sermo de animae exitu", 
   "Apocr": "Apocriticus ad Graecos"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON.": [
  "Apollonius biographus", 
  {
   "Vit. Aeschin": "Vita Aeschinis"
  }, 
  [
   "a. 200 d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHENAEUS GEOGRAPHUS": [
  "Athenaeus geographus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOT. ATHEN.": [
  "Diotimus Atheniensis epigrammaticus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELISSEUS HISTORICUS": [
  "Melisseus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYMM. PAPA": [
  "Symmachus papa", 
  {
   "Ep": "fragmentum epistulae contra Petrum Fullonem"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACH. TAT.": [
  "Achilles Tatius astronomus (Ach. Tat. )", 
  {
   "Vit. Arat": "de Arati uita"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPHR. ALEX.": [
  "Sophronius Alexandrinus scriptor ecclesiasticus", 
  {
   "Libell": "Libellus contra Dioscurum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "INTERR. TERTULL.": [
  "Interrogatio Tertulli", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUMACHUS HISTORICUS": [
  "Eumachus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM. HIST.": [
  "Hermias historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. LAG.": [
  "Ptolemaeus Lagus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HLD. GR.": [
  "Heliodorus grammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODORETUS EPIGRAMMATICUS": [
  "Theodoretus epigrammaticus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHARCH.": [
  "Agatharchides geographus", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASIUS EPICUS ET LYRICUS": [
  "Asius epicus et lyricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PISAND. MYTH.": [
  "Pisander mythographus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGEMO EPIGRAMMATICUS": [
  "Hegemo epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDRO ALEX.": [
  "Andro Alexandrinus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CORP. HERM.": [
  "Corpus Hermeticum", 
  {
   "Fr. Min": "Fragmenta Minora", 
   "Fr. Vind": "Fragmenta Vindobonensia", 
   "Fr. Ox": "Fragmenta Oxoniensia", 
   "ad Amm": "ad Ammonem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEDYLE EPIGRAMMATICA": [
  "Hedyle epigrammatica", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEON. ALEX.": [
  "Leonidas Alexandrinus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESCHRIO PERG.": [
  "Aeschrio Pergamenus medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACILIUS HISTORICUS": [
  "Acilius historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HESTIAEUS HISTORICUS": [
  "Hestiaeus historicus", 
  {}, 
  [
   "a. I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOROASTRES MAGUS": [
  "Zoroastres magus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOCALYPSIS ESDRAE QUARTA": [
  "Apocalypsis Esdrae quarta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. CAR.": [
  "Apollodorus Carystius comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGETOR MEDICUS": [
  "Hegetor medicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRUD.": [
  "Prudentius Clemens, Aurelius poeta hispanus", 
  {
   "Psych": "Psychomachia"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUAGR. SCHOL.": [
  "Euagrius Scholasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMOCH.": [
  "Damocharis epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAERIS GRAMMATICUS": [
  "Chaeris grammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSIDIPP. HIST.": [
  "Posidippus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. BOT. GR.": [
  "Glossaria Botanica Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NAUTARUM CANTIUNCULA": [
  "Nautarum cantiuncula", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PISISTRATUS EPISTOLOGRAPHUS": [
  "Pisistratus epistolographus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACESTORIDES HISTORICUS": [
  "Acestorides historicus", 
  {}, 
  [
   "d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOSTRATUS EPICUS": [
  "Cleostratus epicus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHOERIL. TRAG.": [
  "Choerilus tragicus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICARCHUS EPIGRAMMATICUS UETUS": [
  "Nicarchus epigrammaticus uetus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. SOTAD.": [
  "Pseudo Sotades lyricus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLEMAEUS EPHESIUS TRAGICUS": [
  "Polemaeus Ephesius tragicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERAPIO ASTROLOGUS": [
  "Serapio astrologus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYCEAS NAUC.": [
  "Lyceas Naucratites historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPHIL. $3": [
  "Pamphilus Siculus iambographus", 
  {}, 
  [
   "a. IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COLOT.": [
  "Colotes epicureus", 
  {
   "in Ly": "in Lysin Platonis"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACAC. MEL.": [
  "Acacius Melitenus", 
  {
   "Hom": "Homilia Ephesina"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORPH. PAR.": [
  "Orpheus paradoxographus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "B. ALEX.": [
  "Bello Alexandrino, Liber de", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. IX.": [
  "Demetrius Ixio grammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIOCH. ASTR.": [
  "Antiochus Atheniensis astrologus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ONESTES": [
  "Onestes", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELISS.": [
  "Melissus philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEO I IMP.": [
  "Leo I imperator", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOCRATES HISTORICUS": [
  "Nicocrates historicus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUPHANTUS HISTORICUS": [
  "Euphantus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. HAL.": [
  "Iulianus Halicarnassensis scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCAMEN.": [
  "Alcamenes Abydenus medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDROM.": [
  "Andromachus poeta medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETRON.": [
  "Petronius Arbiter scriptor latinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEROPIS POEMA EPICUM": [
  "Meropis poema epicum", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALL. HIST.": [
  "Callias historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLAUDIAN.": [
  "Claudianus Alexandrinus, Claudius", 
  {
   "Gig": "Gigantomachia"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALL.": [
  "Palladas epigrammaticus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYRAN.": [
  "Cyranides", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEANO PYTHAGORICA": [
  "Theano pythagorica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMAG.": [
  "Hermagoras Temnites rhetor", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EP. ABGAR.": [
  "Epistula Abgari cum Christi responso", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHEM.": [
  "Agathemerus geographus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HADR. MON.": [
  "Hadrianus Antiochenus monachus", 
  {
   "Introd": "Introductio in sacras scripturas"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. CIT.": [
  "Apollonius Citiensis medicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUS. HIST.": [
  "Eusebius historicus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIBUL.": [
  "Tibullus poeta latinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHO TRAGICUS": [
  "Agatho tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLISTR. LYR.": [
  "Callistratus lyricus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MACHO COMICUS": [
  "Macho comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMOCHARES HISTORICUS": [
  "Timochares historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYSIMACHID.": [
  "Lysimachides historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOERO EPICA": [
  "Moero epica", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACL. MIL.": [
  "Heraclides Milesius grammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOMACHUS EPIGRAMMATICUS": [
  "Nicomachus epigrammaticus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. TERR. MOT.": [
  "Anonymi de terrae motibus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAETUS MEDICUS": [
  "Paetus medicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETOS.": [
  "Petosiris astrologus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELISSA PYTHAGORICA": [
  "Melissa pythagorica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHAEN.": [
  "Pythaenetus historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SILEN. CEIUS": [
  "Silenus Ceius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARM. DE POND.": [
  "Carmen de ponderibus et mensuris", 
  {}, 
  [
   "III/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPHIL. $2": [
  "Pamphilus medicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEAET.": [
  "Theaetetus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IL.": [
  "Ilias", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDR. PETR.": [
  "Theodorus Petranus scriptor ecclesiasticus", 
  {
   "V. Thds": "Vita Theodosii"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLIDES CRETICUS": [
  "Heraclides Creticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMOCRIT.": [
  "Damocritus historicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "EURYTUS MEL.": [
  "Eurytus Lacedaemonius melicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOCR. ARG.": [
  "Socrates Argiuus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANT. PTOL.": [
  "Antiochus Ptolemaeus scriptor ecclesiasticus", 
  {
   "Natiu": "Homilia de natiuitate", 
   "Fr": "Fragmenta"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. MOS.": [
  "Apocalypsis Mosis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "A. IO. BAPT.": [
  "Acta Iohannis Baptistae", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MULOMEDICINA CHIRONIS": [
  "Mulomedicina Chironis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HANNO GEOGRAPHUS": [
  "Hanno geographus", 
  {
   "Peripl": "Periplus"
  }, 
  [
   "V a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "MYIA PYTHAGORICA": [
  "Myia pythagorica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ENN.": [
  "Ennius poeta latinus", 
  {
   "Var": "Varia", 
   "Trag": "Tragoedia"
  }, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETRO PYTHAGORICUS": [
  "Petro pythagoricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRIT. HIST.": [
  "Crito medicus et historicus", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TYMN.": [
  "Tymnes epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYSIUS ANDRIUS EPIGRAMMATICUS": [
  "Dionysius Andrius epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SANNYR.": [
  "Sannyrio comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*VITA SANCTI MARCELLI": [
  "*Vita sancti Marcelli", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. ACANTH.": [
  "Antipater Acanthius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. ARTEM.": [
  "Apollodorus Artemita historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHIPP.": [
  "Archippus comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MATRES THEBANUS HISTORICUS": [
  "Matres Thebanus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEROD.": [
  "Herodas mimographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAEM.": [
  "Caemaro historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTISTH. HIST.": [
  "Antisthenes historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTAPANUS HISTORICUS": [
  "Artapanus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILISTIO LOCRIUS MEDICUS": [
  "Philistio Locrius medicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "I.": [
  "Iosephus historicus", 
  {
   "Vit": "Vita"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MIMN.": [
  "Mimnermus lyricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. PETR.": [
  "Apocalypsis Petri", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OSTANES MAGUS": [
  "Ostanes magus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APHAR.": [
  "Aphareus tragicus", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. ANTIMONTAN.": [
  "Apollonius Antimontanista scriptor ecclesiasticus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EP. BARN.": [
  "Barnabae epistula", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHIN.": [
  "Archinus historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMAD.": [
  "Demades orator", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOPHO TRAGICUS": [
  "Iopho tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENNIPUS COMICUS": [
  "Mennipus comicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAT. LAOD.": [
  "Anatolius Laodicenus scriptor ecclesiasticus", 
  {
   "Decad": "de decade", 
   "Can. Pasch": "Fragmentum ex canone paschali"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO": [
  "Io Chius poeta et historicus", 
  {
   "Hist": "Fragmenta historica", 
   "Trag": "Fragmenta tragica", 
   "Phil": "Fragmenta philosophica", 
   "Lyr": "Fragmenta lyrica", 
   "Eleg": "Fragmenta elegiaca"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROTAGORID.": [
  "Protagorides historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASS. MED.": [
  "Cassius medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XUTHOS PHILOSOPHUS": [
  "Xuthos philosophus", 
  {}, 
  [
   "a. Arist.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEMEROLOG. FLOR.": [
  "Hemerologium Florentinum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LONGIN.": [
  "Longinus rhetor", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEORGIUS": [
  "Georgius grammaticus", 
  {
   "Anacr": "Anacreontea"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEDYL.": [
  "Hedylus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAEAN.": [
  "Paeanius Eutropii interpres", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASSIOD.": [
  "Cassiodorus scriptor ecclesiasticus", 
  {
   "Ort": "de orthographia", 
   "C. Ap": "Flauii Iosephi contra Apionem", 
   "Hist": "Historia Tripertita", 
   "in Psalm": "Expositio in Ps", 
   "Var": "Variae", 
   "Inst. Diu": "de institutione diuinarum litterarum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHERMUS HISTORICUS": [
  "Pythermus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. INED. VAT.": [
  "Anonymus ineditus Vaticanus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERODOR.": [
  "Herodorus historicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAPITO HISTORICUS": [
  "Capito historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. SCHOLAST.": [
  "Iohannes Scholasticus scriptor ecclesiasticus", 
  {
   "Suppl": "Supplementum 22 capitulorum", 
   "Nomoc": "Collectio canonum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PANAET.": [
  "Panaetius Rhodius philosophus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOPYR.": [
  "Zopyrus medicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILETAER.": [
  "Philetaerus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENO TARS. STOIC.": [
  "Zeno Tarsensis stoicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALYP.": [
  "Alypius musicus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHALAR.": [
  "Phalaris epistolographus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHIDALIUS HISTORICUS": [
  "Phidalius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DINO HISTORICUS": [
  "Dino historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUL. AL.": [
  "Paulus Alexandrinus astrologus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRON. ALEX.": [
  "Chronicum Alexandrinum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOCREO EPIGRAMMATICUS": [
  "Aristocreo epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ENOMIDES HISTORICUS": [
  "Enomides historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ROM. MEL.": [
  "Romanus Melodus scriptor ecclesiasticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DSC.": [
  "Dioscorides uel Dioscurides medicus", 
  {
   "Eup": "Euporista (= de simplicibus medicinis)", 
   "Ther": "Theriaca"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATES THEB.": [
  "Crates Thebanus poeta et philosophus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXC. CAS.": [
  "Excerptum Casanatense", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAL.": [
  "Chalcidius grammaticus", 
  {
   "Comm": "Commentarius in Platonis Timaeum"
  }, 
  [
   "II/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LESB. GRAMM.": [
  "Lesbonax grammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOGENIAN. EPICUR.": [
  "Diogenianus epicureus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLINARIUS ASTROLOGUS": [
  "Apollinarius astrologus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ST. BYZ.": [
  "Stephanus Byzantius lexicographus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMO ASTROLOGUS": [
  "Ammo astrologus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUSTRAT.": [
  "Eustratius Constantinopolitanus scriptor ecclesiasticus", 
  {
   "V. Eutych": "Vita Eutychii"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GEL. PA.": [
  "Gelasius I papa", 
  {
   "Ep": "Epistula ad episcopos Syrios"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "A\u00cbT. $2": [
  "A\u00ebtius Antiochenus", 
  {
   "Fr": "Fragmenta", 
   "Synt": "Syntagmation"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EXC. BAROCC.": [
  "Excerpta Barocciana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LOGIA IESU": [
  "Logia Iesu", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VEN. FORT.": [
  "Venantius Fortunatus episcopus", 
  {
   "V. Rad": "Vita S. Radegundae"
  }, 
  [
   "VI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARC. ATH.": [
  "Carcinus Atheniensis tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACAC. ET PAUL.": [
  "Acacius et Paulus scriptores ecclesiastici", 
  {
   "Ep": "Epistula ad Epiphanium"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. C. C.": [
  "Pseudo Caecilius rhetor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAP. NAUT.": [
  "Lapidarium Nauticum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLID. CUM.": [
  "Heraclides Cumaeus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMON. HIST.": [
  "Ammonius historicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIEROCL. $3": [
  "Hierocles Stoicus philosophus", 
  {
   "Fr": "Fragmenta (apud Suidam)"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAR.": [
  "Paradoxographi Anonymi", 
  {
   "Par. Vat": "Paradoxographus Vaticanus"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SISYPHUS HISTORICUS": [
  "Sisyphus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. PHIL.": [
  "Anonymus Philosophus historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOILUS HISTORICUS": [
  "Zoilus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUL. EL.": [
  "Paulus Eleusensis scriptor ecclesiasticus", 
  {
   "V. Thgn": "Vita Theognii"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLID. LEMB.": [
  "Heraclides Lembus historicus", 
  {
   "Epit": "Epitome Hermippi"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAPITOL.": [
  "Capitolinus, Iulius historicus", 
  {
   "Ver": "Verus"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOSTR. HIST.": [
  "Philostratus Atheniensis historicus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALAN.": [
  "Calanus epistolographus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAEANDRIUS HISTORICUS": [
  "Maeandrius historicus", 
  {}, 
  [
   "a. Call.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHOR.": [
  "Choricius rhetor", 
  {
   "Or": "Orationes"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOU.": [
  "Iouianus imperator", 
  {
   "Ep": "Epistula ad Athanasium Alexandrinum"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPARCHIDES HISTORICUS": [
  "Eparchides historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. STOIC.": [
  "Dionysius Heracleota stoicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. THESS.": [
  "Alexander Thessalonicensis scriptor ecclesiasticus", 
  {
   "Ep. Dion": "Epistula ad Dionysium comitem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYPHRAS.": [
  "Polyphrasmo tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIPP. MACED.": [
  "Philippus Macedoniae Rex epistolographus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIPH. IUN.": [
  "Antiphanes Iunior historicus", 
  {
   "Fr": "Fragmenta historica"
  }, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STRATT.": [
  "Strattis comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRYSOGONUS COMICUS": [
  "Chrysogonus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOPATRA MEDICA": [
  "Cleopatra medica", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYMN. EPID.": [
  "Hymni Epidauri", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDOC.": [
  "Eudocia Augusta epica", 
  {
   "Pr. Hom. = Proemium in Homerocentones": "Pr. Hom. = Proemium in Homerocentones", 
   "Epigr": "Epigramma", 
   "Cypr": "Carmen de Cypriano"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEGETHIUS": [
  "Megethius rhetor", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCIMUS": [
  "Alcimus Siceliota historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLAC.": [
  "Placitus Sextus medicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SELEUC. LYR.": [
  "Seleucus lyricus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENO IMP.": [
  "Zeno imperator", 
  {
   "Henot": "Fragmentum edicti \ufffdhenoticon\ufffd dicti"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYRILL.": [
  "Cyrillus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOSITH.": [
  "Dositheus grammaticus latinus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGLAOSTHENES HISTORICUS": [
  "Aglaosthenes historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMER.": [
  "Amerias grammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. MIL.": [
  "Anonymus Milesius historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORPHEUS": [
  "Orpheus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TERT.": [
  "Tertullianus, Q. S. F.  scriptor christianus", 
  {
   "Praescr": "de praescriptione haereticorum"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTISTH. PAPH.": [
  "Antisthenes Paphius epigrammaticus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR.": [
  "Demetrius astrologus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS VATICANUS": [
  "Anonymus Vaticanus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLONID.": [
  "Apollonides epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AP": [
  "Anthologia Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAR. VICT.": [
  "Marius Victorinus grammaticus latinus", 
  {
   "Rh": "Explanationes in rhetoricam M. Tulli Ciceronis"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*GLOSSARIUM IN PAULI EPISTULAS": [
  "*Glossarium in Pauli epistulas", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS TACTICUS (ANON. )": [
  "Anonymus tacticus (Anon. )", 
  {
   "Strat": "de re strategica"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIMENID.": [
  "Epimenides philosophus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIAN.": [
  "Hegesianax epicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ENOCH IUDAEUS": [
  "Enoch Iudaeus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTHAL.": [
  "Euthalius diaconus", 
  {
   "Epp. Cath": "Editio epistularum catholicarum"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PSALMUS NAASSENUS": [
  "Psalmus Naassenus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOMNEST.": [
  "Philomnestus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. I AL.": [
  "Petrus I Alexandrinus scriptor ecclesiasticus", 
  {
   "Ep. Can": "Epistula canonica", 
   "Ep. Fest": "Epistula Festalis", 
   "Pasch": "Fragmentum de Paschate", 
   "D": "Fragmenta de deitate", 
   "Fr": "Fragmenta", 
   "An": "Fragmentum de anima", 
   "Ep. Cler": "Epistula ad clericos suos"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AN. BACHM.": [
  "Anecdota Graeca e cod. MSS. Bibl. Reg. Parisin.", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUU.": [
  "Iuuenalis, D. Iunius poeta latinus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUL. SAM.": [
  "Paulus Samosatenus scriptor ecclesiasticus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIYLL.": [
  "Diyllus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "T. RUFIN.": [
  "Turranius uel Tyrannius Rufinus Aquileensis presbyter", 
  {
   "Ad": "Adamantii libri contra haereticos a Rufino translati"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOC.": [
  "Theocritus poeta bucolicus", 
  {
   "Syr": "Syrinx", 
   "Adon": "ad Adonidem mortuum", 
   "Sch": "Scholia"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DYNAMID.": [
  "Dynamidia", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOCL.": [
  "Diocles medicus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PANCRAT.": [
  "Pancrates epicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORIO LEXICOGRAPHUS": [
  "Orio lexicographus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "T. ABR.": [
  "Testamentum Abrahae", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EURYT.": [
  "Eurytus uel Eurysus pythagoricus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARSYAS PELLAEUS ET PHILIPPEUS HISTORICI": [
  "Marsyas Pellaeus et Philippeus historici", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUBA REX MAURETANIAE HISTORICUS": [
  "Iuba rex Mauretaniae historicus", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "THAL.": [
  "Thales philosophus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALL. COM.": [
  "Callias comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOM. COM.": [
  "Nicomachus comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. PS. EUP.": [
  "Anonymus (Pseudo Eupolemus) historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DORIEUS EPIGRAMMATICUS": [
  "Dorieus epigrammaticus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTO PELL.": [
  "Aristo Pellaeus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMIOPRATA": [
  "Demioprata", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISID. $2": [
  "Isidorus Scholasticus epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOPHO COMICUS": [
  "Nicopho comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONO HISTORICUS": [
  "Cono historicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMAPIO HISTORICUS": [
  "Hermapio historicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OD.": [
  "Odyssea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHESTR.": [
  "Archestratus epicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS SCRIPTOR ECCLESIASTICUS (ANON. )": [
  "Anonymus scriptor ecclesiasticus (Anon. )", 
  {
   "in Ps": "homilia in Psalmos"
  }, 
  [
   "III d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIPH. CONSTANT.": [
  "Epiphanius Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Sent": "Sententiae contra Seuerum et Patrum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. SAM.": [
  "Dionysius Samius historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOM. CLEM.": [
  "Homilia Clementinae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. APUL.": [
  "Pseudo Apuleius medicus", 
  {
   "Ascl": "Asclepius", 
   "Herb": "Liber herbarius"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRYSERMUS HISTORICUS": [
  "Chrysermus historicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOCRITUS HISTORICUS": [
  "Aristocritus historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLITOM.": [
  "Clitomachus philosophus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMONAX": [
  "Hermonax", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ABYD.": [
  "Abydenus historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANECD. ERM.": [
  "Anecdota Medica Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEANDR(I)US HISTORICUS": [
  "Leandr(i)us historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELIOD. $3": [
  "Heliodorus Atheniensis poeta", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELIOD. $2": [
  "Heliodorus philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOCRATES PHILOSOPHUS": [
  "Xenocrates philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSIDONIUS HISTORICUS": [
  "Posidonius historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOT.": [
  "Sotio biographus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOM. $2": [
  "Nicomachus Gerasenus mathematicus", 
  {
   "Harm": "Harmonicum enchiridion", 
   "Ar": "Arithmetica introductio"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAT.": [
  "Catenae", 
  {
   "Cat. Ps": "Pal", 
   "Cat. Eccl. Haun": "catena Hauniensis in Ecclesiasten", 
   "Cat. Gen": "catenae in Genesim", 
   "Cat. Gen. Sin": "Ex. Sin", 
   "Cat. Ex. Coisl": "catenae in Exodum (collecio Coisliniana)", 
   "Cat. Ib": "catenae in Iob"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DURIS EPIGRAMMATICUS": [
  "Duris epigrammaticus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAMYN. LYR.": [
  "Lamynthius lyricus", 
  {}, 
  [
   "V a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAX.": [
  "Maximus astrologus", 
  {
   "Epit": "Epitome"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALPH.": [
  "Alpheus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTARCH.": [
  "Aristarchus grammaticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIERONYM. HIST.": [
  "Hieronymus Cardianus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOCRATES EPIGRAMMATICUS": [
  "Xenocrates epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRITO PHILOSOPHUS": [
  "Crito philosophus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. DE SPIR.": [
  "Lexicon de Spiritibus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOST.": [
  "Philostorgius scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MYRTIL.": [
  "Myrtilus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AQUILA ROMANUS RHETOR": [
  "Aquila Romanus rhetor", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ECPHANTID.": [
  "Ecphantides comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERAP.": [
  "Serapio Thmuitanus scriptor ecclesiasticus", 
  {
   "Euch": "Euchologium", 
   "Oct": "Fragmenta in Octateuchum", 
   "Ep. Mon": "Epistula ad Monachos", 
   "Man": "aduersus Manichaeos"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYMN. MAG.": [
  "Hymni Magici", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. NIC.": [
  "Asclepiades Nicaeus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. TUR.": [
  "Gregorius Turonensis", 
  {
   "Iul": "de uirtutibus Iuliani"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SALL.": [
  "Sallustius, Gaius historicus latinus", 
  {
   "Iug": "de bello Iugurthino"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CREOPHYLUS HISTORICUS": [
  "Creophylus historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. MONG.": [
  "Petrus Mongus scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LONGIN. $2": [
  "Longinus, Cassius rhetor et philosophus", 
  {
   "Rh": "Ars rhetorica", 
   "Prol. Heph": "Prolegomena ad Hephaestionis Enchiridion"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. PERG.": [
  "Apollodorus Pergamenus rhetor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PANCRAT. $2": [
  "Pancrates epigrammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGACLYT.": [
  "Agaclytus historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. HIST.": [
  "Anonymi Historici", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAERIO COMICUS": [
  "Chaerio comicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CENS.": [
  "Censorinus grammaticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAEREMO EPIGRAMMATICUS": [
  "Chaeremo epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDR. SCYTH.": [
  "Theodorus Scythopolitanus scriptor ecclesiasticus", 
  {
   "Libell": "Libellus de erroribus Origenianis"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTODEM. ALEX.": [
  "Aristodemus Alexandrinus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILISC. COM.": [
  "Philiscus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERAPIO UEL SARAPIO POETA MEDICUS TRAGICUS": [
  "Serapio uel Sarapio poeta medicus tragicus", 
  {
   "Off. Med": "carmen de officiis medici moralibus", 
   "Fr": "Fragmentum tragicum"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ECHEMENES HISTORICUS": [
  "Echemenes historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUSTUS HISTORICUS": [
  "Iustus historicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. PERG.": [
  "Apollonius Pergaeus geometra", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHIM.": [
  "Archimedes geometra", 
  {
   "Stom": "Stomachion", 
   "Fr": "Fragmenta"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIMEN. $2": [
  "Anaximenes Lampsacenus rhetor", 
  {
   "Rh": "Ars rhetorica"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. MESS.": [
  "Lexicon Messanense", 
  {}, 
  [
   "XIII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MUND.": [
  "Mundus Munatius epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTEO ARSINOENSIS SCRIPTOR ECCLESIASTICUS": [
  "Anteo Arsinoensis scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOSCHIO TRAG.": [
  "Moschio tragicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAC.": [
  "Pacuuius tragicus latinus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHED. STOIC.": [
  "Archedemus Tarsensis stoicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONSTANTIUS ANT.": [
  "Constantius Antiochenus scriptor ecclesiasticus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENO MED.": [
  "Zeno medicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ELEUSIS HISTORICUS": [
  "Eleusis historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEARCH.": [
  "Nearchus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLAUD. IOL.": [
  "Claudius Iolaus historicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THPHL. AL.": [
  "Theophilus Alexandrinus scriptor ecclesiasticus", 
  {
   "Poenit": "Fragmentum de poenitentia", 
   "Fr. Ep": "Fragmenta ex epistulis uariis", 
   "Fr. Ep. Pasch": "Fragmenta ex epistulis Paschalibus", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Io": "Fragmenta in Eu. Io", 
   "Theoph": "Prosphonesis in sancta Theophania", 
   "Or": "Fragmentum ex epistula contra Origenem"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHRYN. TRAG.": [
  "Phrynichus tragicus", 
  {
   "Fr. Lyr": "Fragmentum lyricum"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRIN.": [
  "Crinagoras epigrammaticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICARCH.": [
  "Nicarchus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. EPH.": [
  "Alexander Ephesius epicus", 
  {}, 
  [
   "I a C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FORTUNATIANUS, CONSULTIUS RHETOR LATINUS": [
  "Fortunatianus, Consultius rhetor latinus", 
  {
   "Rh": "Ars Rhetorica"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIPP. COM.": [
  "Philippus comicus", 
  {
   "Fr": "Fragmenta historica"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. MYR.": [
  "Petrus Myrensis scriptor ecclesiasticus", 
  {
   "Apoll": "Fragmentum orationis contra Apollinarem Laodicenum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEUER. ALEX.": [
  "Seuerus Alexandrinus rhetor", 
  {
   "Narr": "Narrationes"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCID.": [
  "Alcidamas rhetor", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. TRAG.": [
  "Timotheus tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PISO EPIGRAMMATICUS": [
  "Piso epigrammaticus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUST. GN.": [
  "Iustinus gnosticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIMACHUS TEIUS EPICUS": [
  "Antimachus Teius epicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMASTES HISTORICUS": [
  "Damastes historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TELESILL.": [
  "Telesilla lyrica", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMOSTHENES RHODIUS GEOGRAPHUS": [
  "Timosthenes Rhodius geographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARES GRAMM.": [
  "Chares grammaticus", 
  {}, 
  [
   "d. A. R.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHAEST.": [
  "Phaestus epicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THRASYM.": [
  "Thrasymachus sophista et rhetor", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEXARCHUS HISTORICUS": [
  "Alexarchus historicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BIANOR EPIGRAMAMATICUS": [
  "Bianor epigramamaticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUC. $2": [
  "Lucianus sophista", 
  {
   "Zeux": "Zeuxis", 
   "Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. OLB.": [
  "Dionysius Olbius historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOSCHIO GNOMOLOGUS": [
  "Moschio gnomologus", 
  {
   "Hyp": "Hypothecae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHED.": [
  "Archedicus comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STAT. FLACC.": [
  "Statyllius Flaccus epigrammaticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRYSERUS HISTORICUS": [
  "Chryserus historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILINUS HISTORICUS": [
  "Philinus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTAEUS PYTHAGORICUS": [
  "Aristaeus pythagoricus", 
  {}, 
  [
   "III/II a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERAP. ANTIOCH.": [
  "Serapio Antiochenus scriptor ecclesiasticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DONAT.": [
  "Donatus, Aelius grammaticus latinus", 
  {
   "Ter": "Commentum Terentii"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. COR.": [
  "Gregorius Corinthius grammaticus", 
  {
   "de comp": "de compositione", 
   "in meth": "in methodi Hermogenis grauitatem", 
   "Fig": "de Figuris"
  }, 
  [
   "X/XI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAGN.": [
  "Magnes comicus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENECR. HIST.": [
  "Menecrates historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAL. MAX.": [
  "Valerius Maximus historicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISIDORUS HYMNOLOGUS": [
  "Isidorus hymnologus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPHIL.": [
  "Pamphilus epigrammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PISANDER LAR.": [
  "Pisander Larandeus epicus", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTAG. HIST.": [
  "Aristagoras historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOCRATES ET DIONYSIUS": [
  "Socrates et Dionysius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. APHR.": [
  "Alexander Aphrodisiensis philosophus", 
  {
   "Pr": "Problemata", 
   "Febr": "de febribus", 
   "in APo": "in Analytica posteriora commentariorum fragmenta", 
   "Mixt": "de mixtione", 
   "Quaest": "Quaestiones", 
   "in Top": "in Aristotelis Topicorum libros octo commentaria", 
   "Fat": "de fato", 
   "in Metaph": "in Aristotelis Metaphysica commentaria", 
   "in Mete": "in Aristotelis Meteorologicorum libros commentaria", 
   "in APr": "in Aristotelis Analyticorum Priorum librum I commentarium.", 
   "de An": "de anima", 
   "in Sens": "in librum de Sensu commentarium", 
   "Pr. Anec": "Problemata anecdota"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHIBIUS MEDICUS": [
  "Archibius medicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORD. ECCL. APP.": [
  "Ordo Ecclesiasticus Apostolorum", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HLD.": [
  "Heliodorus scriptor eroticus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMO": [
  "Timo Phliasius poeta philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYCO PHILOSOPHUS": [
  "Lyco philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDR. HERACL.": [
  "Theodorus Heracleensis scriptor ecclesiasticus", 
  {
   "Fr. Is": "Fragmenta in Isaiam", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Luc": "Fragmenta in Eu. Luc", 
   "Io": "Fragmenta in Eu. Io"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMOCR.": [
  "Timocreo lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BOETH. STOIC.": [
  "Boethus Sidonius stoicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FLAUIANUS CP": [
  "Flauianus Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Ep. Thds": "Epistula ad Theodosium imperatorem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEREAS UEL HERAGORAS HISTORICUS": [
  "Hereas uel Heragoras historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALC. COM.": [
  "Alcaeus comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SILUIA PEREGRINA": [
  "Siluia peregrina", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "X.": [
  "Xenopho historicus", 
  {
   "Vect": "de uectigalibus", 
   "Ep": "Epistulae"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOD. COM.": [
  "Diodorus Sinopensis comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIAD.": [
  "Diadochus Photicensis scriptor ecclesiasticus", 
  {
   "Vis": "Visio"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONT. $2": [
  "Leontius mathematicus", 
  {
   "in Arat": "in Aratum"
  }, 
  [
   "VII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIBYLL. TIB.": [
  "Sibylla Tiburtina", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PITTAC.": [
  "Pittacus lyricus", 
  {}, 
  [
   "VII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACT. AP. APOCR.": [
  "Acta Apostolorum Apocrypha", 
  {
   "A. Io. Rom": "Acta Iohannis Romae (recensiones", 
   "A. Petr": "Acta Petri", 
   "A. Tit": "Acta Titi", 
   "Mart. Andr. Pr": "Martyrium Andreae prius", 
   "AA. Thom. consumm": "Actorum Thomae consummatio", 
   "A. Paul": "Acta Pauli", 
   "A. Tim": "Actorum Timothei fragmentum", 
   "A. Thom. B": "Acta Thomae B", 
   "Mart. Phil": "Martyrium Philippi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYR. IAMB. ADESP.": [
  "Lyrica iambica adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROXEN.": [
  "Proxenus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYCHARMUS NAUCRATICUS HISTORICUS": [
  "Polycharmus Naucraticus historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMON.": [
  "Simonides lyricus", 
  {
   "Eleg": "Fragmenta elegiaca"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEPH.": [
  "Hephaestio grammaticus", 
  {
   "p. 79: Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMOCL.": [
  "Timocles comicus et tragicus", 
  {
   "Trag": "Fragmenta tragica"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MALCH.": [
  "Malchio Antiochenus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Ep": "Fragmentum epistulae"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CINNA, HELUIUS POETA LATINUS": [
  "Cinna, Heluius poeta latinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARM. AUR.": [
  "Carmen Aureum", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMAG. ALEX.": [
  "Timagenes Alexandrinus historicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IND. APOST.": [
  "Indices apostolorum discipulorumque", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUBULID.": [
  "Eubulides Milesius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOCL. MATH.": [
  "Diocles mathematicus", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYNES.": [
  "Synesius Cyrenensis scriptor ecclesiasticus", 
  {
   "Regn": "oratio de regno", 
   "Hymn": "Hymni", 
   "Ep": "Epistulae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VLPIANUS EMESENUS HISTORICUS": [
  "Vlpianus Emesenus historicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HADR. RH.": [
  "Hadrianus Tyrius rhetor", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEN. RH.": [
  "Menander rhetor", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. AESOP.": [
  "Vita Aesopi", 
  {
   "Vita Aesopi Westermanniana": "Vita Aesopi Westermanniana"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUSANIAS REX, EPISTOLOGRAPHUS": [
  "Pausanias rex, epistolographus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOLEMAIS CYRENAICA PHILOSOPHA": [
  "Ptolemais Cyrenaica philosopha", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDR. IC.": [
  "Theodorus Iconiensis", 
  {
   "V. Cyric": "Vita Cyricii"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODORUS ALEXANDRINUS DIACONUS": [
  "Theodorus Alexandrinus diaconus", 
  {
   "Libell": "Libellus"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPH. $2": [
  "Stephanus philosophus", 
  {
   "in Rh": "in Artem Rhetoricam commentaria", 
   "in Int": "in librum Aristotelis de Interpretatione commentarium"
  }, 
  [
   "VIII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYB. LYR.": [
  "Hybrias lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELLAD. $2": [
  "Helladius grammaticus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THALL. HIST.": [
  "Thallus historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "T. AD. A, B": [
  "Testamentum Adae", 
  {}, 
  [
   "III d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLL.": [
  "Pollianus epigrammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CELS. PHIL.": [
  "Celsus philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEMES.": [
  "Nemesius Emesenus scriptor ecclesiasticus", 
  {
   "Nat. Hom": "de natura hominis"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERODICUS EPIGRAMMATICUS": [
  "Herodicus epigrammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FELIX I PAPA": [
  "Felix I papa", 
  {
   "Fr": "Fragmentum epistulae"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. A.": [
  "\"Lexicon <FONT FACE=\"\"SPIonic\"\">Ai(mwdei=n</FONT>\"", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "OU.": [
  "Ouidius poeta latinus", 
  {
   "Poen": "Poenae monachorum", 
   "Tr": "Tristia", 
   "Fast": "Fasti", 
   "Reg": "Excerpta e regula", 
   "Met": "Metamorphoses", 
   "Rem": "Remedia amoris", 
   "Ep": "Epistulae"
  }, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRONOMUS LYRICUS": [
  "Pronomus lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TELES PHILOSOPHUS": [
  "Teles philosophus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISID.": [
  "Isidorus Hispalensis episcopus", 
  {
   "Etym": "Etymologiae"
  }, 
  [
   "VI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "PEMPEL.": [
  "Pempelus philosophus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "A. PIL.": [
  "Acta Pilati", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODORUS CYRENAICUS PHILOSOPHUS": [
  "Theodorus Cyrenaicus philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PL. IUN.": [
  "Plato Iunior epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGIS EPIGRAMMATICUS": [
  "Agis epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SATYR. HIST.": [
  "Satyrus historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEL.": [
  "Aelianus sophista", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MART.": [
  "Martialis epigrammaticus latinus", 
  {
   "Sp": "Spectacula"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTROPIUS": [
  "Eutropius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOG.": [
  "Hermogenes rhetor", 
  {
   "Prog": "Progymnasmata", 
   "Stat": "de statibus"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MON. ANC. GR.": [
  "Monumentum Ancyranum Graecum", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CANDIDUS HISTORICUS": [
  "Candidus historicus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITR.": [
  "Vitruuius scriptor de architectura latinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISCHYRAS AEGYPTIUS SCRIPTOR ECCLESIASTICUS": [
  "Ischyras Aegyptius scriptor ecclesiasticus", 
  {
   "Ep. Ath": "Epistula ad Athanasium"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. LAOD.": [
  "Iulianus Laodicenus astrologus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOPH. MED.": [
  "Xenopho medicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAEC.": [
  "Maecius epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIGIL. PAPA": [
  "Vigilius papa", 
  {
   "Ep. Eutych": "Epistula ad Eutychium"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDOX. HIST.": [
  "Eudoxus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARIXEN.": [
  "Charixenes medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIL.": [
  "Nilus Ancyranus scriptor ecclesiasticus", 
  {
   "Magistr": "de magistris et discipulis", 
   "Epict": "Epicteti Encheiridion ad Christianorum usum accomodatum (spurium)", 
   "in Cant": "in Canticum canticorum", 
   "Narr": "Narratio"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHEAS PHIGALIENSIS EPIGRAMMATICUS": [
  "Pytheas Phigaliensis epigrammaticus", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPAT. RH.": [
  "Sopater rhetor", 
  {
   "Par": "Paraphrases", 
   "ad Hermog": "ad Hermogenis status", 
   "Fr": "Fragmenta", 
   "Tract": "Tractatio causarum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. HERM.": [
  "Anonymus Hermupolitanus epicus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASEN. A, B": [
  "Aseneth, Confessio", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOL. AR.": [
  "Theologumena Arithmeticae (Iamblicho adscripta)", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "A. MART.": [
  "Acta Martyrum", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDRO HISTORICUS": [
  "Andro historicus", 
  {}, 
  [
   "d. III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "QUINT. AS.": [
  "Quintianus Asculanus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SPEUS.": [
  "Speusippus philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAC. AEG.": [
  "Macarius Aegyptius et Pseudo Macarius/Symeo scriptor ecclesiasticus", 
  {
   "Ep. magn": "Epistula Magna", 
   "Op": "Opera uaria false Ephraemi adscripta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "A. R.": [
  "Apollonius Rhodius epicus", 
  {
   "Fr": "Fragmenta", 
   "Sch": "Scholia"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLICTER": [
  "Callicter uel Cillactor epigrammaticus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BARS.": [
  "Barsanuphius et Iohannes monachi", 
  {
   "Resp": "Quaestiones et responsiones siue Epistulae"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AENESIDAMUS HISTORICUS": [
  "Aenesidamus historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SODAMUS EPIGRAMMATICUS": [
  "Sodamus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COQUIN. FR. PAP.": [
  "De Re Coquinaria Fragmentum Papyraceum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. AL.": [
  "Alexander Alexandrinus scriptor ecclesiasticus", 
  {
   "Ep. encycl": "Epistula encyclica", 
   "Ep. Aegl": "Fragmenta epistulae ad Aeglonem"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSSIS HISTORICUS": [
  "Possis historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUPH.": [
  "Euphorio epicus", 
  {
   "Epigr": "Epigrammata"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RUF. RH.": [
  "Rufus Perinthius rhetor", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAGNUS HIST.": [
  "Magnus historicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIPH. TYR.": [
  "Epiphanius Tyrius scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad synodum Constantinopolitanam"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NUMEN. HER.": [
  "Numenius Heracleota poeta didacticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOCEDES PYTHAGORICUS": [
  "Democedes pythagoricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYLLEN.": [
  "Cyllenius epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARCIAN. IMP.": [
  "Marcianus imperator", 
  {
   "Ep. Pal": "Epistula ad Synodum Palestinam"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMAG.": [
  "Damagetus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. II AL.": [
  "Petrus II Alexandrinus scriptor ecclesiasticus", 
  {
   "Encycl": "Fragmentum epistulae encyclicae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHR. PAT.": [
  "Christus patiens", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRITODEM.": [
  "Critodemus astrologus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEO BYZ.": [
  "Leo Byzantinus historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERAPIO EPIGRAMMATICUS": [
  "Serapio epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DANAIS POEMA EPICUM": [
  "Danais poema epicum", 
  {}, 
  [
   "VI a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. NOT.": [
  "Iohannes Notarius scriptor ecclesiasticus", 
  {
   "V. Eus": "Vita Eusebii Alexandrini"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUS.": [
  "Ausonius poeta latinus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCH. FR. PAP.": [
  "Fragmenta alchemica e Papyris", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAUORIN.": [
  "Fauorinus philosophus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ONESICRITUS HISTORICUS": [
  "Onesicritus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZELOT.": [
  "Zelotus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GALLUS EPIGRAMMATICUS": [
  "Gallus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIGEN. LYR.": [
  "Antigenes Atheniensis lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ECPHANT.": [
  "Ecphantus pythagoricus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CINAETHO EPICUS": [
  "Cinaetho epicus", 
  {}, 
  [
   "VII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILISC. TRAG.": [
  "Philiscus Aegineta tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHO HISTORICUS": [
  "Agatho historicus", 
  {
   "Pont": "Ponti periplus"
  }, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUST. MON.": [
  "Eustathius monachus", 
  {
   "Ep": "Epistula de duabus naturis"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOCH.": [
  "Philochorus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYRGIO HISTORICUS": [
  "Pyrgio historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPOL.": [
  "Hippolytus scriptor ecclesiasticus", 
  {
   "Trad. Ap": "Traditio apostolica", 
   "Fr": "Fragmenta", 
   "Ben. Iac": "de benedictione Iacobi", 
   "No\u00ebt": "contra haeresin No\u00ebti", 
   "Dan": "Commentarium in Da", 
   "Iud": "Demonstratio aduersus Iudaeos", 
   "in S. Pasch": "in Sanctum Pascha", 
   "Can": "Canones", 
   "Artem": "contra Artemonem", 
   "Theoph": "de theophania", 
   "Haer": "Refutatio omnium haeresium", 
   "Chron": "Chronicon"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTHYMENES MASSILIENSIS HISTORICUS": [
  "Euthymenes Massiliensis historicus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDREAS PANORMIUS HISTORICUS": [
  "Andreas Panormius historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHIL.": [
  "Archilochus lyricus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLU.": [
  "Plutarchus biographus et philosophus et Pseudo Plutarchus", 
  {
   "Fr": "Fragmenta", 
   "Vit. Hom": "de vita et poesi Homeri", 
   "Prou": "Prouerbia", 
   "Pars. An": "Parsne an facultas animi sit uita passiua", 
   "Nob": "pro nobilitate", 
   "Tim": "Timoleo"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELANIPP.": [
  "Melanippides lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. PI.": [
  "Vitae Pindari et varia de Pindaro", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENOBIUS EPIGRAMMATICUS": [
  "Zenobius epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIPP.": [
  "Hegesippus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COSM. IND.": [
  "Cosmas Indicopleustes scriptor ecclesiasticus", 
  {
   "Top": "Topographia christiana"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOS.": [
  "Zosimus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOX. CYTH.": [
  "Philoxenus Cytherius lyricus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHLP.": [
  "Philoponus, Iohannes uel Iohannes Alexandrinus philosophus", 
  {
   "in Arith. Intr": "in Nicomachi Arithmeticam Introductionem", 
   "in Cat": "Philoponi (olim Ammonii) in Aristotelis Categorias commentarium", 
   "Aet": "de aeternitate mundi", 
   "Comp": "Compendium", 
   "in Ph": "in Aristotelis Physica commentaria", 
   "Opif": "de opificio mundi", 
   "in Mete": "in Aristotelis Meteorologicorum librum primum commentarium", 
   "Ton": "Tonica praetexta", 
   "Astrol": "de usu astrolabii", 
   "in APr": "in Aristotelis Analytica Priora commentaria"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EREN(N)IUS LEXICOGRAPHUS": [
  "Eren(n)ius lexicographus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HDN.": [
  "Herodianus grammaticus", 
  {
   "Exc. Verb": "excerpta de verbis", 
   "Fig. Epit": "de figuris (epitome)", 
   "Fr. Philet": "Fragmenta Philetaeri", 
   "Fr": "Fragmenta", 
   "Schem": "Schematismi Homerici", 
   "Epim": "Partitiones", 
   "Vers": "de uersibus", 
   "Sol": "De soloecismo et barbarismo", 
   "Nu": "de numeris"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEMISO MEDICUS": [
  "Themiso medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METROD. SCEPS.": [
  "Metrodorus Scepsius historicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYC. MAC.": [
  "Lycus Macedonius medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYSTR. $2": [
  "Polystratus epigrammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSIP.": [
  "Sosipater comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESCHRIO LYRICUS": [
  "Aeschrio lyricus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMO HISTORICUS": [
  "Demo historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOD. MED.": [
  "Diodorus medicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLIN. $2": [
  "Plinius Caecilius Secundus epistolographus latinus", 
  {
   "Paneg": "Panegyricus Traiani"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUTOM.": [
  "Automedo epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOMEDES HISTORICUS": [
  "Nicomedes historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMPHITHEUS HISTORICUS": [
  "Amphitheus historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIPH. GN.": [
  "Epiphanes Gnosticus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLIX.": [
  "Callixenus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYR. ADESP.": [
  "Lyrica adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHYLARCH.": [
  "Phylarchus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARIUS SCRIPTOR ECCLESIASTICUS": [
  "Arius scriptor ecclesiasticus", 
  {
   "Ep. Eus": "Epistula ad Eusebium Nicomediensem", 
   "Thal. Fr": "de Thalia fragmenta ex Athanasio"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MNESITH. CYZ.": [
  "Mnesitheus Cyzicenus medicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAT.": [
  "Anatol(i)us ueterinarius", 
  {
   "Exc": "Excerpta"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DICAEOG.": [
  "Dicaeogenes tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. PATM.": [
  "Lexicon Patmense", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIL.": [
  "Antileo historicus", 
  {}, 
  [
   "helen\ufffdst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THUGEN.": [
  "Thugenides comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. CHENN.": [
  "Ptolemaeus Chennus grammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. EUAE": [
  "Euangelium Euae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "E.": [
  "Euripides tragicus", 
  {
   "Fr": "Fragmenta", 
   "Epigr": "Epigrammata", 
   "Lyr": "Fragmenta Lyrica", 
   "Tr": "Troades", 
   "Ep": "Epistulae", 
   "Sch": "Scholia"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUEN.": [
  "Euenus elegiacus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTIPP.": [
  "Aristippus philosophus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMAEUS HISTORICUS": [
  "Hermaeus historicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARAT.": [
  "Aratus epicus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STRATO ALEX.": [
  "Strato Alexandrinus medicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOM.": [
  "Nicomachus historicus", 
  {
   "Aeg": "de Aegyptorum festibus"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MACED. $2": [
  "Macedonius Thessalonicensis I epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRODIC.": [
  "Prodicus philosophus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHO TRAGICUS": [
  "Pytho tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THPHL. ANT.": [
  "Theophilus Antiochenus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmentum", 
   "Autol": "ad Autolycum"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EM": [
  "Etymologicum Magnum", 
  {}, 
  [
   "XII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "VAL. FLAC.": [
  "Valerius Flaccus poeta latinus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOSC.": [
  "Dioscorides epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILAENIS SAMIA RERUM EROTICARUM SCRIPTOR": [
  "Philaenis Samia rerum eroticarum scriptor", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOCL.": [
  "Theocles lyricus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VETUS LATINA": [
  "Vetus Latina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APP. VERG.": [
  "Appendix Vergiliana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PULCH. AUG.": [
  "Pulcheria Augusta epistolographa", 
  {
   "Ep. Strat": "Epistula ad Strategium Bithyniae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OLYMPICUS MILESIUS MEDICUS": [
  "Olympicus Milesius medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOD. SCARPH.": [
  "Philodamus Scarpheus lyricus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHIO HERACLEOTA EPISTOLOGRAPHUS": [
  "Chio Heracleota epistolographus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ENNOD.": [
  "Ennodius Magnus, Felix episcopus", 
  {
   "Epist": "Epistulae"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYSIUS SOPHISTA": [
  "Dionysius sophista", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "IAMBL. $2": [
  "Iamblichus scriptor eroticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOCR.": [
  "Hermocreo epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALLADIUS AUCTOR LATINUS": [
  "Palladius auctor latinus", 
  {
   "Vet. Med": "de ueterinaria medicina"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHRYN. ATHEN.": [
  "Phrynichus Atheniensis tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHAN.": [
  "Phanias epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIB. II": [
  "Tiberius II imperator", 
  {
   "Nou": "Nouella"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUPOLEMUS HISTORICUS": [
  "Eupolemus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOLAUS, CLAUDIUS HISTORICUS": [
  "Iolaus, Claudius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IBAS ED.": [
  "Ibas Edessenus scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. $2": [
  "Demetrius rhetor", 
  {
   "Eloc": "de elocutione"
  }, 
  [
   "III/I a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARTEMID.": [
  "Artemidorus Tarsensis grammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THRASYLL. MEND.": [
  "Thrasyllus Mendius historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLICRAT.": [
  "Callicratidas philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FACUND.": [
  "Facundus Hermianensis episcopus Africanus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEUERIAN.": [
  "Seuerianus Gabalensis scriptor ecclesiasticus", 
  {
   "Rom. Heb": "Fragmenta in Pauli epistolas", 
   "Fr": "Fragmenta", 
   "Serp": "de serpente aeneo", 
   "Cruc": "in Crucem", 
   "Cent": "in centurionem et contra Manichaeos et Apollinaristas", 
   "Fic": "de ficu arefacta", 
   "Sigill": "de sigillis librorum", 
   "Pac": "de pace", 
   "Appar": "in dei apparitionem", 
   "Tent": "in tentationem domini nostri Iesu Christi", 
   "Haer": "Fragmenta sermonis contra haereses", 
   "Inc": "in incarnationem Christi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTECNIUS": [
  "Eutecnius sophista", 
  {
   "Th. Par": "Paraphrasis in Nicandri Theriaca", 
   "C. Par": "Paraphrasis in Oppiani Cynegetica"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPOMP. COM.": [
  "Theopompus comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOPH. $2": [
  "Diophilus uel Diophila epicus uel epica", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GORG.": [
  "Gorgias rhetor et sophista", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANT. LIB.": [
  "Antoninus Liberalis mythographus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BOISCUS CYZICENUS EPIGRAMMATICUS": [
  "Boiscus Cyzicenus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLAUC. $3": [
  "Glaucus Atheniensis epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLYCO EPIGRAMMATICUS": [
  "Glyco epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTYCH. CONST.": [
  "Eutychius Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Pasch": "Sermo de Paschate et de Eucharistia"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHOEROB.": [
  "Choeroboscus grammaticus", 
  {
   "Rh": "de figuris", 
   "in Heph": "in Hephaestionem", 
   "in Theod": "in Theodosii canones"
  }, 
  [
   "VIII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLIN.": [
  "Callinus elegiacus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARICLID.": [
  "Chariclides comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMPHIS COMICUS": [
  "Amphis comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPHIL.": [
  "Theophilus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOPHANTUS MEDICUS": [
  "Cleophantus medicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. MAL.": [
  "Iohannes Malalas chronographus", 
  {
   "Chron": "Chronographia"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTEAS EPIC.": [
  "Aristeas epicus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIPHO SOPH.": [
  "Antipho sophista", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. MIL.": [
  "Dionysius Milesius historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILONID. $2": [
  "Philonides Dyrrachinus medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARIS.": [
  "Charisius grammaticus latinus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGAP.": [
  "Agapetus Constantinopolitanus diaconus", 
  {
   "Cap": "Capitula admonitoria"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIPH.": [
  "Antiphanes comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERASISTR.": [
  "Erasistratus medicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CORN. LONG.": [
  "Cornelius Longus uel Longinus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMOMETUS HISTORICUS": [
  "Amometus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. COM. VET.": [
  "Demetrius comicus ueteris comoediae", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POET.": [
  "Poeta anonymus", 
  {
   "de herb": "de herbis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TROILUS EPIGRAMMATICUS": [
  "Troilus epigrammaticus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDROCLES HISTORICUS": [
  "Androcles historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG. CYZ.": [
  "Diogenes Cyzicenus historicus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLIAN.": [
  "Heraclianus Chalcedoniensis", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIPP. SID.": [
  "Philippus Sidetes", 
  {
   "Fr": "Fragmenta christianae historiae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEUD.": [
  "Theudotus tragicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PANTELEIUS EPICUS": [
  "Panteleius epicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TER. SCAUR.": [
  "Terentius Scaurus grammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIG. HIST. $2": [
  "Antigonus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BALBILL.": [
  "Balbilla lyrica", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. MYRL.": [
  "Asclepiades Myrleanus historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. BARTH.": [
  "Euangelium Bartholomaei", 
  {}, 
  [
   "IV d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. PER.": [
  "Anonyma Periegesis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARUS. MESS.": [
  "Arusianus Messius grammaticus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCYMN.": [
  "Pseudo Scymnus geographus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIGR. ADESP.": [
  "Epigrammata adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLAS (APELLAS) PONTICUS HISTORICUS": [
  "Apollas (Apellas) Ponticus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "D. P.": [
  "Dionysius Periegeta geographus", 
  {
   "p. 427: Sch": "Scholia", 
   "Au": "de Aucupio"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. PATR.": [
  "Petrus Patricius historicus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. BOST.": [
  "Antipater Bostrensis scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Io. Bapt": "Homilia in Iohannem Baptistam"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUN. CYZ.": [
  "Eunomius Cyzicenus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTAG.": [
  "Aristagoras comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "C. C.": [
  "Caecilius Calactinus rhetor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLINIC. RH.": [
  "Callinicus rhetor", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIBER ELD.": [
  "Liber Eldad et Modad", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEXTIUS MEDICUS": [
  "Sextius medicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARC. DIAC.": [
  "Marcus diaconus", 
  {
   "V. Porph": "Vita Porphyrii episcopi Gazae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLEM. AP.": [
  "Polemo uel Polemius Apollinarista", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOSTR.": [
  "Demostratus uel Damostratus uariae scientiae scriptor", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALL. $2": [
  "Palladius episcopus Helenopolitanus", 
  {
   "V. Chrys": "Dialogus de uita Iohannis Chrysostomi", 
   "H. Laus": "Historia Lausiaca", 
   "Gent. Ind": "de gentibus Indiae et Bragmanibus"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RUFIN. $2": [
  "Rufinus epigrammaticus", 
  {}, 
  [
   "III d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENEST.": [
  "Menestor pythagoricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. THT.": [
  "Lexicon quod Theaeteti uocatur", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORTHAGORAS HISTORICUS": [
  "Orthagoras historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYMEN.": [
  "Hymenaeus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEXIPP.": [
  "Dexippus historicus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLICR. HIST.": [
  "Callicrates historicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TELEPHUS HISTORICUS": [
  "Telephus historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APIC.": [
  "Apicius, C.  rei coquinariae scriptor", 
  {}, 
  [
   "III. d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DORIO RERUM NATURALIUM SCRIPTOR": [
  "Dorio rerum naturalium scriptor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIC. ALEX. ADESP.": [
  "Epica Alexandrina Adespota", 
  {
   "Inc": "Incerta"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "VERG.": [
  "Vergilius Maro, Publius poeta latinus", 
  {
   "G": "Georgica"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. $2": [
  "Apollonius medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. $3": [
  "Apollonius paradoxographus", 
  {
   "Mir": "Mirabilia"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. $4": [
  "Apollonius sophista", 
  {
   "Lex": "Lexicon Homericum"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APP.": [
  "Appianus historicus", 
  {
   "Syr": "Syriaca"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYM. STYL.": [
  "Symeo Stylites scriptor ecclesiasticus", 
  {
   "Serm": "Sermo de animae exitu", 
   "Ep": "Epistula ad Basilium Antiochenum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIST.": [
  "Philistus historicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PORPH.": [
  "Porphyrius Tyrius philosophus", 
  {
   "Abst": "de abstinentia", 
   "Plot": "Vita Plotini", 
   "Fr": "Fragmenta", 
   "Marc": "Epistula ad Marcellam", 
   "in Ptol": "in Ptolemaei Tetrabiblon", 
   "Chr. Pap": "aduersus Christianos (fragmenta papyracea)", 
   "Gaur": "ad Gaurum", 
   "VP": "Vita Pythagorae", 
   "Chr": "aduersus Christianos", 
   "in Prm": "in Platonis Parmenidem", 
   "Ep. Aneb": "Epistula ad Anebonem", 
   "in Harm": "in Ptolemaei Harmonica", 
   "Intr": "Isagoge siue quinque uoces", 
   "in Tim": "in Platonis Timaeum commentariorum fragmenta", 
   "Sent": "Sententiae ad intelligibilia ducentes"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONT.": [
  "Leontius epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIC. DAM.": [
  "Nicolaus Damascenus historicus", 
  {
   "Vit. Caes": "Vita Caesaris"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHANODICUS HISTORICUS": [
  "Phanodicus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOM. ATHEN.": [
  "Nicomachus Atheniensis tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYR. AL.": [
  "Cyrillus Alexandrinus scriptor ecclesiasticus", 
  {
   "Thdr. Mops": "Fragmenta coantra Theodorum Mopsuestenum", 
   "Ep. Fest": "Epistulae Festales", 
   "Inc. Unigen": "de incarnatione unigeniti dialogus", 
   "Dial. Trin": "de trinitate dialogi", 
   "Ep. Thds": "Epistula ad Theodosium imperatorem", 
   "Fr. Ps. Laud": "Fragmenta in Psalmos ex codice Laudiano", 
   "Hom. Diu": "Homilia de incarnatione", 
   "Ep. Lib": "ad episcopos Libyae", 
   "Luc": "Fragmenta in Eu. Luc", 
   "Mt": "Fragmenta in Eu. Matt", 
   "Io": "Fragmenta in Eu. Io", 
   "Pr. Ps": "Prooemium in Psalmos", 
   "Thds": "de recta fide ad Theodosium"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH.": [
  "Philo mechanicus", 
  {
   "Mech": "Mechanica", 
   "Bel": "Belopoeica"
  }, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEUER.": [
  "Seuerus medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARSEN.": [
  "Arsenius eremita", 
  {
   "Tent": "in nomicum tentatorem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EROT. FR. PAP.": [
  "Eroticorum Fragmenta Papyracea", 
  {
   "Tin": "de Tinouphi", 
   "Tefn": "de Tefnuti", 
   "Nect": "Somnium Nectanebi", 
   "Amen": "de Amenophi"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AENESIDAMUS CNOSSIUS PHILOSOPHUS": [
  "Aenesidamus Cnossius philosophus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAN. APP.": [
  "Canones Apostolorum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ELEG. ALEX. ADESP.": [
  "Elegiaca Alexandrina adespota", 
  {
   "Halic": "de Halicarnassi gloria"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH. EPIC.": [
  "Philo epicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TELLIS HISTORICUS": [
  "Tellis historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIALEX.": [
  "Dialexeis", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP. MAC.": [
  "Pompeius Macer tragicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPAENETUS": [
  "Epaenetus de re coquinaria scriptor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHIMEL.": [
  "Archimelus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "D. H.": [
  "Dionysius Halicarnassensis rhetor et historicus", 
  {
   "Fr": "Fragmenta", 
   "Rh": "Ars rhetorica", 
   "Th": "de Thucydide"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. MUSA": [
  "Pseudo Musa, Antonius medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CEPHISOD.": [
  "Cephisodorus comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEMUS HISTORICUS": [
  "Semus historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EP. PR. GR.": [
  "Epistulae priuatae Graecae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG. CYPR.": [
  "Gregorius Cyprius paroemiographus", 
  {}, 
  [
   "XIII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOROTH. ATH.": [
  "Dorotheus Atheniensis historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BRONTINUS UEL BROTINUS PYTHAGORICUS": [
  "Brontinus uel Brotinus pythagoricus", 
  {}, 
  [
   "III/II a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPHIL.": [
  "Sophilus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPH. MON.": [
  "Pamphilus monachus", 
  {
   "Soter": "Encomium S. Soteridis"
  }, 
  [
   "VI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEAGEN.": [
  "Theagenes historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORIGENES SCRIPTOR ECCLESIASTICUS": [
  "Origenes scriptor ecclesiasticus", 
  {
   "Dial": "Dialogus cum Heraclide", 
   "Fr. in Ps": "Fragmenta in Ps", 
   "Pasch": "de pascha", 
   "Comm. in Rom": "Fragmenta ex commentariis in Ep. Rom", 
   "Ep. Gr. Thaum": "Epistula ad Gregorium Thaumaturgum", 
   "Hom": "in Ezech", 
   "Comm. Ser": "in Mt", 
   "Fr": "in Io", 
   "Cels": "contra Celsum", 
   "Mart": "Exhortatio ad martyrium", 
   "Comm. in Eph": "Fragmenta ex commentariis in Ep. Eph", 
   "Fr. in Mt": "Fragmenta in Eu. Matt", 
   "Princ": "de principiis", 
   "Or": "de oratione", 
   "Exc. in Ps": "Excerpta in Ps", 
   "Comm. in 1Cor": "Fragmenta ex commentariis in 1Ep. Cor"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLIN. MED.": [
  "Plinius medicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PSEUDO ANTHIMUS NICOMEDIENSIS SCRIPTOR ECCLESIASTICUS (ANTH. )": [
  "Pseudo Anthimus Nicomediensis scriptor ecclesiasticus (Anth. )", 
  {
   "Eccl. fr": "de Sancta Ecclesia fragmentum"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEPTEM": [
  "Septem Sapientes", 
  {
   "Mon": "uersio Monacensis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARITO SCRIPTOR EROTICUS": [
  "Charito scriptor eroticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "CIN. LYR.": [
  "Cinesias lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STAPHYL.": [
  "Staphylus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLITARCH. $2": [
  "Clitarchus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAMPROCL.": [
  "Lamprocles lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHERECYD. SYR.": [
  "Pherecydes Syrius philosophus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HENIOCH.": [
  "Heniochus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRYPHO EPIGRAMMATICUS": [
  "Trypho epigrammaticus", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOD.": [
  "Diodorus epigrammaticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASTOR HISTORICUS": [
  "Castor historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPAPHR.": [
  "Epaphroditus grammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYC. SM.": [
  "Polycarpus Smyrnaeus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Philippenses"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DURIS HISTORICUS": [
  "Duris historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TURP.": [
  "Turpilius, Sextus comicus latinus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. BYZ.": [
  "Dionysius Byzantius geographus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHYS.": [
  "Physiologus Graecus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIC.": [
  "Philicus lyricus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARIA ALCH.": [
  "Maria alchemista", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMPOSITIONES": [
  "Compositiones ad tingenda musiua", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUCR.": [
  "Lucretius rerum naturalium scriptor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMARANT.": [
  "Amarantus grammaticus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPICUR.": [
  "Epicurus philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENECL.": [
  "Menecles Barcaeus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. MEND.": [
  "Asclepiades Mendesius historicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHYT.": [
  "Archytas Tarentinus philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOCR. SCH.": [
  "Socrates Scholasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIPP. PERG.": [
  "Philippus Pergameus historicus", 
  {}, 
  [
   "d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUT.": [
  "Eutyches", 
  {
   "Supplic": "Supplicatio"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PET. AR.": [
  "Petitiones Arianorum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPHR. ANT.": [
  "Ephraem Antiochenus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ABR. EPH.": [
  "Abraham Ephesinus", 
  {
   "Occurs": "in occursum domini"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. SCYMN.": [
  "Dionysius Scymnaeus tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILEMO LEXICOGRAPHUS": [
  "Philemo lexicographus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. ALEX.": [
  "Iohannes Alexandrinus medicus", 
  {
   "in Hp. Nat. Puer": "in librum Hippocratis de natura pueri", 
   "in Hp. Epid": "in Hippocratis Epidemiorum librum VI"
  }, 
  [
   "VI/VII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARES HISTORICUS": [
  "Chares historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPICH.": [
  "Epicharmus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEMIL.": [
  "Aemilianus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIST. HAN.": [
  "Historicus anonymus Hannibalis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. PETR.": [
  "Euangelium Petri", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS (ANON. ) $6": [
  "Anonymus (Anon. )", 
  {
   "Trag": "de Tragoedia"
  }, 
  [
   "biz.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIODORUS CRONUS PHILOSOPHUS": [
  "Diodorus Cronus philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS (ANON. ) $4": [
  "Anonymus (Anon. )", 
  {
   "Incred": "de incredibilibus"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS (ANON. ) $3": [
  "Anonymus (Anon. )", 
  {
   "in Rh": "in Aristotelis Artem Rhetoricam commentaria", 
   "in Ptol": "in Ptolemaei Tetrabiblon"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS (ANON. ) $2": [
  "Anonymus (Anon. )", 
  {
   "in Prm": "Commentarius in Platonis Parmenidem"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS (ANON. ) $1": [
  "Anonymus (Anon. )", 
  {
   "in Cat": "in Aristotelis Categorias paraphrasis", 
   "Fig": "de figuris", 
   "Gent. Ind": "de gentibus Indiae et Bragmanibus", 
   "Geog. Comp": "Geographiae expositio compendiaria"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTODEM.": [
  "Aristodemus historicus", 
  {}, 
  [
   "a. II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOTELES CYRENAICUS PHILOSOPHUS": [
  "Aristoteles Cyrenaicus philosophus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUB.": [
  "Eubulus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARC. DIAD.": [
  "Marcus Diadochus", 
  {
   "Ar": "Sermo contra Arianos"
  }, 
  [
   "IV d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYZEL.": [
  "Polyzelus comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICANOR HERMIUS HISTORICUS": [
  "Nicanor Hermius historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IREN.": [
  "Irenaeus Referendarius", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRISC. LYD.": [
  "Priscianus Lydus philosophus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALC. MESS.": [
  "Alcaeus Messenius epigrammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIM.": [
  "Antimachus Colophonius elegiacus et epicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOCR. RHOD.": [
  "Socrates Rhodius historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STHENID.": [
  "Sthenidas philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAT. $3": [
  "Catullus, C. Valerius poeta latinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMYNTIANUS HISTORICUS": [
  "Amyntianus historicus", 
  {
   "Apoph": "Apophthegmata"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMYLUS POETA DIDACTICUS": [
  "Simylus poeta didacticus", 
  {}, 
  [
   "III/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOL.": [
  "Nicolaus rhetor", 
  {
   "Prog": "Progymnasmata"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NYMPHOD.": [
  "Nymphodorus historicus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOLYT.": [
  "Theolytus epicus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAEREM. HIST.": [
  "Chaeremo historicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTAG.": [
  "Antagoras elegiacus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHEB.": [
  "Archebulus Thebaeus siue Theraeus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. APHR.": [
  "Apollonius Aphrodisiensis historicus", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METROD.": [
  "Metrodorus epigrammaticus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IOB. EP.": [
  "Iobius episcopus", 
  {
   "Symb": "Symbolum"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPOD.": [
  "Hippodamus pythagoricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. IAMB.": [
  "Dionysius Iambus grammaticus et poeta", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOD. TARS.": [
  "Diodorus Tarsensis grammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHAN.": [
  "Agathangelus scriptor ecclesiasticus", 
  {
   "V. Gr. Ill": "Vita Gregorii Illuminatoris"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUST. EPIPH.": [
  "Eustathius Epiphaniensis historicus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "V. HERACL.": [
  "Vita sancti Heraclidis", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. MARIAE": [
  "Euangelium Mariae", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMIPP. HIST.": [
  "Hermippus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IGN.": [
  "Ignatius Antiochenus", 
  {
   "Fr": "Fragmenta", 
   "Tr": "Epistula ad Trallianos", 
   "Ep": "Epistulae uariae apocryphae"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STRATON.": [
  "Stratonicus Atheniensis lyricus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TREB.": [
  "Trebelius Pollio historicus", 
  {
   "Val": "Valeriani duo"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHEL. PHIL.": [
  "Archelaus philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SUD.": [
  "Suda uel Suidas lexicon", 
  {}, 
  [
   "X d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BIO BOR.": [
  "Bio Borysthenita philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOCALYPSIS BARUCH RELIQUIAE": [
  "Apocalypsis Baruch reliquiae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG. OEN.": [
  "Diogenes Oenoandensis epicureus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILISC. EPIGR.": [
  "Philiscus Milesius epigrammaticus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERAPIO MED.": [
  "Serapio Alexandrinus medicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. CALL.": [
  "Demetrius Callatinus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARYST.": [
  "Carystius historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THESEUS HISTORICUS": [
  "Theseus historicus", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMP.": [
  "Simplicius philosophus", 
  {
   "in de An": "in libros Aristotelis de Anima commentaria", 
   "in Ph": "in Aristotelis Physica commentaria", 
   "in Cat": "in Aristotelis Categorias commentarium", 
   "in Epict": "in Epictetum commentarius", 
   "in Cael": "in Aristotelis de Caelo commentaria"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATTIC. CONST.": [
  "Atticus Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Ep. Call": "Epistula ad Calliopium", 
   "Ep. Eups. Fr": "Fragmentum epistulae ad Eupsychium", 
   "Ep. Petr. et Aides": "Epistula ad Petrum et Aidesium", 
   "Ep. Afr": "Epistula ad episcopos Africanos", 
   "Trin. Fr": "Fragmentum in Trinitatem"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. TRALL.": [
  "Asclepiades Trallensis scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GNOM. BASIL.": [
  "Gnomica Basileensia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MALCH. $2": [
  "Malchus Philadelphensis historicus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOD. SARD.": [
  "Diodorus Sardensis rhetor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARES IAMB.": [
  "Chares iambographus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHIONID.": [
  "Chionides comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELANTH. EPIGR.": [
  "Melanthius elegiacus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOSTR. $2": [
  "Philostratus Maior sophista", 
  {
   "Im": "Imagines"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM.": [
  "Demetrius historicus", 
  {
   "Aegyp": "de rebus Aegyptiis"
  }, 
  [
   "a. Apio", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONID.": [
  "Leonidas medicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAPH.": [
  "Daphitas Telmessensis epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIST. AUG.": [
  "Historiae Augustae scriptores", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. RHET.": [
  "Lexicon Rhetoricum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSTHENES HISTORICUS": [
  "Sosthenes historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYZEL. HIST.": [
  "Polyzelus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARAX HISTORICUS": [
  "Charax historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERICT.": [
  "Perictione philosopha pythagorica", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENO RHODIUS HISTORICUS": [
  "Zeno Rhodius historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUEN. $2": [
  "Euenus Ascalonius grammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOMACHUS LYRICUS": [
  "Cleomachus lyricus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELLANIC. GRAMM.": [
  "Hellanicus grammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCIP. AFRIC.": [
  "Scipio Africanus, P. Cornelius historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TUDICIUS GALLUS EPIGRAMMATICUS": [
  "Tudicius Gallus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APS.": [
  "Apsines rhetor", 
  {
   "Rh": "Ars rhetorica", 
   "Contr. Fig": "de controuersiis figuratis"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENODOT. SAM.": [
  "Menodotus Samius historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHANOCL.": [
  "Phanocles elegiacus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILIPP. THEANG.": [
  "Philippus Theangelius historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHAEDIM.": [
  "Phaedimus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEN.": [
  "Menander comicus", 
  {
   "Fr. Didot": "Fragmenta Didotiana", 
   "Fr": "Fragmenta", 
   "Th": "Theophorumene", 
   "Mon. Pap": "Gnomai monostichoi e papyris"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTONYM. $2": [
  "Aristonymus gnomologus", 
  {}, 
  [
   "a. 200 d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MUSAE.": [
  "Musaeus epicus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HILARIUS EPISCOPUS PICTAUORUM": [
  "Hilarius episcopus Pictauorum", 
  {
   "Fr": "Fragmenta", 
   "Const": "Contra Constantium imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. DSC.": [
  "Pseudo Dioscorides medicus", 
  {
   "Lap": "de lapidibus", 
   "Herb. Fem": "de herbis femininis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANACR.": [
  "Anacreo lyricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. CYP.": [
  "Asclepiades Cyprius historicus", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANACR. IUN.": [
  "Anacreo Iunior phaenomenorum scriptor", 
  {}, 
  [
   "IV/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOXENUS SELINUNTIUS COMICUS (ARISTOX. SEL. )": [
  "Aristoxenus Selinuntius comicus (Aristox. Sel. )", 
  {}, 
  [
   "VI a C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASTYD.": [
  "Astydamas tragicus", 
  {
   "Eleg": "Fragmentum elegiacum"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TER.": [
  "Terentius Afer, Publius comicus", 
  {
   "Ph": "Phormio", 
   "Sch": "Scholia"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CANTHAR.": [
  "Cantharus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. HOM.": [
  "Vitae Homeri", 
  {
   "Vit. Hom. Sud": "Vita Homeri Sudae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. TRAGIL.": [
  "Asclepiades Tragilensis historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. ALCH.": [
  "Anonymi Alchemistae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEREN. $2": [
  "Serenus gnomologus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTONOUS LYRICUS": [
  "Aristonous lyricus", 
  {
   "Ap": "Paean in Apollinem"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGAM.": [
  "Agamestor Pharsalius lyricus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYR. S.": [
  "Cyrillus Scythopolitanus scriptor ecclesiasticus", 
  {
   "V. Thgn": "Vita Theognii"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIEROCL.": [
  "Hierocles facetiarum scriptor", 
  {
   "Facet": "Facetiae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARN.": [
  "Carneades Cyrenaeus philosophus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOL. LYR.": [
  "Hermolochus lyricus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "POMP.": [
  "Pompeius epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONSENTIUS GRAMMATICUS": [
  "Consentius grammaticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "INNOC.": [
  "Innocentius papa", 
  {
   "Fr. Ep": "Fragmentum epistulae ad Theophilum", 
   "Ep. Chrys": "Cler"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOPH.": [
  "Demophilus gnomologus", 
  {
   "Sim": "Similitudines", 
   "Sent": "Sententiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSIDIPP.": [
  "Posidippus comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPHR.": [
  "Sophro comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. PONT.": [
  "Apollodorus <I>Ponticorum</I> auctor", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARC. HIST.": [
  "Marcellus historicus", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARC.": [
  "Pseudo Arcadius grammaticus", 
  {}, 
  [
   "biz.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BALAGRUS HISTORICUS": [
  "Balagrus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEN. GAZ.": [
  "Aeneas Gazaeus rhetor", 
  {
   "Thphr": "Theophrastus", 
   "Ep": "Epistulae"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RHETORES GRAECI": [
  "Rhetores Graeci", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOCH.": [
  "Nicochares comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOGNET.": [
  "Theognetus comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RHETOR BRANCATIANUS": [
  "Rhetor anonymus Brancatianus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MONIM.": [
  "Monimus Syracusanus philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. PHOC.": [
  "Pseudo Phocylides", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "QUADRATUS ATHENIENSIS SCRIPTOR ECCLESIASTICUS": [
  "Quadratus Atheniensis scriptor ecclesiasticus", 
  {
   "Fr": "Fragmentum ex apologia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYSIUS AIGAEUS MEDICUS": [
  "Dionysius Aigaeus medicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIP. HIER.": [
  "Antipater Hierapolitanus historicus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANYT.": [
  "Anyte epigrammatica", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYN. LEX.": [
  "\"Lexicon quod uocatur <FONT FACE=\"\"SPIonic\"\">Sunagwgh\\ le/cewn xrhsi/mwn</FONT>\"", 
  {
   "Syn. Lex": "uersio codicis B"
  }, 
  [
   "VIII/IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HISTORIA ALEXANDRI MAGNI": [
  "Historia Alexandri Magni", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. HERC.": [
  "Anonymi in Herculanensibus papyris", 
  {
   "Herc": "uaria opera aliubi non edita"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUGEAS COMICUS": [
  "Augeas comicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARTH. GR.": [
  "Parthenius grammaticus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIEROCLES PHILOSOPHUS": [
  "Hierocles philosophus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AST. SOPH.": [
  "Asterius sophista", 
  {
   "Fr. Theol": "Fragmenta theologica", 
   "Fr. Ps": "Fragmenta in Ps"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH. CARP.": [
  "Philo Carpasianus scriptor ecclesiasticus", 
  {
   "Cant": "Enarratio in Ca", 
   "Ep": "Epistula ad Eucarpium"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. COM.": [
  "Timotheus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMONAX HISTORICUS": [
  "Timonax historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPARCH. COM.": [
  "Hipparchus comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PI.": [
  "Pindarus lyricus", 
  {
   "P": "Pythia", 
   "Fr": "Fragmenta", 
   "Sch": "Scholia uetera"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IASO HISTORICUS": [
  "Iaso historicus", 
  {
   "Alex": "de Alexandri fanis"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERACLIT. PAR.": [
  "Heraclitus paradoxographus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOSTR. COM.": [
  "Nicostratus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TEUCER BABYLONIUS ASTROLOGUS": [
  "Teucer Babylonius astrologus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. ARG.": [
  "Dionysius Argiuus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARINUS EPIGRAMMATICUS": [
  "Marinus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THAL. CP": [
  "Thalassius Constantinopolitanus et Basilius Diaconus scriptores ecclesiastici", 
  {
   "Thds": "Libellus ad Theodosium"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOPYR. TRAG.": [
  "Zopyrus tragicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLL. S.": [
  "Apollinarius Laodicenus Syrus scriptor ecclesiasticus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDOR. ACAD.": [
  "Eudorus Academicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLAUC. NIC.": [
  "Glaucus Nicopolitanus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. BITH.": [
  "Demosthenes Bithynus epicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSIDON. $2": [
  "Posidonius Apamensis philosophus", 
  {
   "in Ti": "in Timaeum commentarii epitome"
  }, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARINUS LYRICUS": [
  "Charinus lyricus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TELEGON.": [
  "Telegonia poema epicum", 
  {}, 
  [
   "VI a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOM. LYR.": [
  "Cleomenes lyricus", 
  {}, 
  [
   "V a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMAE.": [
  "Timaeus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIMEN.": [
  "Anaximenes philosophus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARAL. IER.": [
  "Paraleipomena Ieremiou", 
  {}, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. LYC.": [
  "Alexander Lycopolitanus philosophus", 
  {
   "Man": "contra Manichaei opiniones disputatio"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. SAL.": [
  "Demetrius Salaminius historicus", 
  {}, 
  [
   "a. St. Byz.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GENNAD.": [
  "Gennadius I Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Oct": "Fragmenta in Octateuchum", 
   "Fr. 2Thess": "Fragmenta in 2Ep. Thess", 
   "Fr. Ps. 1": "Fragmenta in Ps. 1"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEDEIUS HISTORICUS": [
  "Medeius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOX.": [
  "Aristoxenus philosophus et musicus et Aristoxenica", 
  {
   "Harm": "Harmonica", 
   "Fr": "Fragmenta", 
   "Rhyth. Ox": "Rhythmica", 
   "Harm. Ox": "Harmonica"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTO EPIGRAMMATICUS": [
  "Aristo epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELIOD. NEOP.": [
  "Heliodorus neoplatonicus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEODEMUS HISTORICUS": [
  "Cleodemus historicus", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACH. TAT. $2": [
  "Achilles Tatius scriptor eroticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BACCH. $2": [
  "Bacchius Tanagraeus medicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. SUMM.": [
  "Anonymi Summaria ratio geographiae in sphaera intelligendae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLINAR.": [
  "Apollinarius epigrammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARR.": [
  "Arrianus epicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUETES COMICUS": [
  "Euetes comicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANECD. HELU.": [
  "Anecdota Heluetica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. MAGN.": [
  "Demetrius Magnesius historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUS. ALEX.": [
  "Eusebius Alexandrinus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Serm": "Sermones"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUMEDES COMICUS": [
  "Eumedes comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATES IUN.": [
  "Crates Iunior comicus", 
  {}, 
  [
   "V/IV a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "MINYAS POEMA EPICUM": [
  "Minyas poema epicum", 
  {}, 
  [
   "V a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "OPHEL.": [
  "Ophelio comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROCOP.": [
  "Procopius Caesariensis historicus", 
  {
   "Vand": "de bello Vandalico"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATH. SCHOLAST.": [
  "Athanasius scholasticus", 
  {
   "Coll": "Collectio nouellarum constitutionum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMON. $4": [
  "Ammonius Alexandrinus scriptor ecclesiasticus", 
  {
   "Ps": "Fragmenta in Ps", 
   "Io": "Fragmenta in Eu. Io"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMON. $3": [
  "Ammonius philosophus", 
  {
   "in APr": "in Aristotelis analyticorum Priorum librum I commentarium", 
   "in Porph": "in Porphyrii Isagogen siue V uoces"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMON. $2": [
  "Ammonius grammaticus", 
  {
   "Impr": "de impropriis"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARNOB.": [
  "Arnobius rhetor africanus", 
  {
   "Nat": "Aduersus nationes"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASS. FEL.": [
  "Cassius Felix medicus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DALMAT.": [
  "Dalmatius archimandrita", 
  {
   "Ep. Eph": "Epistulae ad synodum Ephesinam"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ET. CASS.": [
  "Etymologicum Cassulanum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYPAT.": [
  "Hypatius scriptor ecclesiasticus", 
  {
   "Fr. in Ps. 77": "Fragmentum in Ps. 77"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOSCHIO HIST.": [
  "Moschio historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCH.": [
  "Archias epigrammaticus", 
  {}, 
  [
   "I. a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MACEDON.": [
  "Macedonius Thessalonicensis II epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYMM.": [
  "Symmachus, Quintus Aurelius epistolographus et rhetor latinus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STEPH. COM.": [
  "Stephanus comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRITOL.": [
  "Critolaus philosophus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EROT.": [
  "Erotianus grammaticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATH. ALCH.": [
  "Agathodaemo alchemista", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOZ.": [
  "Sozomenus Salaminius scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUC.": [
  "Euclides geometra", 
  {
   "Sch": "Scholia", 
   "Sect. Can": "Sectio Canonis"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLISTR. TRAG.": [
  "Callistratus tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENECR. $2": [
  "Menecrates Smyrnaeus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOPYR. HIST.": [
  "Zopyrus historicus", 
  {
   "Thes": "Theseis et alia"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARM. PAR.": [
  "Marmor Parium", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIUS HIST.": [
  "Dius historicus", 
  {
   "Phoen": "de rebus Phoenicum"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SUS.": [
  "Susario Megarensis comicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSTRAT.": [
  "Sostratus historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIPHILUS IAMBOGRAPHUS": [
  "Diphilus iambographus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOSCOR. ALEX.": [
  "Dioscorus Alexandrinus scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARAR.": [
  "Araros comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYSISTRATUS ATHENIENSIS EPIGRAMMATICUS": [
  "Lysistratus Atheniensis epigrammaticus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYSIUS RHODIUS EPIGRAMMATICUS": [
  "Dionysius Rhodius epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. GAZ.": [
  "Iohannes Gazaeus exegeta", 
  {
   "Anacr": "Anacreontea"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OLYMP. ALCH.": [
  "Olympiodorus alchemista", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODECT.": [
  "Theodectas tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDEM.": [
  "Eudemus philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CERTAMEN": [
  "Certamen Homeri et Hesiodi", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILINN.": [
  "Philinna Thessala poeta", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUPITHIUS EPIGRAMMATICUS": [
  "Eupithius epigrammaticus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALC.": [
  "Alcaeus lyricus", 
  {}, 
  [
   "VII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "FR. LEX.": [
  "Fragmenta Lexicorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIEROCL. $2": [
  "Hierocles Platonicus philosophus", 
  {
   "Prou": "De prouidentia"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYR.": [
  "Cyrilli glossarium", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMASIS EPISTOLOGRAPHUS": [
  "Amasis epistolographus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHAL.": [
  "Phalaecus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAETULICUS II EPIGRAMMATICUS": [
  "Gaetulicus II epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESAND.": [
  "Hegesander historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMBR.": [
  "Ambrosius Mediolaniensis scriptor ecclesiasticus", 
  {
   "Tob": "de Tobia", 
   "Fr": "Fragmenta", 
   "Exhort": "Exhortatio"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH. BYZ.": [
  "Philo Byzantius paradoxographus", 
  {
   "Mir": "de septem miraculis"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THESPIS TRAGICUS": [
  "Thespis tragicus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCRIB. LARG.": [
  "Scribonius Largus medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TULL. GEM.": [
  "Tullius Geminus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OPHTH. FR. PAP.": [
  "De Re Ophthalmica Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EMP.": [
  "Empedocles poeta philosophus", 
  {
   "Sphaer": "Sphaera", 
   "Fr. Pap": "Fragmenta Papyracea"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMON. HIST.": [
  "Simonides historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METH.": [
  "Methodius Olympius scriptor ecclesiasticus", 
  {
   "Res": "de resurrectione mortuorum", 
   "Sym. et Ann": "Sermo de Symeone et Anna", 
   "Symp": "Symposium", 
   "Gen": "Fragmentum in Ge"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARIST.": [
  "Aristoteles philosophus", 
  {
   "Pr": "Problemata", 
   "Top": "Topica", 
   "Ph": "Physica", 
   "Rh": "Rhetorica", 
   "Po": "Poetica", 
   "Spir": "de Spiritu", 
   "Fr": "Fragmenta", 
   "Phgn": "Physiognomonica", 
   "Oec": "Oeconomica", 
   "Cael": "de caelo", 
   "APr": "Analytica priora", 
   "Ath": "Atheniensium respublica", 
   "Mu": "de mundo", 
   "Metaph": "Metaphysica", 
   "Fr. Lyr": "Fragmenta lyrica", 
   "Diu": "Diuisiones aristoteleae", 
   "Sch": "Scholia", 
   "Int": "de interpretatione", 
   "Xen": "de Melisso Xenophane Gorgia", 
   "Pol": "Politica", 
   "Mete": "Meteorologica", 
   "Somn. Vig": "de somno et uigilia", 
   "de An": "de anima"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEMN.": [
  "Memno historicus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ONOMARCHUS ANDRIUS SOPHISTA": [
  "Onomarchus Andrius sophista", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEANTH.": [
  "Cleanthes stoicus", 
  {
   "Fr. Poet": "Fragmenta poetica"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICIAS GRAMM.": [
  "Nicias grammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLAUC.": [
  "Glaucus historicus", 
  {
   "Pont": "Locorum sitorum in sinistra Ponti descriptio", 
   "Ar": "Archaeologia arabica."
  }, 
  [
   "a. II/", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX M. VIP.": [
  "Lex Metalli Vipascensis", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEBA\u00cfS POEMA EPICUM": [
  "Theba\u00efs poema epicum", 
  {}, 
  [
   "VIII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BASSIAN.": [
  "Bassianus Ephesinus scriptor ecclesiasticus", 
  {
   "Suppl": "Supplicatio"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. SEU. RH.": [
  "Iulius Seuerianus rhetor", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEOPTOL.": [
  "Neoptolemus Parianus epicus et grammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELAMP.": [
  "Melampus scriptor de diuinatione", 
  {
   "Naeu": "diuinatio ex naeuis corporis", 
   "Lun": "Lunarium"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HDT.": [
  "Herodotus historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORATIO MANASSIS": [
  "Oratio Manassis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "A.": [
  "Aeschylus tragicus", 
  {
   "Fr": "Fragmenta", 
   "Sch": "Scholia", 
   "Epigr": "Epigrammata", 
   "Th": "Septem contra Thebas", 
   "Eleg": "Fragmenta elegiaca"
  }, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATILIUS FORTUNATIANUS GRAMMATICUS LATINUS": [
  "Atilius Fortunatianus grammaticus latinus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMPH. HIST.": [
  "Amphicrates historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TYN.": [
  "Tynnichus lyricus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSIPH.": [
  "Sosiphanes Syracusanus tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEI(L)OCH.": [
  "Dei(l)ochus historicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AB": [
  "Anecdota Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MACAR.": [
  "Macarius paroemiographus", 
  {}, 
  [
   "XV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CERC.": [
  "Cercidas iambographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. GR. NAZ.": [
  "Lexica in S. Gregorii Nazianzeni Carmina", 
  {
   "Cas": "Lexicon Casinense", 
   "Lexicon ordine alphabetico": "Lexicon ordine alphabetico"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM. IAMB.": [
  "Hermias iambographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AL": [
  "Anthologia Latina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAGNUS EPIGRAMMATICUS": [
  "Magnus epigrammaticus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "T.": [
  "Testamenta XII patriarchum", 
  {
   "Zab": "Testamentum Zabulon"
  }, 
  [
   "II a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. ACHAR.": [
  "Apollonius Acharniensis historicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. TRAI.": [
  "Petrus Traianopolitanus scriptor ecclesiasticus", 
  {
   "Poenit": "Libellus poenitentiae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. III H.": [
  "Iohannes III Hierosolymitanus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Iohannem Constantinopolitanum"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENEDEMUS ERETRIUS PHILOSOPHUS": [
  "Menedemus Eretrius philosophus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FAUST.": [
  "Faustus Byzantinus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Petrum Fullonem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRONT.": [
  "Frontinus, Sextus Iulius scriptor latinus", 
  {
   "Aq": "de aquaeductu urbis Romae", 
   "Strat": "Strategemata"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUNIC.": [
  "Eunicus comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LICYMN.": [
  "Licymnius rhetor et lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUST.": [
  "Eustathius Thessalonicensis episcopus", 
  {
   "in D. P": "Commentarii in Dionysium Periegetam", 
   "Pind": "Prooemium commentariorum Pindaricorum", 
   "Op": "Opuscula"
  }, 
  [
   "XII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STOB.": [
  "Stobaeus, Iohannes anthologus", 
  {
   "App": "Appendix", 
   "Sch": "Scholia"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLAUD. CASIL.": [
  "Claudius Casilo lexicographus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PIGRES CARIUS ELEGIACUS": [
  "Pigres Carius elegiacus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIPHILUS ATHENIENSIS EPIGRAMMATICUS": [
  "Diphilus Atheniensis epigrammaticus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDASC. PATR.": [
  "Didascalia CCCXVIII Patrum Nicaenorum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHENOD.": [
  "Athenodorus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AXIONIC.": [
  "Axionicus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHOT.": [
  "Photius lexicographus", 
  {
   "Bibl": "Bibliotheca"
  }, 
  [
   "IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BAETON HISTORICUS": [
  "Baeton historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VOPISCUS SYRACUSIUS, FLAVIUS BIOGRAPHUS": [
  "Vopiscus Syracusius, Flavius biographus", 
  {
   "Tac": "Tacitus"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. IV ALEX.": [
  "Timotheus IV Alexandrinus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMESITH.": [
  "Timesitheus tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEXAND. COM.": [
  "Alexander comicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLISTH. OLYNTH.": [
  "Callisthenes Olynthius historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESCHRIO HIST.": [
  "Aeschrio Mytilenius historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LACT.": [
  "Lactantius rhetor Africanus", 
  {
   "Inst": "Diuinae institutiones"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LASUS LYRICUS": [
  "Lasus lyricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH. MET.": [
  "Philo Metapontius uel Nicomedensis poeta", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYR. AGR.": [
  "Syriae Agrimensor anonymus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERS. STOIC.": [
  "Persaeus Citieus stoicus", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. ALCH.": [
  "Iohannes alchemista", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MISC. TIR.": [
  "Miscellanea Tironiana", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CINCIUS ALIMENTUS, LUCIUS HISTORICUS": [
  "Cincius Alimentus, Lucius historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BARB.": [
  "Barbucallus epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZONAR.": [
  "Pseudo Zonaras lexicographus", 
  {}, 
  [
   "XIII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METOPUS PYTHAGORICUS": [
  "Metopus pythagoricus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOD.": [
  "Hermodorus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYMEO MESOPOTAMIUS": [
  "Symeo Mesopotamius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENAECHM.": [
  "Menaechmus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUPREP.": [
  "Euprepius et Cyrillus Thraces scriptores ecclesiastici", 
  {
   "Libell": "Libellus"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASS.": [
  "Cassius medicus", 
  {
   "Pr": "Problemata"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIEUCHID.": [
  "Dieuchidas historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STRATO COM.": [
  "Strato comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRISTOD.": [
  "Christodorus Coptites historicus et poeta", 
  {
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARO LAMPS.": [
  "Charo Lampsacenus historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. AGENN.": [
  "Pseudo Agennius Urbicus gromaticus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HDN. $2": [
  "Herodianus historicus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NAUSICR.": [
  "Nausicrates comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAN.": [
  "Manetho astrologus", 
  {
   "Hyp": "Hypotheses"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHOERIL.": [
  "Choerilus Samius epicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERMOD. SYR.": [
  "Hermodorus Syracusanus biographus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCAEN. ROMAN.": [
  "Scaenicae Romanorum Poesis Fragmenta", 
  {
   "Trag": "Tragoediae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. ASTR.": [
  "Anonymi Astrologi", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOM. TRAG.": [
  "Nicomachus Alexandrinus tragicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEGES MEDICUS": [
  "Meges medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SCH. IN LIB. MED. COD. AUGUST.": [
  "Scholia in librum medicum ex codice Augustano", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTHER.": [
  "Eutherius Tyanensis scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Confut": "Confutationes"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH. HERACL.": [
  "Philo Heracleensis paradoxographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VITA ADAM ET EUAE": [
  "Vita Adam et Euae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BASIL. $2": [
  "Basilius Caesariensis scriptor ecclesiasticus", 
  {
   "Spir": "De Spiritu sancto", 
   "H. Myst": "Historia mystagogica", 
   "Eunom": "Aduersus Eunomium libri tres", 
   "Gent": "de legendis gentilium libris", 
   "Fr": "Fragmenta", 
   "Hex": "Homiliae in Hexaemeron", 
   "Exp. Fid. Nic": "Expositio fidei Nicaenae", 
   "Poenit. Can": "Canones poenitentiales", 
   "Inc": "de incarnatione", 
   "Ep": "Epistulae", 
   "Bapt": "de baptismo"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. ASCON.": [
  "Pseudo Asconius scholiasta", 
  {
   "in Verr": "in Verres"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUGEO HISTORICUS": [
  "Eugeo historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARMENO EPIGRAMMATICUS": [
  "Parmeno epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELA, POMPONIUS": [
  "Mela, Pomponius geographus latinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISID. TRAG.": [
  "Isidorus tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILETAS SAMIUS EPIGRAMMATICUS": [
  "Philetas Samius epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMON. AEG.": [
  "Ammonius Aegyptius scriptor ecclesiasticus", 
  {
   "Ep": "Epistulae de Sanctis Pachomio et Theodoro"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOD. ATH.": [
  "Diodorus Atheniensis periegeta", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APP. PROU.": [
  "Appendix prouerbiorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLL. CHAER.": [
  "Apollonius Chaeris", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. MYND.": [
  "Alexander Myndius historicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIM.": [
  "Himerius sophista", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTISTH.": [
  "Antisthenes philosophus et rhetor", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. TRAG.": [
  "Dionysius Syracusius tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOLIN.": [
  "Solinus, C. Iulius geographus latinus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAEU.": [
  "Laeuius poeta latinus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIC. MAL.": [
  "Nicias Maleotes historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AR. DID.": [
  "Arius Didymus doxographus", 
  {
   "Stoic": "Epitome de morali philosophiae parte (ethica stoica)"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MORSIMUS TRAGICUS": [
  "Morsimus tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELANTH. TRAG.": [
  "Melanthius Rhodius tragicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPHON.": [
  "Sophonias philosophus", 
  {
   "in de An": "in libros Aristotelis de Anima paraphrasis"
  }, 
  [
   "XIII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "FRONTO, M. CORNELIUS": [
  "Fronto, M. Cornelius scriptor latinus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*LEXICA SYNTACTICA GRAECA": [
  "*Lexica Syntactica Graeca", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYMN. IS.": [
  "Hymni ad Isim", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APP. ANTH.": [
  "Appendix noua epigrammatum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOTIMUS EPICUS": [
  "Diotimus epicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYR. H.": [
  "Cyrillus Hierosolymitanus scriptor ecclesiasticus", 
  {
   "Procatech": "Procatechesis", 
   "Ep. Iul": "Epistula ad Iulium papam", 
   "Myst": "Mystagogiae", 
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCMAEO PHILOSOPHUS": [
  "Alcmaeo philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COD. IUST.": [
  "Codex Iustinianus", 
  {}, 
  [
   "IV/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEANTH. CYZ. IUN.": [
  "Neanthes Cyzicenus Iunior historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. HEROD.": [
  "Lexicon Herodoteum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAM. PAPA": [
  "Damasus papa", 
  {
   "Ep. Orient": "Epistula ad episcopos orientales"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP.": [
  "Asclepiades epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIUS PHILOSOPHUS": [
  "Dius philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOMEN.": [
  "Aristomenes comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NESSAS PHILOSOPHUS": [
  "Nessas philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. ANT.": [
  "Timotheus Antiochenus scriptor ecclesiasticus", 
  {
   "Natiu": "in natiuitatem praecursoris", 
   "Sym": "Oratio in Symeonem"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROU. ATH.": [
  "Prouerbiorum collectio Athoa quinta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALCH.": [
  "Palchus astrologus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEPIDUS HISTORICUS": [
  "Lepidus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDROT.": [
  "Androtio historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OROS.": [
  "Orosius Paulus presbyter Hispanus", 
  {
   "Hist": "Historiarum adversus Paganos libri septem", 
   "Comm": "Commonitorium de errore Priscillianistarum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PELAG. ALCH.": [
  "Pelagius alchemista", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HES.": [
  "Hesiodus epicus", 
  {
   "Fr": "Fragmenta", 
   "Fr. Sel": "Fragmenta selecta", 
   "Th": "Theogonia", 
   "Sch": "Scholia"
  }, 
  [
   "a. VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMO HOM.": [
  "Demo homerica", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TULL. SAB.": [
  "Tullius Sabinus grammaticus", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISID. CHAR.": [
  "Isidorus Characenus geographus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALP.": [
  "Calpurnius Siculus bucolicus", 
  {
   "Pis": "de laude Pisonis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NYMPHIS HISTORICUS": [
  "Nymphis historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROCOP. GAZ.": [
  "Procopius Gazaeus rhetor", 
  {
   "Imag": "Ecphrasis imaginis", 
   "Ecphr": "Ecphrasis horologii", 
   "Ep": "Epistulae", 
   "Pan": "Panegyricus in Anastasium imperatorem", 
   "in Eccl": "in Ecclesiasten"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHANOD.": [
  "Phanodemus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMONAS": [
  "Ammonas", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEST.": [
  "Nestorius Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Hom. Tent": "Homiliae in tentationes", 
   "Ep. Thds": "Epistula ad Theodosium"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODORID.": [
  "Theodoridas epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OEN. LYR.": [
  "Oeniades lyricus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATIN.": [
  "Cratinus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PECT. EPITAPH.": [
  "Pectorii epitaphium", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRYPHO": [
  "Trypho grammaticus", 
  {
   "Fr": "Fragmenta", 
   "Trop": "de tropis", 
   "Pass": "Excerpta de passionibus"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTYLL.": [
  "Antyllus medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYSIUS EPICUS": [
  "Dionysius epicus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. AEG.": [
  "Euangelium Aegyptium", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEU. ANT.": [
  "Seuerus Antiochenus scriptor ecclesiasticus", 
  {
   "Res": "Oratio in resurrectionem", 
   "Fr": "Fragmenta", 
   "Fr. Luc": "Fragmenta in Eu. Luc", 
   "Fr. Ex": "Fragmenta in Exodum e catenis"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. EN.": [
  "Apocalypsis Enoch", 
  {
   "Sync": "Syncelli epitome"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MINUC.": [
  "Minucianus rhetor", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPHIL. $2": [
  "Theophilus historicus", 
  {
   "Sic": "Descriptio Siciliae"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. MET.": [
  "Timotheus Metapontinus medicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SATYR. $2": [
  "Satyrus historicus", 
  {
   "Vit. Eur": "Vita Euripidis", 
   "Fr. Hist": "Fragmenta historica"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SATYR. $3": [
  "Satyrus medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SUET.": [
  "Suetonius historicus et grammaticus latinus", 
  {
   "Gram. Rhet": "de grammatica et rhetorica", 
   "Lud": "de ludis Graecis", 
   "Vit": "Vitelius"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESCHIN. SOCR.": [
  "Aeschines Socraticus philosophus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARM. POP.": [
  "Carmina Popularia", 
  {}, 
  [
   "arc.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. AULOD.": [
  "Anonymi Aulodia", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOCALYPSIS SOPHONIAE": [
  "Apocalypsis Sophoniae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTID. $3": [
  "Aristides rhetor", 
  {
   "Pro": "Prolegomena", 
   "Rh": "Libri rhetorici", 
   "Or": "Orationes", 
   "Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTID. $2": [
  "Aristides historicus", 
  {
   "Cnid": "de Cnido"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TELEST.": [
  "Telestes lyricus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SENECA, L. ANNAEUS RHETOR LATINUS": [
  "Seneca, L. Annaeus rhetor latinus", 
  {
   "Contr": "Controuersiae"
  }, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERGIAS HISTORICUS": [
  "Ergias historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TYRT.": [
  "Tyrtaeus lyricus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. SABB.": [
  "Lexicon Sabbaiticum", 
  {}, 
  [
   "XIV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CREPEREIUS CALPURNIANUS HISTORICUS": [
  "Crepereius Calpurnianus historicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASP.": [
  "Aspasius philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HARMOD.": [
  "Harmodius historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPICT.": [
  "Epictetus philosophus", 
  {
   "Fr": "Fragmenta", 
   "Ench": "Enchiridion", 
   "Sent": "Gnom. D (Sententiae codicis Vaticani)"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUGEN.": [
  "Eugenius diaconus", 
  {
   "Exp. Fid": "Expositio fidei"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAET.": [
  "Gaetulicus, Cn. Lentulus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMOCRATES HISTORICUS": [
  "Timocrates historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. SCYT.": [
  "Dionysius Scytobrachio historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETRIUS EPICUS": [
  "Demetrius epicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. DOSITH.": [
  "Pseudo Dositheus anthologus et Pseudo Dositheana", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EU. FR. PAP.": [
  "Euangeliorum incertorum Fragmenta Papyracea", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HOM.": [
  "Homerus epicus", 
  {
   "Fr": "Fragmenta", 
   "Od": "Odyssea", 
   "Sch": "Scholia"
  }, 
  [
   "VIII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PELAGON.": [
  "Pelagonius ueterinarius", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENO MEDICUS": [
  "Meno medicus", 
  {
   "Iatr": "Iatrica"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEARCH. COM.": [
  "Clearchus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODORUS BITHYNIUS EPIGRAMMATICUS": [
  "Theodorus Bithynius epigrammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. IUN.": [
  "Asclepiades Iunior medicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BASIL.": [
  "Basilis historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SENECA, L. ANNAEUS PHILOSOPHUS LATINUS": [
  "Seneca, L. Annaeus philosophus latinus", 
  {
   "Ep": "Epistulae", 
   "Apocol": "Apocolocyntosis"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIBER IANN.": [
  "Liber Iannes et Iambre", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXIMAND. HIST.": [
  "Anaximander historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEMON.": [
  "Semonides iambographus", 
  {}, 
  [
   "VII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPOMP. COLOPH.": [
  "Theopompus Colophonius epicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDACHE SIUE DOCTRINA APOSTOLORUM": [
  "Didache siue Doctrina Apostolorum", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLITARCH.": [
  "Clitarchus gnomologus", 
  {
   "Sent": "Sententiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMANUS GRAMMATICUS": [
  "Comanus grammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC. SEDR.": [
  "Apocalypsis Sedrach", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOGENES EPISCOPUS": [
  "Diogenes episcopus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHAENN.": [
  "Phaennus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HSCH.": [
  "Hesychius lexicographus", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PH. $2": [
  "Philo Iudaeus philosophus", 
  {
   "Fr": "Fragmenta", 
   "Fr. Gen": "Quaestiones in Ge", 
   "Prou": "de prouidentia", 
   "Hypoth": "Hypothetica", 
   "Qu. Gen": "Quaestiones in Ge", 
   "Fr. D": "Fragmenta de Deo"
  }, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLITODEMUS": [
  "Clitodemus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHIG.": [
  "Archigenes medicus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ADAEUS EPIGRAMMATICUS": [
  "Adaeus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DSC. LAT.": [
  "Dioscorides Longobardus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUTOCR. HIST.": [
  "Autocrates historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MART. IGN.": [
  "Martyrium Ignatii", 
  {
   "Rom": "Martyrium Ignatii Romanum"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. CALLISTH.": [
  "Pseudo Callisthenes historicus", 
  {}, 
  [
   "d. II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEON.": [
  "Leonidas epigrammaticus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPYS HISTORICUS": [
  "Hippys historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. II CP": [
  "Iohannes II Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Ep. Io. H": "Epistula ad Iohannem III Hierosolymitanum"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ECHEM.": [
  "Echembrotus lyricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METROPHANES HISTORICUS": [
  "Metrophanes historicus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MART. CAP.": [
  "Martianus Capella grammaticus latinus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARCIAN.": [
  "Marcianus geographus", 
  {
   "Pro\u00ebm": "Pro\u00ebmium Peripli Menippei", 
   "Epit. Menipp": "Peripli Menippei epitome"
  }, 
  [
   "III/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROCL. CP": [
  "Proclus Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Hom": "Homiliae", 
   "Or. Laud. M": "oratio de laudibus Mariae", 
   "Thom": "in sanctum apostolum Thomam", 
   "Circum": "de circumcisione domini", 
   "Tract": "Tractatus de traditione diuinae missae", 
   "Virg": "in s. uirginem ac dei genitricem", 
   "Annunt": "Oratio in Deiparae annuntiationem"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUAGR. PONT.": [
  "Euagrius Ponticus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Gnost": "Gnosticus", 
   "Cap. Pract": "Capitula Practica uel monachus", 
   "Or": "de oratione", 
   "Cogit": "de cogitationibus", 
   "Sent. Virg": "Sententiae ad uirgines", 
   "Schol": "\"Scholion in <FONT FACE=\"\"SPIonic\"\">pipi</FONT> \"", 
   "Schol. Pr": "Scholia in Prouerbia", 
   "Eulog": "Tractatus ad Eulogium (false Nilo adscriptus)", 
   "Schol. Ec": "Scholia in Ecclesiasten", 
   "Ep": "Epistula", 
   "Sent": "Sententiae"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRAG. ADESP.": [
  "Tragica Adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISID. AEG.": [
  "Isidorus Aegeates epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SABINUS, TULLIUS EPIGRAMMATICUS": [
  "Sabinus, Tullius epigrammaticus", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEMIST.": [
  "Themistocles epistolographus", 
  {
   "Ep": "Epistulae"
  }, 
  [
   "a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESCHIN.": [
  "Aeschines epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYNC.": [
  "Lynceus comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MANIL.": [
  "Manilius, M.  poeta latinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMPH. SID.": [
  "Amphilochius Sidensis scriptor ecclesiasticus", 
  {
   "Ep": "Epistulae fragmentum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTODEM. MYTH.": [
  "Aristodemus mythographus historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PSEUDO ACRO SCHOLIASTA": [
  "Pseudo Acro scholiasta", 
  {
   "Sat": "Saturae"
  }, 
  [
   "VI/", 
   "", 
   "", 
   ""
  ]
 ], 
 "BOLUS PARADOXOGRAPHUS": [
  "Bolus paradoxographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUNC.": [
  "Iuncus philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. CORIN.": [
  "Dionysius Corinthius scriptor ecclesiasticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUN.": [
  "Eunapius historicus", 
  {
   "Hist": "Fragmenta historica"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCL. $2": [
  "Asclepius philosophus", 
  {
   "in Metaph": "in Aristotelis Metaphysicorum libros A-Z commentaria", 
   "in Introd": "Commentaria in Nicomachi Geraseni Pythagorei Introductionem Arithmeticam"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCTINUS EPICUS": [
  "Arctinus epicus", 
  {}, 
  [
   "VIII a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIPPOSTRATUS HISTORICUS": [
  "Hippostratus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROP.": [
  "Propertius poeta latinus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*CASSIANUS SABAITA ABBAS": [
  "*Cassianus Sabaita abbas", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOSCH.": [
  "Moschus bucolicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALAEPH.": [
  "Palaephatus paradoxographus", 
  {}, 
  [
   "IV a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEMERONIUS HISTORICUS": [
  "Semeronius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "XANTH. LYR.": [
  "Xanthus lyricus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEO AL.": [
  "Leo Alabandeus historicus", 
  {}, 
  [
   "II a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARIAN.": [
  "Marianus epigrammaticus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOS. AB.": [
  "Zosimus abbas", 
  {
   "All": "Alloquia"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIOCHUS": [
  "Antiochus historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COLLUTH.": [
  "Colluthus epicus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMPH.": [
  "Amphilochius Iconiensis scriptor ecclesiasticus", 
  {
   "Or. in Res": "Oratio in resurrectionem domini", 
   "Non. Desp": "Homilia de non desperando", 
   "Seleuc": "Iambi ad Seleucum", 
   "V. Bas": "Vita Basilii Caesariensis", 
   "Or": "Orationes 1-9"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORAC. FIG.": [
  "Oraculum Figuli", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NEILUS EPIGRAMMATICUS": [
  "Neilus epigrammaticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VARRO, M. TERENTIUS HISTORICUS ET GRAMMATICUS LATINUS": [
  "Varro, M. Terentius historicus et grammaticus latinus", 
  {
   "Sat. Men": "Saturae Menippeae"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATH.": [
  "Agathias historicus atque epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAEC. SALUBR.": [
  "Praecepta Salubria poema medicum", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARRHAS.": [
  "Parrhasius elegiacus et pictor", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ET. SYM.": [
  "Etymologicum Symeonis", 
  {}, 
  [
   "XII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYCLIT.": [
  "Polyclitus Sicyonius philosophus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STATIUS, PUBLIUS PAPINIUS EPICUS LATINUS": [
  "Statius, Publius Papinius epicus latinus", 
  {
   "Silu": "Siluae", 
   "Theb": "Thebais"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORAC. SIB.": [
  "Oracula Sibyllina", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VRAN.": [
  "Vranius historicus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG.": [
  "Diogenes historicus", 
  {
   "Pers": "Persica"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PL. COM.": [
  "Plato comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. IAMB.": [
  "Anonymorum Iambi", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. ANTEC.": [
  "Iulianus Antecessor epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MANES HAERESIARCA": [
  "Manes haeresiarca", 
  {
   "Ep. Scyth": "Fragmentum epistulae ad Scythianum", 
   "Ep. Zeb": "Fragmentum epistulae ad Zebinam"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMON.": [
  "Ammonius epigrammaticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYIDUS MEDICUS": [
  "Polyidus medicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MYRTIS LYRICA": [
  "Myrtis lyrica", 
  {}, 
  [
   "V a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CORINN.": [
  "Corinna lyrica", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUPHANES COMICUS": [
  "Euphanes comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILUM.": [
  "Philumenus medicus", 
  {
   "Ven": "de uenenatis animalibus"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THYILL.": [
  "Thyillus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. MAGN.": [
  "Alexander Magnes epigrammaticus", 
  {}, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARMEN.": [
  "Armenidas historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUTHYDEMUS ATHENIENSIS MEDICUS": [
  "Euthydemus Atheniensis medicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSICR.": [
  "Sosicrates comicus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. SEB.": [
  "Petrus Sebastenus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Gregorium Nyssenum fratrem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMMONIDES EPIGRAMMATICUS": [
  "Ammonides epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. II ALEX.": [
  "Timotheus II Alexandrinus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCM.": [
  "Alcman lyricus", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THGN. HIST.": [
  "Theognis Rhodius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "DINOL.": [
  "Dinolochus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AP. TY.": [
  "Apollonius Tyanensis philosophus", 
  {
   "Fr": "Fragmenta", 
   "Ep": "Epistulae"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. APAM.": [
  "Demetrius Apamensis medicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PATROCLES HISTORICUS": [
  "Patrocles historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RHINTH.": [
  "Rhintho comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. H.": [
  "Alexander Hierosolymitanus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta epistularum"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLATON.": [
  "Platonius grammaticus", 
  {
   "Diff": "de differentia comoediarum"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARR. $2": [
  "Arrianus historicus", 
  {
   "Epict. Fr": "Epicteti dissertationum fragmenta", 
   "Tact": "Tactica", 
   "Epigr": "Epigramma"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BASILISC.": [
  "Basiliscus imperator", 
  {
   "Encycl": "Encyclica"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYPSICRATES HISTORICUS": [
  "Hypsicrates historicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIG.": [
  "Digesta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "AESCH. ALEX.": [
  "Aeschylus Alexandrinus tragicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EP. CLEM.": [
  "Clemens Romanus scriptor ecclesiasticus", 
  {
   "Ep. Clem. Virg": "Epistulae duae de virginitate", 
   "Ep. Clem": "Epistulae Clementis"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRISC.": [
  "Priscus historicus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHIL. THM.": [
  "Phileas Thmuitanus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Thmuitas"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. RUFIN.": [
  "Pseudo Rufinus scriptor ecclesiasticus", 
  {
   "Fid": "Tractatus de fide"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARAT. SIC.": [
  "Aratus Sicyonius historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENO ELEAT.": [
  "Zeno Eleaticus philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. EPIPH.": [
  "Iohannes Epiphaniensis historicus", 
  {
   "Hist": "Fragmentum historicum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAC. PL.": [
  "Lactantius Placidus grammaticus", 
  {
   "Stat. Theb": "Commentarius in Statii Thebaida"
  }, 
  [
   "VI d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "A. D.": [
  "Apollonius Dyscolus grammaticus", 
  {
   "Synt": "de syntaxi"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIL.": [
  "Hilarius papa", 
  {
   "Ep. P": "Epistula ad Pulcheriam"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IASO BYZ.": [
  "Iaso Byzantius historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIDYM. $2": [
  "Didymus Alexandrinus scriptor ecclesiasticus", 
  {
   "Eun": "contra Eunomium libri", 
   "Rom": "Fragmenta in Ep. Rom", 
   "in Eccl": "in Ecclesiasten", 
   "in Ps": "in Psalmos", 
   "in Zach": "in Zachariam", 
   "Trin": "de Trinitate", 
   "Io": "Fragmenta in Eu. Io", 
   "in Ps. cat": "Fragmenta in Psalmos e catenis", 
   "Gen": "in Genesin"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIPH. SIPH.": [
  "Diphilus Siphnius rerum naturalium scriptor", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOSTR. IUN.": [
  "Philostratus Iunior sophista", 
  {
   "Im": "Imagines"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEUCIPP.": [
  "Leucippus philosophus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELIT.": [
  "Melito Sardensis scriptor ecclesiasticus", 
  {
   "Pasch": "de pascha"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PANARCES LYRICUS": [
  "Panarces lyricus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAUD. AGRIPP.": [
  "Laudatio funebris Agrippae", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICAENET.": [
  "Nicaenetus epicus et epigrammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAPR.": [
  "Capreolus Carthaginiensis scriptor ecclesiasticus", 
  {
   "Ep. Eph": "Epistula ad synodum Ephesinam"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARIAETHUS TEGEATA HISTORICUS": [
  "Ariaethus Tegeata historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SECUNDUS EPIGRAMMATICUS": [
  "Secundus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDR. SAM.": [
  "Andreas Samosatenus scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHANADAS HISTORICUS": [
  "Athanadas historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LIBER IUBIL.": [
  "Liber Iubilaeorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "COD. THEOD.": [
  "Codex Theodosianus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX.": [
  "Alexander rhetor", 
  {
   "Rh": "de materiis rhetoricis"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMOCR.": [
  "Damocrates poeta medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CORN. PA.": [
  "Cornelius papa", 
  {
   "Ep. Fr": "Fragmenta ex epistula ad Fabium"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRYSIPP. TYAN.": [
  "Chrysippus Tyanensis rei coquinariae scriptor", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOCR.": [
  "Democritus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. $2": [
  "Alexis comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYSANIAS HISTORICUS": [
  "Lysanias historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARAB.": [
  "Arabius epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VLP.": [
  "Vlpianus grammaticus", 
  {
   "Prol. in D": "Prolegomena in Demosthenis orationes Olynthiacas et Philippicas"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPIG.": [
  "Epigenes comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYPSICL.": [
  "Hypsicles astronomus", 
  {
   "Disp": "Disputatio de dodecaedro et icosaedro", 
   "Sch": "Scholia"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMAG. MIL.": [
  "Timagenes uel Timogenes Milesius historicus", 
  {}, 
  [
   "imper.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICAND. THYAT.": [
  "Nicander Thyatirius historicus", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "THD.": [
  "Theodotio interpres Veteris Testamenti", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS PHILOSOPHUS (ANON. )": [
  "Anonymus philosophus (Anon. )", 
  {
   "in Pl. Phd": "Commentarium in Platonis Phaedonem", 
   "in Gal. Sect": "Commentarium in Galeni De Sectis"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEONAS EPISCOPUS ALEXANDRIAE": [
  "Theonas episcopus Alexandriae", 
  {
   "Ep": "Epistula contra Manichaeos"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THDR. SAMOTHR.": [
  "Theodorus Samothracenus historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "FLAU. HIM.": [
  "Flauius Himerius scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad exactorem Mareotae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SPEC. LEX. INED. COD. AUGUST.": [
  "Specimen lexici inediti ex cod. Augustano s. XIV", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LAETUS HISTORICUS": [
  "Laetus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. SCYTH.": [
  "Iohannes Scythopolitanus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYS.": [
  "Lysias orator", 
  {
   "Fr. Ep": "Fragmenta epistolarum"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ABERC.": [
  "Abercius Hieropolitanus", 
  {
   "Epitaph": "Epitaphium Abercii"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYCLIT. HIST.": [
  "Polyclitus Larissaeus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOG. ATH.": [
  "Diogenes Atheniensis tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "QUINT.": [
  "Quintilianus rhetor latinus", 
  {
   "Inst": "Institutio oratoria"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCL.": [
  "Asclepiodotus tacticus", 
  {
   "Tact": "Tactica"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BUTHER.": [
  "Butherus philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATIPP.": [
  "Cratippus historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENIPP.": [
  "Menippus philosophus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERANIUS PHILO GRAMMATICUS": [
  "Eranius Philo grammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUC. AL.": [
  "Lucius Alexandrinus scriptor ecclesiasticus", 
  {
   "Fr. Pasch": "Fragmentum sermonis in Pascha"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUST. SEB.": [
  "Eustathius Sebastenus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Liberium papam"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOS. ALCH.": [
  "Zosimus alchemista", 
  {
   "Comm. Gen": "Commentaria genuina"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHYLOTIM.": [
  "Phylotimus medicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NONN.": [
  "Nonnus epicus", 
  {
   "Par. Eu. Io": "Paraphrasis Euangelii Iohannis", 
   "D": "Dionysiaca"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CASTORIO SOLEUS LYRICUS": [
  "Castorio Soleus lyricus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. COT.": [
  "Alexander Cotiaeus rhetor", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYAEN. EPICUR.": [
  "Polyaenus epicureus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUDAX GRAMMATICUS LATINUS": [
  "Audax grammaticus latinus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLON. MYS": [
  "Apollonius Mys medicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TELECL.": [
  "Teleclides comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMO ATHENIENSIS DE RE EQUESTRI SCRIPTOR": [
  "Simo Atheniensis de re equestri scriptor", 
  {
   "Fr": "Fragmenta", 
   "Eq": "de forma de delectu equorum"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM. $4": [
  "Hermias Alexandrinus philosophus", 
  {
   "in Phdr": "in Platonis Phaedrum scholia"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MEL.": [
  "Meleager epigrammaticus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS RHETOR (ANON. )": [
  "Anonymus rhetor (Anon. )", 
  {
   "Paneg. Iul. Imp": "Panegyricus in Iulianum imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GARG. MART.": [
  "Gargilius Martialis scriptor de hortis", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUS.": [
  "Eusebius Caesariensis scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta", 
   "Onomast": "Onomasticon", 
   "Is": "Commentarius in Isaiam", 
   "Ep. Euphrat": "Fragmenta epistulae ad Euphrationem", 
   "Mens": "Fragmentum de mensuribus et ponderibus", 
   "Hierocl": "contra Hieroclem", 
   "Ep. Carp": "Epistula ad Carpianum", 
   "Theoph": "Theophania", 
   "Marcell": "contra Marcellum"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM. $2": [
  "Hermes Trismegistos", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HERM. $3": [
  "Hermias philosophus", 
  {
   "Irris": "Irrisio gentilium philosophorum"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAIIST.": [
  "Maiistas hymnologus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MANTISS. PROU.": [
  "Mantissa prouerbiorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIC. $3": [
  "Nicias historicus", 
  {
   "Arc": "Arcadica"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "NIC. $2": [
  "Nicias epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUS. DAM.": [
  "Pausanias Damascenus historicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. AN. OX.": [
  "Lexicon Anonymi Oxoniensis in orationes Gregorii Naziazeni", 
  {}, 
  [
   "XI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEM. OPHTH.": [
  "Demosthenes ophthalmicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEXANDER MAGNUS REX, EPISTOLOGRAPHUS": [
  "Alexander Magnus rex, epistolographus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MUSIC.": [
  "Musicius epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SERU.": [
  "Seruius grammaticus latinus", 
  {
   "Georg": "Commentarii in Georgica"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYR. ALEX. ADESP.": [
  "Lyrica Alexandrina adespota", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACESAND.": [
  "Acesander historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENOTH.": [
  "Zenothemis poeta", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ET. GUD.": [
  "Etymologicum Gudianum", 
  {}, 
  [
   "XII d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIPP. HIST.": [
  "Hegesippus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. ASCAL.": [
  "Ptolemaeus Ascalonita grammaticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANECD. STUD.": [
  "Anecdota Graeca et Latina", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYNESIUS SCHOLASTICUS EPIGRAMMATICUS": [
  "Synesius Scholasticus epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARMENISCUS GRAMMATICUS": [
  "Parmeniscus grammaticus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. PAROD.": [
  "Anonymi Parodici", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIB.": [
  "Tiberius rhetor", 
  {
   "Fig": "de figuris"
  }, 
  [
   "III/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GLOSS. MED.": [
  "Glossae medicinales", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MIMN. TRAG.": [
  "Mimnermus tragicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZON. $1": [
  "Zonas epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYPERMENES HISTORICUS": [
  "Hypermenes historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "FR. TEL.": [
  "Fragmentum Teliambicum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ET. GEN.": [
  "Etymologicum Genuinum", 
  {}, 
  [
   "IX d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. AEGYPT.": [
  "Iulianus Aegyptus epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSYL.": [
  "Sosylus historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS DE L. VERI BELLO PARTHICO HISTORICUS": [
  "Anonymus de L. Veri bello parthico historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILEM. IUN.": [
  "Philemo Iunior comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCHYT. AMPH.": [
  "Archytas Amphissensis epicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DERCYL. HIST.": [
  "Dercylus historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAES.": [
  "Caesar, Iulius historicus", 
  {
   "Gal": "de bello Gallico"
  }, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ETRUSC.": [
  "Etruscus epigrammaticus", 
  {}, 
  [
   "I d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPHOR.": [
  "Ephorus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MART. POL.": [
  "Martyrium Polycarpi", 
  {
   "Epil. Mosq": "epilogus alter e codice Mosquensi"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMARATUS HISTORICUS": [
  "Demaratus historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHAENNIS UATES": [
  "Phaennis uates", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCIPHR.": [
  "Alciphro epistolographus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOBUL. ALEX.": [
  "Aristobulus Alexandrinus Iudaeus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPH. ET NARC.": [
  "Theophilus et Narcissus scriptores ecclesiastici", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARETE PHILOSOPHA": [
  "Arete philosopha", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHARCH. HIST.": [
  "Agatharchides Samius historicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOC.": [
  "Apocalypsis Iohannis", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHYLLUS ELEGIACUS": [
  "Agathyllus elegiacus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEAENET.": [
  "Cleaenetus tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIL. ITAL.": [
  "Silius Italicus epicus latinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARCELLIN.": [
  "Marcellinus biographus", 
  {
   "Vit. Thuc": "Vita Thucydidis"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERITAS EPIGRAMMATICUS": [
  "Peritas epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GP.": [
  "Geoponica", 
  {}, 
  [
   "X d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TH. CYCL.": [
  "Theogonia Cyclica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLEM. $2": [
  "Polemo sophista", 
  {
   "Cyn": "Cynegirus"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZEN.": [
  "Zenobius paroemiographus", 
  {
   "Ath": "recensio Athoa"
  }, 
  [
   "II d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHRYSIPP. HIST.": [
  "Chrysippus historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NARCISSUS HIEROSOLYMITANUS": [
  "Narcissus Hierosolymitanus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "RUF(IN)US DOMESTICUS EPIGRAMMATICUS": [
  "Ruf(in)us Domesticus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYSIPP.": [
  "Lysippus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTON. ARG.": [
  "Antonius Argiuus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUDOX. CONST.": [
  "Eudoxius Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Exp. Fid": "Expositio fidei"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOPH.": [
  "Apophthegmata", 
  {
   "Apoph. Patr": "Apophthegmata patrum (Collectio alphabetica)", 
   "Apoph. Patr. Al": "Apophthegmata patrum alia", 
   "Apoph. Patr. Sys": "Apophthegmata Patrum (Collectio systematica)", 
   "Apoph. Mac. Aeg": "Apophthegmata Macarii Aegyptii"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "Q. S.": [
  "Quintus Smyrnaeus epicus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PETR. FULL.": [
  "Petrus Antiochenus Fullo scriptor ecclesiasticus", 
  {
   "Ep. Ac": "Epistula ad Acacium Constantinopolitanum"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUCLIDES IAMBOGRAPHUS": [
  "Euclides iambographus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUBOEUS PARIUS": [
  "Euboeus Parius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METROD. $2": [
  "Metrodorus philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATES EPIGRAMMATICUS": [
  "Crates epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CEPHALIO HISTORICUS": [
  "Cephalio historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEM. DIAC.": [
  "Themistius Alexandrinus diaconus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAMPH. H.": [
  "Pamphilus Hierosolymitanus scriptor ecclesiasticus", 
  {
   "Panopl": "Panoplia dogmatica", 
   "Can": "Canones ex Apostolorum in Antiochia synodo"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HONEST.": [
  "Honestus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUN. BERRH.": [
  "Eunomius Berrhoeensis scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DALIO HISTORICUS": [
  "Dalio historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MENECRATES SAMIUS EPIGRAMMATICUS": [
  "Menecrates Samius epigrammaticus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COMETAS CHARTULARIUS EPIGRAMMATICUS": [
  "Cometas Chartularius epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. TRAG.": [
  "Demetrius tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONT. CONST.": [
  "Leontius Constatinopolitanus scriptor ecclesiasticus", 
  {
   "Hom": "Homiliae"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUPHRO COMICUS": [
  "Euphro comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICARCH. HIST.": [
  "Nicarchus historicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHIL.": [
  "Philippus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IREN. GR.": [
  "Irenaeus grammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUS. DOR.": [
  "Eusebius Dorylaeensis scriptor ecclesiasticus", 
  {
   "Libell": "Libellus contra Eutychen"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUOD.": [
  "Euodus epigrammaticus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MELANTH. HIST.": [
  "Melanthius historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXANDR. HIST.": [
  "Anaxandrides historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLIN.": [
  "Clinias philosophus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALYP. CONST.": [
  "Alypius Constatinopolitanus presbyter", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUS. MYND.": [
  "Eusebius Myndius philosophus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "CTESICLES HISTORICUS": [
  "Ctesicles historicus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMUS (ANON. ) $5": [
  "Anonymus (Anon. )", 
  {
   "Sol": "de soloecismo"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUCIUS SEPTIMIUS": [
  "Lucius Septimius", 
  {}, 
  [
   "IV d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "RHETOR.": [
  "Rhetorius astrologus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BIO BUCOLICUS": [
  "Bio bucolicus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "STR.": [
  "Strabo geographus", 
  {
   "Chr": "Chrestomathiae", 
   "Fr. Hist": "Fragmenta historica", 
   "Sch": "Scholia"
  }, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHORONIS POEMA EPICUM": [
  "Phoronis poema epicum", 
  {}, 
  [
   "VII/VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIB. ILL.": [
  "Tiberius Illustrius epigrammaticus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROCL.": [
  "Proclus philosophus", 
  {
   "Phil. Chal": "de Philosophia Chaldaica", 
   "Sch": "Scholia (cit", 
   "Theol. Plat": "Theologia Platonica", 
   "Sacr": "de arte sacro apud Graecos", 
   "H": "Hymni", 
   "in R": "in Platonis Rempublicam commentaria", 
   "in Alc": "in Platonis Alcibiadem", 
   "Hyp": "Hypotyposis", 
   "Vit. Hom": "Vita Homeri", 
   "in Euc": "in primum Euclidis Elementorum librum commentarii", 
   "in Prm": "in Platonis Parmenidem commentarius", 
   "Inst. Phys": "Institutio physica", 
   "Opusc": "Opuscula", 
   "Inst": "Institutio theologica", 
   "ad Hes. Op": "ad Hesiodi Opera et Dies", 
   "Par. Ptol": "Paraphrasis in Ptolemaei Tetrabiblon", 
   "in Cra": "in Platonis Cratylum commentaria"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMETR. BITH.": [
  "Demetrius Bithynius epigrammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHLEG.": [
  "Phlego Trallianus paradoxographus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLISTR.": [
  "Callistratus sophista", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AETH.": [
  "Aethiopis poema epicum", 
  {}, 
  [
   "VIII a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAXILL.": [
  "Praxilla lyrica", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUPHRON. HIST.": [
  "Euphronius historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYC. MED.": [
  "Lycus Neapolitanus medicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDRO TEIUS HISTORICUS": [
  "Andro Teius historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIPHIL.": [
  "Antiphilus epigrammaticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MART. NOT.": [
  "Martyrium sanctorum notariorum Marciani et Martyrii", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "MATRO PITANEUS PARODIUS": [
  "Matro Pitaneus parodius", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAMIPPUS PYTHAGORICUS": [
  "Damippus pythagoricus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOD. RH.": [
  "Diodorus rhetor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERIPL. M. EUX.": [
  "Periplus Maris Euxini", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOCR.": [
  "Xenocrates medicus", 
  {
   "Lap": "de lapidibus"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LESB. RH.": [
  "Lesbonax rhetor", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRATES HIST.": [
  "Crates historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ECHEPHYLIDAS HISTORICUS": [
  "Echephylidas historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BACCH.": [
  "Bacchius musicus", 
  {
   "Harm": "Harmonica introductio"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMOPHILUS ASTROLOGUS": [
  "Demophilus astrologus", 
  {}, 
  [
   "II/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XENOMEDES HISTORICUS": [
  "Xenomedes historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEL. PROM.": [
  "Aelius Promotus medicus", 
  {}, 
  [
   "d. II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THGN. $2": [
  "Theognostus Alexandrinus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta ex libris VII hypotyposeon"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LOLLIAN. EPH.": [
  "Lollianus Ephesius sophista", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TRIPH.": [
  "Triphiodorus epicus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATH. MED.": [
  "Athenaeus medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOPH. BOEOT.": [
  "Aristophanes Boeotus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PATROCL.": [
  "Patrocles Thurius tragicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ONAS.": [
  "Onasander uel Onesander tacticus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SPHAER. STOIC.": [
  "Sphaerus stoicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARM. CONU.": [
  "Carmina Conuiuialia", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PYTHAG.": [
  "Pythagoras philosophus et Pythagorici", 
  {
   "Sim": "Pythagoreorum similitudines", 
   "Ep": "Pythagorae et Pythagoreorum epistulae", 
   "Sent": "Sententiae"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOPH.": [
  "Apollophanes comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOPOMP. HIST.": [
  "Theopompus historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPHR. CHERS.": [
  "EPHRAEM CHERSONENSIS SCRIPTOR ECCLESIASTICUS", 
  {
   "Mir. Clem": "de miraculo Clementis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "*PAMPHILUS ALEXANDRINUS GRAMMATICUS": [
  "*Pamphilus Alexandrinus grammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "RUTIL.": [
  "Rutilius Lupus rhetor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANONYMI (ANON. )": [
  "Anonymi (Anon. )", 
  {
   "Trop": "de tropis"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAXIPH.": [
  "Praxiphanes philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILEM.": [
  "Philemo comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SATYR.": [
  "Satyrus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PL.": [
  "Plato philosophus", 
  {
   "Fr. Trag": "Fragmenta Tragoediarum", 
   "Lg": "Leges", 
   "Plt": "Politicus", 
   "Sch": "Scholia", 
   "Epigr": "Epigrammata", 
   "Prm": "Parmenides", 
   "Virt": "de uirtute", 
   "Phlb": "Philebus", 
   "Men": "Meno", 
   "Tht": "Theaetetus", 
   "Sph": "Sophista", 
   "Grg": "Gorgias", 
   "Epin": "Epinomis", 
   "Ep": "Epistulae"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LUC.": [
  "Lucianus interpres Veteris Testamenti", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICO COMICUS": [
  "Nico comicus", 
  {}, 
  [
   "IV/", 
   "", 
   "", 
   ""
  ]
 ], 
 "BOETH. $2": [
  "Boethus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "*CORPUS PALMOMANTICUM GRAECUM": [
  "*Corpus Palmomanticum Graecum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTON. HAG.": [
  "Antonius hagiographus", 
  {
   "V. Sym. Styl": "Vita Symeonis Stylitis"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. MED.": [
  "Anonymi Medici", 
  {
   "Acut. Chron": "de morbis acutis et chroniis", 
   "Ferr": "Ferramentorum nomina"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERS. $2": [
  "Persicis, Narratio de Rebus", 
  {}, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERS. $3": [
  "Persius poeta latinus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "D. L.": [
  "Diogenes Laertius biographus", 
  {}, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAEC. TREB.": [
  "Caecilia Trebulla lyrica", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PALL. $3": [
  "Palladius medicus", 
  {
   "in Hp": "in Hippocratem", 
   "Febr": "de febribus", 
   "in Gal. Sect": "Scholia in Galeni De Sectis", 
   "in Hp. Fract": "in librum Hippocratis de fracturis"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. VICT.": [
  "Iulius Victor rhetor", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEOBULINA LYRICA": [
  "Cleobulina lyrica", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "METROD. PHIL.": [
  "Metrodorus Lampsacenus philosophus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOLEMAEUS PHILADELPHUS REX, EPISTOLOGRAPHUS": [
  "Ptolemaeus Philadelphus rex, epistolographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "D. CHR.": [
  "Dio Chrysostomus sophista", 
  {
   "Fr": "Deperditae orationis fragmenta"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAT. COD. ASTR.": [
  "Catalogus Codicum Astrologorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILONID.": [
  "Philonides comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AND.": [
  "Andocides orator", 
  {
   "Fr": "Fragmenta", 
   "Myst": "de mysteriis"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL. SERD.": [
  "Iulianus Serdicensis scriptor ecclesiasticus", 
  {
   "Poenit": "Libellus poenitentiae"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUL. SIL.": [
  "Paulus Silentiarius epigrammaticus", 
  {
   "Soph": "descriptio Sanctae Sophiae", 
   "Therm. Pyth": "in thermas Pythicas"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. TRALL.": [
  "Alexander Trallianus medicus", 
  {
   "Oc": "de oculis"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DEMIURGUS EPIGRAMMATICUS": [
  "Demiurgus epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOROTH.": [
  "Dorotheus epicus", 
  {
   "Vis": "Visio", 
   "Abr": "ad Abramo"
  }, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERECTH.": [
  "Erecthius Antiochenus Pisida scriptor ecclesiasticus", 
  {
   "Theoph": "Fragmentum ex homilia in theophaniam"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AUTOCR.": [
  "Autocrates comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAM.": [
  "Damascius philosophus", 
  {
   "Pr": "de principiis", 
   "Hist. Phil": "Historiae Philosophicae fragmenta", 
   "in Prm": "in Platonis Parmenidem", 
   "in Phlb": "in Platonis Philebum", 
   "in Phd": "in Platonis Phaedonem"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AST. AM.": [
  "Asterius Amasenus scriptor ecclesiasticus", 
  {
   "Prod": "in filium prodigum", 
   "Hom": "Homiliae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEAG.": [
  "Theages philosophus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAE. DELPH.": [
  "Paean Delphicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SPINTH.": [
  "Spintharus tragicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYD.": [
  "Lydus, Iohannes Laurentius historicus", 
  {
   "Ost": "de ostentis", 
   "Mag": "de magistratibus", 
   "Mens": "de mensibus"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDROETAS HISTORICUS": [
  "Androetas historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMOMACH.": [
  "Timomachus historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISOC.": [
  "Isocrates orator", 
  {
   "Fr": "Fragmenta", 
   "Sch": "Scholia"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYCR. EPH.": [
  "Polycrates Ephesius scriptor ecclesiasticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OLYMP. $2": [
  "Olympiodorus Alexandrinus scriptor ecclesiasticus", 
  {
   "Iob": "commentarii in Iob"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANT. DIOG.": [
  "Antonius Diogenes scriptor eroticus", 
  {
   "Fr. Pap. Dub": "Fragmentum papyraceum dubium"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUS. EM.": [
  "Eusebius Emesenus scriptor ecclesiasticus", 
  {
   "Fr. Rom. , Cor. , Gal": "Fragmenta in Ep. Rom. , 1Ep. Cor. , Ep. Gal", 
   "Fr. Io. , Act. , 2Petr": "Fragmenta in Eu. Io. , Act. Ap. , 2Ep. Petr", 
   "Oct": "Fragmenta in Octateuchum et Reges"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. SEG.": [
  "Anonymus Seguerianus rhetor", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ERATOSTH.": [
  "Eratosthenes Cyrenaeus uariae scientiae scriptor", 
  {
   "Fr. Geog": "Fragmenta Geographica", 
   "Fr. Hist": "Fragmenta historica", 
   "Cat": "Catasterismi"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. STOIC.": [
  "Apollodorus Seleuciensis stoicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHACELLUS EPIGRAMMATICUS": [
  "Phacellus epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MAXIM.": [
  "Maximianus Constantinopolitanus scriptor ecclesiasticus", 
  {
   "Ep. Tened": "Epistula ad Tenedios"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEO SIC.": [
  "Cleo Siculus lyricus et epicus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "IV a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMYNT.": [
  "Amyntas historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AR.": [
  "Aristophanes comicus", 
  {
   "Fr": "Fragmenta", 
   "Argum": "Argumenta", 
   "V": "Vespae"
  }, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATTAL.": [
  "Attalus grammaticus", 
  {
   "in Arat": "Commentariorum in Aratum reliquiae"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OEDIPODIA": [
  "Oedipodia", 
  {}, 
  [
   "VIII a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAT. $2": [
  "Cato scriptor rei rusticae latinus", 
  {
   "Agr": "de agricultura"
  }, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUP.": [
  "Eupolis comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIMAGORAS HISTORICUS": [
  "Timagoras historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "APHROD.": [
  "Aphrodisius Thespiensis historicus", 
  {}, 
  [
   "helen\u00edst. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "BRYSO PYTHAGORICUS": [
  "Bryso pythagoricus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAE. ERYTHR.": [
  "Paeanes Erythraei", 
  {
   "Pae. Erythr. Seleuc": "Paean Erythraeus in Seleucum"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOCL. $2": [
  "Diocles rhetor", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "XYSTUS III PAPA": [
  "Xystus III papa", 
  {
   "Opif": "de mundi opificio", 
   "Fr": "Fragmenta contra Manichaeos", 
   "Tract": "Epistula tractatoria"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARIPHRO": [
  "Ariphro lyricus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AEL. $2": [
  "Aelianus tacticus", 
  {
   "Tact": "Tactica"
  }, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SAPPH.": [
  "Sappho lyrica", 
  {}, 
  [
   "VII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "THOM.": [
  "Thomas epigrammaticus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HSCH. H.": [
  "Hesychius Hierosolymitanus scriptor ecclesiasticus", 
  {
   "Hom": "Homiliae", 
   "Fr. Ps": "Fragmenta in Psalmos e catenis"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. MEND.": [
  "Ptolemaeus Mendesius historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTID. MIL.": [
  "Aristides Milesius historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PRAXAG.": [
  "Praxagoras historicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARIO LYRICUS": [
  "Ario lyricus", 
  {
   "Epigr": "Epigramma"
  }, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOD. GAD.": [
  "Theodorus Gadareus rhetor", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HYMN. ID. DACT.": [
  "Hymnus ad Idaeos Dactylos", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAROND.": [
  "Charondas philosophus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHINT.": [
  "Phintys pythagorica", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANAXANDR.": [
  "Anaxandrides comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SABIN.": [
  "Sabinus medicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CELS.": [
  "Celsus medicus", 
  {
   "Fr": "Fragmentum"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAIUS ROM.": [
  "Gaius Romanus scriptor ecclesiasticus", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILAGRIUS": [
  "Philagrius", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUHEM.": [
  "Euhemerus Messenius philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZOPYR. HIST. $2": [
  "Zopyrus Magnes historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOSITH. HIST.": [
  "Dositheus historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHERECYD.": [
  "Pherecydes Atheniensis historicus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTIDES HISTORICUS (ARISTID. )": [
  "Aristides historicus (Aristid. )", 
  {
   "Milesiac": "Milesiaca"
  }, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DSC. PH.": [
  "Dioscorides Phacas medicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANT. EP.": [
  "Antiochus Eparches scriptor ecclesiasticus", 
  {
   "Ep": "Epistula ad Nestorium."
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "T. IOB": [
  "Testamentum Iob", 
  {}, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLISTR. HIST.": [
  "Callistratus Domitius historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEUER. $3": [
  "Seuerus philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GORGO HISTORICUS": [
  "Gorgo historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GAUD.": [
  "Gaudentius musicus", 
  {
   "Harm": "Harmonica"
  }, 
  [
   "II/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHAR.": [
  "Charisius Philadelphenus scriptor ecclesiasticus", 
  {
   "Libell": "Libellus"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ASCLEP. AEG.": [
  "Asclepiades Aegyptius historicus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIOTIM.": [
  "Diotimus epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PARMEN.": [
  "Parmenio epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLINIC. MON.": [
  "Callinicus monachus", 
  {
   "V. Hyp": "Vita Hypatii"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EUANG.": [
  "Euangelus comicus", 
  {}, 
  [
   "III a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAULUS GRAMMATICUS LATINUS": [
  "Paulus grammaticus latinus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARCESIL.": [
  "Arcesilaus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "1, 2, 3APOC.": [
  "Apocalypses Iohannis apocryphae", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZEUXIS EPIGRAMMATICUS": [
  "Zeuxis epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. ARGENT.": [
  "Anonymus Argentinensis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTONYM.": [
  "Aristonymus comicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HORAP.": [
  "Horapollo hieroglyphicorum exegeta", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BIO(T)TUS TRAGICUS ET COMICUS": [
  "Bio(t)tus tragicus et comicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SIMYL. $2": [
  "Simylus lyricus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMYNTAS EPIGRAMMATICUS": [
  "Amyntas epigrammaticus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GELL.": [
  "Gellius, Aulus grammaticus latinus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "POLYB. RH.": [
  "Polybius Rhinocolurensis scriptor ecclesiasticus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPHEM. ALEX.": [
  "Ephemerides Alexandri", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHENODOR. TARS.": [
  "Athenodorus Tarsensis historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IO. IEI.": [
  "Iohannes IV Constantinopolitanus Ieiunator", 
  {
   "Paraen": "Paraenesis", 
   "Pseud": "de pseudoprophetis", 
   "Liturg": "de sacra liturgia", 
   "Can": "Syntagma canonum", 
   "Serm": "Sermo de poenitentia"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATH.": [
  "Athenaeus grammaticus", 
  {
   "Epit": "Epitome"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GREG.": [
  "Gregentius Tapharensis scriptor ecclesiasticus", 
  {
   "Leg. Hom": "Leges Homeritarum"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OPP. $2": [
  "Oppianus Apamensis epicus", 
  {
   "C": "Cynegetica", 
   "Sch": "Scholia"
  }, 
  [
   "III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CTESIBIUS CHALCIDENSIS": [
  "Ctesibius Chalcidensis", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DOROTH. $2": [
  "Dorotheus Sidonius astrologus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELIOD. HIST.": [
  "Heliodorus periegeta", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OPP.": [
  "Oppianus Anazarbensis epicus", 
  {
   "H": "Halieutica", 
   "H. Par": "Halieuticorum paraphrasis", 
   "Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLISTONICUS MEDICUS": [
  "Plistonicus medicus", 
  {}, 
  [
   "III a. c.", 
   "", 
   "", 
   ""
  ]
 ], 
 "INC. LESB.": [
  "Incerti auctoris Lesbii fragmenta", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANDROSTH.": [
  "Androsthenes historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "B.": [
  "Bacchylides lyricus", 
  {
   "p. 118: Sch": "Scholia"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODORUS MEDICUS": [
  "Theodorus medicus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEM. AL.": [
  "Clemens Alexandrinus theologus", 
  {
   "Sch": "Scholia"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHRYN. COM.": [
  "Phrynichus comicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOPAT. $2": [
  "Sopater gnomologus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AMM. MARC.": [
  "Ammianus Marcellinus historicus", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACESTODORUS HISTORICUS": [
  "Acestodorus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTOCL. HIST.": [
  "Aristocles historicus et epigrammaticus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. NONN.": [
  "Pseudo Nonnus scriptor ecclesiasticus", 
  {
   "Comm. in Or": "in IV orationes Gregorii Nazianzeni commentarii"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTAEN.": [
  "Aristaenetus historicus", 
  {}, 
  [
   "helen\u00edst.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CYDIAS LYRICUS": [
  "Cydias lyricus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. GEL.": [
  "Apollodorus Gelous comicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SAMUS UEL SAMIUS EPIGRAMMATICUS": [
  "Samus uel Samius epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. ELEG.": [
  "Dionysius Chalcus elegiacus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CALLISTH. SYB.": [
  "Callisthenes Sybarus historicus", 
  {}, 
  [
   "a. Plu.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PEDIASIM.": [
  "Pediasimus mythographus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGEM.": [
  "Hegemo comicus et parodus", 
  {
   "Phil": "Philinna"
  }, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD.": [
  "Apollodorus mythographus", 
  {
   "Hist": "Fragmenta historica", 
   "Fr": "Fragmenta", 
   "Epit": "Epitome"
  }, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CLEARCH.": [
  "Clearchus philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOPH. STOIC.": [
  "Apollophanes stoicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATHENAG.": [
  "Athenagoras Atheniensis scriptor ecclesiasticus", 
  {
   "Res": "de resurrectione mortuorum"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. DIOPH.": [
  "Pseudo Diophantus mathematicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "MNESITH. ATH.": [
  "Mnesitheus Atheniensis medicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALEX. POLYH.": [
  "Alexander Polyhistor historicus", 
  {}, 
  [
   "I a C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MOLPIS HISTORICUS": [
  "Molpis historicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EURYPH.": [
  "Euryphamus pythagoricus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATTIC.": [
  "Atticus philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CAEL. P.": [
  "Caelestinus papa", 
  {
   "Ep. Thds": "Epistula ad Theodosium"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CURT.": [
  "Curtius Rufus, Quintus rhetor e historicus", 
  {}, 
  [
   "I/II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CINEAS HISTORICUS": [
  "Cineas historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYCURG.": [
  "Lycurgus orator", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIG. NIC.": [
  "Antigonus Nicaenus astrologus", 
  {}, 
  [
   "imper. ,", 
   "", 
   "", 
   ""
  ]
 ], 
 "POSIDON.": [
  "Posidonius medicus", 
  {}, 
  [
   "III/IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "VIT. A.": [
  "Vitae Aeschyli", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ISID. PEL.": [
  "Isidorus Pelusiota scriptor ecclesiasticus", 
  {
   "Ep": "Epistulae reliquae"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PS. HDT.": [
  "Pseudo Herodotus biographus", 
  {
   "Vit. Hom": "Vita Homeri"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TER. MAUR.": [
  "Terentianus Maurus grammaticus latinus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEOC. CHIUS": [
  "Theocritus Chius sophista et elegiacus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLOD. $2": [
  "Apollodorus Damascenus mechanicus", 
  {
   "Poliorc": "Commentarius poliorceticus"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEODOS.": [
  "Theodosius Alexandrinus grammaticus", 
  {
   "Sp": "Spuria", 
   "Exc. Dial": "Excerptum", 
   "Can": "Canones"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BARBILLUS SIUE BALBILLUS ASTROLOGUS": [
  "Barbillus siue Balbillus astrologus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SYM. STYL. IUN.": [
  "Symeo Stylites Iunior scriptor ecclesiasticus", 
  {
   "Imag": "de sacris imaginibus", 
   "Ascet": "Sermones ascetici"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIODORUS SCRIPTOR <I>CORINTHIACORUM</I>": [
  "Diodorus scriptor <I>Corinthiacorum</I>", 
  {
   "Co": "Corinthiaca"
  }, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MONIMUS PARADOXOGRAPHUS": [
  "Monimus paradoxographus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORIB.": [
  "Oribasius medicus", 
  {
   "ad loc": "ad loc"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SENT. AP.": [
  "Sententiae Apostolorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "BLEMYOM.": [
  "Blemyomachia", 
  {}, 
  [
   "V d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "CHARO NAUCR.": [
  "Charo Naucratius historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTO HIST.": [
  "Aristo historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIPHO TRAG.": [
  "Antipho tragicus", 
  {}, 
  [
   "V/IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANON. HIER.": [
  "Anonymus Hierosolymitanus scriptor ecclesiasticus", 
  {
   "Luc": "Fragmenta in Eu. Luc"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TAT.": [
  "Tatianus apologeta", 
  {
   "Diat": "Diatessaron (fragmentum)", 
   "Orat": "Oratio ad Graecos", 
   "Fr": "Fragmenta"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORPH.": [
  "Orphica", 
  {
   "A": "Argonautica", 
   "h. ad Mus": "Hymnus ad Musaeum", 
   "Fr": "Fragmenta", 
   "L. Ker": "Lithica Kerygmata", 
   "Th": "Theogonia apud papyrum in Derveni repertam"
  }, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYCO": [
  "Lyco uel Lycus pythagoricus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. CHAL.": [
  "Dionysius Chalcidensis historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENODOTUS STOICUS EPIGRAMMATICUS": [
  "Zenodotus Stoicus epigrammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOCL.": [
  "Nicocles Laco historicus", 
  {}, 
  [
   "a. I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIALOGI": [
  "Dialogi", 
  {
   "Dial. Tim. et Aquil": "Dialogus Timothei et Aquilae", 
   "Dial. Mont. et Orth": "Dialogus montanistae et orthodoxi"
  }, 
  [
   "IV d. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "HELL. OXY.": [
  "Hellenica Oxyrhynchia", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "COLLUTHUS SCRIPTOR ECCLESIASTICUS": [
  "Colluthus scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta uaria"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYSOPHANES HISTORICUS": [
  "Dionysophanes historicus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "ANTIGEN.": [
  "Antigenes historicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ONAT.": [
  "Onatas pythagoricus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BEROS.": [
  "Berosus historicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ORUS GRAMMATICUS": [
  "Orus grammaticus", 
  {
   "Att": "Atticarum vocum collectio", 
   "Orth": "de orthographia"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPHIPP.": [
  "Ephippus comicus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THEO SM.": [
  "Theo Smyrnaeus philosophus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GALL.": [
  "Gallus Caesar epistolographus", 
  {
   "Ep": "Epistula ad Iulianum imperatorem"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOLLONID. TRAG.": [
  "Apollonides tragicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ATH. HIST.": [
  "Athenaeus historicus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HARP. ASTR.": [
  "Harpocratio medicus et astrologus", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTON.": [
  "Aristonicus Alexandrinus grammaticus", 
  {
   "Fr. Hist": "Fragmenta historica", 
   "Od": "de signis Odysseae", 
   "Il": "de signis Iliadis"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MONTANUS ET MONTANISTAE (MONTAN. )": [
  "Montanus et Montanistae", 
  {
   "Orac": "Oracula"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MACR.": [
  "Macrobius grammaticus", 
  {
   "Exc": "Excerpta", 
   "Sat": "Saturnalia"
  }, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HEGESIAS CYR.": [
  "Hegesias Cyrenaeus philosophus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "TIM. BERYT.": [
  "Timotheus Berytensis scriptor ecclesiasticus", 
  {
   "Fr": "Fragmenta"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IUL.": [
  "Iulianus imperator", 
  {
   "Mis": "Misopogo", 
   "Gal": "contra Galilaeos", 
   "Ep": "Epistulae", 
   "Fr": "Fragmentum"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APIO GRAMMATICUS": [
  "Apio grammaticus", 
  {
   "Fr. Hist": "Fragmenta historica", 
   "ad Hom": "Apionis quae ad Homerum pertinent fragmenta"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NICOL. COM.": [
  "Nicolaus comicus", 
  {}, 
  [
   "II a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHILOXEN.": [
  "Philoxenus scriptor ecclesiasticus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PLACIT.": [
  "Placita Philosophorum", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "TITANOMACH.": [
  "Titanomachia poema epicum", 
  {}, 
  [
   "VII a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "OLYMP. HIST.": [
  "Olympiodorus historicus", 
  {}, 
  [
   "IV/V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "GERM.": [
  "Germanicus Caesar epigrammaticus", 
  {
   "Arat": "Aratea"
  }, 
  [
   "I a. C. /", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARETAD.": [
  "Aretades Cnidius historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PERIPL. M. RUBRI": [
  "Periplus Maris Rubri", 
  {}, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BATO COMICUS": [
  "Bato comicus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CRITO COM.": [
  "Crito comicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "AGATHO EPIGR.": [
  "Agatho epigrammaticus", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEONT. MON.": [
  "Leontius Monachus scriptor ecclesiasticus", 
  {
   "Nat": "Encomium in natale sancti Iohannis prophetae"
  }, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CONST. APP.": [
  "Constitutiones apostolorum", 
  {}, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "NONNOS.": [
  "Nonnosus historicus", 
  {}, 
  [
   "VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "EPILOGUS MOSQUENSIS": [
  "Epilogus Mosquensis", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. CYR.": [
  "Ptolemaeus Cyrenaeus medicus", 
  {}, 
  [
   "II/I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "D. C.": [
  "Dio Cassius historicus", 
  {
   "Epit. Xiph": "Epitome Xiphilini"
  }, 
  [
   "II/III d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IASO CYR.": [
  "Iaso Cyrenaeus historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "APOSTOL.": [
  "Apostolius paroemiographus", 
  {}, 
  [
   "XV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENOD. TROEZ.": [
  "Zenodotus Troezenius historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PAUS.": [
  "Pausanias periegeta", 
  {
   "Sch": "Scholia"
  }, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ZENOD.": [
  "Zenodotus grammaticus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ACUS.": [
  "Acusilaus historicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "IBYC.": [
  "Ibycus lyricus", 
  {}, 
  [
   "VI a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LYC.": [
  "Lycophro sophista", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CILLACTOR": [
  "Cillactor", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "GALEOM.": [
  "Galeomyomachia", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PHORM.": [
  "Phormus uel Phormis comicus", 
  {}, 
  [
   "VI/V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DIONYS. MINOR": [
  "Dionysius Syracusius elegiacus", 
  {}, 
  [
   "IV a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ALCIMENES COMICUS": [
  "Alcimenes comicus", 
  {}, 
  [
   "III a C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SOSICR. HIST.": [
  "Sosicrates historicus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "MARIN.": [
  "Marinus biographus", 
  {
   "Procl": "Vita Procli"
  }, 
  [
   "V/VI d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "CARPH.": [
  "Carphyllides epigrammaticus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "THOM. MAG.": [
  "Thomas Magister grammaticus", 
  {}, 
  [
   "XIII/", 
   "", 
   "", 
   ""
  ]
 ], 
 "SABIN. $2": [
  "Sabinus Constantiensis scriptor ecclesiasticus", 
  {
   "Ep": "Epistula"
  }, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BACIS EPIGRAMMATICUS": [
  "Bacis epigrammaticus", 
  {}, 
  [
   "VI/V a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "PTOL. EPITH.": [
  "Ptolemaeus Epithetes grammaticus", 
  {}, 
  [
   "II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTO AL.": [
  "Aristo Alexandrinus philosophus", 
  {}, 
  [
   "I a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROXEN. $2": [
  "Proxenus historicus", 
  {
   "Chal": "Chalcidica"
  }, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SEREN.": [
  "Serenus geometra", 
  {
   "Sect. Cyl": "Sectio cylindri"
  }, 
  [
   "IV d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "PROMATHID.": [
  "Promathidas historicus", 
  {}, 
  [
   "IV/III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "LEX. PAR. GR.": [
  "Lexique de botanique. Parisinus Graecus 1419", 
  {}, 
  [
   "", 
   "", 
   "", 
   ""
  ]
 ], 
 "STRAT.": [
  "Strato epigrammaticus", 
  {}, 
  [
   "II d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "BATO SINOP.": [
  "Bato Sinopensis historicus", 
  {}, 
  [
   "III/II a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "SELEUC.": [
  "Seleucus grammaticus et historicus", 
  {
   "Fr. Hist": "Fragmenta historica", 
   "Fr": "Fragmenta"
  }, 
  [
   "I d. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "DION. CALLIPH.": [
  "Dionysius Calliphontis filius geographus", 
  {}, 
  [
   "I a. C. ?", 
   "", 
   "", 
   ""
  ]
 ], 
 "DAM. MUS.": [
  "Damo musicus", 
  {}, 
  [
   "V a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "HIERONYM. PHIL.": [
  "Hieronymus Rhodius philosophus", 
  {}, 
  [
   "III a. C.", 
   "", 
   "", 
   ""
  ]
 ], 
 "ARISTAENET.": [
  "Aristaenetus epistolographus", 
  {}, 
  [
   "V d. C.", 
   "", 
   "", 
   ""
  ]
 ]
};

