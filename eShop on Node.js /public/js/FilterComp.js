Vue.component('filter-el', {
    data() {
      return {
          userSearch: ''
      }
    },
    template: `
        <form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
            <input type="text" class="search-field" v-model="userSearch" placeholder="Search..">
            <button type="submit" class="btn-search">
                <i class="fa fa-search"></i>
            </button>
        </form>
    `
})

Vue.component('category', {
    data() {
      return {
          category: ''
      }
    },
    template: `
        <div class="category-wrp">
            <button class="category-btn" v-on:click="$parent.$refs.products.filterByCategory(0)">All</button>
            <button class="category-btn" v-on:click="$parent.$refs.products.filterByCategory(1)">Sunglasses</button>
            <button class="category-btn" v-on:click="$parent.$refs.products.filterByCategory(2)">Frame glasses</button>
        </div>
    `
})
