Company Website made by Lexi Scales

# System requirements
aws cli
aws-cdk, make sure to setup

# Setup clone
1. clone this repo git clone git@github.com:puakehaulani/template-smallbusiness-simple.git <newreponame>
2. update remote to point to new github repo, or else it will push changes to clone origin
git remote set-url origin new.git.url/here
run git remote -v to verify
3. push initial commit to main
4. create dev branch
git checkout -b dev
5. in github, be sure protect main branch to only accept commits via PR
# Github Token Setup
1. create PAT in Github account with following scopes:
repo (all)
read:packages
admin:repo_hook (all)
2. run aws secretsmanager create-secret --name my-github-token --secret-string <github-personal-access-token>
this creates the access token in secrets manager that we will use below
# Amplify Steps
1. run mkdir amplify-infra from repo root
2. cd amplify-infra
3. cdk init --language typescript
4. npm install @aws-cdk/aws-codecommit @aws-cdk/aws-amplify

code templates for amplify:
// ~/<react-app-name>/amplify-infra/lib/amplify-infra-stack.ts
paste the following:
import * as cdk from "@aws-cdk/core";
import * as amplify from '@aws-cdk/aws-amplify';

export class AmplifyInfraStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.App(this, <NAME-OF-APP>, {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: <GITHUB-USERNAME>,
        repository: <GITHUB-REPO-NAME>,
        oauthToken: cdk.SecretValue.secretsManager('my-github-token'),
      })
    });
    
    const mainBranch = amplifyApp.addBranch("main");
    const devBranch = amplifyApp.addBranch("dev", {
      basicAuth: amplify.BasicAuth.fromCredentials('admin', cdk.SecretValue.secretsManager('my-github-token'))
    }); // this auth allows you to sign in with token to see dev branch live

    const domain = amplifyApp.addDomain(<'domainName.com'>, {
      enableAutoSubdomain: true, // in case subdomains should be auto registered for branches
      autoSubdomainCreationPatterns: ['*', 'pr*'], // regex for branches that should auto register subdomains
    });
    domain.mapRoot(mainBranch); // map master branch to domain root
    domain.mapSubDomain(mainBranch, 'www');
    domain.mapSubDomain(devBranch); // sub domain prefix defaults to branch name
    
    amplifyApp.addCustomRule(amplify.CustomRule.SINGLE_PAGE_APPLICATION_REDIRECT);
  }
}

// ~/<react-app-name>/amplify-infra/bin/amplify-infra.ts
paste the following:
   env: { account: <accountnumber-from-aws>, region: <region-from-aws> },


cd ~/amplify-sample-app/amplify-infra	
npm run build
cdk deploy


resources:
https://aws.amazon.com/blogs/mobile/deploying-a-static-website-with-aws-amplify-and-cdk/

https://docs.aws.amazon.com/cdk/api/v1/docs/@aws-cdk_aws-amplify.GitHubSourceCodeProvider.html

https://docs.aws.amazon.com/cdk/api/v2//docs/aws-amplify-alpha-readme.html

https://docs.aws.amazon.com/amplify/latest/userguide/access-control.html

https://github.com/nikovirtala/cdk-amplify-console