# ByteArrayData



Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Interfaces implémentées
ByteArrayData implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructeurs
```zenscript
new crafttweaker.api.data.ByteArrayData(internal as byte[]);
```
| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| interne   | octet[]       | Aucune description fournie |



## Méthodes
### Ajouter

```zenscript
[4, 1, 2].add(valeur comme crafttweaker.api.data.IData);
[4, 1, 2].add("aujourd'hui");
```

| Paramètre | Type de texte                                          | Libellé                        |
| --------- | ------------------------------------------------------ | ------------------------------ |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La valeur à ajouter à la liste |



```zenscript
[4, 1, 2].add(index comme int, valeur comme crafttweaker.api.data.IData);
[4, 1, 2].add(1, "beau");
```

| Paramètre | Type de texte                                          | Libellé                                                                     |
| --------- | ------------------------------------------------------ | --------------------------------------------------------------------------- |
| index     | Indice                                                 | L'index à ajouter. Les objets suivants seront déplacés d'un index plus haut |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La valeur à ajouter à la liste                                              |


### effacer

Supprime tous les éléments de la liste

```zenscript
[4, 1, 2].clear();
```

### obtenir

Récupère le [crafttweaker.api.data.IData](/vanilla/api/data/IData) stocké à l'index donné.

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(index comme int);
[4, 1, 2].get(0);
```

| Paramètre | Type de texte | Libellé              |
| --------- | ------------- | -------------------- |
| index     | Indice        | L'index (basé sur 0) |


### Enlever

Supprime le fichier [crafttweaker.api.data.IData](/vanilla/api/data/IData) stocké à l'index donné.

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(index comme int);
[4, 1, 2].remove(0);
```

| Paramètre | Type de texte | Libellé              |
| --------- | ------------- | -------------------- |
| index     | Indice        | L'index (basé sur 0) |


### définir

Définit l'élément à l'index fourni à la valeur donnée

Retourne [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index comme int, valeur comme crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Au revoir");
```

| Paramètre | Type de texte                                          | Libellé                        |
| --------- | ------------------------------------------------------ | ------------------------------ |
| index     | Indice                                                 | L'index à définir (basé sur 0) |
| valeur    | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | La nouvelle valeur             |



## Propriétés

| Nom    | Type de texte | A un Getter | A un Setter |
| ------ | ------------- | ----------- | ----------- |
| taille | Indice        | vrai        | Faux        |

