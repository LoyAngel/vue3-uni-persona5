src_text = ""
src_arr = src_text.split("\n");
name_text = ""
name_arr = name_text.split("\n");

const to_be_added = [];
for (let i = 0; i < src_arr.length; i++) {
    to_be_added.push({
        title: name_arr[i],
        src: src_arr[i]
    });
}

const to_be_handled = [];

// 合并to_be_added 和 to_be_handled 对象
const res = to_be_handled.map((item) => {
    const obj = to_be_added.find((i) => i.title === item.title);
    if (obj) {
        return {
            ...item,
            image: obj.src
        };
    }
})

// 写出到文件
const fs = require('fs');
fs.writeFileSync('./res.json', JSON.stringify(res, null, 4));

debugger;
