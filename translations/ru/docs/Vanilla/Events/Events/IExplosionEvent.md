# IExplosion-событие

Этот интерфейс расширен всеми взрывовыми событиями. Это означает, что вы можете использовать получатели ниже для доступа к данным о позиции.

## Импорт класса
Может потребоваться [импортировать](/AdvancedFunctions/Import/) класс, чтобы избежать ошибок.  
`импорт crafttweaker.event.IExplosionEvent;`

## Геттеры

| name     | type                                   |
| -------- | -------------------------------------- |
| world    | [IWorld](/Vanilla/World/IWorld/)       |
| position | [IBlockPos](/Vanilla/World/IBlockPos/) |
| х        | double                                 |
| у        | double                                 |
| z        | double                                 |
