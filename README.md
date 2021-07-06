# Standard Version Action

This [Github Action][] calculates the new version based on [Conventional Commits][], updates CHANGELOG, and creates the new git tag. It's powered by [Standard Version][].

## Inputs

This action doesn't accept any inputs. If you want to change a configuration, create a [versionrc file][].

## Example usage

```yaml
- uses: actions/checkout@v2
- run: |
    git config user.name "GitHub Actions Bot"
    git config user.email "<>"
- name: Bump version
  uses: qzb/standard-version@v1
```

[Github Action]: https://docs.github.com/en/actions
[Conventional Commits]: https://www.conventionalcommits.org/en/v1.0.0/
[Standard Version]: https://github.com/conventional-changelog/standard-version
[versionrc file]: https://github.com/conventional-changelog/standard-version#configuration
