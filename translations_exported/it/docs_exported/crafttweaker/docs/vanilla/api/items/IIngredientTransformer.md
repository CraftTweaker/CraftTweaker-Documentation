# IIngredientTransformer

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importare la classe
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.IIngredientTransformer
```

## Metodi
### getCommandString

Tipo di ritorno: Stringa

```zenscript
myIIngredientTransformer.getCommandString(transformedIngredient as T);
```

| Parametro             | Tipo | Descrizione                 |
| --------------------- | ---- | --------------------------- |
| transformedIngredient | T    | Nessuna descrizione fornita |


### trasforma

Tipo di restituzione: [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myIIngredientTransformer.transform(stack as crafttweaker.api.item.IItemStack);
```

| Parametro | Tipo                                                              | Descrizione                 |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |



