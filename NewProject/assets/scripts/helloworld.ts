import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('helloworld')
export class helloworld extends Component {
    start() {
        console.log(this.node.name)

    }

    update(deltaTime: number) {
        
    }
}

