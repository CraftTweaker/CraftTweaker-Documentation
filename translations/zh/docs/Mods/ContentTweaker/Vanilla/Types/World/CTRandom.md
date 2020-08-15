# CTRandom

CTRandom对象只能从 CoT [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) 对象中访问，并允许您访问世界随机数字生成器。

## 导入类

如果您想要导入类，您可以在这里：

```zenscript
import mods.contenttweaker.Random;
```

## ZenMethods

唯一可用的方法是随机值，如布尔值或整数。  
对于后者，您还需要提供一个上限绑定(上限绑定)。

```zenscript
随机Obj.next Boolean();
randomObj.next Int(int uperBound);
```