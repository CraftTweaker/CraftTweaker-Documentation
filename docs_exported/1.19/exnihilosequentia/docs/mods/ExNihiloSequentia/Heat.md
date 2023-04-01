# ZenHeatRecipe

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.exnihilosequentia.ZenHeatRecipe;
```


## Static Methods

:::group{name=builder}

Return Type: [ZenHeatRecipe](/mods/ExNihiloSequentia/Heat)

```zenscript
ZenHeatRecipe.builder(recipeId as ResourceLocation) as ZenHeatRecipe
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| recipeId  | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

## Methods

:::group{name=setAmount}

Sets the amount of heat that the given block should generate.

Return Type: [ZenHeatRecipe](/mods/ExNihiloSequentia/Heat)

```zenscript
ZenHeatRecipe.setAmount(amount as int) as ZenHeatRecipe
```

| Parameter | Type |     Description     |
|-----------|------|---------------------|
| amount    | int  | The amount of heat. |


:::

:::group{name=setBlock}

Sets the block that should be modified to generate heat.

Return Type: [ZenHeatRecipe](/mods/ExNihiloSequentia/Heat)

```zenscript
ZenHeatRecipe.setBlock(input as Block) as ZenHeatRecipe
```

| Parameter |               Type                |   Description   |
|-----------|-----------------------------------|-----------------|
| input     | [Block](/vanilla/api/block/Block) | Sets the block. |


:::

:::group{name=setProperties}

(Optional) Sets the state that should be used to generate heat.

Return Type: [ZenHeatRecipe](/mods/ExNihiloSequentia/Heat)

```zenscript
ZenHeatRecipe.setProperties(properties as StatePropertiesPredicate) as ZenHeatRecipe
```

| Parameter  |                                    Type                                     |       Description        |
|------------|-----------------------------------------------------------------------------|--------------------------|
| properties | [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate) | Sets special properties. |


:::


