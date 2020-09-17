# Конструктор запчастей

Если вы хотите построить [часть](/Mods/ContentTweaker/Materials/Parts/Part/), вам понадобится строитель частей!  
Это не сложно, не так ли?

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.PartBuilder;`

## Получение такого объекта

Вы можете получить новый, чистый строитель с помощью [пакета MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
```

## Установить свойства запчасти

Вы можете установить эти свойства

| ZenMethod                           | Параметр                                                      |
| ----------------------------------- | ------------------------------------------------------------- |
| setHasOverlay(hasOverlay)           | boolean hasOverlay                                            |
| setName(имя)                        | название строки                                               |
| setPartType(partType)               | [Тип частицы](/Mods/ContentTweaker/Materials/Parts/PartType/) |
| setOreDictName(prefix)              | префикс строк                                                 |
| setAdditionalOreDictNames(префиксы) | строка... prefixes                                            |

Все эти методы делают 2 вещи: во-первых, они меняют свойство конструктора, во-вторых, они возвращают модифицированный конструктор.  
Вы можете увидеть в примере сценарии ниже, что это означает.

## На самом деле построить Материал

Прежде чем создавать материал, необходимо его создать:

```zenscript
pBuilder.build();
```

Это возвращает объект [часть](/Mods/ContentTweaker/Materials/Parts/Part/).

## Пример скрипта

```zenscript
var pBuilder = mods.contenttweaker.MaterialSystem.getPartBuilder();
pBuilder.setName("dense_gear");
pBuilder.setPartType(MaterialSystem.getPartType("item"));
var denseGearPart = pBuilder.build();

var denseIngotPart = mods.contenttweaker.MaterialSystem.getPartBuilder().setName("dense_ingot").setPartType(mods.contenttweaker.MaterialSystem.getPartType("item")).setOreDictName("superIngot").build);
```

## Примечательная информация

### Локализация материалов

Элементы, которые вы создаете с вашей новой частью, обычно называются `contenttweaker.part. artname`  
Если вы хотите, чтобы ваш товар включал название материала, вам нужно локализовать его, желательно в языковых файлах CoT, которые можно найти в `Ресурсах/contenttweaker/lang`.  
вместо названия материала вы пишете `%s`, так называемые густые шестеренки и слитки, созданные выше, выглядят следующим образом:

    contenttweaker.part.dense_gear=Dense %s Gear
    contenttweaker.part.dense_ingot=Dense %s Ingot
    

### Добавление текстуры

Элементы, которые вы создаете с помощью новой части, выглядят вам немного края.  
Если вы хотите, чтобы ваша часть имела определенную иконку, вам нужно добавить `имя компонента. ng` файл в `Ресурсы/contenttweaker/textures/items`.  
Таким образом, при появлении плотных передач текстура потребуется добавить файл с названием `gear_dense. ng` в эту папку.