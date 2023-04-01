# HammerRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.HammerRecipe;
```


## Methods

:::group{name=addOutput}

Sets the output with 100% drop chance

Return Type: [HammerRecipe](/mods/ExNihiloSequentia/Hammering)

```zenscript
HammerRecipe.addOutput(output as IItemStack) as HammerRecipe
```

| Parameter |                    Type                    | Description  |
|-----------|--------------------------------------------|--------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | dropped item |


:::

:::group{name=addOutput}

Sets the output with custom drop chance

Return Type: [HammerRecipe](/mods/ExNihiloSequentia/Hammering)

```zenscript
HammerRecipe.addOutput(output as IItemStack, chance as float) as HammerRecipe
```

| Parameter |                    Type                    | Description  |
|-----------|--------------------------------------------|--------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | dropped item |
| chance    | float                                      | drop chance  |


:::

:::group{name=create}

Create a recipe name for the new recipe

Return Type: [HammerRecipe](/mods/ExNihiloSequentia/Hammering)

```zenscript
HammerRecipe.create(recipeId as string) as HammerRecipe
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| recipeId  | string | name of recipe |


:::

:::group{name=setInput}

Sets the block that should be hammered

Return Type: [HammerRecipe](/mods/ExNihiloSequentia/Hammering)

```zenscript
HammerRecipe.setInput(input as IIngredient) as HammerRecipe
```

| Parameter |                        Type                        |  Description   |
|-----------|----------------------------------------------------|----------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | hammered block |


:::


