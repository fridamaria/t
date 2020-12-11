import { Octokit } from '@octokit/core'

export const MDToHTML = async (MDString) => {
  const accessToken = process.env.REACT_APP_MD_KEY
  const octokit = new Octokit({ auth: accessToken })

  const response = await octokit.request('POST /markdown', {
    text: MDString
  })

  return response.data
}