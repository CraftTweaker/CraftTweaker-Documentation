# MCResultConsumer

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCResultConsumer
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(commandContext, successo, risultato) =>{}
```
## Methods
### onCommandComplete

```zenscript
myMCResultConsumer.onCommandComplete(commandContext as crafttweaker.api.commands.custom.MCCommandContext, success as boolean, result as int);
```

| Parameter      | Type                                                                                               | Description                 |
| -------------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| commandContext | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Nessuna descrizione fornita |
| success        | boolean                                                                                            | Nessuna descrizione fornita |
| result         | int                                                                                                | Nessuna descrizione fornita |



