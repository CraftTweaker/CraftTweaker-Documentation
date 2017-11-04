# Powered Thingies :: Compound Maker

### Importing
```kotlin
import mods.poweredthingies.Tweaker.compoundTweaker as ct;
```

### Listing Keys, Removing Recipes by Key, Clearing
```kotlin
ct().logKeys()
ct().removeRecipe('minecraft:stone') // check <logKeys> output for valid keys
ct().clear()
```

### Adding Recipe
##### Signature
```kotlin
```
##### Example
```kotlin
```

### Notes
All of these actions will get cached and ran after the default registry for this machine has finished registering all recipes (including the ones from the custom jsons).