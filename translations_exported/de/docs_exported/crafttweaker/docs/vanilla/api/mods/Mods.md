# Mods

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.mods.Mods
```

## Methoden
### getMod

Ruft einen bestimmten Mod ab

 Gibt `eine bestimmte MCModInfo`

Rückgabetyp: [craftweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
myMods.getMod(modid as String);
myMods.getMod("minecraft");
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| modo      | String | Keine Beschreibung angegeben |


### isModLoaded

Prüft, ob ein Mod abgelegt ist

 Gibt `zurück, wenn die Mod geladen wurde`

Rückgabetyp: boolesch

```zenscript
myMods.isModLoaded(modid as String);
myMods.isModLoaded("minecraft");
```

| Parameter | Type   | Beschreibung    |
| --------- | ------ | --------------- |
| modo      | String | modid zu prüfen |



## Eigenschaften

| Name   | Type                                                                               | Hat Getter | Hat Setter |
| ------ | ---------------------------------------------------------------------------------- | ---------- | ---------- |
| mods   | Liste&lt;[craftweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true       | false      |
| grösse | int                                                                                | true       | false      |

