# Mods

Contient des informations sur tous les mods qui sont enregistrés. Accessible en utilisant le mot-clé global `loadedMods`

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.mods.Mods;
```


## Methods

### getMod

Gets a specific mod

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

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| modid     | string | modifier pour vérifier |



## Properties

| Name | Type                                                                | Has Getter | Has Setter |
| ---- | ------------------------------------------------------------------- | ---------- | ---------- |
| mods | stdlib.List&lt;[ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      |
| size | int                                                                 | true       | false      |

