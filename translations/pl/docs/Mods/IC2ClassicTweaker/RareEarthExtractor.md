# Rzadki Ekstraktor Ziemi

## Pakiet

```zenscript
importuj mods.ic2.RareEarthExtractor;
```

## Metoda

- **wartość zmiennoprzecinkowa**
- **[IItemStack](/Vanilla/Items/IItemStack/)... wejścia** Mogą mieć więcej niż jeden określony dla wejścia. Jeśli tak, wszystkie określone elementy dają tę samą określoną wartość.

### Dodaj rzadkie wpisy do Ziemi

```zenscript
mods.ic2.RareEarthExtractor.addRareEarthEntries(wartość zmienna, IItemStack... wejście);

mods.ic2.RareEarthExtractor.addRareEarthEntries(1.0F, <minecraft:bedrock>, <minecraft:iron_block>);
```