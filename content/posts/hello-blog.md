---
title: Welcome back to my static website!
date: 2017-03-27
layout: Post
disqus_id: '20170327'
---

# This is a test
 Hi! You've stumbled across a pre-release tool I'm not quite done with yet. Beware, there be bugs! Currently, you'll have the best luck with this site in the latest version Chrome or Safari on OSX.

 Code is highlighted by default.

```js
const StatelessComponent = (props) => {
  return (
    <div>
      I‘m a stateless component that accepts children
      { props.children }
    </div>
  )
}

// ...

  return (
    <StatelessComponent>
      Example of child
    </StatelessComponent>
  )
```
