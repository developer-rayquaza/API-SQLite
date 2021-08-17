import * as sqlite from 'sqlite3';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();

class Connection{
    static getDB(){
        const dir = path.resolve(__dirname, './db/post');
        console.log(dir);
        const sqlite3 = sqlite.verbose();
        const db = new sqlite3.Database(dir, sqlite3.OPEN_READWRITE,
            (error)=>{
                if(error){
                    console.log(error.message);
                }
            }
        )
        return db;
    }
}

export = Connection;
