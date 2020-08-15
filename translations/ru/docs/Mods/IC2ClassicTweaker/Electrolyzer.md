# Электролизер

## Пакет

```zenscript
import mods.ic2.ClassicElectrolyzer;
```

## Методы

### Добавить оба рецепта

```zenscripts
mods.ic2.ClassicElectrolyzer.addBothRecipe(выход IItemStack, ввод IItemStack, внутренняя энергия);

mods.ic2.ClassicElectrolyzer.addBothRecipe(<minecraft:diamond>, <minecraft:dirt> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) ввод** должен быть ItemStack, нет руд или другой вещи.
- **int energy** Total eu received from discharge part and total energy used for charge part of the recip.

### Добавить рецепт зарядки

```zenscripts
mods.ic2.ClassicElectrolyzer.addChargeRecipe(выход IItemStack, ввод IItemStack, внутренняя энергия);

mods.ic2.ClassicElectrolyzer.addChargeRecipe(<minecraft:emerald>, <minecraft:stone> * 64, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) ввод** должен быть ItemStack, нет руд или другой вещи.
- **int energy** Total eu used in the recipe.

### Добавить Discharge Рецепт

```zenscripts
mods.ic2.ClassicElectrolyzer.addDischargeRecipe(выход IItemStack, ввод IItemStack, внутренняя энергия);

mods.ic2.ClassicElectrolyzer.addDischargeRecipe(<minecraft:cobblestone> * 64, <minecraft:bedrock>, 500);
```

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IItemStack](/Vanilla/Items/IItemStack/) ввод** должен быть ItemStack, нет руд или другой вещи.
- **int energy** Total eu received from the recipe.

### Удаление

Просто отключите соответствующий рецепт в `config/ic2/ic2machineRecipes.json`.

