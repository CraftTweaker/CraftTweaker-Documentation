# Fabricatore Termionico

ModTweaker consente di aggiungere o rimuovere ricette di Fabricatore Termionico forestale

## Chiamata

Puoi chiamare il pacchetto usando `mods.forestry.ThermionicFabricator`

## Rimozione Ricetta/Trasmissione

```zenscript
//mods.forestry.ThermionicFabricator.removeCast(IIngredient product);
mods.forestry.ThermionicFabricator.removeCast(<forestry:thermionic_tubes:5>);
```

## Ricetta/Aggiunta Getto

```zenscript
//mods.forestry.ThermionicFabricator.addCast(IItemStack output, IIngredient[][] ingredienti, ILiquidStack liquidStack, @Optional IItemStack plan);
mods.forestry.ThermionicFabricator. ddCast(<minecraft:glass_pane> * 4, [[<minecraft:dirt>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 200);
mods.forestry. hermionicFabricator.addCast(<minecraft:stained_glass:3>, [[<ore:dyeLightBlue>,null,null],[null,null,null],[null,null,null]], <liquid: glass> * 144, <forestry:wax_cast>);
```

## Rimozione Fusione

```zenscript
//mods.forestry.ThermionicFabricator.removeSmelting(IIngredient itemInput);
mods.forestry.ThermionicFabricator.removeSmelting(<minecraft:sand>);

```

## Aggiunta Di Fusione

È possibile aggiungere ogni liquido nel gioco come risultato della fusione, ma attualmente solo `<liquid:glass>` è raccomandato a causa di bug che si verificano con altri liquidi.

```zenscript
//mods.forestry.ThermionicFabricator.addSmelting(ILiquidStack liquidStack, IItemStack itemInput, int meltingPoint);
mods.forestry.ThermionicFabricator.addSmelting(<liquid:glass> * 120, <minecraft:stone>, 500);
```