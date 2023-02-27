import { _decorator, Component, Node, Label, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('person_detail_text')
export class person_detail_text extends Component {
    start() {
        console.log(globalThis.mynotice)
        var request = new XMLHttpRequest();
        request.onreadystatechange = () =>{
            if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                let res=request.responseText;

                let resJson=JSON.parse(res)

                let map_detail=resJson.farmers_wx[0]
                console.log(map_detail)
                var pp:number=0
                for(let i in map_detail){
                    let text:Node=this.node.getChildByName('text')
                    let newtext:Node=instantiate(text)
                    let textlabel=newtext.getComponent(Label)
                    textlabel.string=String(map_detail[i])
                    let ii=Number(i)
                    console.log(i)
                    console.log(ii)
                    newtext.setPosition(100,300-pp*50,0)
                    newtext.setParent(this.node)
                    pp+=1
                }
                console.log(this.node)
            }
        }
        
        request.open("get","http://101.132.72.206/?type=usual",true);
        request.send();

    


    }

    update(deltaTime: number) {
        
    }
}

