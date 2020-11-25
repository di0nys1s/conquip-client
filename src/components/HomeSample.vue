<template>
  <div id="main">
    <h1>Conquip Case Manager</h1>
    <p>Number: {{ randNumber }}</p>
    <button @click="generateNumber">Generate Number</button>
    <p v-once>Welcome to {{ myName }}'s home</p>
    <p>Welcome to {{ myName }}'s home</p>
    <input :value="randNumber" @input="changeInputNumber($event)">
    <br />
    <br />
    <h3>My lucky number is {{ randNumber }}</h3>
    <input v-model="randNumber">
    <ul>
      <li :key="p" v-for='p in programmingLangs'>{{ p }}</li>
    </ul>
    <ul>
      <li :key="index" v-for='(c, index) in companies'>{{ index + 1 }}. {{ c.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeSample',
  props: {
    msg: String
  },
  data() {
    return {
      myName: 'Burak Seyhan',
      programmingLangs: ['Java', 'C#', 'JavaScript'],
      companies: [
        {
          name: 'AEFIS'
        },
        {
          name: 'iGenius'
        }
      ],
      randNumber: Math.random().toFixed(1)*10,
      inputValue: 1,
      keywords: [],
      index: 0,
      
    }
  },
  beforeCreate() {
    console.log('beforeCreate() executed')
  },
  created() {
    console.log('created() function executed')
  },
  beforeMount() {
    console.log('beforeMount() executed')
  },
  mounted() {
    console.log('mounted() executed')
    this.myName = "Bruce Seyhan"
  },
  beforeUnmount() {
    // 
  },
  onUnmounted() {
    // 
  },
  methods: {
    generateNumber() {
      const randNumber = Math.random().toFixed(3)*1000
      this.randNumber = randNumber
    },
    /*
    changeInputNumber(e) {
      console.log(e.target.value);
      this.randNumber = e.target.value
    }
    */
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
