# React Draft Wysiwyg

A Wysiwyg editor built using ReactJS and DraftJS libraries based on [https://github.com/jpuri/react-draft-wysiwyg](https://github.com/jpuri/react-draft-wysiwyg).


[Demo Page](https://jpuri.github.io/react-draft-wysiwyg).

[![Build Status](https://travis-ci.org/jpuri/react-draft-wysiwyg.svg?branch=master)](https://travis-ci.org/jpuri/react-draft-wysiwyg)

![](http://i.imgur.com/tU7kJ6i.gif)

## Installing

```
$ npm install draft-js @nodejh/react-draft-wysiwyg --save
```

## Getting started
Editor can be used as simple React Component:

```js
import { Editor } from '@nodejh/react-draft-wysiwyg';
import '@nodejh/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
<Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>
```
