## TODO


- [x] image hidden height width
- [ ] 图片左中右国际化
- [x] 隐藏 tabbar
- [ ] 代码编辑
- [ ] CSS 引入问题，是否必须引入
- [ ] 全屏
- [x] 使用 es6 module



##  定义上传图片的大小


```
showImageModalSize: true
```


## 图片左中右国际化

需要将 translation 传入 renderer/Image

## 隐藏 tabbar

- 当 toolbar 隐藏的的时候，设置 `zIndex: -999`
- 当 toolbar 显示的的时候，设置 `zIndex: 999`

## 使用 es6 module

```js
// "export 'default' (imported as 'i18n') was not found in '@nodejh/react-draft-wysiwyg/src/i18n/index.js'

// change
module.exports = {
  en,
  fr,
  zh,
  ru,
  pt,
  ko,
  it,
  nl,
  de,
  da,
  zh_tw,
  pl,
  es,
  ja
};


// to
export default {
  en,
  fr,
  zh,
  ru,
  pt,
  ko,
  it,
  nl,
  de,
  da,
  zh_tw,
  pl,
  es,
  ja
}
```
