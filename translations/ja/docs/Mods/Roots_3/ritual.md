### クラス

```zenscript
import mods.roots.Ritual;
```

#### メソッド

```zenscript
void modifyRitual(
  string name,         // the name of the ritual whose ingredients you wish to modify
  IIngredient[] inputs // a list of five ingredients (no more, no less)
);
```

* * *

### 使用例

```zenscript
import mods.roots.Ritual;

// Changes the ingredients required to perform the windwall ritual
Ritual.modifyRitual("ritual_windwall", [<minecraft:feather>, <minecraft:glass>, <roots:cloud_berry>, <roots:cloud_berry>, <minecraft:web>]);
```