# Pos de Blocs

Représente une position d'un bloc dans le monde

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.util.BlockPos
```

## Constructeurs
```zenscript
new crafttweaker.api.util.BlockPos(x as int, y as int, z as int);
```
| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| x         | Indice        | Aucune description fournie |
| y         | Indice        | Aucune description fournie |
| Z         | Indice        | Aucune description fournie |



## Méthodes
### Ajouter

Ajoute deux positions ensemble et retourne le résultat.

 Renvoie : `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) avec les valeurs ajoutées.`

Type de retour : [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| Paramètre | Type de texte                                                | Libellé                  |
| --------- | ------------------------------------------------------------ | ------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | autre position à ajouter |



Ajoute les valeurs données à cette position, et retourne une nouvelle position avec les nouvelles valeurs.

 Renvoie : `une nouvelle position basée sur les valeurs des valeurs fournies et cette position`

Type de retour : [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as double, y as double, z as double);
new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| Paramètre | Type de texte | Libellé            |
| --------- | ------------- | ------------------ |
| x         | double        | valeur x à ajouter |
| y         | double        | valeur y à ajouter |
| Z         | double        | valeur z à ajouter |



Ajoute les valeurs données à cette position, et retourne une nouvelle position avec les nouvelles valeurs.

 Renvoie : `une nouvelle position basée sur les valeurs des valeurs fournies et cette position`

Type de retour : [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as int, y as int, z as int);
new BlockPos(0, 1, 2).add(50, -20, -25);
```

| Paramètre | Type de texte | Libellé            |
| --------- | ------------- | ------------------ |
| x         | Indice        | valeur x à ajouter |
| y         | Indice        | valeur y à ajouter |
| Z         | Indice        | valeur z à ajouter |


### Produit croisé

Crée un nouveau BlockPos basé sur le produit croisé de cette position, et la position donnée

 Renvoie : `un nouveau BlockPos basé sur le produit croisé de ce BlockPos et les BlockPos donnés`

Type de retour : [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| Paramètre | Type de texte                                                | Libellé                       |
| --------- | ------------------------------------------------------------ | ----------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Blocs pour croiser le produit |


### distanceSq

Obtient la distance carrée de cette position vers les BlockPos spécifiés, en utilisant le centre des BlockPos

 Renvoie : `la distance carrée de cette position actuelle et les BlockPos donnés.`

Type de retour: double

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| Paramètre | Type de texte                                                | Libellé                 |
| --------- | ------------------------------------------------------------ | ----------------------- |
| à         | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Blocs à vérifier contre |



Obtient la distance carrée de cette position aux BlockPos spécifiés

 Renvoie : `la distance carrée de cette position actuelle et les BlockPos donnés.`

Type de retour: double

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| Paramètre | Type de texte                                                | Libellé                                                                    |
| --------- | ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| à         | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Blocs à vérifier contre                                                    |
| Centrer   | boolean                                                      | doit-on utiliser le centre de la coordonnée ? (ajoute 0,5 à chaque valeur) |



Obtient la distance carrée de cette position aux coordonnées spécifiées

 Renvoie : `la distance carrée de cette position actuelle et les coordonnées fournies.`

Type de retour: double

```zenscript
new BlockPos(0, 1, 2).distanceSq(x as double, y as double, z as double, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| Paramètre | Type de texte | Libellé                                                                    |
| --------- | ------------- | -------------------------------------------------------------------------- |
| x         | double        | position x contre laquelle vérifier                                        |
| y         | double        | position y à vérifier                                                      |
| Z         | double        | Position de z à vérifier                                                   |
| Centrer   | boolean       | doit-on utiliser le centre de la coordonnée ? (ajoute 0,5 à chaque valeur) |


### bas

Crée une nouvelle BlockPos basée sur cette BlockPos qui est un bloc inférieur à cette BlockPos

 Renvoie : `un nouveau BlockPos qui est un bloc inférieur à ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).down();
```

### est

Crée un nouveau BlockPos basé sur ce BlockPos qui est un bloc à l'est de ce BlockPos

 Renvoie : `un nouveau BlockPos qui est un bloc à l'est de ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east();
```


Crée un nouveau BlockPos basé sur ce BlockPos qui est n bloc(s) à l'est de ce BlockPos

 Renvoie : `un nouveau BlockPos qui est n bloc(s) à l'est de ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east(n as int);
new BlockPos(0, 1, 2).east(2);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| n         | Indice        | Aucune description fournie |


### Distance de manHans

Obtient la distance de Manhattan de cette pos par rapport à une position différente

 Renvoie : `La distance de manga des positions`

Type de retour: int

```zenscript
new BlockPos(0, 1, 2).man文anDistance(other as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).man文anDistance(new BlockPos(4, 5, 6));
```

| Paramètre | Type de texte                                                | Libellé                                   |
| --------- | ------------------------------------------------------------ | ----------------------------------------- |
| autres    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | autre position pour obtenir la distance à |


### Nord

Crée un nouveau BlockPos basé sur ce BlockPos qui est un bloc au nord de ce BlockPos

 Renvoie : `un nouveau BlockPos qui est un bloc au nord de ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north();
```


Crée un nouveau BlockPos basé sur ce BlockPos qui est n bloc(s) au nord de ce BlockPos

 Renvoie : `un nouveau BlockPos qui est n bloc(s) au nord de ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north(n as int);
new BlockPos(0, 1, 2).north(10);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| n         | Indice        | Aucune description fournie |


### décalage

Crée un nouveau BlockPos basé sur ce BlockPos qui est un décalage de bloc de ce BlockPos basé sur le [crafttweaker.api.util.Direction donné](/vanilla/api/util/Direction)

 Renvoie : `un nouveau BlockPos qui est 1 offset de bloc de ce BlockPos`

Type de retour : [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction);
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| Paramètre | Type de texte                                                  | Libellé                    |
| --------- | -------------------------------------------------------------- | -------------------------- |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Aucune description fournie |



Crée un nouveau BlockPos basé sur ce BlockPos qui est n bloc(s) offset de ce BlockPos basé sur le [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

 Renvoie : `un nouveau BlockPos qui est n bloc(s) de décalage de ce BlockPos`

Type de retour : [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction, n as int);
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| Paramètre | Type de texte                                                  | Libellé                    |
| --------- | -------------------------------------------------------------- | -------------------------- |
| direction | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | Aucune description fournie |
| n         | Indice                                                         | Aucune description fournie |


### Sud

Crée un nouveau BlockPos basé sur ce BlockPos qui est un bloc au sud de ce BlockPos

 Renvoie : `un nouveau BlockPos qui est un bloc au sud de ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).sud();
```


Crée un nouveau BlockPos basé sur ce BlockPos qui est n bloc(s) au sud de ce BlockPos

 Renvoie : `un nouveau BlockPos qui est n bloc(s) au sud de ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south(n as int);
new BlockPos(0, 1, 2).south(12);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| n         | Indice        | Aucune description fournie |


### soustraire

Soustrait deux positions ensemble et retourne le résultat.

 Renvoie : `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) avec les valeurs supprimées.`

Type de retour : [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).subtract(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| Paramètre | Type de texte                                                | Libellé                    |
| --------- | ------------------------------------------------------------ | -------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | autre position à supprimer |


### plus haut

Crée une nouvelle BlockPos basée sur cette BlockPos qui est un bloc supérieur à cette BlockPos

 Renvoie : `un nouveau BlockPos qui est un bloc supérieur à ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up();
```


Crée un nouveau BlockPos basé sur ce BlockPos qui est n bloc(s) supérieur à ce BlockPos

 Renvoie : `un nouveau BlockPos qui est n bloc(s) supérieur à ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up(n as int);
new BlockPos(0, 1, 2).up(45);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| n         | Indice        | Aucune description fournie |


### à l'ouest

Crée un nouveau BlockPos basé sur ce BlockPos qui est un bloc à l'ouest de ce BlockPos

 Renvoie : `un nouveau BlockPos qui est un bloc à l'ouest de ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west();
```


Crée un nouveau BlockPos basé sur ce BlockPos qui est n bloc(s) à l'ouest de ce BlockPos

 Renvoie : `un nouveau BlockPos qui est n bloc(s) à l'ouest de ce BlockPos`

Type de retour : net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west(n as int);
new BlockPos(0, 1, 2).west(120);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| n         | Indice        | Aucune description fournie |


### à distance

Vérifie si les BlockPos donnés sont dans la distance spécifiée de ce BlockPos (utilise le milieu des BlockPos)

 Renvoie : `vrai si les BlockPos donnés sont dans la distance donnée de ce BlockPos`

Type de retour: booléen

```zenscript
new BlockPos(0, 1, 2).withinDistance(pos as crafttweaker.api.util.BlockPos, distance as double);
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| Paramètre | Type de texte                                                | Libellé                                    |
| --------- | ------------------------------------------------------------ | ------------------------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | Bloc Pos pour vérifier s'il est à distance |
| Distance  | double                                                       | distance à vérifier dans                   |



## Propriétés

| Nom | Type de texte | A un Getter | A un Setter |
| --- | ------------- | ----------- | ----------- |
| x   | Indice        | vrai        | Faux        |
| y   | Indice        | vrai        | Faux        |
| Z   | Indice        | vrai        | Faux        |

## Opérateurs
### AJOUTER

Ajoute deux positions ensemble et retourne le résultat.

 Renvoie : `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) avec les valeurs ajoutées.`

```zenscript
new BlockPos(0, 1, 2) + pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) + new BlockPos(3, 2, 1)
```

| Paramètre | Type de texte                                                | Libellé                  |
| --------- | ------------------------------------------------------------ | ------------------------ |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | autre position à ajouter |
### SUB

Soustrait deux positions ensemble et retourne le résultat.

 Renvoie : `new [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) avec les valeurs supprimées.`

```zenscript
new BlockPos(0, 1, 2) - pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) - new BlockPos(2, 1, 3)
```

| Paramètre | Type de texte                                                | Libellé                    |
| --------- | ------------------------------------------------------------ | -------------------------- |
| pos       | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | autre position à supprimer |

## Pistolet

| Type de résultat | Est implicite |
| ---------------- | ------------- |
| long             | Faux          |

