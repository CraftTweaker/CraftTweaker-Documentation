# MCResultConsumer

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCResultConsumer
```

## Interfaccia Funzionale

Questa classe è un'interfaccia funzionale. Ciò significa che è possibile utilizzare la notazione lambda per creare un'istanza di esso. La notazione lambda assomiglia:
```zenscript
(commandContext, successo, risultato) =>{}
```
## Metodi
### onCommandComplete

```zenscript
myMCResultConsumer.onCommandComplete(commandContext as crafttweaker.api.commands.custom.MCCommandContext, success as boolean, result as int);
```

| Parametro      | Tipo                                                                                               | Descrizione                 |
| -------------- | -------------------------------------------------------------------------------------------------- | --------------------------- |
| commandContext | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext) | Nessuna descrizione fornita |
| successo       | boolean                                                                                            | Nessuna descrizione fornita |
| risultato      | int                                                                                                | Nessuna descrizione fornita |



