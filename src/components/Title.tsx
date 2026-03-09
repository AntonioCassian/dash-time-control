interface TitleProps {
    title: string,
    description: string
}
export const TitlePage = ({title, description}: TitleProps) => {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}