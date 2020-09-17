# Exigences inversées :

## [NOTICE]

Les exigences inversées sont dépréciées et sont remplacées en interne par l'opérateur logique NOT. Cela signifie que les exigences inversées sont automatiquement converties en code NOT-Operator. Veuillez vous abstenir d'utiliser ce type d'exigence, elles sont toujours incluses pour **le support hérité !**

## Pré-requis inversés

Les exigences inversées sont une fonctionnalité 1.4.0 + CompatSkills seulement! Les exigences inversées sont débloquées tant que vous n'avez pas le composant requis. Une condition de compétence inversée est débloquée tant que vous n'avez pas le niveau spécifié de la compétence ou plus.

Les syntaxes inversées sont les suivantes :

    Exemple:
    !adv|
    !dim|
    !stage|
    !skill|
    !trait|
    
    
    Exemple de travail :
    !adv|minecraft:husbandry/plant_seed
    !dim|0
    !stage|test
    !skill|reskillable:building|15
    !trait|reskillable:battle_spirit