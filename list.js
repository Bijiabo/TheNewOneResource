const fs = require('fs');
const archiver = require('archiver');

let list = [];

// 写入文件
const writeToFile = (data) => {
    fs.writeFile('list.json', JSON.stringify(data, null, '\t'), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

// 批量打包
const zipFiles = () => {
    console.log('\n\n开始批量打包...\n');
    list.map((item, index) => {
        console.log(`打包 ${index} ${item}`);
        
        const output = fs.createWriteStream(`${__dirname}/dist/${item}.zip`);
        const archive = archiver('zip');
        archive.pipe(output);
        archive.directory(`dev/${item}/`, false);
        archive.finalize();
    });
    console.log('\n批量打包完成------\n\n');
};


// 添加目录
fs.readdir('./dev', function (err, files) {
    if (err != null) {
        console.log('读取 ./dev 目录错误，请检查。\n程序退出');
        return;
    }
    console.log(err, files);
    list = list.concat(files);
    
    const listJSONObject = {
        packageTime: new Date(),
        data: list
    };
    
    writeToFile(listJSONObject);
    
    // 执行批量打包
    zipFiles();
});



