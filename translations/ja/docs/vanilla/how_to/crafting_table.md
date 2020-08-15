# 作業台

## レシピタイプ

テーブル制作には3種類のレシピがあります。

- **シェイプレス:** シェイプレスレシピは、クラフトグリッド内の入力アイテムの位置が問題にならないレシピです。
- **形状:** 形状のレシピは、アイテムの位置が正確でなければならないレシピです。
- **鏡面ミラー:** 鏡面レシピは、形状のレシピのようなものですが、水平または垂直軸に沿ってレシピをミラーします。

## レシピを追加

_レシピを追加するときは、レシピ名が一意であることを確認してください!_

### シェイプレスレシピの追加

`craftingTable.addShapeless(recipeName, output, 食材, recipeFunction);`

- `recipeName` &lt;string>
- `出力` <[IItemStack](/vanilla/api/items/IItemStack)>
- `成分` <[IIngredient](/vanilla/api/items/IIngredient)[]>
- `recipeFunction` (任意) <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

[シェイプレス](#recipe-types) レシピをクラフトテーブルに追加します。 [シェイプレス](#recipe-types) レシピは入力項目の位置を無視するため、レシピを作成する際の項目の順序も関係ありません。

[Shapeless](#recipe-types) レシピには最大で 9 個の入力があります。 4つ以下のインプットも2x2のインベントリグリッドで作ることができます

作業台レシピは、出力アイテムの1個以上を出力することもできます。 これは出力項目の [IItemStack multipcation 演算子](/vanilla/api/items/IItemStack/#mul) を使用することで実現できます。

```zenscript
craftingTable.addShapeless("shapeless_example_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>]);

// A shapeless recipe can have up to 9 inputs
// This also demonstrates that more than one output can be used. この例では、8つの草が出力されます。
craftingTable.addShapeless("shapeless_example_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_レシピ関数の使用方法については、 [レシピ関数の使用](#using-recipe-functions) を参照してください。_

### 形状と形状の鏡像レシピの追加

`craftingTable.addShaped(recipeName, output, 食材, recipeFunction);`

`craftingTable.addShapedMirrored(recipeName, output, 食材, recipeFunction);`

- `recipeName` &lt;string>
- `出力` <[IItemStack](/vanilla/api/items/IItemStack)>
- `成分` <[IIngredient](/vanilla/api/items/IIngredient)[][]>
- `recipeFunction` (任意) <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

[形の](#recipe-types) （または [ミラーリング](#recipe-types)）レシピをクラフトテーブルに追加します。 レシピを作成する際のアイテムの順序は、作成グリッド内の各アイテムの位置を決定します。

代わりにレシピを [形のミラーリング](#recipe-types) レシピにすることで、アイテムをクラフトグリッドに追加する際にプレーヤーにより柔軟性を高めることができます。

Both [shaped](#recipe-types) and [shaped mirrored](#recipe-types) recipes can be made to work in a 2x2 (inventory) or 3x3 crafting grid.

作業台レシピは、出力アイテムの1個以上を出力することもできます。 これは出力項目の [IItemStack multipcation 演算子](/vanilla/api/items/IItemStack/#mul) を使用することで実現できます。

```zenscript
// Adding a shaped recipe
craftingTable.addShaped("shaped_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// Adding a shaped 2x2 recipe (this can also be done as mirrored)
craftingTable.addShaped("shaped_example_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
]);

// Adding a shaped mirrored recipe
craftingTable.addShapedMirrored("shaped_mirror_example_1", <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_レシピ関数の使用方法については、 [レシピ関数の使用](#using-recipe-functions) を参照してください。_

## レシピ関数の使用

レシピ関数は、プログラムによって決定された出力を可能にします。 これは、項目の損傷やその他のNBTデータのような入力項目の情報が必要な場合に特に便利です。

_形状と形状のミラーレシピが似ているため、例には形状のレシピのみが含まれます。 `addShaped` を使用して、 `addShapedMirrored` と同じように扱うことができます。_

### シェイプレスレシピで RecipeFunctionArray を使用する

`recipeFunction` <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(通常は IItemStack, inputs as IItemStack[]) =>{};`

- `normalOut` <[IItemStack](/vanilla/api/items/IItemStack)>
- `入力` <[IItemStack](/vanilla/api/items/IItemStack)[]> 元のレシピで定義されているのと同じ順序の入力配列

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (usualOut as IItemStack, inputs as IItemStack[]) => {
    // Checks if <item:minecraft:dirt> has a display name of "totally real diamond block"
    if (inputs[0].displayName == "totally real diamond block") {
        // Returns <item:minecraft:diamond> * 9
        return usualOut;
    }

    // Otherwise, return <item:minecraft:clay> with a display name of "Diamond"
    return <item:minecraft:clay>.setDisplayName("Diamond");
});
```

### 形状/鏡像レシピでのレシピ関数マトリクスの使用

`recipeFunction` <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(通常は IItemStack, inputs as IItemStack[][] =>{};`

- `normalOut` <[IItemStack](/vanilla/api/items/IItemStack)>
- `入力` <[IItemStack](/vanilla/api/items/IItemStack)[][]> 元のレシピで定義されているのと同じ順序で入力された配列。 行を定義することで入力が見つかります。 次に、列(`は[0]を入力します[1]` は、最初の行、2番目の列の項目を取得します)。

```zenscript
import crafttweaker.api.item.IItemStack;

craftingTable.addShaped("shapeed_func_example_1", <item:minecraft:diamond_block>, [
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
        [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
    ], (usualOut as IItemStack, inputs as IItemStack[][]) => {
        var counter = 0;
        // Checks if all <item:minecraft:clay_ball> has a display name of "Diamond"
        for row in inputs {
            for recipeItem in row {
                if (<item:minecraft:clay_ball>.matches(recipeItem) && recipeItem.displayName == "Diamond") {
                    // If the recipe item is <item:minecraft:clay_ball> and has a name of "Diamond" increment the counter
                    counter++;
                }
            }
        }

        // If we have 8 <item:minecraft:clay_ball> with a name of "Diamond"
        if (counter == 8) {
            if (inputs[1][1].displayName == "Special Diamond") {
                // If <item:minecraft:diamond> has a display name of "Special Diamond"
                // Return 2 <item:minecraft:diamond_block>
                return usualOut * 2;
            } else {
                // Returns <item:minecraft:diamond_block>
                return usualOut;
            }
        }

        // Otherwise, return <item:minecraft:clay> with a display name of "Diamond Block"
        return <item:minecraft:clay>.setDisplayName("Diamond Block");
    });
```

### 高度な使い方

#### 変数としての関数

レシピ関数を変数に割り当てることで、複数のレシピで同じ機能を簡単に選択できます。

シェイプレス:

```zenscript
import crafttweaker.api.item.IItemStack;

var exampleShapelessRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[]) as IItemStack = (usualOut, inputs) => {
    if(inputs[0].displayName == "totally real diamond block" ){
        return usualOut;
    }

    return <item:minecraft:clay>.setDisplayName("Diamond");
};

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:dirt>
craftingTable.addShapeless("shapeless_varfunc_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], exampleShapelessRecipeVarFunction);

// inputs[0] in exampleShapelessRecipeVarFunction will be <item:minecraft:cobblestone>
craftingTable.addShapeless("shapeless_varfunc_example_2", <item:minecraft:diamond> * 9, [<item:minecraft:cobblestone>, <item:minecraft:dirt>], exampleShapelessRecipeVarFunction);
```

形状/鏡像:

```zenscript
import crafttweaker.api.item.IItemStack;

var exampleShapedRecipeVarFunction as function(usualOut as IItemStack, inputs as IItemStack[][]) as IItemStack = (usualOut as IItemStack, inputs as IItemStack[][]) => {
    var counter = 0;
    // Checks if all <item:minecraft:clay_ball> has a display name of "Diamond"
    for row in inputs {
        for recipeItem in row {
            if (<item:minecraft:clay_ball>.matches(recipeItem) && recipeItem.displayName == "Diamond") {
                // If the recipe item is <item:minecraft:clay_ball> and has a name of "Diamond" increment the counter
                counter++;
            }
        }
    }

    // If we have 8 <item:minecraft:clay_ball> with a name of "Diamond"
    if (counter == 8) {
        if (inputs[1][1].displayName == "Special Diamond") {
            // If <item:minecraft:diamond> has a display name of "Special Diamond"
            // Return 2 <item:minecraft:diamond_block>
            return usualOut * 2;
        } else {
            // Returns <item:minecraft:diamond_block>
            return usualOut;
        }
    }

    // Otherwise, return <item:minecraft:clay> with a display name of "Diamond Block"
    return <item:minecraft:clay>.setDisplayName("Diamond Block");
};

craftingTable.addShaped("shapeed_func_example_3", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);

craftingTable.addShaped("shapeed_func_example_4", <item:minecraft:diamond_block>, [
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:diamond>, <item:minecraft:clay_ball>],
    [<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <item:minecraft:clay_ball>]
], exampleShapedRecipeVarFunction);
```

## レシピを削除する

### 名前でレシピを削除

`craftingTable.removeByName(recipeName);`

- `recipeName` &lt;string>

指定された名前に一致するレシピを削除します。

```zenscript
craftingTable.removeByName("minecraft:sugar_from_sugar_cane");
```

### 出力によるレシピの削除

`craftingTable.removeRecipe(output);`

- `出力` <[IItemStack](/vanilla/api/items/IItemStack)>

出力結果が与えられた [IItemStack](/vanilla/api/items/IItemStack) であるすべてのレシピを削除します。

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>);
```

### Mod ID によるレシピの削除

`craftingTable.removeByModid(modId);`

- `modId` &lt;string>

提供された Mod によって追加されたすべてのレシピを削除します。

```zenscript
craftingTable.removeByModid("minecraft");
```

#### Mod ID の削除からレシピを除外

`craftingTable.removeByModid(modId, exclusonFilter);`

- `modId` &lt;string>
- `exclusonFilter` <[RecipeFilter](/vanilla/api/recipe/RecipeFilter)>
  - `name` &lt;string> チェック中の現在のレシピの名前。 _MODIDは含まれません_

提供された Mod によって追加されたすべてのレシピを削除します。 exclusonFilter の結果がレシピ名に true を返した場合、レシピは除外されます。

```zenscript
craftingTable.removeByModid("minecraft", (name) => {
    // レシピの名前が "minecraft:red_bed_from_white_bed" と一致するか確認します。
    return name == "red_bed_from_white_bed";
});
```

複数のレシピを除外することもできます。 これを行うことができる1つの方法は次のとおりです。

```zenscript
// An array of recipe names as strings
var minecraftExclusions as string[] = [
    "acacia_slab",
    "red_bed_from_white_bed",
    "sugar_from_sugar_cane"
];

craftingTable.removeByModid("minecraft", (name) => {
    return name in minecraftExclusions;
});
```

### 正規表現によるレシピの削除

`craftingTable.removeByRegex(regex);`

- `regex` &lt;string>

名前が正規表現文字列と一致するレシピをすべて削除します。

```zenscript
// "minecraft:green_carpet", "minecraft:lime_carpet_from_white_carpet", and "minecraft:white_carpet"
craftingTable.removeByRegex("minecraft:.*_carpet");
```

### すべてのレシピを削除

`craftingTable.removeAll();`

すべてのクラフトテーブルレシピを削除します。

```zenscript
craftingTable.removeAll();
```
