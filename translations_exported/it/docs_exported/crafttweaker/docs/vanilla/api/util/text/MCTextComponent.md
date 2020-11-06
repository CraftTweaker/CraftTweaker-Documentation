# MCTextComponent

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.util.text.MCTextComponent
```

## Methods
### appendSibling

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendSibling(componente come crafttweaker.api.util.text.MCTextComponent);
```

| Parameter  | Type                                                                                 | Description                 |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |


### appendText

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.appendText(text as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| testo     | String | Nessuna descrizione fornita |


### copyRaw

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.copyRaw();
```

### createStringTextComponent

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
crafttweaker.api.util.text.MCTextComponent.createStringTextComponent(text as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| testo     | String | Nessuna descrizione fornita |


### createTranslationTextComponent

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
crafttweaker.api.util.text.MCTextComponent.createTranslationTextComponent(translationKey as String);
```

| Parameter      | Type   | Description                 |
| -------------- | ------ | --------------------------- |
| translationKey | String | Nessuna descrizione fornita |



Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
crafttweaker.api.util.text.MCTextComponent.createTranslationTextComponent(translationKey as String, args as Object[]);
```

| Parameter      | Type     | Description                 |
| -------------- | -------- | --------------------------- |
| translationKey | String   | Nessuna descrizione fornita |
| args           | Object[] | Nessuna descrizione fornita |


### deepCopy

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

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
myMCTextComponent.getStringTruncated(maxLen as int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| maxLen    | int  | Nessuna descrizione fornita |


### getUnformattedComponentText

Return type: String

```zenscript
myMCTextComponent.getUnformattedComponentText();
```

### setStyle

Tipo di restituzione: [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
myMCTextComponent.setStyle(style as crafttweaker.api.util.text.MCStyle);
```

| Parameter | Type                                                                 | Description                 |
| --------- | -------------------------------------------------------------------- | --------------------------- |
| stile     | [crafttweaker.api.util.text.MCStyle](/vanilla/api/util/text/MCStyle) | Nessuna descrizione fornita |



## Properties

| Name                     | Type                                                                                                           | Ha Getter | Ha Setter |
| ------------------------ | -------------------------------------------------------------------------------------------------------------- | --------- | --------- |
| formattedText            | String                                                                                                         | true      | false     |
| siblings                 | Elenco&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | true      | false     |
| unformattedComponentText | String                                                                                                         | true      | false     |

## Operators
### ADD

```zenscript
myMCTextComponent + component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Description                 |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |
### CAT

```zenscript
myMCTextComponent ~ component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Description                 |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |
### SHL

```zenscript
myMCTextComponent << component as crafttweaker.api.util.text.MCTextComponent
```

| Parameter  | Type                                                                                 | Description                 |
| ---------- | ------------------------------------------------------------------------------------ | --------------------------- |
| componente | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | false     |

