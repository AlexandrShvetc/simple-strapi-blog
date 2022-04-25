<template>
  <footer class="footer_bg">
    <div>
      <div class="marquee">
        <div class="footer_menu_item">
          Digital product design Remote work UX design Distributed teams Creativity Strategy Suspense Growth
        </div>

      </div>
      <div class="footer_info_item mt-5">
        <h3 class="mb-3 text-center">NORDIC ROSE</h3>
        <div class="text_decor"> ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat
          egestas efficitur.
          In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus.
        </div>
        <div class="link_social_network_item mt-3">
          <a class="link_social_network" href="">Twitter</a>
          <a class="link_social_network" href="">LinkedIn</a>
          <a class="link_social_network" href="">RSS</a>
        </div>
        <div class="text-center mt-3 md-5">© 2012–2020 Nordic Rose Co. All rights reserved.</div>
      </div>


    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer_bg {
  background: black;
  padding-bottom: 40px;
  color: white;
  margin-top: 60px;
}

.text_decor {
  text-align: center;
}

.marquee {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.link_social_network_item {
  display: flex;
  justify-content: space-around
}

.link_social_network {
  color: white;
}

.footer_info_item {
  margin: auto;
  width: 50%;
}

.footer_menu_item {
  word-spacing: 50px;
}

.marquee div {
  color: #ffffff;
  font-size: 25px;
  display: inline-block;
  padding-left: 100%;
  -webkit-animation: marquee 10s infinite linear;
  animation: marquee 10s infinite linear;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%)
  }
}


@media (max-width: 991px) {

  .footer_info_item {
    margin: auto;
    width: 90%;
  }
}
</style>