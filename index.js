const { default: mongoose } = require('mongoose')
const mongo = require('./mongo')
const userSchema=require('./schemas/user-schemas')

const connectToMongoDB=async () => {
    await mongo().then(async (mongoose)=>{
        try{
            console.log('Connected to mongoDb !!!')

            //create user
            console.log('CREATE')

            const user={
                email:'ali@gmail.com',
                username:'ali',
                password:'aaa123456'
            }

            await new userSchema(user).save()
            
            //find user
            console.log('FİND')

            const result = await userSchema.find({
                
            })
            console.log('Result:',result)

            //update user
            console.log('UPDATE')

            await userSchema.findOneAndUpdate(
                {
                    email:'emre@gmail.com',
                },
                {
                    email:'node@gmail.com',
                }

            ) 

            //delete user
            console.log('DELETE')

            await userSchema.deleteOne({
                username:'',
            })

        }finally{
            mongoose.connection.close()
        }
    })
}
connectToMongoDB()