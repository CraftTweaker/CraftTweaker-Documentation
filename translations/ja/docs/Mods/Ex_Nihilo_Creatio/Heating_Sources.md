# Heating Sources

## パッケージ
```zenscirpt
`mods.exnihilocreatio.Heat`
```

## メソッド

- **[IItemStack](/Vanilla/Items/IItemStack/) input** The block that supplies heat.
- **Int heat** heat per instance.

## 加算

```zenscript
mods.exnihilocreatio.Heat.addRecipe(IItemStack, Int);

mods.exnihilocreatio.Heat.addRecipe(<minecraft:log>, 20);
```

## 削除

```zenscript
mods.exnihilocreatio.Heat.removeAll();
```