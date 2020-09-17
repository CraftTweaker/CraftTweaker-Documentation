# Cañón

### Importando

```zenscript
importar mods.appliedenergistics2.Cannon;
```

### Agregando

Añade tipos de munición para el cañón de la materia. Peso se refiere a (ásperamente) el peso atómico del material.

```zenscript
Cannon.registerAmmo(munición ItemStack, doble peso);

Cannon.registerAmmo(<minecraft:bone>, 40.07);
```