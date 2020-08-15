# Robotyczny system montażowy

Układ zespołu robotycznego jest wielowymiarowym zespołem sterującym montażu, zespołem I/O, platformą montażową, laserem montażowym i wierceniem montażowym. Przekształca elementy wejściowe na elementy wyjściowe za pomocą lasera lub wiercenia.

Istnieje kilka funkcji do dodawania i usuwania przepisów w zależności od tego, czy przepis wymaga użycia lasera, wiercenia, czy obu tych elementów.

## Dzwonienie

Pakiet montażu można wywołać za pomocą `mods.pneumaticcraft.assemb`.

## Usuwanie

Te funkcje usuwają pierwszy przepis z podanym [IItemStack](/Vanilla/Items/IItemStack/) `wyjście`:

```zenscript
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);

// Examples
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

Te funkcje usuwają *wszystkie* przepisy obecnie zdefiniowane dla systemu montażu:

```zenscript
mods.pneumaticcraft.assembly.removeAllLaserRecipes();
mods.pneumaticcraft.assembly.removeAllDrillRecipes();
mods.pneumaticcraft.assembly.removeAllDrillLaserRecipes();
```

## Dodawanie

Te funkcje są używane do dodawania nowych przepisów dla systemu montażu:

```zenscript
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)

// Examples
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```