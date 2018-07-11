import Vue from "vue"
import Alert from "./Alert.vue"



var myAlert=(function(){
    var defaults={
    title:"弹窗",
    body:"",
    confirm:null,
    cancel:null
};
var MyComponent=Vue.extend(Alert);
 return function(opts){
     for(var attr in opts){
         defaults[attr]=opts[attr]
     }
     var amv=new MyComponent({
         el:document.createElement("div"),
         data:{
             alertTitle:defaults.title,
             newPhone:defaults.body,
             comfirm:defaults.comfirm,
             cancel:defaults.cancel
         }
     });
     document.body.appendChild(amv.$el)

 }
})()
export default myAlert;