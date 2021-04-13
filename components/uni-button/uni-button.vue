<template>
    <button :class="className"><slot></slot></button>
</template>

<script>
    export default {
        name: "uni-button",
        props:{
            className:{
                type:String,
                default:""
            }
        }
    }
</script>

<style scoped>
</style>
