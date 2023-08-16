import User from "../model/User";
import bcrypt from 'bcryptjs'

export const getAllUsers=async(req,res,next)=>{
    let users;
    try{
        users=await User.find();

    }catch(err){
        console.log(err)
    }
    if (!users){
        return res.status(404).json({message:'No Users Found'});
    }
    return res.status(200).json({users})
}



export const signup=async(req,res,next)=>{
    const {name,email,password}=req.body
    let exsistngUser;

    try{
        exsistngUser=await User.findOne({email});


    }catch(err){
      return  console.log(err)
    }

    if (exsistngUser){
        return res.status(400).json({message:'User Already Exists! Login Insted'})
    }

    const hasehedPassword=bcrypt.hashSync(password)


    const user=new User({
        name,
        email,
        password:hasehedPassword,
        blogs:[]
    })

    

    try{
       await user.save();
    }catch(err){
        console.log(err)
    }

    return res.status(201).json({user})

    
}

export const login=async(req,res,next)=>{

    const {email,password}=req.body
    let exsistngUser;

    try{
        exsistngUser=await User.findOne({email});


    }catch(err){
      return  console.log(err)
    }

    if (!exsistngUser){
        return res.status(404).json({message:'Couldnt Find User By this Email'})
    }

    const isPasswordCorrect=bcrypt.compareSync(password,exsistngUser.password)

     if (!isPasswordCorrect){
        return res.status(400).json({message:'Incorrect Password'})
     }

     return res.status(200).json({message:'Login Successfull',user:exsistngUser})
}