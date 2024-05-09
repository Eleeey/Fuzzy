import React from 'react'
import Workflow from './Workflow'

type Props = {}

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows();
  return (
    <div className="relative flex flex-col gap-4">
        <section className="flex flex-col m-2">
            <Workflow name={''} description={''} id={'e583r45tt0q118'} publish={null}/>
        </section>
    </div>
  )
}

export default Workflows