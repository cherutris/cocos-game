import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('button_farmer_select')
export class button_farmer_select extends Component {


    sendActionChange(){


        let farmer_id=this.node.parent.parent.name
        let map_id=globalThis.mapSetDetail.mapset_detail.id

        var request = new XMLHttpRequest();
                request.onreadystatechange = () =>{
                    if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                        let res=request.responseText;

                        let resJson=JSON.parse(res)
                        console.log(resJson)
                        
                        
                        
                        
                        

                        



                    }
                }


                let urlll="http://101.132.72.206/?type=action_com_collection"+'&farmer_id='+String(farmer_id)+'&map_id='+String(map_id)

                request.open("get",urlll,true);
                request.send();



    }


    start() {

    }

    update(deltaTime: number) {
        
    }
}

