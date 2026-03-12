import Link from "next/link"
import {
    LuLayoutDashboard,
    LuUsers,
    LuClock,
    LuCalendarDays,
    LuMapPin,
    LuBuilding2,
    LuBellRing,
    LuFileText,
    LuSettings,
    LuBatteryCharging,
} from "react-icons/lu"

export const Sidebar = () => {
    const navigation = [
        {
            label: "Principal",
            items: [
                {
                    title: "Dashboard",
                    href: "/dashboard",
                    icon: LuLayoutDashboard,
                },
                {
                    title: "Funcionários",
                    href: "/funcionarios",
                    icon: LuUsers,
                },
                {
                    title: "Banco de Horas",
                    href: "/banco-de-horas",
                    icon: LuClock,
                },
                {
                    title: "Escalas",
                    href: "/escalas",
                    icon: LuCalendarDays,
                },
                {
                    title: "Geolocalização",
                    href: "/geolocalizacao",
                    icon: LuMapPin,
                },
            ],
        },
        {
            label: "Gestão",
            items: [
                {
                    title: "Relatórios",
                    href: "/relatorios",
                    icon: LuBatteryCharging,
                },
                {
                    title: "Múltiplos CNPJs",
                    href: "/multiplos-cnpjs",
                    icon: LuBuilding2,
                },
                {
                    title: "Sobreaviso",
                    href: "/sobreaviso",
                    icon: LuBellRing,
                },
            ],
        },
        {
            label: "Sistema",
            items: [
                {
                    title: "Documentos",
                    href: "/documentos",
                    icon: LuFileText,
                },
                {
                    title: "Configurações",
                    href: "/configuracoes",
                    icon: LuSettings,
                },
            ],
        },
    ]
    return (
        <>
            {navigation.map((group) => (
                <div key={group.label} className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">
                        {group.label}
                    </p>

                    {group.items.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-center gap-2 p-2 rounded text-sidebar-accent-foreground hover:bg-[var(--sidebar-accent)]"
                            >
                                <Icon size={18} />
                                {item.title}
                            </Link>
                        )
                    })}
                </div>
            ))}
        </>
    )
}