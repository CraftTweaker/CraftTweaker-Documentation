# Powered Thingies :: Item Compound Producer

### Importing
```kotlin
import mods.poweredthingies.Tweaker.itemCompoundProducerTweaker as icp;
```

### Listing Keys, Removing Recipes by Key, Clearing
```kotlin
icp().logKeys()
icp().removeRecipe('minecraft:mossy_cobblestone') // check <logKeys> output for valid keys 
icp().clear()
```

### Adding Recipe
##### Signature
```kotlin
addRecipe(inputStack: IItemStack, inputFluid: ILiquidStack, result: IItemStack)
```
##### Example
```kotlin
icp().addRecipe(<minecraft:cobblestone>, <liquid:water> * 125, <minecraft:mossy_cobblestone>);
```

### Notes
All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).