# Comandi Personalizzati

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.CustomCommands
```

## Metodi
### argomento

Tipo restituito: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.argument(name as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |


### letterale

Tipo restituito: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.literal(name as String);
```

| Parametro | Tipo    | Descrizione                 |
| --------- | ------- | --------------------------- |
| nome      | Stringa | Nessuna descrizione fornita |


### registerCommand

```zenscript
crafttweaker.api.commands.custom.CustomCommands.registerCommand(builder as crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parametro   | Tipo                                                                                                               | Descrizione                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| costruttore | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Nessuna descrizione fornita |



