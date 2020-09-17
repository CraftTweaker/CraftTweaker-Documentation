# Работал на вещи :: Предмет

### Импорт

```zenscript
import mods.poweredthingies.Tweaker.itemLiquefierTweaker as ilt;
```

### Список ключей, удаление рецептов по ключу, очистка

```zenscript
ilt().logKeys()
ilt().removeRecipe('liquid:fluid_lava') // проверьте <logKeys> вывод допустимых ключей
ilt().clear()
```

### Добавление рецепта

##### Подпись

```zenscript
addRecipe(input: IItemStack, output: ILiquidStack)
```

##### Пример

```zenscript
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125);
```

### Примечания

Все эти действия будут кэшироваться и запускаться после завершения регистрации реестра по умолчанию (в том числе от пользовательских json).