# Axe de direction

Représente un axe de direction (X, Y, Z)

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Interfaces implémentées
DirectionAxis implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### getCoordinate

Obtient les coordonnées de cet axe en fonction des valeurs fournies, si cet axe est "X", alors il retournera la valeur du paramètre "x"

Renvoie int

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| Paramètre | Type de texte | Libellé                   |
| --------- | ------------- | ------------------------- |
| x         | Indice        | valeur x de la coordonnée |
| y         | Indice        | valeur y de la coordonnée |
| Z         | Indice        | valeur z de la coordonnée |



## Propriétés

| Nom                | Type de texte        | A un Getter | A un Setter |
| ------------------ | -------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères | vrai        | Faux        |
| horizontale        | boolean              | vrai        | Faux        |
| Nom                | Chaîne de caractères | vrai        | Faux        |
| ordinal            | Indice               | vrai        | Faux        |
| verticale          | boolean              | vrai        | Faux        |

