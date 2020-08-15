# ITICMaterialDefinition

An ITICMaterialDefinition is an [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) definition.  
You can use this to retrieve some information on the [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) object.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импортировать modtweaker.tconstruct.ITICMaterialDefinition;`

## Получение такого объекта

Вы можете получить ITICMaterialDefinition от [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `definition` ZenGetter:

```zenscript
val def = <ticmat:stone>.definition;
```

## Геттеры

| Геттер      | Возвращаемый тип | Описание                      |
| ----------- | ---------------- | ----------------------------- |
| name        | string           | Внутреннее название материала |
| displayName | string           | Локализованное имя материала  |