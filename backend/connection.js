const mongoose =require('mongoose');
const url="mongodb+srv://ashishkumaryadav02000:ashish9648@cluster0.58cew.mongodb.net/minor1?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)

.then((result)=>{
    console.log('connect to database')
}).catch((err)=>{
    console.log(err)
});


module.exports = mongoose;