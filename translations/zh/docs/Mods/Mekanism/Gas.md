# Mekanism

Mekanism CraftTweaker support has been integrated directly into Mekanism now ([link](https://github.com/aidancbrady/Mekanism/tree/master/src/main/java/mekanism/common/integration/crafttweaker))

Mekanism adds bracket-handler support to define **gas** -- a special material state differing from forge [**liquids**](/Vanilla/Liquids/ILiquidStack/)

    <gas:oxygen>
    <gas:water> *
    

*Noting that `<gas:water>` is different from `<liquid:water>`*

As of Mekanism 9.7.0 it is now possible to view all registered gases (including those from other mods) via the command `/ct gases`

It is also possible as of Mekanism 9.7.1 to get a gas stack/bracket handler by string. Use `mods.mekanism.MekanismHelper.getGas(string);`

## 例子

    import mod.mekanism.gas.IGasStack;
    
    var oxygen = <gas:oxygen>.withAmount(500) as IGasStack;
    var oxygen2 = <gas:oxygen> * 500;
    

## ZenGetters

Like LiquidStacks, IGasStacks also support some special ZenGetters.  
You call the ZenGetters using `gas.Getter` (E.g. `<gas:water>.name`)

| ZenGetter   | 说明                                      | 返回值类型          |
| ----------- | --------------------------------------- | -------------- |
| definition  | Returns the gas' definition             | IGasDefinition |
| NAME        | Returns the gas' name                   | String         |
| displayName | Returns the gas' displayName            | String         |
| amount      | Returns the gas' amount in millibuckets | int            |

## Setting the Object's Amount

You can set the Object's amount (gas volume in Millibuckets) in two ways, which both do exactly the same:

    var gas_amount_multiply = <gas:water> * 500;
    var gas_amount_zenMethod = <gas:water>.withAmount(500);
    

## IGasDefinition

An IGasDefinition object contains information on a gas.  
You can get such an object using `gasStack.definition` (check the table above)

| ZenGetter   | 说明                                     | Return Type |
| ----------- | -------------------------------------- | ----------- |
| NAME        | Returns the referred gas' name         | String      |
| displayName | Returns the referred gas' display name | String      |

You can multiply a gasDefinition to return a new IGasStack with the given amount in millibuckets:

    var gas_definition = <gas:water>.definition;
    var gas_bucket = gas_definition * 1000;