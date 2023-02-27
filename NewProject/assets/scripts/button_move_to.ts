import { _decorator, Component, Node, instantiate, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('button_move_to')
export class button_move_to extends Component {

    @property(Node)
    private keyboard_number:Node=null

    start() {

    }

    open_keyboard_number(){
        let kn=instantiate(this.keyboard_number)
        kn.setParent(this.node.parent.parent)
        kn.setPosition(0,0,0)
        let comm=this.node.parent.getChildByName('Label').getComponent(Label).string
        globalThis.comm=comm

    }

    update(deltaTime: number) {
        
    }
}

