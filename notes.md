## JSX

JSX is stricter than HTML. You have to close tags like `<br />`. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a `<div>...</div>` or an empty <>...</> wrapper:

```bash
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
```

`<img className="avatar" /> ` this replace the classs attribute

this is how you can manipulate adding data into the jsx file

- so usefull

```bash
# js object
# you can make a lot of object in one external file an then use them betwen your componenets
=======
```bash
# js object
# you can make a lot of object in one external file an then use them betwen your componenets 
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
```

## useState

useState is a React Hook that allows functional components to manage state.<br>
It enables you to add state to your components without converting them into class components.

- import

```bash
import React, { useState } from 'react';
```

- declaration

```bash
const [count, setCount] = useState(0);

```

- Update

```bash
return (
  <div>
    <p>You clicked {count} times</p>
    <button onClick={() => setCount(count + 1)}>
      Click me
    </button>
  </div>
);


```
