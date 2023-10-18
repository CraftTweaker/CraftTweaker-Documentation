# SalvageBuilder

A builder class used to create a Salvage Data for use as a parameter.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.pmmo.SalvageBuilder;
```


## Static Methods

:::group{name=start}

@return a new salvage builder

Returns: a new salvage builder  
Return Type: [SalvageBuilder](/mods/PMMO/SalvageBuilder)

```zenscript
// SalvageBuilder.start() as SalvageBuilder

SalvageBuilder.start();
```

:::

## Methods

:::group{name=setBaseChance}

The default chance irregardless of skills that this
 salvage will be obtained.
 default = 0.0

Return Type: [SalvageBuilder](/mods/PMMO/SalvageBuilder)

```zenscript
// SalvageBuilder.setBaseChance(chance as double) as SalvageBuilder

mySalvageBuilder.setBaseChance(0.0);
```

| Parameter |  Type  |                 Description                 |
|-----------|--------|---------------------------------------------|
| chance    | double | chance before skill based chances are added |


:::

:::group{name=setChancePerLevel}

A map of skill names and chances.  Salvage logic will take the chance
 value and multiply it by the player's level in the skill used in the key
 to increase the player's odds.  This is done for all pairs in the map.
 default = no extra chance

Return Type: [SalvageBuilder](/mods/PMMO/SalvageBuilder)

```zenscript
// SalvageBuilder.setChancePerLevel(chancePerLevel as double?[string]) as SalvageBuilder

mySalvageBuilder.setChancePerLevel({skillname: 0.0 as double?, otherskillname: 0.0 as double?});
```

|   Parameter    |      Type       |                Description                |
|----------------|-----------------|-------------------------------------------|
| chancePerLevel | double?[string] | the increase in chance per level in skill |


:::

:::group{name=setLevelReq}

The required levels to have this specific salvage item checked
 against the chance attributes.
 default = no requirements

Return Type: [SalvageBuilder](/mods/PMMO/SalvageBuilder)

```zenscript
// SalvageBuilder.setLevelReq(levelReq as int?[string]) as SalvageBuilder

mySalvageBuilder.setLevelReq({skillname: 0.0 as int?, otherskillname: 0.0 as int?});
```

| Parameter |     Type     |               Description               |
|-----------|--------------|-----------------------------------------|
| levelReq  | int?[string] | the requirements to attempt this result |


:::

:::group{name=setMaxChance}

The maximum chance to obtain this item.  This acts as
 a ceiling for obtaining items where skills levels may
 create a 100% chance case that is not desired
 default = 1.0

Return Type: [SalvageBuilder](/mods/PMMO/SalvageBuilder)

```zenscript
// SalvageBuilder.setMaxChance(chance as double) as SalvageBuilder

mySalvageBuilder.setMaxChance(1.0);
```

| Parameter |  Type  |         Description          |
|-----------|--------|------------------------------|
| chance    | double | chance ceiling for this item |


:::

:::group{name=setSalvageMax}

The most of this item that can be obtained from salvage
 default = 1

Return Type: [SalvageBuilder](/mods/PMMO/SalvageBuilder)

```zenscript
// SalvageBuilder.setSalvageMax(max as int) as SalvageBuilder

mySalvageBuilder.setSalvageMax(1);
```

| Parameter | Type |           Description           |
|-----------|------|---------------------------------|
| max       | int  | the maximum output of this item |


:::

:::group{name=setXpAward}

The xp that should be awarded when this item is successfully
 obtained from salvage
 default = no xp awarded

Return Type: [SalvageBuilder](/mods/PMMO/SalvageBuilder)

```zenscript
// SalvageBuilder.setXpAward(xpAward as long?[string]) as SalvageBuilder

mySalvageBuilder.setXpAward({skillname: 0.0 as long?, otherskillname: 0.0 as long?});
```

| Parameter |     Type      |                  Description                   |
|-----------|---------------|------------------------------------------------|
| xpAward   | long?[string] | a map of skills and their associated xp awards |


:::


