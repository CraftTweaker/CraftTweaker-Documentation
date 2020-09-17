# 供暖源

## 所属包名
```zenscirpt
`mods.exnihilocreatio.Heat`
```

## 使用方式

- **[IItemStack](/Vanilla/Items/IItemStack/) 输入** 提供热量的方块。
- **内部热** 每实例加热。

## 添加配方

```zenscript
mods.exnihilocreatio.Heat.addRecipe(IItemStack, Int);

mods.exnihilocreatio.Heat.addRecipe(<minecraft:log>, 20);
```

## 删除配方

```zenscript
mods.exnihilocreatio.Heat.removeAll();
```