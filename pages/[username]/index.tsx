interface IProflleProps {
  data: any
}
const Profile = ({ data }: IProflleProps) => {
  return <div>index</div>
}

export async function getServerSideProps(context: any) {
  console.log(context)
  return {
    props: {
      data: {},
    },
  }
}

export default Profile
