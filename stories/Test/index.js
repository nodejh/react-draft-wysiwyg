/* @flow */

import React from 'react';
import { Editor } from '../../src';
import './styles.css';


function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
    xhr.open('POST', 'https://sm.ms/api/upload');
    const data = new FormData(); // eslint-disable-line no-undef
    data.append('smfile', file);
    xhr.send(data);
    xhr.addEventListener('load', () => {
      const response = JSON.parse(xhr.responseText);
      if (response.code === 'success') {
        // resolve(response.data.url);
        resolve({ data: { link: response.data.url } });
      } else {
        reject(response);
      }
    });
    xhr.addEventListener('error', () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.state = {
    //   toolbarHidden: true,
    // };
  }

  render() {
    // const { toolbarHidden } = this.state;
    return (
      <div className="test-root">
        <h3>Test</h3>
        <h3>Test</h3>
        <h3>Test</h3>
        <h3>Test</h3>
        <Editor
          toolbarClassName="test-toolbar"
          wrapperClassName="test-wrapper"
          editorClassName="test-editor"
          localization={{
            locale: 'zh',
          }}
          // toolbarHidden={toolbarHidden}
          toolbarOnFocus
          toolbar={{
            image: {
              uploadCallback: uploadImageCallBack,
              // alt: { present: true, mandatoryt: false },
              previewImage: true,
            },
          }}
        />

        <Editor
          toolbarClassName="test-toolbar"
          wrapperClassName="test-wrapper"
          editorClassName="test-editor"
          localization={{
            locale: 'zh',
          }}
          // toolbarHidden={toolbarHidden}
          toolbarOnFocus
          toolbar={{
            image: {
              uploadCallback: uploadImageCallBack,
              // alt: { present: true, mandatoryt: false },
              previewImage: true,
            },
          }}
        />
      </div>
    );
  }
}


export default Test;
