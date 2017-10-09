Mekanism
======

Mekanism CraftTweaker support has been integrated directly into Mekanism now ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Mekanism adds bracket-handler support to define **gas** -- a special material state differing from forge **liquids**
```
<gas:oxygen>
<gas:water> *
```
*Noting that `<gas:water>` is different from `<liquid:water>`


Example
------
```java
import mod.mekanism.gas.IGasStack;

var oxygen = <gas:oxygen>.withAmount(500) as IGasStack;
var oxygen2 = <gas:oxygen> * 500;
```

ZenGetters
------

Like LiquidStacks, IGasStacks also support some special ZenGetters.  
You call the ZenGetters using `gas.Getter` (E.g. `<gas:water>.name`)

| ZenGetter   | Description                             | Return Type    |
|-------------|-----------------------------------------|----------------|
| definition  | Returns the gas' definition             | IGasDefinition |
| NAME        | Returns the gas' name                   | String         |
| displayName | Returns the gas' displayName            | String         |
| amount      | Returns the gas' amount in millibuckets | int            |


Setting the Object's Amount
------

You can set the Object's amount (gas volume in Millibuckets) in two ways, which both do exactly the same:
```JAVA
var gas_amount_multiply = <gas:water> * 500;
var gas_amount_zenMethod = <gas:water>.withAmount(500);
```
