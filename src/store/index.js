import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import User from '@/store/models/user'
import Post from '@/store/models/post'

Vue.use(Vuex);

const database = new VuexORM.Database()

database.register(User)
database.register(Post)

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})

export default store