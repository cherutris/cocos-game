import { _decorator, Component, Node,SpriteAtlas,Sprite,SpriteFrame, resources, loader, AssetManager, assetManager, instantiate, Scene, director } from 'cc';
const { ccclass, property } = _decorator;





@ccclass('for_map_site')
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


    start(){
        this.zidian1={'map_blank.jpg':'map_blank','map_fire.jpg':'map_fire','map_clay.jpg':'map_clay','map_flash.jpg':'map_flash','map_life.jpg':'map_life','map_metal.jpg':'map_metal','map_water.jpg':'map_water','map_wind.jpg':'map_wind',}
        
    }


    update(deltaTime:number) {
        




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
        // ff.setPosition(350,300,0)
        // var ff:Node=this.node.getChildByName('map10')
        // ff.setPosition(450,300,0)


        



        

    

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

                let map_detail=resJson.map_detail
                
                for(let i in map_detail){
                    for(let j in map_detail[i]){
                        // let ll:Node=instantiate(this.zidian[map_detail[i][j]["map_type"]])
                        let ll:Node=instantiate(this.map_blank)
                        var cardsp=atlas.getSpriteFrame(this.zidian1[map_detail[i][j]["map_type"]])
                        var lls=ll.getComponent(Sprite)
                        ll.setParent(this.node)
                        lls.spriteFrame=cardsp
                        
                        let x =Number(i)
                        let y =Number(j)
                        ll.setPosition(x*100-250,y*100-450,0)

                    }


                }


                let farmers=resJson.farmers_wx
                for(let farmer in farmers){
                    let ff:Node=instantiate(this.person)

                    ff.setParent(this.node)
                    
                    let x =Number(farmers[farmer].where.x)
                    let y =Number(farmers[farmer].where.y)
                    ff.setPosition(x,y)
                    console.log(this.node)
                }



            }
        }

        request.open("get","http://101.132.72.206/?type=usual",true);
        request.send();
        // var ll=instantiate(this.mapxx);
        // ll.setParent(this.node)
        // ll.setPosition(0,0,0)
        



    }


}

