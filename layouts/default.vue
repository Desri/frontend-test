<template>
  <section>
    <Header-Menu />
    <div class="main-container flex flex-col gap-20 md:my-5">
      <nuxt />
    </div>
  </section>
</template>

<script>
import HeaderMenu from '@/components/header/HeaderMenu'
export default {
  components: {
    HeaderMenu
  }
}
</script>
