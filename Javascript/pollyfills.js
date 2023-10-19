
Array.prototype.myOwnMap = function(cb){
    let result = []
    for( let i =0; i< this.length; i++){
        result.push(cb(this[i], i, this))
       
    }
    return result
}
Array.prototype.myOwnFilter = function(cb){
    let result = []
    for( let i =0; i< this.length; i++){
        if(cb(this[i])){
            result.push(this[i])
        }  
    }
    return result
}
Array.prototype.myOwnFind = function(cb){
    for( let i =0; i< this.length; i++){
        if(cb(this[i])){
            return this[i];
        }  
    }
}

let arr = [1,2,3,4,5];
console.log("as",arr.myOwnFind((ele, idx) => ele === 3));