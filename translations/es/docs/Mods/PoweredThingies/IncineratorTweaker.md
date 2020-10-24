# Powered Thingies :: Incinerator

### Importing

```zenscript
import mods.poweredthingies.Tweaker.incineratorTweaker as it;
```

### Listing Keys, Removing Recipes by Key, Clearing

```zenscript
it().logKeys()
it().removeRecipe('minecraft:log') // check <logKeys> output for valid keys
it().clear()
```

### Adding Recipe

##### Signature

```zenscript
addRecipe(input: IItemStack, power: Long, outputs: Array<WeightedItemStack>)
```

`power` represents the total number of power units (RF, T, or FE) the input item will generate.

##### Example

```zenscript
it().addRecipe(<minecraft:bucket>, 3600, [<minecraft:iron_ingot> % 15]);
```

### Notes

All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).