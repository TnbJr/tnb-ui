import React from 'react';
import Form from '../../components/Forms'
import InputBlock from '../../components/Forms/input-block.js'
// import { TextInput } from '../../components/Forms/input/index.js'

export default () => (
    <div>
    <InputBlock narrow>
      <InputBlock.Item label='Name'>
        {/* <StatefulTextInput placeholder='Timbo' /> */}
        <input/>
      </InputBlock.Item>
      <InputBlock.Item label='Email'>
        {/* <StatefulTextInput placeholder='timbo@assessre.com' /> */}
      </InputBlock.Item>
      {/* <InputBlock.Buttons>
        <Button form>
          Update
        </Button>
      </InputBlock.Buttons> */}
    </InputBlock>
    </div>
)