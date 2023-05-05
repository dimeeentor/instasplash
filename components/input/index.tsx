import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    firstName: string
    lastName: string
    email: string
}

const RegistrationForm: React.FC = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<Inputs>({
        defaultValues: { firstName: "", lastName: "", email: "" },
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    const className =
        "rounded-lg border border-slate-300 p-3 shadow-sm placeholder:opacity-60 focus:outline-0"

    return (
        <div className="grid h-screen place-content-center">
            <form
                className="grid gap-5 [&>label>span]:font-medium [&>label]:flex [&>label]:flex-col"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="firstName">
                    <span>Firstname:</span>
                    <input
                        id="firstName"
                        type="text"
                        className={className}
                        placeholder="Enter your firstname..."
                        {...register("firstName")}
                    />
                </label>
                <label htmlFor="lastName">
                    <span>Lastname:</span>
                    <input
                        id="lastName"
                        type="text"
                        className={className}
                        placeholder="Enter your lastname..."
                        {...register("lastName")}
                    />
                </label>
                <label htmlFor="email">
                    <span>Email:</span>
                    <input
                        id="email"
                        type="email"
                        className={className}
                        placeholder="Enter your email..."
                        {...register("email")}
                    />
                </label>
                <input
                    type="submit"
                    className="cursor-pointer rounded-lg border p-3 shadow-sm"
                    onClick={() => alert("Information submitted")}
                />
            </form>
        </div>
    )
}

export default RegistrationForm
