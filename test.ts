const datas:Array<number> = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 ] ;
const mut:Array<number> = _.clone(datas.map(() => arguments[0] + 10 ));
console.log(mut);