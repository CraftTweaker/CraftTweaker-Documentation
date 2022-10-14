# AbstractVillager

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.villager.AbstractVillager;
```


## Implemented Interfaces
AbstractVillager implements the following interfaces. That means all methods defined in these interfaces are also available in AbstractVillager

- [Merchant](/vanilla/api/entity/type/villager/Merchant)

## Methoden

:::group{name=getUnhappyCounter}

Return Type: int

```zenscript
// AbstractVillager.getUnhappyCounter() as int

myAbstractVillager.getUnhappyCounter();
```

:::

:::group{name=isTrading}

Return Type: boolean

```zenscript
// AbstractVillager.isTrading() as boolean

myAbstractVillager.isTrading();
```

:::

:::group{name=playCelebrateSound}

```zenscript
// AbstractVillager.playCelebrateSound()

myAbstractVillager.playCelebrateSound();
```

:::

:::group{name=setUnhappyCounter}

```zenscript
AbstractVillager.setUnhappyCounter(unhappyCounter as int)
```

| Parameter      | Type |
| -------------- | ---- |
| unhappyCounter | int  |


:::


## Properties

| Name           | Type    | Has Getter | Has Setter |
| -------------- | ------- | ---------- | ---------- |
| isTrading      | boolean | true       | false      |
| unhappyCounter | int     | true       | true       |

