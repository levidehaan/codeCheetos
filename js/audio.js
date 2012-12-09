
(function(cheeto, bb){
    
    //var supported_types = bb.media.microphone.getSupportedMediaTypes();
    cheeto.enableFilemanagement();
    
    cheeto.audio = {
        options : {
            filename: "default.wav"
        },
        record : function(filename, type, options){
            
        },
        
        stop: function(){
            
        },
        pause: function(){
            
        },
        audioPlayer: function(file, options){
            $.widget("cheeto.audioPlayer", {
                options: {
                    
                },
                _create: function(){
                    
                }
                
            });
        }
    };
    
    return cheeto;
    
}(cheeto, blackberry, jQuery || {}));