# MCAxisAlignedBB

Объект MineCraft Aligned Boundary Box позволяет изменить границы [блока](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) Границы до данной фигуры.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импортировать mods.contenttweaker.AxisAlignedBB;`

## Вызов MCAxisAlignedBB объекта

Такой объект можно получить используя свойство [Block's](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) `axisAlignedBB` Свойства.  
Или вы можете использовать этот пакет для создания нового объекта MCAxisAlignedBBB:

```zenscript
AxisAlignedBB.create(двойная минута, двойная минута, двойной минута, двойной макс. макс. макс. двойной maxZ);
```

Все параметры этой функции удваиваются между 0 и 1!

## Свойства ZenProperties

Вы можете получить и установить каждое свойство, используя `getProperty()` или `object.property`.

| ЗенСобственность | Тип    |
| ---------------- | ------ |
| минХ             | double |
| minY             | double |
| minZ             | double |
| maxX             | double |
| макс. Y          | double |
| maxZ             | double |