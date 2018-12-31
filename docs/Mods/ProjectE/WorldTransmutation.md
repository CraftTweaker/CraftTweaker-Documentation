# World Transmutation

## add

Adds a Philosopher Stone world transmutation, with an optional sneak click transmutation.

### [IItemStack](/Vanilla/Items/IItemStack/)
`mods.projecte.WorldTransmutation.add(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);`

### [IBlockState](/Vanilla/Blocks/IBlockState/)

`mods.projecte.WorldTransmutation.add(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);`


## remove

Removes the Philosopher Stone world transmutations that have the same input, output, and sneakOutput.

### [IItemStack](/Vanilla/Items/IItemStack/)
`mods.projecte.WorldTransmutation.remove(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);`

### [IBlockState](/Vanilla/Blocks/IBlockState/)

`mods.projecte.WorldTransmutation.remove(IItemStack output, IItemStack input, @Optional IItemStack sneakOutput);`


## removeAll
Removes all Philosopher Stone world transmutations, including any added by the user before the call to this method.

`mods.projecte.PhiloStone.removeAllWorldTransmutation();`