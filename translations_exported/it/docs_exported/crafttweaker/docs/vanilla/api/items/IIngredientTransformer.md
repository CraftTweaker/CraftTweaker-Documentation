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
myIIngredientTransformer.getCommandString(ingrediente come T);
```

| Parametro   | Tipo | Descrizione                 |
| ----------- | ---- | --------------------------- |
| ingrediente | T    | Nessuna descrizione fornita |


### corrispondenze

Tipo restituito: booleano

```zenscript
myIIngredientTransformer.matches(stack as crafttweaker.api.item.IItemStack);
```

| Parametro | Tipo                                                              | Descrizione                 |
| --------- | ----------------------------------------------------------------- | --------------------------- |
| pila      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Nessuna descrizione fornita |



