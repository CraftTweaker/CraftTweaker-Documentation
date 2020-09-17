# 工作台

## 配方类型

合成表有三种配方类型：

- **Shapeless:** 一个无耻的配方是一个在制造网格中输入项的位置不起作用的配方。
- **伸缩：** 形状配方是一种必须精确处方的配方。
- **形状镜像：** 镜像配方就像形状配方，但沿着水平轴或垂直轴镜像配方。

## 添加配方

_添加配方时，确保配方名称唯一！_

### 添加无缝配方

`craftingTable.addShapeless(recipeName, output, components, recipeFunction)；`

- `recipename` &lt;字符串>
- `输出` <[IItemStack](/vanilla/api/items/IItemStack)>
- `成分` <[IIngredient](/vanilla/api/items/IIngredient)[]>
- `recipeFunction` (可选) <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

在合成桌子上添加 [个无形的](#recipe-types) 配方。 既然 [共享](#recipe-types) 配方忽略了输入项的位置，创建配方时的项目顺序也不重要。

[无缝](#recipe-types) 配方最多可以有 9 个输入. 但投入4或更少的人也可以在2x2库存网格中制作。

制作桌面配方也可以输出超过 1 个数量的输出。 这可以通过在输出项上使用 [IItemStack 乘数运算符](/vanilla/api/items/IItemStack/#mul) 来实现。

```zenscript
制作。 ddShapeless("shapeless_example_1", <item:minecraft:grass>, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>) );

// 无声配方最多可以有 9 个输入
// 这也表明可以使用一个以上的输出。 在此示例中，将输出8只草。
craftingTable.addShapeless("shapeless_example_2", <item:minecraft:grass> * 8, [<item:minecraft:wheat_seeds>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>, <item:minecraft:dirt>]);
```

_请参阅 [使用配方函数](#using-recipe-functions) 以了解如何使用配方函数的实例。_

### 添加形状和形状的镜像配方

`craftingTable.addShaped(recipeName, output, components, recipeFunction);`

`craftingTable.addShapedMirrored(recipeName, output, components, recipeFunction);`

- `recipename` &lt;字符串>
- `输出` <[IItemStack](/vanilla/api/items/IItemStack)>
- `成分` <[IIngredient](/vanilla/api/items/IIngredient)[][]>
- `recipeFunction` (可选) <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

添加一个 [形状](#recipe-types) (或 [镜像](#recipe-types), 取决于函数) 配方到制作表。 创建配方时的项目顺序决定了每个项目在制作网格中的地位。

使配方变成一个 [形状镜像的](#recipe-types) 配方，在将项目添加到制作网格时允许玩家有更大的灵活性。

[形状](#recipe-types) and [形状镜像](#recipe-types) 的配方可以在 2x2 (背包) 或 3x3 制作网格中工作。

制作桌面配方也可以输出超过 1 个数量的输出。 这可以通过在输出项上使用 [IItemStack 乘数运算符](/vanilla/api/items/IItemStack/#mul) 来实现。

```zenscript
// 添加一个形状的配方
制作。 ddShaped("shaped_example_1", <item:minecraft:arrow>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);

// 添加一个形状的2x2配方(这也可以作为镜像完成)
制作。 ddShaped("shaped_example_2", <item:minecraft:diamond_axe>, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:diamond>, <item:minecraft:stick>]
];

// 添加一个造型镜像配方
制造配方。 ddShapedMirrored("shaped_mirror_example_1", <item:minecraft:arrow> * 2, [
    [<item:minecraft:diamond>, <item:minecraft:diamond>],
    [<item:minecraft:air>, <item:minecraft:flint>],
    [<item:minecraft:air>, <item:minecraft:flint>]
]);
```

_请参阅 [使用配方函数](#using-recipe-functions) 以了解如何使用配方函数的实例。_

## 使用配方函数

配方函数允许以程序方式确定输出。 当您需要某些输入项的信息，例如项目的损坏或其它NBT数据时，这可能特别有用。

_由于形状和形状的镜像配方相似，示例将仅包括形状配方。 您可以使用 `添加` 来处理任何示例与使用 `addShapedMirrored` 同样的示例。_

### 在无缝配方中使用 RecipeFunctionAray

`recipeFunction` <[RecipeFunctionArray](/vanilla/api/recipe/RecipeFunctionArray)>

`(用作IItemStack, 输入 IItemStack[]) =>{};`

- `常用输出` <[IItemStack](/vanilla/api/items/IItemStack)>
- `输入` <[IItemStack](/vanilla/api/items/IItemStack)[]> 输入的数组订购与原始配方定义的相同的

```zenscript
导入 craftbiner.api.item.IItemStack;

制作。 ddShapeless("shapeless_func_example_1", <item:minecraft:diamond> * 9, [<item:minecraft:dirt>, <item:minecraft:stick>], (usualOut as IItemStack, 输入为 IItemStack[]) => ~
    // 检查是否 <item:minecraft:dirt> 有一个“完全真实的钻石块”的显示名称
    if (input[0]) isplayname == "完全真正的钻石块") 然后
        // 返回 <item:minecraft:diamond> * 9
        return usalOut;
    }

    // 否则， 返回 <item:minecraft:clay> 显示名称为“钻石”
    返回 <item:minecraft:clay>etDisplayName("Diamond");
});
```

### 在 Shaped/Mirrored 配方中使用 RecipeFunctionMatrix

`recipeFunction` <[RecipeFunctionMatrix](/vanilla/api/recipe/RecipeFunctionMatrix)>

`(用作IItemStack, 输入 IItemStack[]) =>{};`

- `常用输出` <[IItemStack](/vanilla/api/items/IItemStack)>
- `输入` <[IItemStack](/vanilla/api/items/IItemStack)[] > 输入数组订购与原配方定义相同。 可以通过定义行找到输入框， 然后列(`输入[0][1]` 以获取第一行、第二列中的物品)。

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

### 高级使用

#### 函数作为变量

配方函数可以分配给一个变量，这样您可以轻松地将同一个函数变量变量。

舒适度：

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

旋转/旋转：

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

## 删除配方

### 按名称删除配方

`craftingTable.removeByname(recipeName)；`

- `recipename` &lt;字符串>

删除匹配所提供名称的配方。

```zenscript
craftingTable.removeByname("minecraft:sugar_from_sugar_cane");
```

### 通过输出移除配方

`craftingTable.removeRecipe(输出)；`

- `输出` <[IItemStack](/vanilla/api/items/IItemStack)>

移除输出结果为所提供的 [IItemStack](/vanilla/api/items/IItemStack) 的所有配方。

```zenscript
craftingTable.removeRecipe(<item:minecraft:stick>)；
```

### 通过Mod ID移除配方

`craftingTable.removeByModed(modId)；`

- `modId` &lt;字符串>

删除由提供的模组添加的所有配方。

```zenscript
craftingTable.removeByModed("minecraft");
```

#### 从 Mod ID 移除中排除配方

`craftingTable.removeByMod(modId, exclusionfilter);`

- `modId` &lt;字符串>
- `排除过滤器` <[累积筛选器](/vanilla/api/recipe/Recipefilter)>
  - `名称` &lt;字符串> 正在检查的当前配方的名称。 _模组ID不会被包含_

删除由提供的模组添加的所有配方。 如果排除过滤器结果返回配方名称为 true，则排除配方。

```zenscript
craftingTable.removeByModed("minecraft", (name) => }
    // 如果配方名称匹配"minecraft:red_bed_from_whit_bed"
    return name == "red_bed_from_whit_bed";
});
```

还可以排除多种配方。 可以这样做的一种方法如下：

```zenscript
// 一组配方名称作为字符串
var minecraftExclusions as string[…]= [
    "acacia_Slab",
    "red_bed_from_whit_bed",
    "sugar_from_sugar_cane"
]；

制作。 emoveByModed("minecraft", (name) => 。
    minecraftExclusions中的返回名称；
})；
```

### 通过正则表达式删除配方

`craftingTable.removeByRegex(regex)；`

- `正则表达式` &lt;字符串>

删除名称匹配正则表达式字符串的所有配方。

```zenscript
// 删除诸如"minecraft:green_carpet"、"minecraft:lime_carpet_from_whit_carpet"和"minecraft:whit_carpet"
craftingTable.removeByRegex(“minecraft:.*_carpet");
```

### 删除所有配方

`craftingTable.removeAll();`

删除所有制造桌配方。

```zenscript
craftingTable.removeAll();
```
