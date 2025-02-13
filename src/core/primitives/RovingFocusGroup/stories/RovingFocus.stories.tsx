import React from 'react';
import SandboxEditor from '~/components/tools/SandboxEditor/SandboxEditor';
import RovingFocus from '../RovingFocus';
import Button from '~/components/ui/Button/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export


export default {
    title: 'WIP/RovingFocusGroup',
    component: RovingFocus,
    render: (args: any) => <SandboxEditor>
        <div >
        <RovingFocus.Root>
                <RovingFocus.Group>
                    <RovingFocus.Item>
                        <Button> item 1 </Button>
                    </RovingFocus.Item>
                    <RovingFocus.Item>
                        <Button> item 2  </Button>
                    </RovingFocus.Item>
                    <RovingFocus.Item>
                        <Button> item 3 </Button>
                    </RovingFocus.Item>
                </RovingFocus.Group>

                <RovingFocus.Group>
                    <RovingFocus.Item>
                        <div> item 1 </div>
                    </RovingFocus.Item>
                </RovingFocus.Group>
        </RovingFocus.Root> 

        </div>
    </SandboxEditor>
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const All = {
    args: {
        className: ""
    }
}

