# 让它们获得动力:: 液体复合生产者

### 导入

```zenscript
导入mods.poweredthingies.Tweeper.fluidCompoundTinfine为fct;
```

### 列出密钥，按键删除配方

```zenscript
fct().logKeys()
fct().removeRecipe('液体:fluid_tf-molten_tesla') // 检查 <logKeys> 输出有效密钥
fct().clear()
```

### 添加配方

##### 签名

```zenscript
addRecipe(output: ILiquidStack, inputA: ILiquidStack, inputB: ILiquidStack)
```

##### 例子

```zenscript
fct().addRecipe(<liquid:tf-sewage> * 150, <liquid:water> * 300, <liquid:lava> * 100)；
```

### 注

所有这些操作都会被缓存并运行在这台机器的默认注册表完成注册后所有配方(包括来自自定义jsons的配方)。