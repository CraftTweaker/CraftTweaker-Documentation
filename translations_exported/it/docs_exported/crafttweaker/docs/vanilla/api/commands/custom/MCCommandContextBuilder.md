# MCCommandContextBuilder

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Metodi
### build

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(input as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| input     | Stringa | Nessuna descrizione fornita |


### copia

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### uguale

Tipo restituito: booleano

```zenscript
myMCCommandContextBuilder.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### findSuggestionContext

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(cursore come int);
```

| Parametro | Tipo | Descrizione                 |
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

Tipo di restituzione: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

Tipo di ritorno: Stringa

```zenscript
myMCCommandContextBuilder.toString();
```

### conArgomento

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(nome come Stringa, argomento come crafttweaker.api.commands.custom.MCParsedArgument);
```

| Parametro | Tipo                                                                                               | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| nome      | Stringa                                                                                            | Nessuna descrizione fornita |
| argomento | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | Nessuna descrizione fornita |


### withChild

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(figlio come crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parametro | Tipo                                                                                                             | Descrizione                 |
| --------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------- |
| figlio    | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Nessuna descrizione fornita |


### withCommand

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(comando come crafttweaker.api.commands.custom.MCCommand);
```

| Parametro | Tipo                                                                                 | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------ | --------------------------- |
| comando   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Nessuna descrizione fornita |


### withNode

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(node as crafttweaker.api.commands.custom.MCCommandNode, range as crafttweaker.api.commands.custom.MCStringRange);
```

| Parametro | Tipo                                                                                         | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Nessuna descrizione fornita |


### withSource

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametro | Tipo                                                                                             | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |



## Operatori
### EQUALI

```zenscript
myMCCommandContextBuilder == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |

