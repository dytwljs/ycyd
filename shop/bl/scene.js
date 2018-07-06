var api = require('../config/api.js');

function CheckScene(scene){
    if(scene>1000000){
        
    }
}


function  handOptions(options){
    console.log(options);
    console.log(options.scene);

    var scene = decodeURIComponent(options.scene)
    this.shareTicket='';
    if(options && options.scene&&options.scene==1044){
      this.shareTicket=options.shareTicket?options.shareTicket:'';
    }
  }