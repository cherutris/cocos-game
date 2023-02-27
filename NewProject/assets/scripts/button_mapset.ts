import { _decorator, Component, Node ,director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('button_mapset')
export class button_mapset extends Component {
    onclick(){
        // globalThis.thisMapSet=this.node.parent.name
        // console.log(globalThis.thisMapSet)
        // director.loadScene('mapset_detail')
        console.log(this.node.parent)

    }


    start() {

    }

    update(deltaTime: number) {
        
    }
}

