# MCStyle

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.text.MCStyle
```

## Costruttori
```zenscript
new crafttweaker.api.util.text.MCStyle();
```

## Metodi
### uguale

Tipo restituito: booleano

```zenscript
myMCStyle.equals(altro come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| altri     | Oggetto | Nessuna descrizione fornita |


### getBold

Tipo restituito: booleano

```zenscript
myMCStyle.getBold();
```

### getFontId

Tipo di restituzione: [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
myMCStyle.getFontId();
```

### getInserzione

Tipo di ritorno: Stringa

```zenscript
myMCStyle.getInsertion();
```

### getItalic

Tipo restituito: booleano

```zenscript
myMCStyle.getItalic();
```

### getObfuscated

Tipo restituito: booleano

```zenscript
myMCStyle.getObfuscated();
```

### getStrikethrough

Tipo restituito: booleano

```zenscript
myMCStyle.getStrikethrough();
```

### ottoSottolineato

Tipo restituito: booleano

```zenscript
myMCStyle.getUnderlined();
```

### hashCode

Tipo di restituzione: int

```zenscript
myMCStyle.hashCode();
```

### isEmpty

Se questo stile è vuoto (eredita tutto dal genitore).

Tipo restituito: booleano

```zenscript
myMCStyle.isEmpty();
```

### mergeStyle

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.mergeStyle(stile come crafttweaker.api.util.text.MCStyle);
```

| Parametro | Tipo                                                                 | Descrizione                 |
| --------- | -------------------------------------------------------------------- | --------------------------- |
| stile     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Nessuna descrizione fornita |


### setGrassetto

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setBold(boldIn come Boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| boldIn    | Boolean | Nessuna descrizione fornita |


### setColor

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(formattazione come crafttweaker.api.text.TextFormatting);
```

| Parametro     | Tipo                                                                          | Descrizione                 |
| ------------- | ----------------------------------------------------------------------------- | --------------------------- |
| formattazione | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Nessuna descrizione fornita |



Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setColor(colore come int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| colore    | int  | Nessuna descrizione fornita |


### setFontId

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFontId(posizione come crafttweaker.api.util.MCResourceLocation);
```

| Parametro | Tipo                                                                             | Descrizione                 |
| --------- | -------------------------------------------------------------------------------- | --------------------------- |
| posizione | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Nessuna descrizione fornita |


### setFormatting

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setFormatting(formattazione come crafttweaker.api.text.TextFormatting);
```

| Parametro     | Tipo                                                                          | Descrizione                 |
| ------------- | ----------------------------------------------------------------------------- | --------------------------- |
| formattazione | [crafttweaker.api.text.TextFormatting](/crafttweaker/api/text/TextFormatting) | Nessuna descrizione fornita |


### setInserzione

Imposta un testo da inserire nella chat quando si fa clic su un componente

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setInsertion(inserzione come stringa);
```

| Parametro   | Tipo    | Descrizione                 |
| ----------- | ------- | --------------------------- |
| inserimento | Stringa | Nessuna descrizione fornita |


### setItalic

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setItalic(corsivo come Boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| italic    | Boolean | Nessuna descrizione fornita |


### setObfuscato

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setObfuscated(offuscato come Boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| offuscato | Boolean | Nessuna descrizione fornita |


### setStrikethrough

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setStrikethrough(strikethrough come Boolean);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| barrato   | Boolean | Nessuna descrizione fornita |


### setSottolineato

Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(sottolineato come Boolean);
```

| Parametro    | Tipo    | Descrizione                 |
| ------------ | ------- | --------------------------- |
| sottolineato | Boolean | Nessuna descrizione fornita |



Tipo di restituzione: [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle)

```zenscript
myMCStyle.setUnderlined(sottolineato come boolean);
```

| Parametro    | Tipo    | Descrizione                 |
| ------------ | ------- | --------------------------- |
| sottolineato | boolean | Nessuna descrizione fornita |


### toString

Tipo di ritorno: Stringa

```zenscript
myMCStyle.toString();
```


