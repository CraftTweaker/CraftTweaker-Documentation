# Gestionnaire de tranches de blocs

Le Gestionnaire de tranches de blocs vous donne accès aux blocs du jeu. Il n'est possible que de se faire enregistrer dans le jeu, ainsi l'ajout ou la suppression de mods peuvent causer des problèmes si vous référencez les blocs du mod dans un gestionnaire de tranches de blocs.

Les blocs sont référencés dans le gestionnaire de tranches de blocs de cette manière:

```zenscript
<block:modID:blockName>

<block:minecraft:dirt>
```

Si le bloc est trouvé, cela retournera un objet [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) .  
Veuillez vous référer à la [entrée Wiki respective](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) pour plus d'informations sur ce que vous pouvez faire avec celles-ci.