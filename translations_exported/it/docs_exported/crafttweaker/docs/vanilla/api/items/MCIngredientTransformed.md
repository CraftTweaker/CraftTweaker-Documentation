# MCIngredientTransformed&LT;T : IIngredient&GT;

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCIngredientTransformed;
```


## Interfacce Implementate
MCIngredientTransformed implementa le seguenti interfacce. That means all methods defined in these interfaces are also available in MCIngredientTransformed

- [IIngredient](/vanilla/api/items/IIngredient)
## Caster

| Tipo Risultato                       | Implicito |
| ------------------------------------ | --------- |
| [IData](/vanilla/api/data/IData)     | true      |
| [MapData](/vanilla/api/data/MapData) | true      |

## Methods

### matches

Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```
| Parameter   | Type                                        | Description             |
| ----------- | ------------------------------------------- | ----------------------- |
| stack       | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| ignoreDanno | boolean                                     | No Description Provided |


## Properties

| Name           | Type                                                                                     | Ha Getter | Ha Setter |
| -------------- | ---------------------------------------------------------------------------------------- | --------- | --------- |
| baseIngredient | T                                                                                        | true      | false     |
| items          | [IItemStack](/vanilla/api/items/IItemStack)[]                                            | true      | false     |
| trasformatore  | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true      | false     |

