# ZenHammerRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ZenHammerRecipe;
```


## Static Methods

:::group{name=builder}

Return Type: [ZenHammerRecipe](/mods/ExNihiloSequentia/Hammering)

```zenscript
ZenHammerRecipe.builder(recipeId as ResourceLocation) as ZenHammerRecipe
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| recipeId  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

## Methods

:::group{name=addOutput}

Sets the output with 100% drop chance

Return Type: [ZenHammerRecipe](/mods/ExNihiloSequentia/Hammering)

```zenscript
ZenHammerRecipe.addOutput(output as IItemStack) as ZenHammerRecipe
```

| Parameter |                    Type                    | Description  |
|-----------|--------------------------------------------|--------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | dropped item |


:::

:::group{name=addOutput}

Sets the output with custom drop chance

Return Type: [ZenHammerRecipe](/mods/ExNihiloSequentia/Hammering)

```zenscript
ZenHammerRecipe.addOutput(output as IItemStack, chance as float) as ZenHammerRecipe
```

| Parameter |                    Type                    | Description  |
|-----------|--------------------------------------------|--------------|
| output    | [IItemStack](/vanilla/api/item/IItemStack) | dropped item |
| chance    | float                                      | drop chance  |


:::

:::group{name=setInput}

Sets the block that should be hammered

Return Type: [ZenHammerRecipe](/mods/ExNihiloSequentia/Hammering)

```zenscript
ZenHammerRecipe.setInput(input as IIngredient) as ZenHammerRecipe
```

| Parameter |                        Type                        |  Description   |
|-----------|----------------------------------------------------|----------------|
| input     | [IIngredient](/vanilla/api/ingredient/IIngredient) | hammered block |


:::


