# Assembly Table

*シリコンを構築する必要があります*

Class path: `mods.buildcraft.AssemblyTable`AssemblyTable</code>

## 使用

To use, import the class with `import mods.buildcraft.AssemblyTable;` at the beginning of your script.アセンブリテーブル;</code> スクリプトの先頭にあります。

## レシピを追加

`AssemblyTable.addRecipe(recipeName, output, power inputs);`

- `recipeName` (オプション) &lt;string> レシピの名前。 *ユニークでなければなりません！*
- `output` <[IItemStack](/vanilla/api/items/IItemStack)>
- `電力` &lt;int> 総電力コスト
- `inputs` <[IIngredient](/vanilla/api/items/IIngredient)[]>

```zenscript
import mods.buildcraftimport mods.buildcraft.AssemblyTable;

AssemblyTable.addRecipe("example_recipe_for_diamonds", <minecraft:diamond>, 1000, [<minecraft:coal_block>, <minecraft:redstone>]);
```

## レシピを削除する

`AssemblyTable.removeByName(name);`

- `recipeName` &lt;string> レシピの名前。

```zenscript
import mods.buildcraftimport mods.buildcraft.AssemblyTable;

AssemblyTable.removeByName("buildcraftsilicon:redstone_chipset");
```

## 既存のレシピ

### チップセット:

- `buildcraftsilicon:redstone_chipset`
- `buildcraftsilicon:iron_chipset`
- `buildcraftsilicon:gold_chipset`
- `buildcraftsilicon:quartz_chipset`
- `buildcraftsilicon:diamond_chipset`

### プラグラブル:

- `buildcraftsilicon:plug_pulsar`
- `buildcraftsilicon:ライトセンサー`
- `buildcrafttransport:facaderecipes`

### レンズ:

- `buildcraftsilicon:lens-regular`
- `buildcraftsilicon:lens-filter`
- `buildcraftsilicon:lens-regular-<color>`
- `buildcraftsilicon:lens-filter-<color>`

*Replace `<color>` with any of the following: `white`, `orange`, `magenta`, `lightblue`, `yellow`, `lime`, `pink`, `gray`, `silver`, `cyan`, `purple`, `blue`, `brown`, `green`, `red`, `black`*

### ワイヤー:

- `buildcrafttransport:wire-<color>`

*Replace `<color>` with any of the following: `white`, `orange`, `magenta`, `lightblue`, `yellow`, `lime`, `pink`, `gray`, `silver`, `cyan`, `purple`, `blue`, `brown`, `green`, `red`, `black`*

### ゲート:

- `buildcraftsilicon:gate-<operation>-<material>-no_modifier`
- `buildcraftsilicon:gate-modifier-<operation>-<material>-<modifier>`

パラメータ:

- `<operation>`: `と` または `または`
- `<material>`: `鉄`, `nether_brick`, または `金`
- `<modifier>`: `ラピス`, `クォーツ`, または `ダイヤモンド`
