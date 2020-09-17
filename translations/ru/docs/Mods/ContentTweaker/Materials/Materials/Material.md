# Материал

Материал - это то, что сделал из предмета, например Платина.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.Material;`

## Получение такого объекта

Вы можете либо получить существующий материал, используя [MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/) или создать новый, используя [Material Builder](/Mods/ContentTweaker/Materials/Materials/Material_Builder/)

## Поля

Вы можете получить следующую информацию из материала:

| ZenMethod            | Возвращаемый тип | Описание                                         |
| -------------------- | ---------------- | ------------------------------------------------ |
| getName()            | string           | Возвращает имя материала                         |
| getColor()           | int              | Возвращает цвет материала                        |
| isHasEffect()        | boolean          | Возвращает если материал имеет светящийся эффект |
| getUnlocalizedName() | string           | Возвращает нелокализованное имя материала        |

## Зарегистрировать [материальные части](/Mods/ContentTweaker/Materials/Materials/MaterialPart/)

Вы можете зарегистрировать части, используя [объект части](/Mods/ContentTweaker/Materials/Parts/Part/) или строку с его именем.  
Вы также можете зарегистрировать одну часть или несколько сразу.  
Таким образом, вы получили 4 варианта в общей сложности:

```zenscript
registerParts(String[] partNames);
registerParts(IPart[] parts);


registerPart(String partName);
registerPart(IPart часть);
```

registerPart Методы возвращают один объект [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) .  
Методы registerParts возвращают список [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/).