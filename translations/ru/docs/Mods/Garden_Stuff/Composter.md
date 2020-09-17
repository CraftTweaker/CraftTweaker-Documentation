# Композитор
## Пакет
`import mods.gardenstuff.CompostBin;`

## Методы
- **[IItemStack](/Vanilla/Liquids/IItemStack/) предмет** Предмет для создания.
- **int processTime** Количество энергии, создаваемой за тик в машине базовой линии.
- **[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) oredictKey** запись oreDictionary .

## Добавить запись
```zenscript
mods.gardenstuff.CompostBin.add(IItemStack, int processTime);

mods.gardenstuff.CompostBin.add(<minecraft:carrot>, 150);
```

## Добавить запись в Compostable oreDictionary
```zenscript
mods.gardenstuff.CompostBin.add(oredictKey, int processTime);

mods.gardenstuff.CompostBin.add(<ore:cropCarrot>, 150);
```
