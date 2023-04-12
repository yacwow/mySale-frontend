import UserLayout from '@/components/UserLayout'
import Pointer from '@/components/User/Pointer'

export default function index() {
    return (
        <UserLayout >
            <Pointer canUsePoint={1000} usedPoint={1000} updateTime="2023-02-26 10:07:57" vipLevel={10} unCheckedPoint={1234} />
        </UserLayout>
    )
}