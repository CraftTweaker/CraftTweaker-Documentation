# Материал строитель

Если вы хотите построить [материал](/Mods/ContentTweaker/Materials/Materials/Material/), вам нужен строитель материала!  
Это не сложно, не правда ли?

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.MaterialBuilder;`

## Получение такого объекта

Вы можете получить новый, чистый строитель с помощью [пакета MaterialSystem](/Mods/ContentTweaker/Materials/MaterialSystem/):

```zenscript
var mBuilder = mods.contenttweaker.MaterialSystem.getMaterialBuilder();
```

## Установить свойства материала

Вы можете установить эти свойства

| ZenMethod               | Параметр                                                         |
| ----------------------- | ---------------------------------------------------------------- |
| setName(имя)            | название строки                                                  |
| setColor(color)         | int цвет                                                         |
| setColor(color)         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) color |
| setHasEffect(hasEffect) | булевый эффект                                                   |

Все эти методы делают 2 вещи: во-первых, они меняют свойство конструктора, во-вторых, они возвращают модифицированный конструктор.  
Вы можете увидеть в примере сценарии ниже, что это означает.

## На самом деле построить Материал

Прежде чем создавать материал, необходимо его создать:

```zenscript
mBuilder.build();
```

Это возвращает объект [IMaterial](/Mods/ContentTweaker/Materials/Materials/Material/).

## Пример скрипта

```zenscript
импорт mods.contentTweaker.MaterialSystem;

var builder = MaterialSystem.getMaterialBuilder();
builder.setName("Urubuntu");
builder.setColor(000151);
builder.setHasEffect(false);
val urubuntu = builder.build();

val arakantara = MaterialSystem.getMaterialBuilder().setName("Arakantara").setColor(15592941).setHasEffect(true).build();
```