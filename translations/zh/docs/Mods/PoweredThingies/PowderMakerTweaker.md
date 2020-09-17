# 驱动器 :: Powder Maker

### 导入

```zenscript
导入 mods.poweredthingies.Tweeper.powderMakerTinfate 为 pmt;
```

### 列出密钥，按键删除配方

```zenscript
pmt().logKeys()
pmt().removeRecipe('minecraft:gravel') // 检查 <logKeys> 输出有效密钥
pmt().clear()
```

### 添加配方

##### 签名

```zenscript
addRecipe(input: IItemStack, outputs: Array<WeightedItemStack>)
```

##### 例子

```zenscript
pmt().addRecipe(<minecraft:bucket>, [<minecraft:iron_ingot> 100, <minecraft:iron_ingot> % 12, <minecraft:iron_ingot> % 12]);
```

### 注

所有这些操作都会被缓存并运行在这台机器的默认注册表完成注册后所有配方(包括来自自定义jsons的配方)。