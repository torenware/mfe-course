# Container object for MFE course.

Just here to goose github actions.


## Hint from lec 52 Q&A:

```
9 days ago
3

I found that to be able to keep using chrislennon/action-aws-cli@v1.1 we have to run a pre-command step

before -uses: chrislennon/action-aws-cli@v1.1 add following config code:

          - name: ACTIONS_ALLOW_UNSECURE_COMMANDS
            run: echo 'ACTIONS_ALLOW_UNSECURE_COMMANDS=true' >> $GITHUB_ENV
```

## Add the distribution ID for automated invalidation of the cache.
