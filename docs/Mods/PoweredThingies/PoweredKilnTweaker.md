# Powered Thingies :: Powered Kiln

### Importing
```kotlin
import mods.poweredthingies.Tweaker.poweredKilnTweaker as pkt;
```

### Listing Keys, Removing Recipes by Key, Clearing
```kotlin
pkt().logKeys()
pkt().removeRecipe('minecraft:planks') // check <logKeys> output for valid keys
pkt().clear()
```

### Adding Recipe
##### Signature
```kotlin
addRecipe(input: IItemStack, output: IItemStack)
```
##### Example
```kotlin
pkt().addRecipe(<minecraft:bucket>, <minecraft:iron_ingot>);
```

### Notes
All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).