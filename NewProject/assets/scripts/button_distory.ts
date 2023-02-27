import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('button_distory')
export class button_distory extends Component {
    start() {

    }

    distory_button(){
        let ll=this.node.parent.parent
        ll.destroy()
    }

    update(deltaTime: number) {
        
    }
}

