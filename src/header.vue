<template>
    <div id="header"  :style="{'position':customFixed?'fixed':'static'}">
        <button>返回</button>
        {{customTitle}}
        <button>主页</button>
    </div>
</template>

<script>
export default {
  name: 'my-header',
  props:{
            "customTitle":{
                type:String,
                default:"标题"
            },
            'customFixed':{
                type:Boolean,
                default:false
            }
        }
}
</script>
  
<style>
    #header{width:100%;height:40px;background:rgba(0,0,0,0.6);color:#fff;text-align: center;line-height: 40px; z-index:333;position: fixed;top:0px;}
    #header button{height:100%;padding:0 5px;}
    #header button:nth-of-type(1){float: left; }
    #header button:nth-of-type(2){float:right;}

</style>
