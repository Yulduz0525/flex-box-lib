# Flex-box-pack-lib

Why should we install this package?

By installing this package, you can easily use responsive layout components - Row and Column.

## Installation

npm install flex-box-pack-lib

### The purpose of the package

Simplify the creation of uniform layout structures throughout your application.

#### Use in Row and Column components

``` typescript

import {Row,Column} from "flex-box-pack-lib"

const ExampleLayout: React.FC = () => {
  return (
    <Row
      wrap={{ sm: "nowrap", md: "wrap" }}
      direction="row"
      content="space-between"
      align_items="center"
      gap={{ sm: 10, md: 20 }}
      width="100%"
    >
      <Column
        size={{ sm: 6, md: 4 }}
        difference={{ sm: 10, md: 20 }}
        wrap="wrap"
        direction="column"
      >
        {/*Content*/}
        <div>Column 1</div>
      </Column>
      <Column
        size={{ sm: 6, md: 8 }}
        difference={{ sm: 10, md: 20 }}
        wrap="wrap"
        direction="column"
      >
        {/* Content*/}
        <div>Column 2</div>
      </Column>
    </Row>
  );
};
```
##### Custom Colors

You can customize the colors used in the components by providing your own color values using the `mergeColors` function. This function takes an object with your custom colors and merges them with the default colors.

```typescript
import { mergeColors } from 'flex-box-pack-lib';

const userColors = {
  "primary-500": "#ff5733",
  "secondary-500": "#33c4ff",
  ...
};

const colors = mergeColors(userColors);
```

###### License

This project is licensed under the MIT License.