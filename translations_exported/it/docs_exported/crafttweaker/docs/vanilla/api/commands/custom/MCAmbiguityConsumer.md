# MCAmbiguityConsumer

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.commands.custom.MCAmbiguityConsumer
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(genitore, figlio, fratello, ingressi) =>{}
```
## Methods
### ambiguo

```zenscript
myMCAmbiguityConsumer.ambiguous(parent as crafttweaker.api.commands.custom.MCCommandNode, child as crafttweaker.api.commands.custom.MCCommandNode, sibling as crafttweaker.api.commands.custom.MCCommandNode, inputs as Collection<String>);
```

| Parameter | Type                                                                                         | Description                 |
| --------- | -------------------------------------------------------------------------------------------- | --------------------------- |
| parent    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |
| figlio    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |
| fratello  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Nessuna descrizione fornita |
| inputs    | Raccolta&lt;String&gt;                                                           | Nessuna descrizione fornita |



