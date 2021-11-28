# react-project-display


A react component that will display a collection of projects to display on a portfolio website.

Source code at https://github.com/mattrusso9037/react-project-display.


## Installation

Install it from npm and include it in your React build process (using [Webpack](http://webpack.github.io/), [Browserify](http://browserify.org/), etc).

```bash
npm install --save react-project-display
```
or:
```bash
yarn add react-project-display
```


## Usage
Import the component and feed it the appropriate json object

```jsx static
import * as React from 'react'
import { ProjectDisplay } from "react-project-display";

function Portfolio() {
  const projects = [
    
  ];

  return (
    <div>
      <ProjectDisplay 
        projects={projects}
      />
    </div>
  )
}
```

## Support

### Backers
Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/#)]

## License
MIT
