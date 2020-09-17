# Питающие вещи :: Продукт производитель

### Импорт

```zenscript
import mods.poweredthingies.Tweaker.itemCompoundProducerTweaker as icp;
```

### Список ключей, удаление рецептов по ключу, очистка

```zenscript
icp().logKeys()
icp().removeRecipe('minecraft:mossy_cobblestone') // проверьте <logKeys> вывод допустимых ключей 
icp().clear()
```

### Добавление рецепта

##### Подпись

```zenscript
addRecipe(inputStack: IItemStack, inputFluid: ILiquidStack, result: IItemStack)
```

##### Пример

```zenscript
icp().addRecipe(<minecraft:cobblestone>, <liquid:water> * 125, <minecraft:mossy_cobblestone>);
```

### Примечания

Все эти действия будут кэшироваться и запускаться после завершения регистрации реестра по умолчанию (в том числе от пользовательских json).