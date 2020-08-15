# Ekstraktor płynów drzew

### Importowanie

```zenscript
importuj mods.industrialforegoing.Extractor;
```

### Dodawanie

```zenscript
Ekstrakt.add(moc wyjściowa IItemStack, płyn ILiquidStack);

Ekstrakt.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### Usuwanie

```zenscript
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```