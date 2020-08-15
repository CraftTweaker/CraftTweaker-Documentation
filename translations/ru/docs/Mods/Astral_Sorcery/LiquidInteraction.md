# Взаимодействие

Пакет liquidInteraction используется для добавления в AS халисов взаимодействия жидкости (например, лавы и жидкого пускового света.

## Импорт пакета

Если вы хотите импортировать этот пакет, перейдите здесь:

```zenscript
import mods.astralsorcery.LiquidInteraction;
```

## Удалить взаимодействие

Эта функция удаляет первый рецепт, который находит, что использует данные [жидкости](/Vanilla/Liquids/ILiquidStack/) и возвращает заданный вывод [стек](/Vanilla/Items/IItemStack/).  
Если вы оставите результат, он удалит первый рецепт, который использует две указанные жидкости, независимо от их результата.

```zenscript
//LiquidInteraction.removeInteraction(ILiquidStack liquid1, ILiquidStack liquid2, @Optional IItemStack);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>);
LiquidInteraction.removeInteraction(<liquid:lava>, <liquid:starlight>, <minecraft:obsidian>);
```

## Добавление рецепта

Добавляет к взаимодействию с халисом жидкость

[FluidStack](/Vanilla/Liquids/ILiquidStack/) количеств засчитывается как количество жидкости, которое будет потребляться при взаимодействии.  
шанс1 и шанс2 определяют шансы на то, что входные жидкости потребляются соответственно.  
вес определяет, насколько вероятно, что это будет выбрано по сравнению с другими жидкостями взаимодействия, зарегистрированными для данной пары жидкостей

```zenscript
//LiquidInteraction.addInteraction(ILiquidStack liquidIn1, float chanceConsumption1, ILiquidStack liquidIn2, float chanceConsumption2, int weight, IItemStack);
LiquidInteraction.addInteraction(<liquid:lava> * 10, 0.1, <liquid:water> * 90, 0.2, 400, <minecraft:diamond>);
```