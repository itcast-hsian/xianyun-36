
/**
 * @desc: 计算相隔时间
 * 
 * @param: 参数 | 属性说明 | 参考值
 * @param: arr_time | 到达时间 | 14：10
 * @param: dep_time | 出发时间 | 12: 00
 * 
 * @return: 相隔时间的字符串
 */
export function computeTime( arr_time, dep_time ){
    // 如果参数有一个是空值，直接返回
    if(!arr_time || !dep_time) return;

    const arrTime = arr_time.split(":"); // 14: 10 = [14, 10]
    const depTime = dep_time.split(":"); // 12: 30 = [12, 30]

    // 第二天
    if(arrTime[0] < depTime[0]){
        arrTime[0] += 24;
    }

    // 到达时间的分钟
    const end = arrTime[0] * 60 + (+arrTime[1]);
    // 出发时间的分钟
    const start = depTime[0] * 60 + (+depTime[1]);
    // 相隔的分钟
    const dis = end - start;
    

    // 小时
    const hours =  Math.floor(dis / 60);
    // 分钟
    const min = dis % 60;

    return `${hours}小时${min}分钟`;
}

/**
 * 
 */
export function abc(){

}
