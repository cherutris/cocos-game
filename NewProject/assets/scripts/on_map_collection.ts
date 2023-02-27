import { _decorator, Component, Node,SpriteAtlas,Sprite,SpriteFrame, resources, loader, AssetManager, assetManager, instantiate, Scene, director, EventTouch, systemEvent, Input, input, Label, UITransform, Color, random } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('on_map_collection')
export class on_map_collection extends Component {


    @property(Node)
    private map_blank:Node=null
    @property(Node)
    private map_detail_node:Node=null
    @property(Node)
    private person:Node=null
    @property(Node)
    private elementSet:Node=null

    private zidian={}


    start() {

        this.zidian={'map_blank.jpg':'map_blank','map_fire.jpg':'map_fire','map_clay.jpg':'map_clay','map_flash.jpg':'map_flash','map_life.jpg':'map_life','map_metal.jpg':'map_metal','map_water.jpg':'map_water','map_wind.jpg':'map_wind',}
        this.setInitialInformation()

        input.on(Input.EventType.TOUCH_START,this.onTouchStart,this)
        
        input.on(Input.EventType.TOUCH_MOVE,this.onTouchMove,this)
        input.on(Input.EventType.TOUCH_END,this.onTouchEnd,this)
        
        

    }

    private onTouchStart(event:EventTouch){
        console.log('touch')
        var clickLocation=event.getUILocation()
        globalThis.touchStart=clickLocation
        console.log('ontouchstart',clickLocation)

        // director.loadScene('mapset_detail')
        

    }

    private mapSetDetail(){




        var bundle: AssetManager.Bundle = null;
        assetManager.loadBundle("res",(err,ab:AssetManager.Bundle)=>{
            if(err){
                console.log(err);
                return;
            }
            bundle=ab;
            bundle.load("map/sss", SpriteAtlas,(err,atlas:SpriteAtlas)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('开始http')

                var request = new XMLHttpRequest();
                request.onreadystatechange = () =>{
                    if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                        let res=request.responseText;

                        let resJson=JSON.parse(res)
                        

                        let ll=instantiate(this.map_detail_node)
                        ll.setParent(this.node)
                
                        ll.setPosition(globalThis.deltaWatcher_x,globalThis.deltaWatcher_y,0)
                        globalThis.mapSetDetail=resJson
                        


                        let llst=ll.getComponent(Sprite)
                        var cardsp=atlas.getSpriteFrame(resJson["mapset_detail"]["map_type"])
                        
                        llst.spriteFrame=cardsp
                        

                        let labell=ll.getChildByName('Button').getChildByName('Label')
                        let ppy=0

                        for(let ff in resJson.mapset_detail){
                            let text=String(ff)
                            let lanelins=instantiate(labell)
                            lanelins.setScale(2,2)
                            lanelins.getComponent(Label).string=text
                            lanelins.setPosition(-100,ppy,0)
                            lanelins.setParent(ll)
                            ppy+=40
                            lanelins.getComponent(UITransform).setContentSize(500,50)
                            let ln2=instantiate(labell)
                            ln2.getComponent(Label).string=String(resJson.mapset_detail[ff])
                            ln2.setPosition(100,0,0)
                            ln2.setParent(lanelins)
                            ln2.getComponent(UITransform).setContentSize(500,50)



                        }
                        
                        
                        
                        

                        



                    }
                }

                let x=globalThis.mapset_detail_x
                let y=globalThis.mapset_detail_y

                let urlll="http://101.132.72.206/?type=mapset_detail"+'&x='+String(x)+'&y='+String(y)

                request.open("get",urlll,true);
                request.send();



            })
    
        })


    }

    private onTouchEnd(event:EventTouch){
        var startlocation=globalThis.touchStart

        var clickLocation=event.getUILocation()
        var minus=(clickLocation.x-startlocation.x)*(clickLocation.x-startlocation.x)+(clickLocation.y-startlocation.y)*(clickLocation.y-startlocation.y)
        console.log(minus)
        if(minus==0){
            globalThis.mapset_detail_x=globalThis.mynotice.watcher_x+globalThis.deltaWatcher_x+clickLocation.x
            globalThis.mapset_detail_y=globalThis.mynotice.watcher_y+globalThis.deltaWatcher_y+clickLocation.y+140
            console.log(clickLocation)
            console.log(globalThis.mapset_detail_x,globalThis.mapset_detail_y)
            console.log(globalThis.deltaWatcher_x,globalThis.deltaWatcher_y)
            console.log(globalThis.mynotice.watcher_x,globalThis.mynotice.watcher_y)
            this.mapSetDetail()
        }
    }

    private onTouchMove(event:EventTouch){
        var uidelta=event.getUIDelta()
        // globalThis.deltaWatcher_x=uidelta.x
        // globalThis.deltaWatcher_y=uidelta.y
        // globalThis.deltaWatcher_change=1
        let ppx=this.node.position.x
        let ppy=this.node.position.y
    

        this.node.setPosition(ppx+uidelta.x,ppy+uidelta.y,0)
        this.node.parent.getChildByName('farmer_in_map').setPosition(ppx+uidelta.x,ppy+uidelta.y,0)
        globalThis.deltaWatcher_x-=uidelta.x
        globalThis.deltaWatcher_y-=uidelta.y
        globalThis.delta_x_move-=uidelta.x
        globalThis.delta_y_move-=uidelta.y
        console.log(globalThis.delta_x_move,globalThis.delta_y_move)
        if(globalThis.delta_x_move>600 || globalThis.delta_x_move<-600){
            globalThis.delta_x_move=0
            console.log('xxxxxl')
            let ppname=String(globalThis.deltaWatcher_x-globalThis.deltaWatcher_x%600+globalThis.mynotice.watcher_x)+String(globalThis.deltaWatcher_y-globalThis.deltaWatcher_y%1300+globalThis.mynotice.watcher_y)
            let x=this.node.getChildByName(ppname).position.x
            let y=this.node.getChildByName(ppname).position.y
            this.provenNewMap(globalThis.deltaWatcher_x-globalThis.deltaWatcher_x%600+globalThis.mynotice.watcher_x,globalThis.deltaWatcher_y-globalThis.deltaWatcher_y%1300+globalThis.mynotice.watcher_y,x,y)
        }

        if(globalThis.delta_y_move>1300 || globalThis.delta_y_move<-1300){
            globalThis.delta_y_move=0
            console.log('yyyyyl')
            let ppname=String(globalThis.deltaWatcher_x-globalThis.deltaWatcher_x%600+globalThis.mynotice.watcher_x)+String(globalThis.deltaWatcher_y-globalThis.deltaWatcher_y%1300+globalThis.mynotice.watcher_y)
            let x=this.node.getChildByName(ppname).position.x
            let y=this.node.getChildByName(ppname).position.y
            this.provenNewMap(globalThis.deltaWatcher_x-globalThis.deltaWatcher_x%600+globalThis.mynotice.watcher_x,globalThis.deltaWatcher_y-globalThis.deltaWatcher_y%1300+globalThis.mynotice.watcher_y,x,y)
        }

        if(globalThis.firstUpdate==undefined){
            globalThis.firstUpdate=100 
            console.log('yyllll')
            let ppname=String(globalThis.deltaWatcher_x-globalThis.deltaWatcher_x%600+globalThis.mynotice.watcher_x)+String(globalThis.deltaWatcher_y-globalThis.deltaWatcher_y%1300+globalThis.mynotice.watcher_y)
            let x=this.node.getChildByName(ppname).position.x
            let y=this.node.getChildByName(ppname).position.y
            this.provenNewMap(globalThis.deltaWatcher_x-globalThis.deltaWatcher_x%600+globalThis.mynotice.watcher_x,globalThis.deltaWatcher_y-globalThis.deltaWatcher_y%1300+globalThis.mynotice.watcher_y,x,y)
        }
    }
    


    private provenNewMapSet(watcher_x,watcher_y,x,y){
        let ppname=String(watcher_x)+String(watcher_y)
        let ff=this.node.getChildByName(ppname)

        if(ff==null){
            this.setMap(watcher_x,watcher_y,x,y)
            console.log(ppname)
            setTimeout(()=>{console.log(this.node)},900)
        }
    }


    private provenNewMap(watcher_x,watcher_y,x,y){
        console.log(watcher_x,watcher_y)
        globalThis.provenNewMapLock=1
        let STOT=3
        setTimeout(()=>{this.provenNewMapSet(watcher_x-600,watcher_y,x-600,y)},100*STOT)
        setTimeout(()=>{this.provenNewMapSet(watcher_x-600,watcher_y-1300,x-600,y-1300)},200*STOT)
        setTimeout(()=>{this.provenNewMapSet(watcher_x+600,watcher_y,x+600,y)},600*STOT)
        setTimeout(()=>{this.provenNewMapSet(watcher_x+600,watcher_y+1300,x+600,y+1300)},300*STOT)
        setTimeout(()=>{this.provenNewMapSet(watcher_x+600,watcher_y-1300,x+600,y-1300)},400*STOT)
        setTimeout(()=>{this.provenNewMapSet(watcher_x-600,watcher_y+1300,x-600,y+1300)},500*STOT)
        setTimeout(()=>{this.provenNewMapSet(watcher_x,watcher_y+1300,x,y+1300)},700*STOT)
        setTimeout(()=>{this.provenNewMapSet(watcher_x,watcher_y-1300,x,y-1300)},800*STOT)
        setTimeout(()=>{globalThis.provenNewMapLock=0},800*STOT)
    



        // this.provenNewMapSet(watcher_x-600,watcher_y,x-600,y)
        // this.provenNewMapSet(watcher_x-600,watcher_y-1300,x-600,y-1300)
        // this.provenNewMapSet(watcher_x+600,watcher_y,x+600,y)
        // this.provenNewMapSet(watcher_x+600,watcher_y+1300,x+600,y+1300)
        // this.provenNewMapSet(watcher_x+600,watcher_y-1300,x+600,y-1300)
        // this.provenNewMapSet(watcher_x-600,watcher_y+1300,x-600,y+1300)
        // this.provenNewMapSet(watcher_x,watcher_y+1300,x,y+1300)
        // this.provenNewMapSet(watcher_x,watcher_y-1300,x,y-1300)

    }


    private setInitialInformation(){

        var request = new XMLHttpRequest();
        request.onreadystatechange = () =>{
            if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                let res=request.responseText;

                let resJson=JSON.parse(res)
                console.log(resJson)
                globalThis.watcher_x=resJson.watcher_x
                globalThis.watcher_y=resJson.watcher_y

                
                
                
                
                globalThis.mynotice=resJson
                globalThis.date=resJson.date
                globalThis.deltaWatcher_x=0
                globalThis.deltaWatcher_y=0
                globalThis.deltaWatcher_change=0
                globalThis.mapUpdate=0
                globalThis.provenNewMapLock=0
                globalThis.delta_x_move=0
                globalThis.delta_y_move=0

                

                this.setMap(resJson.watcher_x,resJson.watcher_y,0,0)
                console.log(this.node)
                this.setFarmer()




            }
        }
        request.open("get","http://101.132.72.206/?type=usual",true);
        request.send();
        

    }


    private setFarmer(){
        var request = new XMLHttpRequest();
                request.onreadystatechange = () =>{
                    if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                        let res=request.responseText;


                        let resJson=JSON.parse(res).farmer_detail
                        globalThis.farmer_detail=resJson
                        for (let i in resJson){
                            let farmer=instantiate(this.person)
                            let xx=Number(resJson[i].coordinate_x)-Number(globalThis.mynotice.watcher_x)-300
                            let yy=Number(resJson[i].coordinate_y)-Number(globalThis.mynotice.watcher_y)-650
                            farmer.setPosition(xx,yy,500)
                            console.log(this.node.parent.getChildByName('farmer_in_map'))
                            farmer.setParent(this.node.parent.getChildByName('farmer_in_map'))
                            farmer.setSiblingIndex(100)
                            farmer.name=String(resJson[i].id)
                            console.log(farmer)
                        }
                        



                    }
                }

                var urll="http://101.132.72.206/?type=farmer_set&id="+globalThis.mynotice.id

                request.open("get",urll,true);
                request.send();

    }

    private updateFarmer(){
        var request = new XMLHttpRequest();
                request.onreadystatechange = () =>{
                    if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                        let res=request.responseText;


                        let resJson=JSON.parse(res).farmer_detail
                        globalThis.farmer_detail=resJson
                        for (let i in resJson){
                            let farmer=this.node.parent.getChildByName('farmer_in_map').getChildByName(String(resJson[i].id))
                            let xx=Number(resJson[i].coordinate_x)-Number(globalThis.mynotice.watcher_x)-300
                            let yy=Number(resJson[i].coordinate_y)-Number(globalThis.mynotice.watcher_y)-650
                            farmer.setPosition(xx,yy,500)
                            
                        }

                        console.log(this.node.parent.getChildByName('farmer_in_map'))
                        



                    }
                }

                var urll="http://101.132.72.206/?type=farmer_set&id="+globalThis.mynotice.id

                request.open("get",urll,true);
                request.send();

    }


    private setMap(watcher_x:number,watcher_y:number,position_x:number,position_y:number){


        
    
    
    
                
    
        var bundle: AssetManager.Bundle = null;
        assetManager.loadBundle("res",(err,ab:AssetManager.Bundle)=>{
            if(err){
                console.log(err);
                return;
            }
            bundle=ab;
            bundle.load("map/sss", SpriteAtlas,(err,atlas:SpriteAtlas)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log('开始http')

                var request = new XMLHttpRequest();
                request.onreadystatechange = () =>{
                    if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                        let res=request.responseText;

                        let resJson=JSON.parse(res)
                        console.log(res)

                        let lls=instantiate(this.node.getChildByName('map'))
                        lls.name=String(watcher_x)+String(watcher_y)
                        lls.setParent(this.node)
                        lls.setPosition(position_x,position_y,0)
                        
                        

                        let map_detail=resJson.map_detail
                        
                        for(let i in map_detail){
                            for(let j in map_detail[i]){
                                 // let ll:Node=instantiate(this.zidian[map_detail[i][j]["map_type"]])
                                let ll:Node=instantiate(this.map_blank)
                                var cardsp=atlas.getSpriteFrame(this.zidian[map_detail[i][j]["map_type"]])
                                var llst=ll.getComponent(Sprite)
                                ll.setParent(lls)
                                llst.spriteFrame=cardsp
                                // ll.name=String(i)+','+String(j)
                                let nammmmee=String(map_detail[i][j]['id'])
                                ll.name=nammmmee
                                
                                let x =Number(i)
                                let y =Number(j)
                                ll.setPosition(x*100-250,y*100-600,0)

                                let element_prob=Number(map_detail[i][j].set_include)/100

                                let EM=instantiate(this.elementSet)
                                EM.setScale(element_prob,1)
                                EM.setPosition(0,-30,0)
                                EM.setParent(ll)

                                // let nc=0
                                // console.log(element_num)
        
                                // for (nc = 0; nc < element_num; nc++) {
                                //     let EM:Node=instantiate(this.elementSet)
                                //     EM.getComponent(Sprite).color.set(Color.GRAY)
                                //     let ranx=(random()-0.5)*70
                                //     let rany=(random()-0.5)*70

                                //     EM.setPosition(ranx,rany,0)
                                //     EM.setParent(ll)

                                // }
                                

                            }


                        }



                    }
                }

                var urll="http://101.132.72.206/?type=movewatcher&x="+watcher_x+'&y='+watcher_y+'&userId='+globalThis.mynotice.id

                request.open("get",urll,true);
                request.send();



            })
    
        })

    }




    update(deltaTime: number) {
        if(globalThis.con_updateFarmer==undefined){
            console.log(globalThis.con_updateFarmer)
            setInterval(()=>{this.updateFarmer()},1000)
            globalThis.con_updateFarmer=100
            console.log(globalThis.con_updateFarmer)
        }

        
    }
}

