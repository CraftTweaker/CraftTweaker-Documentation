# Gestionnaire de recettes de brassage

## Accéder au gestionnaire de brassage

Vous pouvez accéder au gestionnaire de brassage en utilisant le `mot clé global` [brassant](/Vanilla/Global_Functions/).

## Méthodes de Recette

Une recette de brassage se compose de 3 pièces :

1. Une entrée (ce qui est dans les 3 "Emplacements de bouteille")
2. Un ou plusieurs ingrédients possibles (Qu'est-ce qui peut aller dans l'emplacement supérieur où va la véranda)
3. La sortie (Qu'est-ce que la recette renvoie)

### Ajouter des recettes de cuisson

```zenscript
//brewing.addBrew(Entrée Ingrédient, ingrédient Ingrédient, sortie IItemStack, @Optional boolean hidden);
brewing. ddBrew(<ore:blockGlass>, <ore:logWood>, <minecraft:beacon>);
brewing.addBrew(<ore:ingotGold>, <minecraft:obsidian>, <minecraft:wool:3>, true);


//brewing. ddBrew(IIngrédient, IIngrédient[] ingrédients, IItemStack sortie, @Optional boolean hidden);
brassage. ddBrew(<minecraft:bedrock>, [<minecraft:lapis_ore>], <minecraft:sponge:1>);
brewing.addBrew(<minecraft:gold_block>, [<minecraft:iron_block>, <minecraft:lapis_block>], <minecraft:sponge:1>, true);
```

### Supprimer les recettes de brassage

Ne fonctionne qu'avec JEI version 4.15.0.275 ou supérieure.

```zenscript
//brewing.removeRecipe(IItemStack input, IItemStack ingredient);
brewing.removeRecipe(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <minecraft:gunpowder>);
```