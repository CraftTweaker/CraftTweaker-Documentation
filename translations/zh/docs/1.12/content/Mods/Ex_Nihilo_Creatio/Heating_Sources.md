# Heating Sources

## 所属包
```zenscirpt
`mods.exnihilocreatio.Heat`
```

## 使用方式

- **[IItemStack](/Vanilla/Items/IItemStack/) input** The block that supplies heat.
- **Int heat** heat per instance.

## 添加配方

```zenscript
mods.exnihilocreatio.Heat.addRecipe(IItemStack, Int);

mods.exnihilocreatio.Heat.addRecipe(<minecraft:log>, 20);
```

## Removal

```zenscript
mods.exnihilocreatio.Heat.removeAll();
```