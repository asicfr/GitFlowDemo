module.exports = {
    immutableShift : (arr) => {
        return arr.slice(1)     
    },
    immutableDelete : (arr, index) => {
        return arr.slice(0,index).concat(arr.slice(index+1))
    },
    immutablePush : (arr, newEntry) =>{
        return [ ...arr, newEntry ]      
    },
    checkFunction : (c, t) => {
        if(typeof c[t] !== 'function')
            throw new Error('Invalid Command')
    }
}


