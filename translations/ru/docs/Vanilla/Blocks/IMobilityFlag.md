# Флаг мобильности

Интерфейс IMobilityFlag позволяет вам получить [IBlockState's](/Vanilla/Blocks/IBlockState/) возможные флаги мобильности.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт crafttweaker.block.IMobilityфлаг;`

## ZenMethods

#### Совпадения

Вы можете проверить, совпадают ли два объекта IMobilityFlag друг с другом:  
Возвращает доску.

```zenscript
флаг One.matches(другие);
```

## Перечисление

Интерфейс MobilityFlag имеет 5 статических методов, каждый из которых возвращает объект IMobilityFlag .

```zenscript
crafttweaker.block.MobilityFlag.normal()
crafttweaker.block.MobilityFlag.destroy()
crafttweaker.block.MobilityFlag.block()
crafttweaker.block.MobilityFlag.ignore()
crafttweaker.block.MobilityFlag.pushOnly()
```