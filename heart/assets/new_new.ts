import { _decorator, Component, Node,instantiate, random, AnimationClip,Animation } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('new_new')
export class new_new extends Component {
    start() {
        
        


        var that=this
        var ll=that.node.getChildByName('animation')
        ll.name=String(280)
        var i=0

        while(i<100){
            
            var ii=i
            // let y=100*(2*Math.cos(i)-Math.cos(2*i))+50
            // let x=100*(2*Math.sin(i)-Math.sin(2*i))
            let x=ii/100
            let y=0.6*(Math.sqrt(x))+Math.sqrt((1-x*x)/2)
            let y2=0.6*(Math.sqrt(x))-Math.sqrt((1-x*x)/2)
            let mm=instantiate(ll)
            let mm2=instantiate(ll)
            mm.setPosition(x*250,y*300,0)
        
            mm2.setPosition(-x*250,y*300,0)
        
        
        
            // mm.getComponent(Animation).defaultClip.getTrack(1).channels()[0]._curve._values[1].value=x*200
            // mm.getComponent(Animation).defaultClip.getTrack(1).channels()[1]._curve._values[1].value=y*200
            // mm2.getComponent(Animation).defaultClip.getTrack(1).channels()[0]._curve._values[1].value=-x*200
            // mm2.getComponent(Animation).defaultClip.getTrack(1).channels()[1]._curve._values[1].value=y*200
            mm.setParent(that.node)
            mm2.setParent(that.node)

            let ff=instantiate(ll)
            ff.setPosition(x*250,y2*300,0)
            ff.setParent(that.node)
            let ff2=instantiate(ll)
            ff2.setPosition(-x*250,y2*300,0)
            ff2.setParent(that.node)
            i+=1

            var f=random()
            var xr=x*f
            let yr=0.6*(Math.sqrt(x))+Math.sqrt((1-x*x)/2)
            let y2r=0.6*(Math.sqrt(x))-Math.sqrt((1-x*x)/2)
            let mmr=instantiate(ll)
            let mm2r=instantiate(ll)
            mmr.setPosition(xr,yr,0)
            mmr.setParent(that.node)
            mm2r.setPosition(-xr,yr,0)
            mm2r.setParent(that.node)


            let ffr=instantiate(ll)
            ffr.setPosition(xr*250,y2r*300,0)
            ffr.setParent(that.node)
            let ff2r=instantiate(ll)
            ff2r.setPosition(-xr*250,y2r*300,0)
            ff2r.setParent(that.node)
                
            
        }
        

        

        




        // var timer=setInterval(function(){
        //     var ii=i%100
        //     // let y=100*(2*Math.cos(i)-Math.cos(2*i))+50
        //     // let x=100*(2*Math.sin(i)-Math.sin(2*i))
        //     let x=ii/100
        //     let y=0.6*(Math.sqrt(x))+Math.sqrt((1-x*x)/2)
        //     let y2=0.6*(Math.sqrt(x))-Math.sqrt((1-x*x)/2)
        //     let mm=instantiate(ll)
        //     let mm2=instantiate(ll)
        //     mm.setPosition(x,y,0)
        
        //     mm2.setPosition(-x,y,0)
        
        
        
        //     // mm.getComponent(Animation).defaultClip.getTrack(1).channels()[0]._curve._values[1].value=x*200
        //     // mm.getComponent(Animation).defaultClip.getTrack(1).channels()[1]._curve._values[1].value=y*200
        //     // mm2.getComponent(Animation).defaultClip.getTrack(1).channels()[0]._curve._values[1].value=-x*200
        //     // mm2.getComponent(Animation).defaultClip.getTrack(1).channels()[1]._curve._values[1].value=y*200
        //     mm.setParent(that.node)
        //     mm2.setParent(that.node)

        //     let ff=instantiate(ll)
        //     ff.setPosition(x,y2,0)
        //     ff.setParent(that.node)
        //     let ff2=instantiate(ll)
        //     ff2.setPosition(-x,y2,0)
        //     ff2.setParent(that.node)
        //     i+=1
        //     console.log(i)

        //     var f=random()
        //     var xr=x*f
        //     let yr=0.6*(Math.sqrt(x))+Math.sqrt((1-x*x)/2)
        //     let y2r=0.6*(Math.sqrt(x))-Math.sqrt((1-x*x)/2)
        //     let mmr=instantiate(ll)
        //     let mm2r=instantiate(ll)
        //     mmr.setPosition(xr,yr,0)
        //     mmr.setParent(that.node)
        //     mm2r.setPosition(-xr,yr,0)
        //     mm2r.setParent(that.node)
        //     console.log(mm)

        //     let ffr=instantiate(ll)
        //     ffr.setPosition(xr,y2r,0)
        //     ffr.setParent(that.node)
        //     let ff2r=instantiate(ll)
        //     ff2r.setPosition(-xr,y2r,0)
        //     ff2r.setParent(that.node)

        
            

        // },10)

        // timer;

    }

    update(deltaTime: number) {
        
        
        






        for (let nodee in this.node.children){
            
        
        
            let namee=Number(this.node.children[nodee].name)
        
            if(namee<280){
                let xx=this.node.children[nodee].position.x
                let yy=this.node.children[nodee].position.y
                console.log(xx)
                this.node.children[nodee].setPosition(xx*1.02,yy*1.02,0)
                let newnamee=namee+1
                this.node.children[nodee].name=String(newnamee)

            }

            if(namee==280){
                var ff=random()
                if(ff>0.7){
                    let xx=this.node.children[nodee].position.x
                    let yy=this.node.children[nodee].position.y
                    // var pp=0.3*100%50
                    // let ppow=Math.pow(1.02,pp)
                    this.node.children[nodee].setPosition(xx/1.485947395978,yy/1.485947395978,0)
                    
                    this.node.children[nodee].name=String(namee-20)
                }
            }
            // var (xx,yy,zz)=this.node[nodee].position
            // this.node[nodee].setposition=

        }
        
    
        
    }
}

