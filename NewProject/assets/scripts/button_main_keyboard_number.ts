import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('button_main_keyboard')
export class button_main_keyboard extends Component {
    start() {

    }
    key_one(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='1'
    }
    key_two(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='2'
    }
    key_three(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='3'
    }
    key_four(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='4'
    }
    key_five(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='5'
    }
    key_six(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='6'
    }
    key_seven(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='7'
    }
    key_eight(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='8'
    }
    key_nine(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='9'
    }
    key_zero(){
        console.log(this.node)
        this.node.parent.getChildByName('Label').getComponent(Label).string+='0'
    }
    key_happy(){
        console.log(this.node)
        this.node.parent.parent.parent.getChildByName('loop_text').getComponent(Label).string +=globalThis.comm+this.node.parent.getChildByName('Label').getComponent(Label).string+'-->'
        this.node.parent.destroy()


    }

    update(deltaTime: number) {
        
    }
}

