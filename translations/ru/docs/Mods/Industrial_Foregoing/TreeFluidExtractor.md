# Экстрактор дерева жидкости

### Импорт

```zenscript
import mods.industrialforegoing.Extractor;
```

### Добавление

```zenscript
Extractor.add(IItemStack output, ILiquidStack fluid);

Extractor.add(<minecraft:cobblestone>, <liquid:lava> * 3);
```

### Удаление

```zenscript
Extractor.remove(IItemStack input);

Extractor.remove(<minecraft:cobblestone>);
```