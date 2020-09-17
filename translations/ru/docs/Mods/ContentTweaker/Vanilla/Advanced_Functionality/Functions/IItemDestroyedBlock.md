# Разрушен IItemBlock

Функция IItemDestroyedBlock может быть добавлена к [предмету](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) и выполняется всякий раз, когда вы пытаетесь сломать блок с помощью поддерживаемого предмета.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.IItemDestroyedBlock;`

## Параметры

IItemDestroyedBlock является функцией со следующими параметрами:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) стек → предмет.
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → мир, в котором это происходит в
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → Состояние добываемого блока.
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) бак → Где это происходит?
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) сущность → Кто/Какой мин?

Функция должна возвращать логическое значение `-истина` , если процесс blockBreaking успешно завершён, и `false` , если он ain't.