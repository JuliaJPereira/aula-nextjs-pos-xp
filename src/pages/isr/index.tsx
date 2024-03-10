export async function getStaticProps() {
    const coins = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10&page=1&sparkli'
    ).then((res) => res.json());
    const date = new Date();
    return {
        props: {
            coins,
            lastRender: date.getSeconds(),
        },
        revalidate: 5,
    }
}

const Isr = (props: any) => {

    const coins = props.coins;

    return (
        <div>
            <div>{props.lastRender}</div>
            {coins.map((item: any) => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </div>
    )
}

export default Isr;