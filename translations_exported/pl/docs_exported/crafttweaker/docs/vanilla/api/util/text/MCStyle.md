# Styl MCSS

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
craftaweaker.api.util.text.MCStyle
```

## Constructors
```zenscript
nowy crafttweaker.api.util.text.MCStyle();
```

## Methods
### equals

Return type: boolean

```zenscript
myMCStyle.equals(inny jako obiekt);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| other     | Object | No description provided |


### getBold

Return type: boolean

```zenscript
myMCStyle.getBold();
```

### getFontId

Typ zwrotu: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### getsertion

Return type: String

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Return type: boolean

```zenscript
myMCStyle.getItalic();
```

### getObfuscated

Return type: boolean

```zenscript
myMCStyle.getObfuscated();
```

### getStrikethrough

Return type: boolean

```zenscript
myMCStyle.getStrikethrough();
```

### weź pod uwagę

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

Bez względu na to, czy ten styl jest pusty (odziedzicza wszystko od rodzica).

Return type: boolean

```zenscript
myMCStyle.isEmpty();
```

### Styl scalania

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(styl jak crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| styl      | [craftaweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |


### setPogrubienie

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn jako Boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| boldIn    | Boolean | No description provided |


### Kolor ustawienia

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(formatowanie jako crafttweaker.api.text.TextFormatting);
```

| Parameter    | Type                                                                   | Description             |
| ------------ | ---------------------------------------------------------------------- | ----------------------- |
| formatowanie | [Tworzenie formatowania tekstu](/crafttweaker/api/text/TextFormatting) | No description provided |



Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
mojMCStyle.setColor(kolor jak inny);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| kolor     | int  | No description provided |


### setFontId

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(lokalizacja jako crafttweaker.api.util.MCResourceLocation);
```

| Parameter   | Type                                                                             | Description             |
| ----------- | -------------------------------------------------------------------------------- | ----------------------- |
| lokalizacja | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### ustawianie formatowania

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
formatowanie myMCStyle.setmatting(formatowanie jako crafttweaker.api.text.TextFormatting);
```

| Parameter    | Type                                                                   | Description             |
| ------------ | ---------------------------------------------------------------------- | ----------------------- |
| formatowanie | [Tworzenie formatowania tekstu](/crafttweaker/api/text/TextFormatting) | No description provided |


### setInsertion

Ustaw tekst, który ma być wstawiony do czatu, gdy komponent jest kliknięty na zmianę

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(insertion as String);
```

| Parameter    | Type   | Description             |
| ------------ | ------ | ----------------------- |
| umieszczenie | String | No description provided |


### setItalic

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic (kursywą jako boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| italic    | Boolean | No description provided |


### setObuscated

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(ukryte jako boolean);
```

| Parameter  | Type    | Description             |
| ---------- | ------- | ----------------------- |
| obfuscated | Boolean | No description provided |


### setStrikethrough

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(strikethrough jako boolean);
```

| Parameter     | Type    | Description             |
| ------------- | ------- | ----------------------- |
| strikethrough | Boolean | No description provided |


### Ustawiony

Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(podkreślone jako Boolean);
```

| Parameter   | Type    | Description             |
| ----------- | ------- | ----------------------- |
| Podkreślony | Boolean | No description provided |



Typ zwrotu: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(podkreślone jako boolean);
```

| Parameter   | Type    | Description             |
| ----------- | ------- | ----------------------- |
| Podkreślony | boolean | No description provided |


### toString

Return type: String

```zenscript
myMCStyle.toString();
```


