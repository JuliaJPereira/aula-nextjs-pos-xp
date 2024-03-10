export async function getStaticProps() {
    const coins = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10&page=1&sparkli'
    ).then((res) => res.json());
    return {
        props: {
            coins,
            propTest: 'This is a test'
        }
    }
}

const Static = ({ coins, propTest }: { coins: any[], propTest: string }) => {

    const coins2 = coins;
    const propTest2 = propTest;

    console.log(propTest2);

    return (
        <div>
            {coins2.map((item: any) => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </div>
    )
}

export default Static;