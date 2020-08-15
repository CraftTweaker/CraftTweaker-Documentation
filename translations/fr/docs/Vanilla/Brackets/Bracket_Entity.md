# Gestionnaire de tranches d'entité

Le gestionnaire de bracket d'entités vous donne accès aux entités (par exemple, les mots, les tuiles etc.) dans le jeu. Il est uniquement possible de faire enregistrer des entités dans le jeu, ainsi l'ajout ou la suppression de mods peuvent causer des problèmes si vous référencez les mobs du mod dans un gestionnaire de tranches d'entités.

Les entités sont référencées dans le gestionnaire d'entités de cette façon :

```zenscript
<entity:modID:entityName>

<entity:minecraft:sheep>
```

Si la mob/entité est trouvée, cela retournera un objet IEntityDefinition. Veuillez vous référer à la [entrée Wiki respective](/Vanilla/Entities/IEntityDefinition/) pour plus d'informations sur ce que vous pouvez faire avec celles-ci.

# Récupération de toutes les entités enregistrées

Vous pouvez utiliser la commande suivante pour afficher toutes les entités enregistrées dans le journal CraftTweaker

    /ct entitées
    /crafttweaker