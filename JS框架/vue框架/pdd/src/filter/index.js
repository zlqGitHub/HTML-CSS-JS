import Vue from 'vue';

Vue.filter("phoneFormat",(phone) => {
  if(phone === undefined){
    return;
  }
  phone = phone.split("")

  for(let i = 0; i < phone.length; i++){
    if(i == 3 || i == 4 || i == 5 || i == 6){
      phone[i] = "*";
    }
  }
  // console.log(phone.join(""));
  return phone.join("");
})
