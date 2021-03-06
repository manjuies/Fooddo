import vendor from './restaurant.model';
import transService from './restaurant.service';
export default{
    findAll(req,res){
    vendor.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async signup(req,res){
        try{
           
            const {error,value} = transService.validationSchema(req.body);
            if( error && error.details){
                     return res.status(500).json(error);
                    }
                // create user
                await vendor.create(value)
                .then(item => res.json(item))
                .catch(err=> res.status(500).json(err));
                //    console.log(value);
            }
        catch(err){

            console.log(err);
            }
        },
        async Hotel(req,res){
            try{
               
                const {error,value} = transService.validationSchema(req.body);
                if( error && error.details){
                         return res.status(500).json(error);
                        }
                    // create user
                   const user = await vendor.find({isActive: 'True'       });
                   if(user.isActive == "True"){
                    return res.json(user);
                   }
                   
                   else{
                    return res.status(400).json({err: 'Invalid Restaurant'});
                   }
                       
                }
            catch(err){
    
                console.log(err);
                }
            }  ,
        findByTransaction(req,res,next){
                let {id} =  req.params;
                Transaction.find({'regId':id}).then(data => res.json(data))
                .catch(err => res.status(500).json(err));
            },
            update(req,res){
                const id = req.params.id;
                vendor.findOneAndUpdate({_id:id},{$set:req.body},{new:true}).then(emp => {
                    if(!emp){
                        return res.status(400).json({err:"emp not updated"});
                    }
                    return res.json(emp);
                })
                .catch(err => res.status(500).json(err));
            },
            findByTransaction(req,res,next){
                let {id} =  req.params;
         
               vendor.find({'regId':id}).then(data => res.json(data))
                .catch(err => res.status(500).json(err));
            }

}