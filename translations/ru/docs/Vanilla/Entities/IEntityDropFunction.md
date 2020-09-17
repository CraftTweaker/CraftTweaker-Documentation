# Функция IEntityDropФункция

IEntityDropFunction вызывается всякий раз, когда связанная сущность убивается. Оставьте его до вашего воображения, что вы можете сделать с этим:

## Импортирование шакэ

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт crafttweaker.entity.IEntityDropFunction;`

## Параметры

IEntityDropFunction является функцией со следующими параметрами:

- [IEntity](/Vanilla/Entities/IEntity/) сущность → сущность, которая только что погибла.
- [IDamageSource](/Vanilla/Damage/IDamageSource/) dmgSourve → Источник смерти сущности.

Функция должна вернуть [IItemStack](/Vanilla/Items/IItemStack/), или `null`.