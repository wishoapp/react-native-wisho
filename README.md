# react-native-wisho

[![Build Status](https://www.travis-ci.com/wishoapp/react-native-wisho.svg?branch=main)](https://www.travis-ci.com/wishoapp/react-native-wisho)
![npm](https://img.shields.io/npm/v/react-native-wisho)

# Installation

`npm i react-native-wisho --save`

### Initialization

```js
import Wisho from 'react-native-wisho';

var wisho = new Wisho({
    apiKey: 'your api key',
    secretKey: 'your secret key'
});
```

As you can see, credentials information provided while creating new instance of Iyzipay class.
If you do not provide Wisho credentials, default values will be fetched from environment variables
by following names.

```
WISHO_API_KEY
WISHO_SECRET_KEY
```

In other words, you can initialize Wisho object like following:

```js
var wisho = new Wisho();
```

# Simple Usage

```js
import {WishoButton} from 'react-native-wisho';

<WishoButton buttonText={'Call To Action'} />
```

# Author

Originally by [Wisho](https://github.com/wishoapp) (info@wishoapp.com). Now officially maintained by Wisho.
