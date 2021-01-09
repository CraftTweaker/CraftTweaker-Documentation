# Mods

Haltet Informationen über alle registrierten Mods bereit. Kann mit dem globalen Schlüsselwort `loadedMods` erreicht werden

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.Mods;
```


## Methoden

### getMod

Ruft einen bestimmten Mod ab

Return Type: [ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
Mods.getMod(modid as string) as ModInfo
loadedMods.getMod("minecraft");
```
| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| modid     | string | No Description Provided |

### isModLoaded

Checks if a mod is laoded

Return Type: boolean

```zenscript
Mods.isModLoaded(modid as string) as boolean
loadedMods.isModLoaded("minecraft");
```
| Parameter | Type   | Beschreibung    |
| --------- | ------ | --------------- |
| modid     | string | modid zu prüfen |


## Properties

| Name | Type                                                                | Has Getter | Has Setter |
| ---- | ------------------------------------------------------------------- | ---------- | ---------- |
| mods | stdlib.List&lt;[ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      |
| size | int                                                                 | true       | false      |

