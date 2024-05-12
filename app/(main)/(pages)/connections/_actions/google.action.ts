'use server'

import { auth } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/nextjs/server'
import { google } from 'googleapis'

export const getFileMetaData = async () => {
  'use server'
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.OAUTH2_REDIRECT_URI
  )

  const { userId } = auth()

  if (!userId) {
    return { message: 'User not found' }
  }

  const clerkResponse = await clerkClient.users.getUserOauthAccessToken(
    userId,
    'oauth_google'
  )

 if (clerkResponse && clerkResponse.data && clerkResponse.data.length > 0) {
   const accessToken = clerkResponse.data[0].token;
   oauth2Client.setCredentials({
     access_token: accessToken,
   });
 } else {
   // Handle the case where clerkResponse is empty or data is empty
   console.error("No OAuth access token found for the user");
 }

  const drive = google.drive({ version: 'v3', auth: oauth2Client })
  const response = await drive.files.list()

  if (response) {
    return response.data
  }
}
