# Обработчик руд

The Ore Dictionary Bracket Handler provides you access to the Ore Dictionaries in the game.

Словарь Ore упоминаются в Ore Dictionary Bracket Handler следующим образом:

```zenscript
<ore:orename>
<ore:ingotIron>
```

Возвращает [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/), если `*` в вызове, иначе возвращает список `<IOreDictEntry>` Если oreDictionary еще не в игре, создаст новый и пустой словарь с заданным именем и верните его. Пожалуйста, обратитесь к словарю [руды](/Vanilla/OreDict/IOreDictEntry/) Entry для получения дополнительной информации о том, что делать с ними.

# Получение всех зарегистрированных словарей

Вы можете использовать следующую команду для вывода всех зарегистрированных руд словарей в журнале CraftTweaker

    /ct oredict
    /crafttweaker oredict