const events = require('events')

class EventEmitter extends events{
    emit(eventName,...args){
        super.emit(eventName,...args)
        for(const source in this._events){
            if(source!==eventName&&new RegExp(`^${source}$`).test(eventName)){
                super.emit(source,...args)
            }
        }
    }
}

module.exports=EventEmitter

// const event=new EventEmitter()
// event.on('.*',console.log)
// event.emit('inbox',{from:'inbox'})
// event.emit('outbox',{from:'outbox'})