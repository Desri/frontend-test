<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="8" :md="8" :lg="8">
        <Master-Filter />
      </el-col>
      <el-col :xs="24" :sm="16" :md="16" :lg="16">
        <div class="mt-8 md:mt-0 flex justify-between mb-8">
          <div>
            <h3 class="text-lg md:text-lg">
              New Arrivals
            </h3>
          </div>
          <div>
            <el-select v-model="value" placeholder="Select" @change="selectSort(value)">
              <el-option
                v-for="item in sortList"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </div>
        </div>
        <div>
          <List-Product />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MasterFilter from '@/components/home/MasterFilter'
import ListProduct from '@/components/home/ListProduct'
export default {
  components: {
    MasterFilter,
    ListProduct
  },
  data () {
    return {
      value: 'price'
    }
  },
  computed: {
    sortList () {
      return this.$store.state.filter.listSort
    }
  },
  async mounted () {
    await this.$store.dispatch('filter/listSort')
  },
  methods: {
    selectSort (val) {
      switch (val) {
        case 'size': {
          this.sortBySize()
          break
        }
        case 'name': {
          this.sortByName()
          break
        }
        case 'price': {
          this.sortByPrice()
          break
        }
      }
    },
    sortByPrice () {
      const data = [...this.$store.state.products.listProduct]
      data.sort((a, b) => {
        if (a.price < b.price) {
          return -1
        } else if (a.price > b.price) {
          return 1
        }
        return 0
      })
      this.$store.commit('products/SET_LIST_PRODUCT', data)
    },
    sortBySize () {
      const data = [...this.$store.state.products.listProduct]
      data.sort((a, b) => {
        if (a.size < b.size) {
          return -1
        } else if (a.size > b.size) {
          return 1
        }
        return 0
      })
      this.$store.commit('products/SET_LIST_PRODUCT', data)
    },
    sortByName () {
      const data = [...this.$store.state.products.listProduct]
      data.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        } else if (a.name > b.name) {
          return 1
        }
        return 0
      })
      this.$store.commit('products/SET_LIST_PRODUCT', data)
    }
  }
}
</script>

<style></style>
