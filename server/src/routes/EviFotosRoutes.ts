import {Router} from 'express';
import eviFotosController from '../controllers/eFotosController'
class RfotosE{
    public router :Router =Router();
    constructor(){
        this.config();
    }
    config():void{
       this.router.get('/',eviFotosController.Fotos);
       this.router.post('/',eviFotosController.agFotos);
       this.router.delete('/:idFotos',eviFotosController.eliminarFotos);
       this.router.put('/:idFotos',eviFotosController.modificarFotos);
    }


}
const rfotosE = new RfotosE();
export default rfotosE.router;