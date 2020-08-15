# Kompostowanie

## Pakiet
```zenscript
mods.exnihilocreo.Compost
```

## Metody

- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście** Wejście
- **Szansa na pływanie** Szansa powinna wynosić od 0 do 1.
- **Kolor ciągu** Kolor jest sześciokątny.
- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** wynik przepisu.

## Dodanie

Nie przyjmuje tablic dla IIngredient.

```zenscript
mods.exnihilocreatio.Compost.addRecipe(Ingredient, Float chance, String color, IItemStack);

mods.exnihilocreatio.Compost.addRecipe(<ore:woodPlank>, 0.25, "63452D", <minecraft:log>);
```

## Usuwanie

```zenscript
Kompost.removeAll();
```