# MCCommandNode

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCCommandNode
```

## Methods
### addChild

```zenscript
myMCCommandNode.addChild(node as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |


### canUse

Return type: boolean

```zenscript
myMCCommandNode.canUse(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |


### createBuilder

Tipo restituito: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCCommandNode.equals(o as Object);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### trovdAmbiguità

```zenscript
myMCCommandNode.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter   | Type                                                                                                     | Description                 |
| ----------- | -------------------------------------------------------------------------------------------------------- | --------------------------- |
| consumatore | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Nessuna descrizione fornita |


### getChild

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandNode.getChild(name as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |


### getChildren

Tipo restituito: Collezione&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCCommandNode.getChildren();
```

### getCommand

Tipo restituito: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandNode.getCommand();
```

### getExamples

Tipo di ritorno: Collezione&lt;String&gt;

```zenscript
myMCCommandNode.getExamples();
```

### getName

Return type: String

```zenscript
myMCCommandNode.getName();
```

### getRedirect

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandNode.getRedirect();
```

### getRedirectModifier

Tipo di restituzione: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandNode.getRedirectModifier();
```

### getRelevantNodes

Tipo restituito: Collezione&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCCommandNode.getRelevantNodes(input as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| input     | String | Nessuna descrizione fornita |


### getRequirement

Tipo restituito: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCCommandNode.getRequirement();
```

### getUsageText

Return type: String

```zenscript
myMCCommandNode.getUsageText();
```

### hashCode

Return type: int

```zenscript
myMCCommandNode.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCCommandNode.isFork();
```

### listSuggestions

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandNode.listSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter   | Type                                                                                                       | Description                 |
| ----------- | ---------------------------------------------------------------------------------------------------------- | --------------------------- |
| contesto    | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | Nessuna descrizione fornita |
| costruttore | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Nessuna descrizione fornita |


### parse

```zenscript
myMCCommandNode.parse(input as String, contextBuilder as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter      | Type                                                                                                             | Description                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
| input          | String                                                                                                           | Nessuna descrizione fornita |
| contextBuilder | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Nessuna descrizione fornita |


### toString

Return type: String

```zenscript
myMCCommandNode.toString();
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
myMCCommandNode == o as Object
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

