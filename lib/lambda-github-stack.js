const { Stack, Duration } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
const  lambda = require('aws-cdk-lib/aws-lambda');

class LambdaGithubStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here


    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,    // execution environment
      code: lambda.Code.fromAsset('lambda'),  // code loaded from "lambda" directory
      handler: 'index.handler'                // file is "hello", function is "handler"
    });

    // example resource
    // const queue = new sqs.Queue(this, 'LambdaGithubQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

module.exports = { LambdaGithubStack }
