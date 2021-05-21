# Wisho React Native SDK

[![NPM](https://nodei.co/npm/react-native-wisho.png)](https://nodei.co/npm/react-native-wisho/)

[![Build Status](https://www.travis-ci.com/wishoapp/react-native-wisho.svg?branch=main)](https://www.travis-ci.com/wishoapp/react-native-wisho)
![NPM](https://img.shields.io/npm/l/react-native-wisho)
![npm](https://img.shields.io/npm/v/react-native-wisho)
![Requires.io](https://img.shields.io/requires/github/wishoapp/react-native-wisho)
![Codecov](https://img.shields.io/codecov/c/gh/wishoapp/react-native-wisho)

## Introduction

Wisho React Native SDK allows your mobile users to make video calls with your sales consultants.

## Installation

`npm i react-native-wisho --save`

`If you want to use messaging actively, you must install react-native-firebase-messaging`

## Usage

### Initialization

```js
import Wisho from 'react-native-wisho';

var wisho = new Wisho({
    apiKey: 'your api key',
    secretKey: 'your secret key'
});
```

As you can see, credentials information provided while creating new instance of Wisho class.
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

### Sample Usage

```js
import {WishoButton} from 'react-native-wisho';

<WishoButton />
```

## API Preferences

### WishoButton Props
| Name                      | Description                         | Default                  | Type    |
|---------------------------|-------------------------------------|--------------------------|---------|
| backgroundColor           | Background color of the button      | #ff6500                  | String  |
| borderWidth               | Border width of the button          | 1                        | Number  |
| borderColor               | Outside border color for the button | rgba(255, 255, 255, 0.5) | String  |
| textColor                 | Color of the button title           | #ffffff                  | String  |
| textWeight                | Font weight of the button title     | 400                      | String  |
| buttonText                | Text of the button                  | Connect via Wisho        | String  |

## Testing

You need to have [jest](https://jestjs.io/) installed on your machine in order to run tests.

`npm test`

## Versions

`react-native-wisho` uses a modified version of [Semantic Versioning](https://semver.org) for all changes.

## Author

Originally by [Wisho](https://github.com/wishoapp) (info@wishoapp.com). Now officially maintained by Wisho.

## License

Wisho React Native SDK is open-sourced software licensed under the [MIT license](LICENSE).
