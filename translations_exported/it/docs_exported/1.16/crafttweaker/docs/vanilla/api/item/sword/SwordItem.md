# SwordItem

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.sword.SwordItem;
```


## Extending TieredItem

SwordItem extends [TieredItem](/vanilla/api/item/tiered/TieredItem). That means all methods available in [TieredItem](/vanilla/api/item/tiered/TieredItem) are also available in SwordItem

## Interfacce Implementate
SwordItem implements the following interfaces. That means all methods defined in these interfaces are also available in SwordItem

- [IVanishable](/vanilla/api/enchantment/vanishing/IVanishable)

## Metodi

:::group{name=getAttackDamage}

Gets the attack damage of this sword.

Returns: the attack damage of this sword.  
Return Type: float

```zenscript
// SwordItem.getAttackDamage() as float

mySwordItem.getAttackDamage();
```

:::


## Proprietà

| Nome         | Tipo  | Ha Getter | Ha Setter | Descrizione                           |
| ------------ | ----- | --------- | --------- | ------------------------------------- |
| attackDamage | float | sì        | no        | Gets the attack damage of this sword. |

