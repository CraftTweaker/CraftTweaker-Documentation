# Registro Lubricante

## registrarse

| Tipo  | Tipo de Datos                               |
| ----- | ------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### Preface

La cantidad de fluido dado se utiliza cada 4 Ticks.

### Ejemplo de código:
```zenscript
mods.immersivepetroleum.Lubricant.register(IFluidStack lubricantEntry);
mods.immersivepetroleum.Lubricant.register(<fluid:lava> * 500);
```

## eliminar todo

### Ejemplo de código:
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
