const app = Vue.createApp({
  data(){
    return {
      name: 'Tornike',
      age: '25',
      agePlusFive: '30',
      img: 'https://stickerly.pstatic.net/sticker_pack/PQEbA06NLcQ7reKUeFtK0g/9I87N5/2/08cebe44-befc-4883-b0a8-913d0225db72.png'
       
    }
    
  },
  methods: {
    favNumber() {
     const random = Math.random()
     return random
    }
  }
})
app.mount('#assignment')