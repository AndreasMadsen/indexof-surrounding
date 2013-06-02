#near

> Like indexOf but looks at surrounding items

## Installation

```sheel
npm install near
```

## Documentation

```JavaScript
var near = require('near');

var list = ['a', 'b', 'b', 'a'];

// The result is just like indexOf
near(list, 'a') // 0;
near(list, 'c') // -1;

// But you can give it a starting position, and it will also look behind
near(list, 'a', 1) // 0;
near(list, 'a', 2) // 3;

// Futhermore you can give it an interval (more efficient than doing a `slice`)
near(list, 'a', 1, [1,2]) // -1
near(list, 'a', 1, [1,Infinity]) // 3
```

##License

**The software is license under "MIT"**

> Copyright (c) 2013 Andreas Madsen
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.
