class Log {
    constructor() {
        this.id = Date.now();
      } 
      log = (value) => {
      console.log(`[logger:${this.id}]:${value}`);
    };
  
}
module.exports=Log;