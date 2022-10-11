# Ingredient

This is the vanilla ingredient type.
 It is recommended that you use the [IIngredient](/vanilla/api/ingredient/IIngredient) type whenever possible.

 This type can automatically be cast from and to [IIngredient](/vanilla/api/ingredient/IIngredient), though.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.Ingredient;
```


## Implemented Interfaces
Ingredient implements the following interfaces. That means all methods defined in these interfaces are also available in Ingredient

- Predicate&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;

## Casters

|                    Result Type                     | Is Implicit |
|----------------------------------------------------|-------------|
| [IIngredient](/vanilla/api/ingredient/IIngredient) | true        |

## Methods

:::group{name=asIIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// Ingredient.asIIngredient() as IIngredient

myIngredient.asIIngredient();
```

:::


