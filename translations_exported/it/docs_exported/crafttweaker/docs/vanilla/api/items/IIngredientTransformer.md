# IIngredientTransformer

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.item.IIngredientTransformer
```

## Methods
### getCommandString

Return type: String

```zenscript
myIIngredientTransformer.getCommandString(ingrediente come T);
```

| Parameter  | Type | Description                 |
| ---------- | ---- | --------------------------- |
| ingredient | T    | Nessuna descrizione fornita |


### matches

Return type: boolean

```zenscript
myIIngredientTransformer.matches(stack as crafttweaker.api.item.IItemStack);
```

| Parameter | Type                                                              | Description                 |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| stack     | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |



