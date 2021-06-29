<template lang="">
 <div>
    <h1>Products</h1>
    <h2>{{id}}</h2>
    <pre>18:'Shoes',
   26:'T-Shirts',
37:'Pants',
    </pre>
    
 </div>
</template>
<script>
const products = {
    18:'Shoes',
    26:'T-Shirts',
    37:'Pants',
};
export default {
  computed: {
    id() {
        //params為路徑的一部分
        //return this.$route.params.midasNum;
        return products[this.$route.params.midasNum]

        //localhost:8080/#/products?id=18
        //我想抓?後面的值，需要用到query
        //query是問號("?")後面
        // return products[this.$route.query.midasNum]
    },
  },
};
</script>
<style lang="">
    div{
        text-align: center;
    }
</style>