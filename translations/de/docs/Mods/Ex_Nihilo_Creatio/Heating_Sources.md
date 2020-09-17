# Heizquellen

## Paket
```zenscirpt
"mods.exnihilocreatio.Heat"
```

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) Eingabe** Der Block, der Wärme liefert.
- **Int Hitze** pro Instanz.

## Addition

```zenscript
mods.exnihilocreatio.Heat.addRecipe(IItemStack, Int);

mods.exnihilocreatio.Heat.addRecipe(<minecraft:log>, 20);
```

## Entfernen

```zenscript
mods.exnihilocreatio.Heat.removeAll();
```