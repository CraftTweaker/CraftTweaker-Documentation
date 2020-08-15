# Rytuał Lasu

## Pakiet
```zenscript
mods.naturesaura.TreeRitual
```

## Metody
- **Nazwa ciągu znaków**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient) saplingType** Reprezentacja przedmiotu sapingu, który musi być umieszczony i uprawiany w drzewie
- **[IItemStack](/Vanilla/Items/IItemStack) wyjście** wynik rytuałów
- **Czas początkowy** Czas, w którym proces trwa ticki
- **[Składnik []](/Vanilla/Variable_Types/IIngredient) przedmiotów** Wymagane przedmioty dla rytuału

## Dodanie

```zenscript
mods.naturesaura.TreeRitual.addRecipe(nazwa ciągu, IIngredient saplingType, IItemStack output, int time, IIngredient[] elementy)
```

## Usuwanie

```zenscript
mods.naturesaura.TreeRitual.removeRecipe(IItemStack output)
```