# Exemples

Crée de la lave en déposant 4x de n'importe quel Bois dans le cryothème.  
`mods.inworldcrafting.FluidToFluid.transform(<liquid:lava>, <liquid:cryotheum>, [<ore:logWood> * 4]);`

* * *

Crée du bois traité en déposant des planches de bouleau dans la créosote. `mods.inworldcrafting.FluidToItem.transform(<immersiveengineering:treated_wood>, <liquid:creosote>, [<minecraft:planks:2>]);`

* * *

Crée une bouteille d'eau en déposant une bouteille de verre dans l'eau, consomme le bloc source d'eau.  
`mods. nworldcrafting.FluidToItem.transform(<minecraft:potion>.withTag({Potion : "minecraft:water"}), <liquid:water>, [<minecraft:glass_bottle>], true);`

* * *

Crée en acier 15% du temps où le lingotIron déposé dans le monde est touché par une Explosion.  
`mod. nworldcrafting.ExplosionCrafting.explodeItemRecipe(<ore:ingotSteel>.firstItem, <ore:ingotIron>, 15);`

* * *

Créez 8 bâtons 75% du temps où les planches d'Acacia placées dans le monde sont frappées par une explosion. `mods.inworldcrafting.ExplosionCrafting.explodeBlockRecipe(<minecraft:stick> * 8, <minecraft:planks:4>, 75);`

* * *

Crée un bloc de charbon de bois quand 4 morceaux de bois de bois ont brûlé pendant 60 ticks. `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60 );`

# Documentation

## Note sur la fabrication de fluides

**N'ajoutez pas le même ingrédient plusieurs fois, utilisez `<ingredient> * count`. Il est là pour une raison.**  
Le jeu fusionne les objets à proximité dans des piles de sorte que la recherche de plusieurs ingrédients du même type dans un Espace de Blocs ne se produit que lorsque le premier EntityItem obtient une pile complète d'objets, L'artisanat ne se produira donc pas comme vous vous y attendiez.

### BAAD!

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

### Bonne humeur

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

## Transformation du fluide à l'objet

l'import devrait être `mods.inworldcrafting.FluidToItem`

**Utilisation**  
`FluidToItem.transform(sortie IItemStack, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

La valeur de consommation par défaut pour cette méthode est `true`, donc si vous ne voulez pas que le `inputItem` soit consommé lors de la transformation du liquide, vous devez passer `false` comme le 4ème paramètre à la méthode.

## Transformation fluide vers fluide

l'import devrait être `mods.inworldcrafting.FluidToFluid`

**Utilisation**  
`FluidToFluid.transform.transform(ILiquidStack sortie, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

La valeur de consommation par défaut pour cette méthode est `true`, donc si vous ne voulez pas que le `inputItem` soit consommé lors de la transformation du liquide, vous devez passer `false` comme le 4ème paramètre à la méthode.

## Objets brûlants

l'import devrait être `mods.inworldcrafting.FireCrafting`

**Utilisation**  
`FireCrafting.addRecipe(sortie IItemStack, Ingrédient inputItem, @Optional int ticks);`

Le nombre de ticks par défaut pour créer la sortie est `40` (2 secondes)

## Éléments/Blocs explosifs

l'import devrait être `mods.inworldcrafting.ExplosionCrafting`

### Éléments explosifs

**Utilisation**  
`ExplosionCrafting.explodeItemRecipe(sortie IItemStack, Ingrédient inputItem, @Optional int survicechance);`

La chance de survivre donne la chance de déterminer la probabilité de réussite de la recette. La valeur par défaut est `100`%

### Blocs explosifs

**Utilisation**  
`ExplosionCrafting.explodeBlockRecipe(sortie IItemStack, IItemStack blockStack, @Optional int itemSpawnChance);`

`blockStack` doit être un bloc `` dans sa pile. Il comparera les métadonnées. `itemSpawnChance` donne une chance de voir à quel point le bloc est susceptible de faire apparaître une sortie quand le bloc est détruit par une explosion. La valeur par défaut est `100`%