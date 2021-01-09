# Ingredient

This is the vanilla ingredient type. It is recommended that you use the [IIngredient](/vanilla/api/items/IIngredient) type whenever possible.

 This type can automatically be cast from and to [IIngredient](/vanilla/api/items/IIngredient), though.

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.Ingredient;
```


## Implemented Interfaces
Ingredient implements the following interfaces. That means all methods defined in these interfaces are also available in Ingredient

- Predicate&lt;[ItemStack](/vanilla/api/item/ItemStack)&gt;
## Casters

| Result type                                   | Is Implicit |
| --------------------------------------------- | ----------- |
| [IIngredient](/vanilla/api/items/IIngredient) | true        |

## Methoden

### asIIngredient

Return Type: [IIngredient](/vanilla/api/items/IIngredient)

```zenscript
Ingredient.asIIngredient() as IIngredient
myIngredient.asIIngredient();
```

