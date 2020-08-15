# Очистка

## Пакет

`mods.thermalexpansion.Refinery`

## Добавление рецепта

`Refinery.addRecipe(output, outputItem, input, energy);`

- `вывести` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `outputItem` <[WeightedItemStack](/Vanilla/Items/WeightedItemStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `энергия` &lt;int> Общие затраты энергии

```zenscript
импорт mods.thermalexpansion.Refinery;

// Добавляет рецепт, выходящий на выходе 1mB лавы и алмаза (на 100% шансов) за 1mB воды
Refinery. ddRecipe(<liquid:lava>, <minecraft:diamond>, <liquid:water>, 50);

// Добавляет рецепт, выходящий на выходе 5mB лавы и алмаза (на шанс 1%) на 100 mB воды
Refinery. ddRecipe(<liquid:lava> * 5, <minecraft:diamond> % 1, <liquid:water> * 100, 50);
```

### Добавление рецепта зелья

Добавляет рецепт для использования в алхимическом ретрометрическом увеличении

`Refinery.addRecipePotion(производство, вход, энергия);`

- `вывести` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `энергия` &lt;int> Общие затраты энергии

```zenscript
импортировать mods.thermalexpansion.Refinery;

Refinery.addRecipePotion(<liquid:potion>.withTag({Potion: "minecraft:mundane"}) * 500, <liquid:potion>.withTag({Potion: "cofhcore:leaping4"}) * 100, 100);
```

## Удаление рецепта

`Refinery.removeRecipe(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
импорт mods.thermalexpansion.Refinery;

Refinery.removeRecipe(<liquid:resin>);
```

### Удаление рецепта зелья

`Refinery.removeRecipePotion(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
импортировать mods.thermalexpansion.Refinery;

Refinery.removeRecipePotion(<liquid:potion_lingering>.withTag({Potion: "cofhcore:healing3"}));
```