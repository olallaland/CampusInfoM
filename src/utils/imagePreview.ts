export const imagePreview = function(event) {

  this.picture = event.srcElement.files[0]; // 获取图片这里只操作一张图片
  // this.imgSrc = window.URL.createObjectURL(this.picture); // 获取上传的图片临时路径

  let file;
  if (event.target.files[0]) {
    // tslint:disable-next-line:no-shadowed-variable
    file = event.target.files[0];
    console.log(file);
    console.log('file.size = ' + file.size);
    // obj.file = file;
  }
  this.user.picture = file;

  // file.size 单位为byte
  const reader = new FileReader();
  // 读取文件过程方法
  // tslint:disable-next-line:only-arrow-functions
  reader.onloadstart = function(e) {
    console.log('开始读取....');
  };
  // tslint:disable-next-line:only-arrow-functions
  reader.onprogress = function(e) {
    console.log('正在读取中....');
  };
  // tslint:disable-next-line:only-arrow-functions
  reader.onabort = function(e) {
    console.log('中断读取....');
  };
  // tslint:disable-next-line:only-arrow-functions
  reader.onerror = function(e) {
    console.log('读取异常....');
  };
  // tslint:disable-next-line:only-arrow-functions
  reader.onload = function(e) {
    console.log('成功读取....');

    const img = document.getElementById('imgPreview');
    if (typeof e.target.result === 'string') {
      img.setAttribute('src', e.target.result);
    }
  };
  reader.readAsDataURL(file);
};
