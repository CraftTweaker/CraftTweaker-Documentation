# Gestionnaire de tranches de liquides

Le gestionnaire de brackets liquide vous donne accès aux liquides du jeu. Il n'est possible que de se faire enregistrer dans le jeu, donc l'ajout ou la suppression de mods peuvent causer des problèmes si vous faites référence aux liquides du mod dans un gestionnaire de brackets liquides.

Les liquides sont référencés dans le gestionnaire de pont de liquides par la même manière :

```zenscript
<liquid:liquidname> OU <fluid:liquidname>

<liquid:lava> OU <fluid:lava>
```

Si le liquide est trouvé, cela retournera un objet ILiquidStack. Veuillez vous référer à la [entrée Wiki respective](/Vanilla/Liquids/ILiquidStack/) pour plus d'informations sur ce que vous pouvez faire avec celles-ci.

# Obtenir tous les liquides enregistrés

Vous pouvez utiliser la commande suivante pour afficher tous les liquides enregistrés dans le journal CraftTweaker

    /ct liquids
    /crafttweaker liquids