# IEntityAnimal

动物.

## 导入相关包

如果您遇到任何问题，可能需要导入软件包(例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)), 这样比抱歉更安全并添加导入。  
`导入craftweaper.entityIEntityAnimal。`

## 扩展 [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/)

IEntityAnimal extension [IEntityable](/Vanilla/Entities/IEntityAgeable/). 这意味着 [Ientity](/Vanilla/Entities/IEntityAgeable/) 的所有功能也都可供IEntityAnimal使用。

## 方法

### ZenGetters/Setters

| ZenGetter | 类型                                                  |
| --------- | --------------------------------------------------- |
| 爱情暂停      | [IPlayer](/Vanilla/Players/IPlayer/) (Can be null!) |
| isInLove  | 布尔值                                                 |

### ZenMethods

#### 检查一件物品是否可以用来培育这种动物。

方法需要 [IItemStack](/Vanilla/Items/IItemStack/)。  
返回一个布尔值。

```zenscript
entAnObj.isBreedingItem(ItemStack itemstack)；
```

#### 在爱情中设置或重置

第一个方法需要一个可选的 [IPlayer](/Vanilla/Players/IPlayer/) 对象，第二个什么都不。  
什么也不返回任何东西。

```zenscript
entAnObj.setInLove(@Optional IPlayer player);
entAnObj.resetInLove();
```

#### 检查另一个动物是否可以与这个动物混合。

方法需要一个 IEntityAnimal 对象。  
返回一个布尔值。

```zenscript
entAnObj.canMateWith(IEntityAnimal other);
```