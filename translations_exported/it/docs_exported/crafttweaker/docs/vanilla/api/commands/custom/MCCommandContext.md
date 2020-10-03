# MCCommandContext

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCCommandContext
```

## Methods
### copyFor

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.copyFor(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |


### equals

Return type: boolean

```zenscript
myMCCommandContext.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### getArgomento

Return type: String

```zenscript
myMCCommandContext.getArgument(nome come stringa);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| name      | String | Nessuna descrizione fornita |


### getChild

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getChild();
```

### getCommand

Tipo restituito: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContext.getCommand();
```

### getInput

Return type: String

```zenscript
myMCCommandContext.getInput();
```

### getLastChild

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getLastChild();
```

### getNodes

Tipo di restituzione: Lista&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContext.getNodes();
```

### getRange

Tipo restituito: [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContext.getRange();
```

### getRedirectModifier

Tipo di restituzione: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandContext.getRedirectModifier();
```

### getRootNode

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContext.getRootNode();
```

### getSource

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContext.getSource();
```

### hasNodes

Return type: boolean

```zenscript
myMCCommandContext.hasNodes();
```

### hashCode

Return type: int

```zenscript
myMCCommandContext.hashCode();
```

### isForked

Return type: boolean

```zenscript
myMCCommandContext.isForked();
```

### toString

Return type: String

```zenscript
myMCCommandContext.toString();
```


## Operators
### EQUALS

```zenscript
myMCCommandContext == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

