<template>
    <div class="show">
      {{item}}
    </div>
</template>

<script>
    export default {
        name: "componentA",
      data(){
          return{
            item:"componentA"
          }
      }
    }
</script>

<style scoped>
.show{
  color: salmon;
  font-size: 40px;
}
</style>
