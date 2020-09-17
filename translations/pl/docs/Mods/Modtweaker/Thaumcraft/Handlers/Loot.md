# Torby z łupem

Ten pakiet pozwala na dodawanie i usuwanie elementów do/z Loot Bags.

## Importowanie pakietu

Możesz [zaimportować](/AdvancedFunctions/Import/) paczkę i jej metody, aby ułatwić ponowne triwalowanie metod.

```zenscript
import mods.thaumcraft.LootBag;
```

## Typy Loot

Musisz podać tablicę jednej lub wielu liczb od 0 do 2 (włącznie) do funkcji.  
Określają one rodzaj loottoru, który ma być dotknięty.

- 0: Często
- 1: Niezbyt często
- 2: Rzadko

## Dodawanie elementów

Uwaga: Złote monety mają wartość w 2000 r., diamenty to 50.

```zenscript
//mods.thaumcraft.LootBag.addLoot(Stack, int[] bagTypes)
mods.thaumcraft.Loot.addLoot(<minecraft:dirt>%20000, [0,1,2]);
```

## Usuwanie elementów

```zenscript
//mods.thaumcraft.LootBag.removeLoot(IItemStack stack, int[] workTypes);
mods.thaumcraft.LootBag.removeLoot(<minecraft:gold_nugget>, [1,2]);
```