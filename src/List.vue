<template>
    <div id="my_list">   
        <ul class="list_user" ref="userList" @touchmove="isMove=true">    
            <li v-for="item in userData">    
                <p>{{item.index}}</p>    
                <ul v-for="user in item.users">    
                    <li @touchend="showPhone(user.phone)">{{user.name}}</li>   
               </ul>    
            </li>
        </ul>    
        <ul class="list_index" ref="listIndex">   
            <li @touchstart="setScroll" v-for="item in userIndex">{{item}}</li>    
        </ul>
    
    </div>
</template>
<script>
    import myAlert from "./Alert.js"
    export default {    
        name: "my-list",
        props:{
            "user-data":{
               type:Array,
               default:function(){
                   return []
               }
            }
         },
         computed:{
            userIndex:function(){
                return  this.userFilter(this.userData)
            }
         },
         methods:{
             userFilter:function(data){
                 var result=[];
                  for(var i=0;i<data.length;i++){
                      if(data[i].index){
                          result.push(data[i].index)
                      }
                  }
                  return result;
             },
             setListIndxPos:function(){
                 var HI=this.$refs.listIndex.offsetHeight;
                 this.$refs.listIndex.style.marginTop=-HI /2+"px";
             },
             setScroll:function(ev){
                  var aP=this.$refs.userList.getElementsByTagName("p");
                  for(var i=0;i<aP.length;i++){
                      if(aP[i].innerHTML==ev.target.innerHTML){

                        document.documentElement.scrollTop=aP[i].offsetTop;
                          document.body.scrollTop=aP[i].offsetTop;

                      }
                  }
                 
             },
             showPhone:function(phone){
                 if(!this.isMove){
                   myAlert({
                       title:"呼叫",
                       body:phone,
                       comfirm:function(){
                           alert(1)
                       },
                       cancel:function(){
                           document.body.removeChild(document.getElementById("alert"))
                       }
                   })
                 }else{
                     this.isMove=false
                 }
                 
            }
         },
         mounted:function(){
             this.setListIndxPos();
         }
    }
</script>
<style>
    div#my_list {  position: relative  ;top: 40px;}
    #my_list .list_user p{ padding-left: 15px;background: #ccc;height: 35px;line-height: 35px;}
    #my_list .list_user ul li{ padding-left: 15px;border-bottom:1px solid #ccc;height: 45px;line-height: 45px;}
    #my_list .list_index li{font-size:16px; line-height: 30px;line-height: 30px;}
    #my_list .list_index { position: fixed; top:50%; right:15px}
</style>