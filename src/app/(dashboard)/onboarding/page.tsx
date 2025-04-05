import { checkUserExists } from '@/lib/db/authQuery'


const Onboarding = async() => {
    const userCheck=await checkUserExists()
  return (
    <div>Onboarding</div>
  )
}

export default Onboarding