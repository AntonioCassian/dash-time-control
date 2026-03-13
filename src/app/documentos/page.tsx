import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { FaCopy, FaFileAlt, FaSignature } from "react-icons/fa";

const stats = [
    {
        label: "Total de Documentos",
        value: 128,
        icon: <FaFileAlt />
    },
    {
        label: "Espelhos Gerados",
        value: 45,
        icon: <FaCopy />
    },
    {
        label: "Pendentes de Assinatura",
        value: 7,
        icon: <FaSignature />
    }
];

export default function Documentos() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {stats.map((stat, index) => (
                    <Card
                        key={index}
                        className="overflow-hidden border-card stat-card-shadow p-5 transition-all hover:stat-card-shadow-hover"
                    >

                        <CardContent className="flex gap-2 items-center p-0">
                            {stat.icon}
                            <div>
                                <CardTitle className="text-2xl">{stat.value}</CardTitle>
                                <CardDescription>{stat.label}</CardDescription>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}
