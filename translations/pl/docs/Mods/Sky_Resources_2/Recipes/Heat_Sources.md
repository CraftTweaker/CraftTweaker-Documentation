# Źródła ciepła

Pakiet *źródeł ciepła* jest używany do dodawania lub usuwania źródeł ciepła dla niektórych maszyn/procesów.

**Uwaga: Te funkcje działają tylko dla elementów, które mają formularz blokowy!**

## Dzwonienie

Możesz wywołać pakiet *źródeł ciepła* używając `mods.skyresources.heatsources`

## Dodawanie źródła ciepła

```zenscript
//mods.skyresources.heatsources.add(IItemStack stack, int heatValue);
mods.skyresources.heatsources.add(<minecraft:ice>, 3);
```

## Usuwanie źródła ciepła

```zenscript
//mods.skyresources.heatsources.remove(IItemStack output);
mods.skyresources.heatsources.remove(<minecraft:obsidian>);
```