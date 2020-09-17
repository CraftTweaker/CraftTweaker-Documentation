# Opérateur ET

Une porte **ET** combine deux entrées et renvoie `TRUE` seulement si les deux entrées sont également `VRAIES`.

| Input 1 | Input 2 | Sortie |
| ------- | ------- | ------:|
| 0       | 0       |      0 |
| 0       | 1       |      0 |
| 1       | 0       |      0 |
| 1       | 1       |      1 |

L'exigence AND contrairement aux autres exigences logiques est principalement utile pour les exigences logiques imbriquées comme verrouiller un objet ou un autre objet avec des exigences multiples requiert que toutes les conditions soient remplies. C'est la même chose que la fonctionnalité ET, donc elle devrait être utilisée lorsque cela est possible, car il facilitera la mise en forme de l'infobulle de manière plus facile à lire.

    Exemple vide :
    ET|[]~[]