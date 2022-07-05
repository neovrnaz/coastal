# Coastal Anki Theme

> A beatiful and minimal Anki theme. Uses blue colors and vivid icons for improved learning

![Theme](../assets/coastal-desktop.png)

## Usage
- Manually Add Templates
  1. `Note Types`  `Manage` > `Add` > `Add: Basic` > `Name: Basic Coastal` (or `Cloze Coastal`)
  2. `Fields` > `Add` > `Field Name: "Icon"` > `Save`
  3. Click on `Cards` (in other menu or while editing a note)
  4. Add the code from GitHub to each Template (Front, Back, Styling)
  5. Repeat steps for other note type

  **OR**

  - Download a [Sample Deck](../assets/Example%20Deck.apkg)

- Once you've created an `Icon` field, optionally fill it with the name of one of the icons found over [Font Awesome](https://fontawesome.com/search?s=solid%2Cbrands)
- There might be times when there aren't any icons that seem suitable. In that case, you can create a new note type called `Basic Coastal (no icon)` and remove the `{{#Icon}}...{{/Icon}}` tags from the Front Template

## Optional (Recommended)
- Show the name of current notes' subdeck if the `Icon` field is left blank
  1. Download the [Special Fields](https://ankiweb.net/shared/info/1102281552) Plugin
  2. Within the note types' Front Template `<div>` tag, insert the following: `{{^Icon}}<div class="card__subdeck">{{Subdeck}}</div>{{/Icon}}`

## FAQ
- Why use icons?
- **A:** Icons can be a great alternative to pictures and can be applied to almost any note
