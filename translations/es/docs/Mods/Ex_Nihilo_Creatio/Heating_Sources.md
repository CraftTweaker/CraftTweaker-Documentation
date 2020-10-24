# Heating Sources

## Package
```zenscirpt
`mods.exnihilocreatio.Heat`
```

## Metodos

- **[IItemStack](/Vanilla/Items/IItemStack/) input** The block that supplies heat.
- **Int heat** heat per instance.

## Addition

```zenscript
mods.exnihilocreatio.Heat.addRecipe(IItemStack, Int);

mods.exnihilocreatio.Heat.addRecipe(<minecraft:log>, 20);
```

## Removal

```zenscript
mods.exnihilocreatio.Heat.removeAll();
```