<template>
  <div class="block_white" id="testimonials">
    <div class="container">
      <h2 class="heading heading_green">отзывы</h2>
      <div id="vk_comments"></div>
    </div>
  </div>
</template>

<script>
import { injectVKOpenApi, initVK } from "../vknt.js"
export default {
  name: 'Testimonials',
  mounted() {
    injectVKOpenApi()
      .then(initVK(true))
      .then(() => {
        VK.Widgets.Comments("vk_comments", { limit: 5, attach: "*" })
    });
  }
}
</script>

<style>

</style>