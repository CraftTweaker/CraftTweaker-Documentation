# 驱动器 :: 复合Maker

### 导入

```zenscript
导入mods.poweredthingies.Tweeper.compoundTinfate as ct;
```

### 列出密钥，按键删除配方

```zenscript
ct().logKeys()
ct().removeRecipe('minecraft:stone') // 检查 <logKeys> 输出有效密钥
ct().ct().clear()
```

### 添加配方

##### 签名

```zenscript
addRecipe(输出: IItemStack, 左: ILiquidStack?, 顶: 数组<IItemStack>?, 右: ILiquidStack?, 底: 数组<IItemStack>?)
```

##### 例子

```zenscript
ct().addRecipe(<minecraft:obsidian>, <liquid:lava> * 250, [<minecraft:cobblestone>, <minecraft:cobblestone>], 空, [<minecraft:cobblestone>, <minecraft:cobblestone>]);
```

### 注

所有这些操作都会被缓存并运行在这台机器的默认注册表完成注册后所有配方(包括来自自定义jsons的配方)。