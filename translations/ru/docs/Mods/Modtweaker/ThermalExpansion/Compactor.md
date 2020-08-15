# Компактор

## Пакет

`mods.thermalexpansion.Compactor`

Компатор поддерживает 4 типа модификаторов:

    Мятное
    Нажмите
    Хранилище
    Снаряжение
    

## Мята

Мятный модификатор изменяет рецепты, зарегистрированные в карте рецептов `COIN` в Thermal Expansion.

Заметьте, что эти рецепты требуют Нумизматического Пресса Augment.

### Сложение

```zenscript
mods.thermalexpansion.Compactor.addMintRecipe(выход IItemStack, вход IItemStack, внутренняя энергия);

mods.thermalexpansion.Compactor.addMintRecipe(<minecraft:sand>, <minecraft:stick>, 1500);
```

### Удаление

```zenscript
mods.thermalexpansion.Compactor.removeMintRecipe(IItemStack);

mods.thermalexpansion.Compactor.removeMintRecipe(<thermalfoundation:material:167>);
```

## Пресса

Модификатор прессы изменяет рецепты, не зарегистрированные в `PLATE`, `COIN`или `GEAR` карты рецептов в Thermal Expansion.

Эти рецепты не требуют конкретного дополнения.

### Сложение

```zenscript
mods.thermalexpansion.Compactor.addPressRecipe(IItemStack, IItemStack, int energy);

mods.thermalexpansion.Compactor.addPressRecipe(<minecraft:sand>, <minecraft:apple>, 1500);
```

### Удаление

```zenscript
mods.thermalexpansion.Compactor.removePressRecipe(IItemStack);

mods.thermalexpansion.Compactor.removePressRecipe(<thermalfoundation:material:167>);
```

## Хранилище

Модификатор хранилища изменяет рецепты, зарегистрированные в карте рецептов `PLATE` в Thermal Expansion.

Эти рецепты не требуют конкретного дополнения, и, как представляется, используются только для пластин.

### Сложение

```zenscript
mods.thermalexpansion.Compactor.addStorageRecipe(выход IItemStack, вход IItemStack, внутренняя энергия);

mods.thermalexpansion.Compactor.addStorageRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Удаление

```zenscript
mods.thermalexpansion.Compactor.removeStorageRecipe(IItemStack);

mods.thermalexpansion.Compactor.removeStorageRecipe(<thermalfoundation:material:167>);
```

## Снаряжение

Модификатор Gear изменяет рецепты, зарегистрированные в карте рецептов `GEAR` в Thermal Expansion.

Обратите внимание, что эти рецепты требуют обработки Die Augment.

### Сложение

```zenscript
mods.thermalexpansion.Compactor.addGearRecipe(выход IItemStack, вход IItemStack, внутренняя энергия);

mods.thermalexpansion.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Удаление

```zenscript
mods.thermalexpansion.Compactor.removeGearRecipe(IItemStack);

mods.thermalexpansion.Compactor.removeGearRecipe(<thermalfoundation:material:167>);
```