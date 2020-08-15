# Beispiele

Erstellt Lava, indem 4x aller Holzarten in Kryotheum fallen.  
`mods.inworldcrafting.FluidToFluid.transform(<liquid:lava>, <liquid:cryotheum>, [<ore:logWood> * 4]);`

* * *

Erzeugt behandeltes Holz durch das Ablegen einiger Birkenbretter in Kreosote. `mods.inworldcrafting.FluidToItem.transform(<immersiveengineering:treated_wood>, <liquid:creosote>, [<minecraft:planks:2>]);`

* * *

Erzeugt eine Wasserflasche, indem eine Glasflasche im Wasser abgeworfen wird, verbraucht den Wasserquellschlack.  
`Mods. nworldcrafting.FluidToItem.transform(<minecraft:potion>.withTag({Potion: "minecraft:water"}), <liquid:water>, [<minecraft:glass_bottle>], true);`

* * *

Erstelle Stahl 15% der Zeit, als ingotIron in der Welt von einer Explosion getroffen wird.  
`Modi. nworldcrafting.ExplosionCrafting.explodeItemRecipe(<ore:ingotSteel>.firstItem, <ore:ingotIron>, 15);`

* * *

Erstellen Sie 8 Stöcke 75% der Zeit, in der Acacia Bretter in der Welt von einer Explosion getroffen werden. `mods.inworldcrafting.ExplosionCrafting.explodeBlockRecipe(<minecraft:stick> * 8, <minecraft:planks:4>, 75);`

* * *

Erstelle einen Holzkohleblock, wenn 4 Holzstücke für 60 Zecken verbrannt wurden. `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60);`

# Dokumentation

## Hinweis auf Fluidcrafting

**Füge nicht mehrmals die gleiche Zutat hinzu, verwende `<ingredient> * Anzahl`. Es ist aus einem Grund da.**  
Das Spiel fusioniert Items in der Nähe zu Stapeln, so dass das Finden mehrerer Zutaten des gleichen Typs in einem BlockSpace nur geschieht, wenn das erste EntityItem einen vollen Stapel von Gegenständen erhält, so dass das Boot nicht passieren wird, wie du es erwarten würdest.

### BAAD!

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], wahr);`

### Guuod

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], wahr);`

## Flüssigkeit-zu-Item-Transformation

import sollte `mods.inworldcrafting.FluidToItem` sein

**Nutzung**  
`FluidToItem.transform(IItemStack Ausgabe, ILiquidStack InputFluid, IIngredient[] Eingabeartikel, @Optionaler boolesischer Konsum);`

Der Standardwert für diese Methode ist `true`, Wenn Sie also nicht wollen, dass das `Eingabeelement` bei der Umwandlung der Flüssigkeit konsumiert wird, müssen Sie `false` als 4. Parameter an die Methode übergeben.

## Fluid to Fluid Transformation

import sollte `mods.inworldcrafting.FluidToFluid` sein

**Nutzung**  
`FluidToFluid.transform(ILiquidStack-Ausgabe, ILiquidStack-InputFluid, IIngredient[] Eingabeartikel, @Optionaler boolesischer Konsum);`

Der Standardwert für diese Methode ist `true`, Wenn Sie also nicht wollen, dass das `Eingabeelement` bei der Umwandlung der Flüssigkeit konsumiert wird, müssen Sie `false` als 4. Parameter an die Methode übergeben.

## Brennende Elemente

import sollte `mods.inworldcrafting.FireCrafting` sein

**Nutzung**  
`FireCrafting.addRecipe(IItemStack Ausgabe, IInputItem, @Optional int ticks);`

Die Standardanzahl der Ticks, um die Ausgabe zu erstellen, ist `40` (2 Sekunden)

## Explodierende Gegenstände/Blöcke

import sollte `mods.inworldcrafting.ExplosionCrafting` sein

### Explodierende Elemente

**Nutzung**  
`ExplosionCrafting.explodeItemRecipe(IItemStack Ausgabe, IIngrediente Eingabe, @Optional int survicechance);`

Überlebenschance setzt die Chance dafür, wie wahrscheinlich das Rezept erfolgreich sein wird. Standardwert ist `100`%

### Explodierende Blöcke

**Nutzung**  
`ExplosionCrafting.explodeBlockRecipe(IItemStack Ausgabe, IItemStack BlockStack, @Optional int itemSpawnChance);`

`BlockStack` sollte ein `Block` in seiner Stackform sein. Es wird mit Metadaten vergleichen. `Item SpawnChance` setzt die Chance, wie wahrscheinlich der Block ausgeben soll, wenn der Block durch eine Explosion zerstört wird. Standardwert ist `100`%