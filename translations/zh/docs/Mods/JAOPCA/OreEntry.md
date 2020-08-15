# Oreentry

Oreentry 是一种材料，如金质、钻石、煤、红石等等。  
你可以使用这个来获得几个 [OreDictEntries](/Vanilla/OreDict/IOreDictEntry/), [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/)

## 方法

一般而言，方法需要一个要使用的前缀字符串参数。  
例如，一个 `"金"`的 Oreentre 用前缀调用 `"dust"` 将返回 Gold Dust。  
关于这些例子， 我们将假定已声明这一点：  
示例调用后的评论将说明所调用的方法可以返回哪些(除非在额外的类别中)。

```zenscript
val oregin = mods.jaopca.JAOPCA.getOre("Gold");
```

### 获取条目属性

您可以获取这些属性：

```zenscript
oreEntry.energyModifier; //1.0 双倍
oreEntry.rarity; //1.0 双倍
oreEntry.oreType; ///"INGOT" 作为字符串
```

### 获取 Orename 或 OreNameSynonyms

矿石名称是非常重要的注册方式以及你在 getOre 中使用什么来检索它。  
矿石名称同义词是模组或包作者可以注册合并两个或多个矿物的同义词(e)。 a. “铝”和“铝”。 虽然大多数操作条目都没有注册过，但是这些操作条目大概不会被注册。 同义词getter 将返回一个包含所有同义词的列表。

```zenscript
oreEntry.oreName; //"Gold"
oreEntry.oreNameSynonyms; //[……]
```

### 获取 IOreDictEnter

使用给定的前缀返回一个新的 [IOreDictEnter](/Vanilla/OreDict/IOreDictEntry/)。

```zenscript
oreEntry.getOreDictEntry("dust"); //<ore:dustGold>
```

### Get IItemStack

返回一个匹配给定前缀的新的 [IItemStacks](/Vanilla/Items/IItemStack/) 。  
如果找不到匹配的项目，您可以提供备用后退前缀。

如果没有找到匹配的项目并且没有找到匹配的项目使用后退前缀(如果提供的话)，它将返回 `null`。

```zenscript
//oreEntry.getItemStack(前缀)；
oreEntry.getItemStack("coin")；//<jaopca:item_coingold>
oreEntry.getItemStack("invalid")；//null

//oreEntry.getItemStack(前缀, fallback)；
oreEntry.getItemStack("valid", "coin")；//<jaopca:item_coingold>
oreEntry.getItemStack("valid", "resulty")；////null
```

### Get ILiquidStack

返回一个匹配给定前缀的新的 [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/) 。  
如果找不到匹配的液体，您可以提供备用后退前缀。

如果没有找到匹配的液体并且没有找到匹配的液体使用后退前缀(如果提供的话)，它将返回 `null`。

```zenscript
//oreEntry.getLiquidStack(前缀)；
oreEntry.getLiquidStack("molten")；//<liquid:gold>
oretry.getLiquidStack("invalid")；//null

//oreEntry.getLiquidStack(前缀, fallback)；
oreEntry.getLiquidStack("valid", "molten")；//<liquid:gold>
oreEntry.getLiquidStack("valid", "defaulty")；//null
```

### 获取额外的

条目可以有额外的注册。 例如，在拉取一个匹配矿石时，额外的输出可以是次要输出。

您可以检查一个条目是否有外延，获取额外的 (如果不存在 `null` )或额外的名称。  
您也可以使用与上面相同的方法 (`getOreDictEnterprise` `getLiquidStack` and `getItemStack`).

最多可以注册3个额外版本。 为了简洁起见，对等方法不会有示例，这些示例只会被描述

```zenscript
//First extra
oreEntry.hasExtra; //true or false
oreEntry.extra; //matching oreEntry or null
oreEntry.extraName; //the name or null

//Methods for first extra
oreEntry.getOreDictEntryExtra(prefix);
oreEntry.getItemStackExtra(prefix);
oreEntry.getItemStackExtra(prefix, fallback);
oreEntry.getLiquidStackExtra(prefix);
oreEntry.getLiquidStackExtra(prefix, fallback);



//Second extra
oreEntry.hasSecondExtra; //true or false
oreEntry.secondExtra; //matching oreEntry or null
oreEntry.secondExtraName; //the name or null

//Methods for second extra
oreEntry.getOreDictEntrySecondExtra(prefix);
oreEntry.getItemStackSecondExtra(prefix);
oreEntry.getItemStackSecondExtra(prefix, fallback);
oreEntry.getLiquidStackSecondExtra(prefix);
oreEntry.getLiquidStackSecondExtra(prefix, fallback);



//Third extra
oreEntry.hasThirdExtra; //true or false
oreEntry.thirdExtra; //matching oreEntry or null
oreEntry.thirdExtraName; //the name or null

//Methods for third extra
oreEntry.getOreDictEntryThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix);
oreEntry.getItemStackThirdExtra(prefix, fallback);
oreEntry.getLiquidStackThirdExtra(prefix);
oreEntry.getLiquidStackThirdExtra(prefix, fallback);
```