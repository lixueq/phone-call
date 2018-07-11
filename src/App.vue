<template>
    <div id="app">
       <my-header custom-title="通讯录" custom-fixed></my-header> 
       <my-list :user-data=userData></my-list>
    </div>
    
</template>

<script>
 var userData=[
           {"index":"A",
            "users":[
                {"name":"a1","phone":"15149223466"},
                {"name":"a2","phone":"13525653655"},
                {"name":"a3","phone":"16352642597"}
           ]},
           {"index":"B",
            "users":[
                {"name":"b1","phone":"13159262345"},
                {"name":"b2","phone":"15468467985"},
                {"name":"b3","phone":"13006435200"}
           ]},
           {"index":"C",
            "users":[
                {"name":"c1","phone":"13465956888"},
                {"name":"c2","phone":"13232526986"},
                {"name":"c3","phone":"13965846752"}
           ]},
           {"index":"D",
            "users":[
                {"name":"d1","phone":"15149223466"},
                {"name":"d2","phone":"18965689458"},
                {"name":"d3","phone":"16111111111"}
           ]},
           {"index":"E",
            "users":[
                {"name":"e1","phone":"13456996232"},
                {"name":"e2","phone":"19865846752"},
                {"name":"e3","phone":"16845483212"}
           ]},
           {"index":"F",
            "users":[
                {"name":"f1","phone":"15552565555"},
                {"name":"f2","phone":"19233330000"},
                {"name":"f3","phone":"15858586565"}
           ]},
           {"index":"G",
            "users":[
                {"name":"g1","phone":"13065352959"},
                {"name":"g2","phone":"16598659865"},
                {"name":"g3","phone":"15699998888"}
           ]},
           {"index":"H",
            "users":[
                {"name":"h1","phone":"13798653204"},
                {"name":"h2","phone":"13589751318"},
                {"name":"h3","phone":"13625648841"}
           ]},
           {"index":"I",
            "users":[
                {"name":"i1","phone":"13765324552"},
                {"name":"i2","phone":"13963682314"},
                {"name":"i3","phone":"16535346123"}
           ]},
           {"index":"J",
            "users":[ 
                {"name":"j1","phone":"18789600136"},
                {"name":"j2","phone":"13698658437"},
                {"name":"j3","phone":"13500123456"}
           ]},
           {"index":"K",
            "users":[
                {"name":"k1","phone":"13401609938"},
                {"name":"k2","phone":"18742059534"},
                {"name":"k3","phone":"15698742563"}
           ]}
        ]
export default {
  name: 'app',
  data () {
      return {
        userData:userData
      }
  }
}
</script>
  
<style>
    *{margin: 0;padding:0}
    li{text-decoration: none ;list-style-type: none;}
    /* body{height:2000px;} */
</style>
