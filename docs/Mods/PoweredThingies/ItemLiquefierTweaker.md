# Powered Thingies :: Item Liquefier

### Importing
```kotlin
import mods.poweredthingies.Tweaker.itemLiquefierTweaker as ilt;
```

### Listing Keys, Removing Recipes by Key, Clearing
```kotlin
ilt().logKeys()
ilt().removeRecipe('liquid:fluid_lava') // check <logKeys> output for valid keys
ilt().clear()
```

### Adding Recipe
##### Signature
```kotlin
addRecipe(input: IItemStack, output: ILiquidStack)
```
##### Example
```kotlin
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125);
```

### Notes
All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).