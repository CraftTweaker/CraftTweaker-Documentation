# Заряженные вещи :: Инкератор

### Импорт

```zenscript
import mods.poweredthingies.Tweaker.incineratorTweaker as it;
```

### Список ключей, удаление рецептов по ключу, очистка

```zenscript
it().logKeys()
it().removeRecipe('minecraft:log') // проверьте <logKeys> вывод допустимых ключей
it().clear()
```

### Добавление рецепта

##### Подпись

```zenscript
addRecipe(input: IItemStack, мощь: Long, выходы: Array<WeightedItemStack>)
```

`Питание` представляет общее количество питательных единиц (RF, T или FE) генерируемое вводимым элементом.

##### Пример

```zenscript
it().addRecipe(<minecraft:bucket>, 3600, [<minecraft:iron_ingot> % 15]);
```

### Примечания

Все эти действия будут кэшироваться и запускаться после завершения регистрации реестра по умолчанию (в том числе от пользовательских json).