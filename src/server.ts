import  express  from 'express'
import  routes   from './routes/index'
import path from 'path'

const app = express()
app.use(express.json())
app.use(routes) 
app.use('/uploads',express.static(path.resolve(__dirname, '..', 'uploads')))

var PORT = 3000
app.listen(PORT, () => {
    console.log('server started successfully on port 3000')
})
