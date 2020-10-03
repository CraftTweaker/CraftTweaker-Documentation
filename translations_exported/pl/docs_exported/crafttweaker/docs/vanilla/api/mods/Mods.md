# Mods

Przechowuje informacje o wszystkich zarejestrowanych modyfikacjach. Można uzyskać dostęp za pomocą `loadedMods` globalnego słowa kluczowego

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.mods.Mods
```

## Methods
### getMod

Pobiera określoną modyfikację

 Zwraca: `określony MCModInfo`

Typ zwrotu: [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid jako String);
loadedMods.getMod("minecraft");
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| modid     | String | No description provided |


### isModLoaded

Sprawdza, czy mod jest laodowany

 Zwraca: `true jeśli mod jest załadowany`

Return type: boolean

```zenscript
loadedMods.isModLoaded(modid jako String);
loadedMods.isModLoaded("minecraft");
```

| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| modid     | String | modid do sprawdzenia |



## Properties

| Name | Type                                                                                | Has Getter | Has Setter |
| ---- | ----------------------------------------------------------------------------------- | ---------- | ---------- |
| mody | Lista&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      |
| size | int                                                                                 | true       | false      |

