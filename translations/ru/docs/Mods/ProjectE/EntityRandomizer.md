# Случайный мастер

Добавление и удаление сущностей из камня философа Проекта случайным образом использует снаряд [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/).

Примечание: Этот [IEntityDefinition](/Vanilla/Entities/IEntityDefinition/) должен быть для живого объекта.

## Добавление

### добрый мир

```zenscript
mods.projecte.EntityRandomizer.addPeaceful(IEntityDefinition entityDefinition);

// Позволяет превращать мирных существ в зомби. 
mods.projecte.EntityRandomizer.addPeaceful(<entity:minecraft:zombie>);
```

### addMob

```zenscript
mods.projecte.EntityRandomizer.addMob(IEntityDefinition entityDefinition);

// Позволяет превращать враждебные мобы в свиньи.
mods.projecte.EntityRandomizer.addMob(<entity:minecraft:pig>);
```

## Удаление

### устранять Мирный

```zenscript
mods.projecte.EntityRandomizer.removePeaceful(IEntityDefinition entityDefinition);

// останавливает превращение мирных мобов в свиньи.
mods.projecte.EntityRandomizer.removePeaceful(<entity:minecraft:pig>);
```

### removeMob

```zenscript
mods.projecte.EntityRandomizer.removeMob(IEntityDefinition entityDefinition);

// Остановка враждебных мобов, способных превращаться в зомби.
mods.projecte.EntityRandomizer.removeMob(<entity:minecraft:zombie>);
```

### очищенные

```zenscript
// Удаляет все рандомизированные мирные мобы, в том числе те, которые зарегистрированы CraftTweaker перед этим вызовом.
EntityRandomizer.clearfuls();
```

### clearMobs

```zenscript
// Удаляет все рандомизированные записи мобов противника, в том числе те, которые зарегистрированы CraftTweaker перед этим вызовом.
mods.projecte.EntityRandomizer.clearMobs();
```