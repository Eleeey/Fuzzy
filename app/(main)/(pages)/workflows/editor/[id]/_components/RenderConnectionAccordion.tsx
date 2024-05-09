"use client"

import React from 'react'
import { Connection } from '../../../../../../../types'
import { EditorState } from '../../../../../../../providers/editor-provider'
import { useNodeConnections } from '../../../../../../../providers/connection-provider'
import { useFuzzieStore } from '../../../../../../../store'
import { AccordionContent } from '../../../../../../../components/ui/accordion'
import ConnectionCard from '../../../../connections/_components/ConnectionCard'
import MultipleSelector from '../../../../../../../components/ui/multiple-selector'

type Props = {}

const RenderConnectionAccordion = ({
  connection,
  state,
}: {
  connection: Connection
  state: EditorState
}) => {
    const {
      title,
      image,
      description,
      connectionKey,
      accessTokenKey,
      alwaysTrue,
      slackSpecial,
    } = connection;

    const { nodeConnection } = useNodeConnections();
    const { slackChannels, selectedSlackChannels, setSelectedSlackChannels } =
      useFuzzieStore();

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState("");

      const connectionData = (nodeConnection as any)[connectionKey];

      const isConnected =
        alwaysTrue ||
        (nodeConnection[connectionKey] &&
          accessTokenKey &&
          connectionData[accessTokenKey!]);
  return (
    <AccordionContent key={title}>
      {state.editor.selectedNode.data.title === title && (
        <>
          <ConnectionCard
            title={title}
            icon={image}
            description={description}
            type={title}
            connected={{ [title]: isConnected }}
          />
          {slackSpecial && isConnected && (
            <div className="p-6">
              {slackChannels?.length ? (
                <>
                  <div className="mb-4 ml-1">
                    Select the slack channels to send notification and messages:
                  </div>
                  <MultipleSelector
                    value={selectedSlackChannels}
                    onChange={setSelectedSlackChannels}
                    defaultOptions={slackChannels}
                    placeholder="Select channels"
                    emptyIndicator={
                      <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                        no results found.
                      </p>
                    }
                  />
                </>
              ) : (
                "No Slack channels found. Please add your Slack bot to your Slack channel"
              )}
            </div>
          )}
        </>
      )}
    </AccordionContent>
  );
}

export default RenderConnectionAccordion