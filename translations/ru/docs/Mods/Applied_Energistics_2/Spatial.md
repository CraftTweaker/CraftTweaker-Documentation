# Spatial

### Импорт

```zenscript
import mods.appliedenergistics2.Spatial;
```

### Добавление

Whitelist a TileEntity class for Spatial IO. Предупреждение: Некоторые элементы заголовка, особенно многоблочные структуры, могут вызвать непредвиденные ошибки или сбой при перемещении в пространственный IO. Пакет devs должен проверять любые дополнения к белому списку Spatial IO.

```zenscript
Spatial.whitelistEntity(String fullEntityClassName);

//Добавляет АА небольшой накопитель в белый список IO
Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");
```