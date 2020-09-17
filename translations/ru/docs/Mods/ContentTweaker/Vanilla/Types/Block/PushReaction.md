# PushReaction

Проталкивающая реакция — это то, что происходит, когда поршни пытается нажать на блок.

# Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.PushReaction;`

## Сравнение двух реакций

Вы можете видеть, если две реакции одинаковы, используя оператор `==`.

```zenscript
if(a == b){}
```

## Статические методы

Вы можете использовать эти методы для получения объектов PushReaction:

```zenscript
mods.contenttweaker.PushReaction.normal();
mods.contenttweaker.PushReaction.destroy();
mods.contenttweaker.PushReaction.block();
mods.contenttweaker.PushReaction.ignore();
mods.contenttweaker.PushReaction.pushOnly();
```