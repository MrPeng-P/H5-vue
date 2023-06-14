export default class timer{
    _time
    _t
    _Interval
    constructor(time){
        this._time=time
        this._t=200
        this.setInter()
    }
    setTime(){
        setTimeout(()=>{
        },5000)
    }
    setInter(){
        
       this._Interval= setInterval(this.fn.bind(this),this._t)
    }
    fn(){
        this._t-=10
        clearInterval(this._Interval)
        if(this._t>0){
            this._Interval= setInterval(this.fn.bind(this),this._t)
        }
    }
}