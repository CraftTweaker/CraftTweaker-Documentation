# Oferowanie Bogów

## Pakiet
```zenscript
mods.naturesaura.Oferta
```

## Metody
- **Nazwa ciągu znaków**
- **[Składnik](/Vanilla/Variable_Types/IIngredient) wejścia** Oferta
- **int ininputAmount** Ilość elementów wymaganych do wprowadzenia danych. Zauważ, że oznacza to, że kwota zmiennej wejściowej jest ignorowana
- **[Składnik](/Vanilla/Variable_Types/IIngredient) element startowy** element wymagany do rozpoczęcia oferty
- **[IItemStack](/Vanilla/Items/IItemStack) wyjście** Prezent Oferty

## Dodanie

```zenscript
mods.naturesaura.Oferta.addRecipe(Nazwa ciągu, Wejście IIngredient, int inputAmount, IIngredient startItem, wyjście IItemStack)
```

## Usuwanie

```zenscript
mods.naturesaura.Oferta.removeRecipe(wyjście IItemStack)
```