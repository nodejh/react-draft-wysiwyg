## TODO


- [x] image hidden height width
- [ ] 图片左中右国际化
- [x] 隐藏 tabbar
- [ ] 代码编辑
- [ ] CSS 引入问题，是否必须引入
- [ ] 全屏



##  定义上传图片的大小


```
showImageModalSize: true
```


## 图片左中右国际化

需要将 translation 传入 renderer/Image

## 隐藏 tabbar

- 当 toolbar 隐藏的的时候，设置 `zIndex: -999`
- 当 toolbar 显示的的时候，设置 `zIndex: 999`
