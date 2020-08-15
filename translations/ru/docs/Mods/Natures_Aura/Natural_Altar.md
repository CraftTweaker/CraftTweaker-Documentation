# Природный Алтарь

## Пакет
```zenscript
mods.naturesaura.Алтарь
```

## Методы
- **Название строки**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) входной параметр** алтаря.
- **[IItemStack](/Vanilla/Items/IItemStack) вывод** алтаря.
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) catalyst** Блок катализатора, размещенный на одном из четырех угловых блоков, может быть нулевым
- **int aura** Количество Ауры, необходимое для выполнения рецепта
- **время подсказки** процессы времени занимают такты

## Сложение

```zenscript
mods.naturesaura.Altar.addRecipe(String название, Ingredient input, IItemStack, IIngredient catalyster, int time)
```

## Удаление

```zenscript
mods.naturesaura.Altar.removeRecipe(IItemStack output)
```