# Company Website Template  
Created by Lexi Scales  
# Getting Started
## System requirements
> `aws cli`  
> `aws-cdk` *make sure to setup your account before moving forward*

## Setup Clone
1. Clone this repo  
> `git clone git@github.com:puakehaulani/template-smallbusiness-simple.git <NEW-REPO-NAME>`
2. Update remote to point to new Github repo, or it will push changes to clone origin  
> `git remote set-url origin <NEW-GIT-REMOTE>`
3. Verify remote updated  
> `git remote -v`
4. Push initial commit to main
5. Create dev branch  
> `git checkout -b dev`
6. In Github, be sure protect main branch to only accept commits via PR  
7. Run `npm i` to install all dependencies
8. Run `npm run start` to start development server and see changes on localhost:3000

## Customization  
- Be sure to global search TODO: and make all updates for client specific info
## Github Token Setup
1. Create PERSONAL ACCESS TOKEN in Github account with following scopes:
  - repo (all)
  - read:packages
  - admin:repo_hook (all)
2. Create the access token in secrets manager that we will use below
> `aws secretsmanager create-secret --name my-github-token --secret-string <GITHUB-PERSONAL-ACCESS-TOKEN>`  

## Amplify CDK Setup
In root of repo, run the following commands:  
> `mkdir amplify-infra`  
> `cd amplify-infra`  
> `cdk init --language typescript`  
> `npm install @aws-cdk/aws-codecommit @aws-cdk/aws-amplify`


### Code Templates for Amplify:

#### ~/<react-app-name>/amplify-infra/lib/amplify-infra-stack.ts  
##### Paste the following:  
>    `import * as cdk from "@aws-cdk/core";
>    import * as amplify from '@aws-cdk/aws-amplify';
>   export class AmplifyInfraStack extends cdk.Stack {
>  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
>      super(scope, id, props);
>    const amplifyApp = new amplify.App(this, <NAME-OF-APP>, {
>      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
>        owner: <GITHUB-USERNAME>,
>        repository: <GITHUB-REPO-NAME>,
>        oauthToken: cdk.SecretValue.secretsManager('my-github-token'),
>      })
>    });
>    const mainBranch = amplifyApp.addBranch("main");
>    const devBranch = amplifyApp.addBranch("dev", {
>      basicAuth: amplify.BasicAuth.fromCredentials('admin', cdk.SecretValue.secretsManager('my-github-token'))
>    }); // this auth allows you to sign in with token to see dev branch live
>    const domain = amplifyApp.addDomain(<'DOMAIN-NAME.COM'>, {
>      enableAutoSubdomain: true, // in case subdomains should be auto registered for branches
>      autoSubdomainCreationPatterns: ['*', 'pr*'], // regex for branches that should auto register subdomains
>      });
>      domain.mapRoot(mainBranch); // map master branch to domain root
>      domain.mapSubDomain(mainBranch, 'www');
>      domain.mapSubDomain(devBranch); // sub domain prefix defaults to branch name
>      amplifyApp.addCustomRule(amplify.CustomRule.SINGLE_PAGE_APPLICATION_REDIRECT);
>      }
>    }`  

#### ~/<react-app-name>/amplify-infra/bin/amplify-infra.ts  
##### Paste the following:  
>  `env: { account: <accountnumber-from-aws>, region: <region-from-aws> }`  

## Build and Deploy
>`cd ~/<react-app-name>/amplify-infra`  
>`npm run build`  
>`cdk deploy`  



### resources:
https://aws.amazon.com/blogs/mobile/deploying-a-static-website-with-aws-amplify-and-cdk/

https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-amplify.GitHubSourceCodeProvider.html

https://docs.aws.amazon.com/cdk/api/v2//docs/aws-amplify-alpha-readme.html

https://docs.aws.amazon.com/amplify/latest/userguide/access-control.html

https://github.com/nikovirtala/cdk-amplify-console