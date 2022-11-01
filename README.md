## Description

[Front-End Repo](https://github.com/karlpawlowicz/dwelling-app)

[Sample Request](https://gf8ssmidyg.execute-api.us-east-1.amazonaws.com/prod/balances/1409348423420002)

### Process

I began by reviewing the brief and requirements. In a real-world setting, at this stage, I would have discussions with various stakeholders, such as an engineering and product manager.

Once I understood what I was building, I would draft a proposal in a design doc or RFC.

This exercise required JavaScript and REST, so I built a Nest (TypeScript) app on AWS (Lambda).

I added a CI/CD pipeline using GitHub Actions to lint, test, build, and deploy the app as a Lambda function to AWS on each push.

### Sample PRs

- https://github.com/karlpawlowicz/dwelling-service/pull/1
- https://github.com/karlpawlowicz/dwelling-service/pull/3
- https://github.com/karlpawlowicz/dwelling-service/pull/4
- https://github.com/karlpawlowicz/dwelling-service/pull/5

### If I Had More Time

- Auth strategy—should this route be public, and what stops anyone from guessing card numbers (e.g., require a security code)?
- CORS
- Database—store cards in DynamoDB or Postgres
- More tests—unit and e2e
- Observability—improve logs sent to CloudWatch
- Preview environments—each branch should have a preview URL (currently only dev and prod environment)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
