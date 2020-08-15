# Gestionnaire de potions

Le gestionnaire de potions vous donne accès aux potions du jeu. Il est uniquement possible de s'inscrire à une potion dans le jeu, ainsi l'ajout ou la suppression de mods peuvent causer des problèmes si vous référencez les potions du mod dans un gestionnaire de potions de potion.

Les potions sont référencées dans le gestionnaire de potions comme ceci:

```zenscript
<potion:modname:potionname>

<potion:minecraft:strength>
```

Si la Potion est trouvée, cela retournera un objet Ipotion. Veuillez vous référer à la [entrée Wiki respective](/Vanilla/Potions/IPotion/) pour plus d'informations sur ce que vous pouvez faire avec celles-ci.

# Récupération de toutes les potions enregistrées

Vous pouvez utiliser la commande suivante pour afficher toutes les potions enregistrées dans le journal CraftTweaker

    potions /ct
    /crafttweaker potions