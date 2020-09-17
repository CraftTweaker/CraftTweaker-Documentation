# Orientation

Représente une direction cardinale (nord, sud, est, ouest) et (haut et bas).

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.util.Direction
```

## Méthodes
### rotateY

Rotation de cette direction sur l'axe Y

 Renvoie : `la direction qui a tourné sur l'axe Y de cette direction`

Type de retour : [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### faire pivoter la YCCW

Rotation de cette direction en sens inverse sur l'axe Y

 Renvoie : `la direction qui est orientée contre le sens des aiguilles d'une montre sur l'axe Y`

Type de retour : [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## Propriétés

| Nom              | Type de texte                                                          | A un Getter | A un Setter |
| ---------------- | ---------------------------------------------------------------------- | ----------- | ----------- |
| axe              | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | vrai        | Faux        |
| axisOffset       | Indice                                                                 | vrai        | Faux        |
| bas              | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vrai        | vrai        |
| est              | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vrai        | vrai        |
| Angle horizontal | flottant                                                               | vrai        | Faux        |
| index horizontal | Indice                                                                 | vrai        | Faux        |
| index            | Indice                                                                 | vrai        | Faux        |
| Nom              | Chaîne de caractères                                                   | vrai        | Faux        |
| Nord             | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vrai        | vrai        |
| opposé           | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vrai        | Faux        |
| Côtés            | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)[]       | vrai        | vrai        |
| Sud              | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vrai        | vrai        |
| plus haut        | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vrai        | vrai        |
| à l'ouest        | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | vrai        | vrai        |
| xOffset          | Indice                                                                 | vrai        | Faux        |
| yOffset          | Indice                                                                 | vrai        | Faux        |
| zOffset          | Indice                                                                 | vrai        | Faux        |

