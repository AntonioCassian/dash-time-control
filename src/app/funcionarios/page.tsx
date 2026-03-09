'use client'

import { EmployeesTable } from "@/components/Employes"
import { FormModal } from "@/components/FormModal"
import { TitlePage } from "@/components/Title"
import { Button } from "@/components/ui/button"
import { useModal } from "@/hooks/modal"
import { GoPlus } from "react-icons/go"

export default function Funcionarios() {
    const modal = useModal();
    return (
        <>
            <div className="flex justify-between items-center">
                <TitlePage title="Funcionários" description="Gerencie o cadastro de funcionários da empresa" />
                <div>
                    <Button onClick={() => { modal.openModal('funcionario') }}>
                        <GoPlus />
                        Adicionar Funcionário
                    </Button>
                </div>
            </div>
            <EmployeesTable header={false} />
              {modal.modalType === "funcionario" && (
        <FormModal
          modalRef={modal.modalRef}
          closeModal={modal.closeModal}
        />
      )}
        </>
    )
}