<template>
  <div id="app">
    <Students v-bind:studentInfo="students"/>
  </div>
</template>

<script>
import Students from './components/Students.vue'
export default {
  name: 'App',
  components: {
    Students,
  },
  data(){
    return {
      students: [
        {
          "studentId": "614234003",
          "FirstName": "Amornkit",
          "LastName": "Ruyan",
          "weight": 65,
          "height": 169,
          "picture": "https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.0-9/1185745_226124494211387_1384882853_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_eui2=AeHQhFehrWSK2ITSjeIRPP_tBnXS4w1tKgkGddLjDW0qCd2SXbiT6n1cLDMsYsgHy4HAZKXqkSYuPbd2j1F2jgsr&_nc_ohc=HL8k0S7pBhwAX-a4xjq&_nc_ht=scontent.fhdy3-1.fna&oh=54b9a25e46997406e8048039c4c02075&oe=6031F912",
        },
        {
          "studentId": "614234020",
          "FirstName": "Wuttichai",
          "LastName": "Siriwat",
          "weight": 65,
          "height": 172,
          "picture": "https://scontent.fhdy3-1.fna.fbcdn.net/v/t1.0-9/10931537_1538715713048942_4784596406182652501_n.jpg?_nc_cat=108&ccb=2&_nc_sid=174925&_nc_eui2=AeFDDNw6BOsU12SNjiRMOB5RACy3xgdQU_UALLfGB1BT9adf-4mbvvELIv0fPmclGoB6nBBLivcap55noNrC7Q1a&_nc_ohc=FjFqN2Vt2VwAX-_sW53&_nc_ht=scontent.fhdy3-1.fna&oh=c5975d3969b1ab4712f8a9fdabf6370b&oe=60337149",
        },
        {
          "studentId": "624234001",
          "FirstName": "Chanathip",
          "LastName": "Chuechit",
          "weight": 95,
          "height": 165,
          "picture": "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/71302469_2379482582322105_6341678719039438848_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=k0b8lt3pPaIAX-m-1Ns&_nc_ht=scontent.fbkk12-2.fna&oh=0213299d1ea939457fd826bb06031902&oe=60314503",
        },
        {
          "studentId": "614234005",
          "FirstName": "Suhaiming",
          "LastName": "Arsi",
          "weight": 43,
          "height": 165,
          "picture": "https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.15752-9/141709094_427831091751579_2398753259120547444_n.jpg?_nc_cat=108&ccb=2&_nc_sid=ae9488&_nc_ohc=oEXXyYpaIfcAX8onMDx&_nc_ht=scontent.fbkk13-1.fna&oh=9e0bc87a5ff7046c5d4cbcbbc4d2cd73&oe=6030343A",
        },
        {
          "studentId": "614234009",
          "FirstName": "Thanyarat",
          "LastName": "Promthong",
          "weight": 63,
          "height": 155,
          "picture": "https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.15752-9/142351283_922632495142204_4851159821185173709_n.jpg?_nc_cat=102&ccb=2&_nc_sid=ae9488&_nc_ohc=Y3G6Rhke_4kAX8iaS1T&_nc_ht=scontent.fbkk12-3.fna&oh=489053f101d816b9854a6ccf122b37d2&oe=60336D3B",
        }
      ]
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@400;500&display=swap');

#app {
  font-family: 'Kanit', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>