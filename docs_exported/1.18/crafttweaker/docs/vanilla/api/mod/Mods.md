# Mods

Holds information on all the mods that are registered.
 Can be accessed using the `loadedMods` global keyword

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mod.Mods;
```


## Methods

:::group{name=getMod}

Gets a specific mod

Returns: a specific Mod  
Return Type: [Mod](/vanilla/api/mod/Mod)?

```zenscript
// Mods.getMod(modid as string) as Mod?

loadedMods.getMod("minecraft");
```

| Parameter |  Type  |
|-----------|--------|
| modid     | string |


:::

:::group{name=getMods}

Gets a list of all mods in the game

Returns: list of Mod  
Return Type: stdlib.List&lt;[Mod](/vanilla/api/mod/Mod)&gt;

```zenscript
// Mods.getMods() as stdlib.List<Mod>

loadedMods.getMods();
```

:::

:::group{name=getSize}

Gets the amount of mods loaded

Returns: The amount of mods that are loaded  
Return Type: int

```zenscript
// Mods.getSize() as int

loadedMods.getSize();
```

:::

:::group{name=isModLoaded}

Checks if a mod is laoded

Returns: true if the mod is loaded  
Return Type: boolean

```zenscript
// Mods.isModLoaded(modid as string) as boolean

loadedMods.isModLoaded("minecraft");
```

| Parameter |  Type  |  Description   |
|-----------|--------|----------------|
| modid     | string | modid to check |


:::


## Operators

:::group{name=INDEXGET}

```zenscript
[myMods]
```

:::

:::group{name=MEMBERGETTER}

Gets a specific mod

```zenscript
myMods.modid as string
loadedMods."minecraft"
```

:::


## Properties

| Name |                      Type                      | Has Getter | Has Setter |             Description             |
|------|------------------------------------------------|------------|------------|-------------------------------------|
| mods | stdlib.List&lt;[Mod](/vanilla/api/mod/Mod)&gt; | true       | false      | Gets a list of all mods in the game |
| size | int                                            | true       | false      | Gets the amount of mods loaded      |

