# MCBiome

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.world.MCBiome
```

## Méthodes
### getSpawns

Retourne la liste<[crafttweaker.api.world.MCBiomeSpawnEntry](/vanilla/api/world/MCBiomeSpawnEntry)>

```zenscript
myMCBiome.getSpawns(classification comme crafttweaker.api.entity.MCEntityClassification);
```

| Paramètre      | Type de texte                                                                                  | Libellé                    |
| -------------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| classification | [crafttweaker.api.entity.MCEntityClassification](/vanilla/api/entities/MCEntityClassification) | Aucune description fournie |


### Obtenir une catégorie temporaire

Retourne une chaîne de caractères

```zenscript
myMCBiome.getTempCategory();
```

### format@@0 getTemperature

Renvoie un flottant

```zenscript
myMCBiome.getTemperature(pos as crafttweaker.api.util.BlockPos);
```

| Paramètre | Type de texte                                                | Libellé                    |
| --------- | ------------------------------------------------------------ | -------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Aucune description fournie |



## Propriétés

| Nom                         | Type de texte        | A un Getter | A un Setter |
| --------------------------- | -------------------- | ----------- | ----------- |
| Catégorie                   | Chaîne de caractères | vrai        | Faux        |
| Température par défaut      | flottant             | vrai        | Faux        |
| profondeur                  | flottant             | vrai        | Faux        |
| pleuve                      | boolean              | vrai        | Faux        |
| Neige                       | boolean              | vrai        | Faux        |
| chute                       | flottant             | vrai        | Faux        |
| isHighHumidité              | boolean              | vrai        | Faux        |
| isMutation                  | boolean              | vrai        | Faux        |
| Froid isTempo               | boolean              | vrai        | Faux        |
| isTempMoyen                 | boolean              | vrai        | Faux        |
| isTempOcean                 | boolean              | vrai        | Faux        |
| isTempWarm                  | boolean              | vrai        | Faux        |
| parent                      | Chaîne de caractères | vrai        | Faux        |
| Type de pluie               | Chaîne de caractères | vrai        | Faux        |
| Echelle                     | flottant             | vrai        | Faux        |
| spawningChange              | flottant             | vrai        | Faux        |
| Clé de traduction           | Chaîne de caractères | vrai        | Faux        |
| aquarelle                   | Indice               | vrai        | Faux        |
| Couleur du brouillard d'eau | Indice               | vrai        | Faux        |

