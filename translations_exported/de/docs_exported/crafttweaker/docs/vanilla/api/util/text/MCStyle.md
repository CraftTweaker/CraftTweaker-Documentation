# MCStyle

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.text.MCStyle;
```


## Constructors

No Description Provided
```zenscript
new MCStyle() as MCStyle
new MCStyle();
```


## Methoden

### equals

Return Type: boolean

```zenscript
MCStyle.equals(other as Object) as boolean
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| other     | Object | No Description Provided |


### getBold

Return Type: boolean

```zenscript
MCStyle.getBold() as boolean
myMCStyle.getBold();
```

### getFontId

Return Type: [MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
MCStyle.getFontId() as MCResourceLocation
myMCStyle.getFontId();
```

### getInsertion

Return Type: string

```zenscript
MCStyle.getInsertion() as string
myMCStyle.getInsertion();
```

### getItalic

Return Type: boolean

```zenscript
MCStyle.getItalic() as boolean
myMCStyle.getItalic();
```

### getverschleiert

Return Type: boolean

```zenscript
MCStyle.getObfuscated() as boolean
myMCStyle.getObfuscated();
```

### getStrikethrough

Return Type: boolean

```zenscript
MCStyle.getStrikethrough() as boolean
myMCStyle.getStrikethrough();
```

### getUnterstrichen

Return Type: boolean

```zenscript
MCStyle.getUnderlined() as boolean
myMCStyle.getUnderlined();
```

### hashCode

Return Type: int

```zenscript
MCStyle.hashCode() as int
myMCStyle.hashCode();
```

### isEmpty

Whether or not this style is empty (inherits everything from the parent).

Return Type: boolean

```zenscript
MCStyle.isEmpty() as boolean
myMCStyle.isEmpty();
```

### mergeStyle

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.mergeStyle(style as MCStyle) as MCStyle
```

| Parameter | Type                                      | Beschreibung            |
| --------- | ----------------------------------------- | ----------------------- |
| stile     | [MCStyle](/vanilla/api/util/text/MCStyle) | No Description Provided |


### fett

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setBold(boldIn as Boolean) as MCStyle
```

| Parameter | Type    | Beschreibung            |
| --------- | ------- | ----------------------- |
| boldIn    | Boolean | No Description Provided |


### setColor

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(colour as int) as MCStyle
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| colour    | int  | No Description Provided |


Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setColor(formatting as TextFormatting) as MCStyle
```

| Parameter   | Type                                                    | Beschreibung            |
| ----------- | ------------------------------------------------------- | ----------------------- |
| formatieren | [TextFormatting](/vanilla/api/util/text/TextFormatting) | No Description Provided |


### setFontId

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFontId(location as MCResourceLocation) as MCStyle
```

| Parameter | Type                                                        | Beschreibung            |
| --------- | ----------------------------------------------------------- | ----------------------- |
| standort  | [MCResource-Standort](/vanilla/api/util/MCResourceLocation) | No Description Provided |


### setze Formatierung

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setFormatting(formatting as TextFormatting) as MCStyle
```

| Parameter   | Type                                                    | Beschreibung            |
| ----------- | ------------------------------------------------------- | ----------------------- |
| formatieren | [TextFormatting](/vanilla/api/util/text/TextFormatting) | No Description Provided |


### setInsertion

Set a text to be inserted into Chat when the component is shift-clicked

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setInsertion(insertion as string) as MCStyle
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| einfügen  | string | No Description Provided |


### setItalic

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setItalic(italic as Boolean) as MCStyle
```

| Parameter | Type    | Beschreibung            |
| --------- | ------- | ----------------------- |
| italic    | Boolean | No Description Provided |


### verschleiert

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setObfuscated(obfuscated as Boolean) as MCStyle
```

| Parameter  | Type    | Beschreibung            |
| ---------- | ------- | ----------------------- |
| obfuscated | Boolean | No Description Provided |


### durchstreichen

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setStrikethrough(strikethrough as Boolean) as MCStyle
```

| Parameter     | Type    | Beschreibung            |
| ------------- | ------- | ----------------------- |
| strikethrough | Boolean | No Description Provided |


### unterstrichen

Return Type: [MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
MCStyle.setUnderlined(underlined as Boolean) as MCStyle
```

| Parameter     | Type    | Beschreibung            |
| ------------- | ------- | ----------------------- |
| unterstrichen | Boolean | No Description Provided |


### toString

Return Type: string

```zenscript
MCStyle.toString() as string
myMCStyle.toString();
```


