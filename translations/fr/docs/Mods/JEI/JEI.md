# JEI

CraftTweaker est fourni avec le support de JustEnoughItems (JEI). Vous pouvez ajouter ou masquer des éléments ou des fluides dans JEI ou ajouter une page de descriptions pour eux.

## Retirer

Vous pouvez soit supprimer l'objet de JEI soit le supprimer et toutes ses recettes de table d'artisanat.

```zenscript
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);

//hide(ILiquidStack item);
mods.jei.JEI.hide(<liquid:water>);
mods.jei.JEI. ide(<fluid:lava>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```

## Cacher les catégories

Vous pouvez l'utiliser pour cacher des catégories JEI entières (par exemple des recettes de fabrication, des recettes de four, des recettes de machine X, ...).  
Il accepte la catégorie en tant que chaîne, vous pouvez obtenir toutes les catégories enregistrées en exécutant `/ct jeiCategories` ingame.

```zenscript
//hideCategory(category)
mods.jei.JEI.hideCategory("minecraft.smelting");
```

## Ajouter un élément

Vous pouvez également ajouter un [IItemStack](/Vanilla/Items/IItemStack/) à JEI pour ajouter des objets qui n'ont pas été ajoutés ou pour ajouter un élément avec une balise NBT à JEI

```zenscript
//addItem(item);
mods.jei.JEI.addItem(<minecraft:stone>.withTag({display:{Name: "Pickle",Lore:["Quelle était autrefois la pierre", "La pierre n'est-elle plus"]}}));
```

## Ajouter une description

Une description JEI est une page supplémentaire affichée lors de la recherche des recettes/utilisations d'un ingrédient dans JEI qui contient des informations sur cet ingrédient.  
Vous pouvez ajouter une description JEI à un [IItemStack](/Vanilla/Items/IItemStack/), un [IItemStack](/Vanilla/Items/IItemStack/)[], un [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) ou un [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/).

Si vos chaînes sont trop longues pour être écrites sur une ligne (ou une page), elles créeront automatiquement des sauts de ligne/page.  
Chaque paramètre de chaîne aura au moins une ligne et enveloppera autour de la fin de la fenêtre si trop long.

```zenscript
//addDescription(élément IItemStack, chaîne... desc);
mods.jei.JEI.addDescription(<minecraft:iron_ingot>,"TEST");


//addDescription(IItemStack[] item, string... desc);
mods.jei.JEI.addDescription([<minecraft:music_disc>, <minecraft:music_disc>],["Jamais","Gonna","Vous","Haut","Jamais","Gonna","Let","Vous","Down"]);

//addDescription(IOreDictEntry dict, string... desc);
mods.jei.JEI.addDescription(<ore:ingotIron>, "Vous pouvez les utiliser pour créer des choses", "", "des choses comme Armor","","","Oui...","Et aussi...");

//addDescription(ILiquidStack stack, string... desc);
mods.jei.JEI.addDescription(<liquid:lava>, ["LAVA"]);
```

Le paramètre `desc` est un varArg, ce qui signifie que vous pouvez soit donner une chaîne[] contenant toutes les chaînes de description ou beaucoup de chaînes simples, peu importe ce que vous voulez. Ne les mélangez pas!