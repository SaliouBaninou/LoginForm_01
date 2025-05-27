import LoginForm from "../components/LoginForm"

function LoginPage() {
    return (
        <section>
            <div className="flex flex-col md:flex-row items-center h-screen">
                <div className="w-full md:w-2/4 h-full flex items-center justify-center px-4">
                    <div className="w-full md:w-[404px] h-[638px]">
                        <LoginForm />
                    </div>
                </div>
                <div className="w-full hidden md:block md:w-2/4 h-full overflow-hidden rounded-t-2xl md:rounded-l-4xl">
                    <img src="/bg.jpg" alt="Arrière plan" className="h-full w-full object-cover" />
                </div>
            </div>
        </section>
    )
}

export default LoginPage;
