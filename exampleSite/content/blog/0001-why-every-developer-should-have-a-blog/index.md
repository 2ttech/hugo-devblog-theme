---
title: "Why Every Developer Should Have A Blog"
date: "2020-02-01"
aliases: ["about-us","about-hugo","contact"]
author: "Hugo Authors"
tags: ["website","lorum"]

featured:
  link: https://made4dev.com
  credit: 'Image Credit: <a href="https://made4dev.com?ref=devblog" target="_blank">made4dev.com (Premium Programming T-shirts)</a>'
---

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.

### Code Block Example {.mt-5 .mb-3}

You can get more info at [https://highlightjs.org/](https://highlightjs.org/). Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.

```
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;
```

### Typography {.mt-5 .mb-3}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

##### Bullet Points: {.my-3}

{{< list >}}
- Lorem ipsum dolor sit amet consectetuer.
- Aenean commodo ligula eget dolor.
- Aenean massa cum sociis natoque penatibus.
{{< /list >}}

{{< list >}}
1. Lorem ipsum dolor sit amet consectetuer.
2. Aenean commodo ligula eget dolor.
3. Aenean massa cum sociis natoque penatibus.
{{< /list >}}

##### Quote Example: {.my-3}

{{< blockquote author="John Romero" >}}
  You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity.
{{< /blockquote >}}

##### Table Example: {.my-3}

{{< table >}}
| # | First | Last     | Handle   |
|---|-------|----------|----------|
| 1 | Mark  | Otto     | @mdo     |
| 2 | Jacob | Thornton | @fat     |
| 3 | Larry | the Bird | @twitter |
{{</ table >}}

##### Embed A Tweet: {.mb-3}

{{< twitter src="https://twitter.com/iamdevloper/status/926458505355235328" />}}

### Video Example {.mt-5 .mb-3}

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.

{{< youtube hnCmSXCZEpU >}}
