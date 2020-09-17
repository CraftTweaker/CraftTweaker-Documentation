# MCTextComponent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Metodi
### appendSibling

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(componente come crafttweaker.api.util.text.MCTextComponent);
```

| Parametro  | Tipo                                                                                 | Descrizione                 |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |


### appendText

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(text as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| testo     | Stringa | Nessuna descrizione fornita |


### copyRaw

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### deepCopy

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.deepCopy();
```

### getString

Tipo di ritorno: Stringa

```zenscript
myMCTextComponent.getString();
```

### getStringTroncato

Tipo di ritorno: Stringa

```zenscript
myMCTextComponent.getStringTruncated(maxLen as int);
```

| Parametro | Tipo | Descrizione                 |
| --------- | ---- | --------------------------- |
| maxLen    | int  | Nessuna descrizione fornita |


### getUnformattedComponentText

Tipo di ritorno: Stringa

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(stile come crafttweaker.api.util.text.MCStyle);
```

| Parametro | Tipo                                                                 | Descrizione                 |
| --------- | -------------------------------------------------------------------- | --------------------------- |
| stile     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Nessuna descrizione fornita |



## Proprietà

| Nome                     | Tipo                                                                                                           | Ha Getter | Ha Setter |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| formattedText            | Stringa                                                                                                        | vero      | falso     |
| fratelli                 | Elenco&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | vero      | falso     |
| unformattedComponentText | Stringa                                                                                                        | vero      | falso     |

## Operatori
### AGGIUNGI

```zenscript
myMCTextComponent + componente come crafttweaker.api.util.text.MCTextComponent
```

| Parametro  | Tipo                                                                                 | Descrizione                 |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |
### CAT

```zenscript
myMCTextComponent ~ componente come crafttweaker.api.util.text.MCTextComponent
```

| Parametro  | Tipo                                                                                 | Descrizione                 |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |
### SHL

```zenscript
myMCTextComponent << componente come crafttweaker.api.util.text.MCTextComponent
```

| Parametro  | Tipo                                                                                 | Descrizione                 |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | falso     |

