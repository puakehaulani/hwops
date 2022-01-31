import * as cdk from "@aws-cdk/core";
import * as amplify from "@aws-cdk/aws-amplify";

export class PRODAmplifyInfraStackSIMPLETEMPLATE extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const amplifyApp = new amplify.App(this, "simpletemplate", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "puakehaulani",
        repository: "template-smallbusiness-simple",
        oauthToken: cdk.SecretValue.secretsManager("Developer/githubPersonal", {
          jsonField: "my-github-token",
        }),
      }),
    });
    const mainBranch = amplifyApp.addBranch("main");
    // const devBranch = amplifyApp.addBranch("dev", {
    //   basicAuth: amplify.BasicAuth.fromCredentials(
    //     "admin",
    //     cdk.SecretValue.secretsManager("Developer/liveDevKey", {
    //       jsonField: "liveDevKey",
    //     })
    //   ),
    // }); // this auth allows you to sign in with token to see dev branch live
    //  const domain = amplifyApp.addDomain(<'DOMAIN-NAME.COM'>, {
    //    enableAutoSubdomain: true, // in case subdomains should be auto registered for branches
    //    autoSubdomainCreationPatterns: ['*', 'pr*'], // regex for branches that should auto register subdomains
    //    });
    //    domain.mapRoot(mainBranch); // map master branch to domain root
    //    domain.mapSubDomain(mainBranch, 'www');
    //    domain.mapSubDomain(devBranch); // sub domain prefix defaults to branch name
    amplifyApp.addCustomRule(
      amplify.CustomRule.SINGLE_PAGE_APPLICATION_REDIRECT
    );
  }
}
