# 骨架处理程序

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.BracketHandlers
```

## 方法
### getBlockMaterial

获取给定的 [craftmiliter.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)。 如果找不到异常。

 返回： `找到的 [crafttweaker.api.block.material.MCMaterial](/vanilla /api/block/material/MCMaterial)`

返回类型： [craftbiner.api.block.material.MCMaterial](/vanilla/api/block/material/MCMaterial)

```zenscript
<blockmaterial:earth>

craftmiliter.api.BracketHandlers.getBlockMaterial(tokens as String);
craftbiner.api.BraketHandlers.getBlockMaterial("earth");
```

| 参数 | 类型          | 描述              |
| -- | ----------- | --------------- |
| 令牌 | 字符串[string] | 您要在 BEP 通话中写什么。 |


### getBlockState

根据给定的输入创建一个区块。 返回 `null` 如果它找不到该方块，忽略无效的变体

 返回： `找到的BlockState`

返回类型： [craftbiner.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
<blockstate:minecraft:acacia_planks>
<blockstate:minecraft:furnace:facing=north,lit=false>

craftmiliter.api.BracketHandlers.getBlockState(tokens as String);
craftmiliter.api.BracketHandlers.getBlockState("minecraft:acacia_planks");
```

| 参数 | 类型          | 描述         |
| -- | ----------- | ---------- |
| 令牌 | 字符串[string] | 方块的资源位置和变体 |


### getDirectionAxis

获取基于名称的方向轴。 如果找不到方向轴，则显示错误。

 返回： `找到的方向轴`

返回类型： [craftbiner.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis)

```zenscript
<directionaxis:x>

craftmiliter.api.BracketHandlers.getDirectionAxis(tokens as String);
craftmiliter.api.BracketHandlers.getDirectionAxis("x");
```

| 参数 | 类型          | 描述       |
| -- | ----------- | -------- |
| 令牌 | 字符串[string] | 方向轴的资源位置 |


### getEffect

获取基于注册表名称的效果。 如果找不到效果，则丢弃错误。

 返回： `找到的效果`

返回类型： [craftminstruer.api.potion.MCPotionEffect](/vanilla/api/potions/MCPotionEffect)

```zenscript
<effect:minecraft:haste>

craftmiliter.api.BracketHandlers.getEffect(tokens as String);
craftmiliter.api.BracketHandlers.getEffect("minecraft:haste");
```

| 参数 | 类型          | 描述      |
| -- | ----------- | ------- |
| 令牌 | 字符串[string] | 特效的资源位置 |


### getEntity分类

获取基于登记册名称的实体分类。 记录一个错误并返回 `null` 如果它找不到实体分类。

 返回： `找到的实体分类`

返回类型： [craftminstruer.api.entity.MCEntityClassis](/vanilla/api/entities/MCEntityClassification)

```zenscript
<entityclassification:monster>

craftmiliter.api.BracketHandlers.getEntityClassification(tokens as String);
craftbiner.api.BracketHandlers.getEntityClassification("monster");
```

| 参数 | 类型          | 描述        |
| -- | ----------- | --------- |
| 令牌 | 字符串[string] | 实体分类的资源位置 |


### getEntityType

获取基于注册表名称的实体类型。 记录一个错误并返回 `null` 如果它找不到 entityType 。

 返回： `找到的实体类型`

返回类型： [craftmiliter.api.entity.MCEntityType](/vanilla/api/entities/MCEntityType)

```zenscript
<entitytype:minecraft:pig>

craftbinstruer.api.BracketHandlers.getEntityType(tokens as String);
craftmiliter.api.BracketHandlers.getEntityType("minecraft:pig");
```

| 参数 | 类型          | 描述              |
| -- | ----------- | --------------- |
| 令牌 | 字符串[string] | entityType的资源位置 |


### getFluidStack

获取基于注册表名称的液体堆栈。 如果找不到液体则出现错误。

 返回： `液体堆栈，数量== 1mb`

返回类型： [craftbinstruer.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
<fluid:minecraft:water>

craftmiliter.api.BracketHandlers.getFluidStack(tokens as String);
craftbiner.api.BracketHandlers.getFluidStack("minecraft:water");
```

| 参数 | 类型          | 描述     |
| -- | ----------- | ------ |
| 令牌 | 字符串[string] | 流体资源位置 |


### getItem

获取基于注册表名称的项目。 如果找不到该物品，则显示错误。

 返回： `找到的项目`

返回类型： [craftbiner.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>

craftmiliter.api.BracketHandlers.getItem(tokens as String);
craftmiliter.api.BracketHandlers.getItem("minecraft:dirt");
```

| 参数 | 类型          | 描述      |
| -- | ----------- | ------- |
| 令牌 | 字符串[string] | 项目的资源位置 |


### 获取药水

返回类型： [craftminstruer.api.potion.MCPotion](/vanilla/api/potions/MCPotion)

```zenscript
<potion:tokens>
craftbinstruer.api.BracketHandlers.getPotion(tokens as String);
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 令牌 | 字符串[string] | No description provided |


### getRecipeManager

获取基于注册表名称的累计管理器。 如果找不到累犯管理器，则丢弃一个错误。 如果找不到给定的累犯类型，则抛出一个扩展。 <p> 这将永远返回 IRecipeManager。<br> 也有一个 BEP，但是它的作用不同，所以它不能自动添加到这里的文档。 但BEP看起来与其他人相同： `<recipetype:minecraft:crafting>`

 返回： `找到的recipeManager`

返回类型： [craftbiner.api.registriesIRecipeManager](/vanilla/api/managers/IRecipeManager)

```zenscript
crafttmilower.api.BracketHandlers.getRecipeManager(tokens as String);
craftmiliter.api.BracketHandlers.getRecipeManager(“minecraft:crafting”);
```

| 参数 | 类型          | 描述         |
| -- | ----------- | ---------- |
| 令牌 | 字符串[string] | 累犯管理员的资源位置 |


### 获取资源位置

基于令牌创建资源位置。 如果令牌不是一个有效的位置，则抛出一个错误。

 返回： `位置`

返回类型： [craftbiner.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation)

```zenscript
<resource:minecraft:dirt>

craftmiliter.api.BracketHandlers.getResourceLocation(tokens as String);
craftmiliter.api.BracketHandlers.getResourceLocation("minecraft:dirt");
```

| 参数 | 类型          | 描述   |
| -- | ----------- | ---- |
| 令牌 | 字符串[string] | 资源位置 |


### 获取标签

获取基于注册表名称的标签。 如果没有找到的话，将创建一个空标签。<br> 然而，在这种情况下，您需要注册标签作为其适当的类型

 返回： `已找到的标签，或新创建的`

返回类型： [craftmiliter.api.tag.MCTag](/vanilla/api/tags/MCTag)

```zenscript
<tag:tag:minecraft:wool>

craftmiliter.api.BracketHandlers.getTaglers(tokens as String);
craftmiliter.api.BraketHandlers.getTag ("tag:minecraft:wool");
```

| 参数 | 类型          | 描述      |
| -- | ----------- | ------- |
| 令牌 | 字符串[string] | 标签的资源位置 |


### getTextFormating

返回类型： [craftbiner.api.text.TextFormating](/crafttweaker/api/text/TextFormatting)

```zenscript
<formatting:tokens>
craftmiliter.api.BracketHandlers.getTextFormating(tokens as String);
```

| 参数 | 类型          | 描述                      |
| -- | ----------- | ----------------------- |
| 令牌 | 字符串[string] | No description provided |



