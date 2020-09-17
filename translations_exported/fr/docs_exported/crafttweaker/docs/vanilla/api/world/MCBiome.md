# MCBiome

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.world.MCBiome
```

## Méthodes
### format@@0 getTemperature

Type de retour: float

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
| profondeur                  | flottant             | vrai        | Faux        |
| pleuve                      | boolean              | vrai        | Faux        |
| Neige                       | boolean              | vrai        | Faux        |
| chute                       | flottant             | vrai        | Faux        |
| isHighHumidité              | boolean              | vrai        | Faux        |
| Type de pluie               | Chaîne de caractères | vrai        | Faux        |
| Echelle                     | flottant             | vrai        | Faux        |
| aquarelle                   | Indice               | vrai        | Faux        |
| Couleur du brouillard d'eau | Indice               | vrai        | Faux        |

