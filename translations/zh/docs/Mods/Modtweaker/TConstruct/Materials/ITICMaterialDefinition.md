# ITICMaterial定义

ITICMaterial定义是 [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) 定义。  
您可以使用它检索一些关于 [ITICMaterial](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) 对象的信息。

## 导入相关包

如果您遇到任何问题，可能需要导入软件包，所以比抱歉更安全并添加导入。  
`导入 modmoviner.tconstruct.ITICMaterialDefinitiation；`

## 正在获取此对象

您可以从 [ITICMaterial's](/Mods/Modtweaker/TConstruct/Materials/ITICMaterial/) `定义` ZenGetter：

```zenscript
val def = <ticmat:stone>.definition;
```

## ZenGetters

| ZenGetter   | 返回值类型  | 描述       |
| ----------- | ------ | -------- |
| name（名称）    | string | 材料的内部名称  |
| displayName | string | 材料的本地化名称 |