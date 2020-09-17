# format@@0 MCRessourceLocation

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
format@@0 crafttweaker.api.util.MCResourceLocation
```

## Interfaces implémentées
MCResourceLocation implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructeurs
```zenscript
new crafttweaker.api.util.MCResourceLocation(namespace as String, path as String);
```
| Paramètre      | Type de texte        | Libellé                    |
| -------------- | -------------------- | -------------------------- |
| espace de noms | Chaîne de caractères | Aucune description fournie |
| chemin d'accès | Chaîne de caractères | Aucune description fournie |



## Méthodes
### comparer à

Type de retour: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ comme crafttweaker.api.util.MCResourceLocation);
```

| Paramètre    | Type de texte                                                                              | Libellé                    |
| ------------ | ------------------------------------------------------------------------------------------ | -------------------------- |
| Comparé à 1_ | [format@@0 crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | Aucune description fournie |


### est égal à

Type de retour: booléen

```zenscript
myMCResourceLocation.equals(autre que l'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| autres    | Objet         | Aucune description fournie |


### getNamespace

Type de retour: chaîne de caractères

```zenscript
myMCResourceLocation.getNamespace();
```

### getPath

Type de retour: chaîne de caractères

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

Type de retour: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

Type de retour: chaîne de caractères

```zenscript
myMCResourceLocation.toString();
```


## Propriétés

| Nom                | Type de texte        | A un Getter | A un Setter |
| ------------------ | -------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères | vrai        | Faux        |
| espace de noms     | Chaîne de caractères | vrai        | Faux        |
| chemin d'accès     | Chaîne de caractères | vrai        | Faux        |

