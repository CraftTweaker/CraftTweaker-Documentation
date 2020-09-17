# МТП

ICTPlayer — это специальный [IPlayer](/Vanilla/Players/IPlayer/) объект.  
Это означает, что все [методы IPlayer](/Vanilla/Players/IPlayer/) также доступны на этом объекте!

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт mods.contenttweaker.Player;`

## ZenMethods

`IMutableItemStack getHeldItem(Hand hand);`

Параметры:

- [Рука](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) → Главный или Выключен рукой

Возвращает [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) удерживаемый в данной [руке](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/).