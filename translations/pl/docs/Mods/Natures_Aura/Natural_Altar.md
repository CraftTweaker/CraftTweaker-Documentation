# Naturalny Ołtarz

## Pakiet
```zenscript
mods.naturesaura.Ołtarz
```

## Metody
- **Nazwa ciągu znaków**
- **[Składnik](/Vanilla/Variable_Types/IIngredient) wejście** Wprowadza ołtarz.
- **[IItemStack](/Vanilla/Items/IItemStack) wyjście** Wyjście ołtarza.
- **[Katalizator IIngredient](/Vanilla/Variable_Types/IIngredient)** Blok katalizatora umieszczony w jednym z czterech bloków narożników może być pusty
- **int aura** Ilość Aura wymagana do ukończenia receptury
- **int time** Procesy wykonywane w tickach

## Dodanie

```zenscript
mods.naturesaura.Altar.addRecipe(nazwa ciągu, dane wejściowe IIngredient, dane wyjściowe IItemStac, IIngredient catalyst, int aura, int time)
```

## Usuwanie

```zenscript
mods.naturesaura.Altar.removeRecipe(IItemStack output)
```