# InitialInventory

## Libellé

Ce mod ajoute la prise en charge du joueur pour qu'il reçoive un objet quand il rejoint un monde, puis ne plus jamais plus jamais similaire à la façon dont certains mods donnent des livres aux joueurs quand ils rejoignent un monde pour la première fois.

## Paquet
`mods.initialinventory.InvHandler`

## Ajout d'éléments de départ

Ceci ajoutera un objet à l'inventaire des joueurs quand ils rejoindront le monde.

Les paramètres sont :


Param: `key`

Type : `Chaîne`

Description :

Utilisé pour déterminer si un objet doit être donné. Une clé peut être n'importe quelle chaîne, le but est de déterminer si un joueur a déjà reçu un ensemble d'éléments.

Il est utile pour les modpacks qui ajouteront plus tard des éléments de départ, en utilisant une autre clé, les joueurs qui ont déjà commencé à jouer au pack, peuvent toujours recevoir ces objets. Un exemple serait :

Ajouter un diamant comme objet de départ avec la clé "1", rejoindre le monde, le joueur obtiendra le diamant.

Ajouter une pomme comme objet de départ avec la clé "2", rejoindre le monde, le joueur obtiendra la pomme, mais pas le diamant à nouveau.

Créer un nouveau monde, le joueur recevra à la fois une pomme et un diamant.

param: `item`

Type `IItemStack`

Description :

L'objet à donner au joueur quand il rejoigne.

Param: `index`

Type : `int`

Description :

Un entier optionnel pour définir où cet objet sera donné, peut être utilisé pour mettre un objet dans un emplacement d'inventaire comme un emplacement d'armure.

Si absent, la valeur par défaut sera -1, ce qui signifie qu'il la mettra dans le premier emplacement disponible, ou le combiner avec d'autres articles qui peuvent déjà être dans l'inventaire.


## Exemple

```zenscript
//mods.initialinventory.InvHandler.addStartingItem(String key, IItemStack item, Optional int index);
mods.initialinventory.InvHandler.addStartingItem("appes", <item:minecraft:apple>);
mods.initialinventory.InvHandler.addStartingItem("appes", <item:minecraft:golden_apple>, 5);
```


