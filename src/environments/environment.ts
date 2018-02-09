// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  dialogflow: {
    angularBot: 'da9f5bb319694839a25cfae1a0f8571d'
  },
  baseURL: "https://api.dialogflow.com/v1/query?v=20150910",
  customerOrderURL: "http://hnwvq-market01.cns.com/pos-customer-web-17.5/customers/email/satishachar@gmail.com",
  baseGetURL: "https://api.dialogflow.com/v1/query?v=20150910&contexts=shop&lang=en&query=apple&sessionId=12345&timezone=America/New_York"
};
