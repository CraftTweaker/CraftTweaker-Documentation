# Usages

## Method List

| Required: | Type:      | Name:                | Implementation:                  | Parameters:                                                               | Additional Information:                                           |
| --------- | ---------- | -------------------- | -------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Required  | Recipe:    | Shaped Recipe:       | .setShaped                       | [IIngredient[][]](/Vanilla/Variable_Types/IIngredient/) ingredients       |                                                                   |
| Required  | Recipe:    | Shapeless Recipe:    | .setShapeless                    | [IIngredient[](/Vanilla/Variable_Types/IIngredient/) ingredients          |                                                                   |
| Optional  | Recipe:    | Mirrored:            | .setMirrored                     | Empty                                                                     |                                                                   |
| Required  | Tool:      | Tool:                | .addTool                         | [IIngredient](/Vanilla/Variable_Types/IIngredient/) tool + Integer damage | Call multiple times to add up to three tools needed for the craft |
| Required  | Output:    | Output:              | .addOutput                       | [IItemstack](/Vanilla/Items/IItemStack/) output, @Optional int weight     | Can be called multiple times to provide several weighted outputs  |
| Optional  | Output:    | Extra Outputs:       | .setExtraOutput{One, Two, Three} | [IItemstack](/Vanilla/Items/IItemStack/), float chance                    |                                                                   |
| Optional  | GameStage: | Require GameStage(s) | .requireGameStages               | String require, String[] stages                                           | require = "ALL" or "ANY"                                          |
| Optional  | GameStage: | Exclude GameStage(s) | .excludeGameStages               | String[] stages                                                           |                                                                   |
| Required  | Creation:  | Create               | .create();                       | Empty                                                                     |                                                                   |

```JAVA
//Example from Old Wiki:
RecipeBuilder.get("carpenter")
    .setShaped([
        [<minecraft:planks>],
        [<minecraft:planks>],
        [<minecraft:planks>]])
    .addTool(<ore:carpenters_hammer>, 3)
    .addOutput(<minecraft:planks> * 10, 10)
    .addOutput(<minecraft:planks:1> * 20, 10)
    .addOutput(<minecraft:planks:2> * 30, 20)
    .addOutput(<minecraft:planks:3> * 50, 30)
    .setExtraOutputOne(<minecraft:dye> * 5, 0.12)
    .setExtraOutputTwo(<minecraft:dye:1> * 5, 0.24)
    .setExtraOutputThree(<minecraft:dye:2> * 5, 0.36)
    .requireGameStages("ANY", ["one"])
    .excludeGameStages(["two"])
    .create();
```

Also see: [To Scale Example](/Mods/Artisan_Worktables/CraftTweaker_Support/To_Scale_Example/)