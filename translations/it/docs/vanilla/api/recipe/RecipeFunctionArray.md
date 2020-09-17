# RecipeFunctionArray

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.recipe.RecipeFunctionArray
```

## Interfaccia Funzionale

Questa classe è un'interfaccia funzionale. Ciò significa che è possibile utilizzare la notazione lambda per creare un'istanza di esso. La notazione lambda assomiglia:
```zenscript
(usualOut, input) => <item:minecraft:dirt>
```
## Metodi
### processo

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myRecipeFunctionArray.process(usualOut come crafttweaker.api.item.IItemStack, input come crafttweaker.api.item.IItemStack[]);
```

| Parametro | Tipo                                                                | Descrizione                 |
| --------- | ------------------------------------------------------------------- | --------------------------- |
| usualOut  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)   | Nessuna descrizione fornita |
| inputs    | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | Nessuna descrizione fornita |



