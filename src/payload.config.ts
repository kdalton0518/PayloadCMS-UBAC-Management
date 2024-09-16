import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
// import OAuth2Plugin from "payload-oauth2";
import Pages from './collections/Pages'
import Events from './collections/Events'
import Users from './collections/Users'
import axios from 'axios'
import { oAuthPlugin } from 'payload-plugin-oauth'

// import OAuthLoginButton from "./components/OauthloginButton";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Pages, Events, Users],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    oAuthPlugin({
      buttonLabel: 'Sign in with OAuth',
      databaseUri: process.env.DATABASE_URI,
      clientID: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      authorizationURL: process.env.OAUTH_AUTH_ENDPOINT,
      tokenURL: process.env.OAUTH_TOKEN_ENDPOINT,
      authorizePath: '/authorize',
      callbackURL: process.env.ORIGIN + '/auth/oauth/callback',
      async userinfo(accessToken) {
        const { data: user } = await axios.get(
          process.env.OAUTH_USERINFO_ENDPOINT,
          { headers: { Authorization: `Bearer ${accessToken}` } }
        )
        return {
          sub: user.ID,
          username: user.preferred_username,
        }
      },
    }),
  ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
