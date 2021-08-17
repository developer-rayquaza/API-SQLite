import { Request, Response, NextFunction } from 'express';
import Connection from '../Model/connection';
    
class PostController{
    static async getPosts(req: Request, res: Response, next: NextFunction){
        let db = Connection.getDB();
        let sql = 'select * from comment';
        let params:any[] = [];

        db.all(sql, params, function(err, rows){
            if(err){
                return res.status(500).json({
                    message: err.message,
                    data: []
                })
            }
            return res.status(200).json({
                message: 'succes',
                data: rows
            })
        })
    }
}

export = PostController;