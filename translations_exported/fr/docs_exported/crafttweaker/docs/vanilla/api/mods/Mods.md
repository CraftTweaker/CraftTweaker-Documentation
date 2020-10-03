# Mods

Contient des informations sur tous les mods qui sont enregistrés. Accessible en utilisant le mot-clé global `loadedMods`

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.mods.Mods
```

## Methods
### getMod

Obtient un mod spécifique

 Renvoie : `un MCModInfo spécifique`

Type de retour : [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid comme String);
loadedMods.getMod("minecraft");
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| modid     | String | No description provided |


### isModLoaded

Vérifie si un mod est laodé

 Renvoie : `vrai si le mod est chargé`

Return type: boolean

```zenscript
loadedMods.isModLoaded(modid as String);
loadedMods.isModLoaded("minecraft");
```

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| modid     | String | modifier pour vérifier |



## Properties

| Name | Type                                                                                | Has Getter | Has Setter |
| ---- | ----------------------------------------------------------------------------------- | ---------- | ---------- |
| mods | Liste&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      |
| size | int                                                                                 | true       | false      |

