# IntArrayData



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.data.IntArrayData
```

## Interfaces implémentées
IntArrayData implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructeurs
```zenscript
new crafttweaker.api.data.IntArrayData(internal as int[]);
```
| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| interne   | int[]         | Aucune description fournie |



## Méthodes
### Ajouter

```zenscript
[4, 128, 256, 1024].add(value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].add("today");
```

| Paramètre | Type de texte                                          | Libellé                        |
| --------- | ------------------------------------------------------ | ------------------------------ |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La valeur à ajouter à la liste |



```zenscript
[4, 128, 256, 1024].add(index as int, value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].add(1, "beau");
```

| Paramètre | Type de texte                                          | Libellé                                                                     |
| --------- | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| index     | Indice                                                 | L'index à ajouter. Les objets suivants seront déplacés d'un index plus haut |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La valeur à ajouter à la liste                                              |


### asListe

Renvoie une liste<IData> la représentation de cet IData, retourne NULL sur tout sauf [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Renvoie : `nul si cet IData n'est pas une liste.`

Retourne la liste<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
[4, 128, 256, 1024].asList();
```

### asMap

Obtient une représentation de la carte<String, IData> de cet IData, retourne null sur tout sauf [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Renvoie : `nul si cet IData n'est pas une carte.`

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[4, 128, 256, 1024].asMap();
```

### asString

Obtient la représentation de la chaîne de caractères de cette IData

 Renvoie : `chaîne de caractères qui représente cet IData (valeur et type).`

Retourne une chaîne de caractères

```zenscript
[4, 128, 256, 1024].asString();
```

### effacer

Supprime tous les éléments de la liste

```zenscript
[4, 128, 256, 1024].clear();
```

### contient

Vérifie si cette IData contient un autre IData, principalement utilisé dans les sous-classes de [fabricant. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), est le même qu'une vérification égale sur d'autres types IData

Retourne un booléen

```zenscript
[4, 128, 256, 1024].contains(données comme crafttweaker.api.data.IData);
[4, 128, 256, 1024].contains("Affichage");
```

| Paramètre | Type de texte                                          | Libellé                                       |
| --------- | ------------------------------------------------------ | --------------------------------------------- |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | données pour vérifier si elles sont contenues |


### Copie

Fait une copie de cet IData.

 IData est immuable par défaut, utilisez ceci pour créer une copie correcte de l'objet.

 Renvoie : `une copie de cet IData.`

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].copy();
```

### obtenir

Récupère le [crafttweaker.api.data.IData](/vanilla/api/data/IData) stocké à l'index donné.

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].get(index as int);
[4, 128, 256, 1024].get(0);
```

| Paramètre | Type de texte | Libellé              |
| --------- | ------------- | -------------------- |
| index     | Indice        | L'index (basé sur 0) |


### getId

Récupère l'ID de la balise NBT interne.

 Utilisé pour déterminer quel type de NBT est stocké (dans une liste par exemple)

 Renvoie : `ID de la balise NBT que ces données représente.`

Renvoie l'octet

```zenscript
[4, 128, 256, 1024].getId();
```

### getString

Récupère la représentation de la chaîne de caractères de la balise INBT interne

 Renvoie : `Chaîne qui représente l'INBT interne de cet IData.`

Retourne une chaîne de caractères

```zenscript
[4, 128, 256, 1024].getString();
```

### Enlever

Supprime le fichier [crafttweaker.api.data.IData](/vanilla/api/data/IData) stocké à l'index donné.

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].remove(index as int);
[4, 128, 256, 1024].remove(0);
```

| Paramètre | Type de texte | Libellé              |
| --------- | ------------- | -------------------- |
| index     | Indice        | L'index (basé sur 0) |


### définir

Définit l'élément à l'index fourni à la valeur donnée

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 128, 256, 1024].set(index as int, value as crafttweaker.api.data.IData);
[4, 128, 256, 1024].set(0, "Au revoir");
```

| Paramètre | Type de texte                                          | Libellé                        |
| --------- | ------------------------------------------------------ | ------------------------------ |
| index     | Indice                                                 | L'index à définir (basé sur 0) |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La nouvelle valeur             |



## Propriétés

| Nom    | Type de texte | A un Getter | A un Setter |
| ------ | ------------- | ----------- | ----------- |
| taille | Indice        | vrai        | Faux        |

