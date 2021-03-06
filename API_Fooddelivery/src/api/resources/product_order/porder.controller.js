
import POrder from './porder.model';
import ProductService from './porder.service';
export default{
    findAll(req,res){
    POrder.find().then(data => res.json(data))
        .catch(err => res.status(500).json(err));
    },
    async signup(req,res){
        try{
           
            const {error,value} = ProductService.validationSchema(req.body);
            if( error && error.details){
                     return res.status(500).json(error);
                    }
                // create user
                await POrder.create(value)
                .then(item => res.json(item))
                .catch(err=> res.status(500).json(err));
                //    console.log(value);
            }
        catch(err){

            console.log(err);
            }
        },
        findOne(req,res){
            const id = req.params.id;
            POrder.findById(id).then(emp => {
                if(!emp){
                    return res.status(400).json({err:"emp not found"});
                }
                return res.json(emp);
            })
            .catch(err => res.status(500).json(err));
        },
        findByTransaction(req,res,next){
                let {id} =  req.params;
                const {page =1 ,perPage =10} = req.query;
            const options ={
                page: parseInt(page,10),
                limit:parseInt(perPage,10),
                populate:'UserId OrderId'
            }
                POrder.paginate({'UserId':id},options).then(data => res.json(data))
                .catch(err => res.status(500).json(err));
            },
            findByOrder(req,res,next){
                let {id} =  req.params;
                const {page =1 ,perPage =10} = req.query;
            const options ={
                page: parseInt(page,10),
                limit:parseInt(perPage,10),
                populate:'UserId OrderId'
            }
                POrder.paginate({'restroId':id},options).then(data => res.json(data))
                .catch(err => res.status(500).json(err));
            }
            
}