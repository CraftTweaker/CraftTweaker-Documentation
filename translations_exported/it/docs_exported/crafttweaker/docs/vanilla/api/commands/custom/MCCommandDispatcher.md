# MCCommandDispatcher

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatcher
```

## Methods
### equals

Return type: boolean

```zenscript
myMCCommandDispatcher.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### esegui

Return type: int

```zenscript
myMCCommandDispatcher.execute(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Description                 |
| --------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Nessuna descrizione fornita |



Return type: int

```zenscript
myMCCommandDispatcher.execute(input as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| input     | String                                                                                           | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |



Return type: int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| input     | com.mojang.brigadier.StringReader                                                                | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |


### trovdAmbiguità

```zenscript
myMCCommandDispatcher.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter   | Type                                                                                                     | Description                 |
| ----------- | -------------------------------------------------------------------------------------------------------- | --------------------------- |
| consumatore | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Nessuna descrizione fornita |


### findNode

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(path as Collection<String>);
```

| Parameter | Type                               | Description                 |
| --------- | ---------------------------------- | --------------------------- |
| path      | Raccolta&lt;String&gt; | Nessuna descrizione fornita |


### getAllUsage

Tipo di ritorno: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, restricted as boolean);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |
| limitato  | boolean                                                                                          | Nessuna descrizione fornita |


### getCompletionSuggestions

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Description                 |
| --------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults, cursor as int);
```

| Parameter | Type                                                                                           | Description                 |
| --------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Nessuna descrizione fornita |
| cursor    | int                                                                                            | Nessuna descrizione fornita |


### getPath

Tipo di ritorno: Collezione&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |


### getRoot

Tipo restituito: [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Tipo restituito: String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |


### hashCode

Return type: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Tipo restituito: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(comando come Stringa, sorgente come crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| command   | String                                                                                           | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(comando come com.mojang.brigadier.StringReader, sorgente come crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| command   | com.mojang.brigadier.StringReader                                                                | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |


### registrati

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(comando come crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parameter | Type                                                                                                               | Description                 |
| --------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| command   | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Nessuna descrizione fornita |


### setConsumer

```zenscript
myMCCommandDispatcher.setConsumer(consumer as crafttweaker.api.commands.custom.MCResultConsumer);
```

| Parameter   | Type                                                                                               | Description                 |
| ----------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| consumatore | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | Nessuna descrizione fornita |


### toString

Return type: String

```zenscript
myMCCommandDispatcher.toString();
```


## Operators
### EQUALS

```zenscript
myMCCommandDispatcher == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

