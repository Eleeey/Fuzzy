'use client'

import { Plus } from 'lucide-react'
import React from 'react'
import CustomModal from '../../../../../components/shared/CustomModal'
import WorkflowForm from '../../../../../components/forms/WorkflowForm'
import { Button } from '../../../../../components/ui/button'
import { useModal } from '../../../../../providers/modal-provider'
import { useBilling } from '../../../../../providers/billing-ptovider'

type Props = {}

const WorkflowButton = (props: Props) => {
  const { setOpen} = useModal()
  const { credits } = useBilling()

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <WorkflowForm />
      </CustomModal>
    )
  }

  return (
    <Button size={"icon"} onClick={handleClick}>
      <Plus />
    </Button>
  );
}

export default WorkflowButton
