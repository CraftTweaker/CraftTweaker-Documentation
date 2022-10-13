# Mods

Przechowuje informacje o wszystkich zarejestrowanych modyfikacjach. Można uzyskać dostęp za pomocą `loadedMods` globalnego słowa kluczowego

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.Mods;
```


## Methods

:::group{name=getMod}

Gets a specific mod

Returns: a specific MCModInfo  
Return Type: [ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
// Mods.getMod(modid as string) as ModInfo

loadedMods.getMod("minecraft");
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| modid     | string | No Description Provided |


:::

:::group{name=isModLoaded}

Checks if a mod is laoded

Returns: true if the mod is loaded  
Return Type: boolean

```zenscript
// Mods.isModLoaded(modid as string) as boolean

loadedMods.isModLoaded("minecraft");
```

| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| modid     | string | modid do sprawdzenia |


:::


## Properties

| Name | Type                                                                | Has Getter | Has Setter | Description                         |
| ---- | ------------------------------------------------------------------- | ---------- | ---------- | ----------------------------------- |
| mody | stdlib.List&lt;[ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      | Gets a list of all mods in the game |
| size | int                                                                 | true       | false      | Gets the amount of mods loaded      |

