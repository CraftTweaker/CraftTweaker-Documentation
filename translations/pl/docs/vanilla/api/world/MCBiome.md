# MCBiome

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importowanie klasy
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.world.MCBiome
```

## Metody
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| Parametr       | Typ                                                                                            | Opis                    |
| -------------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| classification | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | No description provided |


### getTempCategory

Returns String

```zenscript
myMCBiome.getTempCategory();
```

### getTemperature

Returns float

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Parametr | Typ                                                          | Opis                    |
| -------- | ------------------------------------------------------------ | ----------------------- |
| pos      | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## Właściwości

| Nazwisko           | Typ                | Has Getter | Has Setter |
| ------------------ | ------------------ | ---------- | ---------- |
| category           | Ciąg znaków        | prawda     | fałszywy   |
| defaultTemperature | zmiennoprzecinkowe | prawda     | fałszywy   |
| depth              | zmiennoprzecinkowe | prawda     | fałszywy   |
| doesRain           | boolean            | prawda     | fałszywy   |
| doesSnow           | boolean            | prawda     | fałszywy   |
| downfall           | zmiennoprzecinkowe | prawda     | fałszywy   |
| isHighHumidity     | boolean            | prawda     | fałszywy   |
| isMutation         | boolean            | prawda     | fałszywy   |
| isTempCold         | boolean            | prawda     | fałszywy   |
| isTempMedium       | boolean            | prawda     | fałszywy   |
| isTempOcean        | boolean            | prawda     | fałszywy   |
| isTempWarm         | boolean            | prawda     | fałszywy   |
| rodzic             | Ciąg znaków        | prawda     | fałszywy   |
| rainType           | Ciąg znaków        | prawda     | fałszywy   |
| scale              | zmiennoprzecinkowe | prawda     | fałszywy   |
| spawningChange     | zmiennoprzecinkowe | prawda     | fałszywy   |
| translationKey     | Ciąg znaków        | prawda     | fałszywy   |
| waterColor         | odcień             | prawda     | fałszywy   |
| waterFogColor      | odcień             | prawda     | fałszywy   |

