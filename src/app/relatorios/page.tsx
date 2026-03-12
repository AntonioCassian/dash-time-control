import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { FaChartBar, FaClock, FaLine, FaUsers } from "react-icons/fa";

const dashboardCards = [
  {
    titulo: "Horas Trabalhadas",
    descricao: "Total de horas por funcionário e departamento",
    icon: <FaClock />
  },
  {
    titulo: "Frequência",
    descricao: "Taxa de presença, atrasos e faltas",
    icon: <FaUsers />
  },
  {
    titulo: "Banco de Horas",
    descricao: "Saldos acumulados e compensações",
    icon: <FaLine />
  },
  {
    titulo: "Horas Extras",
    descricao: "Detalhamento de horas extras por período",
    icon: <FaChartBar />
  }
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
      {dashboardCards.map((card, index) => (
        <Card key={index} className="overflow-hidden border-card stat-card-shadow transition-all hover:stat-card-shadow-hover">
          <CardHeader className="flex items-center gap-3">
            <div className="rounded-lg p-2 bg-[var(--bg-accent)] text-[var(--accent-foreground)]">
              {card.icon}
            </div>
            <div>
              <p className="text-lg font-bold">{card.titulo}</p>
              <CardDescription>{card.descricao}</CardDescription>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}