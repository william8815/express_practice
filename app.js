// 引用 express
const express = require("express")
const app = express()
const port = 3000
// 引用 handlebars
const exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// 使用 靜態檔案
app.use(express.static('public'))

// 首頁路由
app.get('/', (req, res) => {
  res.render('index', { title: "首頁" })
})
// 其他頁面路由
app.get('/:title', (req, res) => {
  res.render(`${req.params.title}`)
})

app.listen(port, () => {
  console.log(`Express is running at http://localhost:${port}`)
})