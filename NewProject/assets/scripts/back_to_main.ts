import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('back_to_main')
export class back_to_main extends Component {
    onclick(){
        director.loadScene('game_scene')
    }


    start() {

    }

    update(deltaTime: number) {
        
    }
}

