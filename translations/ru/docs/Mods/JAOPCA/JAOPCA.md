# JAOPCA

[JAOPCA](https://minecraft.curseforge.com/projects/jaopca) (Just A Ore Processing Atatibility Attempt) - это мод, который призван добавить совместимость руды ко многим модам.

## Импорт пакета

Если вы хотите сократить вызовы методов, вы можете импортировать пакет.  
Вы можете сделать это, используя

```zenscript
import mods.jaopca.JAOPCA;
```

## Методы

Этот пакет является отправной точкой JAOPCA. Он предоставляет возможность проверки и получения объектов [OreEntry](/Mods/JAOPCA/OreEntry/). Проверьте соответствующую страницу для получения дополнительной информации, но кратко они являются названиями материалов (e. . «Золото»), которые могут иметь вставки, такие как чанки, пыли и все.

- Вход: напр. "нагет", "пыль", "жила", ... (смотрите [здесь](/Mods/JAOPCA/RegisteredEntries/) для списка всех)
- [OreEntry](/Mods/JAOPCA/OreEntry/): например "Алмаз", "Угля", "Редстоун", ...
- OreType: например "INGOT", "GEM", "DUST"

### Проверьте, существует ли запись

Возвращает `true` , если запись с заданным именем существует

```zenscript
//mods.jaopca.JAOPCA.containsEntry(entryName);
mods.jaopca.JAOPCA.containsEntry("nugget");
```

### Получить OreEntry

Возвращает указанное [OreEntry](/Mods/JAOPCA/OreEntry/) для данного имени, или `null` если оно не существует. *Внимание: Большинство материалов - Захватываемые, да и потери!*

```zenscript
//mods.jaopca.JAOPCA.getOre(oreName);
mods.jaopca.JAOPCA.getOre("уголь");
```

### Получить все OreEntries для записи

Возвращает список всех зарегистрированных объектов [OreEntry](/Mods/JAOPCA/OreEntry/).

```zenscript
//mods.jaopca.JAOPCA.getOresForEntry(entryName);
mods.jaopca.JAOPCA.getOresForEntry("nugget");
```

### Получить все OreEntries для записи

Возвращает список всех объектов [OreEntry](/Mods/JAOPCA/OreEntry/) , принадлежащих к данному oreType.

```zenscript
//mods.jaopca.JAOPCA.getOresForType(oreType);
mods.jaopca.JAOPCA.getOresForType("GEM");
```

### Получить все зарегистрированные OreEntries

Возвращает список всех зарегистрированных объектов [OreEntry](/Mods/JAOPCA/OreEntry/).

```zenscript
mods.jaopca.JAOPCA.getAllOres();
```