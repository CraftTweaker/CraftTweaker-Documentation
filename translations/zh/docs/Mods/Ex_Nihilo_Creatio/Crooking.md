# Crooking

## 所属包名
```zenscirpt
mods.exnihilocreatio.Crook
```
## 使用方式

- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input** The input.
- **[IItemStack](/Vanilla/Items/IItemStack/) reward** the item that has a chance to drop.
- **Float chance** chance between 0-1.
- **Float fortune chance** chance between 0-1.

## 添加配方

```zenscript
mods.exnihilocreation.Crook.addRecipe(IIngredient, IItemStack, Float, Float);

mods.exnihilocreation.Crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## Removal

```zenscript
mods.exnihilocreation.Crook.removeAll();
```