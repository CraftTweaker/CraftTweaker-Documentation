# 模组

这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.mods.Mods
```

## 方法
### getMod

获取特定模组

 返回： `个特定的 MCModInfo`

返回类型： [craftmilower.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
myMods.getMod(月经作为字符串);
myMods.getMod("minecraft");
```

| 参数  | 类型          | 描述                      |
| --- | ----------- | ----------------------- |
| 莫多德 | 字符串[string] | No description provided |


### isModLoaded

检查模组是否被洗衣了

 返回： `true 如果已加载模组`

返回类型：布尔值

```zenscript
myMods.isModLoaded(modian as String);
myMods.isModLoaded("minecraft");
```

| 参数  | 类型          | 描述    |
| --- | ----------- | ----- |
| 莫多德 | 字符串[string] | 摩托车检查 |



## 参数

| 名称 | 类型                                                                               | 可获得  | 可设置   |
| -- | -------------------------------------------------------------------------------- | ---- | ----- |
| 模组 | 列表&lt;[craftmiliter.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true | false |
| 大小 | 整数                                                                               | true | false |

