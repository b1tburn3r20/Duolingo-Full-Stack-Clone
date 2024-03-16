import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return(
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <span>
                        <Image src={"/hr.svg"} alt="Croatian" height={32} width={40} className="mr-4 rounded-md" />
                    </span>
                    Croatian
                </Button>
                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <span>
                        <Image src={"/es.svg"} alt="Spanish" height={32} width={40} className="mr-4 rounded-md" />
                    </span>
                    Croatian
                </Button>
                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <span>
                        <Image src={"/fr.svg"} alt="French" height={32} width={40} className="mr-4 rounded-md" />
                    </span>
                    French
                </Button>
                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <span>
                        <Image src={"/it.svg"} alt="Italian" height={32} width={40} className="mr-4 rounded-md" />
                    </span>
                    Italian
                </Button>
                <Button size={"lg"} variant={"ghost"} className="w-full">
                    <span>
                        <Image src={"/jp.svg"} alt="Japanese" height={32} width={40} className="mr-4 rounded-md" />
                    </span>
                    Japanese
                </Button>
            </div>
        </footer>
    )
}