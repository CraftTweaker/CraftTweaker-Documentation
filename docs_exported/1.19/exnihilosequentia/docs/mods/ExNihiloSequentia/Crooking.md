# ZenCrookRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ZenCrookRecipe;
```


## Static Methods

:::group{name=builder}

Return Type: [ZenCrookRecipe](/mods/ExNihiloSequentia/Crooking)

```zenscript
ZenCrookRecipe.builder(recipeId as ResourceLocation) as ZenCrookRecipe
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| recipeId  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

## Methods

:::group{name=addDrop}

Sets the drop with chance

Return Type: [ZenCrookRecipe](/mods/ExNihiloSequentia/Crooking)

```zenscript
ZenCrookRecipe.addDrop(drop as IItemStack, chance as float) as ZenCrookRecipe
```

| Parameter |                    Type                    |            Description             |
|-----------|--------------------------------------------|------------------------------------|
| drop      | [IItemStack](/vanilla/api/item/IItemStack) | Set the drop. Can only be an item. |
| chance    | float                                      | How often should the item drop.    |


:::

:::group{name=setInput}

Sets the block that should be crooked.

Return Type: [ZenCrookRecipe](/mods/ExNihiloSequentia/Crooking)

```zenscript
ZenCrookRecipe.setInput(input as IIngredient) as ZenCrookRecipe
```

| Parameter |                        Type                        |  Description   |
|-----------|----------------------------------------------------|----------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | Sets the block |


:::


