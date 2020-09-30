# Mods

Haltet Informationen über alle registrierten Mods bereit. Kann mit dem globalen Schlüsselwort `loadedMods` erreicht werden

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.mods.Mods
```

## Methoden
### getMod

Ruft einen bestimmten Mod ab

 Gibt `eine bestimmte MCModInfo`

Rückgabetyp: [craftweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid as String);
loadedMods.getMod("minecraft");
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| modid     | String | No description provided |


### isModLoaded

Prüft, ob ein Mod abgelegt ist

 Gibt `zurück, wenn die Mod geladen wurde`

Return type: boolean

```zenscript
loadedMods.isModLoaded(modid as String);
loadedMods.isModLoaded("minecraft");
```

| Parameter | Type   | Beschreibung    |
| --------- | ------ | --------------- |
| modid     | String | modid zu prüfen |



## Properties

| Name | Type                                                                               | Has Getter | Has Setter |
| ---- | ---------------------------------------------------------------------------------- | ---------- | ---------- |
| mods | Liste&lt;[craftweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      |
| size | int                                                                                | true       | false      |

