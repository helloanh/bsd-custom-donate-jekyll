
    window._gaq = window._gaq || [];
    window.optimizely = window.optimizely || [];

    var gup = function(name) {
            name = name.replace(/(\[|\])/g,"\\$1");
            var regex = new RegExp("[\\?&]"+name+"=([^&#]*)"),
                results = regex.exec( window.location.href );
                return ( results === null )?"":results[1];
        },
        report = function(ga,opt){
            window._gaq.push( ['_trackEvent'].concat(ga) );
            window.optimizely.push( ['trackEvent'].concat(opt) );
            //console.log("ANALYTICS:", ga,opt);
        },
        topics = {},
        hash = window.location.hash.replace("#",''),
        nonsecure = ( window.location.protocol.indexOf('s')===-1 ),
        nomin = ( gup('nomin')==="1" ),
        touch  = !!('ontouchstart' in window) || !!('msmaxtouchpoints' in window.navigator);

    String.prototype.commafy = function () {
        return this.replace(/(^|[^\w.])(\d{4,})/g, function($0, $1, $2) {
            return $1 + $2.replace(/\d(?=(?:\d\d\d)+(?!\d))/g, "$&,");
        });
    };

    Number.prototype.commafy = function () {
        return String(this).commafy();
    };

    if (nonsecure){
        console.log('WARNING: nonsecure domain = test mode.');
        $('body').prepend('<div class="insecure-warning">non-secure domain, using test mode.</div>');
    }

    /*add pretty timeouts*/
    $.wait = function(time) {
      return $.Deferred(function(dfd) {
        setTimeout(dfd.resolve, time);
      });
    };

    /*add basic pub sub, for error-free behavior chains*/
    $.Topic = function( id ) {
        
        var callbacks,
            topic = id && topics[ id ];
        if ( !topic ) {
            callbacks = $.Callbacks();
            topic = {
                publish: callbacks.fire,
                subscribe: callbacks.add,
                unsubscribe: callbacks.remove
            };
            if ( id ) {
                topics[ id ] = topic;
            }
        }
        return topic;
    };