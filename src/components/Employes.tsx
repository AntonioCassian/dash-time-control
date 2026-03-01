import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GoPlus } from "react-icons/go";
import { Button } from "./ui/button";
import { Badge } from "./ui/bagdes";

const employees = [
  {
    id: 1,
    initials: "AC",
    name: "Ana Carolina Silva",
    role: "Desenvolvedora",
    department: "TI",
    status: "Online",
    hoursToday: "7h32",
    location: "Escritório SP",
  },
  {
    id: 2,
    initials: "BR",
    name: "Bruno Rodrigues",
    role: "Analista de Sistemas",
    department: "TI",
    status: "Online",
    hoursToday: "8h10",
    location: "Home Office",
  },
  {
    id: 3,
    initials: "CM",
    name: "Carla Mendes",
    role: "Coordenadora RH",
    department: "Recursos Humanos",
    status: "Offline",
    hoursToday: "6h45",
    location: "Escritório RJ",
  },
  {
    id: 4,
    initials: "DS",
    name: "Diego Souza",
    role: "Técnico de Suporte",
    department: "TI",
    status: "Online",
    hoursToday: "7h58",
    location: "Escritório SP",
  },
  {
    id: 5,
    initials: "EL",
    name: "Eduardo Lima",
    role: "Gerente Comercial",
    department: "Comercial",
    status: "Reunião",
    hoursToday: "5h20",
    location: "Escritório BH",
  },
  {
    id: 6,
    initials: "FM",
    name: "Fernanda Martins",
    role: "Analista Financeiro",
    department: "Financeiro",
    status: "Online",
    hoursToday: "8h00",
    location: "Home Office",
  },
  {
    id: 7,
    initials: "GL",
    name: "Gustavo Lopes",
    role: "Designer UX",
    department: "Produto",
    status: "Online",
    hoursToday: "7h12",
    location: "Escritório SP",
  },
  {
    id: 8,
    initials: "HS",
    name: "Helena Santos",
    role: "Assistente Administrativo",
    department: "Administrativo",
    status: "Offline",
    hoursToday: "4h30",
    location: "Escritório Curitiba",
  },
  {
    id: 9,
    initials: "IR",
    name: "Igor Ribeiro",
    role: "Desenvolvedor Backend",
    department: "TI",
    status: "Online",
    hoursToday: "8h22",
    location: "Home Office",
  },
  {
    id: 10,
    initials: "JS",
    name: "Juliana Souza",
    role: "Especialista Marketing",
    department: "Marketing",
    status: "Reunião",
    hoursToday: "6h10",
    location: "Escritório SP",
  },
];

export const EmployeesTable = () => {
  return (
    <Card className="border-card p-4">
      <CardHeader className="flex justify-between flex-row items-center pt-0 px-0">
        <CardTitle className="text-2xl">Funciários</CardTitle>
        <div>
          <Button />
        </div>
      </CardHeader>

      <CardContent className="p-0 px-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-card bg-muted">
              <tr className="text-left">
                <th className="p-4">Funcionário</th>
                <th className="p-4">Departamento</th>
                <th className="p-4">Status</th>
                <th className="p-4">Horas Hoje</th>
                <th className="p-4">Localização</th>
                <th className="p-4 text-right">Ações</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee) => (
                <tr
                  key={employee.id}
                  className="border-b border-card hover:bg-muted/50 transition-colors"
                >
                  {/* Funcionário */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground font-semibold">
                        {employee.initials}
                      </div>
                      <div>
                        <p className="font-medium">{employee.name}</p>
                        <p className="text-muted-foreground text-xs">
                          {employee.role}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Departamento */}
                  <td className="p-4">{employee.department}</td>

                  {/* Status */}
                  <td className="p-4">
                    {/* <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${employee.status === "Online"
                        ? "bg-green-100 text-green-700"
                        : employee.status === "Offline"
                          ? "bg-gray-200 text-gray-600"
                          : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {employee.status}
                    </span> */}
                    <Badge variant={"default"}>
                       {employee.status}
                    </Badge>
                  </td>

                  {/* Horas */}
                  <td className="p-4 font-medium text-center">
                    {employee.hoursToday}
                  </td>

                  {/* Localização */}
                  <td className="p-4">{employee.location}</td>

                  {/* Ações */}
                  <td className="p-4 text-right space-x-2">
                    <button className="text-primary hover:underline">
                      Ver
                    </button>
                    <button className="text-destructive hover:underline">
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};