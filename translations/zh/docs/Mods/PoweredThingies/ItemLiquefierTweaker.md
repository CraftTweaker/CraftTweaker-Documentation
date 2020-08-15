# 驱动器 :: 项目Liquefier

### 导入

```zenscript
导入mods.poweredthingies.Tweeper.itemLiquefierTinflow为ilt;
```

### 列出密钥，按键删除配方

```zenscript
ilt().logKeys()
ilt().removeRecipe('液体:fluid_lava') // 检查 <logKeys> 输出有效密钥
ilt().clear()
```

### 添加配方

##### 签名

```zenscript
addRecipe(input: IItemStack, output: ILiquidStack)
```

##### 例子

```zenscript
ilt().addRecipe(<minecraft:bucket>, <liquid:lava> * 125)；
```

### 注

所有这些操作都会被缓存并运行在这台机器的默认注册表完成注册后所有配方(包括来自自定义jsons的配方)。