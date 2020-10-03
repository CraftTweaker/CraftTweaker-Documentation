# Mods

Contiene información sobre todos los mods que están registrados. Se puede acceder usando la palabra clave global `cargada`

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.mods.Mods
```

## Methods
### getMod

Obtiene un mod específico

 Devuelve: `un MCModInfo específico`

Tipo de retorno: [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid as String);
loadedMods.getMod("minecraft");
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| modid     | String | No description provided |


### isModLoaded

Comprueba si un mod está detenido

 Devuelve: `verdadero si el mod está cargado`

Return type: boolean

```zenscript
LoadedMods.isModLoaded(modid as String);
LoadedMods.isModLoaded("minecraft");
```

| Parameter | Type   | Description              |
| --------- | ------ | ------------------------ |
| modid     | String | modificar para comprobar |



## Properties

| Name | Type                                                                                | Has Getter | Has Setter |
| ---- | ----------------------------------------------------------------------------------- | ---------- | ---------- |
| mods | Lista&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      |
| size | int                                                                                 | true       | false      |

