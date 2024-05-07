---
description: Jest tips & tricks
slug: jest-utility
authors:
  - fcmam5
tags: [js,ts,testing]
---

# Jest-uatlity: Making work with Jest fun again

Jest is my go-to testing framework, it's the default in many of tools I use at work in my side projects and I didn't bother to reconfigure NestJS or NX.dev before I start a new project. Jest works for me, and works well.

But sometimes... Sometimes... I have to Google a little bit harder before I figure out how to do things.

In this blog I will share some of the tricks I learned, and some of the concepts I didn't know which led me to a frustrating debugging sessions. For example, the fact that `jest.mock` is hoisted, which makes using variables in mocked modules a bit tricky.

This blog will be updated each time I remember some of the tricks, or I learn something new about Jest.

<!-- truncate -->

## Snippets

### Mock promise rejection

Source:

- https://jestjs.io/docs/tutorial-async#rejects

```js
it('tests error with async/await and rejects', async () => {
  expect.assertions(1);
  await expect(user.getUserName(3)).rejects.toEqual({
    error: 'User with 3 not found.',
  });
});
```

### Mocked methods chaining

Example:

```js
if (errors.length) return res.status(400).json(errors);
```

Mock:

```js
mockResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
```

Ref: https://stackoverflow.com/a/75811953/5078746

## IDE Setup

### VS Code

- Jest Snippets: [andys8.jest-snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets)
- Jest (by Orta): [Orta.vscode-jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

## Tricks

### Using `it.each` and `describe.each`

Example:

```js
  it.each([
    ["no args were passed", undefined, productInfoMissingErr],
    ["no product IDs were passed", noIdData, productInfoMissingErr],
    [
      "an empty array of products was passed",
      { products: [] },
      productIdMissingErr,
    ],
  ])("should throw if %s", (caseTitle, input, errMsg) => {
    return readPricing().catch((e: Error) => {
      expect.assertions(3);
      expect(<jest.Mock>fetch).not.toHaveBeenCalled();
      expect(e).toBeInstanceOf(TypeError);
      expect(e.message).toBe(errMsg);
    });
  });
```

- Link to the example on SoF: https://stackoverflow.com/a/75527420/5078746
- Documentation:
  - [`it.each`](https://jestjs.io/docs/api#testeachtablename-fn-timeout)
  - [`describe.each`](https://jestjs.io/docs/api#describeeachtablename-fn-timeout)

:::tip
If you are using [jest-snippets](https://marketplace.visualstudio.com/items?itemName=andys8.jest-snippets) in VS Code, just type `ite` and `desce`.
:::

### Using `jest-when` to specify dynamic returns matched with specific arguments

Package:

- [npm](https://www.npmjs.com/package/jest-when)
- [Repository](https://github.com/timkindberg/jest-when)

Installation

```
npm i jest-when && npm i -D @types/jest-when
```

Example

```js
const fn = jest.fn()                   
when(fn)
  .calledWith(/* any matchers here */)
  .mockReturnValue(/* some value */)
```


### Using `jest-extended` to have more matchers

Package:

- [npm](https://www.npmjs.com/package/jest-extended)
- [Repository](https://github.com/jest-community/jest-extended)
- [Documentation](https://jest-extended.jestcommunity.dev/docs/matchers/)

Installation

```
npm i -D jest-extended
```

Example with [`.toBeAfter(date)` matcher](https://jest-extended.jestcommunity.dev/docs/matchers/date/#tobeafterdate):

```js
test('passes when input is after date', () => {
  expect(new Date('01/01/2019')).toBeAfter(new Date('01/01/2018'));
  expect('01/01/2018').not.toBeAfter(new Date('01/01/2019'));
});
```

## Learnings

### Why does Jest run faster with --maxWorkers=50%?

Ref: https://stackoverflow.com/a/75490452/5078746

> That cost of spawning and scheduling multiple jest-workers might be sometimes greater than the gains we may get with parallelization. By using multiple workers you are instantiating more objects that will load different files from the disk. That's why in small and atomic tests you don't see any (or just a small) performance gain by using --maxWorkers=50%|1.

### Globals in Jest environment differ from NodeJS's

Example #1:

```js
it("throws TypeError when url is invalid", () => {
  expect(() => {
    new URL(""); // This does not work
    // throw new TypeError(); // This works
  }).toThrow(TypeError);
})
```

Proposed solution: Throw custom errors

<br/>

**Answers on StackOverflow:**

- https://stackoverflow.com/a/75569401/5078746
- https://stackoverflow.com/a/75524385/5078746