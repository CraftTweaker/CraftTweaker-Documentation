# MCAmbiguityConsumer

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCAmbiguityConsumer
```

## Interfaccia Funzionale

Questa classe è un'interfaccia funzionale. Ciò significa che è possibile utilizzare la notazione lambda per creare un'istanza di esso. La notazione lambda assomiglia:
```zenscript
(genitore, figlio, fratello, ingressi) =>{}
```
## Metodi
### ambiguo

```zenscript
myMCAmbiguityConsumer.ambiguous(parent as crafttweaker.api.commands.custom.MCCommandNode, child as crafttweaker.api.commands.custom.MCCommandNode, sibling as crafttweaker.api.commands.custom.MCCommandNode, inputs as Collection<String>);
```

| Parametro | Tipo                                                                                         | Descrizione                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| genitore  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |
| figlio    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |
| fratello  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |
| inputs    | Raccolta&lt;String&gt;                                                           | Nessuna descrizione fornita |



