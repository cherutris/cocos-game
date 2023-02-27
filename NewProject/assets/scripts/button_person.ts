import { _decorator, Component, Node, director, instantiate, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('button_person')
export class button_person extends Component {
    @property(Node)
    private farmer_detail_node:Node=null

    @property(Node)
    private label_node:Node=null

    onclick(){
        let ll=instantiate(this.farmer_detail_node)
        ll.setParent(this.node.parent.parent.parent.parent.parent)
        ll.setPosition(0,0,0)
        let farmer_id=this.node.parent.parent.parent.name
        let farmer_detail=globalThis.farmer_detail
        let num_counter=400
        for(let i in farmer_detail){
            if(farmer_detail[i].id==farmer_id){
                for(let farmer_text in farmer_detail[i]){
                    globalThis.thisFarmer=farmer_detail[i]
                    let ln=instantiate(this.label_node)
                    ln.getComponent(Label).string=farmer_text
                    ln.setPosition(-170,num_counter,0)
                    ln.setParent(ll)
                    num_counter=num_counter-40
                    let ln2=instantiate(this.label_node)
                    ln2.getComponent(Label).string=farmer_detail[i][farmer_text]
                    ln2.setPosition(300,0,0)
                    ln2.setParent(ln)
                    
                }
            }
        }
        
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}

