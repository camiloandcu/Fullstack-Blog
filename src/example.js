import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Hello, world!',
  author: 'admin',
  content: 'Welcome to the blog!',
  tags: ['welcome', 'first post'],
})

await post.save()

const posts = await Post.find()
console.log(posts)