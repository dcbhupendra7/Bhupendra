import kalinchwok from '../../assets/img/kalinchwok2.jpg';
import durbar from '../../assets/img/durbarsquare1.jpg';
import chitwan from '../../assets/img/chitwan2.jpg';
import manang from '../../assets/img/manang1.jpg';
import annapurna from '../../assets/img/annapurna1.jpg';
import rara from '../../assets/img/Rara1.jpg';
import phoksundo from '../../assets/img/phoksundo1.jpg'
import lumbini from '../../assets/img/lumbini1.jpg'
import everest from '../../assets/img/everest1.jpg'

import pokhara from '../../assets/img/pokhara1.jpg'


export default [
  {
    id: 1,
    city: "Kathmandu",
    img: durbar,
    name: "Durbar Square Package",
    start:"Birgunj",
    info:"Kathmandu, also called the city of temples, is the capital of Nepal. Along with mordern city like atmosphere, the valley is also rich in culture which can be seen by the three Durbar Squares. It shows the traces of what it was like in Malla period."
    ,packages:[{id:1,day:3,price:6000,info:'Complete tour of Kathmandu,Patan and Bhaktapur Durbar Square.'}]
  },
  {
    id: 2,
    city: "Dolkha",
    img: kalinchwok,
    name: "Kalinchowk Treking Package",
    start:"Kathmandu",
    info:"Dolakha has been one of the most popular trekking among travellers in Kathmandu as it is not to difficult to climb and devotees can reach the top easily. It has the maximun altitude of 3700 metre from sealevel."
    ,packages:[{id:1,day:3,price:6000,info:'Hiking starts from Kuriko Chowk.'},
    {id:2,day:4,price:8000,info:'Hiking starts from Dolakha.'}]
  },
  {
    id: 3,
    city: "Chitwan",
    img: chitwan,
    name: "Chitwan National Park Package",
    start:"kathmandu",
    info:"Chitwan National Park is a preserved area in the Terai Lowlands of south-central Nepal. known for its biodiversity. Its dense forests and grassy plains are home to rare mammals like one-horned rhinos and Bengal tigers. The park shelters numerous bird species, including the giant hornbill. Dugout canoes traverse the northern Rapti River, home to crocodiles. Inside the park is Balmiki Ashram, a Hindu pilgrimage site."
    ,packages:[{id:1,day:3,price:12000,info:'jeep safaris, bird watching, canoe riding,Observe culture of one of the ethnic group of Nepal, Tharu. See bore, leopard, one horned rhinoceros, Royal Bengal Tige'},
              {id:2,day:5,price:18000,info:'See the natural wildlife and do jungle activities. jeep safaris, bird watching, canoe riding,Observe culture of one of the ethnic group of Nepal, Tharu. See bore, leopard, one horned rhinoceros, Royal Bengal Tige'}]
  },
  {
    id: 4,
    city: "Manang",
    img: manang,
    name: "Manang Trek Package",
    start:"Kathmandu",
    info:"Manang is a beautiful place of Nepal. It is less densly populated district of Nepal. Manang is famous for trekking. Manang is a hidden beauty located in a remote village. Tilicho lake, Gangapurna lake and Glacier, Hills and Mountains are tourist's favourite"
    ,packages:[{id:1,day:5,price:18000,info:'Trek to remote villages, sightseeing Hills and Mountains'}
                ,{id:2,day:8,price:25000,info:'Trek to remote villages, sightseeing Hills and Mountains and Hike to beautiful Tilicho lakes' }]

  }, 
  {
  id:5,
  city: "Kapilvastu",
  img: lumbini,
  name: "Lumbini Package",
  start: "Kathmandu",
  info:"Lumbini, the Birthplace of the Lord Buddha. Siddhartha Gautama, the Lord Buddha, was born in 623 B.C. in the famous gardens of Lumbini, which soon became a place of pilgrimage. Among the pilgrims was the Indian emperor Ashoka, who erected one of his commemorative pillars there."
  ,package:[{id:1,day:3,price:10000,info:'Sightseeing Lumbini and its ancient and cultural heritages.'}
            ,{id:2,day:5,price:15000,info:'Sightseeing Lumbini and its ancient and cultural heritages.'}]
  },
  {
    id:6,
    city: "Kaski",
    img: pokhara,
    name: "Pokhara Package",
    start: "Kathmandu",
    info:"Pokhara is a beautiful city lies in Western Part of Nepal. It is the most popular tourist destination in Nepal. Pokhara is city of lakes as many lakes like Fewa lake, Begnas Lake, Rupa lake etc lies. There are many things to do in Pokhara for travellers."
    ,package:[{id:1,day:2,price:10000, info:'Sightseeing Pokhara city and its lakes, Zipline and boating'}
              ,{id:2,day:4,price:18000, info:'Sightseeing Pokhara city and its lakes, Zipline, boating and paragliding'}
  ]
},

{
  id:7,
  city: "Solukhumbu",
  img: everest,
  name: "Everest Base Camp Package",
  start: "Kathmandu",
  info:"Mt.Everest is the top peak of the world lies on Solukhumbu district of Nepal. That is why it is famous for climbing one of tallest peak in the world. Travel even prefer to stalk around the Everest Base Camp and other mountains near it."
  ,Package:[{id:1,day:5,price:25000, info:'Trekking to Base Camp from Namche Bazar'}
            ,{id:2,day:8,price:35000, info:'Trekking to Base Camp from Namche Bazar, Sight seeing other Mountains near Everesta'}]

  },
  {
    id:8,
    city: "",
    img: annapurna,
    name: "Annapurna Base Camp Package",
    start: "Kathmandu",
    info:"Mt.Annapurna is one of the top ten highest peak on the world. Annapurna lies on north of Pokhara city. It is one of the tourist destination for  trekking and sightseeing the mountains."
    ,package:[{id:1,day:5,price:20000, info:'Trekking to Annapurna Base Camp and its other sanctuary'}
              ,{id:2,day:8,price:30000, info:'Trekking to Annapurna Base Camp and its other sanctuary and Mt.Machhapuchchhre, Tilicho peak '}
  ]
  }

];
