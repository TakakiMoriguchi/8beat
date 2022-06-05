import { client } from '../libs/client'
import { GetStaticProps } from 'next'

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'gallary',
    queries: { limit: 9 }
  })

  console.log(data)
  return {
    props: {
      gallary: data.contents
    }
  }
}

export default function GallaryBody({ gallary }) {
  console.log(process.env.API_KEY)
  return (
    <div>
      {/* <ul>
        { gallary.map((val) => (
          <li key={val.id}>
            { val.title }
          </li>
        )) }
      </ul> */}
    </div>
  )
}