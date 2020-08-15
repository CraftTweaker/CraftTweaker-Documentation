# Hammering

## Pakiet
```zenscirpt
`mods.exnihilocreo.Hammer`
```

## Metody

- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście** Blok, który musi być uszkodzony.
- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** Element który blok upuszcza po uszkodzeniu.
- **Int tool level** tool level for breaking the block.
- **Szansa na pływanie** szansa między 0-1.
- **Szansa na przedłużenie** szansa między 0-1.

## Dodanie

```zenscript
mods.exnihilocreatio.Hammer.addRecipe(IIngredient, IItemStack, Int, Float, Float);

mods.exnihilocreatio.Hammer.addRecipe(<minecraft:log>, <minecraft:plank>, 0, 0.25, 0.5);
```

## Usuwanie

```zenscript
mods.exnihilocreatio.Hammer.removeAll();
```
