# CrookRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.CrookRecipe;
```


## Methods

:::group{name=addDrop}

Sets the drop with chance

Return Type: [CrookRecipe](/mods/ExNihiloSequentia/Crooking)

```zenscript
CrookRecipe.addDrop(drop as IItemStack, chance as float) as CrookRecipe
```

| Parameter |                    Type                    |            Description             |
|-----------|--------------------------------------------|------------------------------------|
| drop      | [IItemStack](/vanilla/api/item/IItemStack) | Set the drop. Can only be an item. |
| chance    | float                                      | How often should the item drop.    |


:::

:::group{name=create}

Create a recipe name for the new recipe

Return Type: [CrookRecipe](/mods/ExNihiloSequentia/Crooking)

```zenscript
CrookRecipe.create(recipeId as string) as CrookRecipe
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| recipeId  | string | name of recipe |


:::

:::group{name=setInput}

Sets the block that should be crooked.

Return Type: [CrookRecipe](/mods/ExNihiloSequentia/Crooking)

```zenscript
CrookRecipe.setInput(input as IIngredient) as CrookRecipe
```

| Parameter |                        Type                        |  Description   |
|-----------|----------------------------------------------------|----------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | Sets the block |


:::


