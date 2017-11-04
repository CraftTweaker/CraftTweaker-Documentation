# Powered Thingies
Powered Thingies's non-farming machines Crafttweaker support.

### Mod Info    
Curseforge: <https://minecraft.curseforge.com/projects/powered-thingies>

Github: <https://github.com/faceofcat/Tesla-Powered-Thingies>

Website: [https://www.modcrafters.net](https://www.modcrafters.net/?mod=thingies)

### CT integration methods
All machines integrated with CT support these methods:
```kotlin
XYZ.clear() // will clear the entire recipe registry
XYZ.logKeys() // will output all keys in that registry to CT's log
XYZ.removeRecipe(key: String)) // will remove the recipe with that key from registry
XYZ.addRecipe(...) // adds a new recipe
```
To retrieve the `Tweaker` class for each machine you have to use the static `mods.poweredthingies.Tweaker` class.