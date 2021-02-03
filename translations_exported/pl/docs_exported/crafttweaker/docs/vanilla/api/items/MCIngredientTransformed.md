# MCIngredientTransformed&LT;T : IIngredient&GT;

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCIngredientTransformed;
```


## Implemented Interfaces
MCIngredientTransformed implements the following interfaces. That means all methods defined in these interfaces are also available in MCIngredientTransformed

- [IIngredient](/vanilla/api/items/IIngredient)
## Casters

| Result type                          | Is Implicit |
| ------------------------------------ | ----------- |
| [IData](/vanilla/api/data/IData)     | true        |
| [MapData](/vanilla/api/data/MapData) | true        |

## Methods

### matches

Return Type: boolean

```zenscript
MCIngredientTransformed.matches(stack as IItemStack, ignoreDamage as boolean) as boolean
```

| Parameter             | Type                                        | Description             |
| --------------------- | ------------------------------------------- | ----------------------- |
| stack                 | [IItemStack](/vanilla/api/items/IItemStack) | No Description Provided |
| zignorowano obrażenia | boolean                                     | No Description Provided |



## Properties

| Name            | Type                                                                                     | Has Getter | Has Setter |
| --------------- | ---------------------------------------------------------------------------------------- | ---------- | ---------- |
| bazowy Składnik | T                                                                                        | true       | false      |
| items           | [IItemStack](/vanilla/api/items/IItemStack)[]                                            | true       | false      |
| transformator   | [IIngredientTransformer](/vanilla/api/items/IIngredientTransformer)&lt;T&gt; | true       | false      |

