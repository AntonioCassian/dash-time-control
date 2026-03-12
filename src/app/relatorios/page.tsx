"use client";

import { TitlePage } from "@/components/Title";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaChartBar, FaClock, FaUsers } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

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
        icon: <IoIosTrendingUp />
    },
    {
        titulo: "Horas Extras",
        descricao: "Detalhamento de horas extras por período",
        icon: <FaChartBar />
    }
];

const distribuicao = [
    { name: "Normais", value: 78, color: "var(--color-primary)" },
    { name: "Extras", value: 12, color: "var(--chart-2)" },
    { name: "Atrasos", value: 6, color: "var(--bg-destructive)" },
    { name: "Faltas", value: 4, color: "var(--muted-foreground)" },
];

const horasPorDepto = [
    { depto: "TI", horas: 1840 },
    { depto: "RH", horas: 920 },
    { depto: "Financeiro", horas: 740 },
    { depto: "Comercial", horas: 1380 },
    { depto: "Operações", horas: 2100 },
];

export default function DashboardCards() {
    return (
        <>
            <div className="space-y-6">
                <TitlePage title="Relatórios" description="Relatórios gerenciais e análises de ponto" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {dashboardCards.map((card, index) => (
                        <Card key={index} className="overflow-hidden border-card stat-card-shadow transition-all hover:stat-card-shadow-hover p-5">
                            <CardContent className="flex items-start gap-3 justify-between p-0">

                                <div className="rounded-lg p-2 bg-[var(--bg-accent)] text-[var(--accent-foreground)] w-9 h-9 justify-center inline-flex items-center">
                                    {card.icon}
                                </div>

                                <div>
                                    <p className="text-[16px] text-[#1d212d]">{card.titulo}</p>
                                    <CardDescription className="text-xs">{card.descricao}</CardDescription>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 mt-6">
                <Card className="border-none">
                    <CardHeader>
                        <CardTitle className="text-lg">Horas por Departamento</CardTitle>
                        <CardDescription>Total de horas trabalhadas no mês</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={260}>
                            <BarChart data={horasPorDepto}>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                                <XAxis dataKey="depto" className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
                                <YAxis className="text-xs" tick={{ fill: "var(--muted-foreground)" }} />
                                <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8 }} />
                                <Bar dataKey="horas" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card className="border-none">
                    <CardHeader>
                        <CardTitle className="text-lg">Distribuição de Horas</CardTitle>
                        <CardDescription>Classificação percentual do mês</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center">
                        <ResponsiveContainer width="100%" height={260}>
                            <PieChart>
                                <Pie data={distribuicao} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={4} dataKey="value">
                                    {distribuicao.map((entry, i) => (
                                        <Cell key={i} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 8 }} />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                    <div className="flex flex-wrap justify-center gap-4 px-6 pb-5">
                        {distribuicao.map((d) => (
                            <div key={d.name} className="flex items-center gap-1.5 text-xs">
                                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                                <span className="text-[var(--muted-foreground)]">{d.name} ({d.value}%)</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </>
    );
}