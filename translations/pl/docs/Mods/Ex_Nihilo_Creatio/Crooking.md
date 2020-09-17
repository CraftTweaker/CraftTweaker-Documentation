# Krzyżowanie

## Pakiet
```zenscirpt
mods.exnihilocreo.Crook
```
## Metody

- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście** Wejście
- **[IItemStack](/Vanilla/Items/IItemStack/) nagradza** przedmiot, który ma szansę wyrzucić.
- **Szansa na pływanie** szansa między 0-1.
- **Szansa na przedłużenie** szansa między 0-1.

## Dodanie

```zenscript
mods.exnihilocreatio.Crook.addRecipe(IIngredient, IItemStack, Float);

mods.exnihilocreatio.Crook.addRecipe(<minecraft:log>, <minecraft:plank>, 0.25, 0.5);
```

## Usuwanie

```zenscript
mods.exnihilocreatio.Crook.removeAll();
```