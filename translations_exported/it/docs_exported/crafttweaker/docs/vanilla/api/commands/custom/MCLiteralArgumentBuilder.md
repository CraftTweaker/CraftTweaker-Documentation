# MCLiteralArgumentBuilder

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCLiteralArgumentBuilder
```

## Interfacce Implementate
MCLiteralArgumentBuilder implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Metodi
### build

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCLiteralArgumentBuilder.build();
```

### uguale

Tipo restituito: booleano

```zenscript
myMCLiteralArgumentBuilder.equals(o come oggetto);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |


### esegue

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.executes(comando come crafttweaker.api.commands.custom.MCCommand);
```

| Parametro | Tipo                                                                                 | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------ | --------------------------- |
| comando   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Nessuna descrizione fornita |


### fork

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.fork(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parametro | Tipo                                                                                                   | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------------ | --------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nessuna descrizione fornita |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nessuna descrizione fornita |


### avanti

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parametro | Tipo                                                                                                   | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------------ | --------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Nessuna descrizione fornita |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Nessuna descrizione fornita |
| fork      | boolean                                                                                                | Nessuna descrizione fornita |


### getArgomenti

Tipo restituito: Collezione&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralArgumentBuilder.getArguments();
```

### getCommand

Tipo restituito: [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCLiteralArgumentBuilder.getCommand();
```

### getLiteral

Tipo di ritorno: Stringa

```zenscript
myMCLiteralArgumentBuilder.getLiteral();
```

### getRedirect

Tipo restituito: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralArgumentBuilder.getRedirect();
```

### getRedirectModifier

Tipo di restituzione: [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCLiteralArgumentBuilder.getRedirectModifier();
```

### getRequirement

Tipo restituito: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCLiteralArgumentBuilder.getRequirement();
```

### hashCode

Tipo di restituzione: int

```zenscript
myMCLiteralArgumentBuilder.hashCode();
```

### isFork

Tipo restituito: booleano

```zenscript
myMCLiteralArgumentBuilder.isFork();
```

### reindirizzamento

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametro | Tipo                                                                                         | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode, modifier as crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parametro | Tipo                                                                                                               | Descrizione                 |
| --------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Nessuna descrizione fornita |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Nessuna descrizione fornita |


### richiede

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.requires(requisito come funzione.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parametro | Tipo                                                                                                                                   | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| requisito | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Nessuna descrizione fornita |


### poi

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(argomento come crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parametro | Tipo                                                                                                 | Descrizione                 |
| --------- | ---------------------------------------------------------------------------------------------------- | --------------------------- |
| argomento | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Nessuna descrizione fornita |



Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(argomento come crafttweaker.api.commands.custom.MCCommandNode);
```

| Parametro | Tipo                                                                                         | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| argomento | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |


### toString

Tipo di ritorno: Stringa

```zenscript
myMCLiteralArgumentBuilder.toString();
```


## Operatori
### EQUALI

```zenscript
myMCLiteralArgumentBuilder == o come oggetto
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| o         | Oggetto | Nessuna descrizione fornita |

## Caster

| Tipo Risultato | Implicito |
| -------------- | --------- |
| Stringa        | vero      |

