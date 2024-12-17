import Link from "next/link";

const Home = () =>{

    return (
        <div className={'flex min-h-screen justify-center'}>
            click <Link href={'/documents/123'}>
            <span className={'text-blue-500 underline'}>here</span>
        </Link> to go to document id
        </div>
    )
}

export default Home