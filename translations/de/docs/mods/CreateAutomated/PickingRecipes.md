::requiredMod[Create Automated]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/create-automated}

# Picking

Most of the parameters are pretty self-explanatory. This method is also quite similar to [the crushing recipe](/mods/Create/Crushing).

`addDeployingRecipe` should pretty much *always* be true, so it's optional. If this is disabled, your recipe won't work on belts and depots.

```zenscript
// <recipetype:createautomated:picking>.addRecipe(String name, IIngredient input, MCWeightedItemStack[] outputs, @Optional(true) boolean addDeployingRecipe)

// Creates a picking recipe for picking a diamond with a 100% chance from dirt
<recipetype:createautomated:picking>.addRecipe("not_op_at_all", <item:minecraft:dirt>, [<item:minecraft:diamond> % 100]);
```