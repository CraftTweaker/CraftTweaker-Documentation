# Przykłady

Tworzy lava poprzez upuszczanie 4x każdego logDrewna do kriotheum.  
`mods.inworldcrafting.FluidToFluid.transform(<liquid:lava>, <liquid:cryotheum>, [<ore:logWood> * 4]);`

* * *

Tworzy poddane obróbce Drewno upuszczając trochę brzozowych desek w Kreozotu. `mods.inworldcrafting.FluidToItem.transform(<immersiveengineering:treated_wood>, <liquid:creosote>, [<minecraft:planks:2>]);`

* * *

Tworzy butelkę wodną, upuszczając szklaną butelkę w wodzie, zużywa blok wodny.  
`mody. nworldcrafting.FluidToItem.transform(<minecraft:potion>.withTag({Mikstacja: "minecraft:water"}), <liquid:water>, [<minecraft:glass_bottle>], true);`

* * *

Stwórz Stal 15% czasu kiedy ingotIron upuszczony na świecie zostanie uderzony przez eksplozję.  
`mody. nworldcrafting.ExplosionCrafting.explodeItemRecipe(<ore:ingotSteel>.firstItem, <ore:ingotIron>, 15);`

* * *

Stwórz 8 przyklejeń 75% czasu kiedy deski Acacia umieszczone na świecie zostaną uderzone przez eksplozję. `mods.inworldcrafting.ExplosionCrafting.explodeBlockRecipe(<minecraft:stick> * 8, <minecraft:planks:4>, 75);`

* * *

Stwórz blok węgla drzewnego, gdy 4 części drewna drzewnego spaliły się na 60 ticków. `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60);`

# Dokumentacja

## Uwaga na temat wytwarzania płynów

**Nie dodawaj tego samego składnika wielokrotnie, użyj `<ingredient> * count`. To jest z powodu.**  
Gra łączy pobliskie przedmioty w stosy, więc znalezienie wielu składników tego samego typu w jednym BlockSpace dzieje się tylko wtedy, gdy pierwszy EnityItem otrzyma pełny stos przedmiotów, więc rzemiosło nie stanie się tak, jak oczekiwałeś.

### BAAD!

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

### Gooood

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

## Transformacja płynu do elementu

import powinien być `mods.inworldcrafting.FluidToItem`

**Usage**  
`FluidToItem.transform(IItemStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

Domyślna wartość zużycia dla tej metody jest `true`, więc jeśli nie chcesz, aby `wejściowy przedmiot` był zużywany podczas transformacji płynu, musisz przekazać `false` jako czwarty paramater metody.

## Transformacja płynu do płynu

import powinien być `mods.inworldcrafting.FluidToFluid`

**Usage**  
`FluidToFluid.transform(ILiquidStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Opcjonalna konsumpcja logiczna);`

Domyślna wartość zużycia dla tej metody jest `true`, więc jeśli nie chcesz, aby `wejściowy przedmiot` był zużywany podczas transformacji płynu, musisz przekazać `false` jako czwarty paramater metody.

## Płonące przedmioty

import powinien być `mods.inworldcrafting.FireCrafting`

**Użycie**  
`FireCrafting.addRecipe(wyjście IItemStack inputItem, @Optional int ticks);`

Domyślna liczba ticków do utworzenia wyjścia to `40` (2 sekundy)

## Eksploracja przedmiotów/bloków

import powinien być `mods.inworldcrafting.ExplosionCrafting`

### Eksplodujące przedmioty

**Usage**  
`ExplosionCrafting.explodeItemRecipe(wyjście IItemStack, IIngredient inputItem, @Opcjonalny przeżywalność);`

Szansa przetrwania daje szansę na to, jak prawdopodobne jest powodzenie przepisu. Wartość domyślna to `100`%

### Eksplodujące Bloki

**Wykorzystanie**  
`ExplosionCrafting.explodeBlockRecipe(wyjście IItemStack, IItemStack blockStack, @Optional int itemSpawnChance);`

`blockStack` powinien być `Blokiem` w jego formularzu. Zostaną one porównane z metadanymi. `itemSpawnSzance` daje szansę na to, jak prawdopodobne jest pojawienie się bloku po zniszczeniu bloku przez eksplozję. Wartość domyślna to `100`%