# MCRequiredArgumentBuilder

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCRequiredArgumentBuilder
```

## Interfacce Implementate
MCRequiredArgumentBuilder implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Methods
### build

Tipo restituito: [crafttweaker.api.commands.custom.MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
myMCRequiredArgumentBuilder.build();
```

### equals

Return type: boolean

```zenscript
myMCRequiredArgumentBuilder.equals(o come oggetto);
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |


### esegue

Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.executes(comando come crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Description                 |
| --------- | ------------------------------------------------------------------------------------ | --------------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Nessuna descrizione fornita |


### fork

Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.fork(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parameter | Type                                                                                                   | Description                 |
| --------- | ------------------------------------------------------------------------------------------------------ | --------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nessuna descrizione fornita |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nessuna descrizione fornita |


### avanti

Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parameter | Type                                                                                                   | Description                 |
| --------- | ------------------------------------------------------------------------------------------------------ | --------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nessuna descrizione fornita |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nessuna descrizione fornita |
| fork      | boolean                                                                                                | Nessuna descrizione fornita |


### getArgomenti

Tipo restituito: Collezione&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRequiredArgumentBuilder.getArguments();
```

### getCommand

Tipo restituito: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCRequiredArgumentBuilder.getCommand();
```

### getName

Return type: String

```zenscript
myMCRequiredArgumentBuilder.getName();
```

### getRedirect

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRequiredArgumentBuilder.getRedirect();
```

### getRedirectModifier

Tipo di restituzione: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCRequiredArgumentBuilder.getRedirectModifier();
```

### getRequirement

Tipo restituito: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRequiredArgumentBuilder.getRequirement();
```

### getSuggestionsProvider

Tipo restituito: [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```

### hashCode

Return type: int

```zenscript
myMCRequiredArgumentBuilder.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCRequiredArgumentBuilder.isFork();
```

### reindirizzamento

Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parameter | Type                                                                                                               | Description                 |
| --------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Nessuna descrizione fornita |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Nessuna descrizione fornita |


### richiede

Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.requires(requisito come funzione.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parameter | Type                                                                                                                                   | Description                 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| requisito | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Nessuna descrizione fornita |


### suggerisce

Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.suggests(provider as crafttweaker.api.commands.custom.MCSuggestionProvider);
```

| Parameter | Type                                                                                                       | Description                 |
| --------- | ---------------------------------------------------------------------------------------------------------- | --------------------------- |
| provider  | [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | Nessuna descrizione fornita |


### poi

Tipo restituito: [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argomento come crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parameter | Type                                                                                                 | Description                 |
| --------- | ---------------------------------------------------------------------------------------------------- | --------------------------- |
| argomento | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argomento come crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| argomento | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argomento come crafttweaker.api.commands.custom.MCRequiredArgumentBuilder);
```

| Parameter | Type                                                                                                                 | Description                 |
| --------- | -------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| argomento | [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | Nessuna descrizione fornita |


### toString

Return type: String

```zenscript
myMCRequiredArgumentBuilder.toString();
```


## Operators
### EQUALS

```zenscript
myMCRequiredArgumentBuilder == o come oggetto
```

| Parameter | Type   | Description                 |
| --------- | ------ | --------------------------- |
| o         | Object | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| String         | true      |

