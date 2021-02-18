# Powered Thingies :: Item Liquefier

### Importing

```zenscript
import mods.poweredthingies.Tweaker.itemLiquefierTweaker as ilt;
```

### Listing Keys, Removing Recipes by Key, Clearing

```zenscript
ilt().logKeys()
ilt().removeRecipe('liquid:fluid_lava') // check <logKeys> output for valid keys
ilt().clear()
```

### Adding Recipe

##### Signature

```zenscript
addRecipe(input: IItemStack, output: ILiquidStack)
```

##### Example

```zenscript
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125);
```

### Notes

All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).