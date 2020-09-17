# Étapes de l'objet

Ce mod est un addon pour l'API [GameStages](https://minecraft.curseforge.com/projects/game-stages). Les Étapes d'Article permettent d'accéder aux objets et aux blocs à placer dans un système de progression personnalisé défini par le créateur du Modpack. Si un joueur ne dispose pas de l'étape requise, le joueur aura du mal à utiliser l'objet. Pour en savoir plus sur ce qu'il fait, consultez la page des mods [ici](https://minecraft.curseforge.com/projects/item-stages)

## Empaqueter un élément

Pour qu'un élément soit restreint avec ce mod, il doit être associé à une étape. Cela peut se faire de différentes manières.

```zenscript
// Étape un seul bloc ou élément. 
mods.ItemStages.addItemStage("stage_name", <minecraft:stone>);

// Stage un élément avec NBT partiel. Par exemple, cette étape tous les livres d'enchantement du LV 5.
mods.ItemStages.addItemStage("stage_name", <minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 5 as short}]}));

// Stage tous les éléments avec une balise de dictionnaire de minerai.
mods.ItemStages.addItemStage("stage_name", <ore:dye>);

// Stage tous les éléments qui sont ajoutés par un mod spécifique.
mods.ItemStages.stageModItems("stage_name", "modid");

// Supprime une étape d'un élément spécifique, utile lorsqu'elle est associée avec stageModItems pour réduire la taille du script.
mods.ItemStages.removeItemStage(<minecraft:stone>);
```

## Liquides de Staging

Vous voudrez peut-être ajouter des liquides, ceci est fait principalement pour les cacher dans JEI.

```zenscript
// Montre un seul fluide, comme de l'eau.
mods.ItemStages.stageLiquid("stage_name", <liquid:water>);
```

## Enchantements de Staging

Vous pouvez organiser des enchantements pour empêcher les joueurs d'utiliser des objets qui ont l'enchantement sur eux.

```zenscript
// Étape un enchantement spécifique. Dans ce cas, la protection.
mods.ItemStages.stageEnchant("stage_name", <enchantment:minecraft:protection>);

// met en scène un enchantement spécifique, à un niveau spécifique. Dans ce cas, Protection II.
mods.ItemStages.stageEnchantByLevel("stage_name", <enchantment:minecraft:protection>.makeEnchantment(2));
```

## Changement du nom de l'élément inconnu.

Vous pouvez donner un nouveau nom à vos objets restreints lorsqu'ils sont cachés. Ceci peut être utilisé pour ajouter des plaisanteries et des anecdotes subtiles à votre sac.

```zenscript
// Définit toute la laine à être nommée "Clump of Fur" pour les joueurs qui n'ont pas la bonne étape.
mods.ItemStages.setUnfamiliarName("Clump of Fur", <minecraft:wool:*>);
```

## Empaqueter une infobulle

Vous pouvez organiser des parties des infobulles pour masquer des informations. Ceci est particulièrement utile lorsque vous essayez de mettre en place des mods comme Project E qui ajoutent une infobulle "EMC:" à la plupart des éléments.

```zenscript
// Supprime toute ligne dans une infobulle qui commence par "EMC:"
mods.ItemStages.stageTooltip("stage_name", "EMC:");
```

## Créer une catégorie de recettes

Vous pouvez accéder à toute une catégorie de recettes avec JEI. Par exemple, si vous mettez en scène la catégorie du four et qu'un joueur n'a pas la scène, il ne sera pas en mesure de voir les recettes du four.

```zenscript
// Étape une catégorie de recettes spécifique. Dans cet exemple, nous mettons en scène la catégorie Enclume.
mods.ItemStages.stageRecipeCategory("stage_name", "minecraft.anvil");
```