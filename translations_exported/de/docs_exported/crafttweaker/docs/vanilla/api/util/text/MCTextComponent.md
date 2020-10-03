# MCTextkomponente

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Methoden
### append-Sibling

Rückgabetyp: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(Komponente als crafttweaker.api.util.text.MCTextComponent);
```

| Parameter  | Type                                                                                 | Beschreibung            |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------- |
| komponente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |


### appendText

Rückgabetyp: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(Text als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| text      | String | No description provided |


### kopiere Rohe

Rückgabetyp: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### deepCopy

Rückgabetyp: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString

Return type: String

```zenscript
myMCTextComponent.getString();
```

### getStringTruncated

Return type: String

```zenscript
myMCTextComponent.getStringTruncated(maxLen als int);
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| maxLen    | int  | No description provided |


### getUnformattedComponentText

Return type: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Rückgabetyp: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Beschreibung            |
| --------- | -------------------------------------------------------------------- | ----------------------- |
| stile     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | No description provided |



## Properties

| Name                     | Type                                                                                                          | Has Getter | Has Setter |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| formatierter Text        | String                                                                                                        | true       | false      |
| Geschwister              | Liste&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true       | false      |
| unformattedComponentText | String                                                                                                        | true       | false      |

## Operatoren
### ADD

```zenscript
myMCTextComponent + Komponente als crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Beschreibung            |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------- |
| komponente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### CAT

```zenscript
myMCTextComponent ~ Komponente als crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Beschreibung            |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------- |
| komponente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |
### SHL

```zenscript
myMCTextComponent << Komponente als crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Beschreibung            |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------- |
| komponente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | false       |

