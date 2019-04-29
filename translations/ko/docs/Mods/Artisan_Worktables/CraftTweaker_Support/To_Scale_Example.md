# To Scale Example

Here's a Quick To Scale Example:

## Example

```JAVA
import crafttweaker.item.IItemStack;

var planks = <ore:plankWood>;

var stairs = [<minecraft:oak_stairs>,
          <minecraft:birch_stairs>,
          <minecraft:spruce_stairs>,
          <minecraft:jungle_stairs>,
          <minecraft:acacia_stairs>,
          <minecraft:dark_oak_stairs>] as IItemstack[];

RecipeBuilder.get("carpenter")
  .setShaped([
        [planks, null, null],
        [planks, planks, null],
        [planks, planks, planks]
        ])
  .addTool(<ore:carpenters_hammer>, 3)

// Adds a Output for 10 Oak Stairs at a Weight of 10 in 210
  .addOutput(stairs[0] * 10, 10)

// Adds a Output for 10 Birch Stairs at a Weight of 20 in 210
  .addOutput(stairs[1] * 10, 20)

// Adds a Output for 10 Spruce Stairs at a Weight of 30 in 210
  .addOutput(stairs[2] * 10, 30)

// Adds a Output for 10 Jungle Stairs at a Weight of 40 in 210
  .addOutput(stairs[3] * 10, 40)

// Adds a Output for 10 Acacia Stairs at a Weight of 50 in 210
  .addOutput(stairs[4] * 10, 50)

// Adds a Output for 10 Dark Oak Stairs at a Weight of 60 in 210
  .addOutput(stairs[5] * 10, 60)

  .setExtraOutputOne(<minecraft:dye> * 5, 0.12)
  .setExtraOutputTwo(<minecraft:dye:1> * 5, 0.24)
  .setExtraOutputThree(<minecraft:dye:2> * 5, 0.36)
  .requireGameStages("ANY", ["one"])
  .excludeGameStages(["two"])
  .create();
```