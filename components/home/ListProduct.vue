<template>
  <div>
    <div class="grid gap-3 md:gap-8 grid-cols-2">
      <div v-for="item in productList" :key="item.id" class="rounded-2xl p-[15px] md:p-[30px] border-[1px] border-[#dddddd]">
        <div class="grid gap-4">
          <div class="col-start-1 col-end-3 col-span-4">
            <div>
              <p class="text-[#babdbe]">
                {{ item.slug }}
              </p>
              <h2 class="text-[#373c40] text-[18px] md:text-[24px] leading:[20px]">
                {{ item.name }}
              </h2>
            </div>
          </div>
        </div>
        <img :src="require(`@/assets/img/${item.image}`)" class="w-[300px]" />
        <div class="grid gap-4">
          <div class="col-start-1 col-end-3 col-span-4">
            <div>
              <p class="text-[#babdbe]">
                Price
              </p>
              <h2 class="text-[#373c40] text-[18px] md:text-[24px]">
                ${{ item.price }}
              </h2>
            </div>
          </div>
          <div class="col-end-7 col-span-2">
            <div class="text-right thumb">
              <ul>
                <li>
                  <img :src="require(`@/assets/img/${item.thumb1}`)" class="w-[55px]" />
                </li>
                <li>
                  <img :src="require(`@/assets/img/${item.thumb2}`)" class="w-[55px]" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="productList.length === 0" class="block md:my-[10rem]">
      <p class="text-center text-lg text-[#babdbe] font-semibold">
        Sorry, No data found!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    productList () {
      return this.$store.state.products.listProduct
    }
  },
  async mounted () {
    await this.$store.dispatch('products/listProduct')
  },
  methods: {}
}
</script>

<style></style>
