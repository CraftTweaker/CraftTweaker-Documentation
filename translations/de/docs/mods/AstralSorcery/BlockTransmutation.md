::requiredMod[Astral Sorcery]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/astral-sorcery}

# Astral Sorcery Block Transmutation (Starlight Transmutation)

Block Transmutation is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

 The following script adds a Block Transmutation (Starlight Transmutation) recipe that, using 200 starlight, transforms Dirt into a Diamond Block.

 `exact` is used to match the BlockState of the input, if set to `false`, it will just check the actual block itself.

 When `exact` is `true`, it will check the BlockState properties, allowing to add recipes such as transforming a vertical Oak Log into a Diamond Block, but a Horizontal Oak Log into an Emerald Block.

 The `constellationKey` is the name of the current **WEAK** Constellation that is required. You can get a list of Constellations by using `/ct dump astralConstellations`. The Contellation needs to be **WEAK** or better.

 In the case of this recipe, it requires the `astralsorcery:horologium` constellation.

```zenscript
// <recipetype:astralsorcery:block_transmutation>.addRecipe(name as string, outState as MCBlockState, input as MCBlockState, exact as bool, starlight as double, @Optional constellationKey as MCResourceLocation)

<recipetype:astralsorcery:block_transmutation>.addRecipe("transmutation_test", <blockstate:minecraft:diamond_block>, <blockstate:minecraft:dirt>, true, 200, <resource:astralsorcery:horologium>);
```

#### Remove Recipes

The following script will remove all Block Transmutation (Starlight Transmutation) recipes that output a Lapis Lazuli Block. `exact` is used when matching BlockStates, when set to false (by default), it will just check the actual block itself, without checking any of the BlockState properties.

```zenscript
// <recipetype:astralsorcery:block_transmutation>.removeRecipe(outputState as MCBlockState, @Optional exact as bool)

<recipetype:astralsorcery:block_transmutation>.removeRecipe(<blockstate:minecraft:lapis_block>);
```