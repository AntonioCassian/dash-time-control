'use client';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GoPlus } from "react-icons/go";
import { Button } from "./ui/button";
import { Badge } from "./ui/bagdes";
import { useModal } from "@/hooks/modal";
import { FormModal } from "./FormModal";

type Funcionario = {
  id: number;
  initials: string;
  name: string;
  role?: string;
  department: string;
  status: string;
  hoursToday: string;
  location: string;
};

type BancoHorasFuncionario = {
  codigo: string;
  funcionario: string;
  departamento: string;
  saldo: string;
  status: string;
  trabalhado: string;
  previsto: string;
  ultimaAtualizacao: string;
};

type Column<T> = {
  key: keyof T | "actions";
  label: string;
  render?: (value: any, row: T) => React.ReactNode;
};

type Props<T> = {
  header: boolean;
  data: T[];
  columns: Column<T>[];
};

export const EmployeesTable = ({ header, data, columns }: Props) => {
  const modal = useModal();

  return (
    <>
      <Card className="border-card p-4">
        {header && <CardHeader className="flex justify-between flex-row items-center pt-0 px-0">
          <CardTitle className="text-2xl">Funciários</CardTitle>
          <div>
            <Button onClick={() => { modal.openModal('funcionario') }}>
              <GoPlus />
              Adicionar Funcionário
            </Button>
          </div>
        </CardHeader>}

        <CardContent className="p-0 px-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-card bg-muted">
                <tr>
                  {columns.map(col => (
                    <th key={col.key.toString()} className="p-4 text-left">{col.label}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {data.map(emp => (
                  <tr key={emp.id} className="border-b border-card hover:bg-muted/50 transition-colors">
                    {columns.map(col => (
                      <td key={col.key.toString()} className="p-4">
                        {col.render
                          ? col.render(emp[col.key as keyof Funcionario], emp)
                          : emp[col.key as keyof Funcionario]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>


      {modal.modalType === "funcionario" && (
        <FormModal
          closeModal={modal.closeModal}
          modalRef={modal.modalRef}
        />
      )}
    </>
  );
};