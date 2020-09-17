# JEITweaker

## Libellé

Ce mod ajoute le support de CraftTweaker à JEI. CraftTweaker utilisait pour supporter JEI nativement, mais en raison de la réécriture de la version 1.14, le support JEI est en train d'être retiré dans son propre mod.


## Paquet
`mods.jei.JEI`

## Cacher les objets

Ceci masquera l'élément donné dans JEI. L'exemple donné masquera le bloc de terre dans le menu JEI.

```zenscript
//mods.jei.JEI.hideItem(IItemStack stack);
mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Cacher les catégories

Cela masquera la catégorie donnée dans JEI. L'exemple donné masquera la catégorie du four lors de la recherche de recettes en JEI.

```zenscript
//mods.jei.JEI.hideCategory(String category);
mods.jei.JEI.hideCategory("minecraft:furnace");
```

Les catégories par défaut sont :
```zenscript
"minecraft:crafting"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

Les mods peuvent cependant ajouter plus de catégories !

## Ajouter des infos

Ceci ajoutera des informations à l'élément qui sera affiché lors de l'examen des utilisations dans JEI!.

Cet exemple exact ajoutera 3 lignes d'informations à l'objet Diamant.

```zenscript
//mods.jei.JEI.addInfo(IItemStack stack, String[] information);
mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["C'est la première ligne!", "C'est la seconde!", "troisième"]);
```

Le code ci-dessus produira : ![Boîte de validation remplie](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


