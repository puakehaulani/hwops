import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { PRODAmplifyInfraStackSIMPLETEMPLATE } from "../lib/amplify-infra-stack";

const app = new cdk.App();
new PRODAmplifyInfraStackSIMPLETEMPLATE(
  app,
  "AmplifyInfraStackSIMPLETEMPLATE",
  {
    env: { account: "055597809456", region: "us-west-2" },
  }
);
