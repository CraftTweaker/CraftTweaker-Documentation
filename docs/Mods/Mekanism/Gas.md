Mekanism
======

Mekanism CraftTweaker support has been integrated directly into Mekanism now ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Mekanism adds bracket-handler support to define **gas** -- a special material state differing from forge **liquids**

```java
mod.mekanism.gas
mod.mekanism.gas.GasBracketHandler
mod.mekanism.gas.IGasDefinition
mod.mekanism.gas.IGasStack
mod.mekanism.gas.IGasDefinition.getDisplayName()
mod.mekanism.gas.IGasDefinition.getName()
mod.mekanism.gas.IGasStack.getAmount()
mod.mekanism.gas.IGasStack.getDefinition()
mod.mekanism.gas.IGasStack.getDisplayName()
mod.mekanism.gas.IGasStack.getName()
mod.mekanism.gas.IGasStack.withAmount(int)
```
