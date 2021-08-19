// utils 工具
export const Throttle = (fn, delay) => {  // 节流函数
    let prev = Date.now()         
    return function() {               
      let now = Date.now()               
      if (now - prev > delay) {                   
        fn()                
        prev = Date.now()             
      }         
    }       
  }

