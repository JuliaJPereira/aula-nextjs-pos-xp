import { useRouter } from "next/router";

const Dynamic = () => {
    const router = useRouter();
    const { name } = router.query;
    return <div>I'm a dynamic router and I was called with: {name}</div>
}

export default Dynamic;