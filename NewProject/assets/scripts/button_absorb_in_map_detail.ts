import { _decorator, Component, Node, instantiate, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('button_absorb_in_map_detail')
export class button_absorb_in_map_detail extends Component {
    @property(Node)
    private farmer_list_node:Node = null
    @property(Node)
    private farmer:Node=null
    @property(Node)
    private label_node=null
    @property(Node)
    private button_farmer_select=null


    start() {

    }

    get_farmer_list(){

        let farmer_detail=globalThis.farmer_detail

        console.log(farmer_detail)
        let ll=instantiate(this.farmer_list_node)
        ll.setParent(this.node.parent.parent)
        ll.setPosition(0,0,0)

        let numcounter=60

        for (let i in farmer_detail){
            let ff=instantiate(this.farmer)
            let ln=instantiate(this.label_node)
            ff.setParent(ll)
            ff.setPosition(-150,numcounter,0)
            ln.setParent(ff)
            ln.setPosition(40,0,0)
            ff.name=String(farmer_detail[i].id)
            console.log(ff)
            numcounter=numcounter-40
            ln.getComponent(Label).string=String(farmer_detail[i].name)
            let coor=String((farmer_detail[i].coordinate_x)-(farmer_detail[i].coordinate_x%1))+','+String((farmer_detail[i].coordinate_y)-(farmer_detail[i].coordinate_y%1))
            let ln2=instantiate(this.label_node)
            ln2.setParent(ff)
            ln2.setPosition(140,0,0)
            ln2.getComponent(Label).string=coor
            let bn=instantiate(this.button_farmer_select)
            bn.setParent(ff)
            bn.setPosition(300,0,0)

        }

    }

    update(deltaTime: number) {
        
    }
}

