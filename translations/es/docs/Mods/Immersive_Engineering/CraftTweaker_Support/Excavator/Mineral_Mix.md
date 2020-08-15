# Mezcla Mineral

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como casting un Array). Más vale estar seguro que lo sentimos y añadir la importación `de mods.immersiveengineering.MineralMix;`.

## Probabilidad de fallo

Puede obtener y establecer la posibilidad de fallo para la mezcla de Mineralmix usando la posibilidad de fallar [ZenSetter/Getter] en el objeto.

## Obtener Mineral

| Requerido | Tipo   | Tipo de Datos |
| --------- | ------ | ------------- |
| Requerido | Nombre | cadena        |

```zenscript
//Ejemplo:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral("Iron_Ore");
```

## Añadir minero

| Requerido | Tipo        | Tipo de Datos |
| --------- | ----------- | ------------- |
| Requerido | Mena        | cadena        |
| Requerido | Oportunidad | cadena        |

```zenscript
mineralMixObject.addOre("oreIron", 0.5);
```

Necesitará usar los nombres de oredicto.

## Eliminar mineral

| Requerido | Tipo | Tipo de Datos |
| --------- | ---- | ------------- |
| Requerido | Mena | cadena        |

```zenscript
mineralMixObject.removeOre("oreIron");
```

## Probabilidad de Fallo Obtenido/Setter

### Ejemplo

```zenscript
//Getter
mineralMixObject.failchance;

//Setter
mineralMixObject.failchance = 0.5;
```

## Ejemplo completo

```zenscript
//Ejemplo:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Get The Mineral Mix
mods.immersiveengineering. xcavator.addMineral("Iron_Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);

var Iron = Excavator.getMineral("Iron_Ore");

Iron.addOre("oreIron", 0. );

//Print Initial Fail Chance
print(Iron.failChance);

//Set The Fail Chance to 25%
Hierro. ailChance = 0.25;

//Imprimir la Probabilidad de Falla
impresión (Hierro. ailance);

//Set The Fail Chance to 50%
Iron.failChance = 0.5;

//Print Final Fail Chance
print(Iron.failChance);
```