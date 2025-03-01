import { useUser } from "../../context/user-context";

export default function UserDataDisplay() {
    const [{ user }] = useUser()
    return <pre>{JSON.stringify(user, null, 2)}</pre>
}