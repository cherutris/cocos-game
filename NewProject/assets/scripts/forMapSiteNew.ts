import { _decorator, Component, Node,SpriteAtlas,Sprite,SpriteFrame, resources, loader, AssetManager, assetManager, instantiate, Scene, director, EventTouch, systemEvent, Input, input } from 'cc';
const { ccclass, property } = _decorator;






@ccclass('forMapSiteNew')
export class for_map_site extends Component {

    

    @property(Node)
    private map_blank:Node =null
    @property(Node)
    private person:Node =null
    // @property(Sprite)
    // private map01:Sprite =null
    // @property(Sprite)
    // private map02:Sprite =null
    // @property(Sprite)
    // private map03:Sprite =null
    // @property(Sprite)
    // private map04:Sprite =null
    // @property(Sprite)
    // private map05:Sprite =null
    // @property(Sprite)
    // private map06:Sprite =null
    // @property(Sprite)
    // private map07:Sprite =null
    // @property(Sprite)
    // private map08:Sprite =null
    // @property(Sprite)
    // private map09:Sprite =null
    // @property(Sprite)
    // private map10:Sprite =null
    // @property(Node)
    // private mapxx:Node=null
    private zidian1={}



    start() {




        this.zidian1={'map_blank.jpg':'map_blank','map_fire.jpg':'map_fire','map_clay.jpg':'map_clay','map_flash.jpg':'map_flash','map_life.jpg':'map_life','map_metal.jpg':'map_metal','map_water.jpg':'map_water','map_wind.jpg':'map_wind',}
        




        var bundle: AssetManager.Bundle = null;
        assetManager.loadBundle("res",(err,ab:AssetManager.Bundle)=>{
            if(err){
                console.log(err);
                return;
            }
            bundle=ab;
            this.loadSAfromBundle(bundle);

        });

        // var ff:Node=this.node.getChildByName('map01')
        // ff.setPosition(-450,300,0)
        // var ff:Node=this.node.getChildByName('map02')
        // ff.setPosition(-350,300,0)
        // var ff:Node=this.node.getChildByName('map03')
        // ff.setPosition(-250,300,0)
        // var ff:Node=this.node.getChildByName('map04')
        // ff.setPosition(-150,300,0)
        // var ff:Node=this.node.getChildByName('map05')
        // ff.setPosition(-50,300,0)
        // var ff:Node=this.node.getChildByName('map06')
        // ff.setPosition(50,300,0)
        // var ff:Node=this.node.getChildByName('map07')
        // ff.setPosition(150,300,0)
        // var ff:Node=this.node.getChildByName('map08')
        // ff.setPosition(250,300,0)
        // var ff:Node=this.node.getChildByName('map09')
        // ff.setPosition(350,300,0)n
        // var ff:Node=this.node.getChildByName('map10')
        // ff.setPosition(450,300,0)

        input.on(Input.EventType.TOUCH_START,this.onTouchStart,this)
        
        input.on(Input.EventType.TOUCH_MOVE,this.onTouchMove,this)


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

                        let lls=instantiate(this.node)
                        lls.name=String(watcher_x)+String(watcher_y)
                        lls.setParent(this.node.parent)
                        lls.setPosition(position_x,position_y,0)
                        
                        

                        let map_detail=resJson.map_detail
                        
                        for(let i in map_detail){
                            for(let j in map_detail[i]){
                                // let ll:Node=instantiate(this.zidian[map_detail[i][j]["map_type"]])
                                let pname:string=String(i)+','+String(j)
                                let ll=lls.getChildByName(pname).getComponent(Sprite).spriteFrame
                                if(ll.name!=this.zidian1[map_detail[i][j]["map_type"]]){
                                    console.log(pname)
                                    globalThis.date=resJson.date
                                    var cardsp=atlas.getSpriteFrame(this.zidian1[map_detail[i][j]["map_type"]])
                                    
                                    this.node.getChildByName(pname).getComponent(Sprite).spriteFrame=cardsp
                                    


                                }
                                

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



    private onTouchStart(event:EventTouch){
        var clickLocation=event.getUILocation()
        console.log('ontouchstart',clickLocation)
        

    }

    private onTouchMove(event:EventTouch){
        var uidelta=event.getUIDelta()
        // globalThis.deltaWatcher_x=uidelta.x
        // globalThis.deltaWatcher_y=uidelta.y
        // globalThis.deltaWatcher_change=1
        let ppx=this.node.position.x
        let ppy=this.node.position.y

        this.node.setPosition(ppx+uidelta.x,ppy+uidelta.y,0)
        globalThis.deltaWatcher_x+=uidelta.x
        globalThis.deltaWatcher_y+=uidelta.y
        console.log(globalThis.deltaWatcher_x,globalThis.deltaWatcher_y)




        // if(globalThis.deltaWatcher_x>1000 || globalThis.deltaWatcher_y>500 || globalThis.deltaWatcher_y<-500 || globalThis.deltaWatcher_x<-1000){
        //     let deltaWatcher_x=globalThis.deltaWatcher_x
        //     let deltaWatcher_y=globalThis.deltaWatcher_y
        //     globalThis.deltaWatcher_x=0
        //     globalThis.deltaWatcher_y=0

        //     console.log(deltaWatcher_x,deltaWatcher_y)



            

        //     var bundle: AssetManager.Bundle = null;
        //     assetManager.loadBundle("res",(err,ab:AssetManager.Bundle)=>{
        //         if(err){
        //             console.log(err);
        //             return;
        //         }
        //         bundle=ab;
        //         bundle.load("map/sss", SpriteAtlas,(err,atlas:SpriteAtlas)=>{
        //             if(err){
        //                 console.log(err);
        //                 return;
        //             }
        //             console.log('开始http')

        //             var request = new XMLHttpRequest();
        //             request.onreadystatechange = () =>{
        //                 if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
        //                     let res=request.responseText;

        //                     let resJson=JSON.parse(res)
        //                     console.log(res)
                            
                            

        //                     let map_detail=resJson.map_detail
                            
        //                     for(let i in map_detail){
        //                         for(let j in map_detail[i]){
        //                             // let ll:Node=instantiate(this.zidian[map_detail[i][j]["map_type"]])
        //                             let pname:string=String(i)+','+String(j)
        //                             let ll=this.node.getChildByName(pname).getComponent(Sprite).spriteFrame
        //                             if(ll.name!=this.zidian1[map_detail[i][j]["map_type"]]){
        //                                 console.log(pname)
        //                                 globalThis.date=resJson.date
        //                                 var cardsp=atlas.getSpriteFrame(this.zidian1[map_detail[i][j]["map_type"]])
                                        
        //                                 this.node.getChildByName(pname).getComponent(Sprite).spriteFrame=cardsp
                                        


        //                             }
                                    

        //                         }


        //                     }



        //                 }
        //             }

        //             var urll="http://101.132.72.206/?type=movewatcher&x="+deltaWatcher_x+'&y='+deltaWatcher_y+'&userId='+globalThis.mynotice.id

        //             request.open("get",urll,true);
        //             request.send();



        //         })
        
        //     })





        //     this.node.setPosition(deltaWatcher_x%100,globalThis.deltaWatcher_y%100,0)
        // }




        
        

    }


    private loadSAfromBundle(bundle:AssetManager.Bundle){
        bundle.load("map/sss", SpriteAtlas,(err,atlas:SpriteAtlas)=>{
            if(err){
                console.log(err);
                return;
            }
            this.loadSFfromAtlas(atlas);


        });

    }
    private loadSFfromAtlas(atlas:SpriteAtlas){

        // var cardsp=atlas.getSpriteFrame(this.zidian.map01);
        // this.map01.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map02);
        // this.map02.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map03);
        // this.map03.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map04);
        // this.map04.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map05);
        // this.map05.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map06);
        // this.map06.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map07);
        // this.map07.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map08);
        // this.map08.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map09);
        // this.map09.spriteFrame=cardsp;

        var request = new XMLHttpRequest();
        request.onreadystatechange = () =>{
            if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                let res=request.responseText;

                let resJson=JSON.parse(res)
                console.log(resJson)
                globalThis.watcher_x=resJson.watcher_x
                globalThis.watcher_y=resJson.watcher_y

                let map_detail=resJson.map_detail
                this.node.name=String(resJson.watcher_x)+String(resJson.watcher_y)
                
                for(let i in map_detail){
                    for(let j in map_detail[i]){
                        // let ll:Node=instantiate(this.zidian[map_detail[i][j]["map_type"]])
                        let ll:Node=instantiate(this.map_blank)
                        var cardsp=atlas.getSpriteFrame(this.zidian1[map_detail[i][j]["map_type"]])
                        var lls=ll.getComponent(Sprite)
                        ll.setParent(this.node)
                        lls.spriteFrame=cardsp
                        ll.name=String(i)+','+String(j)
                        
                        let x =Number(i)
                        let y =Number(j)
                        ll.setPosition(x*100-250,y*100-600,0)

                    }


                }
                console.log(this.node)


                let farmers=resJson.farmers_wx
                for(let farmer in farmers){
                    let st:Node=this.node.getChildByName('farmer')
                    console.log(st)
                    let ff:Node=instantiate(st)
                    ff.name=farmers[farmer].name
                    console.log(farmers[farmer].name)

                    ff.setParent(this.node)
                    
                    let x =Number(farmers[farmer].where.x)
                    let y =Number(farmers[farmer].where.y)
                    ff.setPosition(x,y,100)
                    console.log(this.node)
                }
                globalThis.mynotice=resJson
                globalThis.date=resJson.date
                globalThis.deltaWatcher_x=0
                globalThis.deltaWatcher_y=0
                globalThis.deltaWatcher_change=0
                globalThis.mapUpdate=0

                this.setMap(resJson.watcher_x-600,resJson.watcher_y,-600,0)



            }
        }

        request.open("get","http://101.132.72.206/?type=usual",true);
        request.send();
        // var ll=instantiate(this.mapxx);
        // ll.setParent(this.node)
        // ll.setPosition(0,0,0)
        





    }
    private loadSAfromBundleUpdate(bundle:AssetManager.Bundle){
        bundle.load("map/sss", SpriteAtlas,(err,atlas:SpriteAtlas)=>{
            if(err){
                console.log(err);
                return;
            }
            this.loadSFfromAtlasUpdate(atlas);


        });

    }
    private loadSFfromAtlasUpdate(atlas:SpriteAtlas){

        // var cardsp=atlas.getSpriteFrame(this.zidian.map01);
        // this.map01.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map02);
        // this.map02.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map03);
        // this.map03.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map04);
        // this.map04.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map05);
        // this.map05.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map06);
        // this.map06.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map07);
        // this.map07.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map08);
        // this.map08.spriteFrame=cardsp;
        // var cardsp=atlas.getSpriteFrame(this.zidian.map09);
        // this.map09.spriteFrame=cardsp;


        
        

        var request = new XMLHttpRequest();
        request.onreadystatechange = () =>{
            if(request.readyState == 4 && (request.status >= 200 && request.status <400 )){
                let res=request.responseText;

                let resJson=JSON.parse(res)
                

                let map_detail=resJson.map_detail
                
                for(let i in map_detail){
                    for(let j in map_detail[i]){
                        // let ll:Node=instantiate(this.zidian[map_detail[i][j]["map_type"]])
                        let pname:string=String(i)+','+String(j)
                        let ll=this.node.getChildByName(pname).getComponent(Sprite).spriteFrame
                        if(ll.name!=this.zidian1[map_detail[i][j]["map_type"]] && resJson.date>globalThis.date){
                            console.log(pname)
                            globalThis.date=resJson.date
                            var cardsp=atlas.getSpriteFrame(this.zidian1[map_detail[i][j]["map_type"]])
                            
                            this.node.getChildByName(pname).getComponent(Sprite).spriteFrame=cardsp
                            


                        }
                        

                    }


                }


                let farmers=resJson.farmers_wx
                for(let farmer in farmers){
                    let st:Node=this.node.getChildByName(farmers[farmer].name)
    
                    
                    let x =Number(farmers[farmer].where.x)
                    let y =Number(farmers[farmer].where.y)
                    st.setPosition(x,y,100)
                }
                globalThis.mynotice=resJson


                // watcher_change
                // if((resJson.watcher_x!=globalThis.watcher_x || resJson.watcher_y!=globalThis.watcher_y) && resJson.date>globalThis.date){
                //     globalThis.date=resJson.date
                //     globalThis.watcher_x=resJson.watcher_x
                //     globalThis.watcher_y=resJson.watcher_y

                //     for(let i in map_detail){
                //         for(let j in map_detail[i]){
                //             // let ll:Node=instantiate(this.zidian[map_detail[i][j]["map_type"]])
                //             let pname:string=String(i)+','+String(j)
                //             let pp=this.node.getChildByName(pname)
                //             let x =pp.position.x
                //             let y =pp.position.y
                //             pp.setPosition(x+globalThis.deltaWatcher_x,y+globalThis.deltaWatcher_y,0)

                            
                            
                            
    
                //         }
    
    
                //     }

                    
                // }


                // if(globalThis.deltaWatcher_change==1){
                //     let ppx=this.node.position.x
                //     let ppy=this.node.position.y

                //     this.node.setPosition(ppx+globalThis.deltaWatcher_x,ppy+globalThis.deltaWatcher_y,0)

                //     console.log(globalThis.deltaWatcher_x)
                //     console.log(globalThis.deltaWatcher_y)
                //     globalThis.deltaWatcher_x=0
                //     globalThis.deltaWatcher_y=0
                
                //     globalThis.deltaWatcher_change=0
                    
                // }


                



            }
        }

        request.open("get","http://101.132.72.206/?type=usual",true);
        request.send();
        // var ll=instantiate(this.mapxx);
        // ll.setParent(this.node)
        // ll.setPosition(0,0,0)
        





    }


    private touchEvent(){
        
    }





    update(deltaTime:number){


        // if(globalThis.mapUpdate==0){
        //     globalThis.mapUpdate=1
        //     var bundle: AssetManager.Bundle = null;
        //     assetManager.loadBundle("res",(err,ab:AssetManager.Bundle)=>{
        //     if(err){
        //         console.log(err);
        //         return;
        //     }
        //     bundle=ab;
        //     this.loadSAfromBundleUpdate(bundle);
        //     setInterval(function(){},10000)
        //     globalThis.mapUpdate=0
        // });
        // }
        // console.log(globalThis.mapUpdate)
        

        
        
        
    }


}

