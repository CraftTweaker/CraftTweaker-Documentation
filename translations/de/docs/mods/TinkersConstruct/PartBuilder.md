::requiredMod[Tinkers' Construct]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/tinkers-construct}

# Tinkers' Construct Part Builder

The Part Builder is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

The following script adds a Part Builder recipe for a Tool Rod that costs 2 of whatever material is used to make it, and will output 3 Tool Rods of the given material.

The pattern is set as "custom_pattern", which is not a valid pattern in default Tinkers Construct, you will need a mod that can load textures to load a texture with the given name.  
Valid patterns are defined by the texture in the `tconstruct:gui/tinker_pattern/` folder in the resources.

The output Item needs to be an Item that works with Materials, you can find a list of valid items by running `/ct dump ticMaterialItems`.

```zenscript
// <recipetype:tconstruct:part_builder>.addMaterialRecipe(name as string, pattern as String, cost as int, output as Item, outputCount as int)

<recipetype:tconstruct:part_builder>.addMaterialRecipe("part_builder_test", "tconstruct:custom_pattern", 2, <item:tconstruct:pickaxe_head>, 3);
```

#### Remove Recipes

The following script removes the Part Builder recipe for the Tool Binding part.

```zenscript
// <recipetype:tconstruct:part_builder>.removeRecipe(name as string)

<recipetype:tconstruct:part_builder>.removeByName("tconstruct:tools/parts/builder/tool_binding");
```