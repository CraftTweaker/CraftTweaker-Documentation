# 电源线索 :: 液体燃烧器 :: 燃料

### 导入

```zenscript
imports mods.poweredthingies.Tweeper.fluidBurnerFuelTinventer as fuel;
```

### 列出密钥，按键删除配方

```zenscript
fuel().logKeys()
fuel().removeRecipe('液体:fluid_lava') // 检查 <logKeys> 输出有效密钥
fuel().clear()
```

### 添加配方

##### 签名

```zenscript
添加燃料(通量: ILiquidStack, ticks: Int)
```

`ticks` 表示指定燃料燃烧的ticks 数量。

##### 例子

```zenscript
fail().addFuel(<liquid:tf-sewage> * 50, 100);
```

### 注

所有这些操作都会被缓存并运行在这台机器的默认注册表完成注册后所有配方(包括来自自定义jsons的配方)。