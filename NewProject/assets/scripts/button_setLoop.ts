import { _decorator, Component, Node, instantiate } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('button_setLoop')
export class button_setLoop extends Component {

    @property(Node)
    private setLoop_node:Node=null

    start() {

    }
    
    set_loop_page(){
        let lp=instantiate(this.setLoop_node)
        lp.setParent(this.node.parent.parent)
        lp.setPosition(0,0,0)
        globalThis.newloop=null

    }

    update(deltaTime: number) {
        
    }
}

