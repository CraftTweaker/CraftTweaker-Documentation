# Mods

Przechowuje informacje o wszystkich zarejestrowanych modyfikacjach. Można uzyskać dostęp za pomocą `loadedMods` globalnego słowa kluczowego

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.Mods;
```


## Methods

### getMod

Pobiera określoną modyfikację

Return Type: [ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
Mods.getMod(modid as string) as ModInfo
loadedMods.getMod("minecraft");
```
| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| modid     | string | No Description Provided |

### isModLoaded

Checks if a mod is laoded

Return Type: boolean

```zenscript
Mods.isModLoaded(modid as string) as boolean
loadedMods.isModLoaded("minecraft");
```
| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| modid     | string | modid do sprawdzenia |


## Properties

| Name | Type                                                                | Has Getter | Has Setter |
| ---- | ------------------------------------------------------------------- | ---------- | ---------- |
| mody | stdlib.List&lt;[ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      |
| size | int                                                                 | true       | false      |

