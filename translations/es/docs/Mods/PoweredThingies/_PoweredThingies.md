# Cosas Desarrolladas

Las máquinas no agrícolas de Thingies apoyaron CraftTweaker.

### Mod Info

Forja de maleza: <https://minecraft.curseforge.com/projects/powered-thingies>

Github: <https://github.com/faceofcat/Tesla-Powered-Thingies>

Sitio web: [https://www.modcrafters.net](https://www.modcrafters.net/?mod=thingies)

### Métodos de integración CT

Todas las máquinas integradas con CT soportan estos métodos:

```zenscript
XYZ.clear() // borrará el registro de recetas completo
XYZ.logKeys() // mostrará todas las claves en ese registro al registro de CT
XYZ. emoveRecipe(key: String)) // removerá la receta con esa clave del registro
XYZ.addRecipe(...) // agregará una nueva receta
```

Para recuperar la clase `Tweaker` para cada máquina tienes que usar la clase static `mods.poweredthingies.Tweaker`.