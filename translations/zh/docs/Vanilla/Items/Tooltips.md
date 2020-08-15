# 工具提示

添加或删除工具提示真的很容易：  
您需要的只是一个项目 (或oredict 或类似项目)，换句话说，是一个 IIngredient。

## 清除工具提示

这将从 `条中移除所有工具提示`

```zenscript
etem.clearTooltip();
```

## 删除特定的工具提示

此函数删除所有匹配给定正则表达式的工具提示。 一种工具提示通常是一行文字(除非由于空间而被强行绑定)。

```zenscript
etem.removeTooltip(regex)；
```

`项目` 是一个 [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` 是一个字符串

## 普通工具提示

这将添加 `tT` 作为工具提示到 `项`.

```zenscript
item.addTooltip(tT)；

<minecraft:chest>.addTooltip("存储，我可以说什么更多？")；
```

`项目` 是一个 [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` 是一个字符串

## Shift 工具提示

这添加了一个工具提示, 只有当您按班轮换时才会显示。  
您还可以添加一个在您不举行shift时将会显示的信息(通常用来创建类似消息的信息，告诉您关于shift工具提示)

```zenscript
item.addShiftTooltip(tT)；
item.addShiftTooltip(tT, 信息)；

<minecraft:chest>.addShiftTooltip("STORAGE!!!")；
<minecraft:redstone>.addShiftTooltip("RED!!!", "按住shifting to know I am")；
```

`项目` 是 [IIngredient](/Vanilla/Variable_Types/IIngredient/)  
`tT` 是一个 [IFormatted文本](/Vanilla/Utils/IFormattedText/)。 您也可以在自动转换时使用字符串。  
`info` 是 [IFormattedText](/Vanilla/Utils/IFormattedText/)。 您也可以在它们被自动转换时使用字符串。

# Markup

世界是多彩的，我们的所有工具都应该是多彩的。 您也可以排料这些选项，如果您想要一个绿色文本，即删除线)

## 着色字符串

您可以将16种颜色中的一种应用到您的字符串

```zenscript
格式.blank
格式.darkBlue
格式.darkGre
格式.darkAqua
格式.darkRed
格式.darkPurple
格式.gold
格式 ray
格式.darkGray
格式.蓝色
格式.green
格式.aqua
格式.red
格式.lightPurple
格式.yellow
格式.白色.
```

```zenscript
<minecraft:stick>.addTooltip(格式.green("这个时候不成熟");
```

## 格式化字符串

您可以对字符串应用不同的格式，如果您希望：

```zenscript
格式.obfuscated
格式.bold
格式.strikeby
格式.下划线
格式.italic
```

```zenscript
<minecraft:stick>.addShiftTooltip(格式.strike-through ("这是一个坏的工具提示");
```

## 工具提示功能

您可以将 [IFormatedText](/Vanilla/Utils/IFormattedText/) 参数替换为 ITooltipFunction (`导入craftweaper.item。 工具提示功能；`。  
这些函数允许您根据给定的 IItemStack 动态生成工具提示。

工具提示函数是需要 [IItemStack](/Vanilla/Items/IItemStack/) 并返回工具提示作为字符串的函数。 这意味着使用 `格式` 命令 *对这些函数无法使用* 如果你需要实现这一点，你将需要依赖Minecraft的格式前缀。

对于Shift 工具提示, 您也可以提供第二个函数。 它允许您也生成不按键时显示的工具提示。 对于shift tool提示来说，既不是作为函数的参数，也不是同时作为 [IFormatted文本](/Vanilla/Utils/IFormattedText/)，没有混合物！

```zenscript
addAdvancedTooltip(ITooltipFunction fn);
addShiftTooltip(ITooltipFunction fn, @Optional ITooltipFunction infoFn);


//Example
<ore:myAxeOreDictionary>.add(<minecraft:iron_axe:*>, <minecraft:golden_axe:*>, <minecraft:diamond_axe:*>);

<ore:myAxeOreDictionary>.addAdvancedTooltip(function(item) {   
    return "Damage: " ~ item.damage ~ " / " ~ item.maxDamage;
});


<ore:myAxeOreDictionary>.addShiftTooltip(function(item) {    
    return "Uses left: " ~ (item.maxDamage - item.damage);
}, function(item){
    return "Hold shift for some juicy math.";
});
```