<template>
  <div>
    <div class="box-option grid-content bg-purple">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="Categories" name="1" class="text-[60px]">
          <div class="block">
            <label v-for="item in categoryList" :key="item.id" class="categories" @change="selectedCategory(item.id)">{{ item.name }}
              <input type="radio" checked="checked" name="radio">
              <span class="checkmark-categories" />
            </label>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Price Range" name="2">
          <div class="block box-range">
            <el-slider
              v-model="price"
              range
              :max="968"
              :format-tooltip="formatTooltip"
              @change="priceRange(price)"
            />
          </div>
        </el-collapse-item>
        <el-collapse-item title="Size" name="3">
          <div class="block">
            <ul>
              <li v-for="item in sizeList" :key="item.id" class="float-left w-[40px] m-[8px] rounded-md text-center" @change="selectSize(item.id)">
                <label class="container-checkbox">{{ item.name }}
                  <input type="checkbox">
                  <span class="checkmark" />
                </label>
              </li>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1', '2', '3'],
      price: [100, 967]
    }
  },
  computed: {
    categoryList () {
      return this.$store.state.filter.listCategory
    },
    sizeList () {
      return this.$store.state.filter.listSize
    }
  },
  async mounted () {
    await this.$store.dispatch('filter/listCategory')
    await this.$store.dispatch('filter/listSize')
  },
  methods: {
    formatTooltip (val) {
      return '$' + val
    },
    priceRange (val) {
      this.$store.dispatch('products/listProduct')
      const index = this.$store.state.products.listProduct.filter(data => data.price >= val[0] && data.price <= val[1])
      this.$store.commit('products/SET_LIST_PRODUCT', index)
    },
    selectSize (val) {
      this.$store.dispatch('products/listProduct')
      const index = this.$store.state.products.listProduct.filter(data => data.size === val)
      this.$store.commit('products/SET_LIST_PRODUCT', index)
    },
    selectedCategory (val) {
      this.$store.dispatch('products/listProduct')
      const index = this.$store.state.products.listProduct.filter(data => data.category === val)
      this.$store.commit('products/SET_LIST_PRODUCT', index)
    }
  }
}
</script>
