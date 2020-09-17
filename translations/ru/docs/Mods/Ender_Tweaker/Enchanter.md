# Чародей

## Пакет

`импорт mods.enderio.Enchanter;`

## Методы

**- [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) output** The output enchantment.

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/) ввод** предмет, используемый для создания этого чара.

**- количество int Level** количество входных предметов на уровень зачарований.

**- Множитель двойной стоимости** используется для модификации, насколько дорого стоит рецепт.

## Сложение

```zenscript
mods.enderio.Enchanter.addRecipe(IEnchantDefinition output, IIngredient input, int amountPervel, double costMultiplier);

mods.enderio.Enchanter.addRecipe(<enchantment:minecraft:sharpness>, <minecraft:prismarine_shard>, 32, 60);
```

## Удаление

```zenscript
mods.enderio.Enchanter.removeRecipe(IEnchantmentDefinition);

mods.enderio.Enchanter.removeRecipe(<enchantment:minecraft:sharpness>);
```