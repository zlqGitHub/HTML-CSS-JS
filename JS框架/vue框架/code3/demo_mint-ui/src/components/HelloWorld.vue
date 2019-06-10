<template>
  <div class="hello">
    <mt-button type="default" @click="openPicker">default</mt-button>
    <mt-button type="primary" @click.native="handleClick">primary</mt-button>
    <mt-button type="danger">danger</mt-button>

    <mt-datetime-picker
      ref="picker"
      type="time"
      v-model="pickerValue">
    </mt-datetime-picker>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      pickerValue:'9'
    }
  },
  methods:{
    handleClick(){
      alert("哈哈");
    },
    openPicker() {
      this.$refs.picker.open();
    }
  }
}
</script>


<style scoped>

</style>
