# Лесопилка

## Пакет

```java
import mods.ic2.Sawmill;
```

## Методы

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Ingredient](/Vanilla/Variable_Types/IIngredient/) ввод**

### Сложение

```zenscript
mods.ic2.Sawmill.addRecipe(IItemStack, входящий в Igredient);

mods.ic2.Sawmill.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

### Удаление

Чтобы удалить уже существующий рецепт, просто отключите соответствующий рецепт в `config/ic2/ic2machineRecipes.json`.