# MCStyle

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Constructors
```zenscript
new crafttweaker.api.util.text.MCStyle();
```

## Methods
### equals

Return type: boolean

```zenscript
myMCStyle.equals(other as Object);
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

Type de retour : [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### Obtenir l'insertion

Return type: String

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Return type: boolean

```zenscript
myMCStyle.getItalic();
```

### format@@0 getObfuscated

Return type: boolean

```zenscript
myMCStyle.getObfuscated();
```

### format@@0 getStrikethrough

Return type: boolean

```zenscript
myMCStyle.getStrikethrough();
```

### devenez souligné

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

Si ce style est vide ou non (hérite de tout le parent).

Return type: boolean

```zenscript
myMCStyle.isEmpty();
```

### FugeStyle

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(style comme crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description             |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| style     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |


### setBold

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn comme booléen);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| boldIn    | Boolean | No description provided |


### définir la couleur

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(formatage comme crafttweaker.api.text.TextFormatting);
```

| Parameter     | Type                                                                          | Description             |
| ------------- | ----------------------------------------------------------------------------- | ----------------------- |
| mise en forme | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No description provided |



Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(color as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| couleur   | int  | No description provided |


### setFontId

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(emplacement comme emplacement crafttweaker.api.util.MCResourceLocation);
```

| Parameter    | Type                                                                             | Description             |
| ------------ | -------------------------------------------------------------------------------- | ----------------------- |
| Localisation | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | No description provided |


### format@@0 setFormatting

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(mise en forme comme crafttweaker.api.text.TextFormatting);
```

| Parameter     | Type                                                                          | Description             |
| ------------- | ----------------------------------------------------------------------------- | ----------------------- |
| mise en forme | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | No description provided |


### setInsertion

Définir un texte à insérer dans le chat lorsque le composant est cliqué avec la touche Maj

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(insertion en tant que String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| insertion | String | No description provided |


### setItalic

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(italique comme booléen);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| italic    | Boolean | No description provided |


### format@@0 setObfuscated

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(obfusqué comme Boolean);
```

| Parameter  | Type    | Description             |
| ---------- | ------- | ----------------------- |
| obfuscated | Boolean | No description provided |


### setStrikethrough

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(strikethrough as Boolean);
```

| Parameter     | Type    | Description             |
| ------------- | ------- | ----------------------- |
| strikethrough | Boolean | No description provided |


### soulignée

Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(souligné comme booléen);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| souligné  | Boolean | No description provided |



Type de retour : [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(souligné comme booléen);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| souligné  | boolean | No description provided |


### toString

Return type: String

```zenscript
myMCStyle.toString();
```


