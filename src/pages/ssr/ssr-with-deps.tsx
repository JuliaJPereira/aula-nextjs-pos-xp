export async function getServerSideProps() {
    const coins = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10&page=1&sparkli'
    ).then((res) => res.json());
    return {
        props: {
            coins,
        }
    }
}

const Ssr = (props: any) => {

    const coins = props.coins;

    return (
        <div>
            {coins.map((item: any) => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </div>
    )
}

export default Ssr;