# Enfriado

El gestor Coolant no pertenece a ninguna máquina específica, sino que administra valores de enfriamiento para todas las demás máquinas.  
Por ejemplo, el Discurso de Eneración utiliza los valores de enfriamiento, al igual que la dieta magmática con el aumento del depósito Ientropico proporcionado.

## Importar el paquete

Para acortar las llamadas a métodos puedes [importar](/AdvancedFunctions/Import/) el paquete así:

```zenscript
importar mods.thermalexpansion.Coolant;
```

## Añadir refrigerante

Utilice esto para registrar un nuevo fresco al gerente.  
CoolantRF tiene que ser no negativo, y el factor enfriante debe estar entre 1 y 100 (incluido).  
Si estos rangos no se cumplen, el refrigerante no se registrará!

```zenscript
//mods.thermalexpansion.Coolant.addCoolant(ILiquidStack fluid, int coolantRf, int coolantFactor);
mods.thermalexpansion.Coolant.addCoolant(<liquid:lava>, 0, 1);


//Estos son dos de los valores que usa por defecto:
//mods. hermalexpansion.Coolant.addCoolant(<liquid:water>, 250000, 20);
//mods.thermalexpansion.Coolant.addCoolant(<liquid:cryotheum>, 30000, 60);
```

## Quitar refrigerante

Utilice esto para desenrollar un refrigerante existente del gerente.

```zenscript
//mods.thermalexpansion.Coolant.removeCoolant(ILiquidStack fluid);
mods.thermalexpansion.Coolant.removeCoolant(<liquid:water>);
```