import React from 'react'
import EditorProvider from '../../../../../../providers/editor-provider';
import { ConnectionsProvider } from '../../../../../../providers/connection-provider';
import EditorCanvas from './_components/EditorCanvas';

type Props = {}

const page = (props: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas />
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
}

export default page