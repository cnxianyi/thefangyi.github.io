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

// 随机数 输出数组
        //  使用文件内的数组  ,   随机数最大值  ,  随机数数量
export const getRandom = (array , total , target) => {
  let carry = []
        let output = []
				for (let i=1; i < total; i++) {
					carry[i] = i	
				}
				for (let num, i = 0; i<target; i++) {
					do {
						num = Math.floor(Math.random() * carry.length);
					} while (carry[num] == null);
          output.unshift(carry[num])
           carry[num] = null
				}
        for (let i = 0; i < target; i++) {
          array[i] = output[i]
        }
}

export const getRandom2 = (array , total , target) => {
  let carry = []
        let output = []
				for (let i=1; i < total; i++) {
					carry[i] = i	
				}
				for (let num, i = 0; i<target; i++) {
					do {
						num = Math.floor(Math.random() * carry.length);
					} while (carry[num] == null);
          output.unshift(carry[num])
           carry[num] = null
				}
        for (let i = 0; i < target; i++) {
          array[i] = output[i]
        }
}
