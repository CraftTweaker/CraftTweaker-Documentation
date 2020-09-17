# 驱动器 :: 项目复合生产者

### 导入

```zenscript
导入mods.poweredthingies.Tweeper.itemCompoundProducerTinflow为icp;
```

### 列出密钥，按键删除配方

```zenscript
icp().logKeys()
icp().removeRecipe('minecraft:mossy_cobblestone') // 检查 <logKeys> 输出有效密钥 
icp().clear()
```

### 添加配方

##### 签名

```zenscript
addRecipe(inputStack: IItemStack, inputFluid: ILiquidStack, result: IItemStack)
```

##### 例子

```zenscript
icp().addRecipe(<minecraft:cobblestone>, <liquid:water> * 125, <minecraft:mossy_cobblestone>);
```

### 注

所有这些操作都会被缓存并运行在这台机器的默认注册表完成注册后所有配方(包括来自自定义jsons的配方)。