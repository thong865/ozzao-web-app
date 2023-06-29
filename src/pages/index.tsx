import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'

type ProductsRetries = {
    meta: {
        total: number
        per_page: number
        current_page: number
        last_page: number
        first_page: number
        first_page_url: string
        last_page_url: string
    }
    data: {
        id: number
        product_name: string
        description: string
        cate_id: number
        ccy: string
        created_at: string
        updated_at: string
        category: {
            title: string
            id: number
        }
        meta: any[]
    }[]
}

export const getServerSideProps: GetServerSideProps<{
    repo: ProductsRetries
}> = async () => {
    const res = await fetch('http://localhost:3000/api/productsRetries')
    const repo = await res.json()
    return { props: { repo } }
}

const homePage = ({
    repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <div className='container'>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-2">
                {repo.data.map((item, i) => (
                    <div
                        key={i}
                        className=" dark:bg-slate-900 p-1 rounded-xl text-center"
                    >
                        <div className="rounded-xl max-h-[184px] mb-2 mx-auto overflow-hidden">
                            <img src='https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80' alt="" className="w-full h-full rounded-xl" />
                        </div>
                        <span className="text-slate-600 px-2 dark:text-slate-300 text-sm mb-2 block text-left">
                            {item.product_name.substring(0, 55)}...
                        </span>
                        <div className='px-2'>
                            <span className="text-slate-500 dark:text-slate-300 text-xl mb-1 block font-normal text-right">
                                30000
                            </span>
                            <span className="text-slate-500 dark:text-slate-300 text-xs mb-1 block font-normal text-right">
                                <span>12% off</span> <span>5000000</span>
                            </span>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default homePage;