# `@atomist/sdm-pack-github-token`

Extension pack to support new style
[GitHub tokens](https://github.blog/changelog/2021-03-31-authentication-token-format-updates-are-generally-available/)
needed as of March, 31st 2021.

## Usage

Please install this npm package into your SDM:

```shell
$ npm install @atomist/sdm-pack-github-token 
```

and then enable the extension pack in your SDM configuration:

````typescript
extensionPacks: [
    newGitHubTokenSupport(),
],
````

## Contributing

Contributions to this project from community members are encouraged and
appreciated. Please review the [Contributing Guidelines](CONTRIBUTING.md) for
more information. Also see the [Development](#development) section in this
document.

## Code of conduct

This project is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). You are
expected to act in accordance with this code by participating. Please report any
unacceptable behavior to code-of-conduct@atomist.com.

## Documentation

Please see [docs.atomist.com][atomist-doc] for developer documentation.

-   List of third-party OSS licenses used in this project: [@atomist/skill OSS
    licenses][licenses]

[atomist-doc]: https://docs.atomist.com "Atomist Documentation"
[licenses]: legal/THIRD_PARTY.md "@atomist/sdm Third-Party Licenses"

## Connect

Follow [@atomist][atomist-twitter] and [The Composition][atomist-blog] blog
related to SDM.

[atomist-twitter]: https://twitter.com/atomist "Atomist on Twitter"
[atomist-blog]:
    https://the-composition.com/
    "The Composition - The Official Atomist Blog"

## Support

General support questions should be discussed in the `#help` channel in the
[Atomist community Slack workspace][slack].

If you find a problem, please create an [issue][].

[issue]: https://github.com/atomist/sdm/issues

## Development

You will need to install [Node.js][node] to build and test this project.

[node]: https://nodejs.org/ "Node.js"

### Build and test

Install dependencies.

```
$ npm install
```

Use the `build` package script to compile, test, lint, and build the
documentation.

```
$ npm run build
```

---

Created by [Atomist][atomist]. Need Help? [Join our Slack workspace][slack].

[atomist]: https://atomist.com/ "Atomist "
[slack]: https://join.atomist.com/ "Atomist Community Slack"
