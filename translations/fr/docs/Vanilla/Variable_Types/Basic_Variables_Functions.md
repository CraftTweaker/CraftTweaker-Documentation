# Fonctionnalité de la variable de base

Les types de variables les plus basiques de ZenScript sont Strings, Integers et booleans.

## Les plus simples types

`vrai == vrai` Vous pouvez vérifier si deux valeurs sont les mêmes.  
`"Bonjour" != "Monde"` Vous pouvez également vérifier si deux valeurs sont inégales.

## Chaînes de caractères

Les chaînes de caractères fournissent certaines fonctionnalités

`"Bonjour".leng` Renvoie la longueur de la chaîne comme int.  
`"Bonjour"[1]` Renvoie le caractère à l'index de la chaîne de caractères donnée comme une autre chaîne.  
`"Bonjour" dans "Enfer"` vérifie si la chaîne avant `dans` contient la chaîne après comme booléenne. Vous pouvez remplacer le `en` par `a` si vous le souhaitez.  
`"Hel" ~ "lo " + "World"` Vous pouvez également ajouter/concaténer des chaînes. `chaîne += "assignAdd"` vous pouvez également utiliser les opérateurs assigner/assigner Concaténate.

En dehors de ceux-ci, toutes les méthodes disponibles pour [Java Strings](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) et ne pas utiliser le type de caractères `` sont également disponibles pour les chaînes ZenScript !  
Cela comprend :

- format@@0 toLowerCase
- toUpperCase
- getBytes
- hashCode
- interne
- isEmpty
- format@@0 toCharArray
- découper
- séparer

## Nombre entier

Les entiers fournissent certaines fonctionnalités

`+-*/%` Opérateurs mathématiques de base (consultez la page [types de variables](/Vanilla/Variable_Types/Variable_Types)). Vous pouvez également utiliser les jetons de l'operatorAssign  
`0 à 10` Renvoie une plage d'entier comprise entre 0 et 10.  
`1~10` Concatène les Integers (retourne "110").

## Booléens

Les booléens fournissent certaines fonctionnalités

`vrai ~ faux` Concatène les booléens (retourne "truefalse").  
`& | ^` Opérateurs booléens (et/ou/xor).

## Tableaux / Listes de tableaux

Les tableaux et les listes de tableaux fournissent des fonctions communes

`table[1]` retourne l'élément à l'index donné.  
`tableau[1] = "Bonjour"` Définit l'élément à l'index donné.  
`array.length` retourne la longueur des tableaux