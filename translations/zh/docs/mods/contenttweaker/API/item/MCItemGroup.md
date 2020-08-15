# MCItemGroup

项目组 (a.k.a. Creative Tab) 是一个基于类别的项目组.

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## 已实现的接口
MCItemGroup实现以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.brackets.CommandStringDisplayable #命令字符串可显示](/vanilla/api/brackets/CommandStringDisplayable)

## 方法
### getPath

获取项目组的路径。 路径是你在 `<项目组之后在 backet 表达式中使用的路径：` 部分。

返回类型：字符串

```zenscript
<itemgroup:misc>.getPath();
```

### 设置背景图像名称

设置此选项卡的背景图像名称 返回： `此对象用于链路`

返回类型： [mods.contenttweiner.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(纹理为字符串)；
```

| 参数 | 返回值类型       | 描述     |
| -- | ----------- | ------ |
| 纹理 | 字符串[string] | 要使用的纹理 |


### setNoScrollbar

删除项目组的滚动栏在创造性物品栏中

 返回： `此对象用于链路`

返回类型： [mods.contenttweiner.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

删除项目组在创造性库存中的标题

 返回： `此对象用于链路`

返回类型： [mods.contenttweiner.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## 参数

| 名称                   | 返回值类型       | 可获得  | 可设置   |
| -------------------- | ----------- | ---- | ----- |
| commandString #命令字符串 | String      | true | false |
| 路径                   | 字符串[string] | true | false |

