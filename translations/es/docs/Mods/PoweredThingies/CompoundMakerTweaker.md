# Powered Thingies :: Compound Maker

### Importing

```zenscript
import mods.poweredthingies.Tweaker.compoundTweaker as ct;
```

### Listing Keys, Removing Recipes by Key, Clearing

```zenscript
ct().logKeys()
ct().removeRecipe('minecraft:stone') // check <logKeys> output for valid keys
ct().clear()
```

### Adding Recipe

##### Signature

```zenscript
addRecipe(output: IItemStack, left: ILiquidStack?, top: Array<IItemStack>?, right: ILiquidStack?, bottom: Array<IItemStack>?)
```

##### Example

```zenscript
ct().addRecipe(<minecraft:obsidian>, <liquid:lava> * 250, [<minecraft:cobblestone>, <minecraft:cobblestone>], null, [<minecraft:cobblestone>, <minecraft:cobblestone>]);
```

### Notes

All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).