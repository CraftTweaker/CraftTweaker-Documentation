# Registrar parte de la historia

La función IRegisterMaterialPart es una fucnción utilizada para registrar [Material Parts](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) añadidos usando un [PartType personalizado](/Mods/ContentTweaker/Materials/Parts/PartType/).

## Importando el paquete

Si alguna vez sientes la necesidad de importar la clase de esta función, aquí vas:

```zenscript
importar mods.contenttweaker.RegisterMaterialPart;
```

## Síntesis

Tenemos una función vacía, que toma como entrada una [Parte del Material](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) .  
Esta es la parte material que debe ser registrada.  
Por ejemplo, puede llamar a la [Fábrica de Vanilla](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) en este punto, pero cómo proceder de este punto depende realmente de usted.

```zenscript
function(materialPart) {
    //DoStuff
    return;
}
```