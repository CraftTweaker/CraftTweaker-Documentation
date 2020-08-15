# Chłodzenie ramki grzewczej

Chłodzenie ramek grzewczych może być wykorzystane do przekształcenia jednego przedmiotu w inny poprzez umieszczenie przedmiotów w klatce piersiowej lub innym ekwipunku z dołączoną ramką grzewczą, i chłodzenia do temperatury poniżej 0°C (zwykle przy użyciu tuby Vortex).

## Dzwonienie

Możesz wywołać pakiet chłodzenia Ramki ciepła za pomocą `mods.pneumaticcraft.heatframecooling`

## Usuwanie

Ta funkcja usuwa pierwszy przepis, który znajduje z podanym [IIngredient](/Vanilla/Variable_Types/IIngredient/) `wyjście`:

```zenscript
mods.pneumaticcraft.heatframechłoding.removeRecipe(moc wyjściowa);
// Przykład
mods.pneumaticcraft.heatframechłoding.removeRecipe(<minecraft:obsidian>);
```

Ta funkcja usuwa *wszystkie* przepisy chłodzenia ramek ciepła:

```zenscript
mods.pneumaticcraft.heatframechłoding.removeAllRecipes();
```

## Dodawanie

Te funkcje są używane do dodawania nowych przepisów dla systemu chłodzenia ramek ciepła:

```zenscript
mods.pneumaticcraft.heatframecooling.addRecipe(IItemStack input, IItemStack output);
mods.pneumaticcraft.heatframecooling.addRecipe(IOreDictEntry input, IItemStack output);

// Example
mods.pneumaticcraft.heatframecooling.addRecipe(<minecraft:slime_ball>, <minecraft:snow_ball>);
```