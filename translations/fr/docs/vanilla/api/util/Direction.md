# Orientation

Représente une direction cardinale (nord, sud, est, ouest) et (haut et bas).

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.util.Direction
```

## Méthodes
### Tourner autour

Rotation de cette direction autour d'un axe donné

Retourne [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(axe comme crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| Paramètre | Type de texte                                                          | Libellé           |
| --------- | ---------------------------------------------------------------------- | ----------------- |
| axe       | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | l'axe de rotation |


### rotateY

Rotation de cette direction sur l'axe Y

 Renvoie : `la direction qui a tourné sur l'axe Y de cette direction`

Retourne [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### faire pivoter la YCCW

Rotation de cette direction en sens inverse sur l'axe Y

 Renvoie : `la direction qui est orientée contre le sens des aiguilles d'une montre sur l'axe Y`

Retourne [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Propriétés

| Nom              | Type de texte                                                          | A un Getter | A un Setter |
| ---------------- | ---------------------------------------------------------------------- | ----------- | ----------- |
| axe              | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | vrai        | Faux        |
| axisOffset       | Indice                                                                 | vrai        | Faux        |
| Angle horizontal | flottant                                                               | vrai        | Faux        |
| index horizontal | Indice                                                                 | vrai        | Faux        |
| index            | Indice                                                                 | vrai        | Faux        |
| Nom              | Chaîne de caractères                                                   | vrai        | Faux        |
| opposé           | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vrai        | Faux        |
| xOffset          | Indice                                                                 | vrai        | Faux        |
| yOffset          | Indice                                                                 | vrai        | Faux        |
| zOffset          | Indice                                                                 | vrai        | Faux        |

