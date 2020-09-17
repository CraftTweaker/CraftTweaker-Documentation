# Амулет

## Пакет
```zenscript
import mods.terrafirmacraft.Цикл;
```

## Сложение

```zenscript
Рецепт Loom.addRecipe(String registryName, IIngredient input, IItemStack, int steps, String loomTexture);
```
- — это количество шагов, необходимых для завершения рецепта. Это число раз, когда игрок должен нажать на станцию, каждое движение цикла продвигается на один шаг. В рамках TFC это то же самое, что и количество предметов, необходимых для рецепта, но это не требуется.
- loomTexture - это путь к`ресурсам`к текстуре файла, который будет использоваться для отображения на станке в мире. Например, "minecraft:textures/blocks/wool_colored_white.png" ссылается на текстуру ванильной для белой шерсти). При использовании пользовательских текстур требуется какая-то загрузка данных/ресурсов (читать: набор ресурсов), чтобы она могла правильно ссылаться на вашу текстуру.

## Удаление

```zenscript
Loom.removeRecipe(IItemStack);
Loom.removeRecipe(String registryName);
```

## Пример
```zenscript
Loom.addRecipe("burlap_cloth", <tfc:crop/product/jute_disc>, <tfc:crop/product/burlap_cloth>, "tfc:textures/blocks/devices/loom/product/burlap.png");
```