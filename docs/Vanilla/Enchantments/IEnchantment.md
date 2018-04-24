# 附魔

附魔对象基本上就是一个[附魔定义](IEnchantmentDefinition)对象和一个附魔等级.  

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明数组），最为安全、也是最为推荐的方式就是导入相关的包。  
`import crafttweaker.enchantments.IEnchantment;`

## ZenGetters/ZenSetters

| ZenGetter   | ZenSetter   | 类型                                             |
|-------------|-------------|--------------------------------------------------|
| definition  |             | [附魔定义](IEnchantmentDefinition)               |
| level       |             | 整数                                             |
| displayName | displayName | 字符串                                           |

## ZenMethods
### 检索附魔的NBT标签形式
你也许需要获取一个附魔的NBT标签
你可以用[数据](/Vanilla/Data/IData)获取也可以用以下方法: 
```
ench.makeTag();
ench as crafttweaker.data.IData;
```
