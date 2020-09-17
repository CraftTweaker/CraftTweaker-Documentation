# Запитанные вещи

Поддержка нефермерских машин под управлением нефермерских машин CraftTweaker.

### Mod Info

Курсефор: <https://minecraft.curseforge.com/projects/powered-thingies>

Github: <https://github.com/faceofcat/Tesla-Powered-Thingies>

Веб-сайт: [https://www.modcrafters.net](https://www.modcrafters.net/?mod=thingies)

### Методы интеграции ТТ

Все машины, интегрированные с ТТ, поддерживают эти методы:

```zenscript
XYZ.clear() // очистит весь реестр рецептов
XYZ.logKeys() // выведет все ключи в журнале CT's
XYZ. emoveRecipe(key: String)) // удалит рецепт с этим ключом из реестра
XYZ.addRecipe(...) // добавляет новый рецепт
```

Чтобы получить класс `Tweaker` для каждой машины, вы должны использовать статические `mods.poweredthingies.Tweaker` класса.