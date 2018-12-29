# Philosopher Stone

## Smelting Recipes
### addPhiloSmelting
`mods.projecte.PhiloStone.addPhiloSmelting(String name, IItemStack output, IIngredient input, @Optional IIngredient fuel);`

`name` is the name of the recipe  
`output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`input` is an [IIngredient](/Vanilla/Variable_Types/IIngredient/).  
`fuel` is optional and is an [IIngredient](/Vanilla/Variable_Types/IIngredient/). Defaults to coal

The recipe is a Philosopher's Stone, seven inputs, the fuel and outputs the given output.

### removePhiloSmelting
`mods.projecte.PhiloStone.removePhiloSmelting(IItemStack output);`

`output` is an [IItemStack](/Vanilla/Items/IItemStack/)

Removes the Philosopher Stone smelting recipes that have the given output.

### removeAllPhiloSmelting
`mods.projecte.PhiloStone.removeAllPhiloSmelting();`

Removes all Philosopher Stone smelting recipes.

## World Transmutation

### addWorldTransmutation
`mods.projecte.PhiloStone.addWorldTransmutation(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);`

`output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`input` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`sneakOutput` is optional and is an [IItemStack](/Vanilla/Items/IItemStack/)

Adds a Philosopher Stone world transmutation, with an optional sneak click transmutation.

### removeWorldTransmutation
`mods.projecte.PhiloStone.removeWorldTransmutation(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);`

`output` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`input` is an [IItemStack](/Vanilla/Items/IItemStack/)  
`sneakOutput` is optional and is an [IItemStack](/Vanilla/Items/IItemStack/)

Removes the Philosopher Stone world transmutations that have the same input, output, and sneakOutput.

### removeAllWorldTransmutation
`mods.projecte.PhiloStone.removeAllWorldTransmutation();`

Removes all Philosopher Stone world transmutations.