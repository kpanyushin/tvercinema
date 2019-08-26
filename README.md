`yarn <script>`|Description
------------------|-----------
`start`|Run your app on the development server at `localhost:3000`. HMR will be enabled.
`start:production`|Bundle files to `./public/assets` and run it on the production server with production environment at `localhost:8080`.
`start:staging`|Bundle files to `./public/assets` and run it on the staging server with staging environment at `localhost:8080`.
`build:production`|Remove the previous bundled production files and bundle it to `./public/assets`.
`build:staging`|Remove the previous bundled staging files and bundle it to `./public/assets`.
`lint`|Lint all `.js` and `.scss` files.
`lint:js`|Lint all `.js` files.
`lint:style`|Lint all `.scss` files.
`clean:build`|Remove the `./public/assets` folder to clean the client bundled files.
