<template>
   <div id="alert" ref="alertBox">
    <div class="alert-content">
            <div class="alert-title">{{alertTitle}}</div>
            <div class="alert-body">{{newPhone}}</div>
            <div class="alert-btn">
                <button v-if="comfirm" @touchstart="comfirm">确定</button>
                <button v-if="cancel" @touchstart="cancel">取消</button> 
            </div>   
    </div>         
    </div>
</template>
<script>
    export default{

    }
</script>
<style>

     #alert{width:100%;height: 100%; top:0;left: 0; display:flex;background: rgba(0,0,0,.5);position: fixed;z-index: 999;}
    #alert .alert-content{width:200px;position:relative;height:150px; margin: auto;background: #fff;border: 1px solid #ccc;border-radius: 5px}
    #alert .alert-title{padding-left:15px;height:35px;line-height:35px;border-bottom: 1px solid #ccc}
    #alert .alert-body{height:60px;line-height:60px; text-align: center}
    #alert .alert-btn{ position:absolute;left:0;right:0;margin: auto;text-align: center}
    #alert .alert-btn button{padding:5px ;margin:5px;}
</style>