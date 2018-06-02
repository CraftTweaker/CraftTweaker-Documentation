# 配方函数


# IRecipeFunction（合成函数）
一些配方支持通过编程决定输出的自定义函数。
当你需要一些输入物品的信息时，例如耐久值，显得尤为重要。
这就是所谓的IRecipeFunction。

## 修复镐的例子

```
val diaPick = <minecraft:diamond_pickaxe>;

//我们同样先写出输出
recipes.addShapeless("pickrepair",diaPick,

//接着是输入函数，其中有一处变化——我们标记了钻石镐，这样可以在接下来的函数中使用
[diaPick.anyDamage().marked("mark"),<minecraft:diamond>],

//现在我们开始声明这个函数。
//它需要3个参数，一个是输出，一个是输入，还有一个是合成信息。
//但我们只需要输出参数。
function(out, ins, cInfo){

	//接下来我们返回一个耐久为0或者现有耐久-10（取两个耐久值中的最大值）的镐子。这是用来防止负的耐久值。
	return ins.mark.withDamage(max(0,ins.mark.damage - 10));
},
//我们不需要recipeAction，所以将它设置为null（空）
null);
```

## 如何创建IRecipeFunction

正如你在上面的例子中所看到的，它是一个有3个参数的函数： 
你不一定要这样称呼它们，你可以随便命名。

`out` 类型为IItemStack，是合成的输出。  
`ins` 是一个映射。它使用键作为标记，标记的输入作为为值。 
`cInfo` 类型为ICraftingInfo

The function must return the IItemStack that the recipe should output.

You can invalidate a recipe by returning `null` so it can't be crafted under certain conditions.

Modifying the `ins` here is a bad idea, this function triggers for each change in the crafting grid, not when actually pulling out the result.

# IRecipeAction

然而CraftTweaker所能做到的已经超过了简单地使用函数计算你的输出。
使用IRecipeAction函数，你还可以决定当玩家合成物品是会发生的事。
IRecipeAction对象在IRecipeFunction之后！

```
val stone = <minecraft:stone>;

recipes.addShapeless("experiencestone",stone,[stone,stone,stone,stone],
//IrecipeFunction仅仅返回输出，我们现在对它不感兴趣
function(out,ins,cInfo){
	return out;
},
//IRecipeAction
function(out,cInfo,player){
	player.xp += 1;
});
```

这会每一此给合成这个配方的玩家一级经验
又是一个有三个参数的函数
`out` 类型为IItemStack，是合成的输出。
`cInfo` 类型为ICraftingInfo对象
`player` 类型为[IPlayer](/Vanilla/Players/IPlayer)对象，指的是执行这次合成的玩家。
