import {Request,Response} from 'express';
import db from '../database';
import pool from '../database';
class EviFotosController{
    public Fotos(req: Request,res:Response){
        db.query('DESCRIBE evidencia');
        res.send("hola");
   }
   public async agFotos(req: Request,res:Response){
       await pool.query('INSERT INTO evidencia set ?',[req.body]);
       console.log(req.body);
    }
    public async eliminarFotos(req: Request,res:Response){
        const idFotos =req.param;
        await pool.query('DELETE FROM evidencia WHERE idFotos = ?',[idFotos]);
    }
    public async modificarFotos(req: Request,res:Response){
        const idFotos =req.param;
        await pool.query('UPDATE evidencia set ? WHERE idFotos = ?',[req.body,idFotos]);
    }
}
const eviFotosController =new EviFotosController();
export default eviFotosController;