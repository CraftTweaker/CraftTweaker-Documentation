# IEnergyStorage

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IEnergyStorage;
```


## 使用方式

:::group{name=canExtract}

Return Type: boolean

```zenscript
// IEnergyStorage.canExtract() as boolean

myIEnergyStorage.canExtract();
```

:::

:::group{name=canReceive}

Return Type: boolean

```zenscript
// IEnergyStorage.canReceive() as boolean

myIEnergyStorage.canReceive();
```

:::

:::group{name=extractEnergy}

Return Type: int

```zenscript
IEnergyStorage.extractEnergy(maxExtract as int, simulate as boolean) as int
```

| 参数         | 类型  | 描述                      |
| ---------- | --- | ----------------------- |
| maxExtract | int | No Description Provided |
| simulate   | 布尔值 | No Description Provided |


:::

:::group{name=getEnergyStored}

Return Type: int

```zenscript
// IEnergyStorage.getEnergyStored() as int

myIEnergyStorage.getEnergyStored();
```

:::

:::group{name=getMaxEnergyStored}

Return Type: int

```zenscript
// IEnergyStorage.getMaxEnergyStored() as int

myIEnergyStorage.getMaxEnergyStored();
```

:::

:::group{name=receiveEnergy}

Return Type: int

```zenscript
IEnergyStorage.receiveEnergy(maxReceive as int, simulate as boolean) as int
```

| 参数         | 类型  | 描述                      |
| ---------- | --- | ----------------------- |
| maxReceive | int | No Description Provided |
| simulate   | 布尔值 | No Description Provided |


:::


## 参数

| 名称              | 类型  | 可获得  | 可设置   | 描述                      |
| --------------- | --- | ---- | ----- | ----------------------- |
| canExtract      | 布尔值 | true | false | No Description Provided |
| canReceive      | 布尔值 | true | false | No Description Provided |
| energyStored    | int | true | false | No Description Provided |
| maxEnergyStored | int | true | false | No Description Provided |

