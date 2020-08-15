# MCBiome

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importation de la classe
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.world.MCBiome
```

## Méthodes
### getSpawns

Returns List<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification as crafttweaker.api.entity.MCEntityClassification);
```

| Paramètre      | Type de texte                                                                                  | Libellé                 |
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

| Paramètre | Type de texte                                                | Libellé                 |
| --------- | ------------------------------------------------------------ | ----------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | No description provided |



## Propriétés

| Nom                | Type de texte        | Has Getter | Has Setter |
| ------------------ | -------------------- | ---------- | ---------- |
| category           | Chaîne de caractères | vrai       | Faux       |
| defaultTemperature | flottant             | vrai       | Faux       |
| depth              | flottant             | vrai       | Faux       |
| doesRain           | boolean              | vrai       | Faux       |
| doesSnow           | boolean              | vrai       | Faux       |
| downfall           | flottant             | vrai       | Faux       |
| isHighHumidity     | boolean              | vrai       | Faux       |
| isMutation         | boolean              | vrai       | Faux       |
| isTempCold         | boolean              | vrai       | Faux       |
| isTempMedium       | boolean              | vrai       | Faux       |
| isTempOcean        | boolean              | vrai       | Faux       |
| isTempWarm         | boolean              | vrai       | Faux       |
| parent             | Chaîne de caractères | vrai       | Faux       |
| rainType           | Chaîne de caractères | vrai       | Faux       |
| scale              | flottant             | vrai       | Faux       |
| spawningChange     | flottant             | vrai       | Faux       |
| translationKey     | Chaîne de caractères | vrai       | Faux       |
| waterColor         | Indice               | vrai       | Faux       |
| waterFogColor      | Indice               | vrai       | Faux       |

