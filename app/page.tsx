import Header from '../app/components/Header';
import MainSection from '../app/components/MainSection';

export default function Home() {
    return (
        <main className="flex w-full max-w-screen-xl flex-col py-10 px-24 select-none">
            <Header />
            <hr 
                className="mt-6 mb-8 
                    border-black 
                    opacity-20 
                    dark:border-white
                    dark:opacity-10
                    "
            />
            <MainSection />
        </main>
    )
}
