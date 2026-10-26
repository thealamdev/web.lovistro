import SplashScreen from "@/components/common/SplashScreen";
import RootWelcomeComponent from "./components/welcome/root.welcome";

export default function MasterOnboard() {
    return (
        <section className="flex w-full flex-col items-center justify-center">
            <SplashScreen />
            <RootWelcomeComponent />
        </section>
    )
}