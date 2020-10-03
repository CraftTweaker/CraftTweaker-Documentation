# MCCommandContextBuilder

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Methods
### build

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(input as String);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| input     | String | Nessuna descrizione fornita |


### copy

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### equals

Return type: boolean

```zenscript
myMCCommandContextBuilder.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### findSuggestionContext

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(cursore come int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| cursor    | int  | Nessuna descrizione fornita |


### getArgomenti

Tipo di restituzione: [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

Tipo restituito: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### getDispatcher

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Tipo di restituzione: Lista&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### getRange

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

Return type: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

Return type: String

```zenscript
myMCCommandContextBuilder.toString();
```

### conArgomento

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(nome come Stringa, argomento come crafttweaker.api.commands.custom.MCParsedArgument);
```

| Parameter | Type                                                                                               | Description                 |
| --------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| name      | String                                                                                             | Nessuna descrizione fornita |
| argomento | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | Nessuna descrizione fornita |


### withChild

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(figlio come crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter | Type                                                                                                             | Description                 |
| --------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
| figlio    | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Nessuna descrizione fornita |


### withCommand

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(comando come crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Description                 |
| --------- | ------------------------------------------------------------------------------------ | --------------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Nessuna descrizione fornita |


### withNode

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(node as crafttweaker.api.commands.custom.MCCommandNode, range as crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nessuna descrizione fornita |


### withSource

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |



## Operators
### EQUALS

```zenscript
myMCCommandContextBuilder == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

