<template>
  <div class="block_white" id="testimonials">
    <div class="container">
      <h2 class="heading heading_green">отзывы</h2>
      <!-- <div id="vk_comments"></div> -->
      <div id="fb_comments">
        <div class="fb-comments" data-href="https://pro-policy.ru" data-width="100%" data-numposts="5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { injectVKOpenApi, initVK } from "../vknt.js"
export default {
  name: 'Testimonials',
  mounted() {
    // injectVKOpenApi()
    //   .then(initVK(true))
    //   .then(() => {
    //     VK.Widgets.Comments("vk_comments", { limit: 5, attach: "*" })
    // });
  }
}
</script>

<style>
  #fb_comments{
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>