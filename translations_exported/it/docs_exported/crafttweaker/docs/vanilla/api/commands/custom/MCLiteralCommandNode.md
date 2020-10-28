# MCLiteralCommandNode

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Interfacce Implementate
MCLiteralCommandNode implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methods
### addChild

```zenscript
myMCLiteralCommandNode.addChild(node as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |


### canUse

Return type: boolean

```zenscript
myMCLiteralCommandNode.canUse(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |


### createBuilder

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCLiteralCommandNode.equals(o as Object);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### trovdAmbiguità

```zenscript
myMCLiteralCommandNode.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter   | Type                                                                                                     | Description                 |
| ----------- | -------------------------------------------------------------------------------------------------------- | --------------------------- |
| consumatore | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Nessuna descrizione fornita |


### getChild

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralCommandNode.getChild(name as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |


### getChildren

Tipo restituito: Collezione&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralCommandNode.getChildren();
```

### getCommand

Tipo restituito: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCLiteralCommandNode.getCommand();
```

### getExamples

Tipo di ritorno: Collezione&lt;String&gt;

```zenscript
myMCLiteralCommandNode.getExamples();
```

### getLiteral

Return type: String

```zenscript
myMCLiteralCommandNode.getLiteral();
```

### getName

Return type: String

```zenscript
myMCLiteralCommandNode.getName();
```

### getRedirect

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralCommandNode.getRedirect();
```

### getRedirectModifier

Tipo di restituzione: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCLiteralCommandNode.getRedirectModifier();
```

### getRelevantNodes

Tipo restituito: Collezione&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralCommandNode.getRelevantNodes(input as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| input     | String | Nessuna descrizione fornita |


### getRequirement

Tipo restituito: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCLiteralCommandNode.getRequirement();
```

### getUsageText

Return type: String

```zenscript
myMCLiteralCommandNode.getUsageText();
```

### hashCode

Return type: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCLiteralCommandNode.isFork();
```

### isValidInput

Return type: boolean

```zenscript
myMCLiteralCommandNode.isValidInput(input as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| input     | String | Nessuna descrizione fornita |


### listSuggestions

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCLiteralCommandNode.listSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter   | Type                                                                                                       | Description                 |
| ----------- | ---------------------------------------------------------------------------------------------------------- | --------------------------- |
| contesto    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | Nessuna descrizione fornita |
| costruttore | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Nessuna descrizione fornita |


### parse

```zenscript
myMCLiteralCommandNode.parse(input as String, contextBuilder as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter      | Type                                                                                                             | Description                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
| input          | String                                                                                                           | Nessuna descrizione fornita |
| contextBuilder | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Nessuna descrizione fornita |


### toString

Return type: String

```zenscript
myMCLiteralCommandNode.toString();
```


## Operators
### COMPARE

```zenscript
myMCCommandNode compare o as crafttweaker.api.commands.custom.MCCommandNode
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| o         | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |
### EQUALS

```zenscript
myMCLiteralCommandNode == o as Object
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

