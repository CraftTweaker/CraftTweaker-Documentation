# Heating Sources

## 所属包名
```zenscirpt
`mods.exnihilocreatio.Heat`
```

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) input** The block that supplies heat.
- **Int heat** heat per instance.

## 添加配方

```zenscript
mods.exnihilocreation.Heat.addRecipe(IItemStack, Int);

mods.exnihilocreation.Heat.addRecipe(<minecraft:log>, 20);
```

## Removal

```zenscript
mods.exnihilocreation.Heat.removeAll();
```