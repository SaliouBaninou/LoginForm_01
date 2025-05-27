import Checkbox from "./Checkbox";
import Input from "./Input";

function LoginForm(){
    return (
        <form className="h-full w-full max-w-sm mx-auto">
            <div className="flex flex-col gap-4 mb-10">
                <h1 className="text-4xl font-medium text-center">Welcome back!</h1>
                <p className="font-medium text-center">Enter your Credentials to access your account</p>
            </div>
            <div className="flex flex-col gap-4 mb-4">
                <Input label={"Email address"} placeholder="Enter your email"/>
                <Input label={"Password"} placeholder="Enter your password" type="password"/>
            </div>
            <div className="flex items-center justify-between mb-4">
                <Checkbox label={"Remember me"}/>
                <a className="text-blue-600 font-medium hover:underline" href="#">Forgot password</a>
            </div>
            <button className="w-full font-medium bg-[#3A5B22] text-white p-2 rounded-xl mb-10">Login</button>
            <div className="h-[1px] w-full bg-gray-200 relative">
                <span className="absolute top-1/2 left-1/2 -translate-1/2 bg-white p-1">Or</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-10 mt-20">
                <a href="#" className="flex items-center gap-2 border border-gray-300 p-2 pl-4 pr-4 rounded-xl text-sm w-full md:w-auto">
                    <div className="h-6 w-6 overflow-hidden">
                        <img 
                            className="h-full w-full object-cover"
                            src="/google.jpg" 
                            alt="google" 
                        />
                    </div>
                    Sign in with Google
                </a>
                <a href="#" className="flex items-center gap-2 border border-gray-300 p-2 pl-4 pr-4 rounded-xl text-sm w-full md:w-auto">
                    <div className="h-6 w-6 overflow-hidden">
                        <img 
                            className="h-full w-full object-cover"
                            src="/apple.jpg"
                            alt="apple" 
                        />
                    </div>
                    Sign in with Apple
                </a>
            </div>

            <div className="flex items-center justify-center gap-4">
                <p className="font-medium">Don't have an account?</p>
                <a href="#" className="font-medium text-blue-600">Sign Up</a>
            </div>
        </form>
    );
}

export default LoginForm;
