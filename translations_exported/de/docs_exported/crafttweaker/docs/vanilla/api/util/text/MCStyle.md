# MCStyle

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Constructors
```zenscript
neue crafttweaker.api.util.text.MCStyle();
```

## Methoden
### equals

Return type: boolean

```zenscript
myMCStyle.equals(andere als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| other     | Object | No description provided |


### getBold

Return type: boolean

```zenscript
myMCStyle.getBold();
```

### getFontId

Rückgabetyp: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### getInsertion

Return type: String

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Return type: boolean

```zenscript
myMCStyle.getItalic();
```

### getverschleiert

Return type: boolean

```zenscript
myMCStyle.getObfuscate();
```

### getStrikethrough

Return type: boolean

```zenscript
myMCStyle.getStrikethrough();
```

### getUnterstrichen

Return type: boolean

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Return type: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

Ob dieser Stil leer ist (erbt alles vom Eltern).

Return type: boolean

```zenscript
myMCStyle.isEmpty();
```

### mergeStyle

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Beschreibung            |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| stile     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |


### fett

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn als Boolean);
```

| Parameter | Type    | Beschreibung            |
| --------- | ------- | ----------------------- |
| boldIn    | Boolean | No description provided |


### setColor

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(Formatierung als crafttweaker.api.text.TextFormatting);
```

| Parameter   | Type                                                                            | Beschreibung            |
| ----------- | ------------------------------------------------------------------------------- | ----------------------- |
| formatieren | [crafttweaker.api.text.Textformatierung](/crafttweaker/api/text/TextFormatting) | No description provided |



Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(Farbe als int);
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| farbig    | int  | No description provided |


### setFontId

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(Position als crafttweaker.api.util.MCResourceLocation);
```

| Parameter | Type                                                                             | Beschreibung            |
| --------- | -------------------------------------------------------------------------------- | ----------------------- |
| standort  | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### setze Formatierung

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(Formatierung als crafttweaker.api.text.TextFormatting);
```

| Parameter   | Type                                                                            | Beschreibung            |
| ----------- | ------------------------------------------------------------------------------- | ----------------------- |
| formatieren | [crafttweaker.api.text.Textformatierung](/crafttweaker/api/text/TextFormatting) | No description provided |


### setInsertion

Legen Sie einen Text fest, der in den Chat eingefügt werden soll, wenn die Komponente Shift-Klick hat

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(Einfügen als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| einfügen  | String | No description provided |


### setItalic

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(kursiv wie Boolean);
```

| Parameter | Type    | Beschreibung            |
| --------- | ------- | ----------------------- |
| italic    | Boolean | No description provided |


### verschleiert

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(verschleiert als Boolean);
```

| Parameter  | Type    | Beschreibung            |
| ---------- | ------- | ----------------------- |
| obfuscated | Boolean | No description provided |


### durchstreichen

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(Strikethrough als Boolean);
```

| Parameter     | Type    | Beschreibung            |
| ------------- | ------- | ----------------------- |
| strikethrough | Boolean | No description provided |


### unterstrichen

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnterstrichen (unterstrichen als Boolean);
```

| Parameter     | Type    | Beschreibung            |
| ------------- | ------- | ----------------------- |
| unterstrichen | Boolean | No description provided |



Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(unterstrichen als boolean);
```

| Parameter     | Type    | Beschreibung            |
| ------------- | ------- | ----------------------- |
| unterstrichen | boolean | No description provided |


### toString

Return type: String

```zenscript
myMCStyle.toString();
```


