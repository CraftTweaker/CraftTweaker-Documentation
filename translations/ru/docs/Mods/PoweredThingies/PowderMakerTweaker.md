# Powered Thingies :: Powder Maker

### Импорт

```zenscript
import mods.poweredthingies.Tweaker.powderMakerTweaker as pmt;
```

### Список ключей, удаление рецептов по ключу, очистка

```zenscript
pmt().logKeys()
pmt().removeRecipe('minecraft:gravel') // проверьте <logKeys> вывод допустимых ключей
pmt().clear()
```

### Добавление рецепта

##### Подпись

```zenscript
addRecipe(input: IItemStack, outputs: Array<WeightedItemStack>)
```

##### Пример

```zenscript
pmt().addRecipe(<minecraft:bucket>, [<minecraft:iron_ingot> % 100, <minecraft:iron_ingot> % 12, <minecraft:iron_ingot> % 12]);
```

### Примечания

Все эти действия будут кэшироваться и запускаться после завершения регистрации реестра по умолчанию (в том числе от пользовательских json).