// const fs = require("fs");

// fs.writeFile("c.txt", "淡黄的长裙，蓬松的头发", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("文件写入成功");
// });

const fs=require('fs');
fs.writeFile('a.txt','淡黄的长裙,蓬松的头发',(error)=>{
    console.log('文件写入成功了')
})
