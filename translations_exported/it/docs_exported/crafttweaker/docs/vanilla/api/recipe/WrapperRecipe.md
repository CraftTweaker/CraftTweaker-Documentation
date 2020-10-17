# WrapperRecipe

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.recipes.WrapperRecipe
```

## Methods
### canFit

Return type: boolean

```zenscript
myWrapperRecipe.canFit(width as int, height as int);
```

| Parameter | Type | Description                 |
| --------- | ---- | --------------------------- |
| width     | int  | Nessuna descrizione fornita |
| height    | int  | Nessuna descrizione fornita |



## Properties

| Name        | Type                                                                                        | Ha Getter | Ha Setter |
| ----------- | ------------------------------------------------------------------------------------------- | --------- | --------- |
| dynamic     | boolean                                                                                     | true      | false     |
| group       | String                                                                                      | true      | false     |
| icon        | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                           | true      | false     |
| id          | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)            | true      | false     |
| ingredients | List&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt; | true      | false     |
| output      | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)                           | true      | false     |

