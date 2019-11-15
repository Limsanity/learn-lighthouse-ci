<template>
  <div id="app">
    <article v-for="post in posts" :key="post.id">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <p>Author: {{ post.author.name }}</p>
    </article>
  </div>
</template>

<script>
import Post from '@/store/models/post'

export default {
  name: 'app',
  computed: {
    posts() {
      return Post.query().with('author').get()
    }
  },
  created() {
    const posts = [
      {
        id: 1,
        title: 'Hello world',
        body: 'Some awesome body...',
        author: {
          id: 1,
          name: 'John Doe',
          email: '798607646@qq.com'
        }
      }
    ]

    Post.insert({ data: posts })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
