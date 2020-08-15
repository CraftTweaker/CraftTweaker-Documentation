# IEntityAnimal

Un animal.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.IEntityAnimal;`

## Extendiendo [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/)

IEntityAnimal extiende [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/). Eso significa que todas las funciones disponibles para [Itidades](/Vanilla/Entities/IEntityAgeable/) también están disponibles para IEntityAnimal.

## Métodos

### ZenGetters/Setters

| ZenGetter     | Tipo                                                |
| ------------- | --------------------------------------------------- |
| Causa de amor | [IPlayer](/Vanilla/Players/IPlayer/) (Can be null!) |
| isInLove      | pluma                                               |

### Métodos

#### comprobar si un elemento puede ser utilizado para criar al animal

El método espera un [IItemStack](/Vanilla/Items/IItemStack/).  
Devuelve un bool.

```zenscript
entAnObj.is BreedingItem(ItemStack itemStack);
```

#### Establecer o Restablecer enamorado

El primer método espera un objeto [IPlayer](/Vanilla/Players/IPlayer/) opcional, el segundo no.  
Devuelve nada.

```zenscript
entAnObj.setInLove(@jugador IPlayer opcional);
entAnObj.resetInLove();
```

#### Compruebe si otro animal puede comerse con éste.

El método espera un objeto IEntityAnimal.  
Devuelve un bool.

```zenscript
entAnObj.canMateWith(IEntityAnimal other);
```