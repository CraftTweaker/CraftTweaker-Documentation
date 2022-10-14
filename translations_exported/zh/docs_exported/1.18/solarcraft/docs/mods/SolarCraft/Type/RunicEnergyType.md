# RunicEnergyType

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.solarforge.RunicEnergyType;
```


## Enum Constants

RunicEnergyType is an enum. It has 9 enum constants. They are accessible using the code below.

```zenscript
<constant:solarforge:energytype:zeta>
<constant:solarforge:energytype:ardo>
<constant:solarforge:energytype:urba>
<constant:solarforge:energytype:kelda>
<constant:solarforge:energytype:fira>
<constant:solarforge:energytype:tera>
<constant:solarforge:energytype:giro>
<constant:solarforge:energytype:ultima>
```
## 使用方式

:::group{name=getCommandString}



Returns: A Usable RunicEnergyType to use in [RunicEnergyCost](/mods/SolarCraft/Type/RunicEnergyCost) to set up a requirement.  
Return Type: string

```zenscript
// RunicEnergyType.getCommandString() as string

myRunicEnergyType.getCommandString();
```

:::


## 参数

| 名称                   | 类型     | 可获得  | 可设置   | 描述 |
| -------------------- | ------ | ---- | ----- | -- |
| commandString #命令字符串 | string | true | false |    |

