# Powered Thingies :: Powder Maker

### Importing

```zenscript
import mods.poweredthingies.Tweaker.powderMakerTweaker as pmt;
```

### Listing Keys, Removing Recipes by Key, Clearing

```zenscript
pmt().logKeys()
pmt().removeRecipe('minecraft:gravel') // check <logKeys> output for valid keys
pmt().clear()
```

### Adding Recipe

##### Signature

```zenscript
addRecipe(input: IItemStack, outputs: Array<WeightedItemStack>)
```

##### Example

```zenscript
pmt().addRecipe(<minecraft:bucket>, [<minecraft:iron_ingot> % 100, <minecraft:iron_ingot> % 12, <minecraft:iron_ingot> % 12]);
```

### Notes

All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).