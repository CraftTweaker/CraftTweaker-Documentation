# ITooltipFunction

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.tooltip.ITooltipFunction
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(stack, tooltip, isAdvanced) => {}
```
## Methods
### applica

```zenscript
myITooltipFunction.apply(stack as crafttweaker.api.item.IItemStack, tooltip as List<crafttweaker.api.util.text.MCTextComponent>, isAdvanced as boolean);
```

| Parameter  | Type                                                                                                           | Description                 |
| ---------- | -------------------------------------------------------------------------------------------------------------- | --------------------------- |
| stack      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                                              | Nessuna descrizione fornita |
| tooltip    | Elenco&lt;[crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent)&gt; | Nessuna descrizione fornita |
| isAdvanced | boolean                                                                                                        | Nessuna descrizione fornita |



