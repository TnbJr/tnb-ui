import React from 'react';
import { TextInput } from '../../index.js'

export default () => (
    <div>
      <TextInput placeholder='100' />
      <TextInput tiny placeholder='tiny' />
      <TextInput small placeholder="small" />
      <TextInput long placeholder="long" value="yay" />
      <TextInput big placeholder="big" />
      <TextInput stretch placeholder="stretch" />
      <TextInput type="password" placeholder="password" />
      <TextInput placeholder='some text'
        disabled />
    </div>
  )