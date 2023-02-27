import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('button_collection')
export class button_collection extends Component {
    start() {

    }

    collection_on(){
        this.node.parent.parent.parent.getChildByName('loop_text').getComponent(Label).string +='收集元素'+'-->'
    }
    collection_off(){
        this.node.parent.parent.parent.getChildByName('loop_text').getComponent(Label).string +='停止收集'+'-->'

    }
    skill1(){
        this.node.parent.parent.parent.getChildByName('loop_text').getComponent(Label).string +='技能一'+'-->'

    }
    skill2(){
        this.node.parent.parent.parent.getChildByName('loop_text').getComponent(Label).string +='技能二'+'-->'

    }
    skill3(){
        this.node.parent.parent.parent.getChildByName('loop_text').getComponent(Label).string +='技能三'+'-->'

    }
    skill4(){
        this.node.parent.parent.parent.getChildByName('loop_text').getComponent(Label).string +='技能四'+'-->'

    }
    submit(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = () =>{
            if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                let res=request.responseText;
                

                
                
                
                
                

                



            }
        }

        let loop_text=this.node.parent.parent.parent.getChildByName('loop_text').getComponent(Label).string
        let id=globalThis.thisFarmer.id

        let urlll="http://101.132.72.206/?type=loop_text"+'&loop_text='+String(loop_text)+"&id="+String(id)
        console.log(urlll)

        request.open("get",urlll,true);
        request.send();
        this.node.parent.parent.parent.destroy()
                
    }

    update(deltaTime: number) {
        
    }
}

