# playwright commands

- install playwright

```code
npm installplaywright@latest
```

- run test on all browsers
```code
npx run playwright test
```

- run test on a specific browser
```code
npx run playwright test --project=chromium
```

- run test on a specific browser, headed mode
```code
npx run playwright test --project=chromium --headed
```

- run specific spec file
```code
npx run playwright <file-name> --project=chromium --headed
```

- run specific test from a specific file
```code
npx run playwright -g 'test-name' --project=chromium --headed
```

- run playwright ui
```code
npx playwright test --ui
```
- run playwright test in debug mode

```code
npx playwright test --project=chromium --debug
```


