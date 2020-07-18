import client from './customer.model';
import custService from './customer.service';
export default{
    findAll(req,res){
    client.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async signup(req,res){
        try{
           
            const {error,value} = custService.validationSchema(req.body);
            if( error && error.details){
                     return res.status(500).json(error);
                    }
                // create user
                await client.create(value)
                .then(item => res.json(item))
                .catch(err=> res.status(500).json(err));
                //    console.log(value);
            }
        catch(err){

            console.log(err);
            }
        },
        findByTransaction(req,res,next){
                let {id} =  req.params;
                Transaction.find({'regId':id}).then(data => res.json(data))
                .catch(err => res.status(500).json(err));
            }

}