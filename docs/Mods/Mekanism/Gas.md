Mekanism
======

Mekanism CraftTweaker support has been integrated directly into Mekanism now ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Mekanism adds bracket-handler support to define **gas** -- a special material state differing from forge **liquids**
```
<gas:oxygen>
<gas:water> *
```
*Noting that <gas:water> is different from <liquid:water>


Example
------
```java
import mod.mekanism.gas.IGasStack as IGasStack;

var oxygen = <gas:oxygen>.withAmount(500) as IGasStack;
```

Other features
------
```java
mod.mekanism.gas.IGasStack.definition
```
Returns an "IGasDefinition" object


```java
mod.mekanism.gas.IGasStack.NAME
```
Returns a string of the gas' registry name


```java
mod.mekanism.gas.IGasStack.displayName
```
Returns a string of the gas' display name


```java
mod.mekanism.gas.IGasStack.amount
```
Returns an integer value of how much quantity is defined in the referenced IGasStack object


```java
mod.mekanism.gas.IGasStack.withAmount(int amount)
```
Returns an IGasStack of the specified gas with a specified quantity (similar to how fluid stacks millibuckets amount works) 