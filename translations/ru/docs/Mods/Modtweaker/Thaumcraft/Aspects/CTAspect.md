# Аспект CTAspect

CTAspect — это аспект, лежащий в основе [стека сторон](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/), похожий на [IItemDefinition](/Vanilla/Items/IItemDefinition/) лежит в основе [IItemStack](/Vanilla/Items/IItemStack/).

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт thaumcraft.aspect.CTAspect;`

## Получение такого объекта

Вы можете получить объект CTAspect от [CTAspectStack](/Mods/Modtweaker/Thaumcraft/Aspects/CTAspectStack/):

```zenscript
val aspect = <aspect:ignis>.internal;
```

## ZenGetters и ZenSetters

| Название      | isGetter | isSetter | Тип    |
| ------------- | -------- | -------- | ------ |
| ЧатКоло**у**р | ✔        | ✔        | string |
| имя           | ✔        |          | string |