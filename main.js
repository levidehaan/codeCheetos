/* 
 * CodeCheetos
 * 
 */

var cheeto = (function( bb, $, cheeto, undefined ) {
    
    if(!bb.app.author){
        return;
    }
        
    cheeto = {
        
        enableAudio: function(){
            this.enableAudio = true;
            cheeto.audio = enable("audio");
        },
        enableCache: function(){
            this.enableCache = true;
            cheeto.cache = enable("cache");
        },
        enableFilemanagement: function(){
            this.enableFilemanagement = true;
            cheeto.filemanagement = enable("filemanagement");
        }
        
    };
    
    function enable(name){
        var enabled = require(["js/"+name], function(enabled){
            return enabled;
        });
    }
    
    return cheeto;
        
}(blackberry, jQuery, cheeto));

