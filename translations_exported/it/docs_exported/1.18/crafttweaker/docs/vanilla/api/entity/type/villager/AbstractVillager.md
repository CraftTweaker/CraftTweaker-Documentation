# AbstractVillager

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.type.villager.AbstractVillager;
```


## Interfacce Implementate
AbstractVillager implements the following interfaces. That means all methods defined in these interfaces are also available in AbstractVillager

- [Merchant](/vanilla/api/entity/type/villager/Merchant)

## Metodi

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

| Parametro      | Tipo |
| -------------- | ---- |
| unhappyCounter | int  |


:::


## Proprietà

| Nome           | Tipo    | Ha Getter | Ha Setter |
| -------------- | ------- | --------- | --------- |
| isTrading      | boolean | sì        | no        |
| unhappyCounter | int     | sì        | sì        |

