# MCTextkomponente

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Methoden
### append-Sibling

Rückgabetyp: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(Komponente als crafttweaker.api.util.text.MCTextComponent);
```

| Parameter  | Type                                                                                 | Beschreibung                 |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| komponente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Keine Beschreibung angegeben |


### appendText

Rückgabetyp: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(Text als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| text      | String | Keine Beschreibung angegeben |


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

Rückgabetyp: String

```zenscript
myMCTextComponent.getString();
```

### getStringTruncated

Rückgabetyp: String

```zenscript
myMCTextComponent.getStringTruncated(maxLen als int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| maxLen    | int  | Keine Beschreibung angegeben |


### getUnformattedComponentText

Rückgabetyp: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Rückgabetyp: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Beschreibung                 |
| --------- | -------------------------------------------------------------------- | ---------------------------- |
| stile     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Keine Beschreibung angegeben |



## Eigenschaften

| Name                     | Type                                                                                                          | Hat Getter | Hat Setter |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| formatierter Text        | String                                                                                                        | true       | false      |
| Geschwister              | Liste&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true       | false      |
| unformattedComponentText | String                                                                                                        | true       | false      |

## Operatoren
### ZUD

```zenscript
myMCTextComponent + Komponente als crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Beschreibung                 |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| komponente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Keine Beschreibung angegeben |
### CAT

```zenscript
myMCTextComponent ~ Komponente als crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Beschreibung                 |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| komponente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Keine Beschreibung angegeben |
### SHL

```zenscript
myMCTextComponent << Komponente als crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Beschreibung                 |
| ---------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| komponente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | false        |

