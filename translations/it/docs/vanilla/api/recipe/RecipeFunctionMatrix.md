# RecipeFunctionMatrix

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.recipe.RecipeFunctionMatrix
```

## Functional Interface

This class is a functional interface. This means that you can use the lambda notation to create an instance of it. The lambda notation looks like:
```zenscript
(usualOut, inputs) => <item:minecraft:dirt>
```
## Methods
### process

Return type: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionMatrix.process(usualOut as crafttweaker.api.item.IItemStack, inputs as crafttweaker.api.item.IItemStack[][]);
```

| Parameter | Type                                                                  | Description                 |
| --------- | --------------------------------------------------------------------- | --------------------------- |
| usualOut  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)     | Nessuna descrizione fornita |
| inputs    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[][] | Nessuna descrizione fornita |



