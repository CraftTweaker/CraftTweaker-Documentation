# Питающие вещи :: Компьютерный чайник

### Импорт

```zenscript
import mods.poweredthingies.Tweaker.compoundTweaker as ct;
```

### Список ключей, удаление рецептов по ключу, очистка

```zenscript
ct().logKeys()
ct().removeRecipe('minecraft:stone') // проверяем <logKeys> вывод допустимых ключей
ct().clear()
```

### Добавление рецепта

##### Подпись

```zenscript
addRecipe(output: IItemStack, слева: ILiquidStack?, сверху: Array<IItemStack>?, справа: ILiquidStack?, снизу: Array<IItemStack>?)
```

##### Пример

```zenscript
ct().addRecipe(<minecraft:obsidian>, <liquid:lava> * 250, [<minecraft:cobblestone>, <minecraft:cobblestone>], null, [<minecraft:cobblestone>, <minecraft:cobblestone>]);
```

### Примечания

Все эти действия будут кэшироваться и запускаться после завершения регистрации реестра по умолчанию (в том числе от пользовательских json).