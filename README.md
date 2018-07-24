# Kirby Social

![MIT](https://img.shields.io/badge/Kirby-3-green.svg)
[![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/wottpal/kirby-anchor-headings/master/LICENSE)

This is a textfield which
* fetches the user-avatar and shows it next to the text
* saves the url of the avatar and the profile itself into the content-file

The avatar is loaded with the service [avatars.io](https://www.avatars.io/).

![Kirby Social GIF](kirby-social.gif)


## Usage

Just put it in your `/site/plugins` folder, then you can use the field like:

```yaml
instagram:
  label: Instagram
  type: social
  service: instagram
```

## Todo

- [ ] Add an option to save the fetched avatar as a real image and not only save its link
