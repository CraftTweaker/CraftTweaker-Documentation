# LongArrayData



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.data.LongArrayData
```

## Interfaces implémentées
LongArrayData implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructeurs
```zenscript
new crafttweaker.api.data.LongArrayData(internal as long[]);
```
| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| interne   | long[]        | Aucune description fournie |



## Méthodes
### Ajouter

```zenscript
[100000, 800000, 50000].add(valeur comme crafttweaker.api.data.IData);
[100000, 800000, 50000].add("aujourd'hui");
```

| Paramètre | Type de texte                                          | Libellé                        |
| --------- | ------------------------------------------------------ | ------------------------------ |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La valeur à ajouter à la liste |



```zenscript
[100000, 800000, 50000].add(indice comme int, valeur comme crafttweaker.api.data.IData);
[100000, 800000, 50000].add(1, "beau");
```

| Paramètre | Type de texte                                          | Libellé                                                                     |
| --------- | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| index     | Indice                                                 | L'index à ajouter. Les objets suivants seront déplacés d'un index plus haut |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La valeur à ajouter à la liste                                              |


### asListe

Renvoie une liste<IData> la représentation de cet IData, retourne NULL sur tout sauf [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Renvoie : `nul si cet IData n'est pas une liste.`

Type de retour : Liste&lt;[crafttweaker.api.data.IData](/vanilla/api/data/IData)&gt;

```zenscript
[100000, 800000, 50000].asList();
```

### asMap

Obtient une représentation de la carte<String, IData> de cet IData, retourne null sur tout sauf [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Renvoie : `nul si cet IData n'est pas une carte.`

Type de retour : [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[100000, 800000, 50000].asMap();
```

### asString

Obtient la représentation de la chaîne de caractères de cette IData

 Renvoie : `chaîne de caractères qui représente cet IData (valeur et type).`

Type de retour: chaîne de caractères

```zenscript
[100000, 800000, 50000].asString();
```

### effacer

Supprime tous les éléments de la liste

```zenscript
[100000, 800000, 50000].clear();
```

### contient

Vérifie si cette IData contient un autre IData, principalement utilisé dans les sous-classes de [fabricant. pi.data.ICollectionData](/vanilla/api/data/ICollectionData), est le même qu'une vérification égale sur d'autres types IData

 Renvoie : `true si l'IData donné est contenu dans cet IData`

Type de retour: booléen

```zenscript
[100000, 800000, 50000].contains(données comme crafttweaker.api.data.IData);
[100000, 800000, 50000].contains("Affichage");
```

| Paramètre | Type de texte                                          | Libellé                                       |
| --------- | ------------------------------------------------------ | --------------------------------------------- |
| données   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | données pour vérifier si elles sont contenues |


### Copie

Fait une copie de cet IData.

 IData est immuable par défaut, utilisez ceci pour créer une copie correcte de l'objet.

 Renvoie : `une copie de cet IData.`

Type de retour : [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].copy();
```

### obtenir

Récupère le [crafttweaker.api.data.IData](/vanilla/api/data/IData) stocké à l'index donné. Renvoie : `Le [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

Type de retour : [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].get(index comme int);
[100000, 800000, 50000].get(0);
```

| Paramètre | Type de texte | Libellé              |
| --------- | ------------- | -------------------- |
| index     | Indice        | L'index (basé sur 0) |


### getId

Récupère l'ID de la balise NBT interne.

 Utilisé pour déterminer quel type de NBT est stocké (dans une liste par exemple)

 Renvoie : `ID de la balise NBT que ces données représente.`

Type de retour: octet

```zenscript
[100000, 800000, 50000].getId();
```

### getString

Récupère la représentation de la chaîne de caractères de la balise INBT interne

 Renvoie : `Chaîne qui représente l'INBT interne de cet IData.`

Type de retour: chaîne de caractères

```zenscript
[100000, 800000, 50000].getString();
```

### Enlever

Supprime le fichier [crafttweaker.api.data.IData](/vanilla/api/data/IData) stocké à l'index donné. Renvoie : `Le [crafttweaker.api.data.IData](/vanilla/api/data/IData) qui a été supprimé`

Type de retour : [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].remove(index comme int);
[100000, 800000, 50000].remove(0);
```

| Paramètre | Type de texte | Libellé              |
| --------- | ------------- | -------------------- |
| index     | Indice        | L'index (basé sur 0) |


### définir

Définit l'élément à l'index fourni à la valeur donnée Retours : `La valeur remplacée`

Type de retour : [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].set(index comme int, valeur comme crafttweaker.api.data.IData);
[100000, 800000, 50000].set(0, "Au revoir");
```

| Paramètre | Type de texte                                          | Libellé                        |
| --------- | ------------------------------------------------------ | ------------------------------ |
| index     | Indice                                                 | L'index à définir (basé sur 0) |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La nouvelle valeur             |



## Propriétés

| Nom    | Type de texte | A un Getter | A un Setter |
| ------ | ------------- | ----------- | ----------- |
| taille | Indice        | vrai        | Faux        |

