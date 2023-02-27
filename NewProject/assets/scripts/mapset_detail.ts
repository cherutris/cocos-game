import { _decorator, Component, Node ,input,Input,EventTouch,director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('mapset_detail')
export class mapset_detail extends Component {
    start() {
        let x=globalThis.mapset_detail_x
        let y=globalThis.mapset_detail_y
        console.log(globalThis.thisMapSet)
        console.log(x,y)
        input.on(Input.EventType.TOUCH_START,this.onTouchStart,this)

        var request = new XMLHttpRequest();
        request.onreadystatechange = () =>{
            if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                let res=request.responseText;

                let resJson=JSON.parse(res)
                console.log(resJson)



            }
        }

        let urlll="http://101.132.72.206/?type=mapset_detail"+'&x='+String(x)+'&y='+String(y)
        request.open("get",urlll,true);
        request.send();
        

    }

    private onTouchStart(event:EventTouch){
        director.loadScene('game_scene')
        
        

    }

    update(deltaTime: number) {
        
    }
}

