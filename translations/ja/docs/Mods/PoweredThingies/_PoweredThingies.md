# パワードThingies

動力Thingiesの非農業機械CraftTweakerサポート。

### Mod Info

Curseforge: [https://minecraft.cursseforge.com/projects/powered-thingies](https://minecraft.curseforge.com/projects/powered-thingies)

Github: <https://github.com/faceofcat/Tesla-Powered-Thingies>

ウェブサイト: [https://www.modcrafters.net](https://www.modcrafters.net/?mod=thingies)

### CT 積分方法

CTと統合されたすべてのマシンは以下の方法をサポートしています:

```zenscript
XYZ.clear() // will clear the entire recipe registry
XYZ.logKeys() // will output all keys in that registry to CT's log
XYZ.removeRecipe(key: String)) // will remove the recipe with that key from registry
XYZ.addRecipe(...) // adds a new recipe
```

マシンごとに `Tweaker` クラスを取得するには、静的な `mods.poweredthingies.Tweaker` クラスを使用します。