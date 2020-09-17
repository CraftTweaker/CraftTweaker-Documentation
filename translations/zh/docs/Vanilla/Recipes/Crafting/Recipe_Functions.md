# 配方函数

# IRecipeFunction

有些配方支持自定义函数程序性地决定其输出。  
如果您需要一些输入项的信息，例如损坏值，这可能是特别有用的。  
这是一个所谓的 IRecipeFunction。

## 修理卡车的例子

```zenscript
val diaPick = <minecraft:diamond_pickaxe>;

//we 开始正常，通过写输出
restrices.addShapeless("pickreriir",diaPick,

///follow-up 输入数组。 虽然有一个变化——我们标记钻石的卡车，所以我们可以稍后在函数中使用它
[diaPick]。 nyDamage().marked("mark",<minecraft:diamond>],

/now 我们开始声明函数。 
///它需要3个参数，一个参数用于输出参数，一个参数用于输入参数，一个参数用于制造信息。 
///我们只需要输入参数。
函数(out, ins, cInfo)□

    //now we return with 0 DMG or current damage 10, where is higher 这是为了防止负损值。
    返回 ins.mark.withdamage(0,ins.mark.damage - 10);
}, 
//我们不需要一个recipeActions，这样才能将其设置为 null
null);
```

## 如何设置一个 IRecipeFunction

正如你在上文的例子中所看到的那样， 有一个带有3个参数的函数：  
你不必以这种方式给他们打电话，他们可以有任何名字。

`out` 是累犯的输出和一个 IItemStack 对象。  
`ins` 是以标记为键和被标记为输入值的映射。  
`cInfo` 是一个 ICraftingInfo 对象

函数必须返回配方应该输出的IItemStack。

你可以通过返回 `null` 来使一个配方无效，这样它就无法在特定条件下制造。

在这里修改 `ins` 是一个坏主意， 此函数会触发工作网格中的每次更改，而不是在实际拉出结果时。

# IRecipeAction

但CraftT弱超出了使用函数简单计算您的输出。  
有一个 IRecipeAction 功能，您也可以确定当用户制作项目时应该发生什么情况。  
IRecipeAction 对象是在 IRecipeFunction之后产生的！

```zenscript
val stone = <minecraft:stone>;

配方.addShapeless("experiencestone",stone,[stone,stone,stone,stone,stone,stone,stone],
/IrecipeFunction,返回输出, 这一次它对我们不感兴趣。
function(out,ins,cInfo)@un.org
    return out;
},
/IRecipeAction
function(out,cInfo,player)
    player.xp += 1;
});
```

这使得每次制造完成时执行配方1级的玩家能够完成工作。 我们还有一个函数包含3个参数：  
`out` 是累犯的输出和一个 IItemStack 对象。  
`cInfo` 是一个 ICraftInfo 对象  
`玩家` 是执行配方的玩家 [IPlayer](/Vanilla/Players/IPlayer/) 对象。