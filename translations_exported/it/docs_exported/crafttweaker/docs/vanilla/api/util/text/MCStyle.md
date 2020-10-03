# MCStyle

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
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
myMCStyle.equals(altro come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| other     | Object | Nessuna descrizione fornita |


### getBold

Return type: boolean

```zenscript
myMCStyle.getBold();
```

### getFontId

Tipo di restituzione: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### getInserzione

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

### ottoSottolineato

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

Se questo stile è vuoto (eredita tutto dal genitore).

Return type: boolean

```zenscript
myMCStyle.isEmpty();
```

### mergeStyle

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(stile come crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description                 |
| --------- | -------------------------------------------------------------------- | --------------------------- |
| stile     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Nessuna descrizione fornita |


### setGrassetto

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn come Boolean);
```

| Parameter | Type    | Description                 |
| --------- | ------- | --------------------------- |
| boldIn    | Boolean | Nessuna descrizione fornita |


### setColor

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(formattazione come crafttweaker.api.text.TextFormatting);
```

| Parameter     | Type                                                                          | Description                 |
| ------------- | ----------------------------------------------------------------------------- | --------------------------- |
| formattazione | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Nessuna descrizione fornita |



Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(colore come int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| colore    | int  | Nessuna descrizione fornita |


### setFontId

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(posizione come crafttweaker.api.util.MCResourceLocation);
```

| Parameter | Type                                                                             | Description                 |
| --------- | -------------------------------------------------------------------------------- | --------------------------- |
| posizione | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Nessuna descrizione fornita |


### setFormatting

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(formattazione come crafttweaker.api.text.TextFormatting);
```

| Parameter     | Type                                                                          | Description                 |
| ------------- | ----------------------------------------------------------------------------- | --------------------------- |
| formattazione | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Nessuna descrizione fornita |


### setInserzione

Imposta un testo da inserire nella chat quando si fa clic su un componente

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(inserzione come stringa);
```

| Parameter   | Type   | Description                 |
| ----------- | ------ | --------------------------- |
| inserimento | String | Nessuna descrizione fornita |


### setItalic

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(corsivo come Boolean);
```

| Parameter | Type    | Description                 |
| --------- | ------- | --------------------------- |
| italic    | Boolean | Nessuna descrizione fornita |


### setObfuscato

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(offuscato come Boolean);
```

| Parameter  | Type    | Description                 |
| ---------- | ------- | --------------------------- |
| obfuscated | Boolean | Nessuna descrizione fornita |


### setStrikethrough

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(strikethrough come Boolean);
```

| Parameter     | Type    | Description                 |
| ------------- | ------- | --------------------------- |
| strikethrough | Boolean | Nessuna descrizione fornita |


### setSottolineato

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(sottolineato come Boolean);
```

| Parameter    | Type    | Description                 |
| ------------ | ------- | --------------------------- |
| sottolineato | Boolean | Nessuna descrizione fornita |



Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(sottolineato come boolean);
```

| Parameter    | Type    | Description                 |
| ------------ | ------- | --------------------------- |
| sottolineato | boolean | Nessuna descrizione fornita |


### toString

Return type: String

```zenscript
myMCStyle.toString();
```


