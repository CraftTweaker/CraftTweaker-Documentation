# Gestionnaire de tranches BlockState

Le BlockState Bracket Handler vous donne accès aux BlockStates du jeu. Il n'est possible que de faire enregistrer des BlockStates dans le jeu, ainsi l'ajout ou la suppression de mods peuvent causer des problèmes si vous faites référence aux blocages du mod dans un gestionnaire de tranches de blocage.

Les BlockStates sont référencés dans le Gestionnaire de tranches BlockState comme suit:

```zenscript
<blockstate:modid:blockname>
```

Avec la modification `de` étant la modification du mod dans lequel le bloc est défini, et `blockname` étant le nom du bloc. Cela retournera le BlockState par défaut pour le bloc spécifié.

Pour obtenir un blockstate spécifique avec le BlockState Bracket Handler, vous pouvez éventuellement spécifier ses propriétés comme ceci :

```zenscript
<blockstate:modid:blockname:properties>
```

Là où `propriétés` est un ensemble de paires séparées par des virgules de `name=value` pour toutes les propriétés que vous voulez spécifier sur le blockstate. Toutes les propriétés qui ne sont pas spécifiées reçoivent les mêmes valeurs que dans l'état de blocage par défaut.

Ceci retournera un objet IBlockStatet. Veuillez vous référer à [l'entrée wiki respective](/Vanilla/Blocks/IBlockState/) pour plus d'informations.

Notez que ce gestionnaire de parenthèses créera une référence à un état de bloc spécifique. Si vous souhaitez être en mesure de faire correspondre plusieurs blocs, veuillez vous référer à [l'entrée wiki IBlockStateMatcher](/Vanilla/Blocks/IBlockStateMatcher).

## Exemples

Un exemple du gestionnaire de tranches BlockState serait :

```zenscript
//bloc de saleté
<blockstate:minecraft:dirt>

//bûche de chêne, verticale
<blockstate:minecraft:log>
<blockstate:minecraft:log:variant=oak,axis=y>

//bûche d'épicéa, horizontale le long de l'axe X
<blockstate:minecraft:log:variant=spruce,axis=x>
```