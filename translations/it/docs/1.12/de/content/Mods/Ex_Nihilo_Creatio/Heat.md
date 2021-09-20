# Heat

## Package

`mods.exnihilocreatio.Heat`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) input** The block that supplies heat.
- **Int heat** heat per instance.

## Addition

```zenscript
Heat.addRecipe(IItemStack, Int);

Heat.addRecipe(<minecraft:log>, 20);
```

## Removal

```zenscript
Heat.removeAll();
```