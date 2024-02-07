export function Layout(props) {

    return (
        <main className="flex flex-col items-center justify-center  h-[calc(100vh-96px)] bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Pokedex App</h1>
            {props.children}
        </main>
    )
}