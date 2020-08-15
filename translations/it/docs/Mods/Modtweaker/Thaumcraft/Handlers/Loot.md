# Borse Di Bottino

Questo pacchetto ti permette di aggiungere e rimuovere oggetti da/per il Loot Bags.

## Importazione del pacchetto

È possibile [importare](/AdvancedFunctions/Import/) il pacchetto e i suoi metodi per facilitare il retrival dei metodi.

```zenscript
import mods.thaumcraft.LootBag;
```

## Tipi di bottino

È necessario fornire una serie di uno o più numeri da 0 a 2 (inclusi) alle funzioni.  
Quelli determinano il tipo di sacchetto da interessare.

- 0: Comune
- 1: Non Comune
- 2: Raro

## Aggiunta elementi

Avviso: Le monete d'oro hanno un valore di 2000, i diamanti sono 50.

```zenscript
//mods.thaumcraft.LootBag.addLoot(WeightedItemStack stack, int[] bagTypes)
mods.thaumcraft.LootBag.addLoot(<minecraft:dirt>%20000, [0,1,2]);
```

## Rimozione elementi

```zenscript
//mods.thaumcraft.LootBag.removeLoot(IItemStack stack, int[] bagTypes);
mods.thaumcraft.LootBag.removeLoot(<minecraft:gold_nugget>, [1,2]);
```