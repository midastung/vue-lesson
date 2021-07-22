<template >
  <div>
    <span>{{ connected }}</span>
    <InfiniteScroll :pictures="pictures" :next="getAlbum" />
  </div>
</template>
<script>
import InfiniteScroll from "./InfiniteScroll";
export default {
  components: {
    InfiniteScroll,
  },
  data() {
    return {
      connected: false,
      pictures: [],
      after: "",
    };
  },
  methods: {
    connect() {
      FB.login(this.statusGet);
    },
    statusGet(result) {
      if (result.status === "connected") {
        this.connected = true;
        this.getAlbum();
      }
    },
    getAlbum() {
      return new Promise((resolve) => {
        FB.api(
          "/1864292530492653/photos",
          {
            fields: ["picture"],
            after: this.after,
          },
          (result) => {
            this.pictures = this.pictures.concat(
              result.data.map((item) => item.picture)
            );
            this.after = result.paging.cursors.after;
          });
          resolve();
      });
    },
  },
  mounted() {
    FB.init({
      appId: 182706955649650,
      version: "v2.12",
    });
    FB.getLoginStatus(this.statusGet);
  },
};
</script>
<style lang="">
</style>