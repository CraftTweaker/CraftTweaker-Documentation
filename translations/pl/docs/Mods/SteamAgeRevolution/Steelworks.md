# Stalownie

Stalownie to maszyna, która przekształca element wejściowy i płyn w element wyjściowy za pomocą pary.

## Dzwonienie

Możesz wywołać pakiet Steelworks używając `mods.steamagerevolution.Steelworks`.

## Usuwanie

Ta funkcja usuwa pierwszy przepis z podanym [IItemStack](/Vanilla/Items/IItemStack/) `wyjście`:

```java
mods.steamagerevolution.Steelworks.removeRecipe(wyjście IItemStack);

// Przykłady
mods.steamagerevolution.Steelworks.removeRecipe(<ore:ingotSteel>.firstItem);
```

Ta funkcja usuwa *wszystkie* przepisy obecnie zdefiniowane dla stalownicy:

```java
mods.steamagerevolution.Steelworks.removeAll();
```

## Dodawanie

Ta funkcja jest używana do dodawania nowych przepisów dla stalownicy:

```java
mods.steamagerevolution.Steelworks.addRecipe(ILiquidStack input2, IItemStack output, int craftTime, int steamCost);

// Przykłady
mods.steamagerevolution.Steelworks.addRecipe(<liquid:iron>, <ore:coal>, <ore:ingotSteel>.firstItem, 200, 200);
```
