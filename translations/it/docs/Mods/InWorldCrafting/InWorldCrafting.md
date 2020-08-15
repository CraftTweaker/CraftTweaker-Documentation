# Esempi

Crea la lava rilasciando 4x di qualsiasi logWood nel criotheum.  
`mods.inworldcrafting.FluidToFluid.transform(<liquid:lava>, <liquid:cryotheum>, [<ore:logWood> * 4]);`

* * *

Crea legno trattato rilasciando alcuni assi di betulla in creosoto. `mods.inworldcrafting.FluidToItem.transform(<immersiveengineering:treated_wood>, <liquid:creosote>, [<minecraft:planks:2>]);`

* * *

Crea una bottiglia d'acqua rilasciando una bottiglia di vetro in acqua, consuma il blocco sorgente dell'acqua.  
`mods. nworldcrafting.FluidToItem.transform(<minecraft:potion>.withTag({Pozione: "minecraft:water"}), <liquid:water>, [<minecraft:glass_bottle>], true);`

* * *

Crea legname 15% del tempo in cui ingotIron è caduto nel mondo è colpito da un'esplosione.  
`mods. nworldcrafting.ExplosionCrafting.explodeItemRecipe(<ore:ingotSteel>.firstItem, <ore:ingotIron>, 15);`

* * *

Crea 8 bastoncini 75% del tempo in cui Acacia Planks posizionato nel mondo è colpito da un'Esplosione. `mods.inworldcrafting.ExplosionCrafting.explodeBlockRecipe(<minecraft:stick> * 8, <minecraft:planks:4>, 75);`

* * *

Crea un blocco di carbone quando 4 pezzi di logLegno sono bruciati per 60 zecche. `mods.inworldcrafting.FireCrafting.addRecipe(<thermalfoundation:storage_resource>, <ore:logWood> * 4, 60);`

# Documentazione

## Nota sul fluidcrafting

**Non aggiungere lo stesso ingrediente più volte, usa `<ingredient> * conteggio`. È lì per una ragione.**  
Il gioco unisce gli oggetti nelle vicinanze in pile in modo da trovare più ingredienti dello stesso tipo in un BlockSpace accade solo quando il primo EntityItem ottiene una pila completa di oggetti, così il mestiere non succederà come ti aspetteresti.

### BAAD!

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel>, <ore:ingotSteel>, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

### Goooood

`FluidToItem.transform(<minecraft:diamond>, <liquid:blueslime>, [<ore:ingotSteel> * 2, <ore:dustCobalt>, <ore:nuggetEnderpearl>], true);`

## Trasformazione da fluido a elemento

import should be `mods.inworldcrafting.FluidToItem`

**Utilizzo**  
`FluidToItem.transform(IItemStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

Il valore di consumo predefinito per questo metodo è `true`, quindi se non vuoi che `inputItem` venga consumato durante la trasformazione del liquido devi passare `false` come 4° parametro al metodo.

## Trasformazione da fluido a fluido

import should be `mods.inworldcrafting.FluidToFluid`

**Utilizzo**  
`FluidToFluid.transform(ILiquidStack output, ILiquidStack inputFluid, IIngredient[] inputItems, @Optional boolean consume);`

Il valore di consumo predefinito per questo metodo è `true`, quindi se non vuoi che `inputItem` venga consumato durante la trasformazione del liquido devi passare `false` come 4° parametro al metodo.

## Elementi Di Masterizzazione

import should be `mods.inworldcrafting.FireCrafting`

**Utilizzo**  
`FireCrafting.addRecipe(output IItemStack, input IIngredient Item, @Optional int ticks);`

Il numero predefinito di tick per creare l'output è `40` (2 secondi)

## Oggetti Esplosivi/Blocchi

import should be `mods.inworldcrafting.ExplosionCrafting`

### Oggetti esplosivi

**Utilizzo**  
`ExplosionCrafting.explodeItemRecipe(output IItemStack, Input IIngrediente, @Optional int survicechance);`

Survivechance imposta la possibilità di quanto è probabile che la ricetta abbia successo. Il valore predefinito è `100`%

### Blocchi Esplosivi

**Utilizzo**  
`ExplosionCrafting.explodeBlockRecipe(output IItemStack, IItemStack blockStack, @Optional int itemSpawnChance);`

`blockStack` dovrebbe essere un `Blocco` nella sua forma di pila. Si confronterà con i metadati. `itemSpawnChance` imposta la possibilità di quanto è probabile che il blocco generi l'output quando il blocco viene distrutto da un'esplosione. Il valore predefinito è `100`%