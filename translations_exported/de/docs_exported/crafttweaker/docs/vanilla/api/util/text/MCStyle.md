# MCStyle

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Konstrukteure
```zenscript
neue crafttweaker.api.util.text.MCStyle();
```

## Methoden
### gleich

Rückgabetyp: boolesch

```zenscript
myMCStyle.equals(andere als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| andere    | Objekt | Keine Beschreibung angegeben |


### getBold

Rückgabetyp: boolesch

```zenscript
myMCStyle.getBold();
```

### getFontId

Rückgabetyp: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### getInsertion

Rückgabetyp: String

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Rückgabetyp: boolesch

```zenscript
myMCStyle.getItalic();
```

### getverschleiert

Rückgabetyp: boolesch

```zenscript
myMCStyle.getObfuscate();
```

### getStrikethrough

Rückgabetyp: boolesch

```zenscript
myMCStyle.getStrikethrough();
```

### getUnterstrichen

Rückgabetyp: boolesch

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Rückgabetyp: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

Ob dieser Stil leer ist (erbt alles vom Eltern).

Rückgabetyp: boolesch

```zenscript
myMCStyle.isEmpty();
```

### mergeStyle

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Beschreibung                 |
| --------- | -------------------------------------------------------------------- | ---------------------------- |
| stile     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Keine Beschreibung angegeben |


### fett

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn als Boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| boldIn    | Boolean | Keine Beschreibung angegeben |


### setColor

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(Formatierung als crafttweaker.api.text.TextFormatting);
```

| Parameter   | Type                                                                            | Beschreibung                 |
| ----------- | ------------------------------------------------------------------------------- | ---------------------------- |
| formatieren | [crafttweaker.api.text.Textformatierung](/crafttweaker/api/text/TextFormatting) | Keine Beschreibung angegeben |



Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(Farbe als int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| farbig    | int  | Keine Beschreibung angegeben |


### setFontId

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(Position als crafttweaker.api.util.MCResourceLocation);
```

| Parameter | Type                                                                             | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------- | ---------------------------- |
| standort  | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Keine Beschreibung angegeben |


### setze Formatierung

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(Formatierung als crafttweaker.api.text.TextFormatting);
```

| Parameter   | Type                                                                            | Beschreibung                 |
| ----------- | ------------------------------------------------------------------------------- | ---------------------------- |
| formatieren | [crafttweaker.api.text.Textformatierung](/crafttweaker/api/text/TextFormatting) | Keine Beschreibung angegeben |


### setInsertion

Legen Sie einen Text fest, der in den Chat eingefügt werden soll, wenn die Komponente Shift-Klick hat

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(Einfügen als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| einfügen  | String | Keine Beschreibung angegeben |


### setItalic

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(kursiv wie Boolean);
```

| Parameter | Type    | Beschreibung                 |
| --------- | ------- | ---------------------------- |
| italic    | Boolean | Keine Beschreibung angegeben |


### verschleiert

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(verschleiert als Boolean);
```

| Parameter    | Type    | Beschreibung                 |
| ------------ | ------- | ---------------------------- |
| verschleiert | Boolean | Keine Beschreibung angegeben |


### durchstreichen

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(Strikethrough als Boolean);
```

| Parameter     | Type    | Beschreibung                 |
| ------------- | ------- | ---------------------------- |
| durchschlagen | Boolean | Keine Beschreibung angegeben |


### unterstrichen

Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnterstrichen (unterstrichen als Boolean);
```

| Parameter     | Type    | Beschreibung                 |
| ------------- | ------- | ---------------------------- |
| unterstrichen | Boolean | Keine Beschreibung angegeben |



Rückgabetyp: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(unterstrichen als boolean);
```

| Parameter     | Type    | Beschreibung                 |
| ------------- | ------- | ---------------------------- |
| unterstrichen | boolean | Keine Beschreibung angegeben |


### toString

Rückgabetyp: String

```zenscript
myMCStyle.toString();
```


