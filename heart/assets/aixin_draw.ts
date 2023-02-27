import { _decorator, Component, Node, math, instantiate } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('aixin_draw')
export class aixin_draw extends Component {
    start() {
        var i=0

        var that=this
        var timer=setInterval(function(){
            var ll=that.node.getChildByName('animation')
            // let y=100*(2*Math.cos(i)-Math.cos(2*i))+50
            // let x=100*(2*Math.sin(i)-Math.sin(2*i))
            let x=i
            let y=0.6*(Math.sqrt(x))+Math.sqrt((1-x*x)/2)
            let y2=0.6*(Math.sqrt(x))-Math.sqrt((1-x*x)/2)
            let mm=instantiate(ll)
            let mm2=instantiate(ll)
            mm.setPosition(x*100,y*100,0)
            mm.setParent(that.node)
            mm2.setPosition(-x*100,y*100,0)
            mm2.setParent(that.node)
            console.log(that.node)

            let ff=instantiate(ll)
            ff.setPosition(x*100,y2*100,0)
            ff.setParent(that.node)
            let ff2=instantiate(ll)
            ff2.setPosition(-x*100,y2*100,0)
            ff2.setParent(that.node)
            i+=1
            console.log(i)

        },1000);

        timer;
        


        
        

    }

    update(deltaTime: number) {
    
        
    
        
    }

    
}

