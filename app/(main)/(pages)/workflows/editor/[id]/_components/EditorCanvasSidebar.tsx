"use client"

import React, { useEffect } from 'react'
import { useEditor } from '../../../../../../../providers/editor-provider';
import { useNodeConnections } from '../../../../../../../providers/connection-provider';
import { EditorNodeType } from '../../../../../../../types';

type Props = {
  nodes: EditorNodeType[];
};

const EditorCanvasSidebar = ({ nodes }: Props) => {

    const { state } = useEditor();
    const { nodeConnection } = useNodeConnections();
    // const { googleFile, setSlackChannels } = useFuzzieStore();


    useEffect(() => {
      if (state) {
        // onConnections(nodeConnection, state, googleFile);
      }
    }, [state]);


    // useEffect(() => {
    //   if (nodeConnection.slackNode.slackAccessToken) {
    //     fetchBotSlackChannels(
    //       nodeConnection.slackNode.slackAccessToken,
    //       setSlackChannels
    //     );
    //   }
    // }, [nodeConnection]);
  return <div>EditorCanvasSidebar</div>;
};

export default EditorCanvasSidebar