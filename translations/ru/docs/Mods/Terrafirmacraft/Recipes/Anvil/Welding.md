# Злобная сварка

## Пакет
```zenscript
import mods.terrafirmacraft.Сварка;
```

## Сложение

```zenscript
Welding.addRecipe(String registryName, IIngredient input1, IIngredient input2, IItemStack, int minTier);
```

## Удаление

```zenscript
Welding.removeRecipe(IItemStack);
Welding.removeRecipe(String registryName);
```
- Как и с злыми рецептами, здесь применяются те же правила для ввода. Ввод должен быть подделан (см. [ItemRegistry](/Mods/Terrafirmacraft/ItemRegistry) для регистрации способности ковки к предмету) и не может быть скоплён.