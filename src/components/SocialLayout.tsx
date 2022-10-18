import { useEffect } from 'react'
import API from '../../services/api'

export const SocialLayout = (props) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get(`social-network?domain=${navara}`)
        const json = await response
        setPosts(json.data.children.map((it) => it.data))
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [])
  return <div>SocialLayout</div>
}
