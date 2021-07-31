# Heat

## 所属包名

`mods.exnihilocreatio.Heat`

## Methods

- **[IItemStack](/Vanilla/Items/IItemStack/) input** The block that supplies heat.
- **Int heat** heat per instance.

## 添加配方

```zenscript
Heat.addRecipe(IItemStack, Int);

Heat.addRecipe(<minecraft:log>, 20);
```

## Removal

```zenscript
Heat.removeAll();
```