import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{

    private username: string;
    private client_id: '17ffcf269b2c59582d4b';
    private clien_secret: 'de1ca0208bcaea12dff377386d9cb8b2240d8709';

    constructor(private _http: Http){
        console.log('github service ready...');
        this.username = 'fatihkaratay';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+ this.username+'?client_id='+this.client_id+'&client_secret='+this.clien_secret)
        .map(res =>res.json());
    }

     getRepos(){
        return this._http.get('http://api.github.com/users/'+ this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.clien_secret)
        .map(res =>res.json());
    }

    updateUser(usernam:string){
        this.username=usernam;
    }
}