# format@@0 MCBlockState

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.block.MCBlockState
```

## Interfaces implémentées
MCBlockState implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### Obtenir les valeurs autorisées pour la propriété

Type de retour : Liste&lt;String&gt;

```zenscript
myMCBlockState.getAllowedValuesForProperty(name as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Nom       | Chaîne de caractères | Aucune description fournie |


### getProperties

Type de retour: Chaîne[String]

```zenscript
monMCBlockState.getProperties();
```

### Noms des propriétés

Type de retour : Liste&lt;String&gt;

```zenscript
monMCBlockState.getPropertyNames();
```

### getPropertyValue

Type de retour: chaîne de caractères

```zenscript
myMCBlockState.getPropertyValue(name as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Nom       | Chaîne de caractères | Aucune description fournie |


### a propriété

Type de retour: booléen

```zenscript
monMCBlockState.hasProperty(name as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Nom       | Chaîne de caractères | Aucune description fournie |


### avec propriété

Type de retour : [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlockState.withProperty(name as String, value as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| Nom       | Chaîne de caractères | Aucune description fournie |
| valeur    | Chaîne de caractères | Aucune description fournie |



## Propriétés

| Nom                 | Type de texte                                                 | A un Getter | A un Setter |
| ------------------- | ------------------------------------------------------------- | ----------- | ----------- |
| Bloquer             | [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | vrai        | Faux        |
| canProvidePower     | boolean                                                       | vrai        | Faux        |
| Chaîne de commande  | Chaîne de caractères                                          | vrai        | Faux        |
| hasTileEntity       | boolean                                                       | vrai        | Faux        |
| isSolid             | boolean                                                       | vrai        | Faux        |
| isSticky            | boolean                                                       | vrai        | Faux        |
| Niveau de lumière   | Indice                                                        | vrai        | Faux        |
| ticks aléatoirement | boolean                                                       | vrai        | Faux        |

## Pistolet

| Type de résultat                                              | Est implicite |
| ------------------------------------------------------------- | ------------- |
| Chaîne de caractères                                          | Faux          |
| [crafttweaker.api.block.MCBlock](/vanilla/api/blocks/MCBlock) | vrai          |

