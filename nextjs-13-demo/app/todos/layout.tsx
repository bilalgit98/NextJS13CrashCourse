import ToDosList from "./ToDosList";

export default function RootLayout( {
    children,

}:{
    children: React.ReactNode;
}) {
    return (
        <main className="flex">
            <div>
                {/* @ts-ignore */}
                <ToDosList />

            </div>
            <div className="flex-1">{children} </div>
        </main>
    )
}