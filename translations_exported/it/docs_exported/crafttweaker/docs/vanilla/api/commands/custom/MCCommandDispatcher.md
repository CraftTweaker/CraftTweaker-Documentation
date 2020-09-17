# MCCommandDispatcher

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatcher
```

## Metodi
### uguale

Tipo restituito: booleano

```zenscript
myMCCommandDispatcher.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### esegui

Tipo di restituzione: int

```zenscript
myMCCommandDispatcher.execute(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parametro | Tipo                                                                                           | Descrizione                 |
| --------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Nessuna descrizione fornita |



Tipo di restituzione: int

```zenscript
myMCCommandDispatcher.execute(input as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametro | Tipo                                                                                             | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| input     | Stringa                                                                                          | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |



Tipo di restituzione: int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametro | Tipo                                                                                             | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| input     | com.mojang.brigadier.StringReader                                                                | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |


### trovdAmbiguità

```zenscript
myMCCommandDispatcher.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parametro   | Tipo                                                                                                     | Descrizione                 |
| ----------- | -------------------------------------------------------------------------------------------------------- | --------------------------- |
| consumatore | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Nessuna descrizione fornita |


### findNode

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(path as Collection<String>);
```

| Parametro | Tipo                               | Descrizione                 |
| --------- | ---------------------------------- | --------------------------- |
| percorso  | Raccolta&lt;String&gt; | Nessuna descrizione fornita |


### getAllUsage

Tipo di ritorno: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, restricted as boolean);
```

| Parametro | Tipo                                                                                             | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |
| limitato  | boolean                                                                                          | Nessuna descrizione fornita |


### getCompletionSuggestions

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parametro | Tipo                                                                                           | Descrizione                 |
| --------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults, cursor as int);
```

| Parametro | Tipo                                                                                           | Descrizione                 |
| --------- | ---------------------------------------------------------------------------------------------- | --------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Nessuna descrizione fornita |
| cursor    | int                                                                                            | Nessuna descrizione fornita |


### getPath

Tipo di ritorno: Collezione&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametro | Tipo                                                                                         | Descrizione                 |
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

| Parametro | Tipo                                                                                             | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |


### hashCode

Tipo di restituzione: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Tipo restituito: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(comando come Stringa, sorgente come crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametro | Tipo                                                                                             | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| comando   | Stringa                                                                                          | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(comando come com.mojang.brigadier.StringReader, sorgente come crafttweaker.api.commands.custom.MCCommandSource);
```

| Parametro | Tipo                                                                                             | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------ | --------------------------- |
| comando   | com.mojang.brigadier.StringReader                                                                | Nessuna descrizione fornita |
| sorgente  | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Nessuna descrizione fornita |


### registrati

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(comando come crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parametro | Tipo                                                                                                               | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| comando   | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Nessuna descrizione fornita |


### setConsumer

```zenscript
myMCCommandDispatcher.setConsumer(consumer as crafttweaker.api.commands.custom.MCResultConsumer);
```

| Parametro   | Tipo                                                                                               | Descrizione                 |
| ----------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| consumatore | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | Nessuna descrizione fornita |


### toString

Tipo di ritorno: Stringa

```zenscript
myMCCommandDispatcher.toString();
```


## Operatori
### EQUALI

```zenscript
myMCCommandDispatcher == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |

