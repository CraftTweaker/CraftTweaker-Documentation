# Ores

**Necesita estar en `#loader preinit` o `#loader contenttweaker`**


## Paquete
```zenscript
`mods.exnihilocreatio.Ore`
```

## Métodos

- **Nombre de la cadena** Nombre de los trozos de mineral/piece/polvo/ingot
- **Color de cuerda** Color del material en hex.
- **[ItemStack](/Vanilla/Items/IItemStack/) salida** requiere un oredict.firstItem o errores.
- **Mapa la cadena[string]** Código de idioma y traducción.
- **Cadena oreDict** El nombre del dict que quieres.

## Adicional

```zenscript
mods.exnihilocreatio.Ore. ddReceta(String,
    Cadena,
    @Pila de objetos opcional,
    @Optional Map<string, String>,
    @Optional String);

mods. xnihilocreatio.Ore.addRecipe("Piedra",
    "63452D",
    <ore:stone>. irstItem,
    {
    "es_au": "StoneDownUnder"
    },
    "Piedra");
```

## Eliminar

```zenscript
mods.exnihilocreatio.Ore.removeAll();
```