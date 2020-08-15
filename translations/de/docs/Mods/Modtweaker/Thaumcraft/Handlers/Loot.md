# Beute Taschen

Dieses Paket erlaubt das Hinzufügen und Entfernen von Elementen in die Beutetaschen oder aus dem Beutebeutel.

## Dieses Paket importieren

You can [import](/AdvancedFunctions/Import/) the package and its methods to facilitate the retrival of the methods.

```zenscript
import mods.thaumcraft.LootBag;
```

## Beute Typen

Sie müssen den Funktionen ein Array mit einer oder mehreren Zahlen von 0 bis 2 (inklusive) zur Verfügung stellen.  
Diejenigen, die die Art der Beutetasche bestimmen, die betroffen sein soll.

- 0: Häufig
- 1: Selten
- 2: Selten

## Hinzufügen von Elementen

Hinweis: Gold Münzen haben einen Wert von 2000, Diamanten sind 50.

```zenscript
//mods.thaumcraft.LootBag.addLoot(WeightedItemStack stack, int[] bagTypen)
mods.thaumcraft.LootBag.addLoot(<minecraft:dirt>%20000, [0,1,2]);
```

## Entferne Elemente

```zenscript
//mods.thaumcraft.LootBag.removeLoot(IItemStack Stack, int[] bagTypen);
mods.thaumcraft.LootBag.removeLoot(<minecraft:gold_nugget>, [1,2]);
```